---
title: Header Section
---

The first 512 byte block of a C3D file is the header section, starting with a twelve word header record that defines the basic storage format of the C3D file, allowing applications to determine the file structure, locate, read, and interpret the parameters and data stored in the file.  The first header byte points to the parameter section in the file while the second header byte defines the data section storage.  The parameter pointer allows applications to locate the parameter section and determine the endian format used, while the data section storage format is defined by the second byte which is normally 0x50h, defining the 3D Point storage method.  The header record contains a number of items that define the internal data structure of the C3D file.
