---
slug: nrpn-midi
title: NRPN
tags: [Action Block, MIDI]
description: "This Action Block will send out an NRPN MIDI message to the host on an event trigger. NRPN allows precise control over devices via MIDI."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import nrpnBlock from './img/nrpn.png'
import element14Bit from './img/element_14bit.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## NRPN - Non-Registered Parameter Number

<Tabs queryString="tab">
<TabItem value="About NRPN MIDI" label="About NRPN MIDI" default>

### NRPN - MIDI Message Format for Precise Device Control

NRPN messages extend the standard MIDI Control Change (CC) messages by using a pair of CC messages to control a wide range of parameters more precisely. NRPN is commonly used to control device-specific functions that go beyond what regular Control Change (CC) messages offer.

### Multiple Options for NRPN Control

There are two common options when sending NRPN messages. You can either provide the MSB and LSB or use dedicated NRPN CC commands.

This flexibility exists because manufacturers generally describe one of these methods in their documentation, allowing you to control NRPN parameters using the approach they specify.

<ImageLightbox imageSrc={nrpnBlock} style={{width:600+'px'}} citation={'NRPN MIDI block'}/>

To use this feature, **you must change the control element's resolution and maximum possible value**.
This can be done by dropping an Action Block under the Setup event.

<ImageLightbox imageSrc={element14Bit} style={{width:600+'px'}} citation={'On System event element settings cahnged max VAlue to 14Bit and Resolution to 10Bit'}/>

Due to the noisy nature of high resolution signal reads from control elements, we recommend to stay below 11-bit resolution.

- 7-bit resolution (base MIDI): 2^7 = 128
- 8-bit resolution: 2^8 = 256
- 9-bit resolution: 2^9 = 512
- 10-bit resolution: 2^10 = 1024
- 11-bit resolution: 2^11 = 2048
- 12-bit resolution: 2^12 = 4096

</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">

There is no Reference Manual Entry for this article.

</TabItem>
</Tabs>
