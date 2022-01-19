---
layout: reference_index
title: Reference Manual
date: 2021-12-17
description: Learning material for using the Grid API.
group:  reference-manual
---

<script>

  import LinkCard from '$lib/mdsvex/components/_LinkCard.svelte';

</script>

  Grid controllers run <b>lua</b> scripts for their configurations. It's a turing complete system, meaning you can come up with unique workflow improvements utilizing Grid's tacktile controls. The API for configurations aka <i>grid_protocol</i> used by Grid modules can be read in this reference manual. 

  Lua is a script language, please <a href="https://www.lua.org/pil/contents.html" rel="external" target="_blank" class="pb-0.5 border-b-2 border-blue-500">check out the official lua page</a> for correct syntax.

<div class="w-full grid grid-rows-2 gap-2 pb-4">

  <LinkCard 
    imageUrl={'/icons/docs/grid_function().svg'} 
    light={true}
    link={{url: '/support/docs/reference-manual/grid-functions'}}
    subtitle={'Grid functions for calling actions.'}
    title={'Grid Functions'}
  />

  <LinkCard 
    imageUrl={'/icons/docs/control_element_functions.svg'} 
    light={true}
    link={{url: '/support/docs/reference-manual/control-element-functions'}}
    subtitle={'Control element function calls for button, encoder and potmeter events.'}
    title={'Control Element Functions'}
  />

</div>