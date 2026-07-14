---
title: Element Referencing
slug: element
layout: reference_manual
category: reference-manual
description: How to refer to a Control Element by number.
---

**THE "self" VARIABLE**
In Grid Lua, `self` always refers to the specific physical control (button, encoder, fader) 
that you are currently interacting with. 

When you use a function with `self:` (like `self:midi_send()`), you are 
telling the Grid to apply that action specifically to **this exact element**.







---

## Functions
---

### self:element_index
---
```lua
function self:element_index(value: integer?) -> index integer
```
@param `value` - If provided, sets the index


@return `index` - The element index (0–15 for a 16-element module)





Returns (or sets) the 0-based index of this element on the module.








### self:led_index
---
```lua
function self:led_index(value: integer?) -> index integer
```
@param `value` - If provided, sets the LED index


@return `index` - The LED index





Returns (or sets) the LED index for this element.








### self:element_name
---
```lua
function self:element_name(name: string?) -> name string
```
@param `name` - If provided, sets the name


@return `name` - Element name





Gets or sets the name of this element.








### self:timer_start
---
```lua
function self:timer_start(period: integer)
```
@param `period` - Timer period in milliseconds






Starts a periodic timer for this element.








### self:timer_stop
---
```lua
function self:timer_stop()
```





Stops the timer for this element.








### self:event_trigger
---
```lua
function self:event_trigger(event_type: integer)
```
@param `event_type` - Event type index






Triggers an event on this element.








### self:led_color
---
```lua
function self:led_color(
  layer: Layer,
  colors: number[][]
)
```
@param `layer` - integer The LED layer to target (use `-1` for all/active layers).

@param `colors` - Array of color tables. Don't forget the double braces! Example: `{{-1, -1, -1, 1}}`






Sets the LED color and its value-based transition for this element.  

This function creates smooth color fades based on the element's current value (min to max).  
You must provide a list of colors, where each color is `{red, green, blue, alpha}`.  
* **RGB** values are `0-255`. You can also use `-1` for any RGB channel to use the element's auto-configured (factory) color.  
* **Alpha** (brightness/opacity) is `0.0 - 1.0`.  

**The transition changes based on how many colors you provide:**  
* **1 Color:** `{{-1, -1, -1, 1}}`
  Sets the color for the MAX value (using the auto color in this example). The MIN value defaults to transparent (0 alpha).  
* **2 Colors:** `{{0, 0, 255, 0.5}, {255, 0, 0, 1}}`
  1st color is MIN value, 2nd color is MAX value.  
* **3 Colors:** `{{0, 255, 0, 1}, {255, 255, 0, 1}, {255, 0, 0, 1}}`
  1st color is MIN, 2nd color is MIDDLE, 3rd color is MAX value.








### self:led_value
---
```lua
function self:led_value(
  layer: Layer,
  value: integer
) -> current_value integer?
```
@param `layer` - integer The LED layer to target (`1`, `2`, or `-1` for auto).

@param `value` - The intensity level (`0-255`, or `-1` for auto).


@return `current_value` - Returns the current value if called without parameters, otherwise nothing.





Sets or gets the LED light intensity (brightness/phase) for this element.

When parameters are provided, it sets the intensity. The `-1` value is very common and tells the Grid to use the auto-configured setting.








### self:midi_send
---
```lua
function self:midi_send(
  channel: integer,
  command: integer,
  param1: integer,
  param2: integer,
  resolution: integer?
)
```
@param `channel` - MIDI channel (0-15). Note: Your DAW translates this as channels 1-16! (0 = Channel 1, or -1 for auto).

@param `command` - MIDI command type (e.g., 144 = Note On, 176=CC or -1 for auto).

@param `param1` - Value (0-127). For Notes: Pitch (e.g., 60 = Middle C). For CC: Controller Number (e.g., 7 = Volume). (-1 for auto).

@param `param2` - use -1 (Auto) for the element's min-max range. or provide a specific value.

@param `resolution` - Optional MIDI resolution mode (0=Standard 7-bit, 1=14-bit, 2=NRPN, 3=14-bit NRPN). Defaults to 0.






Sends a MIDI message from this specific element.  
Pass -1 for any parameter to use the element's auto-configured value.








### self:midirx_register
---
```lua
function self:midirx_register(
  element_index: integer,
  channel: integer,
  command: integer,
  param1: integer,
  sync_config: { led_sync: boolean, value_sync: boolean },
  resolution: integer
)
```
@param `element_index` - Target element index (use `-1` for this specific element).

@param `channel` - MIDI channel (0-15, or -1 for auto).

@param `command` - MIDI command type (e.g., 144 = Note On, 176=CC or -1 for auto).

@param `param1` - Note pitch or CC number (0-127, or -1 for auto).

@param `sync_config` - Synchronization settings. Example: `{value_sync = true, led_sync = true}`.

@param `resolution` - resolution mode (0=Standard 7-bit, 1=14-bit, 2=NRPN, 3=14-bit NRPN).






Registers a MIDI receive (RX) listener for this element.  
This allows the element to automatically update its internal value or LED state 
when the specified MIDI message is received from the host (DAW).








### self:midi_sysex_send
---
```lua
function self:midi_sysex_send(...: integer)
```
@param `...` - SysEx data bytes






Sends a MIDI SysEx message from this element.  
 Send 8bit SysEx data bytes (0-255) as separate arguments. eg: (0xF0, 0x41, 0x10, 0xF7)











## fields
---

### self:post_init_cb
---
```lua
Element.post_init_cb : (fun(self: Element))?
```










### self:midirx_cb
---
```lua
Element.midirx_cb : (fun(self: Element, header: integer[], data: integer[]))?
```










### self:sysexrx_cb
---
```lua
Element.sysexrx_cb : (fun(self: Element, header: integer[], data: string))?
```










### self:eventrx_cb
---
```lua
Element.eventrx_cb : (fun(self: Element, header: integer[], event: integer[], value: integer[], name: string))?
```











