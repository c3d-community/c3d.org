---
title: Additional ANALOG parameters
---

These additional parameters document the extension of the ANALOG group to support more than 255 “analog channels”, enabling the storage of digital data values in the same manner that the C3D file uses to store more than 255 3D points.  This method remains compatible with older applications which may be limited to only displaying and processing less than 255 analog channels but the extension to add more analog channels does not change the internal C3D format.  Therefore implementation is relatively easy for most applications working with the C3D file format and makes it easy to maintain compatibility with older C3D files.

As with the extension to the POINT group, the additional parameters described here must be each treated as a single array, the contents of all of the associated LABELS, DESCRIPTIONS, SCALE, OFFSET, and UNITS parameters must all be manipulated in synchronization with each other.
