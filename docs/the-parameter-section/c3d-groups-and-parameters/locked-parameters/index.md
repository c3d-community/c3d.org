---
title: Locked Parameters
---

The parameter and group locked flag is set by storing the length of the group or parameter name as a one’s complement signed 8-bit integer, a negative length indicates a locked parameter or group while a positive length indicates that it is unlocked.  Note that while many integer values in C3D files are treated as unsigned values, the name lengths must always be read and written as signed integers

The C3D file format allows any application to store a large number of parameters within a C3D file, in a structure that provides a uniform access interface to the information.  This allows the user to perform read/write/modify operations on the parameter data with relative ease.  Uncontrolled editing of some C3D file parameters can create a problem if an application or user edits the C3D file in a way that changes the structure but fails to update the parameters, or updates a parameter that affects the structure of the C3D file.

For example, a casual change to the locked value of the POINT:SCALE parameter would cause all the 3D data in the file to be incorrectly scaled.  Likewise a change to the value of ANALOG:USED (the number of analog channels contained within the C3D file) could render the C3D file unreadable to most software programs – the C3D file would appear to have a different amount of analog data than was actually stored in the file, potentially corrupting the C3D file.

Parameters may affect the C3D format in ways that a user does not understand, for example, changing an unlocked POINT:SCALE value from -0.036 to -1.0 does not affect 3D data stored as floating-point values, but will change all of the 3D data marker residuals, potentially making the data appear inaccurate and affecting any subsequent interpolation, filtering, and data processing.

The C3D parameter definition deals with this issue by allowing parameters to be locked against unauthorized access.  This is accomplished by setting the first byte of the parameter header (the parameter length) to be negative (the absolute value remains unchanged).  All parameters that have a negative length are considered locked and should not be casually changed by the user.  A locked parameter can be edited and changed if necessary, the locking feature is simply present to prevent anyone accidentally changing a parameter that will affect the data interpretation.

Applications that allow the user to edit parameters should respect the locked status flag and either refuse to change locked parameters, or restrict this feature to prevent an inexperienced user from damaging the integrity of the C3D file data. Unless there are special circumstances, any application that accesses a C3D file should not modify locked parameters.

All applications that create C3D files should make sure that they flag any parameters that they create appropriately.  Important parameters that can affect the data integrity (i.e., the POINT parameters DATA_START and SCALE etc.,) must be flagged as locked so that any user editing the C3D file with another application will be warned before they do any serious damage to the C3D file contents.
