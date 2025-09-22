---
sidebar_position: 3
title: "Photoshop"
description: How to use the Photoshop Package
slug: photoshop
---
import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import pack from './img/PSpack.png'
import installed from './img/PSinstalled.png'
import installExt from './img/PSinstallext.png'
import ccx from './img/PSccx.png'
import gcp from './img/PSgcp.png'
import connection from './img/PSconnection.png'
import add from './img/PSadd.png'




### Seting up the Photoshop package

1. Install the Photoshop package through Editor 
<ImageLightbox imageSrc={pack} citation={"Photoshop package"} style={{height:350+'px'}}/>
2. After install, restart the package manager, the activated package should look now like this:
<ImageLightbox imageSrc={installed} citation={"Installed package"} style={{height:350+'px'}}/>
3. Click on the CCX file location button.
4. Double click on the file with .ccx extension
<ImageLightbox imageSrc={ccx} citation={"ccx"} style={{height:170+'px'}}/>
5. Select “Install locally”, then “OK”
<ImageLightbox imageSrc={installExt} citation={"Lightroom package"} style={{height:350+'px'}}/>
6. You should see the Grid Controller Plugin installed in the window:
<ImageLightbox imageSrc={gcp} citation={"Grid Controller plugin"} style={{height:350+'px'}}/>
7. The plugin should automatically start, shown by a small status window showing “connected”. The package preference should also show the successful connection. You can close the Photoshop plugin window, it can run in the background. 
<ImageLightbox imageSrc={connection} citation={"Connection"} style={{height:250+'px'}}/>
8. From the action block picker, add a “Tool select” PS action block to quickly confirm everything is connected.
<ImageLightbox imageSrc={add} citation={"Add Tool Select"} style={{height:450+'px'}}/>

### VSN1 Profile tipp

If you want to use the Endless knob for eight functions by selecting a button, we recommend the `1 Knob 8 Function` profile in the Profile Cloud.