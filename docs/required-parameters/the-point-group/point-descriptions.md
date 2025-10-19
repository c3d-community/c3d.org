---
title: POINT:DESCRIPTIONS
---

The POINT:DESCRIPTIONS parameter is a character data array provided to store a description of each 3D data point referenced by the POINT:LABELS parameter.  There should always be a one to one relationship between the number of LABELS and the number of DESCRIPTIONS although users occasionally create files with different numbers of LABELS and DESCRIPTIONS parameters.

By convention, these entries usually contain upper and lower case ASCII characters and are typically 32 characters in length.  The original C3D format supported entries up to 127 characters long and, while this is now 255 characters and may use UTF-8 encoding to support localized character sets, it is recommended that the parameter size is always kept to a minimum to avoid wasting the C3D file parameter section storage space.  Descriptions should always be concise because creating very long verbose or empty descriptions is a waste of space.

Although it is not strictly required, it is good practice to include a DESCRIPTIONS parameter for each point with a LABELS entry.  Since this is an array of character strings, the comments in the LABELS parameter description regarding the maximum number of array entries also apply to this parameter.  C3D files may contain up to 255 DESCRIPTIONS parameters, with additional descriptions stored in the additional DESCRIPTIONS2 parameter when necessary.

This parameter exists to provide human readable documentation about each of the individual 3D POINT:LABELS, which are generally short abbreviations of anatomical or other “landmarks” such as LASI, RKNE etc.  These names generally have longer POINT:DESCRIPTIONS such as Left ASIS Marker and Right Knee Marker.  The parameter is not locked and may be edited without affecting the C3D file structure.
