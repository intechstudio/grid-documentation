---
slug: code-block
title: Code Block
tags: [Action Block, Code Block, LUA, Error, Reference Manual, Merge]
description: "A Code Block is a special type of Action Block that makes it possible to program complex actions with the help of lua scripting and specific Grid variables and functions."
---

import CodeBlock from './img/code_block_crop.png'
import CodeEditor from './img/code_block_code_editor.png'
import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Code Blocks" label="About Code Blocks" default>

## Description

A Code Block is a special type of Action Block that makes it possible to program complex actions with the help of lua scripting and specific Grid variables and functions. You can find a [comprehensive guide to lua 5.4](https://lua.org/manual/5.4/) and a [reference manual to Grid functions and variables](https://intech.studio/support/docs/reference-manual).



<ImageLightbox imageSrc={CodeBlock} citation={'This is the Code Block in the Grid Editor Action Chain'}/>

When using a Code Block you should be pressing the Commit button every time you'd want to exit the code editor and you want your code to be saved. When pressing commit, Editor will try and run your code, and will report back with simple error messages. 

The `LUA not OK` message will appear when there's something wrong with the syntax of the submitted code, or parts the code is referencing might not exist in the form your code is trying to call it.

When scripting in the code editor it will try and suggest functions and variables. Sometimes these suggestions are incorrectly formatted, so exercise caution when using these.

<ImageLightbox imageSrc={CodeEditor} citation={'This is the Code Block coding enviroment in Grid Editor'}/>

Any Action Block in Grid Editor can be reduced back to a Code Block using the Merge as Code button when one or more Action Blocks are selected. This can be helpful when trying to fit into the character limit of a given configuration, as Merge to Code will reduce your character count by at least 10% sometimes by more.

:::caution Be careful!
Using the Merge to Code function of Grid Editor will irreversibly change all the selected Action Blocks into a Code Block, with no way to change them back.
:::

On the Reference Manual Entry tab for Code Block, you can find a variety of Grid Editor functionality only accessible with lua code in a Code Block.


</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">


Code Blocks are the playground for lua code in Grid Editor. Below you can find some functions that belong to no specific action, but could be very useful regardless:

## Functions referring to elements

### element

  shortname: ele
  - **How:** `self:element_index()`
  - **What:** Returns the value of the element # number.
  - **Example:** Inputting the code `print(self:element_index())` into a Code Block will output the # number of the control element into the debug field. E.g. this Code Block on the top left button will output the message `0`.
    By default all Grid configurations use this function to define a local variable named `num` on each interactable event, such as a potmeter. This `num` variable is given value based on the `self:element_index()` function.

### element name

  shortname: gen

  - **How:** `self:element_name("name")`
      - "name": string, put between " " or ' ' symbols
  -  **What:** This function gives a name to the control element, or when called without parameters, it returns the name of the control element as a string.
    IMPORTANT: The name will only work, if it's put in the first place of the action chain.
  - **Example:** The function `self:element_name("helloworld")` in a code block, put in the top of the action chain, will name the control element *helloworld*.

### element name send

  shortname: gens

  - **How:** `self:element_name_send()`
  - **What:** 
  - **Example:** 


## Module orientation and position

### module_position_x
  - shortname: gmx
  - **How:** `module_position_x()`
  - **What:** Returns the value of module position on the x axis. In the zero position there is the module connected to the host computer.<!-- x a left-right-->
  - **Example:**

### module_position_y
  - shortname: gmy
  - **How:** `module_position_y()`<!-- y a up-down-->
  - **What:** Returns the value of module position on the y axis. In the zero position there is the module connected to the host computer.
  - **Example:**

### module_rotation
  - shortname: gmr
  - **How:** `module_rotation()` <!-- 0 usb side up, 1: -90°2: -180° stb-->
  - **What:** Returns the value of module rotation compared to the module connected by a USB cable to the host computer. The values returned are between `0` and `3`, with `0` representing the same module rotation as the connected module.
  - **Example:**

## Page functions

### page_load
- shortname: gpl
- **How:** `page_load(page_number)`
- page_number: integer, ranging 0...3 
- **What:** This function loads the page associated with the inputted `page_number` parameter.
- **Example:** Using the command `page_load(2)` will load the second page as set up in Grid Editor. You can also use the functions `page_next()`and`page_prev()` as described below to switch to the next and previous pages by using the commands `page_load(page_next())`and`page_load(page_prev())` respectively.

### page_next
- shortname: gpn
- **How:** `page_next()`
- **What:** This function returns the number of the next active page. Next in this case meaning the page with the number `X+1` where `X` is the number of the currently active page. If the currently active page is also the last one, this function will return `0`.
- **Example:** Writing `print(page_next())` into a Code Block.

### page_prev
- shortname: gpp
- **How:** `page_prev()`
- **What:**  This function returns the number of the previous active page. Previous in this case meaning the page with the number `X-1` where `X` is the number of the currently active page.<!-- or lastpage when the activepage is page 0-->
- **Example:**

## Printing to the debug window

### print
  - **How:** `print(function())` or `print("string")`<!-- only return value of functions!!! -->
  - **What:** The `print` function outputs the values of functions between the parentheses brackets in the debugger window, in the order you asked for them. If you're trying to print out multiple values you have to use `,` as a divider. 
    When using the `print()` function with a `"string"` parameter, the function will output the `string` value between the parentheses to the debug window within Editor.
    When using the `print()` function with a `function() ` parameter, the `print()` function will output the value of the function set as the parameter if the function has a valid return value.
  - **Example:** Inputting the `print(self:button_value())` in the Code Block will print each value change on a button press into the debugger window on the left.

    For troubleshooting purposes, using any kind of string in the print function can indicate for you if a programmed Action Chain is happening correctly. For example setting two different print functions such as `print("TRUE")` and `print("FALSE")` to the two parts of an  `if` and `else` function fork will help you check if the correct condition plays out when the event plays.

## Trigger events remotely

:::caution Be careful
The event_trigger() function described below is useful for a lot of things, but it also has the capability to introduce infinite trigger loops in your code.
Tread carefully!
:::

### event_trigger
- **How:** `event_trigger(element_number, event_number)`
  - element_number: integer, ranging 0...255
  - event_number: integer, ranging 0...6
- **What:**  This function triggers an event, independently from that event's trigger (e.g. press all buttons by just pressing one button). Each event has a defined reference number:
  - 0: init
  - 1: potmeter
  - 2: encoder
  - 3: button
  - 4: utility (system event only)
  - 5: midirx (system event only)
  - 6: timer
- **Example:** This function is the most useful


## Randomized values

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





</TabItem>
</Tabs>


<!---
A Code Block is a special type of Action Block that makes it possible to program complex actions with the help of lua scripting and specific Grid variables and functions. You can find a [comprehensive guide to lua 5.4](https://lua.org/manual/5.4/) and a [reference manual to Grid functions and variables](https://intech.studio/support/docs/reference-manual).


<ImageLightbox imageSrc={CodeBlock}/>

When using a Code Block you should be pressing the Commit button every time you'd want to exit the code editor and you want your code to be saved. When pressing commit, Editor will try and run your code, and will report back with simple error messages. 

The `LUA not OK` message will appear when there's something wrong with the syntax of the sobmitted code, or parts the code is referencing might not exist in the form your code is trying to call it.

When scripting in the code editor it will try and suggest functions and variables. Sometimes these suggestions are incorrectly formatted, so exercise caution when using these.

<ImageLightbox imageSrc={CodeEditor}/>

Any Action Block in Grid Editor can be reduced back to a Code Block using the Merge as Code button when one or more Action Blocks are selected. This can be helpful when trying to fit into the character limit of a given configuration, as Merge to Code will reduce your character count by at least 10% sometimes by more.

:::caution Be careful!
Using the Merge to Code function of Grid Editor will irreversibly change all the selected Action Blocks into a Code Block, with no way to change them back.
:::

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About " label="About " default>


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


There is no Reference Manual Entry for this article.



  </TabItem>
</Tabs>





--->