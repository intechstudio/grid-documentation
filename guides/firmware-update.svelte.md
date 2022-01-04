---
layout: docs
title: Updating the firmware
date: 2021-11-25
description: Manual firmware update steps for Grid controllers.
---

<script>

  import GithubDownloadButton from '$lib/mdsvex/components/_GithubDownloadButton.svelte';
  import LinkCard from '$lib/mdsvex/components/_LinkCard.svelte';

</script>

Grid Firmware is often updated. We introduce new features, stability improvements and bug fixes in each update. We highly recommend keeping your modules up-to-date, to ensure best performance and workflow compatibility. When you connect the modules while Grid Editor is running it will warn you if you are using an outdated firmware version.

> All your modules must have the same firmware version installed!

## ⬇️ Downloading the firmware

You can find the firmware versions hosted on GitHub. Click the button below to download the **latest** version.

<GithubDownloadButton type={'firmware'}>
  <div>Download the Firmware</div>
</GithubDownloadButton>

## 💾 Install steps

Follow carefully the steps below, connect your Grid module directly to your compute at step 4.

1. Unzip the downloaded firmware file
2. You will find a file named grid_release.uf2, this is the firmware file
3. Update the modules one-by-one, only plugging in only one at a time
4. Hold down the utility side button while plugging in the USB cable
5. All the LEDs should turn from red to green color, indicating successful enumeration
<img style="max-width:400px" src="/images/docs/utility_conn.gif">

6. You should see GRID removable device on your desktop
2. Drag and drop the firmware file onto the removable device or copy and paste it
3. Wait for the upload, the module should reboot and light up in default page color (blue)
4. Repeat this step for all your modules

## Troubleshooting

<LinkCard
  imageUrl={''} 
  light={false}
  link={{url: '/support/docs/troubleshooting#firmware', rel: 'prefetch'}}
  subtitle={'Serial driver problems in various operating systems'}
  title={'Grid does not show up'}
/>
