## Variables
### Locals
Declare and set the value of a Local Variables. | Local variables can be accessed only on the currenly active action chain.

- Name :: Name of the variable (e.g. Var1, my_variable etc)
- Value :: Number or expression to calculate the initial value of the variable.
- Commit :: Changes must be committed in order to take effect on the Grid.

### Member (self.)
Declare and set the value of a Member Variables. | Member variables can be accessed from any action chain on the current page using self.variablename or element[n].variablename syntax.

- Name :: Name of the variable (e.g. Var1, my_variable etc)
- Value :: Number or expression to calculate the initial value of the variable.
- Commit :: Changes must be committed in order to take effect on the Grid.
### Global
Declare and set the value of a Global Variables. | Global variables can be accessed from any action chain on the module.

- Name :: Name of the variable (e.g. Var1, my_variable etc)
- Value :: Number or expression to calculate the initial value of the variable.
- Commit :: Changes must be committed in order to take effect on the Grid.

## LED
### Color
Set the base color of an LED on the module. | The base color is displayed when the given LED's intensity is set to the maximum value of 255.

- LED Number :: Physical indentifier of the LED. Valid values are 0...15 (0...11 on the PBF4)
- Layer :: Identifier of the layer to be modified. Valid values are 1 or 2, number or local variable. (By default Layer1 is used for Button and Potmeter events while Layer2 is used by the Encoder event)
- Red :: Red component of the LED's base color. Valid values are 0...255, number or local variable. 
- Green :: Green component of the LED's base color. Valid values are 0...255, number or local variable. 
- Blue :: Blue component of the LED's base color. Valid values are 0...255, number or local variable. 
- Beautify ? The beautify feature makes the LED display a dim version of the base color even when the intensity value is set to 0.
### Intensity
Set the intensity of an LED on the module.
- LED Number :: Physical indentifier of the LED. Valid values are 0...15 (0...11 on the PBF4)
- Layer :: Identifier of the layer to be modified. Valid values are 1 or 2, number or local variable. (By default Layer1 is used for Button and Potmeter events while Layer2 is used by the Encoder event)
- Intensity :: The intensity parameter sets the given layer's color proportional to the base color. Valid values are 0...255, number or local variable. 
## Midi
### Midi
Send a midi message to the host device.
- Channel :: Set the MIDI channel of the message. Valid values are 0...15, number or local variable. 
- Command :: Set the MIDI command of the message. Valid values are 128...255, number or local variable. 
- Parameter 1 :: Set the MIDI parameter 1 (note or control number) of the message. Valid values are 0...127, number or local variable. 
- Parameter 2 :: Set the MIDI parameter 1 (velocity or value) of the message. Valid values are 0...127, number or local variable. 
## Keyboard
### Keyboard
Send a combination of keyboard messages to the host device.

## Mouse
### Button
Send a button change messages to the host device.
### Move
Send a mouse move or scroll wheel message to the host device.

## Element Settings
### Button
Set the button mode to Momentary, Toggle or n-step.
### Encoder
Set the velocity sensitivity and the Absolute/Relative mode of the encoder.
### Potmeter
Set the effective digital resolution of the potenciometer.

## Condition
### If
Create a conditional action branch. | Order the conditional blocks can be: If [Elseif] ... [Elseif] [Else] End
### Elseif
Create a conditional action branch. | Order the conditional blocks can be: If [Elseif] ... [Elseif] [Else] End
### Else
Create a conditional action branch. | Order the conditional blocks can be: If [Elseif] ... [Elseif] [Else] End
### End
Create a conditional action branch. | Order the conditional blocks can be: If [Elseif] ... [Elseif] [Else] End

## Codeblock
### Codeblock
Use the Codeblock to create a custom action block that can run any Lua code.

## Timer
### Timer Start
Start the timer of the given control element. | Once the given timeout period is passed, the timer event of the given controll element will be triggered.
### Timer Stop
Stop the timer of the given control element. | The timer event will not be triggered until the timer is restarted.
