---
title: "Customizing Encoders"
description: "About Encoder Modes and more for EN16 and EF44."
slug: editor-103-encoder
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import encoder_mode_init from './img/encoder_mode_init.png'
import absolute_enc_change from './img/absolute_enc_change.png'
import encoder_min_max from './img/encoder_min_max.png'
import config_already_applied from './img/config_already_applied.png'
import bin_offset_l_r from './img/bin_offset_l_r.png'
import twos_comp_l_r from './img/twos_comp_l_r.png'
import enc_vel from './img/enc_vel.png'
import spec_left_right from './img/spec_left_right.png'
import spec_left_right_2 from './img/spec_left_right_2.png'
import spec_push_rot from './img/spec_push_rot.png'
import spec_push_not_push_l_r from './img/spec_push_not_push_l_r.png'
import merge_spec_l_r from './img/merge_spec_l_r.png'

*This article details most settings and adjustments to the default Encoder behavior on Grid modules.*

---

# Encoder modes explained

All encoders can be set to 3 different modes:
- **Absolute** (default), acts like a potentiometer 0-127 CC values
- **Relative Bin Offset**, 63-65 CC values
- **Relative 2's Complement**, 1-127 CC values

Let's add an **Encoder Mode Action** block to the *init* event of the encoder control element. We could put it onto the *encoder* event as well, but pay attention to the order of execution on an action chain. 

<ImageLightbox imageSrc={encoder_mode_init} citation={""} styling={'w-4/5 object-contain'}/>

## Absolute mode

This is the default mode of the encoder. In this mode, the encoder acts like a potentiometer, with a MIDI value CC range of 0-127.

Opening the MIDI Monitor panel will show the values sent by the encoder. If you keep rotating the encoder clockwise, the values will gradually increase until reaching the encoder's maximum value, 127. Rotating the encoder to counterclockwise will gradually decrease the value until it reaches the minimum value, zero.

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

- **Left/Right Rotate**
- **Push & Rotate**
- **Push & Rotate Left/Right**

These special action blocks are utilising the encoder's rotation and button state with **if** statements. You can learn more about **if** statements [here](/wiki/actions/condition/if).

If you want to build other special state checking actions, you can use the *merge as code* function to see how these action blocks are built and tune them to your liking via [condition](/category/conditions) action blocks or coding.

### Left/Right Rotate

This block has two branches. Actions put in the first branch are executed, when the encoder is rotated to the left. Actions put in the second branch are executed, when the encoder is rotated to the right.

Grid can be programmed to send keyboard messages. For example, you can use the fine encoder tweaks to change timeline position, zoom setting or other parameter available through keyboard shortcuts.

You can learn more about the [**Keyboard** action block here](/wiki/actions/keyboard-and-mouse/keyboard).

<ImageLightbox imageSrc={spec_left_right_2} citation={"Send 'A' when rotating left, send 'B' rotating right"} styling={'w-4/5 object-contain'}/>

:::note Store before using keyboard messages
Before using your keyboard macros, you must Store your configuration to the hardware. Otherwise the keyboard messages won't be sent out.
:::

An other example here with the MIDI action block messages, sending different CC messages based on rotation direction:
<ImageLightbox imageSrc={spec_left_right} citation={"Rotating left sends CC 8, rotating right sends CC 44"} styling={'w-4/5 object-contain'}/>

### Push & Rotate

This block has also two branches. Utilizing the button state of an encoder, this action differentiates between a simple encoder turn and a push & turn action.

Utilising the relative encoder mode, we can setup the encoder to control two parameters.

<ImageLightbox imageSrc={spec_push_rot} citation={"While encoder is pushed, relative CC 40 messages are sent out, when simply turned then CC 30"} styling={'w-3/5 max-h-60 object-contain'}/>

:::note Relative encoder mode
For the sake of demonstration, we've put the **Encoder Mode** action on the encoder event. Normally, you would put this action to the init event of the encoder control element. This setup also works, but this action must be executed first.
:::

### Push & rotate right or left + just rotate left or right

This special action holds most of the common states together. To make this look like this action block, it uses a lot of characters in the background, making it a [character heavy](/wiki/more/char-limit) action.

<ImageLightbox imageSrc={spec_push_not_push_l_r} citation={"As character limit is tight here, "} styling={'w-4/5 object-contain'}/>

You can use the *merge as code* function to see how this action block is built and use the code version of it to get better control over it. We can further opzimize the merged code, by assigning the `self:encoder_state()` and `self:button_state()` functions to local variables.

<ImageLightbox imageSrc={merge_spec_l_r} citation={"The bottom left code block's character length is only 167/400 characters"} styling={'w-4/5 object-contain'}/>

## Next steps

We've started to go over common encoder states. Before moving towards more advanced configurations, check out the [button](/guides/guide/how-to-grid-editor/button) guide.

