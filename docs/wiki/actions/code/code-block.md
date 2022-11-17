---
slug: code-block
title: Code Block
tags: [Action Block, Code Block, LUA, Error, Reference Manual, Merge]
---
A Code Block is a special type of Action Block that makes it possible to program complex actions with the help of lua scripting and specific Grid variables and functions. You can find a [comprehensive guide to lua 5.4](https://lua.org/manual/5.4/) and a [reference manual to Grid functions and variables](https://intech.studio/support/docs/reference-manual).

When using a Code Block you should be pressing the Commit button every time you'd want to exit the code editor and you want your code to be saved. When pressing commit, Editor will try and run your code, and will report back with simple error messages. 

The `LUA not OK` message will appear when there's something wrong with the syntax of the sobmitted code, or parts the code is referencing might not exist in the form your code is trying to call it.

When scripting in the code editor it will try and suggest functions and variables. Sometimes these suggestions are incorrectly formatted, so exercise caution when using these.

Any Action Block in Grid Editor can be reduced back to a Code Block using the Merge as Code button when one or more Action Blocks are selected. This can be helpful when trying to fit into the character limit of a given configuration, as Merge to Code will reduce your character count by at least 10% sometimes by more.

:::caution Be careful!
Using the Merge to Code function of Grid Editor will irreversibly change all the selected Action Blocks into a Code Block, with no way to change them back.
:::