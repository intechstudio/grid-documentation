---
slug: simple-led-intensity
title: Simple Intensity
tags: [Action Block, LED, Feedback, Workflow]
description: "The Simple Intensity Block changes the intensity the LED of an elemnt."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import SimpleIntensityBlock from './img/Simple_intensity_Block.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About LED Color" label="About LED Color" default>

**Simple Color** is an action block for controlling only the intensity of an element's LED. It makes it easy to control the LED intensity of one element from another element.

Since the [Simple Color](https://docs.intech.studio/wiki/actions/led/simple-led-color/) block already contains the Intensity information, you only need to use Simple Intensity when you want to define how the LED intensity should behave.


<ImageLightbox imageSrc={SimpleIntensityBlock} style={{width:500+'px'}} citation={'Simple Intensity Block'}/>

**The Block has several fields you can configure:**

- **Element** (hidden in Minimalist mode): defines which LED the Block should affect.
- **Layer** (hidden in Minimalist mode): can be either 1 or 2. The final color is based on the mix of both layers.
  - **1**: button and potmeter event layer
  - **2**: encoder and endless event layer
- **Intensity**: Led Intensiry value.

</TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

## LED color

### led_value

- shortname: glp
- **How:** `led_value(layer, value)`
  - layer: integer, ranging 1...2 or -1 for auto update
  - value: integer, ranging 0...255 or -1 for auto update
- **What:** This function sets the LED light intensity according to the parameter called `value`. When this function is called without a parameter, it returns the `value` value of the control element.
- **Example:** `self:led_value(1, -1)`



</TabItem>
</Tabs>