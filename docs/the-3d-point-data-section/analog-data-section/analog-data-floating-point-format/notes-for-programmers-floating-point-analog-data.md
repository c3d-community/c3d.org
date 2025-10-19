---
title: Notes for programmers - Floating-point Analog Data
---

1.  While data can be converted from integer to floating-point without any loss of resolution, the precision of the reverse operation from floating-point to integer conversion is not guaranteed if the analog data has been pre-scaled and the analog parameters have not been set correctly.

2.  To avoid potential problems during conversion, applications must always create and store the correct values for the parameters ANALOG:GEN_SCALE, ANALOG:SCALE and ANALOG:OFFSET when storing analog data in floating-point C3D files.  These parameters contain vital information about the original source of the analog samples and should contain values that would scale the analog data correctly if applied to the data when the storage format is integer.  In most cases, when the analog data is sampled from an ADC storing these values provided important information about the data collection environment.

3.  The resolution of each analog sample is determined by the ADC that performs the analog to digital conversion. Analog data samples from a 16-bit ADC are no more accurate when stored in floating-point format than integer format, providing that the analog scales are set correctly.  If you do not set the ANALOG:GEN_SCALE, ANALOG:SCALE and ANALOG:OFFSET parameter values accurately then there is no evidence that the analog data has been sampled and scaled accurately when stored as floating-point values. Storing data values that are scaled as millivolts must be performed by setting the appropriate ANALOG:SCALE parameter.  Data that is written to the C3D file pre-scaled in millivolts (e.g. 0.008538) means that converting a C3D file from floating-point to integer format will return zero values for the pre-scaled channels unless the analog parameters have been set correctly.

4.  The analog scaling calculation converts the binary analog sample data from the ADC into physical world measurement defined by the ANALOG:UNITS parameter, but note that the ANALOG:UNITS value only documents the units of the calculated results, changing the parameter does not affect the scaling calculations.

5.  C3D files written using a floating-point storage format are always twice the size of the same C3D file written using an integer storage format and, in most cases, will have exactly the same resolution.
