---
title: Parameter Section
---

The C3D file parameter section header records the endian format used by the C3D file.  As a result, the parameter section header must be read when a C3D file is first opened because the endian format affects the interpretation of all 16-bit integer and 32-bit floating-point values stored in the file.  Once the endian format is known, all the information stored in the C3D file is readable.  The items stored in the parameter section normally document the contents of the data section, allowing applications to read, interpret, and analyze the stored data.

The parameter section usually starts at block number 2 in the C3D file although this is not fixed and may not be the case in every file.  The C3D format requires that the parameter section starts on a 512-byte block boundary that is indicated by the pointer in the C3D file header section.  Applications reading a C3D file must determine the location of the parameter section by reading the pointer to the parameter location, stored as an unsigned 8-bit byte, in the header section.

The parameter section is variable in length, typically at least eight blocks or more, the size of the parameter section is defined by the parameter header record, which supports a maximum parameter section size of 127.5kB (255 blocks).
