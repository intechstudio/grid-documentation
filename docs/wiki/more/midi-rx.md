---
title: "MIDI RX (Sysex and RX callback)"
slug: "midi-rx"
tags: [MIDI RX, Workflow]
description: Listen to incoming MIDI messages.
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import bu from './img/bu_midirx.png'
import en from './img/en_midirx.png'
import pc from './img/pc_example.png'

**For easy use, MIDI RX is accessible without coding:** [MIDI RX Block](https://docs.intech.studio/wiki/actions/midi/midi-rx)

Below are some examples of using the MIDI RX callback and the MIDI SysEx RX callback.

### Using the MIDI RX Callback in the System Element Setup
To handle incoming MIDI messages, you need to use the following callback function in the System element's Setup:

self.midirx_cb(self, header, event)

#### `header` Parameter

The `header` parameter is useful for filtering incoming messages.
We typically use `header[1] = 13`, which means the message is coming from a DAW, synth, or other external gear.

#### `event` Table Structure

- `event[1]`: **Channel** (0–15)
- `event[2]`: **Command** (e.g., CC: 176, Note On: 144)
- `event[3]`: **Param1** (usually the CC or Note number)
- `event[4]`: **Param2** (usually the value)

---



### Example: How to Receive Program Change Messages with Encoder

<ImageLightbox imageSrc={pc} style={{width:500+'px'}} citation={'MIDI RX callback'}/>

#### 1. Load the Correct Profile
- Load the profile from Profile Cloud: **"midi rx program change"**.

#### 2. Enable Advanced Editing
- In the **editor (top-right corner)**, turn **OFF Minimalist Mode**.
- Go to:
  - **Encoder → Setup**
- You will see the **code blocks**.

#### 3. Understand the Parameters
- `parameter == 0`  
  → corresponds to **Program Change (Pgm1)** in Ableton.
- `self.cc == 1`  
  → means the encoder sends on **CC 1**.

#### 4. Prepare Ableton Live
- Open **Preferences → MIDI**.
- Enable:
  - ✅ **Track**
  - ✅ **Sync**
- Enable these for the MIDI port connected to Grid.

#### 5. Send Program Change from Ableton
1. Create a **new MIDI Track**.
2. Create a **MIDI Clip**.
3. Start the clip.
4. Insert **Program Change messages**:
   - Bank: **1 Sub**
   - Programs: **1 / 2 / 3** (or as needed)

#### 6. Set the MIDI Channel (Optional)
- In the code:
channel == 0

means **MIDI Channel 1**.
- Change this value if you want to receive messages on another channel.

## Receiving Sysex

Usually, you have a custom SysEx implementation. You can use this function, which listens to MIDI SysEx messages. From there, you can parse them and, for example, use them to update Element values.

```
self.sysexrx_cb = function(self, header, sysex)
    print(sysex)
end
```

Example:

```
self.sysexrx_cb = function(self, header, sysex)
  -- Convert hex string to bytes
  local bytes = {}
  for hex_byte in sysex:gmatch("%x%x") do
    bytes[#bytes + 1] = tonumber(hex_byte, 16)
  end
  -- Extract data
  local data = {}
  for i = 5, #bytes - 1 do
    data[#data + 1] = bytes[i]
  end
  print("Manufacturer:", bytes[2])
  print("Device ID:", bytes[3])
  print("Command:", bytes[4])
  print("Data bytes:", #data)
  -- Print data
  if #data > 0 then
    for i = 1, #data do
      print("Data[" .. i .. "]:", data[i])
    end
  end
end
```
