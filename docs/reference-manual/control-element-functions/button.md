---
title: ButtonElement
slug: button-control-element
layout: reference_manual
category: reference-manual
description: How to set up button-type control elements.
---

- supers: [Element](element.md)
---

> In the Grid editor, when editing code for a ButtonElement, the variables `self`, `element`, and `ele` are automatically typed as ButtonElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:button_value()     -- on the current element
> element[1]:button_value() -- on a specific element from the array
> ```

### `ButtonElement:button_value`
---
Returns (or sets) the current button value.

```lua
ButtonElement:button_value(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the button value</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>value</code> — Current button value</div>










### `ButtonElement:button_min`
---
Returns (or sets) the minimum button value.

```lua
ButtonElement:button_min(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the minimum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>min</code> — Minimum value</div>










### `ButtonElement:button_max`
---
Returns (or sets) the maximum button value.

```lua
ButtonElement:button_max(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the maximum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>max</code> — Maximum value</div>










### `ButtonElement:button_mode`
---
Returns (or sets) the button mode. 0 = momentary.

```lua
ButtonElement:button_mode(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the mode</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>mode</code> — Button mode</div>










### `ButtonElement:button_state`
---
Returns the button state. 0 = released, 127 = pressed.

```lua
ButtonElement:button_state(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>state</code> — Button state (0 or 127)</div>










### `ButtonElement:button_elapsed_time`
---
Returns the time elapsed since the last button event (milliseconds).

```lua
ButtonElement:button_elapsed_time(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>ms</code> — Elapsed time in milliseconds</div>










### `ButtonElement:button_step`
---
Calculates the button step based on mode, min, max, and value.
Returns false if button mode is 0 (momentary), otherwise returns the current step number.

```lua
ButtonElement:button_step(): boolean | integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>step</code> — Current step, or false if mode is 0</div>













