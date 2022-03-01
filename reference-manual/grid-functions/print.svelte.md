---
title:      Print
slug:       print
layout:     reference_manual
category:   reference-manual
description: How to use the Print function for troubleshooting.
---


### print
  - **How:** `print(function())` or `print("string")`<!-- only return value of functions!!! -->
  - **What:** The `print` function outputs the values of functions between the parentheses brackets in the debugger window, in the order you asked for them. If you're trying to print out multiple values you have to use `,` as a divider. 
    When using the `print()` function with a `"string"` parameter, the function will output the `string` value between the parentheses to the debug window within Editor.
    When using the `print()` function with a `function() ` parameter, the `print()` function will output the value of the function set as the parameter if the function has a valid return value.
  - **Example:** Inputting the `print(self:button_value())` in the Code Block will print each value change on a button press into the debugger window on the left.

    For troubleshooting purposes, using any kind of string in the print function can indicate for you if a programmed Action Chain is happening correctly. For example setting two different print functions such as `print("TRUE")` and `print("FALSE")` to the two parts of an  `if` and `else` function fork will help you check if the correct condition plays out when the event plays.
