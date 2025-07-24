---
sidebar_position: 0
slug: draw-basic
title: Draw Basics
tags: [Event, System Event, Control Element, VSN1]
description: "Basic introduction how is it works"
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';


# Drawing with the VSN1 Screen

You can draw shapes and text on the VSN1 screen using the **Screen Draw** element. Screen size is 320px*240px and drawing happens at a fast refresh rate (up to 20fps), so it's great for updating values or displaying information in real time.

## How Drawing Works

To draw anything on the screen, you use functions like `draw_rectangle_filled()` or `draw_text_fast()`.

However, drawing commands only prepare the content in a background buffer. To show the result on the actual screen, **you must call**:

```lua
self:draw_swap()
```

### Why you need draw_swap()
After using any draw_ function, you need to tell the system when to actually update the screen. That’s what `self:draw_swap()` does — it swaps the buffer and pushes the visuals to the display.

Why is it useful to call `draw_swap()` separately?

Because you can decide exactly when to update. For example, if you’re using an if-else branch, you can draw only the part you want and skip unnecessary updates. This makes your drawing logic more flexible and efficient.

### Always use self: before drawing
Before any drawing function, always use self: so it knows which screen you're targeting.
This is important if you have multiple screens in your setup — or later when we support two screens in one module. If you forget self:, nothing will be drawn because the system doesn't know where to draw.

## Coordinates and Colors

When you draw a shape or text, you usually need to provide:

- **X and Y coordinates** — where to draw it on the screen  
- **Size or dimensions** — for example: width and height in pixels  
- **Color** — in RGB format

### Coordinates
Most drawing functions use:
- `x` and `y` for the top-left corner or starting point
- `width` and `height` or an end point (`x2`, `y2`) depending on the shape

For example:
```lua
self:draw_rectangle_filled(10, 5, 40, 20, {0, 0, 0})
```
Draws a filled rectangle at position (10, 5), with a width of 40 pixels and height of 20 pixels.

### Colors (RGB Format)
All drawing functions use RGB color values in the format:

{red, green, blue}
Each value is from 0 to 255 (8-bit color per channel).
Examples:

Red: {255, 0, 0}

Green: {0, 255, 0}

Blue: {0, 0, 255}

White: {255, 255, 255}

Black: {0, 0, 0}

You can customize colors for text, shapes, or backgrounds however you like.


## A Basic Example — Draw the Endless Potmeter Value
This is a simple example that clears the screen, writes the value of an Endless encoder, and updates the screen:
``` 
self:draw_rectangle_filled(0, 0, 23 * 5, 22, {0, 0, 0})
self:draw_text_fast(element[8]:endless_value(), 0, 0, 22, {255, 22, 22})
self:draw_swap() 
```

### What it does:
`draw_rectangle_filled()` is used to always clear the background, so old numbers don’t stay on the screen.
Try deleting this line and see what happens — the numbers won’t be fully cleared when changing from a 5-digit to a 1-digit number.

`draw_text_fast()` draws the current value of the Endless encoder.

`draw_swap()` updates the screen with everything you just drew.