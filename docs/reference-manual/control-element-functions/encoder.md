---
title: EncoderElement
slug: encoder-control-element
layout: reference_manual
category: reference-manual
description: How to set up encoder-type control elements.
---

- supers: [Element](element.md)
---

> In the Grid editor, when editing code for a EncoderElement, the variables `self`, `element`, and `ele` are automatically typed as EncoderElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:encoder_value()     -- on the current element
> element[1]:encoder_value() -- on a specific element from the array
> ```

### `EncoderElement:encoder_value`
---
Returns (or sets) the current encoder value.

```lua
EncoderElement:encoder_value(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the encoder value</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>value</code> — Current encoder value</div>










### `EncoderElement:encoder_min`
---
Returns (or sets) the minimum encoder value.

```lua
EncoderElement:encoder_min(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the minimum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>min</code> — Minimum value</div>










### `EncoderElement:encoder_max`
---
Returns (or sets) the maximum encoder value.

```lua
EncoderElement:encoder_max(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the maximum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>max</code> — Maximum value</div>










### `EncoderElement:encoder_mode`
---
Returns (or sets) the encoder mode.

```lua
EncoderElement:encoder_mode(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the mode</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>mode</code> — Encoder mode</div>










### `EncoderElement:encoder_state`
---
Returns the encoder state (rotation direction). Values <64 = left, >63 = right.

```lua
EncoderElement:encoder_state(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>state</code> — Encoder state</div>










### `EncoderElement:encoder_velocity`
---
Returns the encoder velocity.

```lua
EncoderElement:encoder_velocity(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the velocity</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>velocity</code> — Rotation velocity</div>










### `EncoderElement:encoder_sensitivity`
---
Returns (or sets) the encoder sensitivity.

```lua
EncoderElement:encoder_sensitivity(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the sensitivity</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>sensitivity</code> — Encoder sensitivity</div>










### `EncoderElement:encoder_elapsed_time`
---
Returns the time elapsed since the last encoder event (milliseconds).

```lua
EncoderElement:encoder_elapsed_time(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>ms</code> — Elapsed time in milliseconds</div>










### `EncoderElement:button_value`
---
Returns (or sets) the current button value.

```lua
EncoderElement:button_value(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the button value</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>value</code> — Current button value</div>










### `EncoderElement:button_min`
---
Returns (or sets) the minimum button value.

```lua
EncoderElement:button_min(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the minimum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>min</code> — Minimum value</div>










### `EncoderElement:button_max`
---
Returns (or sets) the maximum button value.

```lua
EncoderElement:button_max(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the maximum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>max</code> — Maximum value</div>










### `EncoderElement:button_mode`
---
Returns (or sets) the button mode. 0 = momentary.

```lua
EncoderElement:button_mode(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the mode</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>mode</code> — Button mode</div>










### `EncoderElement:button_state`
---
Returns the button state. 0 = released, 127 = pressed.

```lua
EncoderElement:button_state(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>state</code> — Button state (0 or 127)</div>










### `EncoderElement:button_elapsed_time`
---
Returns the time elapsed since the last button event (milliseconds).

```lua
EncoderElement:button_elapsed_time(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>ms</code> — Elapsed time in milliseconds</div>










### `EncoderElement:button_step`
---
Calculates the button step based on mode, min, max, and value.

```lua
EncoderElement:button_step(): boolean | integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>step</code> — Current step, or false if mode is 0</div>













