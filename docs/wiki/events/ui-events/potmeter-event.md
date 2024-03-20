---
slug: potmeter-event
title: Potentiometer Event
tags: [Event, UI Event, Control Element, PO16, PBF4, EF44]
description: "The Potmeter Event is a UI Event that's triggered when a potentiometer is turned or a slide potentiometer is moved. Each potentiometer on the module has one of these Events, and by default they control values which determine the LED light intensities and values used for MIDI messages."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Potmeter Event" label="About Potmeter Event" default>




The Potmeter Event is a UI Event that's triggered when a potentiometer is turned or a slide potentiometer is moved. Each potentiometer on the module has one of these Events, and by default they control values which determine the LED light intensities and values used for MIDI messages.

Potentiometers send continuous, linear, analog signal to Grid as they are turned. These then get translated into values and stored in memory. This way Grid always associates the so-called 'state' of a potentiometer (how much is it turned) with a discrete value.

You can set how this value is defined by using a Potentiometer Mode Action Block, you can learn more about these **here**, but generally Mode-type Action Blocks change how user interaction turns into values in Grid.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


## Potmeter Rotation

### potmeter_number
- shortname: pnu
- **How:** `self:potmeter_number()` or `self:potmeter_number(number)`
    - number: signed integer
- **What:** This function when given no parameter, returns the # number of the control element. These numbers are from the top left, read left to right, top to bottom `0` to `15` OR in the case of the PBF4 from `0` to `11`. 
  When this function is given a parameter, it will set the # number of the control element to the `number` given.
- **Example:**

### potmeter_value
- shortname: pva
- **How:** `self:potmeter_value()` or `self:potmeter_value(value)`
    - value: integer, ranging 0...127
- **What:** This function returns the value of the potentiometer state. By default, this value is `0` when the potentiometer is set in the minimum position, and tops out at `127`.
  When this function is given a parameter, it will set the value associated with the potentiometer state according to the parameter given and will output that `value` on each trigger.
- **Example:** 

### potmeter_min
- shortname: pmi
- **How:** `self:potmeter_min()` or `self:potmeter_min(value)`
  - value: integer, ranging 0...127
- **What:** This function returns the minimum value configured to the potentiometer minimum state. This is `0` by default.
  When given a parameter, this function changes the minimum value of the potentiometer state according to the `value` given as parameter.
- **Example:** The code `self:potmeter_min(30)` will set the potentiometer value minimum to `30`.

### potmeter_max 
- shortname: pma
- **How:** `self:potmeter_max()` or `self:potmeter_max(value)`
    - value: integer, ranging 0...127
- **What:** This function returns the maximum value configured to the potentiometer maximum state. This is `127` by default.
  When given a parameter, this function changes the maximum value of the potentiometer state according to the `value` given as parameter.
- **Example:** The code `self:potmeter_max(100)` will set the potentiometer value maximum to `100`.

### potmeter_resolution	
- shortname: pmo
- **How:** `self:potmeter_resolution()` or `self:potmeter_resolution(bitdepth)`
    - bitdepth: integer, ranging 4...12
- **What:** This function returns the value of the potentiometer mode. This is`7` by default. This means that the number of steps between maximum and minimum values will be `2 to the power of 7` or `128`.
  When given a parameter, this function sets the 'steps' between the minimum and maximum value according to the `bitdepth` given. For example setting it to `2` makes the potentiometer have `2 to the power of 4` or `16` steps.
- **Example:** The code `self:potmeter_resolution(11)` will make the potentiometer have `2048` steps. But be careful, if you don't increase the minimum and maximum potentiometer values, this "resolution" increase won't really show in usage.
Increasing potmeter resolution could be useful for using 14-bit MIDI usage.

### potmeter_elapsed_time
- shortname: pel
- **How:** `self:potmeter_elapsed_time()`
- **What:** This function returns the time elapsed since the last trigger in frames.
- **Example:**

### potmeter_state
- shortname: pst
- **How:** `self:potmeter_state()`
- **What:** This function will return the "state" of the control element.
- **Example:**

</TabItem>
</Tabs>

