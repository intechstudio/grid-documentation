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
- Ubuntu distribution


[Download Grid Editor Linux](https://intech.studio/support-and-downloads#editor-software)

The executable files for Linux install are hosted on GitHub.

## Installation

The installer is a .AppImage file, right click on it and select **Properties**. 
Choose the **Permissons** tab and allow execution of the file as program.

<ImageLightbox imageSrc={img1}/>

The application will open up once it finished loading. A similar view should be on your desktop.

<ImageLightbox imageSrc={img2} citation={'A fresh Editor install'}/>

## Allow Serial Port

It's possible that you haven't used any similar serial USB devices like Grid before. You may need to enable serial read/write for USB devices.

The easy way:

`sudoedit /etc/udev/rules.d/50-myusb.rules`

Save this text:

`KERNEL=="ttyUSB[0-9]*",MODE="0666"`

`KERNEL=="ttyACM[0-9]*",MODE="0666"`


Unplug the device and replug it, and it should be read/write from any user!

 
