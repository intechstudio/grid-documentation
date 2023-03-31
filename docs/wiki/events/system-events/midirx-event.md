---
slug: midirx-event
title: MIDI RX Event
tags: [Event, System Event, MIDI, Control Element, All modules]
description: "The MIDI RX Event is used for recieving MIDI messages from the Host device (computer)."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About MIDI RX Event" label="About MIDI RX event" default>


The MIDI RX Event is used for recieving MIDI messages from the Host device (computer).


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


### midirx enabled
- shortname: mre
- **How:** `midirx_enabled()`
  - 
- **What:** This function enables or disables MIDI RX functionality of Grid.
- **Example:** 

### midirx sync
- shortname: mrs
- **How:** `midirx_sync()`
  - 
- **What:** This function enables or disables whether Grid sends out a MIDI Clock sync signal to the host device.
This function is overriden, when MIDI RX is disabled as a whole.
- **Example:** 

</TabItem>
</Tabs>



