---
title: Using monome norns with Grid
---

![norns and PO16](./img/norns_po16_384px.jpg)

For users that would like to just mess around with norns scripts and have a Grid Modular Controller (or any other MIDI controller really), we have created some MIDI maps for popular scripts for easy plug-and-play experience.

### Requirements

- monome norns (any version)
- Intech Studio Grid Modular Controller with the default configuration (optionally multiple modules)
- a computer using the same network as norns for access to the norns folders through maiden

### How to get the .pmap files from your PC to the correct norns destinations?

For users using a **terminal** to access norns, you can just download the chosen .pmap file and upload it to norns in the corresponding script's folder.

For users using **maiden** however, you should follow these steps:

- Download one of the .pmap files from below that corresponds to a norns script that you have installed on your norns.

    - <a target="_blank" href="/presets/norns_pmap/awake.pmap" download="awake.pmap"> awake</a> 
    - <a target="_blank" href="/presets/norns_pmap/benjolis.pmap" download="benjolis.pmap"> benjolis</a>
    - <a target="_blank" href="/presets/norns_pmap/molly_the_poly.pmap" download="molly_the_poly.pmap"> molly_the_poly</a>
    - <a target="_blank" href="/presets/norns_pmap/passersby.pmap" download="passersby.pmap"> passersby</a>

- Find the place for the .pmap files according to the official monome doc in maiden: https://monome.org/docs/norns/control-clock/#pmaps for the selected script. 

![maiden](./img/pmap_location.png)

- Navigate into the script folder and click on the plus sign to create a new file.

![create new](./img/create_new.png)

- Remane the file so it becomes "scriptname.pmap".

![rename](./img/rename.png)

- Copy and paste the contents of the downloaded file into the code window and press save in maiden.

![save](./img/save.png)


- When the script starts up the plugged in Grid module should be mapped automatically.

### List of currently available pre-mapped .pmaps
<!---
- [awake](/static/presets/norns_pmap/awake.pmap)
- [benjolis](/static/presets/norns_pmap/benjolis.pmap)
- [molly_the_poly](/static/presets/norns_pmap/molly_the_poly.pmap)
- [passersby](/static/presets/norns_pmap/passersby.pmap)
--->
#### awake

#### benjolis

For benjolis, all of the onscreen parameters have been mapped, but in a different order, to make it a bit more logical.

- oscillator section, first row: freq of osc1, freq of osc2, rungler of osc1, rungler of osc2
- filter section, second row: filter cutoff, filter resonance, filter type (lp/hp), rungler of filter 
- misc section, third row: loop, scale of rungler, selected output 

#### molly_the_poly

#### passersby
