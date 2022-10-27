---
slug: potmeter-mode-block
title: Potentiometer Mode Block
tags: [Action Block, Element Setting Block, Workflow, PO16, PBF4]
---

This Potmeter Mode Block is able to make a potentiometer more sensitive by increasing the value range it's working with or by chaning the bit depth of the values the analog signal is translated to.

You have two fields you can change, one of them is the max value of the potentiometer which will be the value for the potentiometer when turned all the way to the right or when the fader is moved all the way towards the north of the module. For high res MIDI, depending on the bit depth or the values you'd need we recommend increasing this above the default 127.

The second field is the bit depth, which translates to how sensitive the potentiometer is when sampling the voltage values from the potentiometer itself. For use with high res MIDI commands like a modwheel, we recommend setting it to 10bit as it is enough for high resolution signals, but compared to 14bit it doesn't get jittery at all. 


:::tip Good practice
It's useful to put Mode-type Blocks under the Init Event of the given Control Element. This way the Control Element will behave exactly as you'd want after booting up and this will also save you some characters on the Control Element Event itself for more important stuff.
:::