---
slug: midi-14bit
title: 14-bit MIDI
tags: [Action Block, MIDI]
description: "This Action Block will send out a MIDI message to the host on an Event trigger. This is the highres 14-bit MIDI mode. "
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About 14bit MIDI" label="About 14bit MIDI" default>

### 14 bit MIDI - High resolution MIDI message format.

To use this feature, **you must change the control element's resolution and maximum possible value**.
This can be done by dropping a Potmeter Mode action block under the Setup event.

Due to the noisy nature of high resolution signal reads from control elements, we recommend to stay below 11-bit resolution.

- 7-bit resolution (base MIDI): 2^7 = 128
- 8-bit resolution: 2^8 = 256
- 9-bit resolution: 2^9 = 512
- 10-bit resolution: 2^10 = 1024
- 11-bit resolution: 2^11 = 2048
- 12-bit resolution: 2^12 = 4096

Please note, as the least significant bit (LSB) and most significant bit (MSB) calculations happen in the background with a CC offset of 32, the second parameter CC number can't be larger than 95.

![14bit midi](../../img/midi_action_14bit.png)

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

There is no Reference Manual Entry for this article.

  </TabItem>
</Tabs>
