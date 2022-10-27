---
title: Troubleshooting
date: 2021-11-26
sidebar_position: 5
description: List of possible troubleshoot resolutions on Mac OS, Windows and Linux.
---

## Windows System Issues

List of possible windows issues and their resolution.

### Windows 7 does not recognize your device
Using windows 7 in 2021 is brave! It can be that you will need to install a serial driver to get started using Grid Editor. Link is on our github.


[Download the Drivers](https://github.com/intechstudio/grid-fw/tree/master/Drivers/intech)

## Mac OS Issues

List of possible Mac OS issues and their resolution.

### Grid does not show up as MIDI device

Your system may have specific MIDI routing or configuration set up with your existing devices. In the Audio MIDI Setup application you can try to add **Intech Studio: AC** as a MIDI device for your config.

[See the Apple Documentation](https://support.apple.com/guide/audio-midi-setup/set-up-midi-devices-ams875bae1e0/mac)

### Grid interfering with Vodafone ZTE/Huawei driver

Your system may have existing preference, configurations, drivers or other software installed which blocks serial device enumeration for Grid.

For debugging sessions:
`kextfind -report -b -loaded | sort |grep yes |grep -v com.apple` will show you the loaded kernel extensions that are not from apple, whereas e.g. `pkgutil --pkgs | grep -i novamedia` followed by `pkgutil --files de.novamedia.driver.pkg` will show you the list of files to delete (when installed through a .pkg). After deleting stuff manually, remember to `pkgutil --forget de.novamedia.driver.pkg` to remove it from the list of installed packages after you finish.

Extensions are located in `/System/Library/Extensions` or `/Library/Extensions`. Go there and e.g. `kextunload /System/Library/Extensions/de.novamedia.driver.NMUSBCDCACMData.kext` before deleting the .kext directory.

## Linux Issues

List of possible Mac OS issues and their resolution.

### User has no access to serial ports, and therefore to serial devices like Grid | Grid not visible in Editor on Linux

If you're using a Linux system, it might be possible you have no access to serial ports and this is why when connecting a Grid module to your system it still isn't visible in Grid Editor.

To enable serial access, try the following steps:

- Close Grid Editor if you still have it open.
- Open up terminal and type in the following command: `sudo adduser $whoami dialout` 
- This will add the current user to the dialout group which you'll need to have access to serial ports on Linux.
- Log out and the log in again.
- Relaunch Grid Editor and the module should be showing up now.

## Firmware

List of possible firmware update issues and their resolution.

### Device does not show up as removable device

Reboot your computer. Make sure you connect your module directly to your computer. Check if the utility side button moves freely and it is not stuck. For each time you connect the module, wait 5 seconds to see the device showing up. Repeat the connection step based on the firmware update document multiple times, it can be that it will show up after a couple tries. Try a different computer.