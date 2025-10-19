---
title: Event Times
---

The event times are stored in the order in which they are written and may not have any logical order.  Header words 153 through 188 stores up to 18 event times in floating-point format.  Each event time is recorded as the number of seconds and fractions of a second that have elapsed since the first frame (designated as 0.0s) of data recorded in the C3D file.

For example, an event time of 1.26 seconds indicates that the event was recorded 1.26 seconds after the start of the first frame of data recorded in the C3D file.  Thus if the 3D data rate is 60Hz (60 frames per second) then the event occurs in the middle of C3D file frame number 75 … 1.26/0.0167=75.6 where each frame is 1/60th of a second (0.0167).
