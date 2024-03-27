---
sidebar_position: 0
title: "0.0: Plug-and-Play"
description: "Configuring your DAW for Grid"
slug: editor-100
---

import mout from './img/intech_out.png'
import moutind from './img/midi_out_ind.png'
import midimap from './img/midimap.png'
import bitwigC from './img/bitwig_connect.png'
import bitwigL from './img/bitwig_learn.png'
import cubaseC from './img/cubase_connect.png'
import flEnable from './img/fl_enable.png'
import flMidi1 from './img/fl_midimap1.png'
import flMidi2 from './img/fl_midimap2.png'
import rpMIDI from './img/rp_midi.png'
import rpEnable from './img/rp_enabled.png'
import soMidi from './img/so_midi.png'
import soFader from './img/so_fader.png'
import soFader2 from './img/so_fader2.png'
import soSynth from './img/so_synth.png'
import cubaseQuickControls from './img/cubase_quick_controls.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

This guide explains how to connect the Grid module(s) to your DAW and configure them once connected.

Out of the box, Grid controllers are set up for seamless DAW control and other applications. Users can easily utilize software-side MIDI mapping or MIDI learn functionality. 
This default setup allows you to connect multiple Grid modules and immediately configure pots, knobs, sliders, and buttons in your preferred DAW without needing to open Grid Editor.

:::tip Want to know more?
For anything more complex than just the plug-and-play experience please take a look at [Grid Editor!](/docs/guides/grid/grid-basic/1-first-changes.md)
:::


---

## Connect Grid to your DAW


So in the DAW we'll first have to enable our modules to be able to use them for MIDI mapping.

Let's start up a fresh project in your DAW of choice:

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
  
and open Preferences/External Devices and click on "Add...". Then, choose "New Control Surface" from the options. In the 'Receive From' dropdown menu, select either 'Grid' or 'Intech Studio: AC'. Next, provide a name for the device, such as "Grid", and click OK.

  <ImageLightbox imageSrc={soMidi} style={{height:450+'px'}} citation={'External Devices, Grid module'}/>


  </TabItem>
      <TabItem value="Reaper" label="Reaper" default>
  
  open Settings/Midi Devices, Here we should find our Grid module named 'Intech Studio - Grid' or 'Intech Studio: AC'.


  If not, click "Reset all MIDI devices".
  On Midi inputs, right click the Grid module and enable input for control messages.




  <ImageLightbox imageSrc={rpEnable} style={{height:400+'px'}} citation={'Enabled Grid'}/>
  </TabItem>
    <TabItem value="Bitwig" label="Bitwig" default>
    
  and navigate to Settings/Controllers, then click on "+Add Controller" under the Controllers section. Choose "Generic" under Hardware Vendor, and proceed to add the Grid module named 'Grid' or 'Intech Studio: AC'.  


  <ImageLightbox imageSrc={bitwigC} style={{width:650+'px'}} citation={'Connected Grid controller'}/>



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
  

  1. Open the Mixer view by clicking on the button located in the lower right corner under the browser.
  2. On the left side, select "Show External Devices" and open up the Grid interface.
  3. Click on "MIDI Learn" and manipulate the faders, potentiometers, or buttons as needed, then close the MIDI Learn function.
  
  <ImageLightbox imageSrc={soFader} style={{height:300+'px'}} citation={'Show External Devices'}/>
  
  - To assign a parameter eg: volume fader, to control with the Grid: move a control on Grid then right click on a fader and choose "Assign 'Volume' to Controlx on Grid".
    <ImageLightbox imageSrc={soFader2} style={{height:300+'px'}} citation={'Assign to fader'}/>

  - Let's assign a Grid potentiometer to a parameter on a VST synth.
  Open the synth and in the top right next to Grid, open the mapping interface. Once opened, move the Cutoff Frequency parameter, then move a potentiometer on the Grid. In the top left corner, you'll see the two parameters; click on "Assign." From now on, you can control the Cutoff frequency from the Grid module.

  <ImageLightbox imageSrc={soSynth} style={{height:450+'px'}} citation={'Assign control'}/>


  </TabItem>
      <TabItem value="Reaper" label="Reaper" default>
  
  For example let's midi map faders to Grid, you have to do so using Actions. 

  Open the Action List (Action/Show action list...) and filter for "set volume". Select one of the "Track: Set volume for track x (MIDI CC only)" and under the "Shortcuts for selected action" click "Add...". Then move the controller you wish to use and it will assign that action, then press OK.
  
   Now when you move that controller, the fader moves. You can set one controller to adjust the mixer faders on any selected track, the last touched track or set multiple controllers to control multiple tracks.

  <ImageLightbox imageSrc={rpMIDI} style={{height:350+'px'}} citation={'Mapped Faders'}/>
  </TabItem>
        <TabItem value="Bitwig" label="Bitwig" default>

  When click on "Learn" you activate MIDI learn mode. This mode waits for a MIDI CC message from the controller. After interacting with any control element on your module, Bitwig displays the MIDI assignment.

  <ImageLightbox imageSrc={bitwigL} style={{width:650+'px'}} citation={'The blue hue shows the MIDI-mappable parameters'}/>

  Now you have a generic configuration.
  </TabItem>
  </Tabs>
