---
title: SEG:DATA_LIMITS
---

A 3 by 2 array of floating-point values that defines the upper and lower limits of the reconstruction volume (measured in POINT:UNITS) during the trajectory photogrammetry calculations.

This parameter is generally used by the photogrammetry software to enable it to discard 3D information that strays outside the data collection volume.  This helps speed up the intense photogrammetry computations by allowing an application to ignore unwanted data from reflections, camera strobes, lights etc., which might reduce the overall accuracy of data stored using the original integer format by requiring a larger POINT:SCALE value to accommodate spurious points outside the data collation area as a result of reflections or other photogrammetry errors.

If set correctly, the SEG:DATA_LIMITS parameter can also provide useful information to any application that needs to set up a view window as it documents the maximum bounds of the 3D trajectory data.
