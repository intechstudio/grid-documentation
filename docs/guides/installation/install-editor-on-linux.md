---
title: Linux Guide
sidebar_position: 3
date: 2021-11-26
description: Grid Editor installation requirements, downloads, steps and general know-how under Linux.
slug: install-linux
---

import img1 from './img/linux-editor-install-allow.png'
import img2 from './img/windows-editor-install-finish.png'



import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

## Install requirements
- Internet access
- ~150MB disk space


[Download Grid Editor Linux](https://intech.studio/software-downloads)

The executable files for Linux install are hosted on GitHub.

### GUI Installation 


The installer is a .AppImage file, right click on it and select **Properties**. 
Choose the **Permissons** tab and allow execution of the file as program.

<ImageLightbox imageSrc={img1}/>

The application will open up once it finished loading.

### Installing via CLI

Alternatively, could also navigate to the folder of the downloaded AppImage and then run the following command to make it run as an application:

```bash
chmod a+x grid-editor-linux-*.AppImage 
```

Then run the application:

```bash
./grid-editor-linux-*.AppImage #make sure to replace the * with the specific version number you want to run
```

## Adding user to the dialout group

You will have to grant user access to the serial port by adding user to the dialout group.

```bash
sudo usermod -aG dialout $USER
 ```

 Log out and log back in or restart your computer to make it take effect.

## Troubleshooting

### FUSE not installed

Running the application using the terminal might show the following error:

```bash
dlopen(): error loading libfuse.so.2

AppImages require FUSE to run. 
You might still be able to extract the contents of this AppImage 
if you run it with the --appimage-extract option. 
See https://github.com/AppImage/AppImageKit/wiki/FUSE 
for more information
```

The above indicates FUSE (or fuse-lib) missing, please install the missing dependencies, you can [find the dependencies for each distribution here.](https://github.com/AppImage/AppImageKit/wiki/FUSE)

### Serial port remains inaccessible

It's possible that you haven't used any similar serial USB devices like Grid before. You may need to enable serial read/write for USB devices.

The easy way:

`sudoedit /etc/udev/rules.d/50-myusb.rules`

Save this text:

`KERNEL=="ttyUSB[0-9]*",MODE="0666"`

`KERNEL=="ttyACM[0-9]*",MODE="0666"`


Unplug the device and replug it, and it should be read/write from any user!

 
