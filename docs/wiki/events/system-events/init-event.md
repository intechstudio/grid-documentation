---
slug: init-event
title: Init Event
tags: [Event, System Event, Control Element, All modules]
---

*The Init Event is both a UI and System Event, but this article covers the System Event behavior and use-cases.*

This event is both a UI and System Event within the Grid logical structure.

This event runs when a re-initalization occours, such as the device is powered on after being powered off or the Pages are changed and a new Page is initialized.

Each init event corresponds to one control element/LED on the active Page and you have access to a system init event as well which you can treat as a +1 control element with no dedicated LEDs.

Init events are useful for defining a default configuration for a Page, where you can set the default values and modes for every time the Page is activated, for example setting the default LED colors for the given control element.