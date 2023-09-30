---
title: App overview and first changes
description: Editor and basic configuration overview.
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import control_main_panels from './img/control_main_panels.png';
import primary_module_operations from './img/primary_module_operations.png';
import configuration_main_parts from './img/configuration_main_parts.png';
import midi_default from './img/midi_default.png';
import change_locals from './img/change_locals.png';
import define_in_midi from './img/define_in_midi.png';
import check_midi_monitor from './img/check_midi_monitor.png';
import index_numbers from './img/index_numbers.png';
import encoder_rot_color from './img/encoder_rot_color.png';
import store_to_module from './img/store_to_module.png';
import profile_cloud_panel from './img/profile_cloud_panel.png';
import profiles_vs_presets from './img/profiles_vs_presets.png';


## Navigating the Editor

Grid Editor has 3 main sections:
- Left panel for Profile Cloud, MIDI Monitor, Debug Monitor and Packages
- Center panel for the pages and Grid control surface
- Right panel for the module Configuration and Preferences

<ImageLightbox imageSrc={control_main_panels} citation={"<span style='color:red'>red:</span> change the sidebar tabs<br><span style='color:blue'>blue:</span> the interaction tracking<br> <span style='color:orange'>orange:</span> pirmary module operations"} styling={'w-full max-h-[200px] object-contain'}/>

These sections can be changed by clicking on the tabs on the left sidebar. Within the center panel - where you can see your connected control surface - the pages, interaction tracking mode and primary module operations are available.

To start configuring your module, you can either click on a control element within the Editor or interact with the hardware itself. The control element's configuration is loaded from the hardware. To change between the control elements, just click on an other control element or interact again with the hardware.
Based on the interaction tracking panel setting, the Editor will change the view - whenever you interact with the hardware:
- When **OFF**, hardware interactions are not tracked by the Editor, but the MIDI Monitor for example shows changes;
- **Event** mode will follow how you interact with the hardware, so an button press will show the button event, an encoder turn will show the encoder event;
- **Element** mode tracks only control element changes, but not event changes. 

Most configuration work happen in the right Configuration panel. Under each event different actions can be configured, which are the building blocks of Grid profiles. After making adjustments to any of the action blocks, the primary module operations panel will show the Active Changes. 

Importent notes about these changes:
1. The changes are sent to the hardware, so you can try them in action. 
2. These changes are not saved on the hardware, without expicitly clicking **Store**.
3. If you don't store your changes, they will be lost when you disconnect your module. 
4. While active changes are present, you can not change pages.

<ImageLightbox imageSrc={primary_module_operations} citation={"primary module operations with 2 active changes"} styling={'w-3/5 object-contain'}/>

:::note What is a profile?
A profile is a collection of all actions configured on a single page, on a module. A profile can be saved and shared to the Profile Cloud.
::: 

## Changing configurations

While creating your Grid configuration, there are 4 main areas to look out for:
- **Pages** - the active page of the module, which is shown in the center panel;
- **UI and System Events** 
    - The UI events are the individual control elements;
    - System Events are events on the module, where the utility button and midi rx can be configured;
- **Events** - Based on the UI / System event selection, specific events are shown here;
- **Actions** - the building blocks of Grid profiles, which can be configured under each event.

<ImageLightbox imageSrc={configuration_main_parts} citation={"<span style='color:red'>red:</span> 4 interchangeable pages<br><span style='color:blue'>blue:</span> control element or system events<br> <span style='color:orange'>yellow:</span> control element events<br> <span style='color:green'>green:</span> action chain"} styling={'w-full max-h-[200px] object-contain'}/>

#### How are the events triggered?

After loading a page - either by connecting the hardware to a power source or changing a page - the *init* event runs on the module. For example, by default this *init* event sets the colors on the module. After this initialization other events can be triggered.

The *potmeter*, *button* and *encoder* events are triggered by your interaction with the hardware, with the specific control elements. Like if you rotate an encoder, the encoder event will be triggered. If you press the button, the button event runs. Looking at the system events, *utility* event is triggered by pressing the side utility button and *midi rx* is triggered by receiving a MIDI message on the module.

The *timer* event can be called with the **timer start** action block and related functions. With the timer, we can call actions after a period of time, build sequencers or do all sorts of time related applications.

You can learn more about the different events in the [Events](/category/events) section.

#### The configured actions run on these events

Each event can have multiple actions configured. These actions are executed in the order they are configured, from top to bottom. At the moment there is a [400 character limit](/wiki/char-limit) for each event for configuration length.

The actions are combinations of Lua functions understood by Grid. To learn about action types, check out the [Actions](/category/actions) section. 

## MIDI parameter changes

Opening up the MIDI action block shows, that 3 out of the 4 common MIDI parameters are defined with some 🪄magic values. These values are coming from the first **locals** action block.

<ImageLightbox imageSrc={midi_default} citation={"the circled values are evaluated by Grid during runtime, thanks to its Lua engine"} styling={'w-3/5 object-contain'}/>

### The locals action block

The **locals** action block is the first action block under each event in the default configuration. This block can be seen as *very intimidating* at first, as it holds variable assignments which is made to keep a multi module setup of the same module type unique in a common DAW + Grid setup. To learn more about the default local configuration, please check out the [Dynamic Assignment article](/wiki/dynamically-assigned-MIDI-ch-and-cc).

Let's change this default to a common configuration, where we want to specifiy the channel to be **2** and the CC to be **99**.

We keep `num` and `val` intact. The `num` variable is assigned to the physical index number of the control element and the `val` variable is assigned to the actual element's value processed on each interaction on the specific event. Usually variables defined in **locals** are referenced in other action blocks.

:::tip Why are `val` and `num` exposed like this?
Grid is a programmable control surface. You can put functions, variables under the events of the different control elements. These functions and actions can be also referenced in other action blocks. This way you can create complex and truly unique configurations.
:::

<ImageLightbox imageSrc={change_locals} citation={"change the dynamic assingment to simple static value definitions"} styling={'w-3/5 object-contain'}/>

### The MIDI action block

After you change these locals - and the MIDI blocks parameters aren't changed - you can see in the MIDI Monitor that the MIDI parameters are sending the values you've defined.

Within the Grid Editor, most things can be configured in multiple ways. In the end, all the configurations are transformed into Lua code, which is then executed on the module. Following this logic, we can delete the `cc` and `ch` variables from the **locals** action block with the "x" next to each variable declaration. Define them in the MIDI action block and the end result will be the same.

<ImageLightbox imageSrc={define_in_midi} citation={'delete the variable with the "x" and hard-code the values in the MIDI action block'} styling={'w-3/5 object-contain'}/>

:::note Why is it still good to have variable definitions in **locals**?
Once you get the grasp of it, the resulting configuration are easier to follow. You can also save characters if a variable is referenced in multiple action blocks. An other important note, is that using expressions as action parameters is **discouraged**, can lead to unexpected results and can be hard to debug.
:::

### Wrap up

To change MIDI settings on a control element, you have to change the values used by the MIDI action block. This can happen by directly specifying values in the MIDI action block or by changing the variables referenced by the MIDI action block. In the end, you should check the results with the help of the MIDI Monitor.

<ImageLightbox imageSrc={check_midi_monitor} citation={'delete the variable with the "x" and hard-code the values in the MIDI action block'} styling={'w-3/5 object-contain'}/>

## LED colors and brightness

### LED brightness and the often used `num` variable

The **intensity** action block sets the LED brightness of the control element, so you can see it under most interactive events. This action block is also defined in the **init** event, to "activate" the LED intensity. 

The `num` variable in the default configuration holds the physical index number of the control element. Some action blocks - like the **Intensity** and **Color** - need this variable to know which control element should be changed or in this case set to a different brightness. 

If you remove the **intensity** action block from the event, the LED brightnes won't change on interactions. You might want this, if you programatically set LED brigthness.

<ImageLightbox imageSrc={index_numbers} citation={'index numbers start from top left with 0'} styling={'w-2/5 max-h-60 object-contain'}/>

:::tip Change a different control element's LED brightness
Action blocks which use the `num` variable can usually change the state of different control elements.
:::


### LED color

The colors are defined usually under the **init** event. When the control element is initialised the LED color is set. Each 4 page has a different color, the `red`, `gre` and `blu` variables are set by the page specific  `led_default_red()`, `led_default_green()` and `led_default_blue()` functions in the **locals** block. 

The color action block has a *layer* parameter, which is most interesting for the encoders as an encoder has 2 interactions, button presses and rotation. The *layer* parameter can be set to `1` or `2`, which will set the color for the press or rotation interaction. Learn more about the *layer* parameter in the [Color action block](wiki/actions/led/led-color) article.


### Let's change the color of an encoder
Let's change an encoder (same will work for a different control element, but pay attention to the *layer* parameter), to a different color.

Go to the *init* event and open up the **color** action block, which has the layer 2 parameter. Just click around in the color picker field or type the red-green-blue values in the input fields. You can also use the random color generator, which is the dice icon. 

The resulting color - as it's a layer 2 color setting - will be seen when you turn up the encoder.

<ImageLightbox imageSrc={encoder_rot_color} citation={'turn up the encoder to see the layer 2 color'} styling={'w-3/5 object-contain'}/>

If you also want to change the button press color, open up the other color block with the layer 1 parameter and change the color there. Press the button to see the color change.

:::tip Remove unused variables from **Locals**
If you hardcode LED color values, and don't use the page default colors, it's good practice to remove the unused variables from the **locals** block. This way you can save characters and make the configuration easier to read and mantain.
:::


## Completing a configuration

### Store the changes

So far, we've changed the LED colors and specified MIDI parameters on our module. The primary module operations panel should shows the active changes, which are not saved on the module. To save these changes, click on the **Store** button.

The **Discard** button will discard the active changes and reload the configuration from the module. This is useful, if you want to start over or you've made a mistake.

⚠️ **Clear** will clear the full page on the module and the firmware default profile will be reloaded on the module. Before clearing your configuration, it's good practice to backup your work by creating a Profile.

<ImageLightbox imageSrc={store_to_module} citation={"an active configuraiton can be stored"} styling={'w-3/5 max-h-60 object-contain'}/>

After hitting **Store**, you can disconnect - or change the page - on the module. The configurations you applied to the module will be saved on the module's memory and it will be recalled when you connect the module again.

:::note Grid works without a computer
The Editor is crucial while configuring the unit, but after the configurations are made it can be closed. Grid's MIDI and Keyboard related functions will work without the Editor. On the other hand, some packages may require the Editor to be open in the background.
:::

### Create a Profile or Preset

Click on the Profile Cloud tab on the left sidebar. Here you can create a new Profile or Preset. Beside storing your changes to the module, it's highly encouraged to keep copies of your configurations in this Profile Cloud panel. You can name these Profiles and Presets and also make them public for others to use and learn from.

Learn more about Profile Cloud and it's features a [here](/guides/guide/cloud).

<ImageLightbox imageSrc={profile_cloud_panel} citation={"under the Profile Cloud panel you can create Profiles and Presets"} styling={'w-4/5 object-contain'}/>

#### Difference between a Profile and Preset

A profile is a collection of all actions configured on a single page, on a module. A preset is a collection of a single control element's events and the configured actions.

<ImageLightbox imageSrc={profiles_vs_presets} citation={"Profile: all control element and system event configuration <br> Preset: single control elements configuration"} styling={'w-4/5 object-contain'}/>


## Next steps

After navigating around the app, in the next article we'll change the control element modes and get to know more tools.


