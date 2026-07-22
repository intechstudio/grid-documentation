---
sidebar_position: 0
title: Intro
slug: introduction
description: Reference Documentation for the lua functions used by Grid
---

Grid controllers run <b>Lua 5.5</b> scripts for their configurations. It's a Turing complete system, meaning you can come up with unique workflow improvements utilizing Grid's tactile controls. The API for configurations aka <i>grid_protocol</i> used by Grid modules can be read in this reference manual. 

Lua is a script language, please <a href="https://www.lua.org/pil/contents.html" rel="external" target="_blank" class="pb-0.5 border-b-2 border-blue-500">check out the official lua page</a> for correct syntax.

This manual is supposed to be used together with the [Wiki](/docs/wiki/introduction.md) section as some functions are explained there in more detail under their respective Action Block (containers that house one or more functions, conveniently grouped together).

:::info Auto-generated reference
The **Grid Functions** and **Control Element Functions** pages below aren't hand-written - they're generated straight from the LuaCATS annotations in the grid-editor project's source code, and regenerated on every release build so they never drift out of sync with the actual firmware/editor API. Please don't edit those pages directly - edit the annotations in grid-editor instead, and the change will show up here automatically.
:::