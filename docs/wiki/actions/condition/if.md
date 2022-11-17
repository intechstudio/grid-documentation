---
slug: if
title: If
tags: [Action Block, Condition, Logic, LUA, Workflow]
---

The If Block serves as the most basic logic operator for Grid Editor. When using such a Block you're able to create additional conditions for running actions in case of an Event trigger.

Visually an If Block is represented by two parts: IF wtih a text box and END with no text box. Normally, when the Event gets triggered all Actions within the Action Chain will just happen. However when using conditionals, Actions within the If condition will only run when the event trigger happens AND the condition specified in the text box of the If Block is TRUE.

Best example of the if conditional is the Press/Release Block on any module that has a button. In that case the press/release block separates the press and release parts of the event by using an If condition. It checks if the button is actually pressed down when the Button Event gets triggered. If it's pressed down, then it's a press, if it's not then it's a release.

You can easily recreate this example with a configuration like this: put an If Block on one of your Button Events and fill the condition of the If Block with the following: `self:button_value()>0`. This means, that whatever is inside of this condition will only run when the button is pressed down, and will never run when the button is released.