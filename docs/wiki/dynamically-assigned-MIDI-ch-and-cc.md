---
title: Dynamically Assigned MIDI parameters
description: Dynamically assigned values is the default way Grid will behave when it comes to default MIDI blockCC and CH assignment on the default preset page.
tags: [MIDI, Logic, Local, Variables, Workflow]
---

Dynamically assigned values is the default way Grid will behave when it comes to default [MIDI block](/docs/wiki/actions/midi/midi.md) CC and CH assignment on the default preset page.

So as an example here's a default MIDI Block from that module:

![midiblock](../wiki/img/midiblock.png)

What does this mean? If you check the MIDI monitor within Grid Editor, you'll see that if you interact with the control element, Grid will send out messages normally, but then how did all these variables become CC messages?

To try and understand how this works, let's dissect this image to see what these variables mean and how do they influence the behavior of Grid:

- This MIDI Block sends out a MIDI message on MIDI channel **ch**, and this message command will be a [[Control Change]] type (number 176, commonly also known as CC).
- That Control Change message will have parameters of **cc** (which MIDI Control Change message is being sent out from 0-119) and **val** that will be the value the chosen CC will have to set to.

So we have three names instead of numbers in our block, let's see what they do and how:

![localblock](../wiki/img/local.png)

- **ch** is the MIDI Channel the message is being sent on and since it's dynamic, it's not a set value (although it could be one from 0-15) but a [[variable]] named "ch". - This **ch** variable is has a way it behaves and how it behaves is set by the place it's first mentioned, the [[Local Block]]. - In there, as you can see on the picture above **ch** is defined as a complicated line of code: `(module_position_y()*4+page_current())%16`. - The outcome of the **ch** varible depends on which position is our module in on the y axis AND which Page we're using.

- **cc** is the number of the Control Change message we're sending out for example number 1 is known as the Modulation Wheel message. - This **cc** variable is also defined in the [[Local Block]]. - This one is also defined with a line of code: `(32+module_position_x()*16+self:element_index())%128` - This means that the **cc** variable will have a value based on which position is the module in on the x axis AND on which control element we're interacting with.

- **val** is the actual value of this MIDI CC, it will always be set by the `self:controlelement_value()` function, meaning that this value will correspond to the status of the control element at all times - minimum state should be zero and maximum state should be 127, so our **val** will by default be inbetween those values

So based on this, for example if we have only one module plugged in and we interact with the top left control element we should see something like this: **ch**=0, **cc**=32 and the **val** values will range from 0 to 127.

So esentially this is what it means that the values are dynamic. This behavior is default so that connecting multiple modules out of the box will not jumble the MIDI messages.

It's also weird and unintuitive at times, so we hope that this explanation is useful in understanding how it works.

---

Finally a quick example:

Let's say we have three modules connected in an "L"-like shape. Lets number them according to the image below just to make it easier to explain.

![orientation](../wiki/img/orientation.png)

This means that module number 3 will have a different channel AND a CC offset.

Why? We have to examine our code from the local block to understand.

**ch** = `(module_position_y()*4+page_current())%16`.
**cc** = `(32+module_position_x()*16+self:element_index())%128`

- So we can see that module position offset will change the **cc** and **ch** values.
- We're on Page 0 so this wouldn't affect the MIDI messages.
- Element index should be incremental from 0 to 15 on each of these modules except for the PBF4 where it's from 0 to 11. This can affect the **cc** value we're sending out based on which pot we turn.

Based on these notes our modules should be sending out CCs in the following manner:

- Module 1 (PBF4, position 0,0): MIDI channel 0, CC from 32 to 43
- Module 2 (EN16, position 0,-1): MIDI channel 12, CC from 32 to 47 - The negative position value here makes the **ch** become -4 which equals to 12 in Grid terms
- Module 3 (EN16, position 1,-1): MIDI channel 12, CC from 48 to 63

And if we check the MIDI monitor it turns out that this is exactly how they behave. Whew, what a ride...
