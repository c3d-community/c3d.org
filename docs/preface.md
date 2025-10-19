---
title: Preface
sidebar_position: 2
---

In May 2002, Andrew Dainis wrote the following brief summary of the history of the C3D format for inclusion in this user guide …

*During 1986 and 1987, Douglas McGuire, and I undertook the task of developing a suite of commercial software programs to facilitate the generation of accurate three-dimensional (3D) data from video camera measurement systems.  The result of this effort was AMASS (ADTECH Motion Analysis Software System) which included components for camera linearization, system calibration, automatic marker tracking at the 3D level, 3D marker identification, and a graphics program (ADG) to display the final results which were in the format of C3D files.  I must thank the Biomechanics Laboratory at the National Institutes of Health (Bethesda, Maryland), and in particular, Lynn Gerber and Steven Stanhope, for providing encouragement and support through of laboratory facilities that enabled the project to be completed.*

*Shortly after its completion AMASS was licensed to Oxford Metrics Ltd.  (Oxford, England), and sold independently to a number of biomechanics laboratories.  The subsequent introduction and success of the VAX/VMS based Vicon-VX system by Oxford Metrics resulted in the widespread use of AMASS and C3D files within the biomechanics community.*

*In the past, several factors have contributed to prevent a still wider acceptance of the C3D file format.  The first was the lack of thorough and complete documentation of the file structure and parameter contents by the AMASS manuals.  The second, partially resulting from the first, was an insufficient understanding by programmers of the capabilities and flexibility of the file structure.  This lack of understanding resulted in some attempts to put “round pegs into square holes”, and generated a legacy of C3D files and applications that digressed from the original format and intention.  Many of these files and their applications are still around today and cause considerable problems for programmers who wish to handle every C3D file.  A third factor was that a formal standard for the format was never established or universally agreed upon, resulting in uncertainties for programmers trying to implement it.  In my estimation, this manual should go a long way towards belatedly overcoming all of these shortcomings.*

## Welcome to the C3D File Format

The C3D file format is the standard data exchange and archival storage file format in the 3D motion capture and biomechanics industries, designed to allow users to create files that contain 3D location and analog sensor information that can be read by any application or any data processing system. The file format has been in use since 1987 and was placed in the public domain to promote easy access and the exchange of clinical gait, biomechanics, animation, and other motion capture collection events.

The C3D file format may be used by anyone without requesting permission and without payment of any license fee.  This document exists to provide all the information needed to access data stored a C3D file and understand the concepts that define the format; both as it was originally created and the changes that have been introduced to the C3D format to accommodate modern technology and the data collection environments that have evolved since the creation of the format.

This user guide contains complete details of the public domain specification of the C3D file format and is intended to provide all the information necessary to allow anyone to support standard C3D files in any software application, as well as biomechanics, engineering or other data collection environments that use C3D files.  It attempts to provide all the necessary technical documentation for:

- Application and system programmers who write software applications that create or access C3D files containing [3D point](/glossary-of-terms#3d-point) and analog information.

- Users who need to configure or set up motion capture data collection environments that use the C3D format to store data.

- Users who want to understand how their data is stored, access it themselves and if needed, edit, revise, and update their data.

- Any company or individual who wants to create applications that support the creation of C3D files for storing 3D and analog data, exporting C3D files to other formats, and accessing of data in the C3D format.

While the user guide occasionally assumes that the reader is comfortable with the concepts of hexadecimal notation, binary formats, simple mathematics, and basic programming structures, it is not necessary to be an expert in order to use this documentation.

The aim is to document and explain the C3D format so that anyone accessing or creating C3D files can understand the format and update their file contents without causing any loss of data or problems for other users, while maintaining complete data access for all users.  It is recommended that anyone working with C3D data, creating or editing C3D files, reads this user guide because it defines the C3D file format.

## Acknowledgements

The family of file formats, of which the C3D file is a major component, were first developed by Andrew Dainis for the AMASS (ADTECH[^1] Motion Analysis Software System) 3D photogrammetry software created in the early 1980’s.  It would not have been possible to write this user guide without his assistance, and the cooperation of many C3D users who have provided sample data and have answered questions over the years.  I should also like to thank Craig Smith, who was the first person (outside ADTECH and the NIH) to visualize the potential of the C3D format for the 3D motion capture industry and lobby Julian Morris at Oxford Metrics, Ltd., to adopt AMASS, resulting in the C3D format becoming the standard for [3D data](/glossary-of-terms#3d-data) exchange.  Special thanks are also due to Steven Stanhope for his support of numerous C3D users around the world over a great many years, as well as his persistence and efforts to develop a universal, reliable, motion capture environment.

Particular thanks are due to Andrew Dainis who gave permission to refer to, and quote from, the AMASS User and Reference Manuals, and has answered many questions about the details of the format, clarifying many of the internal details and the history of the development of the C3D specification.  Without his help and encouragement, this user guide would not exist.

## Disclaimer

The first release of this documentation was created in 2001 as a result of requests during the C3D User Group discussions sponsored by Motion Lab Systems Inc., at the annual Gait and Clinical Motion Analysis Society (GCMAS) meeting in Sacramento, California.

After the meeting I volunteered to document the C3D file format because I had been working with C3D files for many years as part of my previous employment.  Initially installing, supporting, and training Oxford Metrics Vicon systems clinical and research users worldwide to use the Vicon native data collection software on DEC RSX-11M computer systems.  Then, after Oxford Metrics adopted the AMASS system, assisting the transition of users to the AMASS software with the C3D format on the RSX-11M Vicon systems, and finally to install and use the Windows 3.1 based Vicon 370 systems for [3D data](/glossary-of-terms#3d-data) collection and processing in a C3D environment.  During this period also worked with H.K. Ramakrishnan, assisting his rewriting the Helen Hayes Hospital Clinical Software system to move the Helen Hayes Software from the original DEC RSX-11M based file formats to the C3D format, and worked with Oxford Metrics Ltd develop the Vicon Clinical Manager software to reproduce the clinical results generated by the Helen Hayes Software.

This user guide has its origins in conversations and emails over many years working to support end-users and help programmers write software that creates and accesses files that use the C3D file format.  I have been working with the C3D file format since 1987, installing the AMASS photogrammetry software on Digital Equipment Corporation PDP-11 computers with the RSX-11M operating system for Oxford Metrics Ltd and supporting their users.  I was present at the breakfast meeting in 1988 between Julian Morris and Andrew Dainis in Washington, DC that launched the AMASS software suite and the C3D file format into the commercial world.

Virtually all of the updates and revisions to this documentation have been written as a result of having to explain to C3D users why certain files cannot be read correctly, or being asked to explain the function of certain parts of the format.  This user guide has never been the source of any significant changes to the C3D file format although it describes many minor changes made by various motion capture companies to the format and contents of the files that they create.

When the C3D file format was first created and became widely used, everyone creating C3D files discussed the features and internal options in public and, in the early days, many changes were proposed to add or extend features.  Some changes were implemented after widespread discussions (e.g. floating point support, unsigned [integer](/glossary-of-terms#integer) frame counts) while others were discarded (event range storage) after the discussions with everyone revealed potential data access problems that the authors had not considered.  The result is that the documented C3D is an exceptionally stable file format that has remained universally accessible.

I am happy to acknowledge the assistance and encouragement of many people in compiling the information within this user guide.  While, for the most part I have taken their advice, the structure and presentation of the information within this document has been my own.

Please let me know if you find any errors, or if you think that I have failed to explain any aspects of the C3D format.  I will update the documentation to correct any reported errors and expand explanations if necessary.  Any questions about the C3D format should be sent to [info@c3d.org](mailto:info@c3d.org) – if you are having problems with a specific C3D file then including a copy of the file with your questions will usually help.

[^1]: ADTECH, the name of Andrew Danis’s company, preceded the Internet by many years and has never had any connection with the current “Advertising Technology” returns by internet search engines.
