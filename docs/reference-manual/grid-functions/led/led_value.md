---
title: Led Value
slug: led-value
layout: reference_manual
category: reference-manual
description: Reference for the `led_value()` function.
---

# `led_value`

---

Sets the LED phase/intensity value for a specific LED and layer.

```lua
led_value(
  led_index: integer,
  layer: Layer,
  value: integer
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>led_index</code> — Hardware LED index</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>layer</code> — integer LED layer</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — Phase/intensity value (0–255)</div>


### Usage
You can call this in the global scope.
```
led_value(self:element_index(), 2, 255) -- this sets LED to max brightness
```

