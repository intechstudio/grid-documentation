---
title: "The Configuration panel"
description: Often used practices and tools explained
slug: editor-102
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import action_manipulation from './img/action_manipulation.png'
import copyall_overwrite from './img/copyall_overwrite.png'
import open_add_action from './img/open_add_action.png'

*Below you'll find a lot of useful information about creating your own Grid configuration in Editor, with examples and explanations detailing every move.*


---



## Change the selected event's action chain


The available tools above the Action blocks can be used to make adjustments to the Action chain quickly and also to reorganize configurations. Beside altering the default configurations, you can also add new Action blocks to the Action chain.

1. Change the order with drag area
2. Select actions
3. After selection, copy, cut, remove the blocks
4. If cut or copy was used, paste is available
5. Merge as code

<ImageLightbox imageSrc={action_manipulation} citation={""} styling={'w-4/5 object-contain'}/>

The *merge as code* function is a very powerful tool. It converts the selected actions into a single [Code Block](/wiki/actions/code/code-block).

If you copy or cut actions, those actions can be pasted to other control elements as well.

:::note
*Merge as code* is a great tool if you want to spare characters in the configuration. As every configuration is stored on the Grid hardware, we use the --[[@something]] comment syntax before code segments, to let Editor know which action blocks to render. All of these special comments can be removed from a config by using *merge as code*.
:::

## Change all event configuration under an element

It's possible to copy all of the events with their actions, and paste them to an other control element. This is useful if you want to copy the whole configuration you made to an other control element.

Be careful, the copy all function's counterpart, the overwrite will overwrite all of the events under the selected control element.

<ImageLightbox imageSrc={copyall_overwrite} citation={"1. copy all events from selected source control element<br>2. overwrite events on target control element"} styling={'w-4/5 object-contain'}/>

## Add a new action to the action chain

On a selected event, hovering between the actions on the action chain area will reveal a <span style={{color:'blue'}}>blue line with a plus icon</span>. Other option is on the bottom of the action chain marked with *Add action block...* Clicking on the blue line or the button on the bottom will open the [action](/category/actions) selection menu.

<ImageLightbox imageSrc={open_add_action} citation={"1. Hover with the cursor between actions<br>2. Use the button on the bottom"} styling={'w-4/5 object-contain'}/>

## Next steps


In the next articles we will go through the different control elements and their primary customization options. After learning about the indidual elements - and their options -, you can start to mix them. The table below should help you find the right starting point for you.


<div style={{margin: '2em'}}>

| Controller  | Primary events |
| ----------- | ----------- |
| EN16 | [encoder](/guides/guide/how-to-grid-editor/editor-103-encoder) |
| EF44 | [encoder](/guides/guide/how-to-grid-editor/editor-103-encoder) |

</div>



