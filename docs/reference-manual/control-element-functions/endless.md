---
title: EndlessElement
slug: endless-control-element
layout: reference_manual
category: reference-manual
description: How to set up endless-type control elements.
---

- supers: [Element](element.md)
---

> In the Grid editor, when editing code for a EndlessElement, the variables `self`, `element`, and `ele` are automatically typed as EndlessElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:endless_value()     -- on the current element
> element[1]:endless_value() -- on a specific element from the array
> ```

### `EndlessElement:endless_value`
---
Returns (or sets) the current endless potentiometer value.

```lua
EndlessElement:endless_value(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the value</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>value</code> — Current value</div>










### `EndlessElement:endless_min`
---
Returns (or sets) the minimum endless potentiometer value.

```lua
EndlessElement:endless_min(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the minimum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>min</code> — Minimum value</div>










### `EndlessElement:endless_max`
---
Returns (or sets) the maximum endless potentiometer value.

```lua
EndlessElement:endless_max(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the maximum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>max</code> — Maximum value</div>










### `EndlessElement:endless_mode`
---
Returns (or sets) the endless potentiometer mode.

```lua
EndlessElement:endless_mode(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the mode</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>mode</code> — Mode value</div>










### `EndlessElement:endless_state`
---
Returns the endless potentiometer state.

```lua
EndlessElement:endless_state(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>state</code> — Current state</div>










### `EndlessElement:endless_velocity`
---
Returns the endless potentiometer velocity.

```lua
EndlessElement:endless_velocity(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>velocity</code> — Rotation velocity</div>










### `EndlessElement:endless_direction`
---
Returns the endless potentiometer direction.

```lua
EndlessElement:endless_direction(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>direction</code> — Rotation direction</div>










### `EndlessElement:endless_sensitivity`
---
Returns (or sets) the endless potentiometer sensitivity.

```lua
EndlessElement:endless_sensitivity(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the sensitivity</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>sensitivity</code> — Sensitivity value</div>










### `EndlessElement:led_offset`
---
Returns the LED offset for this endless element.

```lua
EndlessElement:led_offset(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the offset</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>offset</code> — LED offset</div>










### `EndlessElement:button_value`
---
Returns (or sets) the current button value.

```lua
EndlessElement:button_value(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the button value</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>value</code> — Current button value</div>










### `EndlessElement:button_min`
---
Returns (or sets) the minimum button value.

```lua
EndlessElement:button_min(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the minimum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>min</code> — Minimum value</div>










### `EndlessElement:button_max`
---
Returns (or sets) the maximum button value.

```lua
EndlessElement:button_max(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the maximum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>max</code> — Maximum value</div>










### `EndlessElement:button_mode`
---
Returns (or sets) the button mode. 0 = momentary.

```lua
EndlessElement:button_mode(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the mode</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>mode</code> — Button mode</div>










### `EndlessElement:button_state`
---
Returns the button state. 0 = released, 127 = pressed.

```lua
EndlessElement:button_state(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>state</code> — Button state (0 or 127)</div>










### `EndlessElement:button_elapsed_time`
---
Returns the time elapsed since the last button event (milliseconds).

```lua
EndlessElement:button_elapsed_time(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>ms</code> — Elapsed time in milliseconds</div>










### `EndlessElement:button_step`
---
Calculates the button step based on mode, min, max, and value.

```lua
EndlessElement:button_step(): boolean | integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>step</code> — Current step, or false if mode is 0</div>













