---
title: Rx Mode
slug: rx-mode
layout: reference_manual
category: reference-manual
description: Reference for the `rx_mode()` function.
---

# `rx_mode`

---

Configures which input sources are enabled for a specific MIDI message type.

This function controls the RX Mode routing programmatically.

```lua
rx_mode(
  type: integer,
  source: integer
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>type</code> — MIDI message type (0–3)</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>source</code> — Input source mask (0–7)</div>



### Types:
- `0` = MIDI Voice
- `1` = MIDI SysEx
- `2` = MIDI RTM
- `3` = Event View

### Sources:
- `0` = Disabled
- `1` = USB
- `2` = External (Ext)
- `3` = USB + Ext
- `4` = Internal (Int)
- `5` = USB + Int
- `6` = Ext + Int
- `7` = USB + Ext + Int

