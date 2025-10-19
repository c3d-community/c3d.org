---
title: Notes for programmers - Floating-point 3D Data
---

1.  The POINT:SCALE parameter is copied to the C3D file header (words 7-8) and can be quickly located and read by applications once they have determined which of the C3D processor formats (DEC, Intel, and SGI/MIPS) is used.

2.  When a file contains floating-point scaled 3D data then analog data samples will be stored in floating-point format.  However the C3D format will apply the analog scaling calculations to the stored sample values so analog data samples should not be modified or scaled prior to storage.

3.  If the 3D data points are stored in floating-point format, the X, Y, and Z coordinates have been already multiplied by the scale factor.  Words 7-8 contain normal 4th word signed integer value stored as a floating-point number.  To extract the mask and residual data, this word should be converted to a signed integer, divided into high and low bytes, and the low byte multiplied by the absolute value of the POINT:SCALE parameter to obtain the correct residual value.

4.  It is important to realize that the sign of the POINT:SCALE parameter and the magnitude of the parameter are treated as two independent factors in floating-point data files.  The sign simply indicates that the file is a floating-point format, while the magnitude is used to scale the residual values and should be set to an appropriate value (maximum coordinate/32000) in case the C3D file is converted to integer format.  Failure to calculate and store a valid POINT:SCALE parameter will cause corruption if the file data is format is changed to an integer format for any reason.

5.  Within each 3D frame, the 3D points are stored in the order recorded by the parameter POINT:LABELS followed by the analog data, if present.
