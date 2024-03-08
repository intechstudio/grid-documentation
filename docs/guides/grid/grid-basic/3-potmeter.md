---
title: "2.5: Configuring Potentiometers and Faders"
description: Change the common MIDI settings like commands and CCs. Set minimum and maximum range for your controls. Define resolution for 14-bit NRPN MIDI messages. Get into SySex commands and more.
slug: editor-103-potmeter
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import pot101_pmo from './img/pot101_pmo.png'
import pot101_pmin_pmax from './img/pot101_pmin_pmax.png'
import pot101_cc_change from './img/pot101_cc_change.gif'
import pot101_14bit_midi from './img/pot101_14bit_midi.png'

*This article details most settings and adjustments to the default Potentiometer and Fader (aka slide potentiometer) behavior on Grid modules.*

---

## Potmeter modes explained

The potmeter Event can be found on Grid controllers, where either potentiometers or faders can be found. The potmeter modes are essentially bit-depth setting of the analog value reads from the hardware. The modes are:
- **7-bit** (default), which has the value `7`, *this is the standard MIDI range, 0-127 (2^7)*
- **8-bit**, value `8` is an extended range, 0-255 (2^8), often used in lightning and color controls
- **9 and 10-bit**, value `9` or `10` is an even higher range, best used in combination with 14-bit NRPN MIDI configuration. 9-bit is 0-512 (2^9), 10-bit is 0-1024 (2^10)
- **11-bit and over**, value `11` or higher is a very high resolution and it is not recommended to use these settings without additional noise filtering. We suggest to give it a try, but be aware of the noise and jitter that can come with it.

<ImageLightbox imageSrc={pot101_pmo} citation={"Potmeter Mode action block on init event"}/>

## Potmeter minimum and maximum

By default, the potmeter minimum value is 0, and the maximum value is 127. These values can be changed with the `potmeter_min()` and `potmeter_max()` functions.

When the potmeter minimum and maximum values are changed, the `potmeter_value()` will reflect those new ranges.

If you want to set potmeter minimum and maximum values, you can do so by adding a [**Code Block**](/wiki/actions/code/code-block) Action to the *init* Event of the button control element.

```lua
self:potmeter_min(10)
self:potmeter_max(100)
```

The [**Potmeter Mode**](wiki/actions/element-settings/potmeter-mode) Action block - which was made to help 14-bit MIDI setup - also has the option to set the potmeter maximum from the drop-down to either 127 for standard and 16383 for high resolution MIDI. In the Potmeter Mode action block the maximum can be set to a different maximum as well.

<ImageLightbox imageSrc={pot101_pmin_pmax} citation={"Potmeter minimum and maximum setting in Code Block"} styling={'w-4/5 max-h-60 object-contain'}/>


:::tip Set CV to max 110
Different hardware instruments and DAWs use logarithmic adjustments to MIDI input values. Setting volume and gain staging to 0 db is often around control value 110. If you set the `potmeter_max()` to 110, you can be sure that the control value will be 110 when the potmeter is turned all the way to the right, or if it's a slider all the way to the top. This can help avoid clipping and get more control over your instruments.
:::

## Set CC 1 Modulation, CC 7 Volume, CC 11 Expression

Potentiometers, specially the faders are often used to control the dynamics, volume and expression of instruments in audio libraries and VSTs. On Grid controllers, the default CC MIDI settings are [calculated dynamically](/wiki/more/dynamically-assigned-MIDI-ch-and-cc), but it's easy to overwrite them.

1. Select a control element you want to change
2. Select the potmeter event
3. Open up the Locals action block, change the cc value to 1, 7 or 11
4. Commit the changes
5. Repeat above steps, then Store your configuration

<ImageLightbox imageSrc={pot101_cc_change} citation={"Potmeter minimum and maximum setting in Code Block"} style={{maxHeight:400+'px'}}/>

:::note Variables in Locals action block are used in the MIDI action block
By default, the variables created in the Locals action block are used in the MIDI action block. This way you can easily change the MIDI settings of your control elements, by just changing the values in the Locals. But you can also open up the MIDI action block and type in your own settings there.
:::

## 14-bit high resolution MIDI

Let's add an **Potmeter Mode** Action block to the *init* event of the potentiometer control element. We could put it onto the *potmeter* event as well, but pay attention to the order of execution on an Action chain. 

1. Change the bit depth to 10, and set the maximum to 16383. This way you can use the potentiometer to send 14-bit MIDI messages.
2. Navigate to the *potmeter* event and change the MIDI action block from "MIDI" to "14-bit MIDI".
3. Open up the MIDI monitor and see your potentiometer sending out 14-bit MIDI messages.

<ImageLightbox imageSrc={pot101_14bit_midi} citation={"Set the Potmeter Mode on init even and change the MIDI action block on the potmeter event to 14-bit"}/>


## Next steps

There is a side utility button on Grid controllers called utility button. This is the +1 control element on Grid, where system events are also configured. Tutorial coming soon!