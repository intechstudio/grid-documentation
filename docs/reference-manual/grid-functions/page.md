---
title:      Page
slug:       page
layout:     reference_manual    
category:   reference-manual
description: How to navigate and switch Pages within Code Blocks.
---


### page_load
- shortname: gpl
- **How:** `page_load(page_number)`
- page_number: integer, ranging 0...3 
- **What:** This function loads the page associated with the inputted `page_number` parameter.
- **Example:** Using the command `page_load(2)` will load the second page as set up in Grid Editor. You can also use the functions `page_next()`and`page_prev()` as described below to switch to the next and previous pages by using the commands `page_load(page_next())`and`page_load(page_prev())` respectively.

### page_next
- shortname: gpn
- **How:** `page_next()`
- **What:** This function returns the number of the next active page. Next in this case meaning the page with the number `X+1` where `X` is the number of the currently active page. If the currently active page is also the last one, this function will return `0`.
- **Example:** Writing `print(page_next())` into a Code Block.

### page_prev
- shortname: gpp
- **How:** `page_prev()`
- **What:**  This function returns the number of the previous active page. Previous in this case meaning the page with the number `X-1` where `X` is the number of the currently active page.<!-- or lastpage when the activepage is page 0-->
- **Example:**
