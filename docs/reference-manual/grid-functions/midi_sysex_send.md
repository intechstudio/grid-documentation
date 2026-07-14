---
title: Midi Sysex Send
slug: midi-sysex-send
layout: reference_manual
category: reference-manual
description: Reference for the `midi_sysex_send()` function.
---

# global midi_sysex_send

---

```lua
function midi_sysex_send(...: integer)
```
@param `...` - SysEx data bytes







Sends a MIDI SysEx message.  
 Send 8bit SysEx data bytes (0-255) as separate arguments. eg: (0xF0, 0x41, 0x10, 0xF7)

