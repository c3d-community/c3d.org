---
title: Parameter Header
---

The C3D file header contains a pointer to the first block of the parameter section in the C3D file.  The first four bytes of the first block in the parameter section contain the following parameter record header:

The first two bytes of the parameter record are normally only meaningful if they are the first word of a file – this is because the original ADTECH file format required the first byte of a file to point to the first parameter block and the second byte to define the data format of the file.  So the first two bytes of the parameter record must be ignored when they are not the first two bytes of the file.

The third byte of the parameter header contains a count of the number of 512-byte blocks within the parameter section, counting the block that contains the parameter header record as block 1.  This sets the maximum size of the parameter section storage allocation within the C3D file.  In the example shown the parameter section occupies eleven 512-byte blocks.  Unused bytes at the end of the parameter section are normally filled with 0x00h.

The parameter block count is maintained to allow applications reading the C3D file to quickly determine the size the parameter section instead of having to calculate it by adding up the size of every individual parameter within the C3D file.  Once the size of the parameter section is known, the structure of the C3D file is defined and applications creating C3D files can determine the start of the data section. If the parameters are added, edited, or deleted then the parameter storage block count must be verified and updated when the file is closed.

The inclusion of the processor type as byte four of the parameter header enables any program accessing the parameter and data files to determine the endian format of the floating-point and integer numbers within the C3D file.  Note that there is no requirement to use any specific number format so long as the correct format is indicated in the parameter header at the start of the parameter section and is used throughout the C3D file.  The example shown above has a processor type of 0x55h (85 decimal) indicating that the DEC internal number conventions are used within this file.  A fully compliant C3D application should be able to handle all endian formats.  Typically, the endian format will be determined by the computer that writes the file, but can be translated to another endian structure when a C3D file is written.

Most new applications appear to use Intel (processor type 1) but also read the DEC and SGI/MIPS formats for compatibility with other applications.  While professional C3D applications need to support all C3D formats, a user written application might only support a single format, restricting its ability to read all C3D files because the user is working in a single environment.

The parameters are stored starting at byte 5 of the parameter section. The parameters are stored in random order providing flexibility when parameters need to be edited, deleted or added.  Each parameter has a data type, optional dimensions, a name, a description, and belongs to a group. Each group defined in the parameter section also has a name and a description.
