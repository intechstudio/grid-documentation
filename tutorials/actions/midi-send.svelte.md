---
layout:   reference_manual
title:    MIDI Send
slug:     action-midi-send
category: tutorials
---

## The MIDI action block

Default MIDI action takes the values calculated from the Locals action and upon the potmeter event trigger - on interaction with the control element - will send MIDI data to the connected host. The MIDI action block has 3 modes.

> All MIDI configurations can be debugged within Grid Editor's MIDI monitor.

### MIDI - This is the standard 7-bit MIDI mode. 
Parameters can have the following values:
1. Channel <br>
value range: 0-15 <br>
This is translated in your DAW as channels 1-16.
2. Command <br>
value range: 128-255 <br>
Most common command messages are: <br>
-- 192 - program change <br>
--- 176 - control change <br>
--- 144 - note-on <br>
--- 128 - note-off <br>
The control change command is often used by audio libraries and VST plugins. When the command parameter is set to control change, the Parameter 1 field can be used to set common Control Change (CC) values, like 1 for modulation, 7 for volume and 11 for expression.

3. Parameter 1 <br>
value range: 0-127 <br>
Depending on the Command field, values here represent Note (Pitch) or Control Change (CC) messages. <br>
--- Command = 176, CC values <br>
--- Command = 144 or 128, Note values <br>

4. Parameter 2
value range: 0-127 <br>
Depending on the Command field, values here represent Velocity or Control Value (CV) values. <br>
--- Command = 176, CV values <br>
--- Command = 144 or 128, Velocity values <br>

> Follow the official MIDI specifications for learning more about configuring MIDI. <br>

![](/images/docs/midi_action_standard.png)

### 14 bit MIDI - High resolution MIDI message format.
To use this feature, **you must change the control element's resolution and maximum possible value**. 
This can be done by dropping a Potmeter Mode action block under the init event.

Due to the noisy nature of high resolution signal reads from control elements, we recommend to stay below 11-bit resolution.

- 7-bit resolution (base MIDI): 2^7 = 128
- 8-bit resolution: 2^8 = 256
- 9-bit resolution: 2^9 = 512
- 10-bit resolution: 2^10 = 1024
- 11-bit resolution: 2^11 = 2048
- 12-bit resolution: 2^12 = 4096

Please note, as the least significant bit (LSB) and most significant bit (MSB) calculations happen in the background with a CC offset of 32, the second parameter CC number can't be larger than 95.

![](/images/docs/midi_action_14bit.png)

### SysEx - System Exclusive MIDI messages
In SysEx mode, you can both enter SysEx values based on an instrument's specifications or use variables calculated in the action chain.

In example `0xF0, 0x41, 0x10, val, 0xF7` val is a variable declared locally.

![](/images/docs/midi_action_sysex.png)