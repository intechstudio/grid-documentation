---
slug: midirx-event
title: MIDI RX Event
tags: [Event, System Event, MIDI, Control Element, All modules]
description: "The MIDI RX Event is used for recieving MIDI messages from the Host device (computer)."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import midirxlocals from './img/midirx_locals.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---
:::info
> ⚠️ **Note:**  
> This feature has been deprecated since Editor **1.6.0**.  
> Please refer to the updated guide for MIDI RX: [MIDI RX Guide](https://docs.intech.studio/wiki/more/midi-rx-new/)
:::

<Tabs queryString="tab">
  <TabItem value="About MIDI RX Event" label="About MIDI RX event" default>

## Description

The MIDI RX Event is used for recieving MIDI messages from the Host device (computer).

This Event runs when MIDI information is received form the Host device, making this event necessary for setting up bi-directional commnication between devices.

:::tip Feature is now fully operational!
From firmware version v1.2.21 MIDI RX event should not overload the device anymore. If you're experiencing crashes from receiving MIDI on Grid you should update to the latest firmware!
:::

MIDI RX saves the incoming MIDI parameter values (MIDI Channel, MIDI command type, parameter 1, parameter 2) of received MIDI messages into local variables each time Grid receives a MIDI message.

<ImageLightbox imageSrc={midirxlocals} citation={'Incoming MIDI parameter values get saved into local variables on the Grid side'}/>

## Example

So for example an incoming CC message from the Host could look like something like this: 0, 176, 32, 127. You can check incoming messages in the MIDI monitor sidebar.

```lua title="MIDI RX Example"
RX  0  176 32  127  - INCOMING MIDI MESSAGE

local.ch=     0     - MIDI CHANNEL NUMBER
local.cmd=    176   - MIDI COMMAND TYPE
local.param1= 32    - MIDI COMMAND NUMBER
local.param2= 127   - MIDI COMMAND VALUE
```
The above is how it would look when the values are received and stored as local variables.

A frequent use-case for the MIDI RX event is one where the user wants the changes on the host side to be reflected on the Grid side as well. In this case the host has to send out MIDI CC messages corresponding to the change, and as the MIDI RX event runs each time a message is received, you would have to assign the received MIDI CC values to the correct knob and LED.

In this case this is very simple to do with just a code block containing the following lines:
```lua
element[num]:encoder_value(param2)
led_value(num, 2, param2)
```
Where **num** could be a specific control element you assigned the received values to.


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


### midirx enabled
- shortname: mre
- **How:** `midirx_enabled()`
  - 
- **What:** This function enables or disables MIDI RX functionality of Grid.
- **Example:**  Enable - `midirx_enabled(1)` , Disable - `midirx_enabled(0)

### midirx sync
- shortname: mrs
- **How:** `midirx_sync()`
  - 
- **What:** This function enables or disables whether Grid sends out a MIDI Clock sync signal to the host device.
This function is overriden, when MIDI RX is disabled as a whole.
- **Example:**  Enable - `midirx_sync(1)` , Disable - `midirx_sync(0)

</TabItem>
</Tabs>



