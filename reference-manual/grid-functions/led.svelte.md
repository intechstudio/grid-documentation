---
title:      LED
slug:       led
layout:     reference_manual     
category:   reference-manual
description: How to set LED parameters in Code Blocks.
---

## LED intensity

### led_value
  - shortname: glp
  - **How:** `led_value()` or `led_value(lnum,layer,value)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - phase: integer, ranging 0...255
  - **What:** This function sets the LED light intensity according to the parameter called `value`. When this function is called without a parameter, it returns the `value` value of the control element.
  - **Example:** Inputting the `led_value(num,1,128-val)` into a Code Block makes the LED light intensity on let's say a potentiometer control element change opposite of value, as it will have maximum light intensity at minimum value and maximum light intensity at minimum value. 

### led_timeout
  - shortname: glt <!-- will be setter getter -->
  - **How:** `led_timeout(lnum,layer,timeout)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - timeout: integer, ranging 0...65535
  - **What:** This function sets a timeout for the `led_animation_rate` function. The timeout field sets the end of the `led_animation_rate` frequency change, given in frames. Timeout will count down each frame from the the `timeout` parameter given and when it reaches 0, it changes the frequency to 0. <!-- amikor a timeout értéke 0ra csökken akkor automatikusan 0-ra áll a frequency, phase marad ott ahol éppen volt -->
  - **Example:** `led_animation_rate(num,1,1)` and `led_timeout(num,1,257)` will set a pulsing LED phase change that will increase LED light intensity to the max and then reset is to minimum intensity (when the timeout variable overflows from 256 to 257).

## LED color

### led_color_min 
  - shortname: gln
  - **How:** `led_color_min(num,layer,red,green,blue)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - red: integer, ranging 0...255
    - green: integer, ranging 0...255
    - blue: integer, ranging 0...255
  - **What:** This function sets the color for the minimum value set for a control element
  - **Example:** Inputting the `led_color_min(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on minimum value.
    This red value is a small fraction of the color set for the control element, but not 0 red.<!-- nem zéro hanem nagyon halvány értéke a maxnak -->

### led_color_mid
  - shortname: gld
  - **How**: `led_color_mid(num,layer,red,green,blue)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - red: integer, ranging 0...255
    - green: integer, ranging 0...255
    - blue: integer, ranging 0...255
  - **What**: This function sets the color for the medium value set for a control element
  - **Example**: Inputting the `led_color_mid(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on minimum value, which by default equals 63.

### led_color_max 
  - shortname: glx
  - **How**: `led_color_max(num,layer,red,green,blue)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - red: integer, ranging 0...255
    - green: integer, ranging 0...255
    - blue: integer, ranging 0...255
  - **What**: This function sets the color for the maximum value set for a control element.
  - **Example**: Inputting the `led_color_max(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on maximum value, which by default equals 127.

### led_color
  - shortname: glc
  - **How:** `led_color(num,layer,reg,green,blue)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - red: integer, ranging 0...255
    - green: integer, ranging 0...255
    - blue: integer, ranging 0...255
  - **What:** This function sets the default LED color for a control element.
  - **Example:** Inputting the `led_color(num,1,255,0,0)` function into a Code Block makes the given control element's LED color red.

    <!-- ezt csinálja alapból, ezért nem nulla a min értéke, hanem csak nagyon halványan ugyan az a szín -->

          grid_led_set_min(mod, num, layer, r/20, g/20, b/20);                
        
          grid_led_set_mid(mod, num, layer, r/2, g/2, b/2);
        
          grid_led_set_max(mod, num, layer, r, g, b);

## Default LED page colors

### led_default_red 

  - shortname: glr
  - **How:** `led_default_red()` or `led_default_red(red)`
    - red: integer, ranging 0...255
  - **What:** This function returns the red RGB LED value default for the page when called. If called with a a parameter, the `red` parameter will set the default red color for that page.
  - **Example:** `led_default_red()` will return `0` on a control element where the LED color is set to `(0,255,60)`.

### led_default_green

  - shortname: glg
  - **How:** `led_default_green()` or `led_default_green(green)`
    - green: integer, ranging 0...255
  - **What:** This function returns the green RGB LED value default for the page when called. If called with a a parameter, the `green` parameter will set the default green color for that page.
  - **Example:** `led_default_green()` will return `255` on a control element where the LED color is set to `(0,255,60)`.

### led_default_blue

  - shortname: glb
  - **How:** `led_default_blue()` or `led_default_blue(blue)`
    - blue: integer, ranging 0...255
  - **What:** This function returns the blue RGB LED value default for the page when called. If called with a a parameter, the `blue` parameter will set the default blue color for that page.
  - **Example:** `led_default_blue()` will return `60` on a control element where the LED color is set to `(0,255,60)`.

## LED animations

### led_animation_rate 
  - shortname: glf
  - **How:** `led_animation_rate(num,layer,frequency)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - frequency: integer, ranging -255..255
  - **What:** This function assigns a pulse-like animation to the LED when called. The `frequency` parameter adjusts the speed of the animation e.g.: `1` is the default speed, where one period will take 256 frames to play, `2` is double that so half of the frames 128, or you could assign a `-` in front of the frequency value to make the animation play backwards.
  - **Example:** Inputting `led_animation_rate(num,1,1)` in a Code Block makes the animation play on its slowest speed the the LED indefinitely. With a `glt` function you can assign a timeout to this animation.

### led_animation_type
  - shortname: gls
  - **How:** `led_animation_type(num,layer,type)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - shape: integer, ranging 0...3 (0: ramp up, 1: ramp reversed, 2: square, 3: sine)
  - **What:** This function changes the type of animation the LED will play. The `type` variable has values ranging from `0` to `3` each representing a different animation type.
  - **Example:**

### led_animation_phase_rate_type
  - shortname: glpfs
  - **How:** `led_animation_phase_rate_type(num,layer,phase,frequency,type)`
    - lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - layer: integer, ranging 1...2
    - phase: integer, ranging 0...255
    - frequency: integer, ranging -255..255
    - shape: integer, ranging 0...3 (0: ramp up, 1: ramp reversed, 2: square, 3: sine)
  - **What:** This function combines the LED phase change type functions into one.
  - **Example:** Inputting the `led_animation_phase_rate_type(num,1,val,1,1)` into a Code Block will play the given animation on layer 1.
