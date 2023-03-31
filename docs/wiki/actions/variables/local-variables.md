---
slug: local-variables
title: Local Variables
tags: [Action Block, Variables, Logic, Workflow]
description: "Local Variables Block allows you to define Local Variables in a nice Block format, instead of creating them in the Code Block."
---

import ImageLightbox from '@site/src/general-layout-components/ImageLightbox';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

<Tabs>
  <TabItem value="About Local Variables" label="About Local Variables" default>



Local Variables Block allows you to define Local Variables in a nice Block format, instead of creating them in the Code Block.

For a quick explanation for those who are not familiar with the concept of a variable, variables are "memory slots" that do one thing: store a value. That's it.

Variable types in the Grid ecosystem are differentiated by how accessible they are by other parts of Grid.

Local Variables in the Grid ecosystem are such variables that are able to be accessed by **only the Action Chain they are defined on**, **and exist for only the runtime of the Action Chain**. It's a lot more limited than the other two types of variables, and it still has the two big limitations applying to it that are the basis of using variables in Grid. All variables within Grid are stored in a Page per Module basis, meaning that:

:::caution Variable Accessibility
Variables created on a now inactive Page are **not** accessible on the currently active Page!
Variables created on one module, are **not** accessible from other modules.
:::

Local Variables are very useful for creating  variables that are only needed by the Event and underlying Action Chain for functioning. For example the default Grid configurations use a good amount of these variables to store and use the values of various functions for UI Events.

One of these is the often used `val`, which is usually defined as being equal to the `controlelement_value()` function. This way, whenever a function or Block asks for the current value of the Control Element, you can just use `val` Local Variable for this purpose instead of calling the above mentioned function each time. Doing this saves characters and makes configurations more structured.

In Grid syntax local variables have no prefix to them, same as global ones and they look like this: `lvar=0`.


  </TabItem>
  <TabItem value="Reference Manual Entry" label="Reference Manual Entry">


There is no Reference Manual Entry for this article.



  </TabItem>
</Tabs>


