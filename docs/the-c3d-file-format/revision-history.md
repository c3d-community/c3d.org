---
title: Revision History
sidebar_position: 2
---

:::note[Revision History Changes:]

The C3D file specification was previously a document where a manual revision history was necessary. At this time, the C3D file specification is maintained as a website and revision history is automatically maintained on GitHub.

:::

The revision history is in reverse chronological order and documents major changes to the documentation, providing descriptions of C3D format interpretations that have evolved over time.  The last major change to the C3D format occurred in 1989, prior to the creation of this documentation, when support for a 32-bit [floating-point](/glossary-of-terms#floating-point) data storage format was added to the C3D format.

As a result this revision history attempts to describe all significant documentation changes and interpretations.  It does not record minor edits that may change the date on the first page, but do not significantly affect the C3D format description.

## October 6, 2021

As a result of a few discussions with users attempting to modify the file structure (and some users trying to access it) this revision clarifies many aspects of the file format.  Several old discussions of potential extensions have been removed because most of the original ADTECH file options are not part of the C3D file environment and may result in the creation of data stored in a way that existing C3D users are unable to access.  The data [section](/glossary-of-terms#section) format definitions and file structure descriptions exist to explain the C3D environment that was created to ensure that the C3D file contents are always easily accessible.

## May 31, 2020

This revision expands the C3D specification description and the explanations of the ANALOG and FORCE_PLATFORM group [parameters](/glossary-of-terms#parameters).

The minimal descriptions of TYPE-5, TYPE-6, TYPE-7, TYPE-11, TYPE-12, and TYPE-21 force plates have been removed – these force plate types were created by C-Motion for internal calculations but were not documented in detail and are rarely seen in C3D files.  All C3D users can define unique force plate types to handle specific plate configurations, but any new force plate type will need to be verified and fully documentated before it can be added to the C3D format description.

## February 10, 2020

Many areas discussing the internal details affecting the C3D format implementation have been moved to an appendix to avoid making individual parameter descriptions complex.  The appendix describes how to implement the C3D specification in areas that have been interpreted differently as the use of the C3D format has evolved over time.  The documentation redistribution terms have been simplified, some chapters have been reorganized to make the CMH help edition easier to navigate, and a few typos describing the signed number ranges have been corrected with explanations of the signed vs unsigned formats added.

## November 10, 2019

The description of the C3D frame count has been reorganized and expanded to explain that storing the POINT:FRAMES count as either an [integer](/glossary-of-terms#integer) or [floating-point](/glossary-of-terms#floating-point) value is fully supported by the C3D format which simplifies the current complex situation where the C3D frame count is determine by reading multiple [parameters](/glossary-of-terms#parameters).  The individual descriptions of the POINT:LONG_FRAMES parameter and the [TRIAL](/glossary-of-terms#trial):ACTUAL_START_FIELD and TRIAL:ACTUAL_END_FIELD parameters have updated to document the how the frame count of a C3D file should be determined when these parameters are present.

The description of the C3D file header has been corrected to explain that words 4 and 5 in the C3D header [section](/glossary-of-terms#section) record the frame numbers of the original video data that that was used to generate the C3D file.  Therefore these header values are not the actual C3D file frame numbers and should be ignored.  However many applications incorrectly treat the header words as storing the C3D file frame range numbers due to errors in earlier documentation releases so they may need to be maintained until modern C3D applications are updated to ignore the header frame numbers.

A detailed explanation of the handling of more than 255 point and analog channels has been added to clarify that the additional parameters must be synchronized with each other and that when LABELS2 exists, LABELS must always contain 255 values.

Numerous minor edits to various descriptions throughout the text to improve the documentation level by clarifying the internal details of parameters and groups.

The parameter format description has been updated to clarify that the parameter name can be no longer than 127, 7-bit [ASCII](/glossary-of-terms#ascii) [characters](/glossary-of-terms#characters); the parameter name length must be stored as a signed byte, not an unsigned value, to preserve the locked, or unlocked, status of the parameter.

## October 15, 2019

The most significant change has been to describe the optional use of [UTF-8](/glossary-of-terms#utf-8) encoding for user entered character data.  Standard 7-bit [ASCII](/glossary-of-terms#ascii) values are required for all internal group and parameter names in the C3D file to maintain application compatibility.  UTF-8 encoding is completely compatible with the original C3D format description at a byte level, and will add support for all non-ASCII standard languages and character sets.  This will be a considerable improvement in terms of user friendliness but will require that all applications that support C3D files are upgraded to display user entered UTF-8 encoded [characters](/glossary-of-terms#characters) correctly in future.

The descriptions of the C3D header first frame, last frame range numbers have been corrected in multiple places throughout the documentation.  The first and last frame numbers stored in the C3D header only document the frame numbers of the [raw data](/glossary-of-terms#raw-data) that was used to create the C3D file.  They are not C3D file frame numbers, and do not affect the times used to record events or the calculation of the C3D file size.

The support of additional analog channels, by extending the definitions of the ANALOG:LABELS and ANALOG:DESCRIPTIONS [parameters](/glossary-of-terms#parameters), has been documented.  This has always been theoretically possible but now that IMU (Inertial Measurement Unit) devices are appearing in motion capture data, the analog channel recording resource needs have increased.  Note that recording IMU data together with analog sources and motion capture information may present a synchronization challenge for the hardware manufacturers.  The C3D format supports perfect synchronization but the actual validity of the recorded data is determined by the data collection environment that collects and writes the samples to the C3D file.

This release expands the explanations of the functions of various parts of the C3D format to attempt to bring the documentation up to current usage standards, document the evolution of the format, and provide information to help new users and programmers troubleshoot common issues when they create and read C3D files.

Additional documentation has been added to try to explain the reasoning behind various groups and parameters as a result of discovering many errors over the years in different interpretations of the C3D format. Numerous descriptions of the signed vs unsigned [integer](/glossary-of-terms#integer) interpretations have been removed as they are no longer significant.

The descriptions of many application specific parameters in previous versions of the documentation have been removed as they may be out of date.  Please contact your application vendor for the most accurate details of the groups and parameters that their applications are creating.

Various chapters that discuss analog data collection and storage have been updated to describe many common problems that are created when [floating-point](/glossary-of-terms#floating-point) data becomes the default storage mechanism and to provide a more detailed explanation of the various data storage formats.

The C3D format documentation is now available both as a printable PDF file and also the CHM (Compiled HTML, c3dformat.chm) format for distribution with applications, as well as on-line at the C3D web site. The distribution terms have been updated to request that any changes made to the documentation by third parties are communicated by email to [info@c3d.org](mailto:info@c3d.org) to keep the format details up to date.

## May 25, 2019

The source documents for this documentation have been upgraded to Doc-To-Help 2009 using the Office Open XML standard to support the creation of a PDF user guide, a new HTML web-site, and CHM complied help format files.

Many changes throughout the documentation have been made to fix spelling and grammatical errors as well as the presentation format.  The printed format, with space for handwritten notes on the left side of each page, has been preserved.

## January 3, 2019

The use of unsigned integers in [parameters](/glossary-of-terms#parameters) and indexes was first described in 2004.  At that time documentation added to this user guide describing unsigned [integer](/glossary-of-terms#integer) usage as an option.  This user guide now describes the use of unsigned integers as the standard and documents the potential issues for older applications.

References to the original ADTECH PRM application have been removed as this was a command line application that, in a current MSDOS or Windows environment, only runs on 16-bit systems.  PRM remains available for download from the C3D web site and includes source code to read [DEC, Intel, and SGI/MIPS](/glossary-of-terms#dec-intel-and-sgimips) formats.

References to the new Label Range proposal for event storage have been removed as this C3D event storage mechanism has never been implemented.

Documentation has been added to describe the issues created in several areas of the C3D format that often generate compatibility and data reliability issues.

## May 29, 2010

Added descriptions of the POINT:LONG_FRAMES parameter and [TRIAL](/glossary-of-terms#trial) [parameters](/glossary-of-terms#parameters) that have been added to support C3D files with more than 65535 frames.  Corrected the description of the camera mask storage to indicate that bit 8 of the camera mask byte stores the point mask sign value.

## November 20, 2008

Corrected the illustration of “A simple parameter record stored as a [floating-point](/glossary-of-terms#floating-point) value” to use the correct parameter ID and added more detailed descriptions of the format of [parameters](/glossary-of-terms#parameters) that contain [arrays](/glossary-of-terms#arrays) for the benefit of C and C++ programmers who are not familiar with FORTRAN data structures.  This added documentation expands both the parameter description of C3D arrays and extends the CAL_MATRIX explanation to demonstrate the structure of arrays within C3D files.

The explanation of the FORCE_PLATFORM:ORIGIN parameter has been updated to discuss a change in the AMTI documentation of the force platform origin for TYPE-2 force plates.

## February 19, 2008

The documentation has been updated add information about the Vicon Motion Systems Ltd use of the TYPE-2 force plate definition to store scaled force and moment information instead of raw analog signals.

An error in the user guide that stated that the ANALOG:USED parameter was stored in the C3D header and been corrected. The ANALOG:USED value is not stored in the C3D header but can be calculated from two values that are stored in the header.

The user guide has been updated to add additional information to describe the sampling rate restrictions for both [3D point](/glossary-of-terms#3d-point) and analog data that are implicit in the C3D format but had not been explained in detail by the documentation. Added some notes on analog scaling values pointing out that using incorrect scale values can cause the data to be corrupted. This release provides some additional information on force platform types that have been described by C-Motion. These force plate descriptions are currently incomplete.

## January 25, 2006

The description of the storage of analog data [parameters](/glossary-of-terms#parameters) in the C3D file header has been re-written and the description of analog data storage has been expanded. An example has been added to demonstrate how the various parameters that describe the analog data are calculated. The original descriptions contained a couple of errors and were hard to understand.

This release restores a chapter on additional C3D parameters that provides information on parameters and groups that have been introduced to the C3D file format by various software applications or motion capture manufacturers. These groups are becoming common in C3D files, notably the MANUFACTURER and EVENT groups, together with other groups such as the SEG and [TRIAL](/glossary-of-terms#trial) groups that provide additional information, but are not required by the original C3D format description. The EVENT and EVENT_CONTEXT groups are particularly interesting as they provide a flexible method of storing event and other time specific data within the existing C3D format using parameters.

## July 20, 2005

Additional explanations have been added and expanded that document the C3D file header word that describes the number of analog samples in a [3D frame](/glossary-of-terms#3d-frame).

The definition of the FORCE_PLATFORM:ZERO parameter has been updated to make it clear that only a value of 0,0 indicates that no baseline offset correction is to be applied to the force platform data.

Minor grammatical changes to reserve the word "[section](/glossary-of-terms#section)" for use with parts of the C3D file description and avoid confusion with various chapters of the user guide and documentation.

## July 6, 2004

Added descriptions of the ANALOG:FORMAT and ANALOG:BITS [parameters](/glossary-of-terms#parameters) that have been added to help software applications to read C3D files that contain unsigned 16-bit [integer](/glossary-of-terms#integer) data. These descriptions, and an additional discussion at the start of the chapter, should be read carefully by anyone attempting to read or write 16-bit analog data values in C3D files.

The possibility of encountering unsigned 16-bit integers within the analog data storage has led to substantial alteration of the descriptions of most of the parameters controlling analog data. In particular, the chapter describing the ANALOG:OFFSET parameter has had to be completely rewritten to accommodate the possibility of interpreting the parameter as either a signed or unsigned integer value depending on the format used to store analog data values. A brief discussion has been added at the end of the ANALOG:OFFSET discussion that describes methods of “zeroing” analog data to remove measurement offsets. While this document takes no position as to the merits of any of the data zeroing methods described, users are strongly encouraged to write the data as signed integers when storing analog data values.

The description of the ORIGIN(3) parameter for TYPE-3 force plates has been changed to make it clear that this value is normally negative.

Various typographic errors have been either fixed (or moved to new areas of the document). Please let us know if (when) you find any errors or vague descriptions that could be improved. Please feel free to write additional descriptions or items for inclusion in this document and submit them to [info@c3d.org](mailto:info@c3d.org).

To keep the bankers, lawyers and other folk happy, a formal redistribution clause setting out the terms and conditions for the redistribution of this document by third parties has been added to the user guide. This simply sets out the previous “freely available to all” policy in more formal terms.

## February 16, 2003

The chapter describing analog scaling has been expanded to include a worked example showing the calculation of the scale factor for a typical load cell. The C3D file basics and final chapter on the future of the C3D format have been expanded with addition information and commentary.

## June 22, 2002

Andrew Dainis has contributed a foreword to the user guide. This version of the user guide contains additional information about the concept of Parameter Files and points out that they are not an essential part of the C3D specification. Additional information has been added to the description of the CAL_MATRIX parameter, which now explicitly states that it uses the Calibration matrix while TYPE-2 plates use the Sensitivity matrix.

The C3D format definition introduces the concept of signed and unsigned C3D files to accommodate the issues raised by the use of unsigned integers and [bytes](/glossary-of-terms#bytes) within the parameter [section](/glossary-of-terms#section) of C3D files. This has involved a major re-work to explicitly state the [integer](/glossary-of-terms#integer) and [byte](/glossary-of-terms#bytes) types (signed vs. unsigned) throughout the user guide. The chapters describing non-essential C3D [parameters](/glossary-of-terms#parameters) and many manufacturer specific parameters have been removed from this release.

In addition to the printed user guide and Adobe PDF document, this release is available in an on-line HTML formatted help link on the C3D web site and may be viewed live.  The web site help page will now be updated regularly.

## April 7, 2002

The documentation was revised with substantial editorial changes throughout to improve readability i.e., the replacement of the word [REAL](/glossary-of-terms#real) with the more common term “[floating-point](/glossary-of-terms#floating-point)”. The description of the structure of parameter files has changed substantially and several pages have been added to describe the calculation of analog scale factors, particularly with reference to force platforms. The user guide now includes examples of the calculations for each type of force plate. A short description of the history of the C3D format has been added to the introduction.

## October 28, 2001

The first version of this user guide was created as a result of user requests during the C3D User Group discussions sponsored by Motion Lab Systems Inc., in March 2001 at the 6th Annual Gait and Clinical Motion Analysis Society meeting in Sacramento, California.

This first version was released in print, and as a publically accessible Adobe PDF document on the C3D web site in November 2001, based on an explanation of the original [ASCII](/glossary-of-terms#ascii) text document created by Andrew Dainis in 1987 that described the C3D format as a convenient and efficient means for storing 3D coordinate and analog data, with all associated [parameters](/glossary-of-terms#parameters), for a single measurement [trial](/glossary-of-terms#trial) while allowing the all users to easily examine, and if necessary modify, any parameter contained in the file.
