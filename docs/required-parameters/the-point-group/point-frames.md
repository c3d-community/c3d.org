---
title: POINT:FRAMES
---
The POINT:FRAMES parameter is single value that stores the number of 3D data frames that are recorded in the C3D file.  Note that when the 3D data has been derived from a video based system this value does not necessarily correspond to the number of video frames in the recording that was used to create the C3D file.

While the POINT:FRAMES parameter can be stored as a floating-point value, it has been traditionally written and interpreted as an unsigned integer with a range of 1 to 65535 (there is no “frame zero”).  When stored as an integer, if the POINT:FRAMES value is 65535 then applications must check for the existence of the additional parameters POINT:LONG_FRAMES and the TRIAL group ACTUAL_START_FIELD and ACTUAL_END_FIELD parameters which may describe a total frame count greater than 65535 frames.  Note that the C3D file does not treat 3D data as interleaved, there are no odd or even fields; data is only stored as individual frames so the TRIAL group parameters must be read as describing C3D frames, not fields.
