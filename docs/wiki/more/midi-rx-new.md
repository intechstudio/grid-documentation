---
title: "More about: Receiving MIDI - new"
slug: midi-rx-new
tags: [MIDI RX, Workflow]
description: Listen to MIDI messages on MIDI Rx and set values on control elements.
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import bu from './img/bu_midirx.png'
import en from './img/en_midirx.png'

# Bidirectional MIDI communication

Grid modules by default send out MIDI data with the MIDI action blocks, which are configured on the various events. 

In different environments - Digital Audio Workstations, VST Plugins, Host software - usually a MIDI *out*, *transmit* or a similar setting can be found. This setting will send back the changed MIDI data to the device, which has an active mapping with the changed parameter. Sometimes a parameter is not only controlled by Grid, but you change it with your keyboard or mouse. If you want to send back MIDI data to Grid, you have to find and enable this setting.



# Using the MIDI RX Callback in the System Element Setup

To handle incoming MIDI messages, you need to use the following callback function in the `System` element's `Setup`:

```lua
self.midirx_cb(self, event, header)
```

### `event` Table Structure

- `event[1]`: **Channel** (0–15)
- `event[2]`: **Command** (e.g., CC: 176, Note On: 144)
- `event[3]`: **Param1** (usually the CC or Note number)
- `event[4]`: **Param2** (usually the value)

### `header` Parameter

The `header` parameter is useful for filtering incoming messages.  
We typically use `header[1] = 13`, which means the message is coming from a DAW, synth, or other external gear.

---

## Simple Examples

### Example: Dynamic MIDI RX Mapping for BU16

You can upload the `BU16 MIDIRX` to the System element, which is ideal for dynamic factory profiles.

When you plug in one BU16 module, the first button (element 0) sends a MIDI Note On message (144) with note G#0 (32).

Since the controller sends note 32 and the DAW responds on the same note, you need to use `element_number` offset set to `-32`.  
This ensures that the first button (element 0) LED reflects the correct state based on the incoming note value.


<ImageLightbox imageSrc={bu} citation={"Button LED intensity based on incoming MIDI values"}/>

---

### Example: EN16


You can upload the `EN16 MIDIRX` to the System element, which is ideal for dynamic factory profiles.

The encoder rotation on the EN16 sends **Control Change (CC)** messages with command `176`.

The incoming MIDI message changes the element LED intensity and also the encoder value.

Since the controller sends note 32 and the DAW responds on the same CC, you need to use `element_number` offset set to `-32`.  
This ensures that the first encoder (element 0) LED reflects the correct state based on the incoming CC value.


<ImageLightbox imageSrc={en} citation={"LED intensity and Encoder value based on incoming MIDI values"}/>
