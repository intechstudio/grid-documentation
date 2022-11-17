---
slug: led-start-animation
title: Start Animation
tags: [Action Block, LED, Dual Action, Feedback, Workflow]
---

The Start Animation Block allows the LED intensity to change over time, making the LED blink in some form or another. The way it blinks is best described as a waveform constantly changing the LED intensity on one layer of the LED.

The Block has the following paramters:
- LED number: the number of the LED the animation should affect
- layer: 1 or 2, this will have an effect on the LED intensity of that layer
- phase: where the animation starts from 0 to 255, where 255 is the end of the waveform
- rate: the speed of this blinking effect 1 to 4 where 4 is the fastest
- shape: shape of the unipolar waveform currently restricted to 1 of 4 (sawup, sawdown, sine and square)

Animations are permanent overwrites to the intensity of an LED layer, they can only be "shut down" by sending a [stop animation](../led/stop-animation.md) action to the same LED layer.

Animations are a great way to indicate that a button is "on" for example for a "solos" or "mutes" type of control setup.

In contrary to LED intensity and color settings, animations are not set up by default under UI Init Events, but some of our configurations uses them for the use cases described above.

