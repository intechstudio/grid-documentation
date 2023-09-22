---
slug: char-limit
title: Configuration Character Limit
description: Actions can be freely added to an Action Chain of any Event up to a certain point..
tags: [Workflow, LUA, Reference Manual]
---

Actions can be freely added to an Action Chain of any Event up to a certain point..

:::caution 
There one limitation on the size of Action Chains. No Action Chain can contain more than 400 characters.
:::

When you cross this limit and try to store your configuration Grid Editor will tell you in a message that you want over limit. You can also monitor your current charactercount in the debug window on the left.

Remember this is a per Event or per Action Chain limitation, so if you run out of space there are some workarounds to help you still fit into these limitations:

- Once you're done with your Action Chain, try to Merge it to Code with the button above the Action Chain window. This usually results in an at least 10% reduction of characters.
- Try to define variables elsewhere, ouside of the Control Element Event. Putting your Self Variable Block under the Init Event on the same Control Element is a great way to save some space!