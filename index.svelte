<script>
  import LinkCard from "$lib/mdsvex/components/_LinkCard.svelte";
</script>

<div class="mx-auto container max-w-screen-lg flex flex-col">

  <div class="my-10">

    <LinkCard 
      title={'Getting Started'} 
      imageUrl={'/icons/docs/getting_started_full.svg'} 
      link={{url: '/support/docs/getting-started', target: '', rel: 'prefetch'}}
      subtitle={'Software for your Grid module · First startup · Next steps'}
    />

    <LinkCard
      title={'Reference Manual'} 
      imageUrl={'/icons/docs/ref_manual.svg'} 
      link={{url: '/support/docs/reference-manual', target: '', rel: 'prefetch'}}
      subtitle={'Dive deep into the reference manual, which gives you extensive control over your modules functionality.'}
    />

    <LinkCard 
        title={'Tutorials'} 
        imageUrl={'/icons/docs/tutorial-2.svg'} 
        link={{url: '/support/docs/tutorials', target: '', rel: 'prefetch'}}
        subtitle={'Updating the firmware · Taking care of the modules · Troubleshooting'}
    />

    <LinkCard 
        title={'Guides'} 
        imageUrl={'/icons/docs/documents.svg'} 
        link={{url: '/support/docs/guides', target: '', rel: 'prefetch'}}
        subtitle={'Ableton Setup Tutorial · Grid Editor Actions'}
    />

    </div>

</div>