---
slug: endless-mode
title: Endless Mode
tags: [Action Block, Element Settings, Workflow, TEK2]
description: "By default endless are set to absolute mode. In this mode, encoders act like potentiometers, with a MIDI value range 0-127. With the help of Encoder Mode action, you can change the encoding to relative."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import endlessmode from './img/endless_mode.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
<TabItem value="About Endless Mode" label="About Endless Mode" default>

:::tip Good practice
It's useful to put Mode-type Blocks under the Setup Event of the given Control Element. This way the Control Element will behave exactly as you'd want after booting up and this will also save you some characters on the Control Element Event itself for more important stuff.
:::

## Change the mode

By default encoders are set to absolute mode. In this mode, encoders act like potentiometers, with a 14bit MIDI value range 0-16383.

With the help of **Endless Mode** action, you can change the max value to standard 7bit MIDI (0-127) or to relative mode.

There are two modes implemented.

- Absolute
- Relative

Check both, and see which one works best with your DAW or software.

<ImageLightbox imageSrc={endlessmode} style={{height:340+'px'}} citation={'Endless Mode Action'}/>

:::info

### Velocity

Velocity refers to the rate at which the encoder or endless position changes over time. Velocity measures how quickly the encoder is being turned. This velocity is essential for applications where the speed of rotation needs to be detected and used to influence other parameters.

### Sensitivity

Sensitivity refers to how responsive the encoder or endless controller is to changes. It dictates how much change in the encoder or endless controller's position is needed to produce a change in the output or the controlled parameter.

:::

</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">

### endless_mode

- shortname:
- **How:** `self:endless_mode()` or `self:endless_mode(mode)`
  - mode: integer, ranging 0-1
- **What:** This function returns the value of the encoder mode. This is `0` or "absolute mode" by default.
  When function is given `1` as a value, it will change the encoder to "relative mode". In this mode turning the encoder 'backwards' or counterclockwise will result in the value `63` and turning it 'forwards' or clockwise will result in the value `65` .
- **Example:** The code `self:encoder_mode(1)` will change the encoder into relative mode.

### endless_velocity

- shortname:
- **How:** `self:endless_velocity()` or `self:endless_velocity(velocity)`
  - velocity: integer, ranging 0...100
- **What:** This function returns the value of the endless velocity parameter. This is `100` by default. When the function is given a value for the `velocity` parameter, it will set the endless velocity to that value. Velocity increases the value, depending on the speed of rotation. Setting the `velocity` parameter to `0` turns off endless velocity completely.
- **Example:** The code `self:endless_velocity(0)` will turn off the velocity increase function of the endless. In this case turning the endless, will increase or decrase the value of the value always by 1.

### endless_sendsitivity

- **How:** `self:endless_senitivity()` or `self:endless_senitivity(senitivity)`
  - velocity: integer, ranging 0...100
- **What:** Returns the value of the endless sensitivity, which is 100 by default. When given a value for the sensitivity parameter, it changes the sensitivity of the endless potentiometer. It adjusts how much rotation is needed to send out a value; a lower number means more rotation is required to send the value.
- **Example:** Set the sensitivity to a new value `self:endless_sensitivity(1) > Max amount of rotation` to send out the value

</TabItem>
</Tabs>
