---
slug: page
title: Page
tags: [Page, Logic, Workflow]
---

A Page is the user facing 'memory slot' of the Grid hardware.

Pages are fully defined configurations stored in permanent memory on the Grid modules.

Each Grid module has 4 of these individual 'memory slots' for storing configuration informationwe call them Pages in Grid terminology.

Each one of these Pages has a different setting by default, but you can change them however you like.

:::tip Creating a workspace
Giving each of the Pages on a module its own designated job, e.g. Page 1 controlling the filter parameters of a synth, while Page 2 acting as a mixer on the master track, is a good way to organize your Grid-based control surface logically.
:::

Pressing the utility button on the side of the module changes the active Page by calling the `page_load(page_next())` nested functions, which first checks the index number of the next Page (0-3) and the loads it. This will switch to the next Page and [initialize its Events](/docs/wiki/events/ui-events/init-event.md). You can check this behavior by looking at the default configuration of your module under `System Events/utility`.

