---
layout: docs
title: Install Grid Editor under Mac OS
date: 2021-11-26
description: Grid Editor installation requirements, downloads, steps and general know-how under Mac OS.

---

<script>

  import LinkPage from '$lib/mdsvex/components/_LinkPage.svelte';
  import GithubDownloadButton from '$lib/mdsvex/components/_GithubDownloadButton.svelte';

</script>

## Install requirements
- Internet access
- ~150MB disk space
- Mac OS version 10.13+ (High Sierra and up)

We have tested on Grid Editor on various Mac OS systems ourselves, and our user base comes currently with systems between 10.13 High Sierra and 11 (Big Sur).

<GithubDownloadButton type={'editor'} os={'macos'}>
  <div>Download Mac OS Installer</div>
</GithubDownloadButton>


The installer files for Mac OS are hosted on GitHub. Throughout the download process, your browser may prompt a warning. Choose to keep the file.

<img class="" src="/images/docs/editor-install-error-0.jpg">

## Installation
By default, you can download the .dmg Disk Image installer. 

<img class="" src="/images/docs/macos-editor-install-open-error.png">


Mac OS may prompt an alert, depending on your Privacy Settings. In this case you must directly specify that you allow Grid Editor to be installed. 

[Follow this link for changing Security settings]("https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/10.14/mac/10.14")


Once you are able to open the disk image, the installation takes few seconds.

<img src="/images/docs/windows-editor-install-load.png">

The application will open up once finished. A similar view should be on your desktop.

<img src="/images/docs/windows-editor-install-finish.png">

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
    subtitle={'Mac OS driver issues and other problems'}
    title={'Troubleshooting'}
  />
</div>