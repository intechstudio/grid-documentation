---
slug: keyboard
title: Keyboard
tags: [Action Block, Workflow]
description: "With the use of a Keyboard Block Grid is able to send keystrokes to the host computer as a physical keyboard would."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Keyboard" label="About Keyboard" default>




With the use of a Keyboard Block Grid is able to send keystrokes to the host computer as a physical keyboard would. This is useful for creating keyboard shortcuts (like ctrl+v or pressing Space for transport in Ableton) or just for general productivity purposes (only one keypress for Excel to press F2, then type a function in and then move along to the next row).

The Keyboard Block contains an input field for keys. You can input your desired keystrokes here with the keyboard or by using the dropdown menu below the input field.

The Keyboard Block differentiates between button presses and releases, please define your keyboard messages accordingly.

The Keyboard Block layout can also differentiate between different languange layouts. At the moment En, Hu and De layouts are supported.

There is also a value of input delay, which changes how much time Grid will wait between sending out each keystroke message. You can add delays to your own message or just define the default one which will exist between each message by default. This delay is defined in miliseconds.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


### keyboard_send

  - shortname: gks

  - **How:** `keyboard_send(default delay between keys,ismodifier,keystate 1..2..3,HID key code...)`

    - default delay between keystrokes: integer, 0...255 (time in milliseconds)
    - ismodifier: integer, ranging 0...1 OR 15
    - keystate: integer ranging 0...2 (0: up, 1: down, 2: updown)
    - HID key code: 0...255 

  - **What:** This function sends a series of keystrokes. **This function should not be used over the Macro Config Block, except in edge cases where you know what you're doing.**  <!-- we recommand to use the nice ui  -->The `timeout` parameter governs the timeout in between keypresses in milliseconds, after that in threes there are blocks of `ismodifier,keystate,HID key code` parameters. Each of these 3-part blocks representing a key action: `ismodifier` gives has the values of `0` or `1`  and it differentiates between function keys and normal keys in the HID key code table.  The `keystate`  parameter has the following values: `0` meaning key up or key release, `1` representing key down and `2` representing down-up where the key is pressed down and released instantly. The `HID key code` parameter has the values defined by standard USB HID key code values you can find online.

    If `ismodifier` is given the value `15` and `keystate` is given `0` , then `HID key code` will actually define an extra delay parameter in milliseconds (ranging 0...4095).

  - **Example:** The File Explorer macro (Win key + E) on Windows 10 looks like this when inputted in a Code Block: 

    ```lua
      <?lua --[[@gks]] gks(5,1,1,8,0,1,8,1,0,8,0,0,8) ?>
    ```



  </TabItem>
</Tabs>



