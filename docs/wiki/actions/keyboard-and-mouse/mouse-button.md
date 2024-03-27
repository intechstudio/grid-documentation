---
slug: mouse-button
title: Mouse Button
sidebar_position: 0
tags: [Action Block, Workflow] 
description: "This Mouse Button Block allows Grid to send mouse click messages to the host computer."
---


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import MouseBlock from './img/mouse_block_crop.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Mouse Button" label="About Mouse Button" default>

<!--
:::caution Caution Grid 2.0 Users!
At the moment of release, no Grid 2.0 modules support Mouse messages natively!
This will change in the future, but the feature is not ready yet.

We apologize for the inconvenience.
:::

:::tip A Workaround
If you have an orginal Grid module, you can use that to translate Mouse messages even from 2.0 modules. Just be sure that the module connected to the computer with USB is the "old" one and keyboard messages should be received properly.
:::
--->

This Mouse Button Block allows Grid to send mouse click messages to the host computer.

In the Block input fields you can define the type of mouse button message: which button to press or release.

<ImageLightbox imageSrc={MouseBlock} style={{width:300+'px'}} citation={'Mouse Button Block in Press Release Block in Grid Editor'}/>


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">



### mouse button send

- shortname: gmbs
- **How:** `mouse_button_send(button, state)`
  - button: integer, ranging 1=leftclick 2=rightclick 4=middle click
  - state: integer, ranging 0...1
- **What:** This function sends a mouse click of the defined button to the host.
- **Example:** 



  </TabItem>
</Tabs>



