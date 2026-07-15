---
title: Midi Send
slug: midi-send
layout: reference_manual
category: reference-manual
description: Reference for the `midi_send()` function.
---

# `midi_send`

---

Sends a standard 7-bit MIDI message.  
(Note: Use `self:midi_send()` to send the MIDI messages from an Element).

```lua
midi_send(
  channel: integer,
  command: integer,
  param1: integer,
  param2: integer
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>channel</code> — MIDI channel (0-15). Note: Your DAW translates this as channels 1-16! (0 = Channel 1).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>command</code> — MIDI command type (e.g., 144 = Note On).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>param1</code> — Value (0-127). For Notes: Pitch (e.g., 60 = Middle C). For CC: Controller Number (e.g., 7 = Volume).</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>param2</code> — Value (0-127). For Notes: Velocity (hit strength). For CC: Control Value (CV).</div>



