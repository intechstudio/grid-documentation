---
title: "More about: TEK2"
slug: tek2
description: Discover Endless possibilities within the new TEK2.
tags: [TEK2 ,Workflow, Logic]
---
import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import tek21 from './img/tek21.png'
import tek22 from './img/tek22.png'
import tek23 from './img/tek23.png'
import reschange from './img/reschange.png'
import wheel from './img/wheel_sm.gif'
import tekled from './img/tek2_led.png'

### TEK2 Redefining Control with Endless Rotary Potentiometers

#### What are Endless Rotary Potentiometers?

- Endless Rotary Potentiometers offer precise and continuous rotational control.
- Enable smooth and intuitive manipulation of parameters.
- They feature push-button functionality for additional actions or functions with a simple press.

<ImageLightbox imageSrc={tek22} style={{width:450+'px'}}/>

#### Endless Rotary Potentiometers with anodized aluminium Knobs:

- Features anodized aluminium knobs that provide a tactile and ergonomic feel.
- Designed to offer a comfortable grip and effortless rotation.
- Allows for smooth and precise adjustments with just one finger.
- Ensures durability and reliability, built for rigorous usage and long-term performance.

<ImageLightbox imageSrc={wheel} style={{width:300+'px'}} citation={'You can see how even small nudges and turns result in value changes.'}/>

#### Differences between Encoders and Normal Potentiometers:

- Range of Motion: Encoders offer infinite rotation, while normal potentiometers have fixed endpoints. But with TEK2, the Potentiometers have endless rotation, much like an Encoder.
- Digital vs. Analog Output: Encoders provide digital signals, while normal potentiometers offer analog output.
- Precision and Resolution: our Encoders offer stepped rotation for precise adjustments, whereas potentiometers provide smooth and fine control.

<ImageLightbox imageSrc={tek23} style={{width:500+'px'}}/>

### Let's break down the factory preset with tips and tricks

*The default TEK2 configuration differs in a lot of ways from our previously inlcluded default configurations. Most notably because it has to accomodate for 5 LEDs per control element while also staying comprehesible.*

<!---Szerintem jöhetne ide még szöveg/kép arról hogy a normális config milyen és ehhez képest miért kell másképp működjön a TEK2-es config.--->

#### 14bit MIDI to 7bit MIDI

Endless Potentiometers come factory-set to output MIDI data at 14 bits, spanning a range of 0 to 16383, allowing for precise control of parameters like volume and panning.
However, for compatibility with software and synthesizers limited to 7-bit MIDI (0-127), you can employ the command `self:endless_max(127)` to adjust the output accordingly.

You can find this Profile in Grid Editor under: `Profile cloud > Recommended configs > 'Endless 7bit (0-127) MIDI'`

<ImageLightbox imageSrc={reschange} style={{width:800+'px'}} citation={'Set self:endless_max() to 127 on the Init Event then change from 14bit MIDI to MIDI on the Endless Event.'}/>


#### Endless LEDs

When operating with the Endless Potmeters LEDs, it's important to note that the LEDs on the left side are numbered from 10 and increase by two until reaching 18. Similarly, on the right side, the LEDs are counted from 9 to 17, also increasing by two. The LED numbering ascends from bottom to top.

To effectively manage this setup, we utilize a for loop to iterate through the LED intensities based on the value of the endless potmeter.

<ImageLightbox imageSrc={tekled} style={{width:300+'px'}} citation={''}/>
