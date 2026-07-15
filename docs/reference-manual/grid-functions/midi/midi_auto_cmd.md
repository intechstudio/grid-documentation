---
title: Midi Auto Cmd
slug: midi-auto-cmd
layout: reference_manual
category: reference-manual
description: Reference for the `midi_auto_cmd()` function.
---

# `midi_auto_cmd`

---

Overrideable MIDI command provider.
Example override:
```lua
midi_auto_cmd = function(self)
  return 144
end
```  
more info: https://docs.intech.studio/wiki/more/midi-auto-value

```lua
midi_auto_cmd(self: table): MIDI_Command
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>self</code> — Context of the current MIDI event</div>



