---
layout:   reference_manual
title:    Change CC MIDI messages
slug:     change-cc
category: tutorials
---

## Overview

One of the most prominent use case for composers when it comes to MIDI control, recording automation for Volume (CC 7), Expression (CC 11) and Modulation (CC 1).
Grid as an expandable control surface has many configuration options by design. This can be overwhelming at first, specially if you only have 1 module. 
In this guide, I will walk trough setting custom CC messages on a control element, as well as show couple options in configuration.

## Set custom CC message

1.) When it comes to sending custom MIDI data to the host, you have to select the appropiate *event* first. 
In this example, you will need the **potmeter** event: a fader aka slide potmeter's event is trigged every time you interact with the control element.
![ev](https://intech.studio/_cms/2021-07-13/select_event.gif)

The *init* event on the other hand is only triggered when a page is initialized.
Under the potmeter event you can see the **self:potmeter_value()** called under the Local Variables action. 
Every time you interact with the fader this function runs, so the actions using the **val** variable will have their values refreshed.
![local variables](https://intech.studio/_cms/2021-07-13/local_value.png)

2.) On the potmeter event open up the MIDI action. From the Param 1 input field, select the needed CC type or just type in the desired CC as numbers.
> There are no more separate MIDI Dynamic and MIDI Static actions from Grid Editor v1.2+, the dynamic behaviour used with multiple modules is managed by the variable declarations in the Local Variables action.

![change cc](https://intech.studio/_cms/2021-07-13/change_cc.gif)

3.) Select a different control element and follow the above steps for further configuration.
