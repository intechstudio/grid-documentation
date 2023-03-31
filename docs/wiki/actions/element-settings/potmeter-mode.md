---
slug: potmeter-mode
title: Potentiometer Mode
tags: [Action Block, Element Settings, Workflow, PO16, PBF4]
description: "This Potmeter Mode Block is able to make a potentiometer more sensitive by increasing the value range it's working with or by chaning the bit depth of the values the analog signal is translated to."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Code Blocks" label="About Code Blocks" default>

This Potmeter Mode Block is able to make a potentiometer more sensitive by increasing the value range it's working with or by chaning the bit depth of the values the analog signal is translated to.

You have two fields you can change, one of them is the max value of the potentiometer which will be the value for the potentiometer when turned all the way to the right or when the fader is moved all the way towards the north of the module. For high res MIDI, depending on the bit depth or the values you'd need we recommend increasing this above the default 127.

The second field is the bit depth, which translates to how sensitive the potentiometer is when sampling the voltage values from the potentiometer itself. For use with high res MIDI commands like a modwheel, we recommend setting it to 10bit as it is enough for high resolution signals, but compared to 14bit it doesn't get jittery at all. 


:::tip Good practice
It's useful to put Mode-type Blocks under the Init Event of the given Control Element. This way the Control Element will behave exactly as you'd want after booting up and this will also save you some characters on the Control Element Event itself for more important stuff.
:::


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">



### potmeter_resolution	
- shortname: pmo
- **How:** `self:potmeter_resolution()` or `self:potmeter_resolution(bitdepth)`
    - bitdepth: integer, ranging 4...12
- **What:** This function returns the value of the potentiometer mode. This is`7` by default. This means that the number of steps between maximum and minimum values will be `2 to the power of 7` or `128`.
  When given a parameter, this function sets the 'steps' between the minimum and maximum value according to the `bitdepth` given. For example setting it to `2` makes the potentiometer have `2 to the power of 4` or `16` steps.
- **Example:** The code `self:potmeter_resolution(11)` will make the potentiometer have `2048` steps. But be careful, if you don't increase the minimum and maximum potentiometer values, this "resolution" increase won't really show in usage.
Increasing potmeter resolution could be useful for using 14-bit MIDI usage.



  </TabItem>
</Tabs>


