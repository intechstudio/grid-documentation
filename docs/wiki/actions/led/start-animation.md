---
slug: led-start-animation
title: Start Animation
tags: [Action Block, LED, Dual Action, Feedback, Workflow]
description: "The Start Animation Block allows the LED intensity to change over time, making the LED blink in some form or another."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import AnimationExample from './img/animation_example.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Animations" label="About Animations" default>

The Start Animation Block allows the LED intensity to change over time, making the LED blink in some form or another. The way it blinks is best described as a waveform constantly changing the LED intensity on one layer of the LED.

<ImageLightbox imageSrc={AnimationExample} style={{width:300+'px'}} citation={'When button pressed, fast sine wave LED animation starts'}/>

The Block has the following paramters:

- LED number: the number of the LED the animation should affect
- layer: 1 or 2, this will have an effect on the LED intensity of that layer
- phase: where the animation starts from 0 to 255, where 255 is the end of the waveform
- rate: the speed of this blinking effect 1 to 4 where 4 is the fastest
- shape: shape of the unipolar waveform currently restricted to 1 of 4 (sawup, sawdown, sine and square)

Animations are permanent overwrites to the intensity of an LED layer, they can only be "shut down" by sending a [stop animation](../led/stop-animation.md) action to the same LED layer.

Animations are a great way to indicate that a button is "on" for example for a "solos" or "mutes" type of control setup.

In contrary to LED intensity and color settings, animations are not set up by default under UI Setup Events, but some of our configurations uses them for the use cases described above.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

## LED animations

### led_animation_rate

- shortname: glf
- **How:** `led_animation_rate(num,layer,frequency)`
  - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
  - layer: integer, ranging 1...2
  - frequency: integer, ranging -255..255
- **What:** This function assigns a pulse-like animation to the LED when called. The `frequency` parameter adjusts the speed of the animation e.g.: `1` is the default speed, where one period will take 256 frames to play, `2` is double that so half of the frames 128, or you could assign a `-` in front of the frequency value to make the animation play backwards.
- **Example:** Inputting `led_animation_rate(num,1,1)` in a Code Block makes the animation play on its slowest speed the the LED indefinitely. With a `glt` function you can assign a timeout to this animation.

### led_animation_type

- shortname: gls
- **How:** `led_animation_type(num,layer,type)`
  - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
  - layer: integer, ranging 1...2
  - shape: integer, ranging 0...3 (0: ramp up, 1: ramp reversed, 2: square, 3: sine)
- **What:** This function changes the type of animation the LED will play. The `type` variable has values ranging from `0` to `3` each representing a different animation type.
- **Example:**

### led_animation_phase_rate_type

- shortname: glpfs
- **How:** `led_animation_phase_rate_type(num,layer,phase,frequency,type)`
  - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
  - layer: integer, ranging 1...2
  - phase: integer, ranging 0...255
  - frequency: integer, ranging -255..255
  - shape: integer, ranging 0...3 (0: ramp up, 1: ramp reversed, 2: square, 3: sine)
- **What:** This function combines the LED phase change type functions into one.
- **Example:** Inputting the `led_animation_phase_rate_type(num,1,val,1,1)` into a Code Block will play the given animation on layer 1.

:::caution
Only the specific function `led_animation_phase_rate_type(num,layer,phase,0,0)` is able to stop the animation completely. Make sure that both the type and frequency parameters are set to 0 when trying to stop the animation.
:::

  </TabItem>
</Tabs>
