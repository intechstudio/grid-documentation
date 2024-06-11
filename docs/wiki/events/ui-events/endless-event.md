---
slug: endless-event
title: Endless Event
tags: [Event, UI Event, Control Element, TEK2]
description: "The Endless Event is a UI Event, which means it triggers on user interaction. "
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
<TabItem value="About Endless Event" label="About Endless Event" default>

The Endless Potentiometer Event is a UI event that triggers upon user interaction, specifically when the user turns the endless potentiometer. Unlike a detent encoder, an endless potentiometer is smooth in its rotation and does not have distinct clicks or associated values. Each movement of the endless potentiometer triggers an Endless Potentiometer Event.

Endless potentiometers are versatile and can be used in various ways. Due to their infinite nature, they can function in a relative manner, adding to or subtracting from a value. Additionally, they can perform the same role as traditional potentiometers, providing smooth and continuous adjustments.


</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">


## Endless Button


### button_number
- shortname: bnu
- **How:** `self:button_number()` or `self:button_number(number)`
  - number: signed integer
- **What:** This function when given no parameter, returns the # number of the control element. These numbers are from the top left, read left to right, top to bottom `0` to `15` OR in the case of the TEK2 from `0` to `7`. 
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


## Endless Rotation

### endless_number
- shortname:
- **How:** `self:endless_number()` or `self:endless_number(number)`
    - number: signed integer
- **What:** This function, when given no parameter, returns the # number of the control element. These numbers are from the top left, read left to right `8` to `9`. 
  When this function is given a parameter, it will set the # number of the control element to the `number` given.
- **Example:**


### endless_value
- shortname:
- **How:** `self:endless_value() `or `self:endless_value(value)`
    - value: integer, ranging 0...16383
- **What:**  This function returns the value of the endless state. By default, this value is `0` when the endless is turned and tops out at `16383`.
  When this function is given a parameter, it will set the value associated with the endless state according to the parameter given and will output that `value` on each trigger.
- **Example:** 


### endless_min
- shortname: 
- **How:** `self:endless_min()` or `self:endless_min(value)`
    - value: integer, ranging 0...127
- **What:** This function returns the minimum value configured to the endless minimum state. This is `0` by default.
  When given a parameter, this function changes the minimum value of the endless state according to the `value` given as parameter.
- **Example:** The code `self:endless_min(20)` will set the starting value of the endless potentiometer to `20` when rotated.


### endless_max
- shortname: 
- **How:** `self:endless_max()` or `self:endless_max(value)`
    - value: integer, ranging 0...16383
- **What:** This function returns the maximum value configured to the endless maximum state. This is `16383` by default.
  When given a parameter, this function changes the maximum value of the endless state according to the `value` given as parameter.
- **Example:** The code `self:endless_max(110)` will set the end value of the endless potentiometer to `110` when turned.


### endless_mode
- shortname: 
- **How:** `self:endless_mode()` or `self:endless_mode(mode)`
    - resolution: integer, ranging 0...2
- **What:** This function returns the value of the endless mode. This is `0` or "absolute mode" by default.  
 When function is given `1` as a value, it will change the endless potentiometer to "relative mode binary offset". In this mode turning the endless 'backwards' or counterclockwise will always result in the value `8146` and turning it 'forwards' or clockwise will always result in the value `8247` .  
  When the function is given `2` as a value and self:endless_max(127), it will change the endless potentiometer to "relative mode 2's comp". In this mode turning the endless potentiometer 'backwards' or counterclockwise will always result in the value `127` and turning it 'forwards' or clockwise will always result in the value `1` .  
- **Example:** The code `self:endless_mode(1)` will change the endless potentiometer into relative mode. 


:::tip Relative mode users!
When using either relative mode, setting the endless potentiometer to a 7bit by setting its maximum value with `self:endless_max(127)` is recommended.
:::



<!-- ### endless_velocity
- **How:** `self:endless_velocity()` or `self:endless_velocity(velocity)`
  - velocity: integer, ranging 0...100
- **What:** This function returns the value of the endless velocity parameter. This is `100` by default. When the function is given a value for the `velocity` parameter, it will set  the endless velocity to that value. Velocity increases the steps the endless value increases on each tick, depending on the speed of rotation. Setting the `velocity` parameter to `0` turns off endless velocity completely.
- **Example:**  The code `self:endless_velocity(0)` will turn off the velocity increase function of the endless. In this case turning the endless by one tick, will increase the value of the endless by 1.  -->

### endless_sensitivity
- **How:** `self:endless_sensitivity()` or `self:endless_sensitivity(sensitivity)`
- **What:** Returns the value of the endless sensitivity, which is 100 by default. When given a value for the sensitivity parameter, it changes the sensitivity of the endless potentiometer. It adjusts how much rotation is needed to send out a value; a lower number means more rotation is required to send the value.
- **Example:** Set the sensitivity to a new value `self:endless_sensitivity(1)`  > Max amount of rotation to send out the value



### endless_elapsed_time
- shortname:
- **How:** `self:endless_elapsed_time()`
- **What:** This function returns the time elapsed since the last trigger in frames.
- **Example:** 
### endless_state
- shortname: est
- **How:** `self:endless_state()`
- **What:** This function will return the "state" of the control element.
- **Example:** 


</TabItem>
</Tabs>



