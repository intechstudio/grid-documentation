---
title:  Grid Functions
slug:   grid-functions
---


### Default Function Parameters

- lnum | LED # number
  - It is used in almost all functions. It is used to tell the function which LED it should affect.

### Base Local Variables

Base local variables exist in the *Local Definitions* Config Block. They are predefined variables used to define often used values, like the number of a given control element. You can also define your own variables to use in Code Blocks later.

*Important! If you'd like to define a local variable based on another local variable, you have to define them in a separate Local Variables blocks.*

- num | `this.ind()` function
  - `num` is used by default, in place of the `this.ind()` function, which calls the number of the given control element. 
- <a href="#val">val</a> | `this.bva()`, `this.pva()` or `this.eva()` functions
  - `val` is used by default in place of the `this.bva()`, `this.pva()` or `this.eva()` functions, all of which call the current value of the given control element (e.g. a button pressed down has the value of 127 by default).
- layer | 
  - It's not a function, but used as a variable by many functions. It refers to the two layers - named layer 1 and 2 - and is used two layer colors over each other in LED specific functions. Layers can be used to overlay a static color over a changing one based on input to achieve a gradient while adjusting values.
  - Colors and LED phases on different layers get added together, for example having the color blue (255,0,0) on layer 1, and the color red (0,0,255) set on layer 2 will result in the LED lighting up as purple (255,0,255) as the two colors get added  together. The same thing happens when using phase changes on the two layers, for example using two different animation types on two layers, but on the same LED, will result in the two animation types playing together, strengthening each other.
- red, gre, blu | 
  - Red, green and blue are used in many LED functions, separated by commas like this: `255,0,0` means the color red.

### LED

#### page_default_red()

- glr

  - **How:** `glr()` or `glr(red)`
    - $red: integer, ranging 0...255
  - **What:** This function returns the red RGB LED value default for the page when called. If called with a a parameter, the `red` parameter will set the default red color for that page.
  - **Example:** `glr()` will return `0` on a control element where the LED color is set to `(0,255,60)`.


#### page_default_green()

- glg

  - **How:** `glg()` or `glg(green)`
    - $green: integer, ranging 0...255
  - **What:** This function returns the green RGB LED value default for the page when called. If called with a a parameter, the `green` parameter will set the default green color for that page.
  - **Example:** `glg()` will return `255` on a control element where the LED color is set to `(0,255,60)`.

- glb

  - **How:** `glb()` or `glb(blue)`
    - $blue: integer, ranging 0...255
  - **What:** This function returns the blue RGB LED value default for the page when called. If called with a a parameter, the `blue` parameter will set the default blue color for that page.
  - **Example:** `glb()` will return `60` on a control element where the LED color is set to `(0,255,60)`.

- glp

  - **How:** `glp()` or `glp(lnum,layer,phase)`
    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $phase: integer, ranging 0...255
  - **What:** This function sets the LED light intensity according to the parameter called `phase`. When this function is called without a parameter, it returns the `phase` value of the control element.
  - **Example:** Inputting the `glp(num,1,128-val)` into a Code Block makes the LED light intensity on let's say a potentiometer control element change opposite of value, as it will have maximum light intensity at minimum value and maximum light intensity at minimum value. 

- glt <!-- will be setter getter -->

  - **How:** `glt(lnum,layer,timeout)`
    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $timeout: integer, ranging 0...65535
  - **What:** This function sets a timeout for the `glf` function. The timeout field sets the end of the `glf` frequency change, given in frames. Timeout will count down each frame from the the `timeout` parameter given and when it reaches 0, it changes the frequency to 0. <!-- amikor a timeout értéke 0ra csökken akkor automatikusan 0-ra áll a frequency, phase marad ott ahol éppen volt -->
  - **Example:** `glf(num,1,1)` and `glt(num,1,257)` will set a pulsing LED phase change that will increase LED light intensity to the max and then reset is to minimum intensity (when the timeout variable overflows from 256 to 257).

- gln

  - **How:** `gln(num,layer,red,green,blue)`
    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $red: integer, ranging 0...255
    - $green: integer, ranging 0...255
    - $blue: integer, ranging 0...255
  - **What:** This function sets the color for the minimum value set for a control element
  - **Example:** Inputting the `gln(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on minimum value.
    This red value is a small fraction of the color set for the control element, but not 0 red.<!-- nem zéro hanem nagyon halvány értéke a maxnak -->

- gld

  - **How**: `gld(num,layer,red,green,blue)`
    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $red: integer, ranging 0...255
    - $green: integer, ranging 0...255
    - $blue: integer, ranging 0...255
  - **What**: This function sets the color for the medium value set for a control element
  - **Example**: Inputting the `gld(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on minimum value, which by default equals 63.

- glx

  - **How**: `glx(num,layer,red,green,blue)`
    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $red: integer, ranging 0...255
    - $green: integer, ranging 0...255
    - $blue: integer, ranging 0...255
  - **What**: This function sets the color for the maximum value set for a control element.
  - **Example**: Inputting the `gld(num,1,255,0,0)` function in a Code Block makes the given control element have the color red, when on maximum value, which by default equals 127.

- glc

  - **How:** `glc(num,layer,reg,green,blue)`

    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $red: integer, ranging 0...255
    - $green: integer, ranging 0...255
    - $blue: integer, ranging 0...255

  - **What:** This function sets the default LED color for a control element.

  - **Example:** Inputting the `glc(num,1,255,0,0)` function into a Code Block makes the given control element's LED color red.

    <!-- ezt csinálja alapból, ezért nem nulla a min értéke, hanem csak nagyon halványan ugyan az a szín -->

          grid_led_set_min(mod, num, layer, r/20, g/20, b/20);                
        
          grid_led_set_mid(mod, num, layer, r/2, g/2, b/2);
        
          grid_led_set_max(mod, num, layer, r, g, b);

  

- glf

  - **How:** `glf(num,layer,frequency)`
    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $frequency: integer, ranging -255..255
  - **What:** This function assigns a pulse-like animation to the LED when called. The `frequency` parameter adjusts the speed of the animation e.g.: `1` is the default speed, where one period will take 256 frames to play, `2` is double that so half of the frames 128, or you could assign a `-` in front of the frequency value to make the animation play backwards.
  - **Example:** Inputting `glf(num,1,1)` in a Code Block makes the animation play on its slowest speed the the LED indefinitely. With a `glt` function you can assign a timeout to this animation.

- gls

  - **How:** `gls(num,layer,shape)`
    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $shape: integer, ranging 0...3 (0: ramp up, 1: ramp reversed, 2: square, 3: sine)
  - **What:** This function changes the type of animation the LED will play. The `shape` variable has values ranging from `0` to `3` each representing a different animation type.
  - **Example:**

- glpfs

  - **How:** `glpfs(num,layer,phase,frequency,shape)`
    - $lnum: integer, ranging 0...15 or 0...11 (if using PBF4)
    - $layer: integer, ranging 1...2
    - $phase: integer, ranging 0...255
    - $frequency: integer, ranging -255..255
    - $shape: integer, ranging 0...3 (0: ramp up, 1: ramp reversed, 2: square, 3: sine)
  - **What:** This function combines the phase change type functions into one.
  - **Example:** Inputting the `glpfs(num,1,val,1,1)` into a Code Block will play the given animation on layer 1.

### MIDI

- gms
  - **How: **`gms(channel,command,parameter1,parameter2)`
    - channel: integer, ranging 0...15
    - command: integer, ranging 128...255
    - parameter1: integer, ranging 0...127
    - parameter2 integer, ranging 0...127
  - **What:** This function sends a MIDI command when called. Channel specifies the MIDI channel the command is sent on and parameters 1 (value ranges from 0 to 127) and 2 (value ranges from 0 to 127).
  - Egész számok mint paraméter. Channnel 0-15. Command 128-255. Param1 0-127. Param2 0-127.
  - **Example:** 

### Keyboard Macro

- gks

  - **How:** `gks(default delay between keys,ismodifier,keystate 1..2..3,HID key code...)`

    - default delay between keystrokes: integer, 0...255 (time in milliseconds)
    - ismodifier: integer, ranging 0...1 OR 15
    - keystate: integer ranging 0...2 (0: up, 1: down, 2: updown)
    - HID key code: 0...255 

  - **What:** This function sends a series of keystrokes. **This function should not be used over the Macro Config Block, except in edge cases where you know what you're doing.**  <!-- we recommand to use the nice ui  -->The `timeout` parameter governs the timeout in between keypresses in milliseconds, after that in threes there are blocks of `ismodifier,keystate,HID key code` parameters. Each of these 3-part blocks representing a key action: `ismodifier` gives has the values of `0` or `1`  and it differentiates between function keys and normal keys in the HID key code table.  The `keystate`  parameter has the following values: `0` meaning key up or key release, `1` representing key down and `2` representing down-up where the key is pressed down and released instantly. The `HID key code` parameter has the values defined by standard USB HID key code values you can find online.

    If `ismodifier` is given the value `15` and `keystate` is given `0` , then `HID key code` will actually define an extra delay parameter in milliseconds (ranging 0...4095).

  - **Example:** The File Explorer macro (Win key + E) on Windows 10 looks like this when inputted in a Code Block: 

  - <!-- lehetnének ilyen konkrét bemásolós example-k -->

  - Try it with UI: <?lua --[[@gks]] gks(5,1,1,8,0,1,8,1,0,8,0,0,8) ?>

  - Try it with Codeblock <?lua --[[@cb]] gks(5,1,1,8,0,1,8,1,0,8,0,0,8) ?>

### Random

- grnd

  - **How:** `grnd()`
  - **What:** Returns the value of a random number from 0 to 255, so this function is an 8bit random number gen.
  - **Example:** Inputting `glc(num,1,grnd(),grnd(),grnd())` will set the LED color of the control element, each time a value change happens, the LED color of each button press will be randomized.

  

### HWCFG

- ghwcfg
  - **How:** `ghwcfg()`
  - **What:** Returns the hardware revision value. This value is a constant for the module.
  - **Example:** It's use is mainly for debugging and customer service, but you can check your hardware revision value by printing it out on the debugging window using `print(ghwcfg())`.

### Version

<!-- semantic version of the firmware!!! this should match editor's -->

- gvmaj
  - **How:** `gvmaj()`
  - **What:** Returns number of major firmware version.
  - **Example:** Inputting `print(gvmaj(),gvmin(),gvpat())` in a Code Block will result in Grid Editor outputting the software version number into the debugger text field (at the time of writing it outputs 1.2.0).
- gvmin
  - **How:** `gvmin()`
  - **What:** Returns number of minor firmware version.
  - **Example:** Inputting `print(gvmaj(),gvmin(),gvpat())` in a Code Block will result in Grid Editor outputting the software version number into the debugger text field (at the time of writing it outputs 1.2.0).
- gvpat
  - **How:** `gvpat()`
  - **What:** Returns number of patch firmware version.
  - **Example:** Inputting `print(gvmaj(),gvmin(),gvpat())` in a Code Block will result in Grid Editor outputting the software version number into the debugger text field (at the time of writing it outputs 1.2.0).

### Module Position

<!-- egy kép többet ér száz szánál ezért majd rakunk ide! -->

- gmx
  - **How:** `gmx()`
  - **What:** Returns the value of module position on the x axis. In the zero position there is the module connected to the host computer.<!-- x a left-right-->
  - **Example:**
- gmy
  - **How:** `gmy()`<!-- y a up-down-->
  - **What:** Returns the value of module position on the y axis. In the zero position there is the module connected to the host computer.
  - **Example:**
- gmr
  - **How:** `gmr()`
  - <!-- 0 usb side up, 1: -90°2: -180° stb-->
  - **What:** Returns the value of module rotation compared to the module connected by a USB cable to the host computer. The values returned are between `0` and `3`, with `0` representing the same module rotation as the connected module .
  - **Example:**

### Page

- gpl
  - **How:** `gpl(page_number)`
    - page_number: integer, ranging 0...3 
  - **What:** This function loads the page associated with the inputted `page_number` parameter.
- **Example:** Using the command `gpl(2)` will load the second page as set up in Grid Editor. You can also use the functions `gpn()`and`gpp()` as described below to switch to the next and previous pages by using the commands `gpl(gpn())`and`gpl(gpp())` respectively.
- gpn
  - **How:** `gpn()`
  - **What:** This function returns the number of the next active page. Next in this case meaning the page with the number `X+1` where `X` is the number of the currently active page. If the currently active page is also the last one, this function will return `0`.
  - **Example:** Writing `print(gpn())` into a Code Block.
- gpp
  - **How:** `gpp()`
  - **What:**  This function returns the number of the previous active page. Previous in this case meaning the page with the number `X-1` where `X` is the number of the currently active page.<!-- or lastpage when the activepage is page 0-->
  - **Example:**

### Print

- print
  - **How:** `print(functions)`<!-- only return value of functions!!! -->
  - **What:** The `print` function outputs the values of functions between the parentheses in the debugger window, in the order you asked for them. If you're trying to print out multiple values you have to use `,` as a divider. 
  - **Example:** Inputting the `print(this.bva())` in the Code Block will print each value change on a button press into the debugger window on the left.

### Element

- ind
  - **How:** `this.ind()`
  - **What:** Returns the value of the element # number.
  - **Example:** Inputting the code `print(this.ind())` into a Code Block will output the # number of the control element into the debug field. E.g. this Code Block on the top left button will output the message `0`.
