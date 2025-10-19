---
title: Additional POINT parameters
---

When C3D files store more than 255 3D points, the parameter storage limits for recording the POINT:LABELS and POINT:DESCRIPTIONS are exceeded, each indexed by an unsigned byte counter, these parameters can only store a maximum of 255 identifying strings.  When a C3D file contains more points, storage for additional identifications and descriptions is extended by creating a new pair of LABELS and DESCRIPTIONS parameters with a number indicating the order of the stored values e.g. LABELS2, LABELS3, DESCRIPTIONS2, DESCRIPTIONS3, etc.

This method remains compatible with older applications which may be limited to only viewing and, working with, the first 255 points but does not change the internal C3D format.  Therefore implementation is relatively easy for most applications working with the C3D file format and maintains compatibility with older C3D files.

It is important to note that while the LABELS and LABELS2 parameters are separate parameters in the POINTS group, they contain a single list of labels that identify the 3D points stored in the C3D file and so all the LABELS values in the C3D file must be treated as if they are a single parameter array.  If a 3D point is deleted within the first 255 points stored in the C3D file then the first point in LABELS2 must be moved to the last value stored in the LABELS array and the remaining LABELS2 values shifted down, reducing the size of the LABELS2 array, not the LABELS array which must remain at 255 entries.
