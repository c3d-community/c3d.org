---
title: FORCE_PLATFORM:CHANNEL
---

The FORCE_PLATFORM:CHANNEL parameter is an array of signed integer data values that record which analog channels contain specific force platform data.  The force platform outputs may be connected to any convenient analog input channels in any order that is convenient to the user, provided that the assignment of force platform signals to analog channels is correctly specified in this parameter.

While it is recommended that force plate channels be connected to the analog recording device in a logical fashion it is not essential that they are stored in any fixed order within the C3D file.  Any application that reads force plate data must use this parameter to determine the force plate channel to analog channel assignments.

Note that if your data collection environment used several different types of force platforms and any of them are TYPE-3 then this parameter must contain eight (8,) entries for all plates.  If TYPE-3 plates are not used then the dimension may be either (6,) or (8,) as the unused values in the CHANNEL parameter should be set to zero and ignored.

The table above shows the assignment of analog channel numbers to force plate signals within this parameter where i is the force platform number.  For instance, if MZ of force platform number 2 is connected to analog channel 15, then CHANNEL(6,2) should contain the entry 15.
