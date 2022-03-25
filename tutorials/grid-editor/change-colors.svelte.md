---
layout:   reference_manual
title:    Change Colors
slug:     change-colors
category: tutorials
description: How to customize LED color.
---

## Set custom color

Under *init* event, when the current page is initialized and loaded, the LED colors are assigned to each control element.

## Change the default settings in Locals

You can set the LED colors in the *LED Color* action. 
By default the LED Color action uses variables to calculate the red-green-blue values.
These are defined in the Locals action block. Open it up, and change the **red**, **gre** and **blu** values to 255, 0, 0, for a full red color.
![](https://intech.studio/_cms/2021-07-13/change_color.gif)

## Change the LED color explicitly

Open the LED color action, and use the color slider to change the LED color. You can use the randomize button as well to give a random color.