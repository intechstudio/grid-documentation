---
slug: timer-event
title: Timer Event
tags: [Event, System Event, Workflow]
---

*This article is about the System Timer Event specifically, for for better understanding it's recommended to read the generic Timer Event article first [here](../ui-events/timer-event)*.

The Timer Event, located under System Events is even more special than their UI Event type counterparts, since it has no Control Element Specific trigger by default. They can still be triggered by any kind of Timer Start Action Block (or the function), from anywhere by calling timer number X, where X is the number of control elements you have on the module.

While in practice this Event differs only in name to the other type of Timer Events, when creating our own Control Surface, it's generally useful to have a timer logically decoupled from Control Elements and their baggage.

For example, when creating a clocked event on the module, let's say for a sequencer, you could use any of the UI Timer Events as clock, but you might need those for Control Element specific configuration. In this case you can just use this +1 timer to clock the sequencer and not have to worry about the Control Element-specific configuraions.
