---
layout: docs
sidebar_position: 3
title: "Grid: Bootloader Updating"
description: Manual bootloader update steps for Grid Modular Controllers.
---

import img4 from './img/utility_conn.gif'

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox'


:::caution Firmware Crash issue, for Grid modules purchased before May of 2023

The bootloader update described below will help solve the following:  Grid Editor disconnects, D51 arch module appears dead, LEDs only flicker for a split second before turning off when module is plugged in.


This issue arises because of an outdated bootloader version, and causes frequent firmware crashes on module boot. This results in modules booting into black LEDs as if the module was off.

**All Grid modules in the wild are affected by the outdated bootloader issue, so updating to the current version is strongly recommended!**

This update should permanently fix the current issue of modules dropping out/crashing/requiring frequent FW updates and so on.
Even so, if you encounter any unexpected behavior, please drop us a mail to support@intech.studio!

:::




## Bootloader update step-by-step

1. Download the new bootloader update <a target="_blank" href="/presets/update-bootloader-intech_grid-v1.23.4.uf2" download="update-bootloader-intech_grid-v1.23.4.uf2"> by clicking here</a> (release on GitHub [here](https://github.com/intechstudio/uf2-samdx1/releases)).
<!---2. Decompress the archive and find the file named "update-bootloader-intech_grid-v1.23.4.uf2".--->
2. Plug in the module **while holding the small button** on the side and wait for it to boot with **green LEDs**

<ImageLightbox imageSrc={img4} citation={'Hold down the utility side button while plugging in the USB cable and wait for the LEDs to turn green'}/>

3. The module should now show up in your computer's file explorer/finder as the device "**GRID**".
4. **Drag and drop** or copy the bootloader file to "**GRID**".
5. Now the **update should be completed** and after that device name should now be "**GRID23**" instead.
6.  Grid will be missing a firmware, please use [Grid Editor update the firmware](/docs/guides/troubleshooting/firmware.md) of the module.
7.  After the FW update the module should boot normally and you're done!

## Potential issues after a bootloader update

Some users were reportedly not able to run the firmware update properly after the bootloader update. This caused them to arrive at a similar module state each time with black LEDs.

If you're not able to finish the update successfully, please drop us a mail to support@intech.studio!


<!--
### Recovery firmware to clear up memory

Update the module with the **recovery firmware** found [here](https://github.com/intechstudio/grid-fw/raw/master/.archive/binary/grid_nvm_hardware_test.uf2) following the [guide here](https://grid-documentation.onrender.com/guides/troubleshooting/firmware) on updating the Grid Firmware either manually.

Recovery firmware boots the module into a state where colors (white first, then RGB) will appear on all LEDs of the module as a sort of "demo mode". After you see this state, the memory has been wiped and you can continue the guide above from **Step 6**.

-->