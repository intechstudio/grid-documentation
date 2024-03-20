---
slug: lookup-variables
title: Lookup Variables
tags: [Action Block, Variables, Logic, Workflow]
description: "Lookup redistributes received values to variables"
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import lookup from './img/lookup.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Lookup" label="About Lookup" default>

## Description

The Lookup Action allows you to assign values to different parameters from variables used elsewhere.

It's mostly used in creating a translation layer between the host device and Grid when receiving MIDI values using [MIDI RX](/docs/wiki/events/system-events/midirx-event.md). In this use-case the Lookup takes the MIDI param1 by default (for CC messages this is the CC number) and allows the user to assign those param1 values to be sent to different "destinations", in this case to different knobs on a Grid module.

<ImageLightbox imageSrc={lookup} citation={'Lookup Action redirecting the values CC 36 and 37 to num 0 and 1'}/>

So in a default MIDI RX setup an EN16 module would send and receive values from the host and changes made to the assigned parameters on either the host or the controller would be reflected on both devices.

</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">

### lookup

- shortname: glut
- **How:** `lookup(parameter1,,,,)`
  - 
- **What:** This function recieves and assigns recieved MIDI values from a computer into variables within Grid memory.
- **Example:** 


</TabItem>
</Tabs>


