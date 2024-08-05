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

<Tabs queryString="tab">
<TabItem value="About Encoder Mode" label="About Encoder Mode" default>

## Change relative encoding

By default encoders are set to absolute mode. In this mode, encoders act like potentiometers, with a MIDI value range 0-127.

With the help of **Encoder Mode** action, you can change the encoding to relative.

There are two modes implemented at the moment, which should cover all DAWs.

- BinOffset
- 2's Comp

Check both, and see which one works best with your DAW or software.

<!-- <ImageLightbox imageSrc={encodermode} style={{height:340+'px'}} citation={'Encoder Mode Action'}/> -->

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

### encoder_mode

- shortname: emo
- **How:** `self:encoder_mode()` or `self:encoder_mode(mode)`
  - resolution: integer, ranging 0...2
- **What:** This function returns the value of the encoder mode. This is `0` or "absolute mode" by default.
  When function is given `1` as a value, it will change the encoder to "relative mode binary offset". In this mode turning the encoder 'backwards' or counterclockwise will always result in the value `63` and turning it 'forwards' or clockwise will always result in the value `65` .
  When the function is given `2` as a value, it will change the encoder to "relative mode 2's comp". In this mode turning the encoder 'backwards' or counterclockwise will always result in the value `127` and turning it 'forwards' or clockwise will always result in the value `1` .
- **Example:** The code `self:encoder_mode(1)` will change the encoder into relative mode.

### encoder_velocity

- shortname: ev0
- **How:** `self:encoder_velocity()` or `self:encoder_velocity(velocity)`
  - velocity: integer, ranging 0...100
- **What:** This function returns the value of the encoder velocity parameter. This is `100` by default. When the function is given a value for the `velocity` parameter, it will set the encoder velocity to that value. Velocity increases the steps the encoder value increases on each tick, depending on the speed of rotation. Setting the `velocity` parameter to `0` turns off encoder velocity completely.
- **Example:** The code `self:encoder_velocity(0)` will turn off the velocity increase function of the encoder. In this case turning the encoder by one tick, will increase the value of the encoder by 1.

### encoder_sendsitivity

- **How:** `self:encoder_senitivity()` or `self:encoder_senitivity(senitivity)`
  - velocity: integer, ranging 0...100
- **What:** Returns the value of the encoder sensitivity, which is 100 by default. When given a value for the sensitivity parameter, it changes the sensitivity of the encoder. It adjusts how much rotation is needed to send out a value; a lower number means more rotation is required to send the value.

</TabItem>
</Tabs>
