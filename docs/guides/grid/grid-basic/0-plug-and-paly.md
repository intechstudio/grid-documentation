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
import cubaseC from './img/cubase_connect.png'
import flEnable from './img/fl_enable.png'
import flMidi1 from './img/fl_midimap1.png'
import flMidi2 from './img/fl_midimap2.png'
import cubaseQuickControls from './img/cubase_quick_controls.png'
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
 
   
  and open up Options/MIDI Settings and under MIDI we'll find all our MIDI gear that's connected to the computer.

  Here we should find our Grid module named 'Grid' or 'Intech Studio: AC'.

  Select the Grid module under Input and click Enable. Once enabled, the Grid can send MIDI messages to FL Studio.

  <ImageLightbox imageSrc={flEnable} style={{height:600+'px'}} citation={'MIDI Settings, Enabled Grid module'}/>
  
  </TabItem>
      <TabItem value="ProTools" label="ProTools" default>
  ...
  </TabItem>
    <TabItem value="Cubase" label="Cubase" default>

select **Studio -> Studio Setup...**, to upen up the Studio Setup panel, where general MIDI configurations can be viewed.

Select the **MIDI Port Setup** tab, and check if your Grid controller is listed under **MIDI Input**. If you don't see Grid listed there, check the [troubleshooting](/guides/troubleshooting) articles.

<ImageLightbox imageSrc={cubaseC} style={{height:400+'px'}} citation={"Grid controllers shown under MIDI Port setup"}/>
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

  First, enable Multilink and move the parameters you wish to control. Once you've moved, click Multilink once more. 
  
  <ImageLightbox imageSrc={flMidi1} style={{height:100+'px'}} citation={'Multilink button Enable'}/>

  This action will prompt the Remote Control Settings window to appear. Simply move the Grid knobs or faders, and they will automatically map to the displayed destination.

  <ImageLightbox imageSrc={flMidi2} style={{height:500+'px'}} citation={'Remote Control Settings with kick fader waiting to assign'}/>
  </TabItem>
      <TabItem value="ProTools" label="ProTools" default>
  ...
  </TabItem>
    <TabItem value="Cubase" label="Cubase" default>

Cubase has a feature called Quick Controls, which allows 8 control elements to be mapped. It allows you to select specific parameters on a channel which you want to control. You can assign MIDI messages to these parameters, and control them with your Grid controller.

Tick in the **Learn** checkbox, and move a knob on your Grid controller. The **Learn** checkbox will enable MIDI learn in Cubase, so your interaction with the control elements are recorded. Click on a row, tweak a control element, repeat.

In each Quick Control row, under the flags the **R** should be activated, so the MIDI messages are received by Cubase. If we want to send MIDI messages back to Grid, the **T** flag should be activated too.

<ImageLightbox imageSrc={cubaseQuickControls} citation={"Left: MIDI learn values for a PBF4 potentiometers and faders  <br> Right: Transmit and Receive are activated, so MIDI values can be received and sent back to Grid"}/>

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