---
layout:   reference_manual
title:    LED Beautify
slug:     change-led-beautify-mode
category: tutorials
---

## Set the minimum LED brightness

By default, each encoder control element has a minimum LED brightness for both *encoder* and *button* events. This is a *nicify* feature, where the module's LEDs will shine even if turned down. Also an encoder control element has two LED color layers, where the two layers are mixed if used together. For example if you push the encoder while turned up, the two colors and their intensity will be combined to give feedback about the interaction. 

To set the minimum to 0 instead of a minimum nicified value, call the led_color_min() function on the *init* event. The code below will set the minimum led color to none on layer 2, which is the led color layer of the encoder rotation.

`<?lua --[[@cb]] led_color_min(num,2,0,0,0) ?>`

If you want to zero out both the encoder and button events default color, call the led_color_min() function on both layers, like seen on the image below.
![led color min](https://intech.studio/_cms/2021-07-04/led_min.png)
