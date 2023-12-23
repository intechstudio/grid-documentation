---
title: "Grid control with Blue Hand"
description: "Creating a Blue Hand for default Grid"
sidebar_position: 0
slug: blue-hand
---

import ProtocolUrl from '@site/src/components/ProtocolUrl';
import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import img1 from './img/midi_settings.png';
import img2 from './img/csurfaces.png';
import img3 from './img/set_surface.png';
import img4 from './img/bh_set_up.png';



*This article details the use of the Blue Hand feature of Ableton for controlling plugins with the default Grid profile. Tested on Ableton Live 11.*


---



## What can you use the Blue Hand for with Grid in Ableton

The Blue Hand feature within Ableton will allow you to control parameters of a currently selected plugin without the need of MIDI-learning parameters every time to the connected MIDI controller.

The scripts below support control for 16 parameters, and in the case of an EN16 these will all be assigned to its 16 encoders

You'll need an installation of at least Ableton Live 9+, since we're going to use a newer feature of Ableton called "User Remote Scripts" [more info about how to find it here](https://help.ableton.com/hc/en-us/articles/206240184-Creating-your-own-Control-Surface-script). 


Plug in your Grid module into your computer directly. (In this guide I'm using an EN16 built before May of 2023, or in other words a D51-based Grid)

During this guide, there will be a couple of files you'll have to download. These will be marked at the start of each section.



## Preparing Ableton

Starting up Ableton with Grid plugged in, there are a few settings we have to set.

### Ableton settings

Find the controller(s) in preferences under MIDI.

:::tip What to look for
Older Grid modules are called `Intech Studio:AC` while modules sold after May of 2023 should appear as `Intech Grid MIDI Device`.
:::

<ImageLightbox imageSrc={img1}  citation={"Make sure both checkboxes are ticked in the Output line if using the Profile in this guide"} />

Enable the modules for both In- and Output by checking the both the **Track** and **Remote** boxes. 

### Creating Remote Script files and the Options file

:::note Downloads
First, download the following files for this section of the guide:

- Both Intech Studio custom Control Surface script files for Blue Hand (for each version of Grid microarchitecture). Download the <a target="_blank" href="/presets/bluehand/bluehand.zip" download="bluehand.zip"> Zip containing two folders, one for each control surface.</a> 
- Ableton Options file for exposing hidden VST parameters. Download the <a target="_blank" href="/presets/bluehand/Options.txt" download="Options.txt"> plain text file, called Options.txt.</a> 

:::

:::caution
Make sure Ableton is not running during this section of the guide!
:::




#### With the files downloaded follow these steps for creating the scripts:

1. Navigate to your local Preferences folder where Ableton stores scripts (described [at the beginning](./blue-hand.md#what-can-you-use-the-blue-hand-for-with-grid-in-ableton) of this article).

**Mac OS:** `HD:/Users/[Username]/Library/Preferences/Ableton/Live x.x.x/User Remote Scripts`

**Windows:** `C:\Users\[Username]\AppData\Roaming\Ableton\Live x.x.x\Preferences\User Remote Scripts`

2. Open up the downloaded **bluehand.zip** and within you'll find two folders: `Intech_Studio_AC` and `Intech_Studio_Grid`.

3. Create a new folder named `User Remote Scripts` in your local preferences folder if there isn't one already.

4. Place both folders in the archive in the `User Remote Scripts` folder. This created the two scripts for the two types of Grid devices that exist.

5. Finally, place the downloaded **Options.txt** file into the local Preferences directory.

6. Restart Ableton.

## Setting up Grid as a Control Surface within Ableton

After Ableton restarted, it should now load the newly added scripts for Grid called `Intech_Studio_AC` and `Intech_Studio_Grid`.

You can find this custom script in Ableton preferences, under MIDI.

<ImageLightbox imageSrc={img2}  citation={"When opening up the dropdown for a control surface both Intech scripts should show up."} />

Choose one of the scripts (they are virtually identical, there's only two for recognition's sake) and assign your currently connected Grid controller to both the in- and outputs.

After setting up your MIDI section should look something like this:

<ImageLightbox imageSrc={img3}  citation={"Match the connected controller to the surface."} />

:::tip For users with multiple generations of Grid controllers
Set up two rows of Control Surfaces, with different in-and outputs (one row should have Intech Studio Grid and the other Intech Studio AC, their control surface script can be either).

We have to do this, as depending on which module you have plugged in at the time, only one or the other devices will be detected.
:::

## Almost done!

Congratulations, you've now successfully set up your Grid control surface, and Ableton will now register Grid as a Blue Hand controller.

<ImageLightbox imageSrc={img4}  citation={"The Drift plugin here changes the filter frequency when I turn the first encoder on the EN16."} />


You can test it by just plugging an Ableton plugin on any of the tracks, and you should be able to see a Blue hand, and turning the controller pots should change the values on the plugin automatically. Nice!


## Setting up bi-directional control with Editor (Optional)

:::note Downloads
You can either find the Profile in the Profile Cloud under Presets within Grid Editor by the name `en16 midirx` or just click the link here:

<ProtocolUrl title="Click here to import the EN16 MIDIRX Preset in Editor" protocolUrl="grid-editor://?config-link=weNFaPglV3lnwzeKElVr"/>

<br></br>

This is a link to a Grid Editor System Event Preset, containing settings for the MIDIRX Event. The preset is made for an EN16, but you can adapt it for other modules, just change the `self:encoder_value` to the appropriate ones where applicable.

More about understanding MIDIRX [here.](/docs/wiki/more/midi-rx.md) 
:::

Loading the above Grid Editor Preset to your module's MIDI RX Event, changes made in Ableton will be reflected on the controller. If you're using a controller with non-digital controls, like a PO16 or a PBF4, switching on the setting named `Takeover Mode: Value Scaling` in Ableton Preferences/MIDI is recommended to avoid parameters jumps.


Now Blue Hand is fully set up, and should function as expected.


