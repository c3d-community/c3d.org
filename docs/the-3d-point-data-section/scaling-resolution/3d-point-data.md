---
title: 3D Point Data
---

In the C3D file format, 3D point data was originally intended to store marker position data within a calibrated volume.  Hence, the data would be homogeneous in the sense that units and relative scales of each point data item would be the same.  When stored in integer form, the stored 16-bit signed integer value must be multiplied by the POINT:SCALE floating-point scaling factor (header words 7-8) to yield a physical world value – generally all 3D data points locations are recorded in millimeters which is the default measurement unit for 3D data in C3D files.

While it is possible to create C3D files that store 3D data measurements in meters, feet, or yards this will create compatibility problems for everyone as all C3D applications default to reading the 3D values in millimeters.  The units used in C3D file should be documented by the POINT:UNITS parameter but note that changing this parameter from “mm” to “cm” or “m” does not affect the 3D data scaling.  While applications can be created to internally rescale the data, all C3D files must default to using millimeters for universal compatibility.

The signed integer variable type represents an integer value from -32767 to +32767.  The scaling factor is dependent upon the calibration volume and is calculated when the data is stored such that the greatest precision is allowed over the entire volume of interest.

For example, if the largest dimension of the calibration is 4 meters then, assuming the calibrated volume begins at the global (0,0,0) reference location and contains only positive X-direction points with the largest dimension being X=4 meters, the scaling factor for length units expressed in mm would be

Scaling Factor = 4000 mm/32767 = 0.122 mm

                                    0 .  .  .  .  .  .  .    .  .  4000 mm

+-------------------------+------------------------+

-32767                      0                                 +32767

Thus the resolution of all point locations within this C3D file is 0.122mm.

Clearly, problems can occur when the scale of the stored data reaches that of the scaling factor or resolution.  However, as can be seen from the example above, the resolution of integer data within a C3D file in this example is well within even the theoretical limits of most 3D motion measurement systems.

Problems do arise when software applications change the interpretation of the 3D data point.  For example, software applications have used the 3D point data type to store the results of internal calculations of non-3D information (such as accelerations and moments) derived from calculations in software applications.  Depending on the scaling of these calculations, this can produce numbers that cannot be accurately represented with the same POINT:SCALE factor required by the 3D point data.

Under these circumstances, moments in a system with dimensional units of mm and force units of N are commonly computed in units of Nmm.  This can lead to problems for users who manipulate the 3D point data within the application and then store the results in an integer format C3D file.  For instance, users may wish to scale the above mentioned Nmm values by dividing by 1000 to obtain the more commonly used units of Nm and then further dividing by the subject’s body weight for normalization to obtain units of Nm/kg.  Such a conversion from Nmm to either Nm or Nm/kg can easily result in values in the order of 1 or even 0.1 which are significant in the context of their biomechanical importance.

When storing these values within integer 3D data variables using a scaling factor of 0.122, only 8 numbers (steps) would be available to store values between 0 and 1 and all values between 0 and 0.1 would be treated as 0.0 (using the example above).

0                              1.0 mm                                  0                              0.1 mm

+--------------------------                                           +---------------------------

0                              8 steps                                  0                              1 step

The loss of resolution during the conversion of the floating-point values to signed integer values, limited by the POINT:SCALE factor, results in loss of data resolution when the results approach the POINT:SCALE value due to bad scaling choices.

Since this truncation of the data occurs when the floating-point values are saved to a C3D file using the integer formats, the loss of resolution will not be apparent until the C3D file is later reloaded.  It is also worth noting that floating-point data that has been filtered may become “noisy” if it is converted to signed integer values.  This is due to the loss of precision during the floating-point to signed integer conversion process.  This is a particular problem at very low signal levels.

There are several ways to avoid this scaling problem.  The best solution is to always be aware of the units and the ranges of interest as well as the resolution of the system and to scale appropriately within any application that may need to generate integer formatted C3D files.  Note that while the format is described as “integer format” this refers to the storage method which scales all “integer” 3D values via a common floating-point scaling factor.  As a result both “integer C3D” and “floating-point C3D” files offer virtually identical 3D location resolution in all human biomechanics environments.

While floating-point 3D locations can be stored in a floating-point formatted C3D file with a resolution of 0.293 × 10–38 mm, it is unlikely that any 3D data collection system can measure a marker or sensor location to sub-atomic resolution, equivalent to the diameter of a single electron.
