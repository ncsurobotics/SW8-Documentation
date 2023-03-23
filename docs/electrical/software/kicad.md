
This user guide is intended to be a reference, not a tutorial. There are many good KiCad tutorials available online, however please note that there are sometimes multiple ways to do things in KiCad (eg library management). *In such cases, please use the methods described on this page.* Part of this page's purpose is to describe our conventions / approaches to using KiCad.

*Note that this guide was written for KiCad 7.0.1*


## Installation

<!--
Note: Download links are intentionally omitted from user guide for a few reasons
    1. It means links only have to be updated in one place
    2. Any required version information or critical notes will be in the overview. This forces people to look there.
-->

See the [Software Overview page](./overview.md#kicad) for download links and required version information (if any).

### Windows

- Download the installer (`exe` file)
- Run the installer. It will require administrative privileges.
- Follow the instructions of the installer. Default settings / options are sufficient.
- Install SWLib (see instructions in following section) after the installation completes.


### macOS

- Download the `dmg` file
- Open the dmg disk image
- Drag the `KiCad` folder to `Applications` as indicated by the arrow
- Wait for the copy operation to complete
- KiCad is now installed
- Install SWLib (see instructions in following section) after the installation completes.


### Linux

- Follow [KiCad's Instructions](https://www.kicad.org/download/linux/). On Ubuntu this entails adding a ppa and installing the packages.
- Install SWLib (see instructions in following section) after the installation completes.


## SWLib

SWLib is a KiCad library containing symbols, footprints, and 3D models for components used on SeaWolf's boards. This library is shared among many robots (not SeaWolf VIII exclusive).

This library must be installed once per system you install KiCad on.

*Note: you must have `git` installed to install, modify, or update SWLib!*


### Installation

1. Clone [this](https://github.com/ncsurobotics/SW-KicadLibrary/) repository somewhere on your system. The location does not matter.
2. Open KiCad. Close any open project (File > Close Project)
3. Preferences > Manage Symbol Libraries
4. On the Global Libraries tab select the folder icon at the bottom (Add existing library to table)
5. Navigate to wherever you cloned the repo. Choose the `SWLib.kicad_sym` file.
6. Click OK to close the symbol library table.
7. Preferences > Manage Footprint Libraries
8. On the Global Libraries tab select the folder icon at the bottom (Add existing library to table)
9. Navigate to wherever you cloned the repo. Choose the `SWLib.pretty` folder.


### Updating

1. Open a terminal or git bash in the folder you cloned the repository to.
2. Run `git pull origin main`


### Adding Parts

TODO



## Creating a New Project

*Make sure you have installed SWLib first!*

TODO


## Opening an Existing Project

*Make sure you have installed SWLib first!*

TODO


## Design Workflow

### Schematic

TODO


### Electrical Rules Check

TODO


### Assign footprints

TODO


### PCB Layout & Routing

TODO


### Design Rules Check (DRC)

TODO



## Tips and Tricks

TODO

<!--
- "Flat" multi page schematic
- Note on using "HandSolder" footprints
-->