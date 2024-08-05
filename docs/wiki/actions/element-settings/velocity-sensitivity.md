---
slug: velocity-sensitivity
title: Velocity and Sensitivity
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

## Velocity

Velocity refers to the rate at which the encoder or endless position changes over time. Velocity measures how quickly the encoder is being turned. This velocity is essential for applications where the speed of rotation needs to be detected and used to influence other parameters.

## Sensitivity

Sensitivity refers to how responsive the encoder or endless controller is to changes. It dictates how much change in the encoder or endless controller's position is needed to produce a change in the output or the controlled parameter.

## Support

Velocity and sensitivity are supported by both endless potentiometers and encoders. These parameters are adjustable using the corresponding Mode block.

</TabItem>

</Tabs>
