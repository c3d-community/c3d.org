---
title: TYPE-4
---

This force platform is the same as a TYPE-2 force platform except that a full calibration matrix is being provided via the CAL_MATRIX parameter which includes full crosstalk scaling.  For a TYPE-4 force plate the individual channel SCALE parameters should convert the analog data to volts only because the calibration matrix is applied in an additional step to convert volts to force and moment units. Do not use a TYPE-4 force plate type unless the force plate manufacturer provides a complete crosstalk correction matrix with scaling values for all matrix entries.  If the supplied matrix only contains the main diagonal elements then define the force plate as a TYPE-2 and store the individual scale values for the analog channels.

The recommended ANALOG:LABEL and ANALOG:DESCRIPTIONS are shown below, these are identical to a TYPE-2 force plate.  When multiple force plates are used, identify each plate with a number to ensure that each ANALOG:LABEL is unique.  Correctly identifying each channel takes very little effort when compared to the amount of time that can be spent attempting to discover force plate configuration and scaling issues in data.

Note that some applications may not recognize TYPE-4 plates correctly.  These applications will usually work correctly by specifying the FORCE_PLATFORM:TYPE as a TYPE-2 plate and editing the associated ANALOG:SCALE parameters.  If in doubt, consult your application and force plate vendor, but note that defining a force plate as a TYPE-4 plate when the manufacturer has not provided a full crosstalk matrix does not improve accuracy and adds a needless complication to force measurements.
