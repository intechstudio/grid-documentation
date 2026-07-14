---
title: LCD
slug: lcd
layout: reference_manual
category: reference-manual
description: How to draw to a Control Element's LCD screen.
---

- supers: Element










---

> In the Grid editor, when editing code for a LCDElement, the variables `self`, `element`, and `ele` are automatically typed as LCDElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:lcd_draw()     -- on the current element
> element[1]:lcd_draw() -- on a specific element from the array
> ```

## Functions
---

### self:draw_swap
---
```lua
function self:draw_swap()
```





Updates the screen with the contents of the background buffer.








### self:draw_pixel
---
```lua
function self:draw_pixel(
  x: integer,
  y: integer,
  color: integer[]
)
```
@param `x` - X coordinate

@param `y` - Y coordinate

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws a pixel at (x, y) with the specified color.








### self:draw_line
---
```lua
function self:draw_line(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  color: integer[]
)
```
@param `x1` - Start X coordinate

@param `y1` - Start Y coordinate

@param `x2` - End X coordinate

@param `y2` - End Y coordinate

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws a line between two points.








### self:draw_rectangle
---
```lua
function self:draw_rectangle(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  color: integer[]
)
```
@param `x1` - Top-left X coordinate

@param `y1` - Top-left Y coordinate

@param `x2` - Bottom-right X coordinate

@param `y2` - Bottom-right Y coordinate

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws a rectangle outline between two corner points.








### self:draw_rectangle_filled
---
```lua
function self:draw_rectangle_filled(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  color: integer[]
)
```
@param `x1` - Top-left X coordinate

@param `y1` - Top-left Y coordinate

@param `x2` - Bottom-right X coordinate

@param `y2` - Bottom-right Y coordinate

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws a filled rectangle between two corner points.








### self:draw_rectangle_rounded
---
```lua
function self:draw_rectangle_rounded(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  radius: integer,
  color: integer[]
)
```
@param `x1` - Top-left X coordinate

@param `y1` - Top-left Y coordinate

@param `x2` - Bottom-right X coordinate

@param `y2` - Bottom-right Y coordinate

@param `radius` - Corner radius in pixels

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws a rounded rectangle outline between two corner points.








### self:draw_rectangle_rounded_filled
---
```lua
function self:draw_rectangle_rounded_filled(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  radius: integer,
  color: integer[]
)
```
@param `x1` - Top-left X coordinate

@param `y1` - Top-left Y coordinate

@param `x2` - Bottom-right X coordinate

@param `y2` - Bottom-right Y coordinate

@param `radius` - Corner radius in pixels

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws a filled rounded rectangle between two corner points.








### self:draw_polygon
---
```lua
function self:draw_polygon(
  xs: integer[],
  ys: integer[],
  color: integer[]
)
```
@param `xs` - Array of X coordinates {x1, x2, x3, ...}

@param `ys` - Array of Y coordinates {y1, y2, y3, ...}

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws a polygon outline using coordinate arrays.








### self:draw_polygon_filled
---
```lua
function self:draw_polygon_filled(
  xs: integer[],
  ys: integer[],
  color: integer[]
)
```
@param `xs` - Array of X coordinates {x1, x2, x3, ...}

@param `ys` - Array of Y coordinates {y1, y2, y3, ...}

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws a filled polygon using coordinate arrays.








### self:draw_text
---
```lua
function self:draw_text(
  text: string,
  x: integer,
  y: integer,
  size: integer,
  color: integer[]
)
```
@param `text` - Text to draw

@param `x` - X coordinate

@param `y` - Y coordinate

@param `size` - Font size

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws text at the specified position.








### self:draw_text_fast
---
```lua
function self:draw_text_fast(
  text: string,
  x: integer,
  y: integer,
  size: integer,
  color: integer[]
)
```
@param `text` - Text to draw

@param `x` - X coordinate

@param `y` - Y coordinate

@param `size` - Font size

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Draws text at the specified position using fast rendering.








### self:draw_area_filled
---
```lua
function self:draw_area_filled(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  color: integer[]
)
```
@param `x1` - Top-left X coordinate

@param `y1` - Top-left Y coordinate

@param `x2` - Bottom-right X coordinate

@param `y2` - Bottom-right Y coordinate

@param `color` - RGB color as {r, g, b} with 8-bit channels (0–255)






Fills an area with a solid color (no alpha blending).








### self:draw_demo
---
```lua
function self:draw_demo(n: integer)
```
@param `n` - Demo iteration number






Draws the n-th iteration of a built-in demo animation.








### self:get_render_time
---
```lua
function self:get_render_time() -> microseconds integer
```

@return `microseconds` - Render time





Returns the time spent rendering between the last two swaps, in microseconds.








### self:screen_index
---
```lua
function self:screen_index() -> screen_index integer
```

@return `screen_index` - Screen index for use with gui_draw_* functions





Returns the screen index used by low-level global GUI APIs.








### self:screen_width
---
```lua
function self:screen_width() -> width integer
```

@return `width` - Screen width





Returns the screen width in pixels.








### self:screen_height
---
```lua
function self:screen_height() -> height integer
```

@return `height` - Screen height





Returns the screen height in pixels.











