![Config_tooltips](Config_tooltips.png)

## Header
### 18 Clear

Clear all configurations of the currently active Page from Grid module memory.

### 19 Store

Store the configuration of the currently active Page into Grid module memory.

## Configuration panel

### 1 Page

#### Short version

Pages store configuration data independently for all your Grid modules, providing quick access to 4 different configurations.

#### Long version

Pages store configuration data for all your modules. Pages can be configured independently from each other so that different Pages can serve different control purposes. Only one Page can be active at a time, but you can have up to 4 Pages configured at all times. Switching between these 4 Pages can be done here in the Editor by clicking the Page Number below OR by pressing the utility button on the side of any one of the Grid modules in the control surface.

### 2 UI Events

UI Events can be triggered by interacting with the control elements on the Grid modules (e.g. turning a knob or pressing a button).

### 3 System Events

System Events are shared by all Grid modules and Each System Event serves a specific purpose (see the specific system event descriptions).

### 4 Event

An event describes a real-life interaction that triggers a reaction from a Grid module (e.g. plugging in the module triggers the init event).

### 5 Init Event

Each time a Page gets loaded (both when powering up and on page change) an Init Event will take place. Actions set to trigger on the Init Event will only trigger once on startup and on each page change. 

### 6 Button Event

When a Button or Encoder is pressed or released a Button Event will take place. Actions set to trigger on the Button Event will trigger on each button press and release.

### 7 Encoder Event

When an Encoder knob is turned, on each tick an Encoder Event will take place. Actions set to trigger on the Encoder Event will trigger on each click while rotating the Encoder knob.

### 9 Potentiometer Event

When a Potentiometer knob or fader is moved, a Potentiometer Event will take place on each value change.

### 8 Timer Event



### 10 Utility Event



### 11 MIDI RX Event



### 12 Copy All

Copy the contents of this Action Chain.

### 13 Overwrite

Overwrite the Action Chain under the currently active Event.

### 14 Cut

Cut the marked Action(s) to clipboard.

### 15 Copy

Copy the marked Action(s) to clipboard.

### 16 Paste

Paste the marked Action(s) from the clipboard to the cursor OR to the bottom of the Action Chain on the currently active Event.

### 17 Remove

Remove the marked Action(s) from the Action Chain permanently.

### 20 Export

Export the configuration of the currently active Control Element in lua language.

### 21 Actions (Action Chain?)

The Action Chain represents the set Actions pertaining to each trigger of the currently selected Control Element.

### 22 Control Element

A Control Element represents each individual button, knob or fader on a Grid module and are referred to by number from 0 to 15 from topdown left-to-right fashion.