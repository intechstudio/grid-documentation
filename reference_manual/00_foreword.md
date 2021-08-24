### Foreword

In Grid Editor 1.2 most commands and functions become programmable. Compared to previous versions this gives you extensive control over your modules functionality, but regrettably this change requires some learning on the side of the user.

Keep in mind that there is much more here than the average user needs. All previous software functions are still accessible within Grid Editor 1.2 in a traditional interface as well, so you can set up everything as you could earlier with no coding needed.

In this document we have compiled all useful concepts and basic knowledge you need for unlocking the potential this new update brings to the table. 

Our aim was to make this document easy to understand and as transparent as possible, including examples you could just insert into your own Grid Editor and just try for yourself.

We recommend starting with basic naming, LEDs and local variables and then moving on to the modules chapters relevant to you. We also recommend learning the Print function for troubleshooting.

### Naming and syntax

In Grid Editor 1.2 all syntax uses the 'human readable' terms for functions (e.g. `led_color_min()` for led color minimum). In the following sections you will find descriptions and examples on using the new syntax in Code Blocks.

These descriptions will use the following format:

- human readable name | short name: *The name of a variable or function you can use in your Code Blocks.*
  - **How**: *'How to use', this gives you the definite parameter of the function, as used in the Grid Editor syntax.*
  - **What**: *'What does it do?', detailing the function and its capabilities, often explaining some of the parameters used in 'How'.*
  - **Example**: *Giving you an example function with defined parameters you can use to learn and tweak stuff in your own Code Blocks.*

Sometimes there will be functions you can call with no parameters like this `self:function()`, in this case the function will return a value (called a getter function). Or when given parameter(s) like this `self:function(value)` it will usually set something to the given value (called a setter).
Usually these functions are called like this: `self:function()`.  If the function is able to work both as a setter or getter function, then both ways will be explained.