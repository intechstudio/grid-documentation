---
slug: timer-stop
title: Timer Stop
tags: [Action Block, Timer, Dual Action, Workflow]
description: "The Timer Stop Block allows you to end a Timer early, before its clock would run out, triggering a Timer Event earlier."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import TimerStop from './img/timer_stop.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
<TabItem value="About Timer Stop" label="About Timer Stop " default>


The Timer Stop Action allows you to end a Timer early, canceling/aborting a running timer.

This will result in the Timer Event and its Action chain never running.

The Timer Stop is mostly useful for turning off cyclical timers like clocks for sequencers, as these type of timers would run infinitely

<ImageLightbox imageSrc={TimerStop} style={{width:350+'px'}} citation={'Stops the Timer on Element number 10'}/>

:::note A Cyclical timer
A cyclical timer is what we call such a Timer Event that is countinuously retriggered by its own Action chain. 
:::

</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">


### timer_stop | gtp

- **How:** `timer_stop(element_index[element_number])` 
  
  - element_index[element_number]: integer, ranging 0...15 or 0...11 if using PBF4 or 0...7 if using EF44
    - if you call `-1` for the timer it will stop the system timer
  
- **What:** When this function is called, the timer function (if there is one running) will stop immediately.
  
- **Example:** This function is useful as a break kind of function. Meaning you can immediately end a timer running when a certain condition is met like:




</TabItem>
</Tabs>



