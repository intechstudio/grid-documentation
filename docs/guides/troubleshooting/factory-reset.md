---
layout: docs
sidebar_position: 3
title: "Grid: Factory reset"
date: 2021-11-25
slug: factory-reset
description: Factory reset for Grid controllers.
---


import img1 from './img/nvm_erase.gif'
import img2 from './img/eraseModule.jpg'

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox'

Sometimes, when we upload code to a Grid controller, it can lead to unexpected behavior. In such instances, we may find it necessary to perform a factory reset on our Grid controller to restore it to its default settings.

## Get ready for factory reset

:::caution Important: A factory reset erases all your data from your controller

* All configurations from all Pages of the controller
* Resets all Page configurations to the default ones

:::




### Factory Reset using Editor

One of the options for performing a factory reset is through the Grid Editor. This method resets all connected controllers to their factory settings.

1. Connect your controller to the Grid Editor.
2. Navigate to the preferences section.
3. On the preferences sidebar, select "Development settings" from the dropdown menu.

<ImageLightbox imageSrc={img2}  style={{height:350+'px'}} citation={'Erase button under Development settings'}/>


4. Under "NVM Erase," click on the "Erase" button.
5. The controller starts to reset; it may take some seconds.
6. All connected controllers will be reset to their factory settings.

<!-- vedd kissebbre a kepet kerlek :) -->



---



### Factory Reset using the Utility Button on Grid

:::caution
This option is only available on modules purchased after May of 2023!
:::

Alternatively, you can perform a factory reset directly on the controller by following these steps:

<ImageLightbox imageSrc={img1} style={{height:350+'px'}} citation={'Press the button right as the module boots to start the process'}/>



1. Power up the module by plugging in a USB cable.
2. Press the side button immediately after it receives power.
3. The controller should turn bright yellow and blink for a couple of seconds.
4. Grid memory will be erased and all Page configurations will be set back to default.

<!-- GIF -->


