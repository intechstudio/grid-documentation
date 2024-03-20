---
slug: comment
title: Comment
tags: [Action Block, LUA, Workflow]
description: "Comment blocks are used to create comments in Editor for creating notes and general comments. These comments are saved onto Grid when the configuration is stored."
---
import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import CommentBlock from './img/comment_block_crop.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Comments" label="About Comments" default>

Comment blocks are used to create comments in Editor for creating notes and general comments. These comments are saved onto Grid when the configuration is stored.


<ImageLightbox imageSrc={CommentBlock} style={{width:350+'px'}} citation={'Comment Block in the Grid Editor'}/>


Comments are useful for making notes about functionality within a configuration or naming parts of an Action Chain. But be careful, comments eat up the per Event [characterlimit](/docs/wiki/more/char-limit.md) of Grid configurations very quickly, so use them sparingly!

:::caution
Comments used **in Code Blocks** with the generic `---comment` lua syntax will be deleted on a commit.
:::

</TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

There is no Reference Manual Entry for this article.

</TabItem>
</Tabs>
