---
slug: global-config
title: Global Config
tags: [Action Block, Variables, Logic, Workflow]
description: "Global Config Block lets you define Global Variables and adjust their values with sliders, dropdowns, toggles and input fields, without touching code."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Global Config" label="About Global Config" default>

Global Config Block defines [Global Variables](/wiki/actions/variables/global-variables) and gives each one a friendly control, so you can adjust a configuration with a slider, a dropdown, a toggle or an input field instead of editing code.

It is made for settings that you tune again and again, for example a brightness, a mode, an on/off switch or an offset that the rest of the configuration reads.

The block creates ordinary global variables. Everything said about Global Variables applies here too:

:::caution Variable Accessibility
Variables created on a now inactive Page are **not** accessible on the currently active Page!
Variables created on one module, are **not** accessible from other modules.
:::

## Locked and Unlocked mode

The block has two modes. You switch between them with the **Unlock** / **Lock** button in the top right corner of the block.

- **Locked** (default): the variables are shown as controls. You can only change the **values**. The names, the control types and the ranges or options are fixed.
- **Unlocked**: the block shows the Lua code in the embedded code editor, the same as the Code Block, with **Open Editor**, **Discard** and **Commit**. Use this mode to add, remove or rename variables and to change ranges and options.

The Lock button is disabled while there are uncommitted edits in the code editor, so commit or discard them first. It is also disabled when the code can't be shown as controls. The block then tells you the reason above the code editor.

## Controls

| Control | Looks like | Value |
| --- | --- | --- |
| `slider` | A slider with the current number | A number between the minimum and maximum |
| `select` | A dropdown | One of the listed text options |
| `toggle` | An on/off switch | `true` or `false` |
| `input` | A one-line code field, like in the Global Variables block | Any Lua expression |

When you change a value, the new value is sent to the module right away. To keep it after the module restarts, press **Store**. The block reminds you of this after every change.

## The code format

Global Config is a single Lua assignment. Every variable name is followed directly by a comment that describes its control, then comes `=`, then one value for each variable in the same order:

```lua
dim --[[slider,0,100]], mode --[[select,"absolute","relative"]] = 40, "absolute"
```

The comment is an ordinary Lua comment, so the module ignores it. It is only used by the editor to draw the controls.

### Control descriptions

| Description | Meaning |
| --- | --- |
| `--[[slider,min,max]]` | Slider from `min` to `max`, moving in steps of 1 |
| `--[[slider,min,max,step]]` | The same with a custom step, for example `--[[slider,0,1,0.1]]` |
| `--[[select,"a","b","c"]]` | Dropdown with the listed options. Each option must be in quotes |
| `--[[toggle]]` | On/off switch |
| `--[[input]]` | Input field for any Lua expression |

### Rules

- Every variable needs a control description, and it must come right after the name: `dim --[[slider,0,100]]`.
- Variables are separated by commas, and so are the values. There must be exactly as many values as variables.
- The value must fit the control. A slider needs a number, a toggle needs `true` or `false`, and a select needs one of its options.
- A slider needs `min` smaller than `max` and a `step` greater than 0.
- Variable names must be unique.
- The code editor's formatter may move the comma in front of the description (`dim, --[[slider,0,100]]`). This is fine and works the same.

If the code does not follow these rules, the block shows it as code with a short explanation of what to fix, and the Lock button stays disabled until the code is valid.

## Examples

All four controls together:

```lua
dim --[[slider,0,100]], mode --[[select,"absolute","relative"]], enabled --[[toggle]], offset --[[input]] = 40, "absolute", true, 0
```

A slider with decimals, used for a speed factor:

```lua
speed --[[slider,0,2,0.1]] = 1
```

An input can hold any expression, for example a value read from the element:

```lua
start --[[input]] = self:ind()
```

Using the variables in other blocks, for example a [Code Block](/wiki/actions/code/code-block) on the same Page:

```lua
if mode == "relative" and enabled then
  print(dim + offset)
end
```

:::tip Where to put it
Place Global Config on the System Event Setup so that the variables exist before any other event uses them.
:::

## For AI assistants

When you generate a Global Config script:

1. Write one assignment, `names = values`, with one `--[[...]]` description directly after every name.
2. Use only `slider`, `select`, `toggle` and `input`.
3. Quote select options and the select value with double quotes, and make the value one of the options.
4. Write toggle values as `true` or `false`, slider values as plain numbers within the range.
5. Keep the number of values equal to the number of variables.
6. Do not add other statements to the same block. Put them in a Code Block.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

There is no Reference Manual Entry for this article.

  </TabItem>
</Tabs>
