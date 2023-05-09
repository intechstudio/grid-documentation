---
layout: docs
sidebar_position: 3
title: "Grid: Bootloader Updating"
description: Manual bootloader update steps for Grid Modular Controllers.
---

import img4 from './img/utility_conn.gif'

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox'


:::caution Firmware Crash issue, Grid Editor disconnects, module appears dead

This issue arises because of an outdated bootloader version, and causes frequent firmware crashes on module boot. This results in modules booting into black LEDs as if the module was off.

**All Grid modules in the wild are affected by the outdated bootloader issue, so updating to the current version is strongly recommended!**

This update should permanently fix the current issue of modules dropping out/crashing/requiring frequent FW updates and so on.
Even so, if you encounter any unexpected behavior, please drop us a mail to support@intech.studio!

:::




## Bootloader update step-by-step

1. Download the new bootloader release from our Git [here](https://github.com/intechstudio/uf2-samdx1/releases) or from a direct link to the file [here](https://github.com/intechstudio/uf2-samdx1/releases/download/v1.23.4/grid_uf2_release.zip.).
2. Decompress the archive and find the file named "update-bootloader-intech_grid-v1.23.4.uf2".
3. Connect a module you want to update to your computer as if you were doing a manual firmware update explained [here](https://grid-documentation.onrender.com/guides/troubleshooting/firmware#%EF%B8%8F-updating-the-firmware-manually); by following the steps from point 3 to point 6 (plug in the module while holding the utility button on the side and wait for it to boot with green LEDs).

<ImageLightbox imageSrc={img4} citation={'Hold down the utility side button while plugging in the USB cable and wait for the LEDs to turn green'}/>

4. If you've done everything correctly so far, the module should show up in your computer's explorer as a removable device named "GRID".
5. Drag and drop the file we've located earlier named "update-bootloader-intech_grid-v1.23.4.uf2" to the removable device named "GRID". This will start the update process, don't disconnect the module during this time!
6.  If the update finished successfully, the module should still be connected to your computer in bootloader mode, but it device name should now be "GRID23".
7.  The bootloader update process requires you to update the firmware of the module as well. Follow the guide above or use Grid Editor to update to the latest firmware version.
8.  After the FW update the module should boot normally and you're done!

## Potential issues after a bootloader update

Some user were reportedly not able to run the firmware update properly after the bootloader update. This caused them to arrive at a similar module state with black LEDs.

For this issue the following fix should be applied before finishing **Step 7** in the previous part of this guide.

Update the module with the **recovery firmware** found [here](https://github.com/intechstudio/grid-fw/raw/master/.archive/binary/grid_nvm_hardware_test.uf2) following the [guide here](https://grid-documentation.onrender.com/guides/troubleshooting/firmware) on updating the Grid Firmware either manually or with the use of Grid Editor.

Recovery firmware boots the module into a state where colors will appear on the LEDs of the module as a sort of "demo mode". After you see this state please continue the guide above from **Step 7**.