---
title: Grid Editor changelog
description: Updates about new Grid Editor changes, features and bugfixes
slug: editor-changelog
---

import ProtocolUrl from '@site/src/components/ProtocolUrl';

You can see written patch notes released here for Grid Editor, the configuration software for Grid Controllers.  
[(Up-to-date changes can also be found on our GitHub here.)](https://github.com/intechstudio/grid-editor/releases)

---

## Grid Editor version 1.6.0

This version of Grid Editor arrives with shiny new features and useful bug fixes. The extensive list of changes are as follows:

### Updated Default Configuration for Grid

With the new Editor version comes a **new Firmware version**. Firmware version 1.4 redefines the old default configurations of Grid to make it sleeker and easier to use. **After updating the Firmware, clearing or NVM erasing the module will set the module to this new default configuration.**  

This new Configuration uses the new SimpleColor Action for easy LED color adjustment, updated Auto commands for a clean UI and a Mode block for every Element for quick access to cool new features like the Pressure mode on the new Buttons.

*Keep in mind that older configurations on the cloud might behave strangely under the new firmware versions. Contact support@intech.studio for help in these cases.*

### Packages and Creative Software Integrations

This is the first version of Editor officially supporting Software integration Packages.

- Added support for **Adobe Lightroom Classic**
- Added support for **Adobe Photoshop**
- Added support for **Discord**
- Added support for **Spotify**

#### New Features

- Introduced a simplified **Minimalist mode** for new users to get started more easily with Grid Editor. You can check or uncheck the small switch in the right corner of the Grid Editor window to change the view. The last state of the switch will be saved in user settings as default.
- Added a right-click context menu for Action blocks for deleting and resetting blocks.
- Grid protocol now supports the **LCD Draw event** for VSN1 modules. You can find out [more about the Draw event here.](/category/draw)
- Added a new way of editing colors with the **SimpleColor** block.
- Added a new mini-map of connected modules. Editor will display multiple ports, virtual modules here all in one place.
- Users can now select and drag multiple actions simultaneously for improved workflow efficiency.
- Added improved visualization for pressure sensitive buttons.
- Added confirmation modals and reworked modal logic for better user interaction experience.
- Enhanced search functionality of the Action Picker to include category names (e.g. "midi") for easier action discovery.
- Added quit dialog when user tries to close Editor with packages running in the background.
- Added support for parsing AUTO values in MIDI, MIDI14, and SimpleColor components. These Auto values (called by "-1" in all cases) replicate or follow previous functionality, so there should be no change to how these Actions function.
- Added support for VSNX variants in the virtual module modal.
- Replaced the previous code input system with a robust Monaco-based editor for improved code editing experience with better syntax highlighting and autocomplete.
- Modernized Package List UI with refreshed interface design.

#### Bugfixes

- Fixed MIDI Monitor lagging issues that caused performance problems during MIDI data monitoring.
- Fixed SimpleColor color picker freeze issues in multi-event views.
- Fixed LedColor color picker freezing problems.
- Fixed Monaco modal-related bugs and added virtual button support.
- Fixed visual bugs in MeltSelect dropdown components.
- Fixed element selection focusing behavior for both single and multi-connection scenarios.
- Fixed merge syntax errors that occurred during code operations.
- Fixed issues preventing page changes when active changes are present.
- Fixed Settings Button step value calculations.
- Fixed problems with name changes not being committed in Monaco editor.
- Fixed package window recreation issues.
- Fixed profile load race condition timing issues with cloud loading.
- Fixed a visual bug where navigation tabs had color flashing issues.
- Fixed focusing behavior problems for element selection.
- Fixed minimap navigation and display issues.




## Grid Editor version 1.3.5

This version of Grid Editor arrives with shiny new features and useful bug fixes.
The extensive list of changes are as follows:

#### New Features

- With the new firmware, inter-Grid communication is now possible! Each Grid now has the capability to tell another to do something or remember sometihng. You can read more about how it works [here, it's called Immediate Send](/docs/wiki/more/immediate-send.md)
- A new block has been added called NRPN. This allows you to easily send customizable NRPN MIDI messages.
- A new block has been added called Button Step. This helps you individually customize buttons steps in multiple-step buttons modes.
- A new block has been added called Function. This new block lets you create custom functions made in Lua code.
- All Mode-sytle blocks have upgraded. This update includes the addition of min and max values to these blocks in all cases, with additional options like Sensitivity.
- Added new prompts to the bracket-style blocks (If/Else, Press/Release etc.) to help guiding the user when placing blocks.
- Added the feature to be able to name blocks!
- Added the feature to switch between the currently edited controllers in the case of multiple connected Grid setups.
- Partially matched configuration loading is now possible (e.g. button config loaded to encoder), indicated by a yellow loading icon.
- Suggested variable names have been updated to better indicate their function.
- The context menu under right click has been improved.

#### Bugfixes

- Fixed a bug where Copy/Paste states were mismatched when using both context menu and toolbar.
- Fixed a bug where typing into comment block would let the user exceed the character limit.

## Grid Editor version 1.3.3

This major version of Grid Editor arrives with shiny new features and useful bug fixes.
The extensive list of changes are as follows:

### Editor updates are now opt-in

- We completely overhauled how we handle Editor updates from Editor version 1.3 onwards.
- Instead of the earlier version of forcing you to update, now we warn you when there is a new update for Editor, but Editor will no longer update without your explicit consent.
- This way it will be possible to stay or to roll back to earlier versions without much hassle.
- **We still recommend keeping Editor up-to-date as new features will require you to be on the latest versions.**

#### New Features

- Overhauled the look and feel of Virtual Modules and made it possible to build a complete setup virtually.
- When adding a new Action to an Event, it's now possible to search within the Action picker.
- Now it's possible to update Grid to the Nightly Firmware when a module is in bootloader mode. This feature has to be enabled in Preferences, under Developer Settings.
- Added a new Overlay Package which lets Editor display chosen values on your computer display as an OSD.
- Added Editor support for upcoming modules.
- Added WebSerial support for the [web version of Grid Editor](https://grid-editor-web.web.app/). This allow users to configure their modules in Google Chrome.
- Added support for Keyboard hotkeys. Now it's possible to copy actions or whole elements with just keyboard hotkeys.  
  The list of shortcuts are as follows:

<div style={{margin: '2em'}}>

| Shortcut             | Action                                         | Element                                 |
| -------------------- | ---------------------------------------------- | --------------------------------------- |
| Ctrl/Cmd + C         | Copy selected Action(s) to clipboard           | Copy active Element to clipboard        |
| Ctrl/Cmd + P         | Paste Action(s) from clipboard to active Event | Overwrite active Element from clipboard |
| Ctrl/Cmd + X         | Cut selected Action(s) to clipboard            | -                                       |
| Ctrl/Cmd + Shift + M | Merge selected Action(s) to Code               | -                                       |
| Delete               | Deletes selected Action(s)                     | -                                       |
| Shift + Delete       | -                                              | Clears active Element                   |
| Ctrl/Cmd + Shift + M | -                                              | Discards active Element changes         |

</div>

#### Bugfixes

- Fixed a bug where resizing the code editor window would fail.
- Fixed a bug where (dis)connecting a large number of modules would cause a runtime error.
- Fixed some bugs relating to minifying lua code.
- Fixed a bug where the context menu would behave unexpectedly.
- Fixed a bug where the TEK2 virtual module would cause Editor to freeze.

## Grid Editor version 1.2.53

This new version of Grid Editor arrives with shiny new features and useful bug fixes.
The extensive list of changes are as follows:

#### New Features

- Added TEK2 default configuration to Editor with a couple extra configurations on the way.
- It's now possible to add multiple Virtual Modules and the UI for this feature has been improved.
- The Action and Element toolbar (copy, paste etc.) received a new look. It even received a colorscheme that you can enable under Preferences/Developer options which should make recognizing buttons easier at a glance.

#### Bugfixes

- Fixed a bug where Profile Cloud would incorrectly show that the user is logged in.
- Fixed a bug where the Context Menu would not behave as expected when hovering.
- Fixed a bug where comments in a Code Block would cause unexpected minifying of code.
- Fixed various visual rendering inconsistencies of Action blocks.

## Grid Editor version 1.2.52

This new version of Grid Editor arrives with shiny new features and useful bug fixes.
The extensive list of changes are as follows:

#### New Features

- Now you can hold Ctrl or Cmd and click on the Action blocks in the Configuration side panel to select them.

#### Bugfixes

- Fixed a major bug where the Loop Action block would behave incorrectly.
- Fixed a bug where Grid would disconnect during a Clear operation.

## Grid Editor version 1.2.51

This new version of Grid Editor arrives with shiny new features and useful bug fixes.
The extensive list of changes are as follows:

#### New Features

- Added the new **Gamepad Action** blocks (Button and Joystick), which let you send Gamepad messages to your computer. More info about the Gamepad Actions can be found on the [Wiki](/category/gamepad-actions).
- All block operations (Copy, Paste etc.) have been visually redesigned.
- All element operations (Copy Element, Overwrite Element) have been visually redesigned and moved above block operations.
- Added the new **Context Menu**. Right clicking with the mouse on a control element now reveals a Context Menu. Context Menu was added to help speed up some Element worklows.
- Holding down Cmd/Ctrl and click-and-dragging the module layout is now possible. The 'Reset View' button in the bottom right corner resets all changes to this, as does unplugging the module or restarting Editor.
- It's now possible to disable Editor animations. This should make Editor easier to run on older computers. You can find this option under Preferences.

#### Bugfixes

- Fixed a bug where certain characters could cause an infinite loop.
- Fixed a bug where clicking on a tooltip text would make the tooltip disappear.
- Fixed a bug where Profile Cloud would display incorrect login status.
- Fixed a bug where the Action picker window would clip outside of the Editor window.
- Fixed a bug where the Keyboard Action block would refuse character input.

## Grid Editor version 1.2.49

This new version of Grid Editor arrives with shiny new features and useful bug fixes.
The extensive list of changes are as follows:

### Profile Cloud Rework

- Updated the look and functionality of Profile Cloud with the aim of visual clarity and general usability.
- You can now name your profiles and presets before actually saving them.
- Added 3 categories that all configurations now fall under: my configurations, recommended configurations and community configurations. This way, your own configurations will always be visible at the top, regardless of naming or date of creation.
- Updated the look of the configuration list for visual clarity.
- Details of a selected configuration are now visible in the bottom panel.

<!-- link to the video from Greg -->

#### New Features

- Added Virtual Modules to Editor. You can add a Virtual Module to Editor when you have no module plugged in after launching Editor. Virtual modules are fully featured, allow you to work on configurations while not having a module plugged in or even create configurations for modules you don't own.
- Code editor panel now appears in the middle of the UI, instead of over it. This allows for better visibility for the side panels while editing.
- Fixed a bug where indentations would not render correctly.
- Previously plugins are now Packages.
- Updated the design of every single button to have a consistent design.

#### Bugfixes

- Fixed a bug where the Package Manager would freeze in certain specific cases.
- Fixed the 'Unhandled Device Lost' error.
- Profile Cloud now properly warns the user when inputting incorrect email address or password on the login screen.
- Fixed a bug where the Action-picker panel would be cut off by the edge of the Editor window.
- Fixed a bug where Editor would not display warning messages in Logger.
- Fixed a bug where plugging in a real module while a Virtual module was visible could cause a crash.
- Fixed several bugs related to UI scaling.
- Fixed a bug where NVM erase wouldn't cause Editor to correctly display the erased state of the controller.
- Editor now prompts the user to update when Grid is running a firmware version below 1.2.29.

---

## Grid Editor version 1.2.48

This new version of Grid Editor arrives with shiny new features and useful bug fixes.
The extensive list of changes are as follows:

### Changes to Mouse functions

- Changed how Grid handles all functions and therefore all Actions related to Mouse Actions.

:::caution Be careful!
The two parameters of all Mouse functions have been swapped from Grid Firmware version 1.2.28 onwards.  
The [Wiki](/category/keyboard-and-mouse-actions) now displays the new version, under the Reference Manual Entry tab.
:::

#### New Features

- Changed the Profile/Preset Load buttons from text to icons for better visual feedback.
- When System Element is selected, Editor now displays a representation of the PCB underneath. You can turn this option on and off under Preferences.
- Added System Element to the Element selection list at the top of the Configuration side panel.
- Rearranged the position of some items on the Configuration panel.
- Editor Packages are now able to supply Editor with new types of Action blocks for future expandibility.
- Active changes are now visible while the Profile Load overlay is engaged.

#### Bugfixes

- Fixed suggested options in Local Action blocks to correctly display available options.
- Fixed bugs regarding the internal logic of the If, Else and Elseif blocks.
- Fixed a bug where text would appear cut off in some cases within block textboxes.
- Fixed a bug where pressing the Enter key wouldn't select and perform auto-complete on suggestions.
- Fixed a bug where moving the cursor near the bottom or top of the Action Chain would cause the list of Actions to automatically scroll up and down.
- Fixed bugs related to Active Changes.
- Fixed a visual bug related to Variable Action blocks.

---

## Grid Editor version 1.2.47

This new version of Grid Editor arrives with shiny new features and useful bug fixes.
The extensive list of changes are as follows:

#### New Features

- You can now select and edit the System Element by clicking on the southern middle part of the modules, where the firmware number and architecture code is visible.
- System Element is now added to the Active Changes highlighting.
- When creating arrays in code, each value now appears in a single line, even after closing the code editor.
- Reworked the overlay system to better handle the case of conflicting overlays.
- Page selection got a new look and now appears under the module in the center of the layout.

#### Bugfixes

- Loading Profile Cloud when offline now throws a proper error instead of failing silently.
- Bitwise operators now work properly inside of Action block textboxes.
- Fixed a bug where on Linux, reseting User Preferences to defaults would case Editor to crash.

---

## Grid Editor version 1.2.46

This new version of Grid Editor arrives with a whole bunch of new features from UX improvements, to troubleshooting aides. The extensive list of features is found below. We also fixed some annoying bugs, but mostly features this time around!

#### New Features

- Added a new feature called 'UI Scale' which allows you to change the size of text in Editor. The feature is found under Preferences/Developer settings for now.
- The MIDI Action now displays parameters even in its closed state.
- Added note denominations under the MIDI Action's Parameter 1 drop-down menu. You can now see a list of notes when using a Note On/Off command.
- Editor now displays unsaved changes per Event both on the module visualization and the Configuration sidebar. This way you can track what you've been working on visually.
- Editor now displays the firmware version of the module on the module visualization.
- Editor now handles breaking changes happening to blocks properly by allowing you to convert those old versions to a new compatible format or simple code.
- Editor now remembers your Profile Cloud URL settings.

#### Bugfixes

- Fixed the bug that caused suggestions in the Action block drop-down menus not to render. Suggestions should now render properly.

---

## Grid Editor version 1.2.45

This new version of Grid Editor arrives with a new Action called Loop and another round of fixes and reworks of basic underlying systems.

The Loop Action can be used to repeat an Action or multiple Actions in just a single Event. You can set the number of repetitions or even add your own rules for counting down repeats. This block gives you the control over the underlying `for` loop from the Lua library.

#### New Features

- Editor now displays a prompt to add Actions when an Event has no actions added.
- Added a new Loop Action block. This allows you to repeat actions in a single event multiple times.
- Now expressions (e.g. adding or multiplying) can be used in all block input fields without them breaking the configuration.

#### Bugfixes

- Fixed a bug where Setup load order was not correct when loading Profiles.
- Reworked config panel refreshing behavior.
- Fixed how the 'Tab' button is handled when switching between input fields in an Action.

---

## Grid Editor version 1.2.44

This new version of Grid Editor arrives with a big haul of fixes an UX improvements. This patch notes combines the changes of version 1.2.43 and the 1.2.44 hotfix patch released on September 25, 2023.

No real star features this time, mostly under the hood changes and bugs getting fixed. But alongside the Editor patch, you can now see the updated Cloud, where all configs are now stored both Profiles and control element Presets.

#### New Features

- Now Editor can be navigated by using the keyboard buttons.
- When dragging an Action Block, the Action Chain window will now automatically scroll up and down in the matching direction.

#### Bugfixes

- Fixed a bug where profile and preset load overlays would be displayed incorrectly when using rotated module orientations.
- Fixed a bug where Merge to Code would freeze Editor on merging Blocks with incorrect syntax. Now Merge to Code displays an error in this case and aborts the merge as expected.
- Reworked the Actions panel to keep previously opened Blocks open. New blocks now appear as already opened.
- Event button highlighting fixed from previous version where highlighting wouldn't appear.
- Local Profile overwrites now work as expected.

---

## Grid Editor version 1.2.42

This new version of Grid Editor arrives with Plugin Manager and Profile Cloud usability improvements, a complete rework of the user feedback/notification system and many-many bug fixes and small improvements.

#### New Features

- The Plugin Manager now properly tracks what's in the local folders and shows already installed Packages/Plugins accordingly.
- The Profile Cloud got a nice visual and UX overhaul, Cloud and Local Profiles are no longer separated, filtering and searching of Profile names added.
- The Editor-Grid connection tracking and their respective systems received a complete overhaul. Editor now gives better feedback when a connection error occurs.
- Added new behind-the-scenes systems for future feature support.

#### Bugfixes

- Fixed a bug where Editor would clear the clipboard after each paste.
- Fixed a bug where Action Block text boxes would break visually in certain layouts.

---

## Grid Editor version 1.2.41

This new version of Grid Editor arrives with a couple of new and exciting features and some bug fixes and changes under the hood. Preferences have been shuffled around as we're preparing Editor for an upcoming visual overhaul.

#### New Features

- Added a new developer feature that allows for visualization of active connections between modules under Preferences/Developer settings
- Moved the new Plugin system into the sidebar from Preferences, under Packages Manages
- Added new Clock Source action for synchronizing with MIDI clock from the Host device (requires an up-to-date firmware on the Grid module and proper setup, see Demo below)
- Profile Could now works offline, all other profile management systems have been phased out
- Preferences received a new look, the settings have been moved to their own subsection groups

#### Bugfixes

- Editor will now properly display modules as either "D-51" or "E-32" alluding to the underlying architecture
- Fixed a bug where the input fields would resize the sidebar window when clicked
- Reworked tooltip implementation
- Fixed a bug where rotated modules would render incorrectly

#### MIDI Sync Demo

The most exciting of all should be the newly added Clock Source Action which allows for easy syncing between a Grid Timer event and your DAW. Below you can find 5 links for 5 profiles which showcase the new feature:

<div style={{margin: '2em'}}>

| GRID | Editor Profile Cloud link (click it with Editor running)                                             |
| ---- | ---------------------------------------------------------------------------------------------------- |
| PO16 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=q8UZFp8iVXDXHQoKWKM3"/> |
| BU16 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=ZJWuoN2CVC4GimzV2Ddc"/> |
| PBF4 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=WbDCNOeOQT09ulnAHw2s"/> |
| EN16 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=HTq8ZSkvFJKehvv7gOFU"/> |
| EF44 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=ZaDqnPkLbMkWR9G4vu3m"/> |

</div>

[More about how to use the Profile Cloud here](/docs/guides/grid/grid-basic/cloud.md)

All Demos function the same way: when Grid is configured with the profile above, the first LED of the module will sync its blinking to the DAW MIDI clock.
When you press Play in your DAW the LED should start blinking and turn green.
When you press Stop in your DAW the LED should stop blinking and turn red.
When the LED blinks, the pulses are synced to the clock. Each blink represents a quarter note.
It's possible to adjust the sync frquency by changing the variable 'ppqn' under System Events/Init.

The code has been commented for easier understanding for tinkerers!

:::caution Watch out!
Remember that the above requires the latest Grid Firmware as well, but Editor should prompt for an update if your module Firmware is not up to date.
:::

---

## Grid Editor version 1.2.40

This version of Grid Editor arrives with a new Plugin system, which allows us to add small features developed separately from Editor. The first example of this is the Active Window plugin (earier a dev-feature), which allows Editor to change the ative Page of the connected module based on which window is in focus.
We added some more convenience features and fixed a whole lot of bugs and crashes.

#### New Features

- added a new feature which allows Editor to display the MCU acrhitecture on the module (ESP32 for new modules or D51 for older ones)
- added a new Plugin Manager subsystem, which can download, install/uninstall, enable/disable plugins
- re-added the Active Window feature as a Plugin

#### Bugfixes

- reworked Grid layout and the module scaling feature under Preferences to be persistent and more reliable
- fixed an issue where the Keyboard Action block would display a red border around the input field when unnecessary, now displays a warning message instead
- updated the Send Feedback feature and fixed an issue where feedback could be sent multiple times in quick succession
- fixed an issue where on MacOS the 'Always run in background' set to off caused the app to crash when closing the app
- changed the behavior of how Editor is counting active changes, now only counts when a change is comitted or a field witch change loses focus
- fixed a bug where Editor would count two changes for one
- hotfixed a bug where Control Element Setting Actions would not be able to display their values properly or retain changes to their variables

---

## Grid Editor version 1.2.38

This version of Grid Editor arrives with loads of bugfixes for annoying bugs, UX improvements and some improvements to transparency.

#### New Features

- added a new option to Preferences, which allows the user to enable/disable the application running in the background
- added a new option to Preferences, which allows the user to enable/disable analytics
- logger messages can now be dismissed by clicking on them
- now Interaction Tracking menu fades when logger messages appear
- added error message to logger when trying to switch Pages with active changes using the utility button on the Grid module itself

#### Bugfixes

- fixed a bug where Grid modules would disconnect and would remain disconnected until Editor is completely restarted
- fixed a bug where the left sidebar would default to Profile Cloud when changing the right sidebar to Preferences
- fixed a bug where switching tabs on the MIDI Action block would cause a crash
- fixed a bug where changing the Editor window to extremely narrow would break the MIDI Action block visuals
- fixed a bug where the Elseif conditional block would appear without a textbox for its condition
- fixed an issue where the logger screen background would be red where it wasn't supposed to

---
