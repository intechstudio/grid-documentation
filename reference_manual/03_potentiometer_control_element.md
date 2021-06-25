---
title:  Potentiometer Control Element
slug:   potentiometer-control-element
---

### Potentiometer and Fader Control Elements

#### Potentiometer rotation and Fader slide

- **potmeter_number** | pnu

  - **How:** `this.pnu()` or `this.pnu(number)`
    - $number: signed integer
  - **What:** This function when given no parameter, returns the # number of the control element. These numbers are from the top left, read left to right, top to bottom `0` to `15` OR in the case of the PBF4 from `0` to `11`. 
    When this function is given a parameter, it will set the # number of the control element to the `number` given.
  - **Example:**

- **potmeter_value** | pva

  - **How:** `this.pva()` or `this.pva(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the value of the potentiometer state. By default, this value is `0` when the potentiometer is set in the minimum position, and tops out at `127`.
    When this function is given a parameter, it will set the value associated with the potentiometer state according to the parameter given and will output that `value` on each trigger.
  - **Example:** 

- **potmeter_min** | pmi
  - **How:** `this.pmi()` or `this.pmi(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the minimum value configured to the potentiometer minimum state. This is `0` by default.
    When given a parameter, this function changes the minimum value of the potentiometer state according to the `value` given as parameter.
  - **Example:** The code `this.pmi(30)` will set the potentiometer value minimum to `30`.

- **potmeter_max** | pma

  - **How:** `this.pma()` or `this.pma(value)`
    -  <a href="#val">value</a>: integer, ranging 0...127
  - **What:** This function returns the maximum value configured to the potentiometer maximum state. This is `127` by default.
    When given a parameter, this function changes the maximum value of the potentiometer state according to the `value` given as parameter.
  - **Example:** The code `this.pma(100)` will set the potentiometer value maximum to `100`.

- **potmeter_resolution** | pmo

  - **How:** `this.pmo()` or `this.pmo(bitdepth)`
    - bitdepth: integer, ranging 4...12
  - **What:** This function returns the value of the potentiometer mode. This is`7` by default. This means that the number of steps between maximum and minimum values will be `2 to the power of 7` or `128`.
    When given a parameter, this function sets the 'steps' between the minimum and maximum value according to the `bitdepth` given. For example setting it to `2` makes the potentiometer have `2 to the power of 4` or `16` steps.
  - **Example:** The code `this.pmo(11)` will make the potentiometer have `2048` steps. But be careful, if you don't increase the minimum and maximum potentiometer values, this "resolution" increase won't really show in usage.

- **potmeter_elapsed_time** | pel

  - **How:** `this.pel()`
  - **What:** This function returns the time elapsed since the last trigger in frames.
  - **Example:**

- **potmeter_state** | pst

  - **How:** `this.pst()`
  - **What:** This function will return the "state" of the control element.
  - **Example:**
