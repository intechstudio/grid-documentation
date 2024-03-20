---
slug: element-name
title: Element Name
tags: [Action Block, Code Block, LUA, Workflow]
description: "Element Name Blocks are used to name the Control Element configuration in Grid Editor. These names are stored with the configuration and therefore are saved in both Presets or when Store is pressed."
---
import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import ElementBlock from './img/element_block_crop.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Element Names" label="About Element Names" default>

Element Name Blocks are used to name the Control Element configuration in Grid Editor. These names are stored with the configuration and therefore are saved in both Presets or when Store is pressed.


<ImageLightbox imageSrc={ElementBlock} style={{width:350+'px'}} citation={'Element Name Block in the Grid Editor'}/>

Element named are only visible when the little "eye" icon is clicked on the Grid Editor UI. Currently character count is very limited, use abbreviations when possible to keep within the [config character limit](/docs/wiki/more/char-limit.md).

</TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

### element name

  shortname: gen

- **How:** `self:element_name("name")`
  - "name": string, put between " " or ' ' symbols
- **What:** This function gives a name to the control element, or when called without parameters, it returns the name of the control element as a string.
  IMPORTANT: The name will only work, if it's put in the first place of the action chain.
- **Example:** The function `self:element_name("helloworld")` in a code block, put in the top of the action chain, will name the control element *helloworld*.

### element name send

  shortname: gens

- **How:** `self:element_name_send()`
- **What:**
- **Example:**

</TabItem>
</Tabs>
