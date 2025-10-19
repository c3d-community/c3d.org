---
title: The C3D File Structure
---

The standard C3D file format stores 3D marker coordinates and analog data samples for any measurement [trial](/glossary-of-terms#trial), together with the [parameters](/glossary-of-terms#parameters) that describe the data, in one file.  This means that a single 3D motion capture data trial normally includes all the information required to process the data without the need for additional notes and subject documentation attached as separate files, eliminating the risk that some vital information about the data might become separated from the data.

The C3D file has three basic components:

- File Header – the first 512 [bytes](/glossary-of-terms#bytes) of all C3D files contain pointers and variables that define the structure of the C3D file.

- Parameters – information documenting the data stored in the C3D file that normally allows anyone to read and interpret the data in a C3D file that is stored according to the C3D format described.

- Data – at this level the C3D file is simply a binary file that can store 3D location data together with analog sensor information in a structure defined in the C3D File Header, described by the Parameters and documented by the C3D format description.

One of the design goals of the C3D file format was to make it easy for the user to list, examine, discover, and if necessary modify, parameters in the C3D file.  Users can create their own parameters to store information about the subject, application, data analysis, or processing etc.

The parameter concept means that the C3D format can support multiple internal data samples while giving users the information needed to interpret the data stored in the file. Essentially the C3D file format combines binary data storage with many of the characteristic of a database so that each C3D file can describe its structure, contents, and any changes made; a feature that sets the C3D format apart from virtually all other storage methods. As a result, when a C3D file is opened by an application, the user can determine the computing environment that created the file (DEC, Intel, or SGI/MIPS), the numeric data storage format (16-bit [integer](/glossary-of-terms#integer) or 32-bit [floating-point](/glossary-of-terms#floating-point)), and the binary data storage format (normally [3D Point](/glossary-of-terms#3d-point) and Analog data).  The default binary C3D data storage format is documented to store 3D locations (points) together with multiple numeric data samples (analog data) interleaved in synchronization.

Other goals for the C3D file format were to minimize the storage requirements, reduce the number of files required to store the data, while providing easy access to the file contents.  In addition to allowing a user to read and modify the parameters, the C3D format allows parameters to include unique descriptions for each parameter item so that the function of each parameter can be documented within the C3D file itself.  This provides the flexibility for users to store many different kinds of data and associated parameters within the C3D file, while maintaining a degree of internal documentation that is lacking in other formats.  This flexibility is the most important feature of the C3D file format and explains both its popularity and the extraordinary length of time that it has been used to store a wide range of clinical and experimental data.  Hence, it is worthwhile emphasizing:

The C3D file contains parameters that describe the data stored in the file.  It allows users to define, generate, and store within the C3D file any number of user defined parameters, allowing anyone opening a C3D file that meets the standard described here, to interpret and analyze the data.

The C3D format treats information as if it belongs to one of two classes; Physical Measurements, or Parameters that define and describe the physical measurements.
