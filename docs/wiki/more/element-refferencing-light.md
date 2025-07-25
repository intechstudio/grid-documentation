---
title: "More about: Variables (Simplified)"
slug: element-referencing-simple
description: A lightweight guide to variables and functions in Grid.
tags: [Logic, Local, Global, Self, Function, Variables]
---

# More about: Variables and Functions

In the Grid Editor, **variables and functions** help you store and use data.  
They always have a **name**, and they live in different places depending on how you create them.

---

## 🔢 Types of Variables

There are **3 kinds of variables** in Grid:

- **Local** – for one Event only  
- **Self** – for one Control Element  
- **Global** – shared across the whole page

Each one is created differently and used with different naming styles.

---

### 🟢 Local Variables

- Exist only during a single Event (e.g. Setup, Timer)
- Disappear after the Event ends
- No prefix, just use the name

**Example:**
```lua
myvar = 5
```

**Tip:** Define them in the **Locals Block** of the Event where you use them.

---

### 🟠 Self Variables

- Stored inside the Control Element
- Stay in memory and can be reused anytime
- Use `self.` or `element[x].` to access

**Example:**
```lua
self.counter = 0
```

**Tip:** Define in the **Self Block** of the Control Element's Setup Event.

---

### 🔵 Global Variables

- Shared across the whole page
- Use just the name like locals, but they last longer

**Example:**
```lua
gvalue = 100
```

**Tip:** Create in the **Global Block** of the **System Setup Event** to keep things organized.

---

## ⚙️ Functions

Functions have two parts:
- A **prefix** (who runs it)
- A **suffix** (what it does)

### Prefixes

- `self:` → runs on this Control Element  
- `element[x]:` → runs on Control Element `x`  
- *(none)* → global function

### Suffix

The name of the function, like `button_value()` or `midi_send()`

**Examples:**
```lua
self:element_index()
element[3]:button_value()
module_rotation()
```

---

## ✅ Quick Syntax Rules

| Type      | Prefix      | Symbol | Ending   |
|-----------|-------------|--------|----------|
| Variable  | `self.`     | `.`    | No `()`  |
| Function  | `self:`     | `:`    | Yes `()` |

---

## ⚠️ Special Cases

- **LED functions** use no prefix. They take the LED number inside `()`.
- **Lua functions** like `math.random()` are from Lua itself.
- Other exceptions are noted in the [Reference Manual](/docs/reference-manual/introduction.md).

---
