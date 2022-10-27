---
slug: led-color-block
title: Color Block
tags: [Action Block, LED Block, Feedback, Workflow]
---

The Color Block changes the color the LED of your choice when this action runs.

Color Blocks by default are found on the Init Event of each Control Element. This is to give a default coloring to each module on startup. If you just want to change how your module looks, we advise to change things here.

If you want to use coloring for value feedback, you should probably do that on the Control Element Events, where the value changes happen. Remember, the last change to LED parameters will persist until overwritten by a restart or another change in LED params.

The Block has a couple of fields you can configure:
- LED number: which LED should the Block affect
- layer: either 1 or 2, the final color is based on the mixed colors of the two layers
- rgb values: you can type your own rbg value, pick a color or just roll the dice for a random color
- beautify switch: this setting turned off allows the LEDs to go completely dark when intensity is zero

LED numbers are independent from control element numbers, but in the out of the box configurations we use the default local variable named [num](/docs/wiki/actions/variables/local-variables) to address the LEDs, this way binding each LED to its respectable Control Element pair.

There exist two layers of color and intensity per each LED. The reason for this is so that Control Elements like an encoder have a layer for both button and encoder events to display values independently from each other. But especially on Control Elements that only use one layer by default you are free to use the second layer for a lot of other things.
