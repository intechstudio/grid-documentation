---
title: Led Value
slug: led-value
layout: reference_manual
category: reference-manual
description: Reference for the `led_value()` function.
---

# global led_value

---

```lua
function led_value(
  led_index: integer,
  layer: Layer,
  value: integer
)
```
@param `led_index` - Hardware LED index

@param `layer` - integer LED layer

@param `value` - Phase/intensity value (0–255)







Sets the LED phase/intensity value for a specific LED and layer.

