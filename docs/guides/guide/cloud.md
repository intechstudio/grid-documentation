---
sidebar_position: 5
title: "Editor: Profile Cloud Basics"
description: Uploading your Configurations to the Cloud
---

import ProtocolUrl from '@site/src/components/ProtocolUrl';

## Introduction: What is the Profile Cloud? 

The Profile Cloud is a groundbreaking addition to the Grid Editor software that allows you to create, store, share, and download custom profile configurations directly to your Grid controller. Access your work from any device with Grid Editor and pick up right where you left off. The Profile Cloud allows you to collaborate with other creators, to inspire and get inspired by their unique controlling solutions. How does it work exactly? Well, first get your Grid Editor running, then let’s get started.

<!-- 
Hogyan kell videót feltenni? 
1. go to youtube
2. open video
3. click "share"
4. choose "embed"
5. copy and paste
-->

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iframe width="100%" height="315" style={{maxWidth:'560px'}} src="https://www.youtube.com/embed/s9uFpXCTCSQ?si=tmJDbiiaSXPXiLnb&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### How to access the Profile Cloud?


**Update**: To access the Profile Cloud, first make sure you are using Editor 1.2.35. version or above. From now on the Profile Cloud panel completely replaces the previous Profile tab with new functionality.

**Account**: Register an Intech account that will be your Cloud account as well. Create your account here (link), or log in to your existing account. 

### How to sign in to the Profile Cloud?
Upon the first launch, the user must choose a unique username. This will be visible on public profiles. Once the username is created, the Cloud upload will be accessible.

**Local mode**: You can first use the Profile Cloud panel in "local" mode, which will save your profiles only on the device you are using unless you log in to your Cloud account. In local mode, you can create a local profile using the "save local profile" button.

**Info**: Your earlier Grid profiles won’t appear in the local panel. To access these profiles, you will need to migrate them to the latest version. Read more about profile migration here. (link to section)


### What are Local profiles?


These profiles are located in the user library of your computer’s storage drive, set under preferences
.../documents/grid-userdata. It is important to note that these local profiles are only available on your device until you manually upload them to the Cloud. When a user uploads from local to Cloud, the local equivalent of the profile is deleted! However, both private and public Cloud profiles remain editable by the uploader and changes will be saved automatically.

Local profiles have the following functions:

**Delete button**: deletes the local profile from the user's computer
**Save to Cloud button**: uploads the local profile to the Profile Cloud. In order to do so, log in to your existing account.
**Overwrite button**: the configuration of the currently selected page will overwrite the previously saved page on the given profile
You can rename the title or the profile description by double-clicking them.

## FAQ

### How to upload my Local profile to the Cloud?


The Save to Cloud button allows you to upload your local profile to the Profile Cloud. 
To access the Cloud, log in to your Intech account first. 

:::caution Note
 When a user uploads from local to Cloud, the local equivalent of the profile is deleted! However, you will still be able to make edits and save changes to the Cloud profile after loading them onto a module.
:::


### Are my Cloud profiles private by default?


Profiles uploaded to the Cloud are set to private by default. Private profiles are only visible by you - the uploader. If you are logged into the Profile Cloud from another device, you can still access your own private profiles.


### How to publish a private Cloud profile?


Profiles uploaded to the Cloud have private visibility by default, but can be set to “public” with the toggle button. When published, they can be accessed and downloaded by all Grid users. These profiles can also be imported to a user's local folder or onto their module, if module types match. Public profiles will be displayed in the Cloud panel without logging in. Remember to give your public profiles a concise title and a clear description. You can edit and delete your public profiles at any time.

### How to add a public Cloud profile to your Local profile library? 


Each public profile can be imported to the local profile section using the Import button, so you can save and personalise them in your workspace.

### How to share any Cloud profile as a URL link?


Profiles stored in the CLoud can be directly shared with other Grid users via a unique URL link. For example this link leads to an EN16 Demo profile:<ProtocolUrl title="Example Profile" protocolUrl="grid-editor://?profile-link=Rk9NiKfeThttnZq6YYtD"/>


By clicking the link above, the Editor will open the linked profile under local profiles. 

You can also create a shareable URL link from a private profile if you are logged into the Profile Cloud. To share these private profiles individually, without making them public to everyone, you can do so by sending the individual URL link.


### Can I migrate my profile configurations from the earlier Grid Editor version to the Profile Cloud?


Yes, you can. If you have existing profiles (session profiles or profiles under a user folder), you can migrate them to the new feature set. Before migrating, we recommend saving a backup archive of your grid-userdata. Like this, we can help restore configs, in case anything goes sideways. 


## Future developments


Profile categories, filtering and searching functions will be available soon. Further profile configurations made by us will be uploaded as well. Stay tuned!

For support please contact support@intech.studio or join us on Discord.





