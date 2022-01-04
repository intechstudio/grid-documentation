---
layout: docs
title: Getting Started
date: 2021-11-25
description: Your first start with Grid. Get up and running with your modules, check out Grid Editor software install guides and see what you can do with your modules.
---

<script>

  import LinkCard from '$lib/mdsvex/components/_LinkCard.svelte';
  import LinkPage from '$lib/mdsvex/components/_LinkPage.svelte';

</script>

Grid modules are programmable devices for your control needs in creative applications. In this getting started guide we will check out Grid Editor install, first startup and set you up with general information so you can get started using your devices.

## :cd: Software for Grid: Grid Editor

Grid Editor is the free configuration tool for your modules. To ensure your module is working correctly after plugging it into your system, please install Grid Editor:



<div class="grid grid-rows-3 gap-2 pb-4">
  <LinkCard 
    imageUrl={'/icons/os_logo/macos.svg'} 
    light={true}
    link={{url: '/support/getting-started/install-editor-on-macos'}}
    subtitle={'Signed .zip and .dmg formats are available to use with Mac OS systems.'}
    title={'Mac OS Install Guide'}
  />

  <LinkCard 
    imageUrl={'/icons/os_logo/windows.svg'} 
    light={true}
    link={{url: '/support/getting-started/install-editor-on-windows'}}
    subtitle={'Windows .exe installer for Windows 10+ systems.'}
    title={'Windows Install Guide'}
  />

  <LinkCard 
    imageUrl={'/icons/os_logo/linux.svg'} 
    light={true}
    link={{url: '/support/getting-started/install-editor-on-linux'}}
    subtitle={'We provide .snap builds for Linux, tested with xubuntu.'}
    title={'Linux Install Guide'}
  />

</div>

<slot/>

> After installation, network connection may be required for specific features like  automatically checking for updates. However, you will be always able to access your local settings in Grid Editor and use the software for offline operations and profile tweaks.

## :level_slider: First startup 

After installing the Grid Editor, connect your Grid module directly to your computer with the provided USB cable (even if you'd like to use a USB hub later, for the first startup we strongly recommend using a direct connection). Open up Grid Editor and you should see your connected modules on your screen.

<img class="w-full rounded-t-lg shadow-lg drop-shadow-xl bg-black" src="/images/docs/grid_first_connect.png" alt="grid module first connection">

<!--

After installing the Grid Editor, connect your Grid module directly to your computer with the provided USB cable. Open up Grid Editor and you should see a welcoming message on your screen, as well as your module.


<div class="group flex flex-col rounded-t-lg shadow justify-center items-center w-full bg-primary p-10">
  <div class="w-full flex bg-black py-2 rounded-t-lg">
    <div class="mx-2 w-3 h-3 bg-gray-500 rounded-full"></div>
    <div class="mr-2 w-3 h-3 bg-gray-500 rounded-full"></div>
    <div class="mr-2 w-3 h-3 bg-gray-500 rounded-full"></div>
  </div>
  <div class="px-4 py-1 mt-4 hover:scale-105 transition rounded-md shadow bg-green-500 bg-opacity-50 text-center mb-8">Welcome, Grid works fine and is up-to-date!</div>
</div>
-->
Tweak some of the control elements on your controller to see the Grid module interact with the Grid Editor.

<div class="bg-black bg-opacity-20 p-4 border-l-8 border-red-500 rounded-lg shadow">
  Do you see a red firmware update notification? <a href="/support/docs/firmware-update" sveltekit:prefetch style="color:rgb(97, 157, 255)" class="text-blue-500  cursor-pointer hover:underline"> Click here for update instructions!</a>
</div>

## :rocket: Next steps
Grid is ready to be used with in the application of your choice! We have couple of pre-made configuration profiles available to get you up and running faster on our profiles page below.
You can deeply customize each of our pre-made profiles or create your own from scratch. But either way you will find information about how to build them in our Reference Manual below.

<div class="items-start justify-between flex flex-row">

  <LinkPage
    imageUrl={'/images/links/information.png'} 
    style={"mr-4"}
    link={{url: 'https://github.com/intechstudio/grid-documentation/tree/main/reference_manual', rel: 'external'}}
    subtitle={'Browse actions, events and configuration logic to customize your Grid experience.'}
    title={'Reference Manual'}
  />

  <LinkPage
    imageUrl={'/images/links/profiles.png'}   
    style={"ml-4"}
    link={{url: 'https://github.com/intechstudio/grid-profiles', rel: 'external'}}
    subtitle={'See available profiles for your creative use case. Profiles are .json files, which can be uploaded onto Grid through the Grid Editor.'}
    title={'Profiles'}
  />

</div>
