---
title: A C3D Synopsis
---

The C3D (Coordinate 3D) format was designed to minimize the storage requirements and the number of files required to store data and associated [parameters](/glossary-of-terms#parameters) in the gait analysis environment, together with these features:

- Define a single format, optimized for speed and access efficiency.

- Provide a facility for incorporating parameter descriptions, allowing a user to read and determine each of the various parameter functions.

- Allow the C3D format store additional user defined parameters and data while retaining full backwards compatibility for all applications designed to access the C3D file format.

The essential idea behind the C3D format is that all 3D coordinate and numeric data for any recorded measurement trial is stored in a single binary file, together with all the various parameters that describe the data, so that anyone can efficiently access their data by reading a single file.  When the C3D format was originally planned, all motion capture systems sampled and stored their recorded data in many different files, each using a unique format, an approach that created a number of problems:

- The comparison of measurements collected by different manufacturers was virtually impossible due to unique data and parameter storage methods.

- A researcher, collecting data in one lab, might lose access to the original data if they moved to a new lab using a different motion capture system.

- Manufacturer’s system updates frequently introduced file format changes that rendered older data unreadable to the newer applications.

- Clinical and Research users would often refuse to upgrade their motion capture system, or switch to another manufacturer, because any changes to the data collection environment meant that they would lose access to their clinical pre-op data or research data history.

- All software applications were tied to a specific manufacturer’s data format which changed occasionally, making third party software application development challenging.

The universal adoption of the C3D format solved all of these problems.  A single, well documented, format simplified software maintenance and documentation, and has resulted in 3D motion capture data being accessibly to everyone since 1987.  Initially the common format has made it easy for researchers and clinicians to compare trial data recorded in biomechanics labs worldwide with a wide range of different motion capture systems and as motion capture has become common, anyone can now create movement data and share it.  The standard but flexible design of the C3D format means that data is no longer obsolete each time a manufacturer released a new version of their software applications, or introduces new hardware that needs to store additional information with the recorded data.

It is common for new motion capture manufacturers to state that they are making their data easily available by exporting the data to ASCII text files.[^1]  While this is an easy solution for the manufacturer, it often results in files with contents that are not fully documented.  While [ASCII](/glossary-of-terms#ascii) data may work for a single user performing tests, the chance of anyone or even the original user performing the data collection being able to interpret the data after a few years is minimal if all the information about the original data collection is not included.  ASCII files must generally be accessed sequentially and are inefficient if files need to be read non-sequentially.

It is the ability to store information about the data in a file with the data written in a public defined format that sets the C3D format apart from other biomechanics file formats.  The C3D file can store 3D locations and analog data together with all the parameters that describe the data in a format that is completely documented.  As a result anyone can define, generate, and store any number of user or lab defined data items within a C3D file, and anyone can write their own software to access the data.

The C3D format defines a standard file format and structure, allowing anyone opening a standard C3D file to access and update the stored information.  The C3D format does not strictly define what it stored in a C3D file, it only requires that the data [section](/glossary-of-terms#section) stores all “[3D data](/glossary-of-terms#3d-data)” as four numeric values (xyz+n), and all “Analog data” as numerical values, synchronized with the 3D data and described in the parameter section.  This means that users accessing a C3D file can easily read the data stored in the file, and by reading the parameters associated with the stored data, translate the stored data into specific measurements.

This flexibility has been used to store joint angles, powers, and moment calculation results, derived from the stored [3D point](/glossary-of-terms#3d-point) data, in a C3D file.  Each gait analysis measurement can be stored using the 3D point format with additional parameters in the POINT group allowing users reading the “3D data” to interpret the numbers as angles, powers, and moments instead of 3D coordinates.

The C3D analog data storage is essentially just a stream of numbers, stored in synchronization with the point data and can record force-plate measurements, muscle activity, foot contact timing, and other measurements (e.g. MEMS data etc.) defined by the ANALOG group parameters.  As a result, adding new measurement data to a C3D file as “point” or “analog” data is easy but requires that the new data contents are fully documented by the user creating the data storage so that all users reading the new data can both access and process the stored data.

Because the C3D format is a public specification, everyone has access to a common, well documented, format so that users can write an application to use C3D data from a wide range of sources.  Anyone can read this guide and create applications to read and process data stored correctly in the C3D format – regardless of whether the file that they are trying to access was created yesterday, or more than 30 years ago in another country.

[^1]: [ASCII](/glossary-of-terms#ascii) data files are always easy to read and edit, but may be hard to understand as there is no standard format for the data within each file.
