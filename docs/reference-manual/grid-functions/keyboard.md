---
title:      Keyboard Functions
slug:       keyboard-functions
layout:     reference_manual  
category:   reference-manual
description: How to send keyboard messages in a Code Block.
---

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



### mouse button send

- shortname: gmbs
- **How:** `mouse_button_send(state, button)`
  - state: integer, ranging 0...1
  - button: integer, ranging 1=leftclick 2=rightclick 4=middle click
- **What:** This function sends a mouse click of the defined button to the host.
- **Example:** 

### mouse move send

- shortname: gmms
- **How:** `mouse_move_send(position, axis)`
  - position: integer
  - axis: integer, ranging 1...3 where 3=mousewheel
- **What:** This function sends a mouse move message to the host. Where the movement equals to the position parameter in screensspace.
- **Example:** 

