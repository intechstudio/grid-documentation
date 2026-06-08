---
title: "More about: Default MIDI layout"
slug: dynamic-layout
description: Out-of-the-box MIDI values sent by Grid and why.
tags: [MIDI, Logic, Local, Variables, Workflow]
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import img1 from './img/midiblock.png'
import img2 from './img/local.png'
import img3 from './img/orientation.png'





Dynamically assigned values is the default way Grid will behave when it comes to default [MIDI block](/docs/wiki/actions/midi/midi.md) CC and CH assignment on the default Grid configuration.

:::tip The Default Grid configuration
You can always return to the default Grid configuration when using the **Clear** operation in Editor.
:::

So as an example here's a default MIDI Block from that module:

<ImageLightbox imageSrc={img1} citation={'-1 is the automatic assign mode'}/>


What does this all mean?  
If you check the MIDI monitor within Grid Editor, you'll see that if you interact with the control element, Grid will send out messages normally.

## How is calculated dynamically?


### Channel

 `(module_position_y()*4+page_current())%16`. 

The outcome of the Auto(-1)  depends on which position is our module in on the y axis AND which Page we're using.

### Command

The command depends on whether it’s a Button element or another type of element.

- A Button sends a Note message (144).
- Other elements send out Control Change messages (176).

### parameter 1

 `(32+module_position_x()*16+self:element_index())%128` 
 
 This means that value based on which position is the module in on the x axis AND on which control element we're interacting with.

### Message value

`self:controlelement_value()`

meaning that this value will correspond to the status of the control element at all times

## Example of this dymanic behavior

Finally a quick example:

Let's say we have three modules connected in an "L"-like shape. Lets number them according to the image below just to make it easier to explain.

<ImageLightbox imageSrc={img3} citation={''}/>

This means that module number 3 will have a different channel AND a CC offset.

Why? We have to examine our code from the local block to understand.

`ch` = `(module_position_y()*4+page_current())%16`.
`cc` = `(32+module_position_x()*16+self:element_index())%128`

- So we can see that module position offset will change the `cc` and `ch` values.
- We're on Page 0 so this wouldn't affect the MIDI messages.
- Element index should be incremental from 0 to 15 on each of these modules except for the PBF4 where it's from 0 to 11. This can affect the `cc` value we're sending out based on which pot we turn.

Based on these notes our modules should be sending out CCs in the following manner:

- Module 1 (PBF4, position 0,0): MIDI channel 0, CC from 32 to 43
- Module 2 (EN16, position 0,-1): MIDI channel 12, CC from 32 to 47 - The negative position value here makes the `ch` become -4 which equals to 12 in Grid terms
- Module 3 (EN16, position 1,-1): MIDI channel 12, CC from 48 to 63

And if we check the MIDI monitor it turns out that this is exactly how they behave. Whew, what a ride...
