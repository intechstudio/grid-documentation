---
slug: if
title: If, Elseif, Else
tags: [Action Block, Condition, Logic, LUA, Workflow]
description: "The If Block serves as the most basic logic operator for Grid Editor. When using such a Block you're able to create additional conditions for running actions in case of an Event trigger."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ifelse from './img/ifelse.png'

---

<Tabs queryString="tab">
  <TabItem value="About If" label="About If" default>

## If

The If Block serves as the most basic logic operator for Grid Editor. When using such a Block you're able to create additional conditions for running actions in case of an Event trigger.

Visually an If Block is represented by two parts: IF wtih a text box and END with no text box. Normally, when the Event gets triggered all Actions within the Action Chain will just happen. However when using conditionals, Actions within the If condition will only run when the event trigger happens AND the condition specified in the text box of the If Block is TRUE.

Best example of the if conditional is the Press/Release Block on any module that has a button. In that case the press/release block separates the press and release parts of the event by using an If condition. It checks if the button is actually pressed down when the Button Event gets triggered. If it's pressed down, then it's a press, if it's not then it's a release.

You can easily recreate this example with a configuration like this: put an If Block on one of your Button Events and fill the condition of the If Block with the following: `self:button_value()>0`. This means, that whatever is inside of this condition will only run when the button is pressed down, and will never run when the button is released.

## Elseif

The ElseIf Block can be created inside an already existing If Block to specify a subspecific FALSE outcome, creating 3 logical outcomes.

Actions within the ElseIf condition will only run when the event trigger happens AND the condition specified in the text box of the ElseIf Block is TRUE AND the conditions specified within the If Block are FALSE.

## Else

The Else Block can be created inside an already existing If Block to specify the FALSE conditional outcome.

Actions within the Else condition will only run when the event trigger happens AND the condition specified in the text box of the If Block is FALSE.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

An if statement tests its condition and executes its then-part or its else-part accordingly. The else-part is optional.

    if a<0 then a = 0 end

    if a<b then return a else return b end

    if a == false then
      led_value(num,1,128)
      a = true
    end

When you write nested ifs, you can use elseif. It is similar to an else followed by an if, but it avoids the need for multiple ends:
<ImageLightbox imageSrc={ifelse} citation={"Nested ifs in Codeblock"} style={{height:400+'px'}}/>

    if op == 1 then
      led_value(1,1,128)
    elseif op == 2 then
      led_value(2,1,128)
    elseif op == 3 then
      led_value(3,1,128)
    elseif op == 4 then
      led_value(4,1,128)
    else
      led_value(1,1,0)
      led_value(2,1,0)
      led_value(3,1,0)
      led_value(4,1,0)
    end

</TabItem>
</Tabs>
