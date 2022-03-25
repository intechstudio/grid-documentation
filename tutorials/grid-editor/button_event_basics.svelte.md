---
layout:   reference_manual
title:    Button Event Basics
slug:     button-event-basics
category: tutorials
description: Button configuration, toggle-, switch-, mode, state configuration.
---

## Overview

The *button* event can be found on all control elements, which have push functionality: both buttons and encoders. The button event by default is in momentary mode and in this article we will show you the basics such as setting a button to toggle, when it comes to this event in the Grid system.

## Button value, mode and state

When you open up the default *Local Variables* action block under the *button* event, you will notice that the `val` variable is assigned to `self:button_value()`. This returns the value of the button. By default, this value is `127` when the button is pressed down and `0` when released, this is what's called momentary Button Mode.

Button Mode defines how the button value behaves based on the physical interaction.

![](https://intech.studio/_cms/2021-07-26/default_local_var_value.png)

The Button Mode can be changed with the `self:button_resolution()` function, so the `self:button_value()` function returns different button values on interaction. The `self:button_resolution()` function has a simple user interface: add a *Button Settings* action block as the **first** action in the actions panel.

![](https://intech.studio/_cms/2021-07-26/add_button_settings.png)

You can use the simple dropdown menu when clicking in the text input area, or enter an integer, to set the specific button mode you need. The types of modes are as follows:

- `0` or Momentary, meaning `self:button_value()` will change on every press/release cycle
- `1` or Toggle, meaning `self:button_value()` will change on every second press/release cycle between 0 and 127
- `2-127` or n-Step Switches, meaning `self:button_value()` will change on every nth press/release cycle 

![](https://intech.studio/_cms/2021-07-26/change_button_mode.png)

> There are a lot of functions available in programming Grid modules. Our goal is to make the programming aspect more accessible through Action Blocks. Such simplification is having *Button Settings* instead of calling `self:button_resolution()` with a parameter in a *Code Block* action.

The `self:button_state()` function will return the *state* of the control element. This is either "pressed down" `0` OR "released" `127`. This behavior is **unaffected** by the *Button Settings* action OR the selected Button Mode.

## Wrapping up

1. The `self:button_value()` function's returned value is affected by the Button Mode set by the *Button Settings* action. Default *Local Variables* action will have this function assigned to a variable.
2. To change from momentary to toggle, 2-step or other step range, use the Button Settings action block, as the first action in the actions panel under the button or init event.
3. The `self:button_state()` function returns if the button is pressed (0) or released (127). This is not effected by Button Settings.

![](https://intech.studio/_cms/2021-07-26/set_to_toggle.gif)

## MIDI and button values

The most important concept to keep in mind when working with button states, that *note on* (command 144) and *note off* (command 128) MIDI messages won't work as expected with different button modes. Originally the note on and note off MIDI commands represent a keyboard key, where a key is whether pressed or released. Each software will try to do something about the "wrong" or "stuck" notes. Different DAW's will try to map MIDI note on and note off messages differently to user interface elements, and this can have unexpected results too.

To utilize the various step options of the *Button Settings* action, it's best to use **Control Change **messages when working with MIDI.

![](https://intech.studio/_cms/2021-07-26/set_to_control_change.png)

## Split press and release

Before Grid Editor v1.2+ the button event was split into down (press) and up (release) events. From Grid Editor v1.2+ these events are merged, so for special use cases, you may need a set of *Condition* actions to send different MIDI or Macro messages to your connected host device.

![](https://intech.studio/_cms/2021-07-26/if_condition.png)

You can set a condition to check on the state or value of the button to send different messages. The example below shows a simple check on the button state, and sends different MIDI control value under each case, whether the button state is pressed or released.

![](https://intech.studio/_cms/2021-07-26/state_example.png)

But to keep this functionality in a Button Mode other than momentary, will require a different Action Chain setup. So let's try setting up a toggle mode button to use as a Mute Channel-button in our DAW. For this we need to send a MIDI CC when the toggle is toggled on, and MIDI CC with a different value when it is toggled off (a DAW usually expects). We also want the LED to tell us whether the toggle is on or not. So let's see...

An important thing to keep in mind, that independent form Button Mode, the **Actions** under the Button Event will still **happen on every press and release**. If we want the Action Chain defined under the Button Event only to happen once, either on `self:button_value()` 127 or 0 we ought to use the Button State function in combination with Button Value. Here's a quick visual example defined below: 

![](/images/docs/toggle_behav.png)

This kind of setup for a toggle-mode button allows for a channel mute usage in a DAW, since the MIDI control change messages will only be sent on presses, and the LED will only be max. brightness on every second button press.

## Using print for debug

As in most configuration scenarios, you can use the *Code Block* action with a `print()` function to see different button modes in action. Below when using the 3-step mode, see that the button value range is split in range of 0-42-84-126. In order to see changes, press the button being configured.

> In the example below, the Code Block action is moved below the Button Settings and Local Variables action blocks. The value could be different in the `print(val)` function call if the order of actions is different!

![](https://intech.studio/_cms/2021-07-26/debug.gif)