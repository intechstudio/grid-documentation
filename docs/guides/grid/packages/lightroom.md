---
sidebar_position: 2
title: "Lightroom Classic"
description: How to use the Lightroom Package
slug: Lightroom
---
import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import pack from './img/LRpack.png'
import installed from './img/LRinstalled.png'
import plugin from './img/LRPlug-in.png'
import block from './img/LRblock.png'




### Seting up the Lightroom Classic package

1. Install Lightroom package through Package Manager in Editor 
<ImageLightbox imageSrc={pack} citation={"Lightroom package"} style={{height:350+'px'}}/>
2. After install, the current status of the package can be seen in the preference window. The “receiver” is connected, meaning the package pools connection from Lightroom Classic
“Transmit” is not identified, the Lightroom plugin is not enabled
<ImageLightbox imageSrc={installed} citation={"Lightroom package"} style={{height:350+'px'}}/>
3. Open Lightroom Classic
4. Navigate to File -> Plug-in Manager…
5. Add a plug-in
<ImageLightbox imageSrc={plugin} citation={"Lightroom package"} style={{height:350+'px'}}/>
6. Select the Plug-in location
  - **macOS**: from User/Documents/grid-userdata/packages/lightroom-package
File name is: lightroom-plugin.lrplugin
 - **Windows**: Select the C:\Users\\{Username}\Documents\grid-userdata\packages\package-lightroom-classic\lightroom-plugin.lrplugin folder
7. Now the plugin might throw a connection error, but it should work.
  - In the Editor, now transmit should be true.
8. From the action block picker, add a “Set Image Property” LRc action block to quickly confirm everything is connected. Upon executing the action, LRc should for example receive image rating change messages
<ImageLightbox imageSrc={block} citation={"Lightroom package"} style={{height:550+'px'}}/>



### VSN1 Profile tipp

If you want to use the Endless knob for eight functions by selecting a button, we recommend the `1 Knob 8 Function` profile in the Profile Cloud.