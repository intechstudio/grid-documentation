---
title: Fader
slug: fader
layout: reference_manual
category: reference-manual
description: How to set up fader-type control elements.
---

- supers: Element










---

> In the Grid editor, when editing code for a FaderElement, the variables `self`, `element`, and `ele` are automatically typed as FaderElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:fader_value()     -- on the current element
> element[1]:fader_value() -- on a specific element from the array
> ```

## Functions
---

### self:potmeter_value
---
```lua
function self:potmeter_value(value: integer?) -> value integer
```
@param `value` - If provided, sets the value


@return `value` - Current fader value





Returns (or sets) the current fader value.








### self:potmeter_min
---
```lua
function self:potmeter_min(value: integer?) -> min integer
```
@param `value` - If provided, sets the minimum


@return `min` - Minimum value





Returns (or sets) the minimum fader value.








### self:potmeter_max
---
```lua
function self:potmeter_max(value: integer?) -> max integer
```
@param `value` - If provided, sets the maximum


@return `max` - Maximum value





Returns (or sets) the maximum fader value.








### self:potmeter_resolution
---
```lua
function self:potmeter_resolution(value: integer?) -> resolution integer
```
@param `value` - If provided, sets the resolution


@return `resolution` - Fader resolution





Returns (or sets) the fader resolution.








### self:potmeter_state
---
```lua
function self:potmeter_state() -> state integer
```

@return `state` - Current state





Returns the fader state.








### self:potmeter_elapsed_time
---
```lua
function self:potmeter_elapsed_time() -> ms integer
```

@return `ms` - Elapsed time in milliseconds





Returns the time elapsed since the last fader event (milliseconds).











