## Variables
### Locals
Declare and set the value of a Local Variables. | Local variables can be accessed only on the currenly active action chain.
### Member (self.)
Declare and set the value of a Member Variables. | Member variables can be accessed from any action chain on the current page using self.variablename or element[n].variablename syntax.
### Global
Declare and set the value of a Global Variables. | Global variables can be accessed from any action chain on the module.

## LED
### Color
Set the base color of an LED on the module. | The base color is displayed when the given LED's intensity is set to the maximum value of 255.
### Intensity
Set the intensity of an LED on the module.

## Midi
### Midi
Send a midi message to the host device.

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
