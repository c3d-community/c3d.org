---
title: TRIAL:CAMERA_RATE
---

The TRIAL group usually contains additional parameters which may be related to external video film synchronization applications.  These additional undocumented parameters have no significant function in the C3D file format but may be relevant when attempting to synchronize an external video source.  Video data recorded with a standard video camera format is often interlaced when created and recorded as odd and even fields of data, each frame of data record at a 60Hz frame rate may contain a pair of interlaced 30Hz fields.

The existence of the TRIAL:CAMERA_RATE parameter, when the C3D file contains a POINT:RATE parameter, suggests that the TRIAL parameters exist to synchronize C3D data with video animations.  A POINT:RATE of 120Hz and a TRIAL:CAMERA_RATE of 60Hz could potentially synchronize each C3D frame with an odd and an even video field.
