---
title: Segment Calculate
slug: segment-calculate
layout: reference_manual
category: reference-manual
description: Reference for the `segment_calculate()` function.
---

# `segment_calculate`

---

Calculates segment values for multi-segment LED elements.

```lua
segment_calculate(
  segment: integer,
  value: integer,
  min: integer,
  max: integer
): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>segment</code> — Segment index</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — Current value</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>min</code> — Minimum value</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>max</code> — Maximum value</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>segment_value</code> — Calculated segment value (0–255)</div>



