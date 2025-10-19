---
title: ANALOG:DESCRIPTIONS
---

The ANALOG:DESCRIPTIONS parameter is a character data array that usually consists of a short description of each analog channel referenced by the ANALOG:LABELS parameter.  There should always be a one to one relationship between the number of LABELS and the number of DESCRIPTIONS although users occasionally create files with different numbers of LABELS and DESCRIPTIONS parameters.

The descriptive entries can contain upper and lower case ASCII characters and are typically 32 8-bit characters in length but may be up to 255 characters.  However it is recommended that the DESCRIPTIONS strings stored are as concise as possible for efficient storage.  UTF-8 encoding is permitted to support localized character sets but keep in mind that the length of each parameter value defines the number of 8-bit values encoded.

This parameter exists to provide documentation about each of the individual analog channels.  The ANALOG:LABELS parameter generally stored a short abbreviation of each channel name such as 1FX, EM05 etc.  Each of the channels referenced by these LABELS generally has a longer ANALOG:DESCRIPTIONS such as Fx channel, FP1 sn 628301 and Left Extensor Hallucis Longus etc.

Note that, like the POINTS:DESCRIPTIONS, the ANALOG:DESCRIPTIONS are provided simply as a means of providing a human readable description or documentation of the analog channel.  Software applications that need to access individual analog channels should access each channel by use of the ANALOG:LABELS, not the ANALOG:DESCRIPTIONS parameter value.

If you are going to create an ANALOG:DESCRIPTIONS parameter then it makes sense to use it to document the contents of each analog channel instead of creating descriptions like AMTI OR6 Series Force Plate [n] and Analog EMG::Voltage [4,5] which simply duplicate information in the C3D file and is not helpful to anyone accessing the C3D data in the future.  It would be much more useful to record the force plate serial number and the muscle name.
