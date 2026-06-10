---
slug: initialization
title: "More about: Initialization"
description: Saving only part of a configuration as a Preset.
tags: [Control Element, Event, Setup]
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';

import event_element_order from './img/event_orders.png'

When a configuration depends on global variables or various functions to be initialized, which are spread across elements and events, it is good to keep track of initialization order for elements and their events on Grid.

The order of Element initialization on Grid is as follows:
1. First, the System Element's event
2. Then all the Elements, from index 0 to the last one, each with their own setup and physically interactable events

Most modules are easy to follow, what each their element's index is and how the order of initialization is executed. On VSN1, VSN2 this is slightly more complex, as the elements are not ordered in a linear way. In this case, it's useful to keep in mind to check the default element names, and the default element indexes.

Even though on VSN1 the System Element is at index 14, the initialization still starts there.

The general rule of Event initialization under Elements:
1. First, the **Setup** event is initalized
2. Then the *phsyically interactable* events, such as  **Utility**, **Button**, **Encoder**, **Potmeter** and **Endless**

Action blocks, functions and variables declared under the Timer event are not initialized without explicit calling.

:::info
There is no guarantee that among the physically interactable events, the initialization order remains consistent. Use the **Setup** events or explicit triggers.
:::

<ImageLightbox imageSrc={event_element_order}  citation={'Element initialization order, starting with System Element'}/>

