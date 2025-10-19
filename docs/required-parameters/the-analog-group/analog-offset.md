---
title: ANALOG:OFFSET
---

The ANALOG:OFFSET parameter is normally an array of integer values that are subtracted from each analog measurement before the individual ANALOG:SCALE scaling factors are applied.  By default a signed integer, the ANALOG:OFFSET values may be either positive or negative numbers in the range of –32768 to +32767 and can include the value of zero.  However, if the ANALOG:FORMAT parameter is “UNSIGNED” then the ANALOG:OFFSET parameter should be interpreted as unsigned integer numbers in the range of 0 to +65535.

There must always be a one to one correspondence between the ANALOG:SCALE and ANALOG:OFFSET parameters.  Both the SCALE and OFFSET parameters must exist for every analog channel up to the value stored in the ANALOG:USED parameter.

The sampled analog data is normally stored in the C3D file as signed integer values within the range of -32767 to +32767.  It is worth noting at this point that the binary encoding method for analog data is not directly specified within the original C3D format specification which defaulted to using signed integers and, so long as the scaled results are correct, analog data can be stored anywhere within the range of the integer data type.

In general, the analog data is encoded over a symmetrical range (from a value of +v to –v) but this is not an absolute requirement.  Software applications may write the analog data samples as unsigned values and use the OFFSET parameter to convert them to back to signed values when the data is scaled into physical world values.

The table shown below illustrates two common encoding methods used to represent both positive and negative values in C3D files.

Offset Binary is a simple binary count that is offset in order to represent equal magnitude over the positive and negative ranges – the maximum negative range being all zeros while all ones represents the maximum positive range.  The mid-range or zero is represented by setting the most significant bit, with all other bits cleared.  Two’s Complement Binary uses a simple binary count to represent all positive values while all negative values are stored with the most significant bit set.  The Two’s Complement format simplifies the interface at a machine code level but offers no advantages within the C3D format or within high-level languages.  It is a common output option for many Analog to Digital Converter (ADC) devices.

Software applications must always use the OFFSET and SCALE parameters to determine data magnitude and must not assume that either OFFSET or SCALE will take any particular value.

Typically, an analog-to-digital converter (ADC) has 12 to 16 bits of resolution, and can capture and store analog data using signed integer values from -32768 to +32767 representing both positive and negative input signal excursions.  In order for software applications to correctly translate the analog data recorded in the C3D file into physical world values, the ANALOG:OFFSET and ANALOG:SCALE parameters must contain appropriate values.  These are applied as shown:

physical world value = (data value – ANALOG:OFFSET) * ANALOG:SCALE

For example, a ±5 volt ADC with 12-bits of resolution can produce 4096 discreet samples values – these may be mapped as unsigned values using the range of 0 to +4095 (in which case the OFFSET would be +2047 for a symmetrical +5 to –5 volt range, translating the ADC samples into the signed integers).  They could equally well be mapped directly as signed integers in the range of –2048 to +2047 in which case the OFFSET would be 0.  If the ANALOG:SCALE and OFFSET values are applied correctly, both configurations will return identical values covering the range of +5 to –5 volts.

One application of the ANALOG:OFFSET is to adjust the zero baselines for devices such as force plates that should return a zero when unloaded.  In practice, force plates are notorious for drifting away from an unloaded zero value, which can lead to measurement errors in use.  There are two common methods for “zeroing” these devices, each involves determining the measurement error during some period of unloaded sampling, by subtracting the sampled data values from the recorded ANALOG:OFFSET value.  This result can then be used to reset the ANALOG:OFFSET parameters to new values (each analog channel will have a different “error” value here) or, can be used to adjust the sampled analog data values or correct the original offset measurement error.  Both methods are in common use; both methods may run into problems if either the analog data or OFFSET parameters are close to their limits.
