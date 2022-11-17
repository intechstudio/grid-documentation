---
slug: timer-start
title: Timer Start
tags: [Action Block, Timer, Dual Action, Workflow]
---

The Timer Start Block allows you to create a timed trigger for the Timer Event. These Blocks can be used for both the global and the ui versions of the Timer Event.

The parameters of this Block are rather simple:
- `element number` sets which Timer Event the timer will trigger after the clock runs out
- `time` sets the clock for the timer in miliseconds

Timers can be ended early with the use of a [timer stop](../timer/timer-stop) action.

For more about how a timer works check out the [Timer Events](/docs/wiki/events/ui-events/timer-event.mdx) in the Events section of the wiki.

With a timer you can create cyclical timers that trigger themselves, creating pseudo clock source for your Grid configurations.
