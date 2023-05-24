
*Note that this page is currently an outline and most of the content is not yet written.*

## Battery Input

TODO: LBB

TODO: Voltage & current monitoring plans


## Power Switching

TODO: System switch

TODO: MEB circuit

TODO: System power rail powers thruster SSR and all other regulators for computer, boards, etc

TODO: Thruster switching and killswitch (mention why no low-side switching)


## Regulators

### Jetson Power Regulators

TODO: Old regulators & issues

TODO: Current regulators and architecture


### Other Regulators

TODO: Convention right now is for each board to have a UBEC. Longer term goal would be to have a Vbat -> 12V (custom SEPIC) and 12V to 5V (custom buck) regulators to make a common 5V and 12V rail. Each board would then be designed to take either 12V or 5V and have onboard LDOs for other required voltages


## USB Powered Devices

TODO: List of devices

TODO: Note USB current limitations and jetson limitations (plus increased sensitivity to voltage drops with old jetson regulator setup)

TODO: USB hub is externally powered. High current devices should go here. In the future a second hub (or a hub with more ports) may be needed to support 4 cameras (2 stereo cameras).
