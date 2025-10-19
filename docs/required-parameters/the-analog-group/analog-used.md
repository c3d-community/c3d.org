---
title: ANALOG:USED
---

The ANALOG:USED parameter is normally an unsigned integer value that stores the number of analog channels that are contained within the C3D file.  The value stored in ANALOG:USED is used to compute the analog data frame rate from the total number of analog data words collected during each 3D frame.  The total number of analog samples stored per 3D frame must be an integer multiple of ANALOG:USED. The value of the ANALOG:USED parameter is not stored in the C3D file header but can be calculated from two values that are stored in the C3D file header.  The ANALOG:USED parameter value is equal to C3D header word 3 divided by C3D header Word 10.

As an unsigned integer, the ANALOG:USED parameter supports a maximum of 65535 analog channels, although it is unusual to find analog hardware systems collecting more than 64 channels of analog data.  In practice the C3D format is limited to 255 analog channels unless additional parameters are created to extend the storage of the LABELS, DESCRIPTIONS, SCALE, OFFSET, and UNITS parameters by creating LABELS2, DESCRIPTIONS2, SCALE2, OFFSET2, and UNITS2 parameters to support up to 511 analog channels.

If the ANALOG:USED parameter is zero then the C3D file does not contain any analog data values and all other ANALOG parameters should be ignored.


