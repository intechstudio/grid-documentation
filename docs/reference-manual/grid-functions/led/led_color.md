---
title: Led Color
slug: led-color
layout: reference_manual
category: reference-manual
description: Reference for the `led_color()` function.
---

# `led_color`

---

Sets LED color by layer for a specific element LED.

```lua
led_color(
  led_index: integer,
  layer: Layer,
  red: integer,
  green: integer,
  blue: integer
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>led_index</code> — Hardware LED index (use led_address_get to resolve)</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>layer</code> — integer LED layer</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>red</code> — Red component (0–255)</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>green</code> — Green component (0–255)</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>blue</code> — Blue component (0–255)</div>



