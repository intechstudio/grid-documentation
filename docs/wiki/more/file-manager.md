---
slug: file-manager
title: "More about: File Manager"
tags: [File System, Logic, Workflow]
description: Upload custom lua modules to your module.
---


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import export_configurations from './img/export_configurations.png'
import file_manager from './img/file_manager.png'
import file_on_module from './img/file_on_module.png'
import call_test_file_manager from './img/call_test_file_manager.png'



:::note
Grid Editor v1.6.6 is the first version including File Manager. We recommend version control over files uploaded to your device, as they are not saveable to Profile Cloud yet.

This is a first release, changes may happen.
:::

## Overview

To enable the **File Manger**, go to Package Manager and hit enable.

With the **File Manager**, it becomes possible to:
- Read in files from module
- Create lua files on module
- Browse and traverse the file system of the module
- Rename, Copy, Delete files on module

<ImageLightbox imageSrc={file_manager} />


:::important
The largest impact of the File Manager is the ability to **upload configurations which are longer than 900 character**.
:::

## File on module

- You can see the size of a lua file in the form bytes
- The file view format can be changed 
- A file's changes can be either saved or discarded

<ImageLightbox imageSrc={file_on_module} />

## How to use, File Manager example

1. Create a file on your module named `test.lua`.
2. Create a lua module on module *root*, which can be required 
    ```lua
    -- Paste this into "test.lua"
    local Module = {}
    function Module.testPrint(param)
    print(param)
    end
    return Module
    ```
3. On a control element, `require` the file using the standard lua I/O library and call the test function. **Omit the .lua extension.**
    ```
    local module = require("/test")
    module.testPrint("my-test")
    ```

<ImageLightbox imageSrc={call_test_file_manager} />


## Tips
- During development & testing, we found a sweetspot to create lua files which are under 15000 bytes. You can get away with large lua files, but pay attention to how much memory given module requires during runtime. A module often consumes more memory during initialization, while the luaVM doesn't run garbage collection.
- After calling and initializing your custom files, aim for on-module memory consumption of 135kb or less
- Increase the complexity of your code gradually. Although character limit is not stict, the memory constraint of Grid is a real constraint.
- You may need to manually call `collectgarbage("collect")` in your code
- Use version control for your files to backup
- If you break you configuration, you can perform an NVM erase on the module by quickly pressing the utility button right after connecting the USB cable.


### File Manager story
The luaVM on top of the firmware makes possible the full programmability of Grid devices. All action chains under events are lua code pieces. The code active on control elements are visible with the "Export Configurations" button on bottom right of the configiration panel. 

The **File Manager** shows something new: each of these configurations are living in a nested folder structure, each top level folder on a module is a Page, within a "Page folder" there are number of subfolders equivalent in number to the configurable control elements on the focused module. Going deeper, we can identify the configurations for the events.

Why is this interesting? It's a new way how we can see how configurations live on Grid and with time, this development will allow programmers to break out of the original element / event / action view of the Editor. 

<ImageLightbox imageSrc={export_configurations} />


