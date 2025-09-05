---
slug: simple-led-color
title: Simple Color
tags: [Action Block, LED, Feedback, Workflow]
description: "The Simple Color Block changes the color the LED of your elemnt."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import SimpleColorBlock from './img/s_color.png'
import ColorPRExample from './img/s_color_adj.png'
import ColorStatePicker from './img/scolor_bar.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About LED Color" label="About LED Color" default>

Simple Color is on all elements by default. It's easy to use, but it allows you to make detailed adjustments to the element LEDs. You can set minimum, middle, and maximum colors and alpha values. For example, if you want to highlight when the encoder is in the middle position, you can assign a specific color to that point.

<ImageLightbox imageSrc={SimpleColorBlock} style={{width:300+'px'}} citation={'Simple Color Block on the Setup (formerly Init) Event'}/>

If you want to use coloring for value feedback, you can add minimum and middle value colors. By pressing the '+' button, you can assign these minimum and middle LED values.

<ImageLightbox imageSrc={ColorPRExample} style={{width:300+'px'}} citation={'By pressing the `+` button, you can add minimum and middle LED values'}/>

**The Block has several fields you can configure:**

- **Element** (hidden in Minimalist mode): defines which LED the Block should affect.
- **Layer** (hidden in Minimalist mode): can be either 1 or 2. The final color is based on the mix of both layers.
  - **1**: button and potmeter event layer
  - **2**: encoder and endless event layer
- **Color strip**: you can add or remove minimum and middle LED values and choose which to color in the color picker.
- **Color Mixer Type dropdown**: you can use RGB, Classic, or HSL style color picker.
- **Color Mixer**: you can type in your own RGB values or pick a color and alpha value.
- **Update intensity** (hidden in Minimalist mode): when enabled, the intensity will update automatically.

<ImageLightbox imageSrc={ColorStatePicker} style={{width:300+'px'}} citation={'Color strip'}/>

---

LED numbers are independent from control element numbers, but in the out of the box configurations we use the default "Auto (-1)" to address the LEDs, this way binding each LED to its respectable Control Element pair.

There exist two layers of color and intensity per each LED. The reason for this is so that Control Elements like an encoder have a layer for both button and encoder events to display values independently from each other. But especially on Control Elements that only use one layer by default you are free to use the second layer for a lot of other things.

</TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

## LED color

### led_color
- shortname: glc
- **How:** `led_color(layer,{red,green,blue, alfa},{red,green,blue, alfa},{red,green,blue, alfa})`
  - layer: integer, ranging 1...2 or -1 for auto color
  - red: integer, ranging 0...255 or -1 for auto color
  - green: integer, ranging 0...255 or -1 for auto color
  - blue: integer, ranging 0...255 or -1 for auto color
  - alfa: integer, ranging 0...1
- **What:** Sets the LED colors for the specified layer. Only the first color set is required; the second and third are optional.
- **Example:** `self:led_color(1, {255,0,0,1})` or `element[5]:led_color(1, {255,0,0,1}, {0,255,0,0.5})`

### led_value

- shortname: glp
- **How:** `led_value(layer, value)`
  - layer: integer, ranging 1...2 or -1 for auto update
  - value: integer, ranging 0...255 or -1 for auto update
- **What:** This function sets the LED light intensity according to the parameter called `value`. When this function is called without a parameter, it returns the `value` value of the control element.
- **Example:** `self:led_value(1, -1)`



</TabItem>
</Tabs>