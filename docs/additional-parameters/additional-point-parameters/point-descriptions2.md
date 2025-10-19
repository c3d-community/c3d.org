---
title: POINT:DESCRIPTIONS2
---

This is an array of ASCII or UTF-8 encoded character strings that may be used to describe each LABELS2 value.  This parameter is synchronized with the POINT:LABELS2 parameter and contains additional description strings with the same properties as the standard POINT:DESCRIPTIONS parameter.  This parameter describes the contents of a LABELSn parameter with the same array index to document the point location or function for anyone reading the C3D file.  Any modifications to the C3D file points, by adding or deleting a point, must maintain the descriptions stored in DESCRIPTIONS, DESCRIPTIONS2 etc., in synchronization with the identifiers stored in the LABELS parameters.
