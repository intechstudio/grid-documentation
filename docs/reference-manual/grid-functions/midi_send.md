---
title: Midi Send
slug: midi-send
layout: reference_manual
category: reference-manual
description: Reference for the `midi_send()` function.
---

# global midi_send

---

```lua
function midi_send(
  channel: integer,
  command: integer,
  param1: integer,
  param2: integer
)
```
@param `channel` - MIDI channel (0-15). Note: Your DAW translates this as channels 1-16! (0 = Channel 1).

@param `command` - MIDI command type (e.g., 144 = Note On).

@param `param1` - Value (0-127). For Notes: Pitch (e.g., 60 = Middle C). For CC: Controller Number (e.g., 7 = Volume).

@param `param2` - Value (0-127). For Notes: Velocity (hit strength). For CC: Control Value (CV).







Sends a standard 7-bit MIDI message.  
(Note: Use `self:midi_send()` to send the MIDI messages from an Element).

