---
slug: for-loop
title: For Loop
tags: [Action Block, Loop, Logic, LUA, Workflow]
description: "The For Action can be set with incremental steps in a loop."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import img1 from './img/for_block.png';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
<TabItem value="About For Loop" label="About For Loop" default>

## Description

The For Action block will repeat the Actions within its bounds a set amount of times. You can set the amount of repeats on the block header or you can open up the block to specify all parameters of the loop like starting and end values or setting the iterator.

<ImageLightbox imageSrc={img1} style={{width:450+'px'}} citation={'Opening up the For Action block reveals all parameters controlling the numer of repeats.'}/>

### Parameters

When opening up the block with the small switch on the header the following 4 parameters become visible:

- **Variable** is the name of [local](/docs/wiki/actions/variables/local-variables.md) [variable](/docs/wiki/more/element-referencing.md) the loop uses for its repeats;
- **Initial value** is the value the above variable will start at when the Event runs;
- **End value** is the value of the above variable hat sets when the loop should stop;
- **Increment** is the value the variable increases or decreases by on each loop.

The above parameters set how many times the for loop will repeat the Actions within, and will display the number of repeats on the header.

</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">

## How to program

### for loop | for

- **How:** `for variable=start, end, iterator do stuff_to_be_repeated end`
  - variable: a local variable used within the confines of the loop
  - start: integer, the starting value of the loop variable
  - end: integer, the ending value of the loop variable
  - iterator: integer, it increases the `iterator` value by itself on each loop, if left out its default value is 1
- **What:** Repeats the functionality given between `do` and `end` an amount of times determined by the parameters of the function.

#### For Loop Example

When adding the below code on an Event of a Grid module will cause the first 6 LEDs of the module to change to a random color when the Event runs.

```lua
for i=0,5,1 do
--starting from 0, count up to 5, increasing the count by 1 on each completed loop

led_color(i,1,random8()*255,random8()*255,random8()*255)
--change the LED color of the LED based on the loop count of the loop to random

end
```

This is because the **for loop** will repeat the `led_color(i,1,random8()*255,random8()*255,random8()*255)` function on each `i` value from 0 to 5. And since the in the `led_value()` function the first parameter sets the index of the afftected LED, when the Event is triggered it will set the LED colors to random for each of the LEDs from index 0 to 5.

</TabItem>
</Tabs>
