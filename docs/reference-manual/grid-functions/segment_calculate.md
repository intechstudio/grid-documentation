---
title: Segment Calculate
slug: segment-calculate
layout: reference_manual
category: reference-manual
description: Reference for the `segment_calculate()` function.
---

# global segment_calculate

---

```lua
function segment_calculate(
  segment: integer,
  value: integer,
  min: integer,
  max: integer
) -> segment_value integer
```
@param `segment` - Segment index

@param `value` - Current value

@param `min` - Minimum value

@param `max` - Maximum value


@return `segment_value` - Calculated segment value (0–255)






Calculates segment values for multi-segment LED elements.

