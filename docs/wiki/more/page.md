---
slug: page
title: "More about: Pages"
tags: [Page, Logic, Workflow]
description: A Page is the user facing 'memory slot' of the Grid hardware.
---

A Page is the user facing 'memory slot' of the Grid hardware.

Pages are fully defined configurations stored in permanent memory on the Grid modules.

Each Grid module has 4 of these individual Pages for storing configuration information.

Here are some tips about creatig Pages for you

Each one of these Pages has a different setting by default, but you can change them however you like.

:::tip Creating a workspace
Giving each of the Pages on a module its own designated job, e.g. Page 1 controlling the filter parameters of a synth, while Page 2 acting as a mixer on the master track, is a good way to organize your Grid-based control surface logically.
:::

Pressing the utility button on the side of the module changes the active Page by calling the `page_load(page_next())` nested functions, which first checks the index number of the next Page (0-3) and the loads it. This will switch to the next Page and [initialize its Events](/docs/wiki/events/ui-events/init-event.md). You can check this behavior by looking at the default configuration of your module under `System Events/utility`.


You can also customize this behavior to your liking, here are some examples by Kristof: 


<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iframe width="100%" height="315" style={{maxWidth:'560px'}} src="https://www.youtube.com/embed/pmo0YP_9uLE?list=PLtMbdpAm17zeux7Kf1Cch5f4HQh18dEDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


