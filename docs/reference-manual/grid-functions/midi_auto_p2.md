---
title: Midi Auto P2
slug: midi-auto-p2
layout: reference_manual
category: reference-manual
description: Reference for the `midi_auto_p2()` function.
---

# global midi_auto_p2

---

```lua
function midi_auto_p2(self: table) -> value integer
```
@param `self` - Context of the current MIDI event







Overrideable MIDI parameter 2 provider (velocity/value).
Example override:
```lua
midi_auto_p2 = function(self)
  return 127
end
```  
more info: https://docs.intech.studio/wiki/more/midi-auto-value

