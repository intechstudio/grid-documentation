---
title:      Element Referencing
slug:       element-referencing
description: How to refer to a Control Element by number.
---

# Calling functions and variables, element referencing

In Grid Editor, both variables and functions have a place where they reside in, and can be called from. In practice, every function and some variables has a prefix and a suffix, where the prefix describes where the function is called. And every variable has a way they are first defined (created) and this determines where they live and how they are stored.

### Variables

In Grid, there are 3 kinds of variables: local, self and global. They are called differently as well: local and global variables are called by their name only, while self variables are called by using a `self.` prefix.

Local variables exist on the chosen Event of a control element, and can only be called on the Event of the  control element they are defined on. Everywhere else, they don't exist and their data is discarded after their function has finished running.
It is good practice to define these in the Locals Block of the Event you want to use them on.

Self variables exist on the Control Element, and their data is stored with the control element. They behave similarly to the Global variables in that that they are stored indefinitely within memory. They can be called in the following manner: `self.variable` where variable is the name of the self variable. You can also call them with `element[x].variable` referring to a self variable of a certain element.
It is good practice to define the self variables in the Self Block of a Control Element, preferably on their init event.

Global variables exist on the active page of the module and can be called by any control element, without suffix.
It is good practice to define these variables in the System Events/init Action Chain, so as to see the variables you have access to on a Page-wide level. You can use the Global Block for these.



### Functions

Functions have two parts, prefix and suffix. Prefix tells the function where to run, suffix define the function itself that runs.

This prefix can be `self:` or `element[x]:` . Where no prefix is used, the variable will be a global variable. 

Prefixes with `self:` will always run on the control element the code block is put in with the function. Prefixes with `element[x]`, where `x` is an integer between 0-15 will run the function on the corresponding control element (e.g. the `element[0]:button_value()` function will return the button value of the first control element). If `x`  is 16, it will call a global function. Such functions are the for example the timer, where each control element has it's own timer and there is a sixteenth, global timer as well.

The suffix is the name of the function: such as `button_value()` or `midi_send()`. 

The suffix has a parenthesis at the end. If there is a value between the parentheses brackets, the function will set the values to the given value. If there is no value given, the function will return the value of the function itself. This behavior is further described for each function in this reference manual.

### Notable exceptions

One exception from the previously described behavior: functions that set the LED parameters have no prefix, but define which LED they correspond to in the function itself. Please see the LED part of this document for further information.

Another notable exception are generic lua functions, such as the functions starting with  `math.`.

Other exceptions are described in the reference manual as such and will have no prefix in the "**How:**" part of their description.