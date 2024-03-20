---
slug: utility-event
title: Utility Event
tags: [Event, System Event, Workflow]
description: "This event is triggered when the utility button is pressed on the side of the module."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Utility Button Event" label="About Utility Button Event" default>


This event is triggered when the utility button is pressed on the side of the module.

By default this event has only one[[ Code Block]] in its [[Action Chain]], specifically calling the following nested functions: `page_load(page_next())`. This short function calls the index of the next Page and then loads it into runtime memory.

Using the utility button for anything else than switching Pages will require you to place that action elsewhere in your configurations. Remember to move them on your 3 other Pages as well.

For example you could configure the utility button to switch the MIDI channel the Grid module is sending out. This effectively multiplies the amount of control you can have on one Page by 16.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


There is no Reference Manual Entry for this article.



  </TabItem>
</Tabs>



