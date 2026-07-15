---
title: Map Saturate
slug: map-saturate
layout: reference_manual
category: reference-manual
description: Reference for the `map_saturate()` function.
---

# `map_saturate`

---

Maps and saturates a value from one range to another.

```lua
map_saturate(
  value: number,
  from_min: number,
  from_max: number,
  to_min: number,
  to_max: number
): number
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — Input value</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>from_min</code> — Source range minimum</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>from_max</code> — Source range maximum</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>to_min</code> — Target range minimum</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>to_max</code> — Target range maximum</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>mapped</code> — Mapped and clamped value</div>



