---
title: "More about: Receiving MIDI"
slug: midi-rx
tags: [MIDI RX, Workflow]
description: Listen to MIDI messages on MIDI Rx and set values on control elements.
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import encoder_relative_led from './img/encoder_relative_led.png'
import button_led_and_value_setting from './img/button_led_and_value_setting.png'


# Bidirectional MIDI communication

Grid modules by default send out MIDI data with the MIDI action blocks, which are configured on the various events. 

Listening to MIDI messages sent back to Grid happen somewhere else: under System Events, midi rx event. 

In different environments - Digital Audio Workstations, VST Plugins, Host software - usually a MIDI *out*, *transmit* or a similar setting can be found. This setting will send back the changed MIDI data to the device, which has an active mapping with the changed parameter. Sometimes a parameter is not only controlled by Grid, but you change it with your keyboard or mouse. If you want to send back MIDI data to Grid, you have to find and enable this setting.

## Set LED intensity on relative encoders

By default in the LEDs associated with the encoders in absolute mode are using the encoder's value to represent the controlled value. This works well for absolute encoders, but for relative encoders the `self:encoder_value()` read by the LED intensity action will show the relative values transmitted by Grid, and not the controlled parameters value.

The below example shows how to set the LED value on a relative encoder, so it will show the controlled parameters value. We have to make changes on the following events:

1. First control element (element index 0), **Init** event
    - Set the Encoder Mode to relative
    - The encoder intensity will be set by midi rx, which is layer **2**
    - It's also possible to turn off the default dimmed LED brightness by switching the *beutify* off
2. First control element (element index 0), **Encoder** event
    - Remove the LED Intensity block - we set it through midi rx
3. Select System Events, **Midi Rx** event
    - Add the `i` variable to the Locals block, this is used to map the incoming MIDI CC number to the encoder's index
    - Add a [Lookup](/wiki/actions/variables/lookup-variables) action block with the lookup pairs CC and index numbers
        - By default a single module with encoder's top left CC will be 32 and index is 0 
    - Add a [Code Block](/wiki/actions/code/code-block) action block
        - Set the LED intensity with `led_value(i, 2, param2)`
            - `i` is the index of the encoder
            - `2` is the encoder layer of the LED
            - `param2` is the value of the incoming MIDI message
            ```lua
            if i ~= nil then
                led_value(i, 2, param2)
            end
            ``` 

<ImageLightbox imageSrc={encoder_relative_led} citation={"Steps to set LED intensity based on incoming MIDI values on a relative encoder"}/>

## Set value and LED intensity on buttons

Button toggles can be used for solo, mute or other two state functions. This often overridden by mouse or keyboard, so let's make it bidirectional.

1. First control element (element index 0), **Init** event
    - Set the Button Mode to Toggle (code 1)
    - The button LED intensity will be set by midi rx, which is layer **1**
    - Set the LED color to red, that's a common color for mute buttons
2. First control element (element index 0), **Button** event
    - Add a Press/Release block to [filter duplicate presses](/docs/guides/grid/grid-basic/3-button.md) while toggle mode is active
    - Set the MIDI action block to command 176 and an easy to remember CC number, like 60
3. Select System Events, **Midi Rx** event
    - Add the `i` variable to the Locals block, this is used to map the incoming MIDI CC number to the button's index
    - Add a [Lookup](/wiki/actions/variables/lookup-variables) action block with the lookup pairs CC and index numbers
        - In this example the CC is 60, the index we need for the first element is 0
    - Add a [Code Block](/wiki/actions/code/code-block) action block
        - Filter out `nil` values
        - Set the LED intensity with `led_value(i, 1, param2)`
            - `i` is the index of the button
            - `1` is the button layer of the LED
            - `param2` is the value of the incoming MIDI message
        - Set the button value with `element[i]:button_value(param2)`
            - Using [element referencing](/wiki/more/element-referencing), we call `button_value()` on the first control element
            - `i` is the index of the button
            - `param2` is the value of the incoming MIDI message
            ```lua
            if i ~= nil then
                led_value(i, 1, param2)
                element[i]:button_value(param2)
            end
            ``` 

<ImageLightbox imageSrc={button_led_and_value_setting} citation={"Steps to set LED intensity based on incoming MIDI values on a button"}/>
