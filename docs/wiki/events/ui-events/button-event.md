---
slug: button-event
title: Button Event
tags: [Event, UI Event, Control Element, BU16, PBF4, EN16, EF44]
description: "The Button Event is a UI Event, which means it triggers on user interaction." 
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Button Event" label="About Button Event" default>


The Button Event is a UI Event, which means it triggers on user interaction. Specifically it triggers in two cases: when a button is pushed down and it "clicks" and when a button is released, these these type of triggers are called **Press and Release** in Grid terminology.

These button triggers and events are applicable to all encoders and buttons on a Grid module, aside form the utility button, which uses the [Utility Event](../system-events/utility-event).

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


## Button Press

### button_number
- shortname: bnu
- **How:** `self:button_number()` or `self:button_number(number)`
  - number: signed integer
- **What:** This function when given no parameter, returns the # number of the control element. These numbers are from the top left, read left to right, top to bottom `0` to `15` OR in the case of the PBF4 from `0` to `11`. 
  When this function is given a parameter, it will set the # number of the control element to the `number` given.
- **Example:**


### button_value
- shortname: bva
- **How:** `self:button_value()` or `self:button_value(value)`
  - value: integer, ranging 0...127
- **What:** This function returns the value associated to the button. By default, this value is `127` when the button is pressed down and `0` when released.
  When this function is given a parameter, it will set the value associated with the button state according to the parameter given.
  When using other types of button modes, described later in this chapter, the button values are evenly spread across the steps: eg. spilt 3 was would be values `0` `63` `127` split 4-way would be `0` `47` `95` and `127`.
- **Example:** Inputting the code `self:button_value(127)` will make all button press and  button release event return the value `127`.


### button_min 
- shortname: bmi
- **How:** `self:button_min()` or `self:button_min(value)`
    - value: integer, ranging 0...127
- **What:** This function returns the minimum value of the "released" button state. This is `0` by default.
  When given a parameter, this function changes the minimum value of the button state according to the `value` given as parameter.
- **Example:** The code `self:button_min(20)` will set the value of the button to `20` when released.


### button_max
- shortname: bma
- **How:** `self:button_max()` or `self:button_max(value)`
    - value: integer, ranging 0...127
- **What:** This function returns the maximum value of the "pressed down" button state. This is `127` by default.
  When given a parameter, this function changes the maximum value of the button state according to the `value` given as parameter.
- **Example:** The code `self:button_max(110)` will set the value of the button to `110` when pressed down. This can be useful to set easy to use values for a switch, like `self:button_max(1)` will make it so that there are only two values this button can send out `0` and `1`.


### button_mode
- shortname: bmo
- **How:** `self:button_mode()` or `self:button_mode(mode)`
    - mode: integer, ranging 0...127
- **What:** This function returns the value of the button mode. This is `0` by default. Button mode means how many 'steps' the button has between its maximum and minimum value. For example when the function is used to set this value like this: `self:button_mode(mode)` the resolution parameter will govern the number of steps.
- **Example:** The code `self:button_mode(2)` will make the button a 3-step switch. The three states will be `0` , `63` and `127`.


### button_elapsed_time
- shortname: bel
- **How:** `self:button_elapsed_time()`
- **What:** This function returns the time elapsed since the last trigger in frames.
- **Example:**


### button_state
- shortname: bst
- **How:** `self:button_state()`
- **What:** This function will return the "state" of the control element. In case of a button this is either "pressed down" `127`  OR "released" `0`. These values independent from value variable of the control element. This means that the button_state() function will always return the values associated with the "pressed" or "released" states, independently from any kind of alterations to the button value functions, such as changing the max or min values.
- **Example:**





  </TabItem>
</Tabs>


