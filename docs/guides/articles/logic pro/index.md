---
title: "Logic Pro"
sidebar-position: 1
description: "Logic Pro MCU setup"
slug: logic-pro-mcu-setup
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import midiIn from './img/midi_in.png'
import mcugrid from './img/mcugrid.png'

---

## Overview

This guide will walk you through how to fully assign Logic Pro control via Grid using the MCU protocol. It will automatically map the faders, bank switching, track control, pan, plugin control, and more.

You can use this setup with either one EF44 or two EF44 units. Additionally, you can enhance functionality by adding a BU16 to control encoders and faders behaviour. If you're using a TEK2 or VSN1, you can also add a Time Scrub feature, which allows for easy navigation along the timeline in Logic Pro.

## Setup in Grid Editor

1. In the Grid Editor, upload the profiles for the following modules:
   - **Logic Control MCU** for the primary setup.
   - **Logic MCU Timeline Scrub Wheel** for TEK2 or VSN1.

## Setup in Logic Pro

To integrate the Grid as an MCU controller in Logic Pro, follow these steps:

1. Enable MIDI communication with Grid:

   - Go to **Logic Pro > Settings > MIDI** and select Grid as the input device.
     <ImageLightbox imageSrc={midiIn} style={{height:500+'px'}} citation={"Grid MIDI input device"} />

2. Configure Logic Pro for MCU control:

   - Navigate to **Logic Pro > Control Surface > Setup...**
   - Click **New > Install**, select **MCU Pro**, and click **Add**.
   - Select the device **Input port** as **Grid**.

   <ImageLightbox imageSrc={mcugrid} style={{height:500+'px'}} citation={""} />

This will enable seamless communication between your Grid and Logic Pro for full control.
