
## Main Hull

### Electrical Preparation

- Check the wires on Fischer receptacles on the endcap. Make sure none have been torn loose.

- Ensure all wires on MOAB or FOAB (whichever is being sealed in the robot) are constrained and will not get caught on anything

- Check the Acoustics System.

    ??? custom "Details"
        - Ensure that 4 single-channel boards are present.
        - Ensure the hydrophone power switch is in the "ON" position
        - Make sure the FPGA board's power switch is in the "ON" position

- Double check electrical system wiring

    ??? custom "Details"
        - Control board
            - USB to jetson
            - Depth sensor cable properly seated on connector
            - PWM to ESCs all properly seated on connectors
        - MEB
            - USB from MEB to USB hub
            - System switch wire connected
            - Kill switch wire connected
            - I2C cable to MSB present
            - Battery power cable connected
            - Leak sensor wires connected
        - MSB
            - I2C wire to MEB connected
            - ~~2x Torpedo Wires connected (not currently used)~~
            - 2x Dropper Wires connected
            - 5V regulator (UBEC) connected
        - Jetson Nano
            - Ethernet connected
            - ~~Software kill wire on GPIO (not currently used)~~
            - USB hub connected
            - Power connected to barrel jack
        - Acoustics System
            - UBEC connected to distribution board
            - USB from FPGA to USB hub or jetson
            - One hydrophone wire pair connected per single channel board (4 total)
            - 4x Wires from each single channel board to FPGA dev board

- Insert MOAB or FOAB making sure it fully seats into the powerpole block connector. Make sure it is inserted in the correct orientation.

- Connect all wires from MOAB/FOAB to the endcap
    
    ??? custom "Details"
        - Ethernet (tether)
        - 2x Camera USB to USB hub
        - 4x Hydrophones
        - Depth sensor
        - Kill switch
        - System switch
        - ~~Torpedos (not currently used)~~
        - Droppers
        - LED strip

- Before sealing, [dry run](./dryrun.md)


### Sealing

TODO

<!--
Mech team write this!
Make sure to remember
- Check for loose penetrators or fischers
- Make sure FOAB is properly seated
- Make sure O-rings greased and clean
- Then actual sealing procedure
-->


### Pressure Test

<!--
Mech team write this!
-->

TODO



## Battery Hulls

### Electrical Preparation

- Ensure battery is charged!
- Check fuse in fuse adapter to make sure it is not burned out
- Connect battery through endcap and make sure voltage is measured on end of fischer (use a loose receptacle to measure!)
- Make sure leak probes are in correct positions and attached to leak sensor in hull


### Sealing

TODO

<!--
Mech team write this!
Make sure to remember
- Check for loose penetrators or fischers
- Make sure FOAB is properly seated
- Make sure O-rings greased and clean
- Then actual sealing procedure
-->


### Pressure Test


<!--
Mech team write this!
-->

TODO