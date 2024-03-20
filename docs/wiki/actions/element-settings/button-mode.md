---
slug: button-mode
title: Button Mode
tags: [Action Block, Element Settings, Workflow, BU16, PFB4, EN16, EF44]
description: "With a Button Mode Block it's possible to change how many steps a button has to take to move from its minimum value to its maximum."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import buttonmode from './img/button_mode.png'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About Button Mode" label="About Button Mode" default>

## Description

With a Button Mode Block it's possible to change how many 'steps' a button has to take to move from its minimum value to its maximum.

This has the most basic use-case of creating switch-type buttons, meaning the first click of a button moves the value up but it stays there on a release, and only when the cycle is complete does it fall back down again to 0.

<ImageLightbox imageSrc={buttonmode} citation={'The dropdown menu of the Button Mode Action'}/>

This Block has a field with a dropdown menu. The options are as follows:
- 0 momentary: the default button behavior, two values, each press switches to max value, each release switches to minimum value 
- 1 toggle: two values, each press switches between the two values
- 2 3-way switch: three values, each press switches up to the next value, last value switches back to first
- and so on..


:::tip Good practice
It's useful to put Mode-type Blocks under the Init Event of the given Control Element. This way the Control Element will behave exactly as you'd want after booting up and this will also save you some characters on the Control Element Event itself for more important stuff.
:::
  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

- shortname: bmo
- **How:** `self:button_mode()` or `self:button_mode(mode)`
    - mode: integer, ranging 0...127
- **What:** This function returns the value of the button mode. This is `0` by default. Button mode means how many 'steps' the button has between its maximum and minimum value. For example when the function is used to set this value like this: `self:button_mode(mode)` the resolution parameter will govern the number of steps.
- **Example:** The code `self:button_mode(2)` will make the button a 3-step switch. The three states will be `0` , `63` and `127`.

</TabItem>
</Tabs>

<!---
With a Button Mode Block it's possible to change how many 'steps' a button has to take to move from its minimum value to its maximum.

This has the most basic use-case of creating switch-type buttons, meaning the first click of a button moves the value up but it stays there on a release, and only when the cycle is complete does it fall back down again to 0.

This Block has a field with a dropdown menu. The options are as follows:
- 0 momentary: the default button behavior, two values, each press switches to max value, each release switches to minimum value 
- 1 toggle: two values, each press switches between the two values
- 2 3-way switch: three values, each press switches up to the next value, last value switches back to first
- and so on..


:::tip Good practice
It's useful to put Mode-type Blocks under the Init Event of the given Control Element. This way the Control Element will behave exactly as you'd want after booting up and this will also save you some characters on the Control Element Event itself for more important stuff.
:::
--->