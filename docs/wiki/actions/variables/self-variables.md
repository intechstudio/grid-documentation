---
slug: self-variable-block
title: Self Variable Block
tags: [Action Block, Variables Block, Logic, Workflow]
---

Self Variable Block allows you to define Self Variables in a nice Block format, instead of doing them in the Code Block.

For a quick explanation for those who are not familiar with the concept of a variable, variables are "memory slots" that do one thing: store a value. That's it.

Variable types in the Grid ecosystem are differentiated by how accessible they are by other parts of Grid.

Self Variables in the Grid ecosystem are such values that are able to be accessed by **any part of Grid, when called appropriately**, **at any time**. It's a bit more limited than the Global Variable, and it still has the two big limitations applying to it that are the basis of using variables in Grid. All variables within Grid are stored in a Page per Module basis, meaning that:

:::caution Variable Accessibility
Variables created on a now inactive Page are **not** accessible on the currently active Page!
Variables created on one module, are **not** accessible from other modules.
:::

Local Variables are very useful for creating  variables that all of Grid can access, but the variable is associated with the Control element.

In Grid syntax self variables have the `self.` or `element[x].` prefix to them and they look like this: `self.var=0` or `element[0].val=0`.

Self variables are used in a couple of our configurations that store values for MIDI messages on the module, in these cases usually there are arrays defined as self variables on each control element. These arrays have 16 values stored within and therefore would be very cumbersome to store and call them globally. But using Self variables they can all be stored on their respective Control Element and be called by their Control Element's index in their prefix but have the same name (eg. `element[0].array[3]` and `element[3].array[3]`)