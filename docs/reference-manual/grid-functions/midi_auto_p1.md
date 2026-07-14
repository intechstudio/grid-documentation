---
title: Midi Auto P1
slug: midi-auto-p1
layout: reference_manual
category: reference-manual
description: Reference for the `midi_auto_p1()` function.
---

# global midi_auto_p1

---

```lua
function midi_auto_p1(self: table) -> value integer
```
@param `self` - Context of the current MIDI event







Overrideable MIDI parameter 1 provider (note/CC number).
Example override:
```lua
midi_auto_p1 = function(self)
  return 60
end
```  
more info: https://docs.intech.studio/wiki/more/midi-auto-value

