---
slug: gamepad-button
title: Gamepad Button
sidebar_position: 0
tags: [Action Block, Workflow] 
description: "The Gamepad Button block allows Grid to send gamepad button press messages to the host computer."
---


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import img2 from './img/gp_buttons_block.png';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
<TabItem value="About Gamepad Button" label="About Gamepad Button" default>

Use the payout below for configuring the gameped button block. You can send the `val` parameter when using it on a button or encoder pushbutton.

<ImageLightbox imageSrc={img2} style={{width:540+'px'}} citation={'Generic gamepad button layout.'}/>


:::caution
Currently only Grid modules sold after May of 2023 support this feature.  
We apologize for the inconvenience.
:::


</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">

<!---

### mouse button send

- shortname: 
- **How:** `mouse_button_send(button, state)`
  - button: integer, ranging 1=leftclick 2=rightclick 4=middle click
  - state: integer, ranging 0...1
- **What:** This function sends a mouse click of the defined button to the host.
- **Example:** 

--->

  </TabItem>
</Tabs>



