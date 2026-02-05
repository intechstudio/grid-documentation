---
slug: function
title: Function
tags: [Action Block, Condition, Logic, LUA, Workflow]
description: "A function in Lua is a reusable block of code that performs a specific task when you call it. It’s useful because it keeps your Grid Editor scripts cleaner, avoids repeating code, and makes actions easier to organize and reuse."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
<TabItem value="About Function" label="About Function" default>

## Function Action Block — What it is & how to use it

The **Function Action Block** lets you group actions and logic into a reusable function that you can trigger again whenever you need. It’s useful when you want to **retrigger the same behavior** (optionally with parameters) without rebuilding the logic multiple times.

### How to use it

1. **Give the function a name** — this is how you’ll reference or trigger it later.
2. **Add your logic inside the block**, such as:
   - other **Action Blocks**
   - **Code Blocks** for Lua scripts
3. When the function is called or triggered, **all actions inside run from top to bottom** until the End.

### When to use it

- You want to reuse the same logic in multiple places
- You need to retrigger complex sequences
- You want cleaner, more modular config structure

## Predefined Function Callbacks — What are they?

**Callback functions** are special functions that run automatically when a specific event happens (for example when MIDI data is received).  
You don’t call them manually — the system calls them for you and gives you the incoming data as parameters.

When you click on the **Function input field**, you can select predefined callbacks to quickly react to MIDI events or change default module behavior globally.

---

## MIDI RX Callback Handler

`self.midirx_cb(self, header, event)`

Triggered automatically when a MIDI message is received.

**Parameters**

- `header` — source of the message
  - receives MIDI from other Grid modules and software
  - example: `header[1] == 13` → message comes from software
- `event` — the MIDI message data
  - `event[1]` → MIDI channel
  - `event[2]` → command
  - `event[3]` → CC / Note number
  - `event[4]` → value

---

## MIDI Sysex Callback Handler

`self.sysexrx_cb(self, header, sysex)`

Triggered automatically when a SysEx message is received.

**Parameters**

- `header` — message source (modules or software)
- `sysex`
  - `sysex[1]` → incoming SysEx message data

---

## Global Default MIDI Calculation Functions

These functions change module behavior globally when used.

### Calculate Default MIDI Channel

`midi_auto_ch(self)`

Defines the default MIDI channel globally.  
Example:

- `return 2` → sends on MIDI channel 3

---

### Calculate Default MIDI Command

`midi_auto_cmd(self)`

Defines the default MIDI command type globally.  
Example:

- `return 176` → all auto MIDI sends become CC

---

### Calculate Default MIDI Parameter 1

`midi_auto_p1(self)`

Defines which Note or CC number (0–127) is sent.  
Example:

- `return 60 + self:element_number()`  
  → first element sends 60  
  → second sends 61  
  → third sends 62

---

### Calculate Default MIDI Parameter 2

`midi_auto_p2(self)`

Defines the value sent by the element (velocity / CC value).

</TabItem>
<TabItem value="Reference Manual Entry" label="Reference Manual Entry">

</TabItem>
</Tabs>
