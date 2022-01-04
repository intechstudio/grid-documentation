<script context="module">
  export async function load({fetch, page}){

    const data = await fetch(`/support/reference-manual/subjects`).then(res => res.json());

    return {
      status: 200,
      props: {
        posts: data.posts,
        fileStructure: data.fileStructure
      }
    }
  }



</script>

<script>
import Breadcrumb from "$lib/mdsvex/components/_Breadcrumb.svelte";

import Methods from "$lib/mdsvex/components/_Methods.svelte";
import PreviousAndNextContent from "$lib/mdsvex/components/_PreviousAndNextContent.svelte";

import TableOfFiles from "$lib/mdsvex/components/_TableOfFiles.svelte";
import { onMount } from "svelte";
import { paginationStore, sectionStore } from "../../../lib/stores/pagination.store";

export let posts;
export let fileStructure;

sectionStore.set(fileStructure);

</script>


<div class="container mx-auto w-full relative flex px-4 mb-8 min-h-screen">


  <div class="w-2/12 border-r-2 border-gray-500 sticky top-20 h-full px-4 py-8">
  
    <TableOfFiles files={fileStructure}/>

  </div>

  <div class="w-10/12 py-4">

    <slot/>

  </div>

</div>