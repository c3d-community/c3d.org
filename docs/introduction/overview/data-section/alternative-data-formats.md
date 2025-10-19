---
title: Alternative Data Formats
---

The 3D Point format, storing locations as XYZ coordinates with interleaved analog data samples, is the default data section format and is specified by the C3D file header byte #2 which is 0x50h, the ASCII “P” character.  The C3D format was designed to be flexible so the option to create new data section storage formats exists but is very complex.

While the data section format can be changed, and determined when a C3D file is opened by reading the C3D file header byte #2, the new data section format must be fully documented if it is to be accessible.  Any new data section proposal means that all C3D applications need to be updated to read and interpret it before C3D users are able to access the new data section contents.

The 3D point format (header byte #2 is “P”) is the only publically defined format that is universally accessible at this time.  No other formats have been described and while users can create them, they will be inaccessible until they are fully publically documented and all applications updated to read the new data section format.
