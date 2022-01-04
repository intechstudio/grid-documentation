---
layout: docs
title: Install Grid Editor under Windows
date: 2021-11-26
description: Grid Editor installation requirements, downloads, steps and general know-how under Windows.

---

<script>

  import LinkPage from '$lib/mdsvex/components/_LinkPage.svelte';
  import GithubDownloadButton from '$lib/mdsvex/components/_GithubDownloadButton.svelte';

</script>

## Install requirements
- Internet access
- ~150MB disk space
- Windows 7 and up

<p>
<GithubDownloadButton type={'editor'} os={'windows'}>
  <div>Download Windows Installer</div>
</GithubDownloadButton>
</p>

The executable files for the Windows installer are hosted on GitHub. Throughout the download process, your browser may prompt a warning. Choose to keep the file.

<img class="" src="/images/docs/editor-install-error-0.jpg">

## Installation
The installer is an executable file, double click on it to start the installation.

<img class="" src="/images/docs/windows-editor-install-exe.png">

Windows may prompt an alert, depending on your Windows Defender security settings. In this case you must directly specify that you accept to run the installer. Click **more info**, then **run anyway** to finish install.

<div class="flex w-full">
  <img class="w-1/2 pl-0 pr-2 py-2" src="/images/docs/windows-editor-install-error-1.jpg">
  <img class="w-1/2 pr-0 pl-2 py-2" src="/images/docs/windows-editor-install-error-2.png">
</div>

The installation takes few seconds.

<img src="/images/docs/windows-editor-install-load.png">

The application will open up once finished. A similar view should be on your desktop.

<img src="/images/docs/windows-editor-install-finish.png">

## Install Location

To find the install location follow these steps:
- Open up the start menu (windows key) or hit win + R
- Type in to the searchbar: %appdata%
- Under the Roaming directory, locate grid_editor


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