---
title: Element
slug: element
layout: reference_manual
category: reference-manual
sidebar_position: 0
description: How to refer to a Control Element by number.
---

**THE "self" VARIABLE**
In Grid Lua, `self` always refers to the specific physical control (button, encoder, fader) 
that you are currently interacting with. 

When you use a function with `self:` (like `self:midi_send()`), you are 
telling the Grid to apply that action specifically to **this exact element**.







---

### `Element:element_index`
---
Returns (or sets) the 0-based index of this element on the module.

```lua
Element:element_index(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the index</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>index</code> — The element index (0–15 for a 16-element module)</div>










### `Element:led_index`
---
Returns (or sets) the LED index for this element.

```lua
Element:led_index(value: integer?): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — If provided, sets the LED index</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>index</code> — The LED index</div>










### `Element:element_name`
---
Gets or sets the name of this element.

```lua
Element:element_name(name: string?): string
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>name</code> — If provided, sets the name</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>name</code> — Element name</div>










### `Element:timer_start`
---
Starts a periodic timer for this element.

```lua
Element:timer_start(period: integer)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>period</code> — Timer period in milliseconds</div>










### `Element:timer_stop`
---
Stops the timer for this element.

```lua
Element:timer_stop()
```










### `Element:event_trigger`
---
Triggers an event on this element.

```lua
Element:event_trigger(event_type: integer)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>event_type</code> — Event type index</div>










### `Element:led_color`
---
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

```lua
Element:led_color(
  layer: Layer,
  colors: number[][]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>layer</code> — integer The LED layer to target (use <code>-1</code> for all/active layers).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>colors</code> — Array of color tables. Don't forget the double braces! Example: <code>&#123;&#123;-1, -1, -1, 1&#125;&#125;</code></div>










### `Element:led_value`
---
Sets or gets the LED light intensity (brightness/phase) for this element.

When parameters are provided, it sets the intensity. The `-1` value is very common and tells the Grid to use the auto-configured setting.

```lua
Element:led_value(
  layer: Layer,
  value: integer
): integer?
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>layer</code> — integer The LED layer to target (<code>1</code>, <code>2</code>, or <code>-1</code> for auto).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>value</code> — The intensity level (<code>0-255</code>, or <code>-1</code> for auto).</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>current_value</code> — Returns the current value if called without parameters, otherwise nothing.</div>










### `Element:midi_send`
---
Sends a MIDI message from this specific element.  
Pass -1 for any parameter to use the element's auto-configured value.

```lua
Element:midi_send(
  channel: integer,
  command: integer,
  param1: integer,
  param2: integer,
  resolution: integer?
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>channel</code> — MIDI channel (0-15). Note: Your DAW translates this as channels 1-16! (0 = Channel 1, or -1 for auto).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>command</code> — MIDI command type (e.g., 144 = Note On, 176=CC or -1 for auto).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>param1</code> — Value (0-127). For Notes: Pitch (e.g., 60 = Middle C). For CC: Controller Number (e.g., 7 = Volume). (-1 for auto).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>param2</code> — use -1 (Auto) for the element's min-max range. or provide a specific value.</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>resolution</code> — Optional MIDI resolution mode (0=Standard 7-bit, 1=14-bit, 2=NRPN, 3=14-bit NRPN). Defaults to 0.</div>










### `Element:midirx_register`
---
Registers a MIDI receive (RX) listener for this element.  
This allows the element to automatically update its internal value or LED state 
when the specified MIDI message is received from the host (DAW).

```lua
Element:midirx_register(
  element_index: integer,
  channel: integer,
  command: integer,
  param1: integer,
  sync_config: { led_sync: boolean, value_sync: boolean },
  resolution: integer
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>element_index</code> — Target element index (use <code>-1</code> for this specific element).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>channel</code> — MIDI channel (0-15, or -1 for auto).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>command</code> — MIDI command type (e.g., 144 = Note On, 176=CC or -1 for auto).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>param1</code> — Note pitch or CC number (0-127, or -1 for auto).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>sync_config</code> — Synchronization settings. Example: <code>&#123;value_sync = true, led_sync = true&#125;</code>.</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>resolution</code> — resolution mode (0=Standard 7-bit, 1=14-bit, 2=NRPN, 3=14-bit NRPN).</div>










### `Element:midi_sysex_send`
---
Sends a MIDI SysEx message from this element.  
 Send 8bit SysEx data bytes (0-255) as separate arguments. eg: (0xF0, 0x41, 0x10, 0xF7)











## fields
---

```lua
Element:midi_sysex_send(...: integer)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>...</code> — SysEx data bytes</div>



### `Element:post_init_cb`
---
```lua
Element.post_init_cb : (fun(self: Element))?
```










### `Element:midirx_cb`
---
```lua
Element.midirx_cb : (fun(self: Element, header: integer[], data: integer[]))?
```










### `Element:sysexrx_cb`
---
```lua
Element.sysexrx_cb : (fun(self: Element, header: integer[], data: string))?
```










### `Element:rtmrx_cb`
---
```lua
Element.rtmrx_cb : (fun(self: Element, header: integer[], rtm_byte: integer))?
```










### `Element:eventrx_cb`
---
```lua
Element.eventrx_cb : (fun(self: Element, header: integer[], event: integer[], value: integer[], name: string))?
```











