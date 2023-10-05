---
title: Button (BU16, EN16, EF44, PBF4)
description: Change the button to toggle mode and learn about button states.
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import button_mode_init from './img/button_mode_init.png'

The button events can be found on most Grid controllers. Buttons have the following modes:
- Momentary (default), sends a value 127 on press, and value 0 on release
- Toggle, sends a value 127 on press, and value 0 on press again
- X-step toggle, sends value based on the step number on each press, 3-step will send 0, 42, 84, 126

You can check out the button [wiki article here](/wiki/actions/element-settings/button-mode).

Let's add an **Button Mode** action block to the *init* event of the button control element. We could put it onto the *button* event as well, but pay attention to the order of execution on an action chain. 

<ImageLightbox imageSrc={button_mode_init} citation={"Add the button mode "} styling={'w-4/5 object-contain'}/>

## Momentary mode

## Button minimum and maximum


## Toggle mode


## Button presses are sent out twice


## Button state vs. button value


## Next steps