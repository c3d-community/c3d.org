---
title: Data Storage
---

The C3D format was originally designed to store the data section values as 16-bit signed integers with an associated floating-point scale factor.  All 3D samples use a single floating-point scaling factor (POINT:SCALE) that translates each active 3D measurements to real-world millimeter measurements, while all analog samples each have an individual scaling values and can be stored in any units value as documented by their individual ANALOG parameters.

The option for the 3D and analog data to be written in a 32-bit floating-point format was added after the C3D was first created.  The sign of the 3D scaling factor, stored in the C3D file parameter section and copied to the C3D file header, documents the numerical format used; a positive scale factor defines the integer format, while a negative scale factor defines the floating-point storage method.

The C3D format is designed to store data reliably; as a result, if the file is written correctly then data can be stored as scaled integer values or floating-point values and the C3D file can be normally be converted from integer format to floating-point format and back again to integer format with no loss of data.  This conversion ability is the original C3D format compliance test described by Steven Stanhope and performed by the ADTECH PRM application.  Any data loss or corruption when a file is translated from one format to another normally indicates that the scaling factors in the C3D file have been calculated incorrectly.
