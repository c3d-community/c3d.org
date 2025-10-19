---
title: POINT:X_SCREEN
---

This is a two-character, 7-bit ASCII string containing a sign together with a single character (+X, +Y, +Z, -X, -Y, -Z) that indicates which axis of the reference coordinate system will be displayed left-to-right across the screen.  This parameter provides information and is compatible with the C3D file format.

While this parameter (and its companion Y_SCREEN, below) and commonly found in C3D files many software applications ignore them.  Setting a C3D parameter to a particular value will only be effective if the software application reading the C3D file reads and understands the parameter.
