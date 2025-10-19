---
title: Notes for programmers - Integer Analog Data
---

1.  By default, all analog samples are stored as 16-bit integers with values from 0 to the maximum resolution of the ADC.  The actual resolution and format of the data may be recorded by setting the optional ANALOG:FORMAT parameter to the value UNSIGNED and the optional ANALOG:BITS parameter to the actual number of bits used, i.e., the value 12, 14, or 16.

2.  If the ANALOG:FORMAT parameter is UNSIGNED then the ANALOG:OFFSET parameter must be interpreted as an unsigned integer.

3.  If the ANALOG:FORMAT parameter does not exists then assume that the analog data is stored as positive value as a signed 16-bit integer.  This will be correct most of the time.

4.  The possibility of 16-bit integer overflow exists when applying the ANALOG:OFFSET parameter to the sampled 16-bit analog data.  It is recommended that all applications perform internal scaling calculations with more than 16-bits of resolution (either 32-bit or floating-point) and check the results to ensure that internal math overflow has not occurred.

5.  Although it is not recommended, some software applications “auto-zero” analog data values by adjusting the ANALOG:OFFSET parameter.  Thus, for example, 12-bit analog data could easily have varying ANALOG:OFFSET values that are close to 2047 but vary from channel to channel.

6.  The analog scaling calculation converts the binary analog sample data from the ADC into physical world measurement defined by the ANALOG:UNITS parameter, but note that the ANALOG:UNITS value only documents the units of the calculated results, changing the parameter does not affect the scaling calculations.
