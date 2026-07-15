---
title: LCDElement
slug: lcd-control-element
layout: reference_manual
category: reference-manual
description: How to draw to a Control Element's LCD screen.
---

- supers: [Element](element.md)
---

> In the Grid editor, when editing code for a LCDElement, the variables `self`, `element`, and `ele` are automatically typed as LCDElement. This means you can call these functions directly on `self`:
>
> ```lua
> self:lcd_draw()     -- on the current element
> element[1]:lcd_draw() -- on a specific element from the array
> ```

### `LCDElement:draw_swap`
---
Updates the screen with the contents of the background buffer.

```lua
LCDElement:draw_swap()
```










### `LCDElement:draw_pixel`
---
Draws a pixel at (x, y) with the specified color.

```lua
LCDElement:draw_pixel(
  x: integer,
  y: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x</code> — X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y</code> — Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_line`
---
Draws a line between two points.

```lua
LCDElement:draw_line(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x1</code> — Start X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y1</code> — Start Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x2</code> — End X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y2</code> — End Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_rectangle`
---
Draws a rectangle outline between two corner points.

```lua
LCDElement:draw_rectangle(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x1</code> — Top-left X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y1</code> — Top-left Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x2</code> — Bottom-right X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y2</code> — Bottom-right Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_rectangle_filled`
---
Draws a filled rectangle between two corner points.

```lua
LCDElement:draw_rectangle_filled(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x1</code> — Top-left X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y1</code> — Top-left Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x2</code> — Bottom-right X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y2</code> — Bottom-right Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_rectangle_rounded`
---
Draws a rounded rectangle outline between two corner points.

```lua
LCDElement:draw_rectangle_rounded(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  radius: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x1</code> — Top-left X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y1</code> — Top-left Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x2</code> — Bottom-right X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y2</code> — Bottom-right Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>radius</code> — Corner radius in pixels</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_rectangle_rounded_filled`
---
Draws a filled rounded rectangle between two corner points.

```lua
LCDElement:draw_rectangle_rounded_filled(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  radius: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x1</code> — Top-left X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y1</code> — Top-left Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x2</code> — Bottom-right X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y2</code> — Bottom-right Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>radius</code> — Corner radius in pixels</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_polygon`
---
Draws a polygon outline using coordinate arrays.

```lua
LCDElement:draw_polygon(
  xs: integer[],
  ys: integer[],
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>xs</code> — Array of X coordinates &#123;x1, x2, x3, ...&#125;</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>ys</code> — Array of Y coordinates &#123;y1, y2, y3, ...&#125;</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_polygon_filled`
---
Draws a filled polygon using coordinate arrays.

```lua
LCDElement:draw_polygon_filled(
  xs: integer[],
  ys: integer[],
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>xs</code> — Array of X coordinates &#123;x1, x2, x3, ...&#125;</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>ys</code> — Array of Y coordinates &#123;y1, y2, y3, ...&#125;</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_text`
---
Draws text at the specified position.

```lua
LCDElement:draw_text(
  text: string,
  x: integer,
  y: integer,
  size: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>text</code> — Text to draw</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x</code> — X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y</code> — Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>size</code> — Font size</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_text_fast`
---
Draws text at the specified position using fast rendering.

```lua
LCDElement:draw_text_fast(
  text: string,
  x: integer,
  y: integer,
  size: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>text</code> — Text to draw</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x</code> — X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y</code> — Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>size</code> — Font size</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_area_filled`
---
Fills an area with a solid color (no alpha blending).

```lua
LCDElement:draw_area_filled(
  x1: integer,
  y1: integer,
  x2: integer,
  y2: integer,
  color: integer[]
)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x1</code> — Top-left X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y1</code> — Top-left Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>x2</code> — Bottom-right X coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>y2</code> — Bottom-right Y coordinate</div>

<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>color</code> — RGB color as &#123;r, g, b&#125; with 8-bit channels (0–255)</div>










### `LCDElement:draw_demo`
---
Draws the n-th iteration of a built-in demo animation.

```lua
LCDElement:draw_demo(n: integer)
```
<div class="doc-tag-line"><span class="doc-tag doc-tag--param">@param</span> <code>n</code> — Demo iteration number</div>










### `LCDElement:get_render_time`
---
Returns the time spent rendering between the last two swaps, in microseconds.

```lua
LCDElement:get_render_time(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>microseconds</code> — Render time</div>










### `LCDElement:screen_index`
---
Returns the screen index used by low-level global GUI APIs.

```lua
LCDElement:screen_index(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>screen_index</code> — Screen index for use with gui_draw_* functions</div>










### `LCDElement:screen_width`
---
Returns the screen width in pixels.

```lua
LCDElement:screen_width(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>width</code> — Screen width</div>










### `LCDElement:screen_height`
---
Returns the screen height in pixels.

```lua
LCDElement:screen_height(): integer
```

<div class="doc-tag-line doc-tag-line--return"><span class="doc-tag doc-tag--return">@return</span> <code>height</code> — Screen height</div>













