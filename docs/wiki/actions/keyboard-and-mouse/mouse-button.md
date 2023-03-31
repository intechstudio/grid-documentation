---
slug: mouse-button
title: Mouse Button
tags: [Action Block, Workflow] 
description: "This Mouse Button Block allows Grid to send mouse click messages to the host computer."
---


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Mouse Button" label="About Mouse Button" default>

This Mouse Button Block allows Grid to send mouse click messages to the host computer.

In the Block input fields you can define the type of mouse button message: which button to press or release.


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">



### mouse button send

- shortname: gmbs
- **How:** `mouse_button_send(state, button)`
  - state: integer, ranging 0...1
  - button: integer, ranging 1=leftclick 2=rightclick 4=middle click
- **What:** This function sends a mouse click of the defined button to the host.
- **Example:** 



  </TabItem>
</Tabs>



