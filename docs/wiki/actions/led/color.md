---
slug: led-color
title: Color
tags: [Action Block, LED, Feedback, Workflow]
description: "The Color Block changes the color the LED of your choice when this action runs."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import ColorBlock from './img/color_action_crop.png'
import ColorPRExample from './img/color_pr_example.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About LED Color" label="About LED Color" default>

The Color Block changes the color the LED of your choice when this action runs.

Color Blocks by default are found on the Setup Event of each Control Element. This is to give a default coloring to each module on startup. If you just want to change how your module looks, we advise to change things here.

<ImageLightbox imageSrc={ColorBlock} style={{width:300+'px'}} citation={'Color Block on the Setup (formerly Init) Event'}/>

If you want to use coloring for value feedback, you should probably do that on the Control Element Events, where the value changes happen. Remember, the last change to LED parameters will persist until overwritten by a restart or another change in LED params.

<ImageLightbox imageSrc={ColorPRExample} style={{width:300+'px'}} citation={'Button press colors the led red, release to blue'}/>

The Block has a couple of fields you can configure:

- LED number: which LED should the Block affect
- layer: either 1 or 2, the final color is based on the mixed colors of the two layers
  - 1: button and potmeter event layer
  - 2: encoder event layer
- rgb values: you can type your own rbg value, pick a color or just roll the dice for a random color
- beautify switch: this setting turned off allows the LEDs to go completely dark when intensity is zero

LED numbers are independent from control element numbers, but in the out of the box configurations we use the default local variable named [num](../variables/local-variables.md) to address the LEDs, this way binding each LED to its respectable Control Element pair.

There exist two layers of color and intensity per each LED. The reason for this is so that Control Elements like an encoder have a layer for both button and encoder events to display values independently from each other. But especially on Control Elements that only use one layer by default you are free to use the second layer for a lot of other things.

</TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

## LED color

### led_color_min

- shortname: gln
- **How:** `led_color_min(num,layer,red,green,blue)`
  - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
  - layer: integer, ranging 1...2
  - red: integer, ranging 0...255
  - green: integer, ranging 0...255
  - blue: integer, ranging 0...255
- **What:** This function sets the color for the minimum value set for a control element
- **Example:** Inputting the `led_color_min(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on minimum value.
  This red value is a small fraction of the color set for the control element, but not 0 red.`<!-- nem zéro hanem nagyon halvány értéke a maxnak -->`

### led_color_mid

- shortname: gld
- **How**: `led_color_mid(num,layer,red,green,blue)`
  - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
  - layer: integer, ranging 1...2
  - red: integer, ranging 0...255
  - green: integer, ranging 0...255
  - blue: integer, ranging 0...255
- **What**: This function sets the color for the medium value set for a control element
- **Example**: Inputting the `led_color_mid(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on minimum value, which by default equals 63.

### led_color_max

- shortname: glx
- **How**: `led_color_max(num,layer,red,green,blue)`
  - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
  - layer: integer, ranging 1...2
  - red: integer, ranging 0...255
  - green: integer, ranging 0...255
  - blue: integer, ranging 0...255
- **What**: This function sets the color for the maximum value set for a control element.
- **Example**: Inputting the `led_color_max(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on maximum value, which by default equals 127.

### led_color

- shortname: glc
- **How:** `led_color(num,layer,red,green,blue,beautify)`
  - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
  - layer: integer, ranging 1...2
  - red: integer, ranging 0...255
  - green: integer, ranging 0...255
  - blue: integer, ranging 0...255
  - beautify: integer, ranging 0...1 (optional arguement, if not included behaves as 0)
- **What:** This function sets the default LED color for a control element.
- **Example:** Inputting the `led_color(num,1,255,0,0)` function into a Code Block makes the given control element's LED color red.

## LED default Page color

### led_default_red

- shortname: glr
- **How:** `led_default_red()` or `led_default_red(red)`
  - red: integer, ranging 0...255
- **What:** This function returns the red RGB LED value default for the page when called. If called with a a parameter, the `red` parameter will set the default red color for that page.
- **Example:** `led_default_red()` will return `0` on a control element where the LED color is set to `(0,255,60)`.

### led_default_green

- shortname: glg
- **How:** `led_default_green()` or `led_default_green(green)`
  - green: integer, ranging 0...255
- **What:** This function returns the green RGB LED value default for the page when called. If called with a a parameter, the `green` parameter will set the default green color for that page.
- **Example:** `led_default_green()` will return `255` on a control element where the LED color is set to `(0,255,60)`.

### led_default_blue

- shortname: glb
- **How:** `led_default_blue()` or `led_default_blue(blue)`
  - blue: integer, ranging 0...255
- **What:** This function returns the blue RGB LED value default for the page when called. If called with a a parameter, the `blue` parameter will set the default blue color for that page.
- **Example:** `led_default_blue()` will return `60` on a control element where the LED color is set to `(0,255,60)`.

</TabItem>
</Tabs>
