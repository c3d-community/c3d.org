---
title: FORCE_PLATFORM:ORIGIN
---

The FORCE_PLATFORM:ORIGIN parameter is an array (3,USED) of floating-point values whose interpretation depends on the type of force plate used (as set by the TYPE parameter).  You should be able to find all the information that you need to calculate the correct ORIGIN values in the appropriate force plate manual supplied by the force plate manufacturer.

The ORIGIN vector is defined to enable the transformation of the force vectors, as measured by the transducers, into the laboratory coordinate system via the center of the working surface of each force plate defined by the CORNERS parameters.  Normally the force plate coordinate system origin is below the surface of the platform and the force plate coordinate system z-axis is directed downwards, so that the sign entered in ORIGIN(3) will be negative.  The force platform coordinate system depends upon the signals that are output from the transducers, and may need to be modified to provide a standard right-handed coordinate system, which ORIGIN is assumed to be.  Assuming a left-handed coordinate system will change the sign of one of the components.

In general, the vertical force plate ORIGIN component will be below the surface of the force plate and many applications may experience problems if this is entered incorrectly.  While many motion capture calibration systems place a jig on the force plate in an attempt to synchronize the force platform location to the 3D collection volume, this calibration does not affect the force platform origin parameters which must be entered when a force plate is defined in the data collection environment.  The FORCE_PLATFORM:ORIGIN parameter describes the origin within the force platform location, recorded in the C3D file FORCE_PLATFORM:CORNERS parameter and so it is not affected by any changes in the 3D data collection volume location.

All ORIGIN distance units must be recorded in POINT:UNITS, as used to express the locations of the FORCE_PLATFORM:CORNERS in the 3D coordinate system.  It is important to note that every distance in a C3D file must be expressed in the same units.
