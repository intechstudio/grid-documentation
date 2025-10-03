---
slug: action-chain
title: "More about: Action Chain"
description: Actions under each Event in Grid are called the Action Chain.
tags: [Workflow, Logic]
---

Actions under an Event in Grid are collectively referred to as an Action Chain of that Event.

Actions in the Action Chain will all run when the parent Event is triggered.

The hierarchy of the Action Chain can be broken from the usual top-to-bottom with the use of [conditions](/category/conditions) introducing different outcomes based on logic operators.

The Action Chain itself if just the whole list of Actions under the parent Event "merged into code". You can simulate this behavior by using the Merge to Code button after selecting all Actions.

Number of Actions in an Action Chain are limited only by the [character limit](/docs/wiki/more/char-limit.md). You can use as many of the same type of Blocks as you'd like as long you still fit into the 400 character Action Chain limit.

