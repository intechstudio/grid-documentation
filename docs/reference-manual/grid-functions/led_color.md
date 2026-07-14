---
title: Led Color
slug: led-color
layout: reference_manual
category: reference-manual
description: Reference for the `led_color()` function.
---

# global led_color

---

```lua
function led_color(
  led_index: integer,
  layer: Layer,
  red: integer,
  green: integer,
  blue: integer
)
```
@param `led_index` - Hardware LED index (use led_address_get to resolve)

@param `layer` - integer LED layer

@param `red` - Red component (0–255)

@param `green` - Green component (0–255)

@param `blue` - Blue component (0–255)







Sets LED color by layer for a specific element LED.

