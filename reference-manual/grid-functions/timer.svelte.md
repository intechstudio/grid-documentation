---
title:      Timer
slug:       timer
layout:     reference_manual
category:   reference-manual
---


### timer_start | gtt
  
    - **How:** `timer_start(element_index[element_number], timer)`
        - element_index[element_number]: integer, ranging 0...15 or 0...11 if using PBF4
        - timer: integer, ranging 0...65535
    - **What:** This function starts a timer when called, when the timer runs out (defined by the `timer` parameter, given apx. in milliseconds) the Timer UI event will run.
    - **Example:** Using the code `timer_start(num, 500)` on a BU16 button will start the timer when the button is pressed down and the defined Action Chain under the Timer event on this Control Element will run after ~ 500 ms have passed. This is useful if you want to have effects timeout independent from physically triggered events, like a button being pushed.

### timer_stop | gtp
    
    - **How:** `timer_stop(element_index[element_number])` 
      
        - element_index[element_number]: integer, ranging 0...15 or 0...11 if using PBF4
        
    - **What:** When this function is called, the timer function (if there is one running) will stop immediately and the defined Action Chain will run under the Timer event.
    
    - **Example:** This function is useful as a break kind of function. Meaning you can immediately end a timer running when a certain condition is met like:
    
        ```lua
        
        ```
    
        

