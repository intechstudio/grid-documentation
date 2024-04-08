---
slug: gamepad-axis
title: Gamepad Joystick
tags: [Action Block, Workflow]
description: "The Gamepad Joystick block allows Grid to send gamepad joystick axis messages to the host computer."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import img1 from './img/vs_grid_lr.gif';
import img2 from './img/axis_block.png';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Gamepad Joystick" label="About Gamepad Joystick" default>

Utilizing the gamepad joystick messages you can create a virtual joystick you can control with Grid. You could use it to control the virtual levers in a flight simulator or just everyday games you can control with a joystick.

<ImageLightbox imageSrc={img1} citation={'Controlling movement in Vampire Survivors with two faders on a PBF4.'}/>

<!-- style={{width:300+'px'}}-->

With the Gamepad Axis block you can choose the axis you want to move the joystick on and the value you would want to move it by. The position on that axis ranges from -128 to 127 so we recommend setting the potentiometers or encoders controlling this block to a maximum value of 255 and then subtracting that from 127 when calculating the position of the control element.

<ImageLightbox imageSrc={img2} citation={'Axis position controlled by a potentiometer. Mode block should be on the Init Event, this image is just illustration.'}/>

:::caution
Currently only Grid modules sold after May of 2023 support this feature.  
We apologize for the inconvenience.
:::

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">



### gamepad move send



- shortname: ggms
- **How:** `gamepad_move_send(axis, position)`
  - axis: integer, ranging 0...5 where 0=x axis 1=y axis 2=z axis of the left joystick and 3,4,5 are controlling the right joystick
  - position: integer, ranging -128...127
- **What:** This function sends a gamepad move message to the host. The position parameter controls how much the joystick deviates from middle position.
- **Example:** For example sending `gamepad_move_send(0, -128)` will send out a message as if the virtual joystick was tilted all the way to the left.

Configuring the potmeter to 8bits and then limiting it to a maximum of 255, you can send the `gamepad_move_send(0,127-self:potmeter_value())` to fully take control of the X axis of the joystick with just one fader. Mirroring this to another fader nets you full joystick control of the left stick.

<ImageLightbox imageSrc={img1} citation={'Controlling movement in Vampire Survivors with two faders on a PBF4.'}/>



</TabItem>
</Tabs>


