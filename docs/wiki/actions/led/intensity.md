---
slug: led-intensity
title: Intensity
tags: [Action Block, LED Block, Feedback, Workflow]
---

The Intensity Block changes the light intensity the LED of your choice when this action runs.

Intensity Blocks by default are found on the Init Event of each Control Element. This is to give a default light intensity to each module on startup. If you just want to change how your module looks, we advise to change things here.

The Block has a couple of fields you can configure:
- LED number: which LED should the Block affect
- layer: either 1 or 2, the final color is based on the mixed colors of the two layers
- intensity value: how strong should the LED light intensity be

Both the LED number and the intensity value is by default bound to the Control Element number and the Control Element Value through the local variables [num and val](../variables/local-variables.md). This way is to support the out of the box experience, but you can change this however you'd like.
