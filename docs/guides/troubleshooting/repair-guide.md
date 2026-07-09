---
layout: docs
sidebar_position: 3
title: "Repairing Grid"
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
import img12 from './img/interface_fix_cropped.gif'
import tilted from './img/tilted.jpg'


import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';


*Using this guide you'll be able to reliably disassemble your Grid module for repair or for using an Upgrade Kit.*

---


## What you'll need for a repair

The tools for this job are listed below:


- An Intech Studio Grid module, manufactured after May of 2023 (no visible logo on front panel);
- A Philips-type, size-1 screwdriver; 
- A set of disassembly picks (comes with the motherboard or the interface PCBs meant for repair);
- A tool to lift the potmeter caps (eg: flat headed screwdriver, guitar pick);
- A set of replacement parts if needed.


Choose a clean, non-conductive surface you can comfortably work on, the whole process shouldn't take more than 10 minutes!



<ImageLightbox imageSrc={img2} style={{ width: '100%' }} citation={'A set of disassembly picks, a Grid module, PH1 screwdriver and something to lift the potcaps off. '}/>


### Disassembly of the EF44, PBF4, EN16, PO16

Follow along with the video for your module type.

<iframe width="100%" height="720px" src="https://www.youtube.com/embed/YLPFODnFrg4?si=YvUD4XxbvmOOLYjN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Disassembly of the TEK2, VSN1, BU16

Follow along with the video for your module type.

<iframe width="100%" height="720px" src="https://www.youtube.com/embed/ZA0E2zf7lU0?si=teGTKOZecSc3uuNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Disassembly Tips

- When lifting the potentiometers, you can use a flat screwdriver or a guitar pick — slide it underneath and gently push up, which makes it much easier to pull out.
- The interface board pins hold the motherboard in place, so you need to push the small pin holders on each side down while tilting them slightly outward to release it.
- When removing the motherboard, gently lift the PCB by pulling on one side or by lifting it through the hole in the main PCB. Angle it carefully to avoid damaging the two white buttons next to the hole.


<ImageLightbox imageSrc={tilted} styling={'w-3/5'} citation={'push the small pin holders on each side down while tilting them slightly outward'}/>

<!--  <ImageLightbox imageSrc={img11} styling={'w-3/5'} citation={'Disassembly is done, nice job!'}/> -->




## Repair of interface (side) PCBs

If you're having trouble with getting one of your Grid modules to connect to another over one of its sides, you might have a faulty interface on your hands.

:::tip Before you get started!
Check in with Intech Studio Support before you start trying to repair your device, to make sure your issue is something you can fix at home.  
In some cases we'll have to provide you with spare parts or tools for disassembly to get you started.


Write to us: support@intech.studio!
:::

In most cases the interface board is not actually faulty or completely dead, it's just improperly seated. Follow the advice from Intech Studio support on how to proceed!

### Fixing a misaligned interface PCB

If a module is not recognized by Grid Editor, the side connector pins may have become misaligned. Follow the steps below to see how to inspect and gently realign the pins to restore communication.

1. Identify which side is not connecting;
2. Remove only the faceplate to access the side interface PCBs. [follow the steps here](#disassembly-of-the-ef44-pbf4-en16-po16) [or here;](#disassembly-of-the-tek2-vsn1-bu16)
3. Hold the side interface board with one finger and carefully put some distance inbetween the PCB and the plastic cover of the connector (see the GIF below), doing this will gently bend the pins back into place;
4. Test to see if the connection improved before re-assembly.

<ImageLightbox imageSrc={img12} citation={'Hold the Inteface and bend gently the black pins holder'}/>

### Fixing a 'dead' interface PCB

Rotating the suspected module and checking which side would not connect with a second Grid module is the best way to know which side is the faulty one.

Remove the faulty Interface PCB by following [the disassembly guide](#disassembly-of-the-ef44-pbf4-en16-po16) and replace it with a replacement one you received from Intech Studio support.

<ImageLightbox imageSrc={img10} styling={'w-3/5'} citation={"For an interface board repair remove the iterface PCBs carefully. They are flexible, but it's possible to break them if one's not careful."}/>


## Troubleshooting

Regarding things that may go wrong during disassembly:
- If the copper connectors on the inner side of the interfacing PCBs become bent or deformed: don't be afraid to bend them back into place by hand.
- If a bronze nut falls out of the bottom of the plastic shell or becomes loosened: try to put back in/hold it in place with a second screwdriver;
- If plastic scraps or residue fall out of the caps when removing them for the first time: after reassembly, check if the caps touch or scratch the front panel, if they do email us at support@intech.studio.
