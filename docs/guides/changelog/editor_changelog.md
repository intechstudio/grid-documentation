---
title: Grid Editor changelog
description: Updates about new Grid Editor changes, features and bugfixes
---


import ProtocolUrl from '@site/src/components/ProtocolUrl';


You can see written patch notes released here for Grid Editor, the configuration software for Grid Controllers.  
[(Editor changes can always be found on our GitHub here.)](https://github.com/intechstudio/grid-editor/releases)

---

### Grid Editor version 1.2.46

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

### Grid Editor version 1.2.45

This new version of Grid Editor arrives with a new Action, called a Loop and another round of fixes and reworks of basic underlying systems.

The Loop Action can be used to repeat an Action or multiple Actions in just a single Event. You can set the number of repetitions or even add your own rules for counting down repeats. This block gives you the control over the underlying `for` loop from the Lua library.

#### New Features

- Editor now displays a prompt to add Actions when an Event has no actions added.
- Added a new Loop Action block. This allows you to repeat actions in a single event multiple times.
- Now expressions (e.g. adding or multiplying) can be used in all block input fields without them breaking the configuration.

#### Bugfixes
- Fixed a bug where init load order was not correct when loading Profiles.
- Reworked config panel refreshing behavior. 
- Fixed how the 'Tab' button is handled when switching between input fields in an Action.



---



### Grid Editor version 1.2.44

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

### Grid Editor version 1.2.42

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


### Grid Editor version 1.2.41

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

| GRID | Editor Profile Cloud link (click it with Editor running)|
| ---- | ---------- |
| PO16 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=q8UZFp8iVXDXHQoKWKM3"/>  |
| BU16 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=ZJWuoN2CVC4GimzV2Ddc"/>  |
| PBF4 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=WbDCNOeOQT09ulnAHw2s"/>  |
| EN16 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=HTq8ZSkvFJKehvv7gOFU"/>  |
| EF44 | <ProtocolUrl title="MIDI Sync Demo" protocolUrl="grid-editor://?profile-link=ZaDqnPkLbMkWR9G4vu3m"/>  |

</div>

[More about how to use the Profile Cloud here](guides/grid/grid indepth/editor-200)

All Demos function the same way: when Grid is configured with the profile above, the  first LED of the module will sync its blinking to the DAW MIDI clock.
When you press Play in your DAW the LED should start blinking and turn green.
When you press Stop in your DAW the LED should stop blinking and turn red.
When the LED blinks, the pulses are synced to the clock. Each blink represents a quarter note.
It's possible to adjust the sync frquency by changing the variable 'ppqn' under System Events/Init.

The code has been commented for easier understanding for tinkerers! 

:::caution Watch out!
Remember that the above requires the latest Grid Firmware as well, but Editor should prompt for an update if your module Firmware is not up to date.
:::



---

### Grid Editor version 1.2.40

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

### Grid Editor version 1.2.38

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
