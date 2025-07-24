---
slug: text
title: Text
tags: [Event, System Event, Control Element, VSN1]
description: "Draw text to the screen"
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

### Draw Text

Texts is drawn in **RGB color**, using values between `0` and `255` (8-bit per channel).  
Example: orange = `{249, 150, 0}`


With these functions you can draw text to the screen. This is a really useful feature that enables you to display the current values of an element—e.g. the current value of an endless encoder.

```lua
lcd:draw_text_fast('text', x, y, size, {r, g, b})
```
Draws the specified text at `(x, y)` with the specified font size and 8-bit color channels. Size in pixels

```lua
draw_text('text', x, y, size, {r, g, b})
```
Draws the specified text at `(x, y)` with the specified font size and 8-bit color channels. Size in pixels
