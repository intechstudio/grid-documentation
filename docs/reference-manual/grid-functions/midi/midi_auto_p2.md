---
title: Midi Auto P2
slug: midi-auto-p2
layout: reference_manual
category: reference-manual
description: Reference for the `midi_auto_p2()` function.
---

# `midi_auto_p2`

---

Overrideable MIDI parameter 2 provider (velocity/value).
Example override:
```lua
midi_auto_p2 = function(self)
  return 127
end
```  
more info: https://docs.intech.studio/wiki/more/midi-auto-value

```lua
midi_auto_p2(self: table): integer
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>self</code> — Context of the current MIDI event</div>



