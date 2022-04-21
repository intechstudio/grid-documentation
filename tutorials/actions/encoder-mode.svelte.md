---
layout:   reference_manual
title:    Encoder Mode
slug:     grid-editor
category: tutorials
---

## Change relative encoding

By default encoders are set to absolute mode. In this mode, encoders act like potentiometers, with a MIDI value range 0-127.

With the help of **Encoder Mode** action, you can change the encoding to relative.

There are two modes implemented at the moment, which should cover all DAWs.

 - BinOffset
 - 2's Comp

Check both, and see which one works best with your DAW or software.

## Change encoder velocity

Encoders have a velocity variable built in, which can be changed with the Encoder Mode action.

By default the velocity value is 100. In this setting, on a quick flick, you should be able to go from 0 to 127 in a single interaction.

You can turn off this behaviour completely by changing the encoder velocity to 0.

When using velocity with relative encoding modes or with higher encoder resolutions (for example encoder range with 0-2048 values), velocity values like 2-3-4 or 5 can be the sweet spot.

![](/images/docs/encoder_mode.gif)