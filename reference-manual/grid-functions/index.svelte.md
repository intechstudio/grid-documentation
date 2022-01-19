---
title:      Grid Functions
slug:       grid-functions
layout:     reference_index      
category:   reference-manual
---

## Foreword

In Grid Editor 1.2 most commands and functions became programmable. Compared to previous versions this gives you extensive control over your modules functionality, but regrettably this change requires some learning on the side of the user.

This document should serve as a basic learning tool for programming your own Grid modules in lua language; but at the same time as a quick reference for functions when you're coding and want to look up definitions and basic behavior.

Keep in mind that there is much more here than the average user needs. The functions described here are to be used with the 'Code Block' blocks in Grid Editor. Most software functions are accessible without the need for using Code Blocks and advanced coding. Our aim is to deepen the pool of these premade Action Blocks so as to give more options to the people opposed to writing their own code.

However, in this document we have compiled lots of useful concepts and basic knowledge you need for starting to build your own Code Blocks in Grid Editor.

For ease of learning, we included examples you could just insert into your own Grid Editor and just try for yourself.

We recommend starting with basic naming, LEDs and local variables and then moving on to the modules chapters relevant to you. We also recommend learning the Print function for troubleshooting.

## Naming and syntax

In Grid Editor 1.2 all syntax uses the 'human readable' terms for functions (e.g. `led_color_min()` for led color minimum). In the following sections you will find descriptions and examples on using the new syntax in Code Blocks.

These descriptions will use the following format:

- human readable name | short name: *The name of a variable or function you can use in your Code Blocks.*
  - **How**: *'How to use', this gives you the definite parameter of the function, as used in the Grid Editor syntax.*
    - parameter: *Parameter descriptions detailing the type of variable to be used and the allowed variable ranges.*
  - **What**: *'What does it do?', detailing the function and its capabilities, often explaining some of the parameters used in 'How'.*
  - **Example**: *Giving you an example function with defined parameters you can use to learn and tweak stuff in your own Code Blocks.*

Sometimes there will be functions you can call with no parameters like this `self:function()`, in this case the function will return a value (called a getter function). Or when given parameter(s) like this `self:function(value)` it will usually set something to the given value (called a setter).

Usually these functions are called like this: `self:function()`.  If the function is able to work both as a setter or getter function, then both ways will be explained.

When starting to type any of the functions into a Code Block, available functions will show up for convenience.

## Disclaimers

### About this document

The following document is updated irregularly, usually when new functions are implemented. Because of this there might be some mistakes in this document that are yet to be fixed or changes to functions not yet updated. 

If you find any of these errors or mistakes, please don't hesitate to notify us either at support@intech.studio or in our official Discord server. 

### About mentions of timers in the manual

Timers in Grid are not exact milliseconds. The way time is calculated by the device is different from how we perceive it. Please consider this when using functions that have parameters alluding to time or timers.

This should change in the future and all implementations of timers and timed events will have more clear definitions.