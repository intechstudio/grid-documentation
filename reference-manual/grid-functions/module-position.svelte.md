---
title:      Module Position
slug:       module-position
layout:     reference_manual   
category:   reference-manual
description: How to utilize module positioning in Code Blocks.
---

<!-- egy kép többet ér száz szónál ezért majd rakunk ide! -->

### module_position_x
  - shortname: gmx
  - **How:** `module_position_x()`
  - **What:** Returns the value of module position on the x axis. In the zero position there is the module connected to the host computer.<!-- x a left-right-->
  - **Example:**

### module_position_y
  - shortname: gmy
  - **How:** `module_position_y()`<!-- y a up-down-->
  - **What:** Returns the value of module position on the y axis. In the zero position there is the module connected to the host computer.
  - **Example:**

### module_rotation
  - shortname: gmr
  - **How:** `module_rotation()` <!-- 0 usb side up, 1: -90°2: -180° stb-->
  - **What:** Returns the value of module rotation compared to the module connected by a USB cable to the host computer. The values returned are between `0` and `3`, with `0` representing the same module rotation as the connected module.
  - **Example:**
