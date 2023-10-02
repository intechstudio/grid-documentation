---
title: Encoder (EN16, EF44)
description: Change the encoder to relative, buttons to toggle and potmeters to different range
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import encoder_mode_init from './img/encoder_mode_init.png'
import absolute_enc_change from './img/absolute_enc_change.png'
import encoder_min_max from './img/encoder_min_max.png'
import config_already_applied from './img/config_already_applied.png'
import bin_offset_l_r from './img/bin_offset_l_r.png'
import twos_comp_l_r from './img/twos_comp_l_r.png'
import enc_vel from './img/enc_vel.png'

An encoder can be set to 3 different modes:
- Absolute (default), acts like a potentiometer 0-127 CC values
- Relative Bin Offset, 63-65 CC values
- Relative 2's Complement, 1-127 CC values

Let's add an **Encoder Mode** action block to the *init* event of the encoder control element. We could put it onto the *encoder* event as well, but pay attention to the order of execution on an action chain. 

<ImageLightbox imageSrc={encoder_mode_init} citation={""} styling={'w-4/5 object-contain'}/>

## Absolute mode

This is the default mode of the encoder. In this mode, the encoder acts like a potentiometer, with a MIDI value CC range 0-127.

Opening the MIDI Monitor panel will show the values sent by the encoder. When you continue a right rotating motion, the values will gradually change up until to the encoder's maximum value. Rotating the encoder to the left will gradually decrease the value until it reaches the minimum value.

<ImageLightbox imageSrc={absolute_enc_change} citation={"Encoder set to absolute mode behaves like a potmeter"} styling={'w-4/5 object-contain'}/>

## Set range on encoder

By default, the encoders mininum value is 0, and the maximum value is 127. These values can be changed with the `encoder_min` and `encoder_max` functions.

If you want to change the encoder's range, let's say to minimum 50 and maximum 100, we can use the following code in a [**Code Block**](/wiki/actions/code/code-block) action:

```lua
self:encoder_min(50)
self:encoder_max(100)
```

:::note The `self:` keyword
`self:` refers to the control element itself. This is useful when you want to change the configuration of the control element, which is currently executing the action chain. You can [learn more](http://localhost:3000/wiki/more/element-referencing#self-variables) about element referencing here, moving forward we'll use this `self:` code prefix in the examples.
:::

<ImageLightbox imageSrc={encoder_min_max} citation={"Apply range to an absolute encoder"} styling={'w-4/5 max-h-60 object-contain'}/>

:::danger
Setting encoder minimum and maximum values should be only used in **absolute encoder mode**. In relative modes, this will alter how relative values are calculated.
:::

## Configurations stay applyed until overwritten

If you apply configurations to Grid - like setting min and max values -, those changes will remain on the hardware until you explicitly change them or store / restart the module. Be careful not to restart a module if you have unsaved configurations. 

You can remove the code block which contains the min and max value changes to see this yourself in the MIDI Monitor panel.

<ImageLightbox imageSrc={config_already_applied} citation={"Code block with min-max functions removed, but maximum is still 100"} styling={'w-4/5 object-contain'}/>

## Relative Modes

Relative modes are often used to control various software parameters. Relative modes don't have a fixed value range, but instead it makes the encoder send out an increment or decrement value, depending on the direction of the rotation. This behaviour helps to avoid sudden value jumps, when the same control element is used to control different parameters even across different plugins.

### Bin Offset

In Bin Offset mode, the encoder will send out 63 when rotated to the left, and 65 when rotated to the right.

Change the Encoder Mode to **1**.

<ImageLightbox imageSrc={bin_offset_l_r} citation={"Bin Offset will send values 63-65, depending on rotation direction"} styling={'w-4/5 object-contain'}/>

### 2's Complement

In 2's Complement mode, the encoder will send out 1 when rotated to the left, and 127 when rotated to the right.

Change the Encoder Mode to **2**.

<ImageLightbox imageSrc={twos_comp_l_r} citation={"2's Complement will send values 1-127, depending on rotation direction"} styling={'w-4/5 object-contain'}/>

## Encoder turn velocity

Encoders have a velocity variable built in, which can be changed with the Encoder Mode action or with the `encoder_velocity(value)` function. You can finetune this setting to work best with your own workflow.

- By default the velocity value is 50.
- You can turn off this behaviour completely by changing the encoder velocity to 0.
- When using velocity with relative encoding modes or with higher encoder resolutions (for example encoder range with 0-2048 values), velocity values like 2-3-4 or 5 can be the sweet spot.

<ImageLightbox imageSrc={enc_vel} citation={"Encoder velocity can be changed between 0 and 100."} styling={'w-4/5 max-h-60 object-contain'}/>

## Special state action blocks

There are 3 special action blocks are available for encoders:

- **Left/Right Rotate** - This action block will trigger when the encoder is rotated to the left or to the right.
- **Push & Rotate** - This action block will trigger when the encoder is rotated while the button is pressed down or just rotated.
- **Push & Rotate Left/Right** - This action block will trigger when the encoder is rotated to the left or to the right, while the button is pressed down or not.

These special action blocks are utilising the encoder's rotation and button state with **if** statements. You can learn more about **if** statements [here](/wiki/actions/code/if-statement).

If you want to build other special state checking actions, you can use the *merge as code* function to see how these action blocks are built and tune them to your liking via [condition](/category/conditions) action blocks or coding.

### Left/Right Rotate

example here

### Push & Rotate

example here

### Push & Rotate Left/Right

example here

## Next steps

coming soon.