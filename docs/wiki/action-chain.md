---
slug: action-chain
title: Action Chain
description: Actions under an Event in Grid are collectively referred to as an Action Chain of that Event.
tags: [Workflow, Logic]
---
<!---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

--->

Actions under an Event in Grid are collectively referred to as an Action Chain of that Event.

Actions in the Action Chain will all run when the parent Event is triggered.

The hierarchy of the Action Chain can be broken from the usual top-to-bottom with the use of [conditions](/category/conditions) introducing different outcomes based on logic operators.

The Action Chain itself if just the whole list of Actions under the parent Event "merged into code". You can simulate this behavior by using the Merge to Code button after selecting all Actions.

Number of Actions in an Action Chain are limited only by the [character limit](../wiki/char-limit). You can use as many of the same type of Blocks as you'd like as long you still fit into the 400 character Action Chain limit.
