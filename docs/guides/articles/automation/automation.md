---
title: MIDI Automation - Elevate Your Production
slug: basic-setup
description: "This article details a starting experience with Grid and Midi Automations"
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import lfo_cc from './img/LFO cc.png'
import lfo_cc2 from './img/LFO cc2.png'

---

## such wow

MIDI automation is a vital tool for musicians and producers, enabling the creation of dynamic, expressive performances with ease. By automating parameters like Cutoff, VCA Decay and effects, you can add depth and movement to your music.

Our MIDI devices can send LFOs or any custom curvers, allowing you to extend your gear with more modulation possibilities!

## LFO profile

If you're looking to expand your synthesizer's capabilities with additional LFOs and want to assign them to any controllable values, you can achieve this using the EF44 and EN16 modules. Here's how you can enhance your synth with 4 LFOs using our EF44 profile, which is available on our Profile Cloud under the name "4LFO 1.3."

First, refer to your synthesizer's manual to identify a Control Change (CC) parameter that you would like to adjust with the MIDI LFO. A good starting point is the ADSR Decay. For instance, if you are using a Prophet 6, the VCA Envelope Decay corresponds to CC: 68.

Next, you will need to configure the first encoder to the desired CC value. In this example, you would set the self of the first encoder to 68.

<ImageLightbox imageSrc={lfo_cc} citation={"first LFO MIDI CC 68"} style={{height:400+'px'}}/>

The first knob on your module will control the Offset. This adjusts the baseline level of the parameter you are modulating.

The second knob controls the Range. This determines the amplitude of the LFO, effectively setting how much the parameter will vary.

The last knob adjusts the Speed, which sets the frequency of the LFO, determining how fast the parameter oscillates.

Finally, the push function of the knob will activate or deactivate the LFO modulation, giving you quick control over whether the effect is applied or not.

By following these guidelines, you can effectively add more LFOs to your synthesizer setup and have precise control over various parameters, enhancing your sound design capabilities.

You can use one LFO with the EF44, Profile: 1LFO for EF44.

<ImageLightbox imageSrc={lfo_cc2} citation={"LFO MIDI CC 68"} style={{height:400+'px'}}/>

## ADSR profile

## Guide how to create your own
