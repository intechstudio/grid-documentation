---
slug: shapes
title: Shapes
tags: [Event, Screen, Control Element, VSN1]
description: "From dot to form — how to draw shapes on the VSN1 screen."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

# The Path of Shapes  
_A journey from point to presence_

On the path of drawing with the **VSN1 screen**, everything begins with a single pixel.  
From that, we discover the line, then structure, and eventually — form.

Each shape is drawn in **RGB color**, using values between `0` and `255` (8-bit per channel).  
Example: orange = `{249, 150, 0}`

Let us begin.

---

### 🪷 Pixel — the origin of all

```lua
self:draw_pixel(x, y, {r, g, b})
```

A single dot. The seed of form.  
Use it to set a single pixel at `(x, y)` with a color like `{255, 255, 255}` (white).

---

### ➰ Line — the connection

```lua
self:draw_line(x1, y1, x2, y2, {r, g, b})
```

The path from one point to another.  
A straight connection between two coordinates.

---

### 🟦 Rectangle — structure appears

```lua
self:draw_rectangle(x1, y1, x2, y2, {r, g, b})
```

Draws an outline of a rectangle.  
Use from `(x1, y1)` to `(x2, y2)` coordinates.

```lua
self:draw_rectangle_filled(x1, y1, x2, y2, {r, g, b})
```

A solid form — the rectangle filled with color.  
Use this to build panels, labels, or backgrounds.

---

### 🧘 Rounded Rectangle — soft and centered

```lua
self:draw_rectangle_rounded(x1, y1, x2, y2, radius, {r, g, b})
```

```lua
self:draw_rectangle_rounded_filled(x1, y1, x2, y2, radius, {r, g, b})
```

Add calmness to your corners.  
The `radius` defines how round the edges are (0–30 pixels).

---

### 🔺 Polygon — complexity with balance

```lua
self:draw_polygon({x1, x2, x3, ...}, {y1, y2, y3, ...}, {r, g, b})
```

Create any custom shape by listing coordinates.  
This draws only the outline.

```lua
self:draw_polygon_filled({x1, x2, x3, ...}, {y1, y2, y3, ...}, {r, g, b})
```

Fill the polygon to give it weight and presence.  
Perfect for triangles, stars, or wild experimental UI shapes.

**triangle:**
```lua
x = {30, 50, 10}
y = {10, 40, 40}
color = {255, 255, 0}
self:draw_polygon_filled(x,y,color)
```
**star:** 
```lua
x = {40, 48, 60, 50, 52, 40, 28, 30, 20, 32}
y= {20, 35, 35, 45, 60, 50, 60, 45, 35, 35}
color = {255, 215, 0}
self:draw_polygon_filled(x, y, color)
```

---

### ✨ Reminder

- All shapes use 8-bit RGB colors — values from `0` to `255`
- All coordinates are in pixels relative to the screen
- Always end your drawing with `self:draw_swap()` to make it visible!

---

That’s the journey — from a single pixel to fully formed visual elements.  
Now you can build your own interface layer by layer, shape by shape.

_“The path is drawn one pixel at a time.”_
