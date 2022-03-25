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

## Updating the firmware using Grid Editor

Whenever you're prompted with the 'Oops, firmware mismatch detected' message while running Grid Editor means you have a module plugged in with an outdated firmware version compared to Editor.

The mismatched module will be highlighted with red color, like this:

![](C:\Users\lenovo\Documents\GitHub\grid-documentation\guides\firmware_mismatch.png)

Gird Editor can update your module firmware automatically if you follow the on-screen messages at the top.

Reconnect the mismatched module (and that module only) while holding down the utility button on the side of the module.

<img style="max-width:400px" src="/images/docs/utility_conn.gif">

After connecting you'll be prompted with a message in blue, asking whether you want to start the update. Press 'Update Firmware'.

![](/images/docs/bootloader_detected_update_start.png)

Don't disconnect the module while the update is running or the update will fail.

When the update is complete, you will be prompted with a message in green color and the module will show up again in the Editor.

![](/images/docs/update_success.png)

Congratulations! You've successfully updated the firmware of your module.

If you have multiple modules with firmware mismatches, you'll have to repeat this process one-by-one from the beginning.

## ⬇️ Updating the firmware manually

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
  link={{url: '/support/docs/guides/troubleshooting#firmware', rel: 'prefetch'}}
  subtitle={'Serial driver problems in various operating systems'}
  title={'Grid does not show up'}
/>
