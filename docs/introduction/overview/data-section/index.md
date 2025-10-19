---
title: Data Section
---

The C3D file data section is located in the file after the parameter section.  The C3D format specification requires that the data section starts on the 512-byte block boundary that is indicated by the POINT:DATA_START parameter which is stored as a 16-bit unsigned integer in the C3D parameter section.  A copy of this value is also stored in the 12-word C3D file header record.

The C3D file data section is variable in length, depending on the amount of data stored, which is defined by the number of 3D points and analog samples stored, and the storage format (either integer or floating-point).
