---
title: Midi Auto Ch
slug: midi-auto-ch
layout: reference_manual
category: reference-manual
description: Reference for the `midi_auto_ch()` function.
---

# global midi_auto_ch

---

```lua
function midi_auto_ch(self: table) -> channel MIDI_Channel
```
@param `self` - Context of the current MIDI event


@return `channel` - 0–15






Overrideable MIDI channel provider.
Called by the system for every MIDI event.

You can override it like:
```lua
midi_auto_ch = function(self)
  return 0
end
```  
more info: https://docs.intech.studio/wiki/more/midi-auto-value

