---
slug: led-stop-animation
title: Stop Animation
tags: [Action Block, LED, Dual Action, Feedback, Workflow]
description: "This Block simply stops an already playing animation on an LED layer."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import StopAnimationExample from './img/stop_animation_example.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Stopping Animations" label="About Stopping Animations" default>





This Block simply stops an already playing animation on an LED layer. Works similarly to its pair, the [Start Animation Block](../led/start-animation.md).

<ImageLightbox imageSrc={StopAnimationExample} style={{width:300+'px'}} citation={'When button pressed, LED animation starts, when released animation stops'}/>


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


:::caution
Only the specific function `led_animation_phase_rate_type(num,layer,phase,0,0)` is able to stop the animation completely. Make sure that both the type and frequency parameters are set to 0 when trying to stop the animation.
:::




  </TabItem>
</Tabs>


