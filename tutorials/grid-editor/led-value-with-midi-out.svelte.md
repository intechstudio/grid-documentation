---
layout:   reference_manual
title:    LED Intensity Change On MIDI RX
slug:     change-led-intensity-with-midi-out
category: tutorials
description: How to control values on Grid from Ableton.
---

## LED Value controlled by Ableton

- Map control elements 12 and 13 in Ableton on two volume fader, by default when EN16 is plugged in it will be assigned to CC44 and CC45
  ![ableton midi map](https://intech.studio/_cms/2021-06-30/ableton_map.png)
- Remove LED Value actions from the encoder event on control element 12 and 13
  ![remove led value](https://intech.studio/_cms/2021-06-30/remove_led_val.png)
- Select the System Events tab and the midi rx event
  ![system events - midi rx](https://intech.studio/_cms/2021-06-30/ui_system_midi_rx.png)
- Add a new variable to Local Variable with name *lednum*
  ![lednum variable](https://intech.studio/_cms/2021-06-30/lednum_var.png)
- Add Lookup <span class="font-bold text-yellow-400">below</span> the Local Variables action
  `<?lua --[[@glut]] lednum=glut(param1,44,12,45,13) ?>`
  ![add lookup in prompt](https://intech.studio/_cms/2021-06-30/add_lookup.png)
  - This Lookup action has a source, in this case the param1, which contains MIDI OUT param1.
  - Input 44 will be mapped to control element 12
  - Input 45 will be mapped to control element 13
  - Assign destination to the lednum variable, for later usage.
  ![lookup configuration](https://intech.studio/_cms/2021-06-30/lookup_2.png)
- Add a LED Value action
  - Set the LED Number input to lednum, 
  - Layer to 2 (encoder turn),
  - Set the Intensity to param2 (this is MIDI OUT param2)
  ![led value](https://intech.studio/_cms/2021-06-30/led_value.png)

The encoder event by default triggers the LED Value action on the mapped control element. 
In default configuration, this is why you see LED intensity change above the turned encoder. 
We now mapped the intensity to see changes transmitted by Ableton instead of the encoder itself.