import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import tek21 from './img/tek21.png'
import tek22 from './img/tek22.png'
import reschange from './img/reschange.png'

### TEK2 Redefining Control with Endless Rotary Potentiometers

#### What are Endless Rotary Potentiometers?

- Endless Rotary Potentiometers offer precise and continuous rotational control.
- Enable smoother and more intuitive manipulation of parameters.
- They feature push-button functionality for additional actions or functions with a simple press.

<ImageLightbox imageSrc={tek22} style={{width:450+'px'}}/>


#### Endless Encoder with Two Big Steel Knobs:
- Features two large steel knobs that provide a tactile and ergonomic feel.
- Designed to offer a comfortable grip and effortless rotation.
- Allows for smooth and precise adjustments with just one finger.
- Ensures durability and reliability, built for rigorous usage and long-term performance.


#### Differences between Encoders and Normal Potentiometers:
- Range of Motion: Encoders offer infinite rotation, while normal potentiometers have fixed endpoints.
- Digital vs. Analog Output: Encoders provide digital signals, while normal potentiometers offer analog output.
- Precision and Resolution: Encoders offer stepped rotation for precise adjustments, whereas potentiometers provide smooth and fine control.

### Let's break down the factory preset with tips and tricks

Endless Potentiometers come factory-set to output MIDI data at 14 bits, spanning a range of 0 to 16383, allowing for precise control of parameters like volume and panning.   
However, for compatibility with software and synthesizers limited to 7-bit MIDI (0-127), you can employ the command 'self:endless_max(127)' to adjust the output accordingly.

<ImageLightbox imageSrc={reschange} style={{width:800+'px'}} citation={'1. Code Block with "self:endless_max(127)" 2. Change 14bit MIDI to MIDI"'}/>

