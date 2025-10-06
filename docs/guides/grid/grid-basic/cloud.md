---
sidebar_position: 3
title: "1.2: Profile Cloud overview"
description: Uploading your Configurations to the Cloud
slug: editor-111
---

import ProtocolUrl from '@site/src/components/ProtocolUrl';

*The Profile Cloud feature makes storing and sharing configurations a breeze. This article's aim is a general explanation of its features.*

---

## Introduction: What is the Profile Cloud? 

The Profile Cloud is a new addition to the Grid Editor software that allows you to store and share custom Grid configurations in the Cloud. 

<!-- 
Hogyan kell videót feltenni? 
1. go to youtube
2. open video
3. click "share"
4. choose "embed"
5. copy and paste

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iframe width="100%" height="315" style={{maxWidth:'560px'}} src="https://www.youtube.com/embed/s9uFpXCTCSQ?si=tmJDbiiaSXPXiLnb&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

-->

<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=pXjrAYluhsnUyy6i&amp;list=PLtMbdpAm17zc3aoEOOaqWiFbL3li1sKTy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


### How to access the Profile Cloud?


**Update Grid Editor**: To access the Profile Cloud, first make sure you are using Editor v1.2.35 or above. You'll find the Profile Cloud on the left sidebar.

**Create an Account**: You'll need an Intech Studio account to access the Profile Cloud. [Create one here](https://intech.studio/auth).

**Create a Username**: After launching Editor and signing in, first you'll have to choose a unique username. This name will be visible on public profiles. Uploading and sharing your configurations is only possible with a registered username.

**Local mode**: When you're not logged in, Editor still saves your configurations locally. When you log in after that, each of your locally stored configurations will offer the option to Upload them to the Cloud.

:::caution Old Profiles
Your earlier Grid configurations from Editor 1.2.34 and earlier won’t appear in the local panel. To access these profiles, you will need to migrate them to the latest version.  
[Read more about profile migration here.](/docs/guides/troubleshooting/troubleshooting.md#how-to-import-locally-saved-profile-json-files-into-the-profile-cloud) 
:::

### What happens if I save my configurations without logging in?


The profiles saved this way are saved locally on your computer's storage. It is important to note that these configurations are only available on your device until you manually upload them to the Cloud.

When saved locally, configurations have the following options available:

- **Rename**: rename the title or edit description by double-clicking the textbox
- **Delete button**: deletes the local configuration from the user's computer
- **Save to Cloud button**: uploads the local configuration to the Profile Cloud (requires login)
- **Overwrite button**: the configuration of the currently selected Page on the active Grid module plugged into your computer will overwrite this configuration



## FAQ

### How to upload to the Cloud?


The Save to Cloud button allows you to upload your local profile to the Profile Cloud. 

When logged in, pressing Save will upload the configuration to the Cloud automatically, but store the configuration locally as well in a .JSON file under `...\grid-userdata\configs`.


### Can anyone see my configurations in the Cloud?


Configurations uploaded to the Cloud are set to private by default. Private profiles are only visible to you - the uploader. 

If you are logged into the Profile Cloud from another device, you can still access your own private profiles.


### How to make a publically visible configuration?


Profiles uploaded to the Cloud have private visibility by default, but can be set to Public with a switch. When published, these configurations become visible to all Grid Editor users. These profiles can also be imported to a user's local folder or onto their module, if they would want to edit or make changes to them. Remember to give your public profiles a concise title and a clear description. You can edit and delete your public profiles at any time.

:::tip Only Public configurations are visible when offline
Public configurations will be the only ones be displayed in the Cloud panel without logging in, aside from the locally stored configurations.  
Meaning even if you have configurations stored in the Cloud, you can't access them without logging in first.
:::

### How to import a public configuration? 


Each public configuration can be imported using the Import button, so you can save and personalise them to your needs. When doing so, Editor will create a Copy of that profile and make it private by default.

### How do I share my configurations with others?


Configurations stored in the Cloud can be directly shared with other Grid users via a unique URL link. Click the Link option of a Public configuration to generate a unique URL and share it with your community.  

For example this link leads to an EN16 Demo profile: <ProtocolUrl title="Example Profile" protocolUrl="grid-editor://?config-link=lmNhUzWkNRIHwuSuGU0o"/>

When clicking a link, make sure that Editor is already running and Editor will import it as a Copy of the linked configuration, similarly to the Importing process.


:::tip Sharing configurations

Only configurations set to Public will be accessible by others. If you share a configuration set to Private, only you - the uploader of said configuration - will be able to access it through the link.

:::

<!---
### Can I migrate my profile configurations from the earlier Grid Editor version to the Profile Cloud?



Yes, you can. If you have existing profiles (session profiles or profiles under a user folder), you can migrate them to the new feature set. Before migrating, we recommend saving a backup archive of your grid-userdata. Like this, we can help restore configs, in case anything goes sideways. 
--->

## Future developments

With Editor v1.2.50 we overhauled the look and feel of the Profile Cloud. You can find the changes [here.](/docs/guides/changelog/editor_changelog.md#profile-cloud-rework)

For support please contact support@intech.studio or join us on Discord.





