---
title: Event Function Name
slug: event-function-name
layout: reference_manual
category: reference-manual
description: Reference for the `event_function_name()` function.
---

# `event_function_name`

---

Returns the short code of the currently executing event handler.
Possible values: "ini" (setup), "ec" (encoder), "bc" (button), "pc" (potmeter), "tim" (timer), "map" (utility) , "epc" (endless), "ld" (lcd draw).

```lua
event_function_name(): string
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>event_name</code> — Event handler short code</div>



