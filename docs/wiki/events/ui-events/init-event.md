---
slug: init-event
title: Setup Event
tags: [Event, UI Event, Control Element, All modules]
description: "This event runs when a re-initalization occours, such as the device is powered on after being powered off or the Pages are changed and a new Page is initialized."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs queryString="tab">
  <TabItem value="About UI Setup Event" label="About UI Setup Event" default>

_The Setup Event is both a UI and System Event, but this article covers the UI Event behavior and use-cases._

This event is both a UI and System Event within the Grid logical structure.

This event runs when a re-initalization occurs, such as the device is powered on after being powered off or the Pages are changed and a new Page is initialized.

Each Setup event corresponds to one control element/LED on the active Page and you have access to a system Setup event as well which you can treat as a +1 control element with no dedicated LEDs.

Setup events are useful for defining a default configuration for a Page, where you can set the default values and modes for every time the Page is activated, for example setting the default LED colors for the given control element.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">

There is no Reference Manual Entry for this article.

  </TabItem>
</Tabs>
