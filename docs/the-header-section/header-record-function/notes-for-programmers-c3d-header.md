---
title: Notes for Programmers - C3D Header
---

1.  The first word in the C3D file header must be read as two bytes so that it is unaffected by the C3D file endian format.  The first byte is a pointer that locates the start of the C3D parameter section.

2.  The second byte in the C3D file header defines the data section storage format used by the C3D file.  The default value is an ASCII “P” character (0x50 hex) that defines the storage format of the C3D file data section as XYZ coordinates with analog samples.

3.  When opening a C3D file you must determine the endian format of the file before reading any float-point point or integer values because the C3D file endian format affects all 32-bit floating-point and 16-bit integers stored in the C3D file.  The endian format is determined by reading the parameter header record at the start of the parameter section.

4.  The C3D file format supports three endian formats.  All C3D applications must support each format to guarantee universal access to archived data and support other computing environments.  The c3d.org web site contains sets of identical example files in all formats that can be used to verify that a new application accurately support all C3D formats.

5.  The C3D header words 4 and 5 are unsigned 16-bit integers that record the original raw frame numbers used to create the C3D file.  All applications reading a C3D file containing 3D Point data should ignore these two words because they are normally the frame numbers of the data that created the C3D file, as a result they may not be the C3D file frame numbers.

6.  The data in the C3D file can be synchronized with movie and animation videos by recording the original video frames in the TRIAL parameter group which offers support for odd/even video data frame synchronization.

7.  Software applications should always preserve the values of all header words marked reserved for future use or currently not used whenever a C3D file is rewritten.

8.  Applications that create or modify C3D files must always ensure that the C3D header section contains the identical copies of the values stored in the parameter section (e.g., POINT:DATA_START, POINT:RATE, ANALOG:RATE etc.).  A C3D file is corrupted if there is a discrepancy between header record values and parameter section values for the same items.

9.  When header word 150 is not zero and contains the key value (0x3039h) this indicates that the C3D file supports the storage of header event labels containing up to four ASCII characters even if the event group parameter storage is the default method.  Both event storage methods can be used independently.

10. All applications accessing C3D files need to support the header events as an event storage method although EVENT group parameter storage is a common alternative.
