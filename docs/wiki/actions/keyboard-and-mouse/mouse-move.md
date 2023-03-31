---
slug: mouse-move
title: Mouse Move
tags: [Action Block, Workflow]
description: "This Mouse Move Block allows Grid to send mouse move messages to the host computer, letting you send even scrollwheel messages."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Mouse Move" label="About Mouse Move" default>

This Mouse Move Block allows Grid to send mouse move messages to the host computer, letting you send even scrollwheel messages.


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


### mouse move send

- shortname: gmms
- **How:** `mouse_move_send(position, axis)`
  - position: integer
  - axis: integer, ranging 1...3 where 3=mousewheel
- **What:** This function sends a mouse move message to the host. Where the movement equals to the position parameter in screensspace.
- **Example:** 


  </TabItem>
</Tabs>


