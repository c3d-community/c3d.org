---
title: Maintaining C3D frame count compatibility
---

When a C3D file is created, some applications may expect that any C3D frame count greater than 65535 is stored in either the POINT:LONG_FRAMES parameter, or the TRIAL:ACTUAL_START_FIELD and the TRIAL:ACTUAL_END_FIELD parameters exist with data allowing the frame count to be calculated.  So it may be necessary to create these parameters if they do not exist, although the default method should be to store all counts that exceed 65535 in the POINT:FRAMES parameter using floating-point.

When the frame count is changed in any way it is recommended that the header words 4 and 5, that record the frame range of the raw data that created the 3D data stored in the C3D file should not be changed, thus preserving the original frame range that created the C3D file.

However some applications may incorrectly read these header values as describing the C3D file data range.  As a result, to maintain compatibility with some older C3D applications it may be necessary to update the header values to describe the range of frames currently stored in the C3D file.  Since the header record words are 16-bit integers they cannot store values greater the 65535 so if the C3D file contains more than 65535 frames, write the frame range as 1 to 65535 for compatibility and create the TRIAL group so that older applications can calculate the frame count.

It is recommended that all new C3D applications determine the frame count from the POINT:FRAMES parameter, ignore the raw data values in the C3D file header.  It may be necessary, when creating a new C3D file to offer users the option of creating the both the POINT:LONG_FRAMES parameter, and the TRIAL:ACTUAL_START_FIELD and TRIAL:ACTUAL_END_FIELD parameters to support specific manufacturer’s unique C3D frame count environments.
