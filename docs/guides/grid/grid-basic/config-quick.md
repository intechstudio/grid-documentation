---
sidebar_position: 2
title: "1.1: Configurate quicker"
description: Often used practices and tools explained
slug: config-quicker
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import add from './config-quick-img/add.png';
import add_specific from './config-quick-img/add_specific.png';
import element_act from './config-quick-img/element_act.png';
import ab_op from './config-quick-img/ab_op.png';


### Add Block and Cahnge the Order

Adding a block is possible in different ways:

- Use the **Add Action Block…** button to add an action block to the bottom of the element.  
- Or select the exact place where you want to insert an action block.  
- You can drag and drop an Action Block to change its order or move it to another element.


<div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
  <ImageLightbox imageSrc={add} style={{ height: '500px' }} citation={'Add action block to the bottom'} />
  <ImageLightbox imageSrc={add_specific} style={{ height: '300px' }} citation={'Add action block to a specific place'} />
</div>





### Navigating and Using Elements Operations

You can select an element in the module and navigate using the arrow keys.  
If you want to duplicate the configuration of one element to another, you can use the standard shortcuts: **Cmd/Ctrl + C** to copy and **Cmd/Ctrl + V** to paste.  

You can also use the icons to:  
- <span style={{ color: "green", fontWeight: "bold" }}>Copy</span> – Duplicate the element data to the clipboard.  
- <span style={{ color: "blue", fontWeight: "bold" }}>Paste</span> – Paste the element from the clipboard.
- <span style={{ color: "red", fontWeight: "bold" }}>Discard</span> - changes and revert to the previously stored settings  
- <span style={{ color: "purple", fontWeight: "bold" }}>Clear</span> - the entire element back to the factory preset

<ImageLightbox imageSrc={element_act} style={{ height: '200px' }} citation={'Element Actions'} />

### Action Block Operations

When selecting one or more Action Blocks, you can perform the following actions:

- <span style={{ color: "green", fontWeight: "bold" }}>Copy</span> – Duplicate Action Blocks data to the clipboard.  
- <span style={{ color: "blue", fontWeight: "bold" }}>Paste</span> – Paste clipboard data to the element.  
- <span style={{ color: "orange", fontWeight: "bold" }}>Cut</span> – Remove Action Blocks and copy it to the clipboard.  
- <span style={{ color: "gold", fontWeight: "bold" }}>Merge</span> – Combine Action Blocks and merge into Code.  
- <span style={{ color: "red", fontWeight: "bold" }}>Delete</span> – Remove Action Blocks from the element.

<ImageLightbox imageSrc={ab_op} style={{ height: '400px' }} citation={'Operations of the selected Action Blcoks'} />

