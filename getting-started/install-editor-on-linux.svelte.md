---
layout: docs
title: Install Grid Editor under Linux
date: 2021-11-26
description: Grid Editor installation requirements, downloads, steps and general know-how under Linux.
---


<script>

  import LinkPage from '$lib/mdsvex/components/_LinkPage.svelte';
  import GithubDownloadButton from '$lib/mdsvex/components/_GithubDownloadButton.svelte';

</script>

## Install requirements
- Internet access
- ~150MB disk space
- Ubuntu distribution

<p>
<GithubDownloadButton type={'editor'} os={'linux'}>
  <div>Download Linux Installer</div>
</GithubDownloadButton>
</p>

The executable files for Linux install are hosted on GitHub.

## Installation

The installer is a .AppImage file, right click on it and select **Properties**. 
Choose the **Permissons** tab and allow execution of the file as program.

<img src="/images/docs/linux-editor-install-allow.webp">

The application will open up once it finished loading. A similar view should be on your desktop.

<img src="/images/docs/windows-editor-install-finish.webp">

## Allow Serial Port

It can be that you did not used any similar serial USB device like Grid before. You must allow serial read / write for USB devices.

The easy way:

`sudoedit /etc/udev/rules.d/50-myusb.rules`

Save this text:

`KERNEL=="ttyUSB[0-9]*",MODE="0666"`

`KERNEL=="ttyACM[0-9]*",MODE="0666"`


Unplug the device and replug it, and it should be read/write from any user!


<div class="border-b italic border-gray-600 my-8">Next steps...</div>
<div class="items-start justify-between flex flex-row mt-4">
  <LinkPage
    imageUrl={''} 
    style={"w-2/5 mr-4 "}
    link={{url: '/support/getting-started#-first-startup'}}
    subtitle={'Continue the getting started guide with checkout out the first connection with your Grid module'}
    title={'Back to First Setup'}
  />

  <LinkPage
    imageUrl={''} 
    style={"w-2/5 ml-4"}
    link={{url: '/support/docs/troubleshooting'}}
    subtitle={'Windows driver issues and other problems'}
    title={'Troubleshooting'}
  />
</div>