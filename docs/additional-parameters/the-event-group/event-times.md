---
title: EVENT:TIMES
---

This array stores the time of each event from the start of the trial where the first 3D sample (frame 1) is time 0.0.  The time is recorded in an array (USED,2) as two floating-point numbers in the form of “whole minutes”, “seconds (and fractions of)”.

To obtain the actual event time, add the two values together using double precision floating-point storage.  The stored times are based on the 3D sample rate as recorded in the header and POINT:RATE parameters and assume that this value is correct.  This could cause problems if the value stored in the C3D file does not match the true data collection rate, e.g., if an application stores a rate of 60 when the actual video frame rate is 59.94Hz.
