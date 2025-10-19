---
title: ANALOG:GAIN
---

The ANALOG:GAIN parameter is an array of signed integer values – one entry per USED analog channel – that record the voltage ranges of the individual analog channels.  The manufacturer that created the parameter defined the following values:

- 0 = unknown
- 1 = ± 10Volts
- 2 = ± 5Volts
- 3 = ± 2.5Volts
- 4 = ± 1.25Volts.

The idea appears to be that this allows a specific data collection application to record, and potentially control, ADC voltage range associated with individual ADC channels.  However the ADC range is normally configured when a data collection environment is setup and the ADC range setting used in the calculation of the ANALOG:SCALE parameter vales for each analog channel.  Since this parameter is manufacturer specific and has not been formally documented, it should be seen as a descriptive value and not part of the stored ANALOG:SCALE calculation.  The values appear to duplicate the values used in the analog scaling calculations.

A potential problem with the ANALOG:GAIN parameter is that many external devices used by a data collection system have their own gain controls which can be independently adjusted and any external gain adjustments by the user may not be recorded by the parameter.  In addition, since the C3D format defines the ANALOG:SCALE calculation as taking the ADC sampling range into account, this parameter essentially duplicates a value that has already been taken into account and has no useful function other than documentation.
