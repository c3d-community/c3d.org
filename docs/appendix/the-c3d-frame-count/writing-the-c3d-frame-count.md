---
title: Writing the C3D frame count
---

When creating a new C3D file, or saving any changes to an existing C3D file that has been modified, the frame count may need to be stored using several different methods for compatibility with applications whose programmers independently created unique frame storage methods.

The default frame count storage method should be to write the C3D frame count to the POINT:FRAMES parameter as an unsigned integer if the C3D frame count is less than 65535 and as a floating-point value if the frame count is 65535 or more.  This method guarantees compatibility with all applications that meet the C3D standard although some applications may require that the C3D file header raw data frame range defines the same count, and the TRIAL parameter group defining the first and last frame numbers, forcing the application to calculate the file frame count.
