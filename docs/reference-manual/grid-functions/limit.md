---
title: Limit
slug: limit
layout: reference_manual
category: reference-manual
description: Reference for the `limit()` function.
---

# global limit

---

```lua
function limit(
  value: number,
  min: number,
  max: number
) -> clamped number
```
@param `value` - Input value

@param `min` - Minimum bound

@param `max` - Maximum bound


@return `clamped` - Clamped value






Clamps a value to [min, max].

