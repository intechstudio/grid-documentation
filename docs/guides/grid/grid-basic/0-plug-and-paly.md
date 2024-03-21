---
sidebar_position: 10
title: "0.0: Plug-and-Play V2"
description: "Configuring your DAW for Grid"
slug: editor-500
---

import mout from './img/intech_out.png'
import moutind from './img/midi_out_ind.png'
import midimap from './img/midimap.png'
import bitwingC from './img/bitwing_connect.png'
import bitwingL from './img/bitwing_learn.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

This guide explains how to connect the Grid module(s) to your DAW and configure them once connected.

Out of the box, Grid controllers are set up for seamless DAW control and other applications. Users can easily utilize software-side MIDI mapping or MIDI learn functionality. 
This default setup allows you to connect multiple Grid modules and immediately configure pots, knobs, sliders, and buttons in your preferred DAW without needing to open Grid Editor.

:::tip Not quite enough for you?
For anything more complex than just the plug and play experience in a DAW, please take a look at our [Grid Editor](/category/grid-installing-editor)!
:::


---

## Connect to DAW


So in the DAW we'll first have to enable our modules to be able to use them for MIDI mapping.

Let's start up a fresh project in

<Tabs queryString="DAW" groupId="DAW">
  <TabItem value="Ableton" label="Ableton" default>
  
and open up Options/Preferences and under MIDI Ports we'll find all our MIDI gear that's connected to the computer.

Here we should find our Grid module named 'Grid' or 'Intech Studio: AC'.

Now, what we want is to be able to send MIDI messages from Grid to your DAW, for this     we have to enable both Track and Remote in the inputs section, like so.

<ImageLightbox imageSrc={mout} citation={'Live preferences: MIDI Ports'}/>
  </TabItem>
  <TabItem value="Logic" label="Logic" default>
  ...
  </TabItem>
  <TabItem value="FL" label="FL Studio" default>
  ...
  </TabItem>
      <TabItem value="ProTools" label="ProTools" default>
  ...
  </TabItem>
    <TabItem value="Cubase" label="Cubase" default>
  ...
  </TabItem>
    <TabItem value="Studio One" label="Studio One" default>
  ...
  </TabItem>
      <TabItem value="Reaper" label="Reaper" default>
  ...
  </TabItem>
    <TabItem value="Bitwing" label="Bitwing" default>
    
and navigate to Settings/Controllers, then click on "+Add Controller" under the Controllers section. Choose "Generic" under Hardware Vendor, and proceed to add the Grid module named 'Grid' or 'Intech Studio: AC'.

  <ImageLightbox imageSrc={bitwingC} style={{width:650+'px'}} citation={'Connected Grid controller'}/>



  </TabItem>
  </Tabs>





## MIDI mapping

So after we have Grid enabled as a MIDI device we can send messages to the software and for that we have to choose which settings we'd like to control. 

<Tabs queryString="DAW" groupId="DAW">
  <TabItem value="Ableton" label="Ableton" default>

  Clicking the MIDI button in the top right turns all the MIDI-mappable settings to a slightly blueish color. 

  <ImageLightbox imageSrc={moutind} citation={'Midi button int the top right'}/>

  <ImageLightbox imageSrc={midimap} citation={'The blue hue shows the MIDI-mappable parameters'}/>

  When you click on any element, you activate MIDI learn mode in. This mode waits for a MIDI CC message from the controller. After interacting with any control element on your module, Ableton displays the MIDI assignment on the left side.

  Map all the other control elements to parameters in Ableton the same way and voilá you're all configured. You can then exit MIDI learn mode safely.

  </TabItem>
  <TabItem value="Logic" label="Logic" default>
  ...
  </TabItem>
  <TabItem value="FL" label="FL Studio" default>
  ...
  </TabItem>
      <TabItem value="ProTools" label="ProTools" default>
  ...
  </TabItem>
    <TabItem value="Cubase" label="Cubase" default>
  ...
  </TabItem>
    <TabItem value="Studio One" label="Studio One" default>
  ...
  </TabItem>
      <TabItem value="Reaper" label="Reaper" default>
  ...
  </TabItem>
        <TabItem value="Bitwing" label="Bitwing" default>

  When click on "Learn" you activate MIDI learn mode. This mode waits for a MIDI CC message from the controller. After interacting with any control element on your module, Bitwing displays the MIDI assignment.

  <ImageLightbox imageSrc={bitwingL} style={{width:650+'px'}} citation={'The blue hue shows the MIDI-mappable parameters'}/>

  Now you have a generic configuration.
  </TabItem>
  </Tabs>


## Tips and tricks

Below you can find some advice on how to create your own workspace:

- Save MIDI mapping settings in Ableton. These settings are stored in the Project file for easy access to favorite configurations.

- Control non-mappable Ableton functions using keyboard commands. Utilize keyboard shortcuts, such as 'Tab', to perform actions like switching between arrangement and session views. [Keyboard Action Block](/docs/wiki/actions/keyboard-and-mouse/keyboard.md)



<Tabs queryString="DAW" groupId="DAW">
  <TabItem value="Ableton" label="Ableton" default>
    valami
  </TabItem>
  <TabItem value="Logic" label="Logic" default>
  ...
  </TabItem>
  <TabItem value="FL" label="FL Studio" default>
  ...
  </TabItem>
      <TabItem value="ProTools" label="ProTools" default>
  ...
  </TabItem>
    <TabItem value="Cubase" label="Cubase" default>
  ...
  </TabItem>
    <TabItem value="Studio One" label="Studio One" default>
  ...
  </TabItem>
      <TabItem value="Reaper" label="Reaper" default>
  ...
  </TabItem>
        <TabItem value="Bitwing" label="Bitwing" default>
  ...
  </TabItem>
  </Tabs>