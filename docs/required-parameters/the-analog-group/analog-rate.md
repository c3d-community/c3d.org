---
title: ANALOG:RATE
---

The ANALOG:RATE parameter is a single floating-point value that stores the sample rate at which the analog data was collected in samples per second.  This indicates the number of analog samples that exist in each analog channel for the given POINT:RATE value.  Thus, an ANALOG:RATE value of 600 for a C3D file that contains data with a POINT:RATE of 60.00 has 10 analog samples per 3D sample (60 x 10).

The RATE parameter value is not stored in the C3D file header.  However, the header does record the 3D sample frame rate in words 11-12 as well as the number of analog samples per 3D frame in word 10.  The ANALOG:RATE parameter value should always be identical to the value:

3D_frame_rate * analog samples per frame

Thus, an ANALOG:RATE will have a value of 600 in a C3D file with a POINT:RATE value of 60 that contains 10 samples of analog data per 3D frame.  Note that although the C3D format specified that the number of analog samples per 3D frame must be an integer number, the actual 3D frame rate is a floating-point value since it may not be exact.  Therefore, the ANALOG:RATE (from the above calculation) must also be stored as a floating-point value.

Note that a single ANALOG:RATE value applies to all analog channels – the C3D file format requires that all analog channels be recorded at a single rate.  This means that if the C3D file is used to store analog data from a variety of different sources, all analog signals must be sampled at the rate required by the source with the highest frequency components.
