---
title: Endless potentiometer
slug: endless-control-element
layout: reference_manual
category: reference-manual
description: How to set up endless-type control elements.
---

- supers: Element










---

> In the Grid editor, when editing code for a EndlessElement, the variables `self`, `element`, and `ele` are automatically typed as EndlessElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:endless_value()     -- on the current element
> element[1]:endless_value() -- on a specific element from the array
> ```

## Functions
---

### self:endless_value
---
```lua
function self:endless_value(value: integer?) -> value integer
```
@param `value` - If provided, sets the value


@return `value` - Current value





Returns (or sets) the current endless potentiometer value.








### self:endless_min
---
```lua
function self:endless_min(value: integer?) -> min integer
```
@param `value` - If provided, sets the minimum


@return `min` - Minimum value





Returns (or sets) the minimum endless potentiometer value.








### self:endless_max
---
```lua
function self:endless_max(value: integer?) -> max integer
```
@param `value` - If provided, sets the maximum


@return `max` - Maximum value





Returns (or sets) the maximum endless potentiometer value.








### self:endless_mode
---
```lua
function self:endless_mode(value: integer?) -> mode integer
```
@param `value` - If provided, sets the mode


@return `mode` - Mode value





Returns (or sets) the endless potentiometer mode.








### self:endless_state
---
```lua
function self:endless_state() -> state integer
```

@return `state` - Current state





Returns the endless potentiometer state.








### self:endless_velocity
---
```lua
function self:endless_velocity() -> velocity integer
```

@return `velocity` - Rotation velocity





Returns the endless potentiometer velocity.








### self:endless_direction
---
```lua
function self:endless_direction() -> direction integer
```

@return `direction` - Rotation direction





Returns the endless potentiometer direction.








### self:endless_sensitivity
---
```lua
function self:endless_sensitivity(value: integer?) -> sensitivity integer
```
@param `value` - If provided, sets the sensitivity


@return `sensitivity` - Sensitivity value





Returns (or sets) the endless potentiometer sensitivity.








### self:led_offset
---
```lua
function self:led_offset(value: integer?) -> offset integer
```
@param `value` - If provided, sets the offset


@return `offset` - LED offset





Returns the LED offset for this endless element.








### self:button_value
---
```lua
function self:button_value(value: integer?) -> value integer
```
@param `value` - If provided, sets the button value


@return `value` - Current button value





Returns (or sets) the current button value.








### self:button_min
---
```lua
function self:button_min(value: integer?) -> min integer
```
@param `value` - If provided, sets the minimum


@return `min` - Minimum value





Returns (or sets) the minimum button value.








### self:button_max
---
```lua
function self:button_max(value: integer?) -> max integer
```
@param `value` - If provided, sets the maximum


@return `max` - Maximum value





Returns (or sets) the maximum button value.








### self:button_mode
---
```lua
function self:button_mode(value: integer?) -> mode integer
```
@param `value` - If provided, sets the mode


@return `mode` - Button mode





Returns (or sets) the button mode. 0 = momentary.








### self:button_state
---
```lua
function self:button_state() -> state integer
```

@return `state` - Button state (0 or 127)





Returns the button state. 0 = released, 127 = pressed.








### self:button_elapsed_time
---
```lua
function self:button_elapsed_time() -> ms integer
```

@return `ms` - Elapsed time in milliseconds





Returns the time elapsed since the last button event (milliseconds).








### self:button_step
---
```lua
function self:button_step() -> step (boolean|integer)
```

@return `step` - Current step, or false if mode is 0





Calculates the button step based on mode, min, max, and value.











