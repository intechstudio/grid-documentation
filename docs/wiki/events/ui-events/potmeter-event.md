---
slug: potmeter-event
title: Potentiometer Event
tags: [Event, UI Event, Control Element, PO16, PBF4, EF44]
description: "The Potmeter Event is a UI Event that's triggered when a potentiometer is turned or a slide potentiometer is moved. Each potentiometer on the module has one of these Events, and by default they control values which determine the LED light intensities and values used for MIDI messages."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Potmeter Event" label="About Potmeter Event" default>




The Potmeter Event is a UI Event that's triggered when a potentiometer is turned or a slide potentiometer is moved. Each potentiometer on the module has one of these Events, and by default they control values which determine the LED light intensities and values used for MIDI messages.

Potentiometers send continuous, linear, analog signal to Grid as they are turned. These then get translated into values and stored in memory. This way Grid always associates the so-called 'state' of a potentiometer (how much is it turned) with a discrete value.

You can set how this value is defined by using a Potentiometer Mode Action Block, you can learn more about these **here**, but generally Mode-type Action Blocks change how user interaction turns into values in Grid.

  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


There is no Reference Manual Entry for this article.



  </TabItem>
</Tabs>

