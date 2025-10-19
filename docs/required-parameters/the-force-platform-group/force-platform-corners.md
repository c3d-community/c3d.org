---
title: FORCE_PLATFORM:CORNERS
---

The FORCE_PLATFORM:CORNERS parameter is an array (3,4,USED) of floating-point values that record the locations of the force platform corners in the reference coordinate system, measured in POINT:UNITS.  This is used by any graphics application to draw the force platforms, force vectors, and center of pressure information in the correct locations relative to the 3D point data.

The first dimension specifies the X, Y, or Z coordinate, and the second dimension specifies the corners.  The corners are numbered from 1 to 4 and refer to the quadrant numbers in the X-Y plane of the force platform coordinate system (not the 3D point reference coordinate system).  These are +x +y, -x +y, -x -y, and +x -y, with respect to the force plate coordinate system.

The third dimension of the CORNERS array (USED) must be equal to or greater than the value of the FORCE_PLATFORM:USED parameter.
