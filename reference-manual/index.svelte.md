---
layout: reference_manual
title: Reference Manual
date: 2021-12-17
description: Learning material for using the Grid API.
---

<script>
  import LinkCard from '$lib/mdsvex/components/_LinkCard.svelte';
  import LinkPage from '$lib/mdsvex/components/_LinkPage.svelte';
</script>


<div class="w-full grid grid-rows-3 gap-2 pb-4">
  <LinkCard 
    imageUrl={''} 
    light={true}
    link={{url: '/support/reference-manual/grid-functions'}}
    subtitle={'Grid functions for calling actions.'}
    title={'Grid Functions'}
  />

  <LinkCard 
    imageUrl={''} 
    light={true}
    link={{url: '/support/reference-manual/control-element-functions'}}
    subtitle={'Control element function calls for button, encoder and potmeter,'}
    title={'Control Element Functions'}
  />

</div>