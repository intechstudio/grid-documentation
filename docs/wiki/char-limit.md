---
slug: char-limit
title: Configuration Character Limit
tags: [Workflow, LUA, Reference Manual]
---

There is one big limitation on the creation of Action Chains. No Action Chain can contain more than 400 characters.

Remember this is a per Event or per Action Chain limitation, so if you run out of space here are some workarounds to help you still fit into these limitations:

- Once you're done with your Action Chain, try to Merge it to Code with the button above the Action Chain itself. This usually reasults in an at least 10% reduction of characters.
- Try to define variables elsewhere, ouside of the Control Element Event. Putting your Self Variable Block under the Init Event on the same Control Element is a great way to save some space!