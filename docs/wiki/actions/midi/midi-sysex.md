---
slug: midi-sysex-block
title: MIDI SysEx Block
subtitle: System Exclusive MIDI messages
tags: [Action Block, MIDI]
---

System Exclusive MIDI message Block or SysEX Block for short, change your MIDI Blocks into SysEx mode, where you can both enter SysEx values based on an instrument's specifications or use variables calculated in the Action Chain.

In example `0xF0, 0x41, 0x10, val, 0xF7` val is a variable declared locally.

![sysex](../../img/midi_action_sysex.png)