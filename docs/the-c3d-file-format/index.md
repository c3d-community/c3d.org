---
sidebar_position: 1
---

# The C3D File Format

The C3D File Format specifications were originally outlined by Edmund Cramp and maintained by him until the end of 2023. At such time, the C3D Community CIC took over the obligation to maintain the C3D specification. Any included material written in first person was written by Ed and his experience with the C3D file format.

---

Originally based on a description of the C3D format written by Andrew Danis in the late 1980’s, this user guide expands the documentation based on conversations with Andrew Danis and C3D users since the format first appeared.  I started working with the C3D format while supporting Vicon 3D motion capture systems running AMASS software on DEC RSX11M systems, prior to the adoption of the C3D format by Oxford Metrics Ltd. The original C3D description was written by Andy Danis in the mid 1980’s and for many years was the only public source of C3D information. A PDF copy of the original document is available from the C3D web site.

This documentation describes the current status of the C3D Format and includes explanations that explain aspects of the C3D format to users and C3D application programmers - documentation updates normally try to cover areas that may have been misunderstood.  While the C3D format has evolved since its creation, it was originally conceived to maintain compatibility in ways that ensure that data stored in all C3D files can always be read and accessed to support universal motion capture, clinical, and research functionality.  Updates to the documentation are normally just explanations of areas in the C3D format, not changes to the format.

The most significant recent documentation updates are summarized here:

- The explanation of the function of second byte in the C3D file header that documents the data [section](/glossary-of-terms#section) and structure of the C3D file has been expanded.

- The C3D frame count stored in the POINT:FRAMES parameter was originally stored as a 16-bit [integer](/glossary-of-terms#integer) value but can also be stored as a floating-point value by all applications that follow the C3D format description.

- The C3D header words that store the first and last frame numbers refer to the data that *created* the C3D file; while they may be closely related to the file contents, they are **not** the C3D file frame numbers.

- While all internal group and parameter names must be written in 7-bit [ASCII](/glossary-of-terms#ascii) [characters](/glossary-of-terms#characters) to support universal C3D file access, localized [UTF-8](/glossary-of-terms#utf-8) encoding is permitted for user entered values such as [3D point](/glossary-of-terms#3d-point) names, analog channel names, and all descriptions.
