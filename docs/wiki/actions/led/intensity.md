---
slug: led-intensity
title: Intensity
tags: [Action Block, LED, Feedback, Workflow]
description: "The Intensity Block changes the light intensity the LED of your choice when this action runs."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import IntensityInit from './img/intensity_init_block.png'
import IntensityExample from './img/intensity_example.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About LED Intensity" label="About LED Intensity" default>


The Intensity Block changes the light intensity the LED of your choice when this action runs.

Intensity Blocks by default are found on the Init Event of each Control Element. This is to give a default light intensity to each module on startup. If you just want to change how your module looks, we advise to change things here.

<ImageLightbox imageSrc={IntensityInit} style={{width:350+'px'}} citation={'Intensity on Init Event with custom intensity value'}/>


The Block has a couple of fields you can configure:
- LED number: which LED should the Block affect
- layer: either 1 or 2, the final color is based on the mixed colors of the two layers
  - 1: button and potmeter event layer
  - 2: encoder event layer
- intensity value: how strong should the LED light intensity be

Both the LED number and the intensity value is by default bound to the Control Element number and the Control Element Value through the local variables [num and val](../variables/local-variables.md). This way is to support the out of the box experience, but you can change this however you'd like.

<ImageLightbox imageSrc={IntensityExample} style={{width:350+'px'}} citation={'Example: If the potmeter value below 64 then Intensity is low, else Intensity is max'}/>



  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

## LED intensity

### led_value
  - shortname: glp
  - **How:** `led_value()` or `led_value(lnum,layer,value)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - phase: integer, ranging 0...255
  - **What:** This function sets the LED light intensity according to the parameter called `value`. When this function is called without a parameter, it returns the `value` value of the control element.
  - **Example:** Inputting the `led_value(num,1,128-val)` into a Code Block makes the LED light intensity on let's say a potentiometer control element change opposite of value, as it will have maximum light intensity at minimum value and maximum light intensity at minimum value. 

### led_timeout
  - shortname: glt <!-- will be setter getter -->
  - **How:** `led_timeout(lnum,layer,timeout)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - timeout: integer, ranging 0...65535
  - **What:** This function sets a timeout for the `led_animation_rate` function. The timeout field sets the end of the `led_animation_rate` frequency change, given in frames. Timeout will count down each frame from the the `timeout` parameter given and when it reaches 0, it changes the frequency to 0. <!-- amikor a timeout értéke 0ra csökken akkor automatikusan 0-ra áll a frequency, phase marad ott ahol éppen volt -->
  - **Example:** `led_animation_rate(num,1,1)` and `led_timeout(num,1,257)` will set a pulsing LED phase change that will increase LED light intensity to the max and then reset is to minimum intensity (when the timeout variable overflows from 256 to 257).



  </TabItem>
</Tabs>


