---
title: Parameter Information
sidebar_position: 2
---

In addition to physical measurement samples, a C3D file can contain information about the data, such as measurement units, data labels, and data description parameters, stored in the parameter section of the file.  This allows users to locate data by its name, for example an analog channel can be identified by the ANALOG:LABEL (e.g. LFS, described as Left Foot Switch) regardless of the actual analog channel used to store the data.

All that is required to share any additional information between different C3D file users is that the parameters are documented so that users can interpret the name and function of each parameter.  Since all C3D parameters can be internally documented within the file by using the description field that is part of the parameter record, C3D files normally require less external documentation than other file formats.
