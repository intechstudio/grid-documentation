---
title: DJ
slug: basic-setup
description: "This article details a starting experience with Grid and DJ softwares"
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

<!-- import midi_port_setup from '' -->

---

## Get started with a Grid

This guide will help you get started with configuring and using our TEK2 modules with popular DJ software. Our TEK2 modules offer flexibility and precision, making them perfect for DJs looking for a compact and portable solution that's easy to travel with.

### Configuring TEK2 for DJ Software

We have created configuration for DJ software. These profiles serve as a great starting point, and you are free to adjust and reconfigure the parameters to suit your personal preferences. Grid modules are designed to be plug and play. You can combine multiple modules to create a custom setup tailored to your needs. However, be aware that you might need to make adjustments in your DJ software to accommodate the additional controls.

We typically use the **TEK2**, **PBF4**, and **PO16** modules, which together form a straightforward combination to control any DJ software.

## Traktor DJ

This mapping provides a fully functional DJ control setup. We have connected a TEK2, PO16, and PBF4 from top to bottom. This setup allows you to mix music easily.

### To make this mapping work, follow these steps:

1. Download and open the Grid Editor.
2. In the Grid Editor, access the Profile Cloud where you can load and save configurations to our Modules.
3. Search for 'TEK2 DJ setup', then load and store it to your TEK2.
4. Open up Traktor dj, go to `Preferences` --> `Controller Manager` --> `Import` and select the 'tek2_po16_pbf4.tsi' mapping.

That's it! Now you are able to use the setup in Traktor. If you change the modules or their order, you will probably need to remap them, which is easy to do in the Controller Manager!

<a target="_blank" href="/presets/dj/tek2_po16_pbf4.tsi" download="tek2_po16_pbf4.tsi"> Download the tsi map file</a>

## MIXX

This basic mapping provides jogwheel and scratch functionality in Mixxx.
The row of buttons below the jogwheels is mapped to Play and Cue on each channel.
The buttons in the bottom row are unmapped and can be customized with the Mixxx MIDI mapping wizard.

### To make this mapping work, follow these steps:

1. Download and open the Grid Editor.
2. In the Grid Editor, access the Profile Cloud where you can load and save configurations to our Modules.
3. Search for 'TEK2 DJ setup', then load and store it to your TEK2.
4. Open up Mixxx, go to `Preferences` --> `Controllers` --> `Intech TEK2` and select the 'Intech TEK2' mapping.

That's it! You are now able to use the jog wheel and create your custom mapping.

<!-- <ImageLightbox imageSrc={quick_controls} citation={"Left: MIDI learn values for a PBF4 potentiometers and faders  <br> Right: Transmit and Receive are activated, so MIDI values can be received and sent back to Grid"}/> -->
