---
layout: docs
sidebar_position: 3
title: "Grid: Factory reset"
date: 2021-11-25
description: Factory reset for Grid controllers.
---

import img1 from './img/nvm_erase.gif'

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';




Sometimes, when we upload code to a Grid module, it can lead to unexpected behavior. In such instances, we may find it necessary to perform a factory reset on our Grid module to restore it to its default settings.


## Get ready for factory reset

:::caution Important: A factory reset erases all your data from your controller

* All configurations from all Pages of the module
* Resets all configurations to the default

:::



### Steps:

1. Plug the controller into power.
2. Press the side button immediately.
3. The controller should turn bright yellow and blink for a second.
4. Module memory will be erased.

<!-- GIF -->

<ImageLightbox imageSrc={img1} styling={'w-5/5'}/>
