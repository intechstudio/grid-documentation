---
layout: docs
sidebar_position: 4
title: "Grid: Repair Guide"
date: 2023-11-07
slug: repair-guide
description: Repair- and upgrade guide for modules made after May of 2023.
---

import img1 from './img/repair (1).jpg'
import img2 from './img/ef44-assemble.jpg'
import img3 from './img/repair (3).jpg'
import img4 from './img/repair (4).jpg'
import img5 from './img/repair (5).jpg'
import img6 from './img/repair (6).jpg'
import img7 from './img/repair (7).jpg'
import img8 from './img/repair (8).jpg'
import img9 from './img/repair (9).jpg'
import img10 from './img/repair (10).jpg'
import img11 from './img/repair (11).jpg'
import tilted from './img/tilted.jpg'


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';


*Using this guide you'll be able to reliably disassemble your Grid module for repair or for using an Upgrade Kit.*

---


## What you'll need

The tools for this job are listed below, the whole process should not take more than 10 minutes.


- A Grid module, manufactured after May of 2023 (no visible logo on front panel);
- A Philips-type, size-1 screwdriver; 
- Pin holder (comes with the MOBO or the Interfaces)
- potmeter cap lifter (eg: flat screwdriver, guitar pick)
- A clean, non-conductive surface you can comfortably work on.



<ImageLightbox imageSrc={img2} styling={'w-3/5'} citation={''}/>


## Disassembly

Follow along with the video for your module type.

**EF44, PBF4, EN16, PO16**
<iframe width="560" height="315" src="https://www.youtube.com/embed/YLPFODnFrg4?si=YvUD4XxbvmOOLYjN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**TEK2, VSN1, BU16**
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA0E2zf7lU0?si=teGTKOZecSc3uuNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Tips

- When lifting the potentiometers, you can use a flat screwdriver or a guitar pick — slide it underneath and gently push up, which makes it much easier to pull out.
- The interface board pins hold the motherboard in place, so you need to push the small pin holders on each side down while tilting them slightly outward to release it.
- When removing the motherboard, gently lift the PCB by pulling on one side or by lifting it through the hole in the main PCB. Angle it carefully to avoid damaging the two white buttons next to the hole.


<ImageLightbox imageSrc={tilted} styling={'w-3/5'} citation={'push the small pin holders on each side down while tilting them slightly outward'}/>
<ImageLightbox imageSrc={img11} styling={'w-3/5'} citation={'Disassembly is done, nice job!'}/>



## Repair of Interface PCB

Remove the faulty Interface PCB and replace it with a replacement one you received from Intech Studio support.

<ImageLightbox imageSrc={img10} styling={'w-3/5'} citation={"For an interface board repair remove the iterface PCBs carefully. They are flexible, but it's possible to break them if one's not careful."}/>




## Troubleshooting

Regarding things that may go wrong during disassembly:
- If the copper connectors on the inner side of the interfacing PCBs become bent or deformed: don't be afraid to bend them back into place by hand.
- If a bronze nut falls out of the case or becomes loosened: try to put back in/hold it in place with a second screwdriver;
- If plastic scraps or residue fall out of the caps when removing them for the first time: after reassembly, check if the caps touch or scratch the front panel, if they do email us at support@intech.studio;
