---
sidebar_position: 2
title: Beginner's guide
description: For DAW configuration
---

import mout from './img/intech_out.png'
import moutind from './img/midi_out_ind.png'
import midimap from './img/midimap.png'


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';


Out of the box, Grid controllers are configured to effortlessly support DAW control and other applications, where the user can utilize software-side MIDI mapping or MIDI learn functionality.

With this default configuration you can just snap together as many Grid modules as you have and go to town configuring pots and knobs and sliders and buttons in the DAW of your choice, without ever having to open Grid Editor.

:::tip Not quite enough for you?
For anything more complex than just the plug and play experience in a DAW, please take a look at our [Advanced Guide](../guide/advanced.md)!
:::

This guide will detail how to go about connecting the Grid module(s) to your DAW and when connected how to configure them in the DAW.

---

## What you'll need

In this article we'll guide you through using Grid modules more aligned with making music (PBF4 or PO16). Our DAW of choice will be Ableton Live 11, since it's a popular DAW application.

So in Ableton Live we'll first have to enable our modules to be able to use them for MIDI mapping.

Let's start up a fresh Ableton Project (we're using a default template) and open up Options/Preferences and under MIDI Ports we'll find all our MIDI gear that's connected to the computer. Here we should find our Grid module named Intech Studio: AC.

Now, what we want is to be able to send MIDI messages from Grid to Ableton Live, for this we have to enable both Track and Remote in the inputs section, like so.

<ImageLightbox imageSrc={mout} citation={'Live preferences: MIDI Ports'}/>


## MIDI mapping

So after we have Grid enabled as a MIDI device in Ableton Live we can send messages to the software and for that we have to choose which settings we'd like to control. Clicking the MIDI button in the top right turns all the MIDI-mappable settings to a slightly blueish color.

<ImageLightbox imageSrc={midimap} citation={'The blue hue shows the MIDI-mappable parameters'}/>

Clicking on any of these elements we've enabled MIDI learn mode of Ableton Live, meaning now it will wait from a MIDI CC message from a MIDI controller enabled in Ableton. Now if we press/turn/slide any of the control elements on our module the MIDI assignment should show up on the left side in Ableton and we can safely exit MIDI learn mode.

Now when we press/turn/slide our mapped control element we should see Ableton react in the way we told it to.

<ImageLightbox imageSrc={moutind} citation={'The flashing icon indicates MIDI data being received'}/>

Map all the other control elements to parameters in Ableton the same way and voilá you're all configured.

## Tips and tricks

Below you can find some advice on how to create your own workspace:

- You can assign an Ableton Track to only accept MIDI messages from a specific MIDI channel. This can come handy when creating whole arrangements with many tracks, but you'd want to keep controls per track separated. Each control element on Grid has a [MIDI Action Block](/docs/wiki/actions/midi/midi.md) in Grid Editor and in this action block you can change the predefined **ch** variable to a specific channel you later want to use in Ableton so for example you could assign the first column of potentiometers to Drum control on track 1 in Ableton. This could be a good way to organize your Project to the control surface you're using. For a more comprehensive idea about configuring MIDI Blocks in Grid Editor, take a look at the [advanced guide](../guide/advanced).
- You can save MIDI mapping settings in Ableton. For example you can create a Project file that already has your favourite pots mapped to specific settings. These settings are stored in the Project file.
- There are buttons in Ableton which can't be MIDI mapped such as the switch between arrangement and session view. This can also be controlled by Grid with just a simple keyboard command which will act as if you'd pressed the button 'Tab' on your keyboard. Using a Press/Release Action Block on a button and putting a [Keyboard Action Block](/docs/wiki/actions/keyboard-and-mouse/keyboard.md) inside the Press section will let you do just that!
  Even better than that, you can just do this with any of the keyboard shortcuts within Ablton Live (you can find a list of available keyboard shortcuts here: https://www.ableton.com/en/manual/live-keyboard-shortcuts/)!
