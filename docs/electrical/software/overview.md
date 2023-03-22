
There are various tools and pieces of software used in relation to the electrical design of SeaWolf VIII. These are listed below


## PCB Design

### KiCad

TODO


### Altium Designer

TODO



## MSP430 Embedded Firmware

Custom PCBs used on SeaWolf VIII are designed around TI's MSP430 MCUs or Launchpad development boards. The firmware for these boards is developed using one of the following tools. *Note that IAR is intentionally avoided.* TI's CCS is free and fully featured with no code size limit. Additionally, IAR's evaluation license only allows access to the newest version of IAR which can make project compatibility and maintenance difficult.


### Arduino / Energia

**Required Operating System:** Windows, macOS, Linux

**Download Links:** [Arduino IDE](https://www.arduino.cc/en/software) | [MSP430 Core](https://github.com/MB3hel/Arduino-Core-MSP430)

While the Energia project is officially unmaintained since November 2022, there are builds of the Energia MSP430 Arduino core located at the link above. These builds user newer tooling and fix bugs with some of the chips used. This core can be installed with the official Arduino IDE.

Generally, this is used only during prototyping or when rapid firmware development is required.

![](../img/sw_arduino_ide.jpg){: .center style="width: 80%"}


### TI Code Composer Studio (CCS)

**Required Operating System:** Windows, macOS, Linux

**Download Link:** [TI CCS](https://www.ti.com/design-resources/embedded-development/ccs-development-tools.html)

TI's [Code Composer Studio](https://www.ti.com/design-resources/embedded-development/ccs-development-tools.html) supports the MSP430 chips using TI's compiler or a [separately installed](https://www.ti.com/tool/MSP430-GCC-OPENSOURCE) open source GCC compiler. This IDE is Eclipse based and integrates a debugger among many other tools.

![](../img/sw_ccs_ide.jpg){: .center style="width: 80%"}



## Circuit Simulation

### LTSpice

**Required Operating System:** Windows, macOS, Linux (through Wine)

**Download Link:** [LTSpice](https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html)

LTSpice is a free circuit simulator with builtin models for many Analog Devies / Linear Tech chips. This is generally our preferred circuit simulator as it is easy to install and use. In some cases however, models designed for PSpice (usually TI parts) are not compatible (they are either encrypted or use PSpice features that LTSpice does not have). In these cases other software is used.

![](../img/sw_ltspice_sim.jpg){: .center style="width: 80%"}

### PSpice for TI

**Required Operating System:** Windows

**Download Link:** [PSpice for TI](https://www.ti.com/tool/PSPICE-FOR-TI) (requires TI account and export approval)

PSpice for TI is a limited feature version of Cadance's PSpice simulator. It is more difficult to setup, thus we generally prefer LTSpice, however there are cases where this should be used instead (when a TI model is encrypted or when a model uses PSpice features that LTSpice does not support). Note that using ADI / LT devices is often not possible in PSpice. ADI / LT typically provide encrypted LTSpice models only.

![](../img/sw_pspiceti_sim.jpg){: .center style="width: 80%"}


## Hardware Design (FPGA)

### ModelSim

TODO

### Vivado

TODO


## Other

### Git SCM

TODO


### Digilent WaveForms

TODO
