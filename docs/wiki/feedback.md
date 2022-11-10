---
slug: feedback
title: Creating Visual Feedback
tags: [Logic, Workflow, Feedback, LED]
---

When controlling a DAW or a MIDI device, they usually have their own UI where you can see or otherwise percieve the changes you're making to parameters through MIDI control.

These UI elements can often mimic the shape of knobs, sliders and usually show exact values for the parameter being changed.

On Grid, there is no such advanced UI as a screen, where virtual values or animations representing values could be presented. Instead, Grid uses dedicated [LEDs](/category/led-actions) per [Control Element](/category/ui-events) to represent **internal** values of Grid variables.

This design uses the values of the control elements by default to determine how strong the [LED light intensity](/docs/wiki/actions/led/intensity.md) should be when the control element is interacted with. Their behavior is configured in the [local blocks](/docs/wiki/actions/variables/local-variables.md) of the control element, so it can be easily customized here as well by just adjusting the default configuration of the module.

Using the same system it's possible to create visual feedback using multiple colors, changing animation and many combination of these. For futher reading on how to create configurations using interesting visual feedback, see: