---
title:  Random
slug:   random
layout: reference_manual
group:  reference-manual
---


### random
  - shortname: grnd
  - **How:** `random()`
  - **What:** Returns the value of a random number from 0 to 255, so this function is an 8bit random number generator.
  - **Example:** Inputting `led_color(num,1,random(),random(),random())` will set the LED color of the control element, each time a value change happens, the LED color of each button press will be randomized.