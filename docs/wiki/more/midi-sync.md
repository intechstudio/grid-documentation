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

# MIDI Sync Messages (Clock)

MIDI Clock messages are used to synchronize the tempo between Grid and other devices. This allows sequencers, drum machines, DAWs, and other MIDI equipment to stay perfectly in time with each other.

## Receiving MIDI Clock Messages

The examples below show how to enable MIDI Clock message handling and how to receive clock messages in a callback.

### Enable Clock Messages from USB

Use this when the MIDI Clock is coming from a USB connection.

```lua
-- Enable handling and forwarding of clock messages received from USB
-- Note: Add this only to the USB-connected Grid module
rx_mode(2, 0x01 | 0x02)
```

### Enable Clock Messages from the Grid Connection

Use this when the MIDI Clock is received through the Grid network.

```lua
-- Enable handling of clock messages received via Grid connection
-- Note: Add this to all modules on the Grid
rx_mode(2, 0x02)
```

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
