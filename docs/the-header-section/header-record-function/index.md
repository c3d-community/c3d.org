---
title: Header Record Function
---

The values stored in the C3D file header record (the first 12 words in the C3D file header section) define the C3D file structure and basic content format, enabling an application to open a C3D file and determine the file structure, contents, section locations and the C3D file size.  For example:

- The first 512 bytes of a C3D file (block #1) is the header section.

- The parameter section follows the header section, starting at the location defined by the 1st byte of the header record.  The 3D data section is stored following the parameter section so effectively the start of the data section defines the space available for parameters in the file.  The parameter section size is limited to 127.5kB by the 8-bit parameter header block counter.

- The 3D Point storage format is defined by the 2nd byte in the header section, normally 0x50h, which documents that the data section can store multiple frames of 3D points with associated analog samples.

- The start of the 3D data section is defined by word 9 (POINT:DATA_START) and the size is defined by the number of 3D frames stored (POINT:FRAMES).  The storage used by each frame is determined by the number of 3D points in each frame, the number of analog channels and samples stored in each frame, and the format used (integer or floating-point).
