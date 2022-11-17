---
slug: global-variables
title: Global Variables
tags: [Action Block, Variables, Logic, Workflow]
---

Global Variables Block allows you to define Global Variables in a nice Block format, instead of doing them in the Code Block.

For a quick explanation for those who are not familiar with the concept of a variable, variables are "memory slots" that do one thing: store a value. That's it.

Variable types in the Grid ecosystem are differentiated by how accessible they are by other parts of Grid.

Global Variables in the Grid ecosystem are such values that are able to be accessed by **any part of Grid**, **at any time**. It's the least limited type of variable, but it still has two big limitations that are the basis of using variables in Grid. All variables within Grid are stored in a Page per Module basis, meaning that:

:::caution Variable Accessibility
Variables created on a now inactive Page are **not** accessible on the currently active Page!
Variables created on one module, are **not** accessible from other modules.
:::

So understanding these limitations what does a global variable allow you to do? 
In essence a Global Variable created on a Grid module Page is accessible by any function anywhere on that Page all the time.

In Grid syntax global variables have no prefix to them and they look like this: `gvar=0`.

This allows for the creation of variables that can help you create configurations faster, for example creating a variable called `globalmidich=0` on System Event Init will create a global variable, that can later be used by all MIDI Blocks on the module to send out MIDI messages on MIDI Channel `globalmidich`. If you want you could even configure it to be able to change on let's say the first encoder on the module.

