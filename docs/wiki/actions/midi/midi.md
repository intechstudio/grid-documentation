---
slug: midi
title: MIDI
tags: [Action Block, MIDI]
---

This is the standard 7-bit MIDI mode. 

Parameters can have the following values:
1. Channel 
value range: 0-15 
This is translated in your DAW as channels 1-16.
2. Command 
value range: 128-255 
Most common command messages are: 
-- 192 - program change 
--- 176 - control change 
--- 144 - note-on 
--- 128 - note-off 
The control change command is often used by audio libraries and VST plugins. When the command parameter is set to control change, the Parameter 1 field can be used to set common Control Change (CC) values, like 1 for modulation, 7 for volume and 11 for expression.

3. Parameter 1 
value range: 0-127 
Depending on the Command field, values here represent Note (Pitch) or Control Change (CC) messages. 
--- Command = 176, CC values 
--- Command = 144 or 128, Note values

4. Parameter 2
value range: 0-127 
Depending on the Command field, values here represent Velocity or Control Value (CV) values. 
--- Command = 176, CV values
--- Command = 144 or 128, Velocity values

> Follow the official MIDI specifications for learning more about configuring MIDI. 

![standard 7bit](../../img/midi_action_standard.png)