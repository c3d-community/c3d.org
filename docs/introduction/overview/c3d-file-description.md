---
title: C3D File Description
---

All C3D files normally contain three sections of information (header, parameters, and data).  The C3D file header section is always the first 512-byte block in the file. C3D files should be seen as consisting of blocks that are 512 bytes long (256 16-bit words) and, while all sections within a C3D file must start on a 512 byte block boundary, the information stored within the parameter and data sections can cross individual block boundaries.
