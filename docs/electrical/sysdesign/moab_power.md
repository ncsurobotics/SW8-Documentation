
*Note that this page is currently an outline and most of the content is not yet written.*


SeaWolf VIII's (SW8) power system consists of several components layed out on and wired together on MOAB / FOAB. There is no central "power system" PCB / board on SW8. The components of the power system are described here. The boards involved have more detail on their pages under the "Boards" section.

## Power Input

![](../img/moab_power.jpg)


### Battery Input

SeaWolf VIII is powered by two 4-cell (4S) LiPo batteries. Each battery is fused at 40A of current. These batteries are connected in parallel allowing for a total of 80A current draw from the batteries.

However, there are some cases where connecting LiPo batteries in parallel could cause issues

1. The LiPos are charged to different levels. In this case one would charge the other. This would not be a proper balance charge process. This could lead to fires.
2. One battery drains faster than the other (different age, wear / tear, different cells). While this is less likely, it could lead to one battery charging the other. This could again lead to fires.

To address these issues, SW8 has a "Load Balancing Board" used to connect the batteries in "parallel". The load balancing board conceptually chooses the higher voltage of the two batteries. The system is powered from that battery. When the batteries are charged equally, this effectively balances the load due to voltage drop of the battery under load. The output of the LBB is referred to as "Vbat" or "battery voltage" in the rest of the documentation.

*Note that if one battery is not charged or is performing poorly, this can lead to the other battery handing more load. In this case, the fused current limit is not the full 80A. However, in practice SW8 rarely pulls over 40A current (it is capable of running on a single battery if needed).*

Currently, there is no voltage or current monitor. However, there are plans to add individual voltage and current monitors for each battery (between LiPo and LBB). These monitors will likely be standalone modules initially, but can be integrated into LBB at a later date.


### Power Switching

There are two Solid State Relays (SSRs) used to switch power on SeaWolf VIII. The first one is the "System Power SSR". The output of this SSR is used to power the main system (everything except thrusters). This is unregulated voltage (battery voltage level).

The second SSR is the "Thruster Power SSR". This switches power on and off to the thrusters. This SSR is powered through the system SSR. Thus, if the system is off the thrusters are too. However the system can be switched on with the thrusters off. This allows the thrusters to be disconnected from power when the vehicle is in the "killed" state. Thrusters are powered when the vehicle is in the "armed" state.

The SSRs are controlled by the MEB. The system SSR is connected to the system power switch. This switch pulls the control line to GND to power the system on. Once the MEB boots, a GPIO holds this line LOW to keep the system on. To turn the system off, the system switch placed in the "off" position will pull this line high, thus turning off the SSR. See the [MEB](../boards/meb.md) page for more details.

Similarly, the MEB controls the Thruster SSR. The control signal for this, however, is not controlled by MEB software (it just runs through traces on the MEB). Normally, this control line is floating. However, the physical killswitch is connected between this line and GND. When the killswitch is closed, the line is pulled low and the thruster SSR is on. Thus the thrusters have power. When the killswitch is open, the line is floating and the thruster SSR is off.

Additionally, on newer versions of MEB (v1.2+) there is a software kill switch MOSFET. This mostfet is in series with the killswitch. The MOSFET is controlled by a GPIO signal directly from the Jetson. This acts as a "software kill". Both the software arm (GPIO high) and hardware arm (killswitch closed) must occur for the thrster SSR to be on. Again, see the [MEB](../boards/meb.md) page for more details.


## Power Distribution

TODO: Powerpole block bar

TODO: GND bar

TODO: Fuse bar



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


## MOAB / FOAB Layout

TODO: Image
