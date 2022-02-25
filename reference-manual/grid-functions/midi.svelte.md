---
title:      MIDI
slug:       midi
layout:     reference_manual    
category:   reference-manual
description: The midi_send() function is used to send MIDI data.
---

### midi_send
    - shortname: gms
    - **How:** `midi_send(channel,command,parameter1,parameter2)`
      - channel: integer, ranging 0...15
      - command: integer, ranging 128...255
      - parameter1: integer, ranging 0...127
      - parameter2 integer, ranging 0...127
    - **What:** This function sends a MIDI command when called. Channel specifies the MIDI channel the command is sent on and parameters 1 (value ranges from 0 to 127) and 2 (value ranges from 0 to 127).
    - **Example:** 