---
slug: button-mode-block
title: Button Mode Block
tags: [Action Block, Element Setting Block, Workflow, BU16, PFB4, EN16, EF44]
---

With a Button Mode Block it's possible to change how many 'steps' a button has to take to move from its minimum value to its maximum.

This has the most basic use-case of creating switch-type buttons, meaning one click of a button moves the value up but it stays there on a release, and only when the cycle is correct does it fall back down again to 0.

This Block has a field with a dropdown menu. The options are as follows:
- 0 momentary: the default button behavior, two values, each press switches to max value, each release switches to minimum value 
- 1 toggle: two values, each press switches between the two values
- 2 3-way switch: three values, each press switches up to the next value, last value switches back to first
- and so on..


:::tip Good practice
It's useful to put Mode-type Blocks under the Init Event of the given Control Element. This way the Control Element will behave exactly as you'd want after booting up and this will also save you some characters on the Control Element Event itself for more important stuff.
:::