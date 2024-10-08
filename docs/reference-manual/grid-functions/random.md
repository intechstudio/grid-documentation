---
title: Random
slug: random
layout: reference_manual
group: reference-manual
description: How to get random values and randomize variables.
---

### random

- shortname: grnd

- **How:** `random8()`

- **What:** Returns the value of a random number from 0 to 255, so this function is an 8bit random number generator.

- **Example:** Inputting `led_color(num,1,random8(),random8(),random8())` will set the LED color of the control element, each time a value change happens, the LED color of each button press will be randomized.

  A fun example would be a code for randomizing LEDs on a Grid module with 16 LEDs:

  ```lua
  for x = 0, 16 do
  	r = random8()
  	g = random8()
  	b = random8()
  	led_color(x, 1, r, g, b)
  	led_color(x, 2, r, g, b)
  end
  ```

  If you'd want different values for the two layers just double the whole variables section like this:

  ```lua
  for x = 0, 16 do
  	r1 = random8()
  	g1 = random8()
  	b1 = random8()

  	r2 = random8()
  	g2 = random8()
  	b2 = random8()

  	led_color(x, 1, r1, g1, b1)
  	led_color(x, 2, r2, g2, b2)
  end
  ```

  This could be useful for encoders for example, that can have a different (layers 1+2 both active) color when you rotate an encoder while also pushing down on it.
