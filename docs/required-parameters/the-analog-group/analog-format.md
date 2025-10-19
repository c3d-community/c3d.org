---
title: ANALOG:FORMAT
---

The ANALOG:FORMAT parameter was first described about 2005, as a result software applications created prior to that time will not read it.  The parameter was invented originally because a manufacturer started storing analog data as unsigned values when floating-point became the default C3D file format.  The parameter describes the analog data storage format, not the C3D file format.  The original C3D file format defaulted to storing all data and parameters as one’s complement, signed 16-bit integer values, with a range of -32767 to +32767.  This is described as a signed C3D file, which evolved to be called an unsigned C3D file that treats the parameter integers as unsigned values, extending the maximum positive value in many areas where a negative value is not possible (e.g. point and analog channel counts).  So even if the C3D format is floating-point, the C3D parameter integers will be read as unsigned integers resulting in the C3D file being described as unsigned.

The ANALOG:FORMAT parameter is a character data array that consists of a single 7-bit ASCII (A-Z, 0-9) string that documents the analog data format used within the C3D file.  The parameter has two possible values: SIGNED or UNSIGNED.  This specifies whether the 'data' format (rather than the 'storage' format) is 2's compliment or offset binary respectively.  This parameter applies to all analog data values within the 3D and analog data section.  It should normally be “locked”.

If the ANALOG:FORMAT parameter contains the string “SIGNED” then the C3D 'storage' format for both the data samples and the ANALOG:OFFSET parameters must also be “SIGNED”.  This is the default storage method for all analog data values, irrespective of resolution and allows data to be stored using signed integer values from -32767 to +32767 representing both positive and negative input signal excursions.

If the ANALOG:FORMAT parameter contains the string “UNSIGNED” then the ANALOG:OFFSET parameters must also be treated as “UNSIGNED” values.

If the ANALOG:FORMAT parameter does not exist it should be assumed that its value is SIGNED unless the analog data contains 16-bit values, in which case UNSIGNED is a possibility.
