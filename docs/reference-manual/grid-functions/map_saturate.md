---
title: Map Saturate
slug: map-saturate
layout: reference_manual
category: reference-manual
description: Reference for the `map_saturate()` function.
---

# global map_saturate

---

```lua
function map_saturate(
  value: number,
  from_min: number,
  from_max: number,
  to_min: number,
  to_max: number
) -> mapped number
```
@param `value` - Input value

@param `from_min` - Source range minimum

@param `from_max` - Source range maximum

@param `to_min` - Target range minimum

@param `to_max` - Target range maximum


@return `mapped` - Mapped and clamped value






Maps and saturates a value from one range to another.

