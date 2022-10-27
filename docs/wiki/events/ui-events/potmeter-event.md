---
slug: potmeter-event
title: Potentiometer Event
tags: [Event, UI Event, Control Element, PO16, PBF4, EF44]
---

The Potmeter Event is a UI Event that's triggered when a potentiometer is turned or a slide potentiometer is moved. Each potentiometer on the module has one of these Events, and by default they control values which determine the LED light intensities and values used for MIDI messages.

Potentiometers send continuous, linear, analog signal to Grid as they are turned. These then get translated into values and stored in memory. This way Grid always associates the so-called 'state' of a potentiometer (how much is it turned) with a discrete value.

You can set how this value is defined by using a Potentiometer Mode Action Block, you can learn more about these **here**, but generally Mode-type Action Blocks change how user interaction turns into values in Grid.