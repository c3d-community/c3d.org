---
title: The TRIAL frame calculation
---

Thus, when using the TRIAL group parameters to calculate the C3D file size, the number of frames in the C3D file is calculated using the 32-bit TRIAL group values, subtracting the results of the ACTUAL_START_FIELD from the ACTUAL_END_FIELD calculated values and adding 1:

Number of frames = Last frame number – First frame number +1

A prime example of this is that if a C3D file contains data from frame 233  to frame 79589, then the C3D frame count is 79357 = 79589 – 233 +1 because there is no frame 0 in a C3D file, the first frame is always frame 1.  To clarify the mathematics, if the first frame number in a file is 10 and the second frame number is 11 then the file contains 2 frames, frames 10 and 11, so the calculation is 11-10 +1.

The default POINT:FRAMES parameter will normally contain the same frame count unless the count is greater than 65335 in which case POINT:FRAMES should be set to 65535 indicating that the integer frame count limit may have been exceeded.
