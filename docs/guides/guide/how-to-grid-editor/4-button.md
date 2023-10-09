---
title: Button (BU16, EN16, EF44, PBF4)
description: Change the button to toggle mode and learn about button states.
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import button_mode_init from './img/button_mode_init.png'
import btn_momentary from './img/btn_momentary.png'
import btn_toggle from './img/btn_toggle.png'
import min_max_reflected from './img/min_max_reflected.png'
import btn_press_release from './img/btn_press_release.png'
import btn_long_press from './img/btn_long_press.png'

The button events can be found on most Grid controllers. Buttons have the following modes:
- Momentary (default), sends a value 127 on press, and value 0 on release
- Toggle, sends a value 127 on press, and value 0 on press again
- X-step toggle, sends value based on the step number on each press, 3-step will send 0, 42, 84, 126

You can check out the button [wiki article here](/wiki/actions/element-settings/button-mode).

Let's add an **Button Mode** action block to the *init* event of the button control element. We could put it onto the *button* event as well, but pay attention to the order of execution on an action chain. 
:::note 
The button event, and button presses are applicable for button control elements and encoders as well. When we mention button interaction, the control element can be either a button or an encoder.
:::
<ImageLightbox imageSrc={button_mode_init} citation={"Add the button mode "} styling={'w-4/5 object-contain'}/>

## Button state vs. button value
Selecting different steps in the **Button Mode** action will change the calculated steps which can be read from the `self:button_value()`.

The `button_value()` will always represent the current *value* of the button. The *pressed* and *released* states can be checked with the `button_state()` function.

## Momentary mode

In momentary mode - Button Mode set to 0 -, when you *press* the element down, the **button value** will be 127. When you *release* the button, the **button value** will change to 0.

<ImageLightbox imageSrc={btn_momentary} citation={"Momentary button setting is 0."} styling={'w-4/5 max-h-60 object-contain'}/>

## Toggle mode

While using toggle mode - button mode set to 1 -, when you *press* the element down once, the **button value** will be 127. Upon you *release* the button, the button value will stay 127. When you *press* the button again, the **button value** will change to 0.

<ImageLightbox imageSrc={btn_toggle} citation={"Toggle button setting is 1."} styling={'w-4/5 max-h-60 object-contain'}/>

## Button minimum and maximum

In the above momentary and toggle examples, button values were changed between 0 and 127.

When the button minimum and maximum values are changed, the `button_value()` will reflect those new ranges.

If you want to set button minimum and maximum values, you can do so by adding a [**Code Block**](/wiki/actions/code/code-block) action to the *init* event of the button control element.

```lua
self:button_min(10)
self:button_max(100)
```

:::tip Set velocity
Setting button maximum is a great way to change the **velocity** of MIDI interactions. You can set the button maximum to 100 and using the 144 MIDI Command (Note-On messages), messages will be identified as velocity 100 messages.
:::
<ImageLightbox imageSrc={min_max_reflected} citation={"In the different button modes, the min max values are reflected"} styling={'w-4/5 object-contain'}/>

## Button presses are sent out twice

When a button is in momentary mode, this behaviour doesn't struck the user, but it's good to keep in mind that button events are running both on the *press* and *release* of the button.

This "double trigger" might not be what you are lookin for, specially if you are using the buttons to send out singular messages.

To avoid this, you can use the `button_state()` function to check if the button is *pressed* or *released*.

An other way is to use the button special **Press/Release** action block.

<ImageLightbox imageSrc={btn_press_release} citation={"1. You can define the press release check in a code block, utilising the button_state() function<br/>2. The other quick option is to use the special Press/Release action block"} styling={'w-4/5 object-contain'}/>

## Long press 

You can achieve a long press button behaviour by checking the button state and the elapsed time since the button has been used. For this, we utilize the `button_state()` and `button_elapsed_time()` functions with some condition logic, to trigger the **timer** event on the button. When the button is not held down for the specified time, the timer is stopped.

In the following long press configuration example, when the button is held down for more than 1000 miliseconds, the button's color will change to green, and the LED intensity will be set to 127.

The following steps are happening in the configuration on the *button* event:
1. When the button is pressed down and state changes to 127
    1. A **Timer Start** action block starts
    2. Normal buttton color is set (which is otherwise overwritten for a short time on the timer event)
    3. The LED intensity is changed with the button press
2. The *elif* branch checks if the button is released and if it's been pressed for less than 1000 miliseconds
    1. When the button has been pressed for less than 1000 miliseconds, the **Timer Stop** action block stops the timer
    2. The LED intensity is changed with the button release

The *timer* event runs when the press is longer than 1000 miliseconds: 
1. The event sets green color for the LED
2. LED intensity is also set to 127 to make the result visible

<ImageLightbox imageSrc={btn_long_press} citation={"By checking the button state and the elapsed time since the button has been used, you can trigger long press functions with the timer"} styling={'w-4/5 object-contain'}/>

## Next steps

After the buttons and encoders, let's check out the potmeter configurations.

*Coming soon*