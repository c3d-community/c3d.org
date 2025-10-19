---
title: The ANALOG group
---

The ANALOG parameters group stores information about the analog data recorded within a C3D file.  As a result, the parameter ANALOG:USED should be stored in all C3D files even if the file does not contain any analog data.  C3D files that do not contain analog data should set the value of the USED parameter to zero.

The original specification for analog data storage within the C3D file assumed that data values were sampled by an Analog to Digital Converter (ADC) and then written to the C3D file as binary samples.  The assumption was that the binary value would be stored in the C3D file as a signed 16-bit integer unless the C3D file used floating-point format, in which case the signed 16-bit value would be converted to a floating-pint value before being written to the file.

This method worked well for many years because the majority of analog data was sampled at 12-bit resolution and programmers implementing analog storage functions did not have to think too hard about the differences between storing signed offset, or unsigned offset data.  The sampled values obtained from the ADC could simply be written to the file, stored as a positive signed integer value, and any necessary scaling or format conversions could be handled by creating, and applying, the appropriate OFFSET and SCALE values.  It made no difference whether 12-bit or 14-bit data samples were considered to be a signed integer or an unsigned integer as all the possible unsigned values could be stored within the range of a signed 16-bit integer without any risk of integer overflow errors.

This situation changed in two ways with the introduction of 16-bit resolution Analog Data Convertor (ADC) samples:

- The potential for integer overflow exists when the ANALOG:OFFSET parameter is applied to 16-bit resolution data..  This requires that all math operations on analog data be performed with at least 32-bit resolution to handle any potential overflow when large analog data values are encountered with any significant OFFSET values because any positive offset applied to the maximum sample value causes an overflow error, potentially inverting the data sample.

- The interpretation of the format used to store the analog data sample is significant.  Before the introduction of 16-bit ADCs, most analog data samples contained 12-bit data values with a range of 4096 discreet values, stored as positive numbers from 0 to 4095 as a signed 16-bit integer and converted to a scaled voltage measurement by the application of the ANALOG:SCALE and ANALOG:OFFSET parameters associated with individual analog channels.  The introduction of 16-bit analog data samples changed this and requires that the analog values are interpreted as signed integer values.

The first C3D application to implement 16-bit analog data stored the analog data as unsigned 16-bit integer values, thus rendering the analog data unreadable to standard C3D applications that expect to read signed integers from the C3D file.  The programmer was unwilling to correct this, as the problems were only discovered after the software had been widely distributed and users started complaining that other C3D applications could not read the new format.

In order to work around this problem two additional parameters (ANALOG:FORMAT and ANALOG:BITS) were added to the C3D file format description to document the analog sample format and measurement resolution.  These two parameters are “optional” in the sense that they are unnecessary unless the analog values have been stored as unsigned integers.  Some applications will not read these parameters and will fail to read unsigned 16-bit analog data although in fact the additional ANALOG:FORMAT and ANALOG:BITS parameters are unnecessary as the choice of SIGNED or UNSIGNED data and the ADC or data resolution can be determined by simply interpreting the ANALOG:OFFSET value.

It is strongly recommended that anyone storing 16-bit analog data in integer format C3D files follow the original C3D format description and store their data using signed integers wherever possible.  Care is needed when writing code to convert between signed and unsigned formats or reading/writing all format variants.

The parameters listed below must always be provided if the C3D file does contain analog data.  Other ANALOG parameters may be required by particular software applications – consult your manufacturer’s documentation for details of application specific parameters.
