---
title:  Encoder Control Element
slug:   encoder-control-element
---

### Encoder Control Element

#### Encoder button

- bnu
  - **How:** `this.bnu()` or `this.bnu(number)`
    - $number: signed integer
  - **What:** This function when given no parameter, returns the # number of the control element. These numbers are from the top left, read left to right, top to bottom `0` to `15` OR in the case of the PBF4 from `0` to `11`. 
    When this function is given a parameter, it will set the # number of the control element to the `number` given.
  - **Example:**
- bva
  - **How:** `this.bva()` or `this.bva(value)`
    - <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the value of the button state. By default, this value is `127` when the button is pressed down and `0` when released.
    When this function is given a parameter, it will set the value associated with the button state according to the parameter given.
  - **Example:** Inputting the code `this.bva(127)` will make all button press and  button release event return the value `127`.
- bmi
  - **How:** `this.bmi()` or `this.bmi(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the minimum value of the button state. This is `0` by default.
    When given a parameter, this function changes the minimum value of the button state according to the `value` given as parameter.
  - **Example:** The code `this.bmi(20)` will set the value of the button to `20` when released.
- bma
  - **How:** `this.bma()` or `this.bma(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the maximum value of the button state. This is `127` by default.
    When given a parameter, this function changes the maximum value of the button state according to the `value` given as parameter.
  - **Example:** The code `this.bma(110)` will set the value of the button to `110` when pressed down.
- bmo
  - **How:** `this.bmo()` or `this.bmo(resolution)`
    - resolution: integer, ranging 0...127
  - **What:** This function returns the value of the button mode. This is `0` by default. Button mode means how many 'steps' the button has between its maximum and minimum value. For example when the function is used to set this value like this: `this.bmo(resolution)` the resolution parameter will govern the number of steps.
  - **Example:** The code `this.bmo(2)` will make the default button a 3-step switch. The three states will be `0` , `63` and `127`.
- bel
  - **How:** `this.bel()`
  - **What:** This function returns the time elapsed since the last trigger in frames.
  - **Example:**
- bst
  - **How:** `this.bst()`
  - **What:** This function will return the "state" of the control element. In case of a button this is either "pressed down" `0`  OR "released" `127`. These values independent from the maximum and minimum values of the control element.
  - **Example:**

#### Encoder rotation

- enu
  - **How:** `this.enu()` or `this.enu(number)`
    - $number: signed integer
  - **What:** This function, when given no parameter, returns the # number of the control element. These numbers are from the top left, read left to right, top to bottom `0` to `15`. 
    When this function is given a parameter, it will set the # number of the control element to the `number` given.
  - **Example:**
- eva
  - **How:** `this.eva() `or `this.eva(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:**  This function returns the value of the encoder state. By default, this value is `0` when the encoder is turned and tops out at `127`.
    When this function is given a parameter, it will set the value associated with the encoder state according to the parameter given and will output that `value` on each trigger.
  - **Example:** 
- emi
  - **How:** `this.emi()` or `this.emi(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the minimum value configured to the encoder minimum state. This is `0` by default.
    When given a parameter, this function changes the minimum value of the encoder state according to the `value` given as parameter.
  - **Example:** The code `this.emi(20)` will set the starting value of the encoder to `20` when rotated.
- ema
  - **How:** `this.ema()` or `this.ema(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the maximum value configured to the encoder maximum state. This is `127` by default.
    When given a parameter, this function changes the maximum value of the encoder state according to the `value` given as parameter.
  - **Example:** The code `this.ema(110)` will set the end value of the encoder to `110` when turned.
- emo
  - **How:** `this.emo()` or `this.emo(resolution)`
    - resolution: integer, ranging 0...1
  - **What:** This function returns the value of the encoder mode. This is `0`  or "absolute mode" by default.
    When function is given `1` as a value, it will change the encoder to "relative mode". In this mode turning the encoder 'backwards' or counterclockwise will always result in the value `63` and turning it 'forwards' or clockwise will always result in the value `64` .
  - **Example:** The code `this.emo(1)` will change the encoder into relative mode. 
- eel
  - **How:** `this.eel()`
  - **What:** This function returns the time elapsed since the last trigger in frames.
  - **Example:** 
- est
  - **How:** `this.est()`
  - **What:** This function will return the "state" of the control element.
  - **Example:** 