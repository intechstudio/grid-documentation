---
title: Immediate Send
slug: immediate-send
layout: reference_manual
category: reference-manual
description: Reference for the `immediate_send()` function.
---

# `immediate_send`

---

Sends Lua code for immediate execution on a remote module.  
Example: https://docs.intech.studio/wiki/more/immediate-send-explainer/

```lua
immediate_send(
  x: integer?,
  y: integer?,
  lua_code: string
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x</code> — Target module X coordinate. If nil and y is nil, broadcasts to all modules.</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y</code> — Target module Y coordinate. If nil and x is nil, broadcasts to all modules.</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>lua_code</code> — Lua code to execute</div>



