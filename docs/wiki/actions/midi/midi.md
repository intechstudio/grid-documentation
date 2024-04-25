---
slug: midi
title: MIDI
tags: [Action Block, MIDI]
description: "This Action Block will send out a MIDI message to the host on an Event trigger. This is the standard 7-bit MIDI mode. "
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
<TabItem value="About MIDI" label="About MIDI" default>


This Action Block will send out a MIDI message to the host on an Event trigger. This is the standard 7-bit MIDI mode. 

![standard 7bit](../../img/midi_action_standard.png)

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

If you want to learn how to set up a Grid configuration for hardware MIDI devices, please check out the [Advanced Guide](/docs/guides/grid/grid-adv/advanced.md) in the guides section.

> Follow the official MIDI specifications for learning more about configuring MIDI. 



</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">


### midi send
- shortname: gms
- **How:** `midi_send(channel,command,parameter1,parameter2)`
  - channel: integer, ranging 0...15
  - command: integer, ranging 128...255
  - parameter1: integer, ranging 0...127
  - parameter2 integer, ranging 0...127
- **What:** This function sends a MIDI command when called. Channel specifies the MIDI channel the command is sent on and parameters 1 (value ranges from 0 to 127) and 2 (value ranges from 0 to 127).
- **Example:** 


</TabItem>
</Tabs>



