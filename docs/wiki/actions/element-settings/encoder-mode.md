---
slug: encoder-mode
title: Encoder Mode
tags: [Action Block, Element Settings, Workflow, EN16, EF44]
description: "By default encoders are set to absolute mode. In this mode, encoders act like potentiometers, with a MIDI value range 0-127. With the help of Encoder Mode action, you can change the encoding to relative."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Encoder Mode" label="About Encoder Mode" default>

## Change relative encoding

By default encoders are set to absolute mode. In this mode, encoders act like potentiometers, with a MIDI value range 0-127.

With the help of **Encoder Mode** action, you can change the encoding to relative.

There are two modes implemented at the moment, which should cover all DAWs.

 - BinOffset
 - 2's Comp

Check both, and see which one works best with your DAW or software.

## Change encoder velocity

Encoders have a velocity variable built in, which can be changed with the Encoder Mode action.

By default the velocity value is 50. You can finetune this setting to work best with your own workflow and needs by using an Encoder Mode Block and changing this value.

You can turn off this behaviour completely by changing the encoder velocity to 0.

When using velocity with relative encoding modes or with higher encoder resolutions (for example encoder range with 0-2048 values), velocity values like 2-3-4 or 5 can be the sweet spot.

![encoder mode](../../img/encoder_mode.gif)


:::tip Good practice
It's useful to put Mode-type Blocks under the Init Event of the given Control Element. This way the Control Element will behave exactly as you'd want after booting up and this will also save you some characters on the Control Element Event itself for more important stuff.
:::


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

### button_mode
- shortname: bmo
- **How:** `self:button_mode()` or `self:button_mode(mode)`
    - mode: integer, ranging 0...127
- **What:** This function returns the value of the button mode. This is `0` by default. Button mode means how many 'steps' the button has between its maximum and minimum value. For example when the function is used to set this value like this: `self:button_mode(mode)` the resolution parameter will govern the number of steps.
- **Example:** The code `self:button_mode(2)` will make the button a 3-step switch. The three states will be `0` , `63` and `127`.

### encoder_velocity
- shortname: ev0
- **How:** `self:encoder_velocity()` or `self:encoder_velocity(velocity)`
  - velocity: integer, ranging 0...100
- **What:** This function returns the value of the encoder velocity parameter. This is `100` by default. When the function is given a value for the `velocity` parameter, it will set  the encoder velocity to that value. Velocity increases the steps the encoder value increases on each tick, depending on the speed of rotation. Setting the `velocity` parameter to `0` turns off encoder velocity completely.
- **Example:**  The code `self:encoder_velocity(0)` will turn off the velocity increase function of the encoder. In this case turning the encoder by one tick, will increase the value of the encoder by 1. 



  </TabItem>
</Tabs>


