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

:::caution Caution Grid 2.0 Users!
At the moment of release, no Grid 2.0 modules support Mouse messages natively!
This will change in the future, but the feature is not ready yet.

We apologize for the inconvenience.
:::

:::tip A Workaround
If you have an orginal Grid module, you can use that to translate Mouse messages even from 2.0 modules. Just be sure that the module connected to the computer with USB is the "old" one and keyboard messages should be received properly.
:::

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


