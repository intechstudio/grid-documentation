---
sidebar_position: 3
title: "Knot: Starter's guide"
description: For setting up Knot with Grid and other devices
---

### Setting up Knot with Grid

Using Knot as a USB MIDI Host for connecting Grid with you hardware MIDI devices is straightforward. You'll need the following things to get started:
- **1x Knot** and its respective USB-C cable for power or a DC power adapter
- **1x Grid module** of your choice (-or more of course!) and its respective USB-C cable for power and data
- **1x MIDI cable**, for connecting Knot with the MIDI hardware device (either a 3.5mm TRS cable or a 5-pin DIN MIDI cable with a TRS adapter)

To connect the devices together:
- Knot plugged into a power source either through the "USB-C" port or the "DC IN" port
- Grid plugged into Knot through the "USB HOST" port
- the MIDI hardware device plugged into the "MIDI OUT" of Knot with a MIDI cable

To check if everything's working as it should, look out for the LEDs on the Knot frontplate. When Knot first receives ample power the 3 LEDs will light up in purple for a second. After boot, while a USB device is connected it should be green with the occasional white blip indicating when a message is being sent or received.

<!--- Kéne ide egy example konfiguráció arról hogy hogyan is néz ki egy Grides setup, lehetőleg Visual Aid
Valamint későbbiekhez egy example setup a MIDI eszköz + Knot kombóhoz
És a legizgalmasabb talán hogy a hangszerhez kapcsolás rész hogy néz ki a dolognak

--->


### Setting up Knot with other USB MIDI devices with Knot as the Host

Using Knot as a USB MIDI Host for connecting Grid with you hardware MIDI devices is straightforward. You'll need the following things to get started:
- **1x Knot** and its respective USB-C cable for power or a DC power adapter
- **1x USB MIDI Device of your choice** 
- **1x MIDI cable**, for connecting Knot with the MIDI hardware device (either a 3.5mm TRS cable or a 5-pin DIN MIDI cable with a TRS adapter)

To connect the devices together:
- Knot plugged into a power source either through the "USB-C" port or the "DC IN" port
- the MIDI device plugged into Knot through the "USB HOST" port
- the MIDI hardware device plugged into the "MIDI OUT" of Knot with a MIDI cable

To check if everything's working as it should, look out for the LEDs on the Knot frontplate. When Knot first receives ample power the 3 LEDs will light up in purple for a second. After boot, while a USB device is connected it should be green with the occasional white blip indicating when a message is being sent or received.

### Setting up Knot with an instrument for MIDI control - Example

*You can see our list of tested devices on [the Knot GitHub page here.](https://github.com/intechstudio/knot)*

For example a synth will usually have one MIDI channel it receives MIDI CC or Note messages on. You can usually set this MIDI channel in the synth's menu somewhere.

:::tip As a rule thumb
Devices that *can* receive MIDI messages, usually do so by **default on MIDI channel 1** or on **all of them** simultaneously.
:::

Set this MIDI channel to the same one set in your Hosted Device. In the case of Grid, check the [MIDI Action Blocks](/docs/wiki/actions/midi/midi.md) in Grid Editor and configure them to the same MIDI channel set on your instrument.

#### TRS MIDI output

The output through the USB Host port will be mirrored (as far as MIDI is concerned) on the TRS MIDI output connector of Knot.

Meaning if your MIDI device or Grid sends out a MIDI message to Knot, Knot will forward it to the MIDI OUT port on the back.

If the MIDI OUT port is connected with the correct cable to the instrument of your choice, it will receive the messages accordingly.

<!---
#### TRS MIDI input
--->

#### Knot connectivity troubleshooting

When using Knot as a host device the biggest issue is when it seems that our messages are not received on our instrument. Here are some things to check when this is the case:

- When receiving a message from either USB Host or MIDI IN, the LEDs on the front of the device will flash in white color. If you can see no flashes, then Knot is receiving the messages and the fault should probably lie with the device sending the message, not with Knot.


- If you can see the lights flash, but there is no message received on the instrument side, it means that the message leaves Knot and it's lost somewhere between the TRS cable and the instrument itself.
The two things to check this time are the MIDI channel and if Knot is set to the correct type of TRS MIDI setting.

:::tip
Try sending the messages to your instrument and then use the switch on the front of Knot to set the polarity of the TRS MIDI type and see if that makes a difference.
:::