---
title: Inter-Grid communication
slug: immediate-send-explainer
description: How to set variables and execute functions on multiple Grid modules at the same time
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import img1 from './img/im_send.gif'

*Ever wanted to just press a button on one module that would change how another one behaves? Well, now you can.*

---



## The immediate_send() function

As of Grid Editor version 1.3, you'll be able to find a new function that's called:

```lua
immediate_send('lua code')
-- here 'lua code' can be anything that you would normally write in the code editor of Grid Editor
```

This function immediately forces all connected modules in a Grid setup to run a **lua code** snippet given between the two apostrophes of the function argument.

:::caution **Early feature**

This function currently requires you to be running a nightly version of the Grid firmware. You might experience bugs or performance related issues, but the nightly version should not be any less stable than the release version of the firmware.

You can find the nightly firmware version here:
[for NEW Grid modules](https://github.com/intechstudio/grid-fw/raw/preview/Preview/Firmware/grid_esp32_nightly.uf2) and [for Grid modules sold before May of 2023.](https://github.com/intechstudio/grid-fw/raw/preview/Preview/Firmware/grid_d51_nightly.uf2)

:::


## What's this for?

This new function allows you to share data between modules in a way that wasn't really possible before.

Now, creating new functions that all modules understand equally, or setting variables that stay in sync no matter which module you change them on (as long as you keep telling the others it changed) should be a lot easier to implement, thanks to `immediate_send()`.


## How immediate_send() works

The function will send to all modules (yes, to itself as well) a text string which they will immediately execute.

Try out the examples below in Grid Editor! That string will have to be a lua code snippet like so:

```lua
immediate_send('print("Hello world!")') 
-- we should see 'Hello world!' appear in the debug monitor the same amount of times as we have modules connected
```
```lua
immediate_send('print(module_position_x())') 
-- here we should see the position of our connected modules in the debug monitor on the x axis
```
```lua
immediate_send('print("I am the " .. module_position_x() .. ". module on the X axis.")') 
-- and this one should combine the two functions above
```

We can and will have to use the ` .. ` concatenation operator where we want to string (heh) together multiple elements into a string which we send out in the end.



Remember that the modules on the receiving end, will interpret everything as ONE string. Meaning when wanting to use variables in arguments of functions you will have to use the ` .. ` operator AND add commas in between as well like this:

```lua
immediate_send('led_value(0,2' .. val .. ')')
-- this function controls the LED brightness on all connected modules, based on the state of the control element sending out the above function
```

## Things to try 


Try using the above function in a Code Block on a potentiometer and watch the first LED get brighter on each module in your setup!

<ImageLightbox imageSrc={img1} citation={"Setting LED colors on all connected Grid modules with just one fader!"}/>
