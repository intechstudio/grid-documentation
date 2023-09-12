---
title: Grid Editor changelog
description: Updates about new Grid Editor changes, features and bugfixes
---


import ProtocolUrl from '@site/src/components/ProtocolUrl';

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

[More about how to use the Profile Cloud here](/docs/guides/guide/cloud.md)

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
