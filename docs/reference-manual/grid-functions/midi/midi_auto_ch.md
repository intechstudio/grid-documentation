---
title: Midi Auto Ch
slug: midi-auto-ch
layout: reference_manual
category: reference-manual
description: Reference for the `midi_auto_ch()` function.
---

# `midi_auto_ch`

---

Overrideable MIDI channel provider.
Called by the system for every MIDI event.

You can override it like:
```lua
midi_auto_ch = function(self)
  return 0
end
```  
more info: https://docs.intech.studio/wiki/more/midi-auto-value

```lua
midi_auto_ch(self: table): MIDI_Channel
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>self</code> — Context of the current MIDI event</div>


<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>channel</code> — 0–15</div>



