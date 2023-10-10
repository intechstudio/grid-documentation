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

The `merge as code` function is a very powerful tool. It converts the selected actions into a single [Code Block](/wiki/actions/code/code-block).

If you `copy` or `cut` actions, those actions can be `pasted` to other control elements as well.

:::note
`Merge as code` is a great tool if you want to conserve characters in the configuration to fin in the [Character Limit](/docs/wiki/more/char-limit.md) as it usually lowers the amount of used characters 10-30%.

*As every configuration is stored on the Grid hardware, we use the --[[@something]] comment syntax before code segments, to let Editor know which action blocks to render. All of these special comments can be removed from a config by using `merge as code`.*
:::

## Change all Event configuration under an element

It's possible to copy all of the events with their actions, and paste them to an different control element. This is useful if you want to copy the whole configuration you made to an other control element and allows you to work quicker.

Be careful, the copy all function's counterpart, the overwrite will overwrite all of the events under the selected control element. Using them together is ideal for quickly filling out a module with the same control element configurations.

<ImageLightbox imageSrc={copyall_overwrite} citation={"1. Copy all events from selected source control element<br>2. Overwrite events on selected control element"} styling={'w-4/5 object-contain'}/>

## Add a new Action to the Action chain

On a selected Event, hovering between the Actions on the Action chain area will reveal a <span style={{color:'blue'}}>blue line with a plus icon</span>. Other option is on the bottom of the Action chain marked with *Add Action block...* Clicking on the blue line or the button on the bottom will open the [Action](/category/actions) selection menu.

<ImageLightbox imageSrc={open_add_action} citation={"1. Hover with the cursor between actions<br>2. Use the button on the bottom"} styling={'w-4/5 object-contain'}/>

## Next steps


In upcoming articles we'll cover the different control elements and their primary customization options.

After learning about the indidual elements and some their options, we suggest starting to mix-and-match elements. The table below should help you find the right starting point for you.


<div style={{margin: '2em'}}>

| Controller  | Interaction based Events |
| ----------- | ----------- |
| EN16 | [encoder](/guides/guide/how-to-grid-editor/editor-103-encoder), [button](/guides/guide/how-to-grid-editor/editor-104-button) |
| EF44 | [encoder](/guides/guide/how-to-grid-editor/editor-103-encoder), [button](/guides/guide/how-to-grid-editor/editor-104-button) |
| BU16 | [button](/guides/guide/how-to-grid-editor/editor-104-button) |
</div>



