---
title: Additional FORCE_PLATFORM parameters
---

The calibration matrix is the inverse matrix of the sensitivity matrix used to calculate the scaling factors.  Its presence in a C3D file is optional, allowing greater accuracy in the calculation of forces, powers and moments from the recorded analog data if the full calibration matrix for each force plate is stored within the C3D file and is available to any application that reads the raw analog force plate data from the C3D file.  A full matrix, which must contain all 36 unique crosstalk components, means that the file stores all the information needed to generate accurate force and moment data.

Manufacturer’s software applications that store the force plate calibration data separately, perform the force and moment calculations independently, and then store the resulting force and moment values in the C3D file make it very difficult for the user to verify the results when examining the recorded data after a period of time when the original data collection environment may have changed.

The FORCE_PLATFORM:CAL_MATRIX parameter is an array of 36 floating-point values, supplied by the force platform manufacturer, that document the internal force platform cross-talk signal components.
