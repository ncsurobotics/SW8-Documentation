
*Note that this page is currently an outline and most of the content is not yet written.*

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
4. The first time you open this menu, you will be asked to "Configure Global Symbol Library Table". Choose "Copy Default Global Symbol Table"
5. On the Global Libraries tab select the folder icon at the bottom (Add existing library to table)
6. Navigate to wherever you cloned the repo. Choose the `SWLib.kicad_sym` file.
7. Click OK to close the symbol library table.
8. Preferences > Manage Footprint Libraries
9. The first time you open this menu, you will be asked to "Configure Global Footprint Library Table". Choose "Copy Default Global Footprint Table"
10. On the Global Libraries tab select the folder icon at the bottom (Add existing library to table)
11. Navigate to wherever you cloned the repo. Choose the `SWLib.pretty` folder.


### Updating

1. Open a terminal or git bash in the folder you cloned the repository to.
2. Run `git pull origin main`


### Creating new Parts

*Before creating a new part, check if it exists in one of the builtin KiCad libraries. Many parts do. You can search in the symbol editor.*

To create a new part, it is necessary to create both a symbol and footprint for the part. Symbols are used in schematics. Footprints are used on the PCB. In their simplest form, both are a collection of pins with unique numbers. On a symbol, pins are "lines". On a footprint, pins are "holes" or "pads" that go in / on the PCB. Pins on a symbol are associated with pins on a footprint by the pin's number. In addition to numbers, pins on a symbol can have human readable names. These are only used to show the designer what the pin is called.

To start, create the symbol

1. Open the symbol editor (in KiCad's main window)
2. Select SWLib in the libraries panel on the left
3. Select the new symbol button (or `File > New Symbol...`)
4. Name the symbol. This should typically match the name of the part you are making a symbol for.
5. Optionally select an existing symbol to derive from ("start with")
6. Change the designator if needed. See [this](https://en.wikipedia.org/wiki/Reference_designator#Designators)
7. Typically, units per package should be left as 1
8. Leave other settings unchanged

    ![](../img/kicad_new_sym.jpg){: style="width: 40%"}

9. Click OK to create you symbol. It will be open in the editor.
10. Make sure the unit is set to "mil" on the left hand toolbar.
11. Make sure the grid is set to 50mil (`View > Grid Properties`). You can see the current grid on the bottom bar.
12. Create the symbol. You can use the tools on the right toolbar to "draw" the symbol (lines, shapes, arcs). **Draw your part centered on the origin!**
13. Then use the "pin" tool (right toolbar) to add the required number of pins. Name the pins using the names in the part's datasheet. Make sure the pin number match the part's package pin numbers. **When creating pins, the "circle" should be facing out.** THis is where wires connect to in the schematic.
14. Make sure to drag the designator above the part
15. Save!

    ![](../img/kicad_sym_editor.jpg){: style="width:80%"}

After creating the symbol, determine if you need to create a footprint. KiCad's footprint libraries have a footprint for most standard packages (0603, 0805, 1206, etc for resistors, capacitors, diodes, inductors; QFP, TSSOP, SOIC, DIP, QFN, etc for ICs). Open the footprint editor and search for the package your device uses. If it exists, do **not** create a custom footprint. Skip to step 6. If you do need to create the footprint, follow the instructions below.

1. Open the footprint editor
2. Select "SWLib" in the left panel with all libraries
3. Select `File > New Footprint` to create an empty footprint. Name it the same as your part.
4. Use the footprint editor to place pads and draw any desired silkscreen. Make sure the numbers of the pads match the numbers of the pins the pad should be associated with. Follow numbering convention in the part's datasheet.
5. Save!

    <br />

6. Go back to your part in the **Symbol** editor.
7. Edit symbol properties (`File > Symbol Properties...`)
8.  Click the library icon next to the footprint field (you may need to click the footprint field first).
9. Select the footprint for your part
10. Double check the pin number order of the footprint and schematic. **This is especially important if you are using a footprint you did not make.**
11. Save!

### Importing Downloaded Parts

TODO



## Creating a New Project

*Make sure you have installed SWLib first!*

TODO


## Opening an Existing Project

*Make sure you have installed SWLib first!*

TODO


## Design Workflow

### Schematic

**Always use a 50mil grid in the schematic editor!** If absolutely necessary, a 25mil grid can be used occasionally, but try to avoid doing so.

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
- Bulk footprint assignments
-->