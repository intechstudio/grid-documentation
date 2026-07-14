---
title: Encoder
slug: encoder-control-element
layout: reference_manual
category: reference-manual
description: How to set up encoder-type control elements.
---

- supers: Element










---

> In the Grid editor, when editing code for a EncoderElement, the variables `self`, `element`, and `ele` are automatically typed as EncoderElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:encoder_value()     -- on the current element
> element[1]:encoder_value() -- on a specific element from the array
> ```

## Functions
---

### self:encoder_value
---
```lua
function self:encoder_value(value: integer?) -> value integer
```
@param `value` - If provided, sets the encoder value


@return `value` - Current encoder value





Returns (or sets) the current encoder value.








### self:encoder_min
---
```lua
function self:encoder_min(value: integer?) -> min integer
```
@param `value` - If provided, sets the minimum


@return `min` - Minimum value





Returns (or sets) the minimum encoder value.








### self:encoder_max
---
```lua
function self:encoder_max(value: integer?) -> max integer
```
@param `value` - If provided, sets the maximum


@return `max` - Maximum value





Returns (or sets) the maximum encoder value.








### self:encoder_mode
---
```lua
function self:encoder_mode(value: integer?) -> mode integer
```
@param `value` - If provided, sets the mode


@return `mode` - Encoder mode





Returns (or sets) the encoder mode.








### self:encoder_state
---
```lua
function self:encoder_state() -> state integer
```

@return `state` - Encoder state





Returns the encoder state (rotation direction). Values <64 = left, >63 = right.








### self:encoder_velocity
---
```lua
function self:encoder_velocity() -> velocity integer
```

@return `velocity` - Rotation velocity





Returns the encoder velocity.








### self:encoder_sensitivity
---
```lua
function self:encoder_sensitivity(value: integer?) -> sensitivity integer
```
@param `value` - If provided, sets the sensitivity


@return `sensitivity` - Encoder sensitivity





Returns (or sets) the encoder sensitivity.








### self:encoder_elapsed_time
---
```lua
function self:encoder_elapsed_time() -> ms integer
```

@return `ms` - Elapsed time in milliseconds





Returns the time elapsed since the last encoder event (milliseconds).








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











