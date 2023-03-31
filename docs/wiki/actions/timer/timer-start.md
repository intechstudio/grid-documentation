---
slug: timer-start
title: Timer Start
tags: [Action Block, Timer, Dual Action, Workflow]
description: "The Timer Start Block allows you to create a timed trigger for the Timer Event. These Blocks can be used for both the global and the ui versions of the Timer Event."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Timer Start" label="About Timer Start" default>



The Timer Start Block allows you to create a timed trigger for the Timer Event. These Blocks can be used for both the global and the ui versions of the Timer Event.

The parameters of this Block are rather simple:
- `element number` sets which Timer Event the timer will trigger after the clock runs out
- `time` sets the clock for the timer in miliseconds

Timers can be ended early with the use of a [timer stop](../timer/timer-stop) action.

For more about how a timer works check out the [Timer Events](/docs/wiki/events/ui-events/timer-event.mdx) in the Events section of the wiki.

With a timer you can create cyclical timers that trigger themselves, creating pseudo clock source for your Grid configurations.


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


### timer_start | gtt

- **How:** `timer_start(element_index[element_number], timer)`
  - element_index[element_number]: integer, ranging 0...15 or 0...11 if using PBF4 or 0...7 if using EF44
    - if you call 16 for the timer it will start the global timer
  - timer: integer, ranging 0...65535
- **What:** This function starts a timer when called, when the timer runs out (defined by the `timer` parameter, given apx. in milliseconds) the Timer UI event will run.
- **Example:** Using the code `timer_start(num, 500)` on a BU16 button will start the timer when the button is pressed down and the defined Action Chain under the Timer event on this Control Element will run after ~ 500 ms have passed. This is useful if you want to have effects timeout independent from physically triggered events, like a button being pushed.

</TabItem>
</Tabs>


