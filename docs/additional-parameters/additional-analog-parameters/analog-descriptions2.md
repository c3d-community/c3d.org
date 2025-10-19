---
title: ANALOG:DESCRIPTIONS2
---

This parameter exists to provide documentation about each additional analog channel defined by the ANALOG:LABELS2 parameter and will only be found in C3D files that contain more than 255 analog channels.  The array entries are read with reference to LABELS2 entries with the same array index.

The ANALOG:DESCRIPTIONS2 entries are provided to provide document the analog channel contents and there is no requirement that they are unique. Applications that need to reference or access individual analog channels must access each channel by use of the ANALOG:LABELS, never the ANALOG:DESCRIPTIONS parameter value.

All DESCRIPTIONS parameter characteristics must be identical, defined as CHAR strings with the same lengths.  UTF-8 encoding is permitted as this parameter exists to provide documentation for the end user and anyone reading the C3D file.
