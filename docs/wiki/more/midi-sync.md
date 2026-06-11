---
title: "MIDI Sync"
slug: "midi-sync"
tags: [MIDI Sync, Workflow]
description: Listen to incoming MIDI Sync messages.
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import bu from './img/bu_midirx.png'
import en from './img/en_midirx.png'
import pc from './img/pc_example.png'

# MIDI Sync Messages (RTM)

MIDI RTM messages are used to synchronize the tempo between Grid and other devices. This allows sequencers, drum machines, DAWs, and other MIDI equipment to stay perfectly in time with each other.

The examples below show how to enable MIDI Clock message handling and how to receive clock messages in a callback.

## Enable Clock Messages

Sync messages are disabled by default. You can enable them using the [RX Mode block](/wiki/actions/function/rx-mode). Add the block to the System Element Setup and enable **MIDI RTM**.


## Receiving Clock Messages

When a MIDI Clock message is received, the callback below is executed.

```lua
-- Callback for received clock messages
self.rtmrx_cb = function(self, header, rtm_byte)
  print("RTM RX: "..rtm_byte)
end
```

## Understanding the Callback

The `rtm_byte` value contains the received MIDI real-time message.

Common MIDI Sync messages:

| Message  | Decimal Value | Description                                            |
| -------- | --------------| ------------------------------------------------------ |
| Clock    | 248           | Sent 24 times per quarter note to keep devices in sync |
| Start    | 250           | Starts playback from the beginning                     |
| Continue | 251           | Continues playback from the current position           |
| Stop     | 252           | Stops playback                                         |

### Example

If a DAW sends MIDI Clock while playing, the callback will continuously receive:

```text
RTM RX: 248
RTM RX: 248
RTM RX: 248
...
```

When playback starts:

```text
RTM RX: 250
```

When playback stops:

```text
RTM RX: 252
```

This allows your script to react to transport controls and tempo synchronization events.
