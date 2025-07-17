---
sidebar_position: 6
title: "2.1: Potmeters and Faders"
description: Change the common MIDI settings like commands and CCs. Set minimum and maximum range for your controls. Define resolution for 14-bit NRPN MIDI messages. Get into SySex commands and more.
slug: editor-121-potmeter
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import pot101_pmo from './img/pot101_pmo.png'
import pot101_pmin_pmax from './img/pot101_pmin_pmax.png'
import pot101_cc_change from './img/pot101_cc_change.gif'
import pot101_14bit_midi from './img/pot101_14bit_midi.png'
import centering from './img/centering.png'
import calibrating from './img/calib.png'

_This article details most settings and adjustments to the default Potentiometer and Fader (i. e. slide potentiometer) behavior on Grid modules._

---

## Potmeter Modes explained

The Potmeter Event can be found on Grid controllers equipped with either potentiometers or faders.  
The Mode block allows for the bit-depth setting of the analogue value reads from the hardware, it's settings are as follows:

- **7-bit** (default), which has the value `7`, this is the standard MIDI range, 0-127 (2^7);
- **8-bit**, value `8` is an extended range, 0-255 (2^8), often used in lightning and color controls;
- **9 and 10-bit**, value `9` or `10` is an even higher range, best used in combination with 14-bit NRPN MIDI configuration. 9-bit is 0-512 (2^9), 10-bit is 0-1024 (2^10);
- **11-bit and over**, value `11` or higher is a very high resolution and it is not recommended to use these settings without additional noise filtering as it might introduce jitter.

<ImageLightbox imageSrc={pot101_pmo} citation={"Potmeter Mode action block on Setup (formerly Init) event"}/>

## Potmeter minimum and maximum

By default, the potmeter minimum value is 0, and the maximum value is 127. These values can be changed with the `potmeter_min()` and `potmeter_max()` functions.

When the potmeter minimum and maximum values are changed, the `potmeter_value()` will reflect those new ranges.

If you want to set potmeter minimum and maximum values, you can do so by adding a [**Code Block**](/wiki/actions/code/code-block) Action to the _init_ Event of the button control element.

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

Potentiometers, specially the faders are often used to control the dynamics, volume and expression of instruments in audio libraries and VSTs. On Grid controllers, the default CC MIDI settings are [calculated dynamically](/wiki/more/dynamic-layout), but it's easy to overwrite them.

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

Let's add an **Potmeter Mode** Action block to the _init_ event of the potentiometer control element. We could put it onto the _potmeter_ event as well, but pay attention to the order of execution on an Action chain.

1. Change the bit depth to 10, and set the maximum to 16383. This way you can use the potentiometer to send 14-bit MIDI messages.
2. Navigate to the _potmeter_ event and change the MIDI action block from "MIDI" to "14-bit MIDI".
3. Open up the MIDI monitor and see your potentiometer sending out 14-bit MIDI messages.

<ImageLightbox imageSrc={pot101_14bit_midi} citation={"Set the Potmeter Mode on Setup (formerly Init) even and change the MIDI action block on the potmeter event to 14-bit"}/>

---

## Centering the Potmeter

If your potmeter’s center position is not aligned correctly (for example, in 7-bit standard MIDI the center value should be **64**), you can manually calibrate it using the following steps:

1. **Manually move all potmeters to their physical center position.**
   This is important to ensure proper calibration.

2. **Open the Debug Menu** in Grid Editor.

3. **Paste the following command into the code input field:**

   ```
   gpcs(gpcg())
   ```

4. **Click "Immediate" to send the command.**

After this, all potmeters should snap to the middle. They are now calibrated to recognize the physical center as the correct center MIDI value. That’s it — you’re done!

<ImageLightbox imageSrc={centering} citation={"Potmeter centering"} styling={'w-4/5 max-h-60 object-contain'}/>

---

# Calibrating the Center Detent Potentiometer

Some potentiometers have a **center detent** — a small physical "click" or resistance at the middle position. However, due to analog tolerances, the electrical center might not perfectly match the physical center detent.
For precise control — such as ensuring a pan knob always centers exactly — it's important to **calibrate the center position** once.

### Why Calibration Is Needed

* Analog potentiometers may not send an exact 50% (e.g., value 64 out of 127) at the center detent.
* Calibration ensures consistent behavior, especially for parameters like:

  * Panning (center = center)
  * Modulation depth
  * Bipolar values

### 🔧 Calibration Steps

_need to do it with all the potmeters, the centering is centering to the all in once_

1. **Turn the knobs to the minimum position** (fully counterclockwise).

2. **Slowly turn the knobs up to the center detent position** (where you feel the physical "click" in the middle).

3. **Open the Debug Menu**, and in the **Immediate** field, enter the following command:

   ```
   gpds(gpcg(), false)
   ```

4. **Send** the Immediate command.
   <ImageLightbox imageSrc={calibrating} citation={"Potmeter calibrating"} style={{height:250+'px'}}/>

5. **Now turn the knobs to the maximum position** (fully clockwise).

6. **Slowly turn the knobs down to the center detent position** again.

7. **Open the Debug Menu** once more, and in the **Immediate** field, enter:

   ```
   gpds(gpcg(), true)
   ```

8. **Send** the Immediate command again.

9. ✅ **Done:** All potentiometers should now correctly snap to the middle position when turned to the center detent.



