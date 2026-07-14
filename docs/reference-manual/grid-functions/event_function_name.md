---
title: Event Function Name
slug: event-function-name
layout: reference_manual
category: reference-manual
description: Reference for the `event_function_name()` function.
---

# global event_function_name

---

```lua
function event_function_name() -> event_name string
```

@return `event_name` - Event handler short code






Returns the short code of the currently executing event handler.
Possible values: "ini" (setup), "ec" (encoder), "bc" (button), "pc" (potmeter), "tim" (timer), "map" (utility) , "epc" (endless), "ld" (lcd draw).

