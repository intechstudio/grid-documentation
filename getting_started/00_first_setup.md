## Firmware Update

Grid Firmware is regularly updated. We introduce new features, stability improvements and bug fixes in each update. We highly recommend keeping your modules up-to-date, to ensure best performance and workflow compatiblity.

### Firmware Update Instructions

To update the firmware, you will need a Mac, Linux or Windows computer, your module(s) and a USB-C cable.

1. Go to [intech.studio/downloads#firmware](https://intech.studio/downloads#firmware)
2. Download and unzip the firmware
3. You will find a file named *grid_release.uf2*, this is the firmware file
4. Take ONE module at a time
5. Hold down the utility side button while plugging in the USB cable
6. All the LEDs should turn from red to green color
7. You should see GRID removable device on your desktop
8. Drag and drop the firmware file onto the removable device or copy and paste it
9. Wait for the upload, the module should reboot and light up in default page color
10. Repeat this step for all your modules

**Important:** All Grid modules used together should have the same firmware version installed. Grid Editor is developed toghether with the firmware, Grid Editor's version must match with the installed firmware version. If there is a mismatch, Grid Editor will give an alert.

### Upgrading from v1.1.9 and below to v1.2.X

With the latest Grid Editor and Grid Firmware releases, we have introduced breaking changes. If you have a module with older firmware, you should first hard reset all its configurations. Beware, all your existing configurations will be lost. 

To do so, you have to download the [*Recovery Firmware*](https://github.com/intechstudio/grid-fw/blob/master/binary/grid_nvm_hardware_test.uf2).
The firmware file is called *grid_nvm_hardware_test.uf2*.

1. To upload the reset firmware onto the module, follow the firmware update instructions above
2. After uploading, you should see the module's LEDs pulse in a white color 10 times
3. When the reset is finished, a red-green-blue sequence starts to play on the LEDs
4. Now you can download and upload the latest firmware with the name *grid_release.uf2*

Please contact us if you need any help with the update at support@intech.studio or on the [discord server](https://discord.gg/GRUdF2R).



