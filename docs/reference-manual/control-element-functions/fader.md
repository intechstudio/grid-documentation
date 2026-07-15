---
title: FaderElement
slug: fader-control-element
layout: reference_manual
category: reference-manual
description: How to set up fader-type control elements.
---

- supers: [Element](element.md)
---

> In the Grid editor, when editing code for a FaderElement, the variables `self`, `element`, and `ele` are automatically typed as FaderElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:fader_value()     -- on the current element
> element[1]:fader_value() -- on a specific element from the array
> ```

### `FaderElement:potmeter_value`
---
Returns (or sets) the current fader value.

```lua
FaderElement:potmeter_value(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the value</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>value</code> — Current fader value</div>










### `FaderElement:potmeter_min`
---
Returns (or sets) the minimum fader value.

```lua
FaderElement:potmeter_min(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the minimum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>min</code> — Minimum value</div>










### `FaderElement:potmeter_max`
---
Returns (or sets) the maximum fader value.

```lua
FaderElement:potmeter_max(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the maximum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>max</code> — Maximum value</div>










### `FaderElement:potmeter_resolution`
---
Returns (or sets) the fader resolution.

```lua
FaderElement:potmeter_resolution(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the resolution</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>resolution</code> — Fader resolution</div>










### `FaderElement:potmeter_state`
---
Returns the fader state.

```lua
FaderElement:potmeter_state(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>state</code> — Current state</div>










### `FaderElement:potmeter_elapsed_time`
---
Returns the time elapsed since the last fader event (milliseconds).

```lua
FaderElement:potmeter_elapsed_time(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>ms</code> — Elapsed time in milliseconds</div>













