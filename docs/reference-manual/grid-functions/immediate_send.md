---
title: Immediate Send
slug: immediate-send
layout: reference_manual
category: reference-manual
description: Reference for the `immediate_send()` function.
---

# global immediate_send

---

```lua
function immediate_send(
  x: integer?,
  y: integer?,
  lua_code: string
)
```
@param `x` - Target module X coordinate. If nil and y is nil, broadcasts to all modules.

@param `y` - Target module Y coordinate. If nil and x is nil, broadcasts to all modules.

@param `lua_code` - Lua code to execute







Sends Lua code for immediate execution on a remote module.  
Example: https://docs.intech.studio/wiki/more/immediate-send-explainer/

