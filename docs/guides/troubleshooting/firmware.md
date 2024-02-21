---
layout: docs
sidebar_position: 1
title: "Grid: Updating the firmware"
date: 2021-11-25
description: Manual firmware update steps for Grid controllers.
---
import img1 from './img/firmware_mismatch.png'
import img2 from './img/bootloader_detected_update_start.png'
import img3 from './img/update_success.png'
import img4 from './img/utility_conn.gif'

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

Grid Firmware is often updated. We introduce new features, stability improvements and bug fixes in each update. We highly recommend keeping your modules up-to-date, to ensure best performance and workflow compatibility. When you connect the modules while Grid Editor is running it will warn you if you are using an outdated firmware version.

> All your modules must have the same firmware version installed!

## Updating the firmware using Grid Editor

Whenever you're prompted with the 'Oops, firmware mismatch detected' message while running Grid Editor means you have a module plugged in with an outdated firmware version compared to Editor.

The mismatched module will be highlighted with red color, like this:

<ImageLightbox imageSrc={img1} citation={'Modules running outdated firmware versions are highlighted in red'}/>

Gird Editor can update your module firmware automatically if you follow the on-screen messages at the top.

Reconnect the mismatched module (and that module only) while holding down the utility button on the side of the module.

After connecting you'll be prompted with a message in blue, asking whether you want to start the update. Press 'Update Firmware'.

<ImageLightbox imageSrc={img2} citation={'Updating the firmware using Editor'}/>

Don't disconnect the module while the update is running or the update will fail.

When the update is complete, you will be prompted with a message in green color and the module will show up again in the Editor.

<ImageLightbox imageSrc={img3} citation={'A freshly updated module'}/>

Congratulations! You've successfully updated the firmware of your module.

If you have multiple modules with firmware mismatches, you'll have to repeat this process one-by-one from the beginning.

## ⬇️ Updating the firmware manually

You can find the firmware versions hosted on GitHub. Click the button below to download the **latest** version.

[Grid Firmware Releases](https://github.com/intechstudio/grid-fw/releases)

## 💾 Install steps

Follow carefully the steps below, connect your Grid module directly to your compute at step 4.

1. Unzip the downloaded firmware archive .zip file
2. You will find files named grid_release.uf2, these are files you'll need for the firmware update process

:::caution Be careful!
Choosing the incorrect binary will cause the FW update to fail, so please follow the instructions outlined below!
:::

:::info How to choose the correct binary
You might find multiple binary files in the .zip file, choose the one corresponding to the information in the file named "INFO_UF2.TXT" on the GRID removable device.

You can check the file when Grid is connected in bootloader mode.

It will tell you if it's either SAMD51 or ESP32.

Use the binary for the firmware update matching the name of the MCU in the module you're updating.
:::

3. Update the modules one-by-one, only plugging in only one at a time
4. Hold down the utility side button while plugging in the USB cable
5. All the LEDs should turn from red to green color, indicating successful enumeration

<ImageLightbox imageSrc={img4} citation={'Hold down the utility side button while plugging in the USB cable and wait for the LEDs to turn green'}/>

6. You should see GRID removable device on your desktop
7. Drag and drop the firmware file onto the removable device or copy and paste it
8. Wait for the upload, the module should reboot and light up in default page color (blue)
9. Repeat this step for all your modules
