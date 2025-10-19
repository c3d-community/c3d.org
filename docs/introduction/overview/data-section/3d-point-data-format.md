---
title: 3D Point data format
---



The structure used to store 3D coordinate and analog data is defined by the second byte in the C3D file header.  The default value of the second header byte is 0x50h, an ASCII “P” character which defines the data section contents as frames of 3D Points, stored as XYZ co-ordinates with a residual and camera mask, together with multiple synchronized analog data samples.

The 3D Point data is normally stored using signed integers, each 3D point coordinate stored using 16-bit signed integer values in the range of –32767 to +32767 scaled to physical world values by applying a common floating-point scaling factor stored in the C3D file parameter section.  Analog channel data samples are normally stored as 16-bit integers, recording the raw ADC sample values.  Each analog channel has an associated scale and offset parameter that is applied to each stored analog sample, scaling the stored 16-bit sample into a physical world measurement value.
