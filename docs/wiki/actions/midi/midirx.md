---
slug: midi-rx
title: MIDI RX (receiving)
tags: [Action Block, MIDI]
description: "This Action Block will send out an NRPN MIDI message to the host on an event trigger. NRPN allows precise control over devices via MIDI."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import nrpnBlock from './img/receive.png'
import element14Bit from './img/element_14bit.png'
import rx from './img/rx.png'
import relative from './img/relative.png'
import intensity from './img/intensity.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---



<Tabs queryString="tab">
<TabItem value="About NRPN MIDI" label="About NRPN MIDI" default>

## Description
**MIDI RX (MIDI Receive)** allows your controller to react to incoming MIDI messages from software or hardware. It can update LEDs and control elements in real time, keeping your controller synchronized with your setup.

### Parameters


The MIDI Block includes an LED and element value sync feature. If your DAW or hardware sends back the same MIDI message that the element transmits, the controller automatically keeps the LED state and element value synchronized.

<ImageLightbox imageSrc={nrpnBlock} style={{width:500+'px'}} citation={'MIDI block receive checkbox'}/>

### Tips for Using MIDI Sync

* **Absolute Mode**: Sync both the element value and LED intensity.
* **Relative Mode**: Sync the LED intensity and disable **Auto Intensity Update** in Simple Color.
* **Button (Toggle) Mode**: Usually, only LED intensity sync is required.
* **Button (Momentary) Mode**: Sync both the element value and LED intensity, and disable **Auto Intensity Update** in Simple Color.

**Relative Mode Example:**
<ImageLightbox imageSrc={relative} style={{width:300+'px'}} citation={'Encoder mode: Relative.'}/>
<ImageLightbox imageSrc={intensity} style={{width:300+'px'}} citation={'Simple Color block: turn off auto intensity.'}/>
<ImageLightbox imageSrc={rx} style={{width:300+'px'}} citation={'Receve MIDI: Sync LED intensity'}/>





</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">

```lua
self:midirx_register(-1, ch, command, param1, { value_sync = true/false, led_sync = true/false }, 0)
-- value_sync: enables value synchronization
-- led_sync: enables LED synchronization
```
  


</TabItem>
</Tabs>
