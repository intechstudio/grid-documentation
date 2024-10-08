---
title: "More about: Variables"
slug: element-referencing
description: How to refer to a Control Element by number.
tags: [Logic, Local, Global, Self, Function, Variables]
---

In Grid Editor, both variables and functions have a **place** where they are stored/called, and a way they can be called upon, a **name**.

Variable types are determined by the way they are first defined (created) and this also determines where they live and how they are stored and consequently the way they are named. This results in every function and variable having their own name and these names being made up from two parts: a _prefix_ and a _suffix_.

So each type of variable has its own way to be created, has their own naming scheme (with a pre- and suffix) and a unqiue way they store and use values in themselves. Neat, so how to create and name variables and call functions?

### Variables

**In Grid, there are 3 kinds of variables: [local](/docs/wiki/actions/variables/local-variables.md), [self](/docs/wiki/actions/variables/self-variables.md) and [global](/docs/wiki/actions/variables/global-variables.md).** When they are created, they receive different types of names as well: local and global variables are called by their given name only therefore have no prefix, while self variables are called by using a `self.` prefix in front of their given name.

#### Local Variables

Local variables exist on the chosen Event of a Control Element, and can only be called on the Event of that specific control element they are defined on. Everywhere else, they don't exist and their data is discarded after their function has finished running.

For example a local variable defined in a Local Block on the Setup Event of a Potentiometer, can only be referenced and used on that Event and not on others, like the Potmeter Event or the Timer Event.

:::tip Good practice
It is good practice to define these in the Locals Block of the Event you want to use them on.

For example, the default `ch` variable is only used on such Events that use them for MIDI channel assignment for MIDI messages.
:::

#### Self Variables

Self variables exist on the Control Element, and their data is stored with the Control Element. They behave similarly to the global variables in that that they are stored indefinitely within memory.

They can be called in the following manner: `self.variable` where "variable" is the name of the self variable. You can also call them with `element[x].variable` referring to a self variable of a certain element.

:::tip Good practice
It is good practice to define the self variables of a Control Element on their Setup Event in the [Self Block](/docs/wiki/actions/variables/self-variables.md), this can help you save some [characters](/docs/wiki/more/char-limit.md) on Events such as a Control Element Event.
:::

#### Global Variables

Global variables exist on the active page of the module and can be called by any control element, without suffix, just by using the name they were named such as `gvariable`.

:::tip Good practice
It is good practice to define these variables in the Action Chain of the System Events/Setup Event in a [Global Block](/docs/wiki/actions/variables/global-variables.md), this way you can group all the global variables the Page has access to in one place and save some space as this Event is not used much by default.
:::

### Functions

Names of functions have two parts, _prefix_ and _suffix_. Prefix tells the function where to run, suffix defines the function itself that runs.

When calling a function in a Code Block, their prefix can be either `self:` or `element[x]:`. If no prefix is used, the function will run globally, like the [`module_rotation()`](/docs/reference-manual/grid-functions/module-position.md#module_rotation) function.

Prefixes with `self:` will always run on the Control Element the Code Block is put in with the function. Prefixes with `element[x]:`, where `x` is an integer between 0-15 will run the function on the corresponding control element (e.g. the `element[0]:button_value()` function will return the button value of the first control element). If `x` is 16, it will call a global function. Such functions are the for example the timer, where each control element has it's own timer and there is a sixteenth, global timer as well.

The suffix is the name of the function: such as `button_value()` or `midi_send()`.

The suffix has a parentheses at the end. If there is a value between the parentheses brackets, the function will set the values to the given value. If there is no value given, the function will return the value of the function itself. This behavior is further described for each function in this reference manual.

:::caution Be careful!
When calling variables with a prefix, they'll **always use a full stop** inbetween and **NO parentheses** at the end:

`self.echo` &#60;- This is a self variable.

When calling functions, they'll **always use a colon** inbetween and **will always use parentheses** after the suffix:

`self:element_index()` &#60;- This is a self function.
:::

### Notable exceptions

One exception from the previously described behavior: functions that set the LED parameters have no prefix, but define which LED they correspond to in the function parameters defined between the parentheses. Please see the [LED part of the reference manual](/docs/reference-manual/grid-functions/led.md) for further information.

Another notable exception are generic lua functions, such as the functions starting with `math.`. You can learn more about [lua here](https://www.lua.org/pil/contents.html).

Other exceptions are described in the [reference manual](/docs/reference-manual/introduction.md) as such and will have no prefix in the "**How:**" part of their description.
