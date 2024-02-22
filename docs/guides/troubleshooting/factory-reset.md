---
layout: docs
sidebar_position: 6
title: "Controller: Factory reset"
date: 2021-11-25
description: Factory reset for Grid controllers.
---
import img1 from './img/eraseModule.jpg'

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox'

Sometimes, when we upload code to a Grid controller, it can lead to unexpected behavior. In such instances, we may find it necessary to perform a factory reset on our Grid controller to restore it to its default settings.

## Get ready for factory reset

:::caution Important: A factory reset erases all your data from your controller

* All configurations from all Pages of the controller
* Resets all configurations to the default

:::

---


### Factory Reset with Grid Editor

One of the options for performing a factory reset is through the Grid Editor. This method resets all connected controllers to their factory settings.

### Steps:

1. Connect your controller to the Grid Editor.
2. Navigate to the preferences section.
3. On the preferences sidebar, select "Development settings" from the dropdown menu.
4. Under "NVM Erase," click on the "Erase" button.
5. The controller starts to reset; it may take some seconds.
6. All connected controllers will be reset to their factory settings.

<!-- vedd kissebbre a kepet kerlek :) -->

<ImageLightbox imageSrc={img1} styling={'h-50%'} citation={'Erase button under Development settings'}/>

---



## Factory Reset with Utility Button

Alternatively, you can perform a factory reset directly on the controller by following these steps:

### Steps:

1. Plug the controller into power.
2. Press the side button immediately.
3. The controller should turn bright yellow and blink for a second.
4. Controller memory will be erased.

<!-- GIF -->
