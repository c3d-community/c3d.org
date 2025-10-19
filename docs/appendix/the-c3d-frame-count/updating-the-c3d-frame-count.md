---
title: Updating the C3D frame count
---

If a C3D file is edited and 3D data frames are deleted, resulting in reducing the frame count from more than 65535 frames to less than 65535 frames then, if it exists, the POINT:LONG_FRAMES parameter should be removed and the new frame count stored by updating the current POINT:FRAMES parameter. If the C3D file contained a TRIAL group then, depending on the location of the deletions from the C3D file, both the TRIAL:ACTUAL_START_FIELD and the TRIAL:ACTUAL_END_FIELD parameters may need updating to return the new frame count for compatibility with applications that read the TRIAL parameters to determine the C3D frame count.

If a file is edited and 3D data frames are added, resulting in increasing the frame count from less than 65535 frames to more than 65535 frames then the new frame count should be stored in the POINT:FRAMES parameter as a floating-point value. If the C3D file contains a TRIAL group then, depending on where the new frames were added to the C3D file, the TRIAL:ACTUAL_START_FIELD and ACTUAL_END_FIELD parameters will need to be created.
