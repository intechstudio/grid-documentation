---
slug: encoder-event
title: Encoder Event
tags: [Event, UI Event, Control Element, EN16, EF44]
---

The Encoder Event is a UI Event, which means it triggers on user interaction. Specifically when the user turns the encoder, each click on a 'clicky' encoder equals to one trigger of the Encoder Event.

Encoder Events are useful in many ways, since Encoders are designed to be infinite in nature, therefore they can work in a relative way, with adding to or subtracting from a value. Or they can take the same role as Potentiometers as well.

Encoders have a Velocity setting to them accessible in their [Encoder Mode Block](/docs/wiki/actions/element-settings/encoder-mode.md). This setting allows for introducing a scaling element when the Encoders are quickly turned (a lot of Encoder Events happening in succession). This makes the Encoders skip values when turned rapidly, so that the user can introduce big jumps in values when needed.