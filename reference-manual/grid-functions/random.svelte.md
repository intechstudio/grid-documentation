---
title:  Random
slug:   random
layout: reference_manual
group:  reference-manual
description: How to get random values and randomize variables.
---


### random
  - shortname: grnd

  - **How:** `random()`

  - **What:** Returns the value of a random number from 0 to 255, so this function is an 8bit random number generator.

  - **Example:** Inputting `led_color(num,1,random(),random(),random())` will set the LED color of the control element, each time a value change happens, the LED color of each button press will be randomized.

    A fun example would be a code for randomizing LEDs on a Grid module with 16 LEDs:

    ```lua
    for x = 0, 16 do
    	r = random()
    	g = random()
    	b = random()
    	led_color(x, 1, r, g, b)
    	led_color(x, 2, r, g, b)
    end
    ```

    If you'd want different values for the two layers just double the whole variables section like this:

    ```lua
    for x = 0, 16 do
    	r1 = random()
    	g1 = random()
    	b1 = random()
        
    	r2 = random()
    	g2 = random()
    	b2 = random()
        
    	led_color(x, 1, r1, g1, b1)
    	led_color(x, 2, r2, g2, b2)
    end
    ```

    This could be useful for encoders for example, that can have a different (layers 1+2 both active) color when you rotate an encoder while also pushing down on it.

