---
title: TYPE-3
---

For a TYPE-3 force platform, these values record the sensor offsets.  ORIGIN(1,) must contain the distance between the transducer axes and the force platform y-axis.  ORIGIN(2,) must contain the distance between transducer axes and the force platform x-axis.  ORIGIN(3,) should contain the distance between the force plate origin and the surface of the force platform.

Since the force platform z-axis projects down, the ORIGIN(3,) value will normally be negative as it stores the distance within the force plate coordinate system.

Refer to the manufacturer’s specifications for the force platforms being used – for most plates, you can assume that ORIGIN(1,) is half inter-transducer distance in x-direction (shown as a below) and ORIGIN(2,) is half inter-transducer distance in y-direction (shown as b below).  ORIGIN(3) can be a little harder to find but will be provided in the manufacturer’s documentation.  Remember that all distance units must be the same as were used to express the locations of the 3D points in the laboratory coordinate system.
