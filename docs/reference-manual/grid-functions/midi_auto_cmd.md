---
title: Midi Auto Cmd
slug: midi-auto-cmd
layout: reference_manual
category: reference-manual
description: Reference for the `midi_auto_cmd()` function.
---

# global midi_auto_cmd

---

```lua
function midi_auto_cmd(self: table) -> command MIDI_Command
```
@param `self` - Context of the current MIDI event







Overrideable MIDI command provider.
Example override:
```lua
midi_auto_cmd = function(self)
  return 144
end
```  
more info: https://docs.intech.studio/wiki/more/midi-auto-value

