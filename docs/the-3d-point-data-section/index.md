---
title: The 3D Point Data Section
---

The C3D file format is designed to store 3D point and analog information so that the stored 3D locations (stored as XYZ coordinates) can be synchronized with any number of analog measurements.  Information to interpret the 3D/analog section contents is stored as parameters that describe the 3D sample rates, analog sample rates, and the number of sampled points and analog channels, together with information documenting the data in each channel, allowing users to determine the structure and contents of the stored data each time that a new C3D file is read.

## Overview

To allow data collection systems to maintain synchronization when simultaneously recording 3D and analog samples, all data samples are interleaved frame-by-frame throughout the C3D data section.  While files normally contain both 3D and analog samples, files may contain only 3D point or analog data samples.

The C3D format was originally designed to store 3D coordinate data, referenced to a common origin as XYZ coordinates defining each point location together with multiple related analog data.  This data storage format is defined when the second byte stored in the C3D file header is 80 decimal, the ASCII “P” character.

