---
sidebar_position: 1
title: "1.0: Editor overview"
description: Editor overview and creating a basic Grid configuration
slug: editor-110
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


*This article will guide you through the first steps of understanding Editor, our configuration software for Intech Studio products.*

*Please visit [**Grid Editor Web App**](https://grid-editor-web.web.app/) -  if you would like to try Grid Editor with **virtual** module.*


---


## Navigating the Editor

Grid Editor has 3 sections, each one responsible for certain functionalities:
- **Left panel**: Profile Cloud, MIDI Monitor, Debug Monitor and Packages
- **Center panel**: Pages and a visual representation of the connected Grid control surface
- **Right panel**: Grid Configuration and Preferences

<ImageLightbox imageSrc={control_main_panels} citation={"<span style='color:red'>red:</span> change the content of the left and right panels<br><span style='color:blue'>blue:</span> the interaction tracking<br> <span style='color:orange'>orange:</span> data communications with Grid"} styling={'w-full max-h-[200px] object-contain'}/>

Functionality of the left and right panels can be changed by clicking the icons in the sidebar. Within the center panel - where you can see your connected control surface - the pages, interaction tracking mode and primary module operations are available.

<!---
:::tip Creating a workspace
You can open and close the left and right panels by clicking their sidebar icon multiple times.
:::
--->

### Interacting with Editor

To start configuring your module, you can either click on a control element (knob, button or fader) within the Center panel or interact with the hardware control element in the physical world. Both of these actions will cause the control element to receive a highlight and its configuration will appear on the right panel (if the panel is in Grid Configuartion mode). To change which control element is selected, just click on an other control element or interact again with the hardware.

:::tip Use both hands!
Use your keyboard-wielding hand to interact with the physical Grid controller while you configure with Editor using your mouse-wielding hand!  
This is a faster way of working than just constantly clicking between the center and right panels.
:::

#### Setting up interaction tracking

Based on the interaction tracking panel setting, the Editor will change the view of the center panel - whenever you interact with the hardware. Interaction tracking settings:
- **OFF** mode results in hardware interactions are not being tracked by the Editor, but the MIDI Monitor for example shows changes;
- **Event** mode will follow how you interact with the hardware, so a button press will show the button event, an encoder turn will show the encoder event;
- **Element** mode tracks only control element changes, but not event changes.

#### Creating a configuration

Most of the configuration work happens in the right Configuration panel.
Whenever Grid is plugged into Grid Editor the configuration of the selected/default control element is loaded into Editor from Grid memory and becomes editable in the right panel named Grid Configuration.


Under each event different actions can be configured, which are the building blocks of Grid profiles.  
After making adjustments to any of the **[Action](/category/actions)** blocks, the primary module operations panel (top of the centerpanel) will show the number of active changes. 

Important notes about active changes:
1. The changes are sent to the hardware after making them in Editor, so you can try them in action. 
2. BUT the changes are not saved in Grid memory until clicking **Store** when active changes are present.
3. If you don't **Store** your changes, they will be lost when you disconnect your module. 
4. While active changes are present, you can not change Pages.
5. **Storing** sets the number of active changes in Editor to 0, enabling you to change Pages freely again.

<ImageLightbox imageSrc={primary_module_operations} citation={"The top of the Central Panel showing 2 active changes"} styling={'w-3/5 object-contain'}/>

<!---
:::note What is a profile?
A profile is a collection of all actions configured on a single page, on a module. A profile can be saved and shared to the Profile Cloud.
::: 
--->

## Changing Grid configurations with Editor

<!---itt mindenhez linkelni amint mergelve lett--->

While creating your Grid configurations, your main workspace will utilize the following panels:
- **Pages** tabs - shows the active Page of the Grid module, chaning Page reloads config from Grid;
- **UI and System Events** tabs - choosing one type reveals the Events and their Actions;
    - The UI Events are the Events of the individual control elements;
    - System Events are the Events of affecting the whole module;
- **Actions** - the basic building blocks of Grid profiles, which can be configured under each Event.

<ImageLightbox imageSrc={configuration_main_parts} citation={"<span style='color:red'>red:</span> 4 Pages, 1 active<br><span style='color:blue'>blue:</span> UI or system events, UI selected<br> <span style='color:orange'>yellow:</span> UI events list control element events, init selected<br> <span style='color:green'>green:</span> action chain of init"} styling={'w-full max-h-[200px] object-contain'}/>

## Events and how to make Grid do things?

Physical interaction with Grid trigger Events. Events make their Action Chains run. Actions in the Action Chain make Grid do things.

Each Event has its own corresponding triggers, you can't configure these.
Each Event has its own Action Chain, you can configure these.


#### The Init Event


After loading a Page - either by connecting the hardware to a power source or changing a page - the *init* event runs on the module. For example, by default this *init* event sets the colors on the module. After this initialization other events can be triggered.

#### The Potmeter, Button and Encoder Events

The *potmeter*, *button* and *encoder* events are triggered by your interaction with the hardware, with the specific control elements. Like if you rotate an encoder, the encoder event will be triggered. If you press the button, the button event runs. 

#### The Timer Event

The *timer* event can be called with the **timer start** action block and related functions. With the timer, we can call actions after a period of time, build sequencers or do all sorts of time related applications.

You can learn more about the different events in the [Events](/category/events) section.

#### System-only Events

Looking at the system events, *utility* event is triggered by pressing the side utility button and *midi rx* is triggered by receiving a MIDI message on the module.

### The configured actions run on these events

Each Event can have multiple Actions configured. These Actions are executed in the order they are configured, from top to bottom. At the moment there is a [400 character limit](/wiki/more/char-limit) for each ACtion Chain for configuration length.

The Actions are combinations of Lua functions under the hood on Grid. To learn about action types, check out the [Actions](/category/actions) section. 

## MIDI parameter changes

Opening up the MIDI Action block shows (found on each Control Element Event by default), that 3 out of the 4 common MIDI parameters are configured with `words` instead of numbers. These `words` are coming defined by the first **Locals** Action block.

<ImageLightbox imageSrc={midi_default} citation={"The circled values are evaluated by Grid during runtime, thanks to its Lua engine"} styling={'w-3/5 object-contain'}/>

### The Locals Action block

The **Locals** Action block is the first Action block under each event in the default configuration. This block can be seen as *very intimidating* at first, as it holds variable assignments which are made to keep a multi module setup of the same module type unique in a common DAW + Grid setup. To learn more about the default Grid configuration, please check out the [Default MIDI layout article](/wiki/more/dynamically-assigned-MIDI-ch-and-cc).

Let's change this default to a common configuration, where we want to specifiy the channel to be **2** and the CC to be **99**.

We keep `num` and `val` intact. The `num` variable is assigned to the physical index number of the control element and the `val` variable is assigned to the actual element's value processed on each interaction on the specific event. Usually variables defined in **Locals** are referenced in other action blocks.

:::tip Why are `val` and `num` exposed like this?
Grid is a programmable control surface. You can put functions, variables under the Events of the different control elements. These functions and actions can be also referenced in other action blocks. This way you can create complex and truly unique configurations.
:::

<ImageLightbox imageSrc={change_locals} citation={"Change the dynamic assingment to simple static value definitions"} styling={'w-3/5 object-contain'}/>

### The MIDI action block

After you change these locals - and the MIDI blocks parameters aren't changed - you can see in the MIDI Monitor (left panel) that the MIDI parameters are sending the values you've defined.

Within the Grid Editor, most things can be configured in multiple ways. In the end, all the configurations are transformed into Lua code, which is then executed on the module. Following this logic, we can delete the `cc` and `ch` variables from the **Locals** Action block with the "x" next to each variable declaration. Define them in the MIDI Action block and the end result will be the same.

<ImageLightbox imageSrc={define_in_midi} citation={'Delete the variable with the "x" and hard-code the values in the MIDI action block'} styling={'w-3/5 object-contain'}/>

:::note Why is it still good to have variable definitions in **Locals**?
Once you get the grasp of it, the resulting configuration are easier to follow. You can also save characters if a variable is referenced in multiple Action blocks. An other important note, is that using expressions as Action parameters is **discouraged**, can lead to unexpected results and can be hard to debug.
:::

### Wrap up

To change MIDI settings on a control element, you have to change the values used by the MIDI Action block. This can happen by directly specifying values in the MIDI Action block or by changing the variables referenced by the MIDI Action block. In the end, you should check the results with the help of the MIDI Monitor.

<ImageLightbox imageSrc={check_midi_monitor} citation={'Delete the variable with the "x" and hard-code the values in the MIDI Action block'} styling={'w-3/5 object-contain'}/>

## LED colors and brightness

### LED brightness and the often used `num` variable

The **intensity** Action block sets the LED brightness of the control element, so you can see it under most Events. This Action block is also defined in the **init** Event, to "activate" the LED intensity. 

The `num` variable in the default configuration holds the physical index number of the control element. Some Action blocks - like the **Intensity** and **Color** - need this variable to know which control element should be changed or in this case set to a different brightness. 

If you remove the **intensity** Action block from the event, the LED brightnes won't change on interactions. You might want this, if you programatically set LED brigthness.

<ImageLightbox imageSrc={index_numbers} citation={'Index numbers start from top left with 0'} styling={'w-2/5 max-h-60 object-contain'}/>

:::tip Change a different control element's LED brightness
Action blocks which use the `num` variable can usually change the state of the control element they are running under.
:::


### LED color

The colors are defined usually under the **init** Event. When the control element is initialized the LED color is set. Each 4 Page has a different color, the `red`, `gre` and `blu` variables are set by the page specific  `led_default_red()`, `led_default_green()` and `led_default_blue()` functions in the **locals** block. 

The color Action block has a *layer* parameter, which is most interesting for the encoders as an encoder has 2 interactions, button presses and rotation. The *layer* parameter can be set to `1` or `2`, which will set the color for the press or rotation interaction. Learn more about the *layer* parameter in the [Color action block](/wiki/actions/led/led-color) article.


### Configuring LED color for an encoder
Let's change an encoder (same will work for a different control element, but pay attention to the *layer* parameter), to a different color.

Go to the *init* Event and open up the **color** Action block, which has the layer 2 parameter. Just click around in the color picker field or type the red-green-blue values in the input fields. You can also use the random color generator, which is the dice icon. 

The resulting color - as it's a layer 2 color setting - will be seen when you turn up the encoder.

<ImageLightbox imageSrc={encoder_rot_color} citation={'Turn up the encoder to see the layer 2 color'} styling={'w-3/5 object-contain'}/>

If you also want to change the button press color, open up the other color block with the layer 1 parameter and change the color there. Press the button to see the color change.

:::tip Remove unused variables from **Locals**
If you hardcode LED color values, and don't use the page default colors, it's good practice to remove the unused variables from the **locals** block. This way you can save characters and make the configuration easier to read and mantain.
:::


## Completing a configuration

### Store the changes

So far, we've changed the LED colors and specified MIDI parameters on our module.

The primary module operations panel should shows the active changes, which are not saved on the module. To save these changes, click on the **Store** button.

The **Discard** button will discard the active changes and reload the configuration from the module. This is useful, if you want to start over or you've made a mistake.

⚠️ **Clear** will clear the active page on **all connected modules** and the firmware default profile will be reloaded on the module. Before clearing your configuration, it's good practice to backup your work by creating a Profile.

<ImageLightbox imageSrc={store_to_module} citation={"An active configuraiton can be stored"} styling={'w-3/5 max-h-60 object-contain'}/>

After hitting **Store**, you can disconnect - or change the page - on the module. The configurations you applied to the module will be saved on the module's memory and it will be recalled when you connect the module again.

:::note Grid works without a computer
The Editor is crucial while configuring the unit, but after the configurations are made it can be closed. Grid's MIDI and Keyboard related functions will work without the Editor. On the other hand, some packages may require the Editor to be open in the background, but this will always be indicated on the installed package.
:::

### Create a Profile or Preset

Click on the Profile Cloud tab on the left sidebar. Here you can create a new Profile or Preset. Beside storing your changes to the module, it's highly encouraged to keep copies of your configurations in this Profile Cloud panel. You can name these Profiles and Presets and also make them public for others to use and learn from.

Learn more about Profile Cloud and it's features [here](/docs/guides/grid/grid-basic/cloud.md).

<ImageLightbox imageSrc={profile_cloud_panel} citation={"Under the Profile Cloud panel you can create Profiles and Presets"} styling={'w-4/5 object-contain'}/>

#### Difference between a Profile and Preset

A Profile is a collection of **all** Actions configured for all Events on a single Page, on one module. A Preset is a collection of a **single** control element's Events its configured Actions.

<ImageLightbox imageSrc={profiles_vs_presets} citation={"Profile: all control element and system event configuration <br> Preset: single control elements configuration"} styling={'w-4/5 object-contain'}/>


## Next steps

After navigating around the app, in the next article we'll change the control element modes and get to know more tools.


