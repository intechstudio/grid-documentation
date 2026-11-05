---
slug: global-config
title: Global Config
tags: [Action Block, Variables, Logic, Workflow]
description: "Global Config Block defines Global Variables and lets you adjust their values with sliders, dropdowns, toggles and input fields, without writing code."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Global Config" label="About Global Config" default>

Global Config Block defines [Global Variables](/wiki/actions/variables/global-variables) and gives each of them a friendly control. Instead of editing code, you adjust a configuration with a slider, a dropdown, a toggle or an input field.

It is made for settings that you tune again and again, for example a brightness, a mode, an on/off switch or an offset that the rest of the configuration reads.

The block creates ordinary global variables, so everything that applies to Global Variables applies here too:

:::caution Variable Accessibility
Variables created on a now inactive Page are **not** accessible on the currently active Page!
Variables created on one module, are **not** accessible from other modules.
:::

The block is always open. Unlike most Action Blocks, it can't be collapsed.

## Locked and Unlocked mode

The block has two modes. The **Unlock** / **Lock** button in the top right corner of the block switches between them.

- **Locked** (default): every variable is shown as a control. You can only change the **values**. The names, the control types and the ranges or options can't be changed.
- **Unlocked**: the block shows the Lua code in the embedded code editor, the same one the Code Block uses, with **Open Editor**, **Discard** and **Commit**. Use this mode to add, remove or rename variables and to change ranges or options.

The Lock button is disabled in two cases:

- There are uncommitted changes in the code editor. Commit or discard them first.
- The code doesn't follow the format below, so it can't be shown as controls. The block then tells you what to fix above the code editor.

## Controls

| Control | Looks like | Value |
| --- | --- | --- |
| `slider` | A slider with the current number next to it | A number between the minimum and the maximum |
| `select` | A dropdown | One of the listed text options |
| `toggle` | An on/off switch | `true` or `false` |
| `input` | A one-line code field, like in the Global Variables block | Any Lua expression |

When you change a value, it is sent to the module right away. The module only keeps it after a restart if you press **Store**. The block reminds you of this after every change.

## The code format

Global Config is a list of Lua assignments, one variable per line. Each line has the name of the variable, its value, and a control comment at the end of the line that sets which control to show:

```lua
dim = 256 --[[slider,0,1000]]
mode = "relative" --[[select,"absolute","relative"]]
```

The control comment is an ordinary Lua comment, so the module ignores it. The editor uses it to draw the controls.

### Control comments

| Control comment | Meaning |
| --- | --- |
| `--[[slider,min,max]]` | Slider from `min` to `max`, moving in steps of 1 |
| `--[[slider,min,max,step]]` | The same with your own step, for example `--[[slider,0,1,0.1]]` |
| `--[[select,"a","b","c"]]` | Dropdown with the listed options. Every option must be in quotes |
| `--[[toggle]]` | On/off switch |
| `--[[input]]` | Input field for any Lua expression |

### Descriptions

You can add a short description to a variable. Write it in a second comment right after the control comment. The block shows it in small text under the name of the variable:

```lua
dim = 40 --[[slider,0,100]] --[[Dims all the LEDs]]
```

The description must be a `--[[ ]]` block comment. A normal `-- comment` doesn't work, because Grid stores the whole script on a single line and a `--` comment would swallow everything after it.

:::note
Grid removes the space after a comma when it stores a script, and that includes the text of a description. Write descriptions without commas.
:::

### Rules

- One variable per line, in the form `name = value --[[control]]`.
- Every variable needs a control comment. Only a description (see above) may follow it on the line.
- The value must fit the control. A slider needs a number, a toggle needs `true` or `false`, and a select needs one of its options.
- A slider needs `min` smaller than `max` and a `step` greater than 0.
- A variable name can be used only once.
- Blank lines are allowed. Any other kind of line, for example a `print(...)` call or a normal `-- comment`, is not.
- If you clear an input field, its value becomes `nil`.

If the code breaks a rule, the block shows it as code and explains the problem, including the line number. Fix it, commit, and the Lock button works again.

## Examples

All four controls together, each with a description:

```lua
dim = 40 --[[slider,0,100]] --[[Dims all the LEDs]]
mode = "absolute" --[[select,"absolute","relative"]] --[[How the value is applied]]
enabled = true --[[toggle]] --[[Turns the effect on or off]]
offset = 0 --[[input]] --[[Added to every value]]
```

A slider with decimals, for example a speed factor:

```lua
speed = 1 --[[slider,0,2,0.1]]
```

An input can hold any expression, for example a value read from the element:

```lua
start = self:ind() --[[input]]
```

Using the variables in another block, for example a [Code Block](/wiki/actions/code/code-block) on the same Page:

```lua
if mode == "relative" and enabled then
  print(dim + offset)
end
```

:::tip Where to put it
Place Global Config on the System Event Setup so that the variables exist before any other event uses them.
:::

## Profile JSON format

In a saved profile the whole block is stored as one line of Lua. The block starts with the `--[[@gcfg]]` marker, which tells the editor that the code belongs to a Global Config block. The variables follow without line breaks:

```lua
--[[@gcfg]] dim=1000 --[[slider,0,1000]]mode="absolute" --[[select,"absolute","relative"]]enabled=true --[[toggle]]offset=0 --[[input]]
```

The editor expands this back to one variable per line when you open the block.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

There is no Reference Manual Entry for this article.

  </TabItem>
</Tabs>
