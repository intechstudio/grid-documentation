---
title: MIDI
slug: midi
layout: reference_manual
category: reference-manual
description: How to set up MIDI messages sent from Grid.
---

### midi send

- shortname: gms
- **How:** `midi_send(channel,command,parameter1,parameter2)`
  - channel: integer, ranging 0...15
  - command: integer, ranging 128...255
  - parameter1: integer, ranging 0...127
  - parameter2 integer, ranging 0...127
- **What:** This function sends a MIDI command when called. Channel specifies the MIDI channel the command is sent on and parameters 1 (value ranges from 0 to 127) and 2 (value ranges from 0 to 127).
- **Example:**

### midi sysex send

- shortname: gmss
- **How:** `midi_sysex_send(channel,command,parameter1,parameter2)`
  - channel: integer, ranging 0...15
  - command: integer, ranging 128...255
  - parameter1: integer, ranging 0...127
  - parameter2 integer, ranging 0...127
- **What:** This function sends a MIDI sysex message when called.
- **Example:**

### midirx enabled

- shortname: mre
- ## **How:** `midirx_enabled(val)`
- **What:** This function enables or disables Grid's MIDI RX functionality. It is enabled by default, so you don't need to adjust this to use MIDI RX
- **Example: **`midirx_enabled(1)` disabled, `midirx_enabled(0)` - enabled

### midirx sync

- shortname: mrs
- ## **How:** `midirx_sync(val)`
- **What:** This function enables or disables whether Grid sends out a MIDI Clock sync signal to the host device.
  This function is overriden, when MIDI RX is disabled as a whole.
- **Example:** `midirx_sync(1)` - disabled, `midirx_sync(0)` - enabled

### lookup

- shortname: glut
- ## **How:** `lookup(parameter1,,,,)`
- **What:** This function recieves and assigns recieved MIDI values from a computer into variables within Grid memory.
- **Example:**
