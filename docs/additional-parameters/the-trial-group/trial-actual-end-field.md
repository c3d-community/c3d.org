---
title: TRIAL:ACTUAL_END_FIELD
---

The first frame number in the C3D file is stored in two unsigned 16-bit integer values to form a 32-bit value.  The first unsigned 16-bit integer is the least significant word while the second unsigned 16-bit integer is the most significant word therefore the first frame number is calculated as:

First frame number = ACTUAL_START_FIELD[1] + ACTUAL_START_FIELD[2]*65535
