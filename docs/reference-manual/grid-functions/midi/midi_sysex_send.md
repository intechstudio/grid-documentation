---
title: Midi Sysex Send
slug: midi-sysex-send
layout: reference_manual
category: reference-manual
description: Reference for the `midi_sysex_send()` function.
---

# `midi_sysex_send`

---

Sends a MIDI SysEx message.  
 Send 8bit SysEx data bytes (0-255) as separate arguments. eg: (0xF0, 0x41, 0x10, 0xF7)

```lua
midi_sysex_send(...: integer)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>...</code> — SysEx data bytes</div>



