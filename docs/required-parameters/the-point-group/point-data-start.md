---
title: POINT:DATA_START
---
The POINT:DATA_START parameter is an unsigned 16-bit integer value used as a pointer to the first block of the 3D/analog data section within the C3D file and must always be used to determine location of the data section.  A C3D file block is always 512 bytes long (256 sixteen-bit words).  The first block in the C3D file is block number one and contains data structures that document the contents of the C3D file. Although located in the POINT group, this parameter is must exist even when the C3D file only contains analog data, as analog data is stored in the 3D data section.

A copy of the DATA_START parameter value can also be found stored in word 9 of the C3D file header to enable software applications to quickly locate the start of 3D data without reading the parameter section of the C3D file.  The copy of the POINT:DATA_START value stored in the C3D file header value must always be identical to the parameter value.  As a result of this parameter being stored as an integer in the C3D file header it must always be written as an integer value in the parameter section.
