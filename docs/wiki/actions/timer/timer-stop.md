---
slug: timer-stop
title: Timer Stop
tags: [Action Block, Timer, Dual Action, Workflow]
description: "The Timer Stop Block allows you to end a Timer early, before its clock would run out, triggering a Timer Event earlier."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Timer Stop" label="About Timer Stop " default>


The Timer Stop Block allows you to end a Timer early, before its clock would run out, triggering a Timer Event earlier.

This can be useful for turning off cyclical timers like clocks for sequencers.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


### timer_stop | gtp

- **How:** `timer_stop(element_index[element_number])` 
  
  - element_index[element_number]: integer, ranging 0...15 or 0...11 if using PBF4 or 0...7 if using EF44
    - if you call 16 for the timer it will stop the global timer
  
- **What:** When this function is called, the timer function (if there is one running) will stop immediately and the defined Action Chain will run under the Timer event.
  
- **Example:** This function is useful as a break kind of function. Meaning you can immediately end a timer running when a certain condition is met like:



  </TabItem>
</Tabs>



