---
title:  Button Control Element
slug:   button-control-element
---

### Button Control Element

#### Button

- **button_number** | bnu
- **How:** `self:button_number()` or `self:button_number(number)`
    - $number: signed integer
  - **What:** This function when given no parameter, returns the # number of the control element. These numbers are from the top left, read left to right, top to bottom `0` to `15` OR in the case of the PBF4 from `0` to `11`. 
    When this function is given a parameter, it will set the # number of the control element to the `number` given.
  - **Example:**
  
- **button_value** | bva
- **How:** `self:button_value()` or `self:button_value(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the value of the button state. By default, this value is `127` when the button is pressed down and `0` when released.
    When this function is given a parameter, it will set the value associated with the button state according to the parameter given.
  - **Example:** Inputting the code `self:button_value(127)` will make all button press and  button release event return the value `127`.
  
- **button_min** | bmi
- **How:** `self:button_min()` or `self:button_min(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the minimum value of the button state. This is `0` by default.
    When given a parameter, this function changes the minimum value of the button state according to the `value` given as parameter.
  - **Example:** The code `self:button_min(20)` will set the value of the button to `20` when released.
  
- **button_max** | bma
- **How:** `self:button_max()` or `self:button_max(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the maximum value of the button state. This is `127` by default.
    When given a parameter, this function changes the maximum value of the button state according to the `value` given as parameter.
  - **Example:** The code `self:button_max(110)` will set the value of the button to `110` when pressed down.
  
- **button_mode** | bmo
- **How:** `self:button_mode()` or `self:button_mode(mode)`
    - resolution: integer, ranging 0...127
  - **What:** This function returns the value of the button mode. This is `0` by default. Button mode means how many 'steps' the button has between its maximum and minimum value. For example when the function is used to set this value like this: `self:bmo(mode)` the resolution parameter will govern the number of steps.
  - **Example:** The code `self:button_mode(2)` will make the default button a 3-step switch. The three states will be `0` , `63` and `127`.
  
- **button_elapsed_time** | bel
- **How:** `self:button_elapsed_time()`
  - **What:** This function returns the time elapsed since the last trigger in frames.
  - **Example:**
  
- **button_state** | bst
- **How:** `self:button_state()`
  - **What:** This function will return the "state" of the control element. In case of a button this is either "pressed down" `0`  OR "released" `127`. These values independent from the maximum and minimum values of the control element.
  - **Example:**