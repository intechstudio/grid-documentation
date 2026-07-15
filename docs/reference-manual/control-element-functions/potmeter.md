---
title: PotmeterElement
slug: potmeter-control-element
layout: reference_manual
category: reference-manual
description: How to set up potentiometer-type control elements.
---

- supers: [Element](element.md)
---

> In the Grid editor, when editing code for a PotmeterElement, the variables `self`, `element`, and `ele` are automatically typed as PotmeterElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:potmeter_value()     -- on the current element
> element[1]:potmeter_value() -- on a specific element from the array
> ```

### `PotmeterElement:potmeter_value`
---
Returns (or sets) the current potentiometer value.

```lua
PotmeterElement:potmeter_value(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the value</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>value</code> — Current potentiometer value</div>










### `PotmeterElement:potmeter_min`
---
Returns (or sets) the minimum potentiometer value.

```lua
PotmeterElement:potmeter_min(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the minimum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>min</code> — Minimum value</div>










### `PotmeterElement:potmeter_max`
---
Returns (or sets) the maximum potentiometer value.

```lua
PotmeterElement:potmeter_max(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the maximum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>max</code> — Maximum value</div>










### `PotmeterElement:potmeter_resolution`
---
Returns (or sets) the potentiometer resolution.

```lua
PotmeterElement:potmeter_resolution(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the resolution</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>resolution</code> — Potentiometer resolution</div>










### `PotmeterElement:potmeter_state`
---
Returns the potentiometer state.

```lua
PotmeterElement:potmeter_state(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>state</code> — Current state</div>










### `PotmeterElement:potmeter_elapsed_time`
---
Returns the time elapsed since the last potentiometer event (milliseconds).

```lua
PotmeterElement:potmeter_elapsed_time(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>ms</code> — Elapsed time in milliseconds</div>













