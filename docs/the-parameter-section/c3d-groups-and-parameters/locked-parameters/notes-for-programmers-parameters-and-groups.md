---
title: Notes for Programmers - Parameters and Groups
---

1.  All parameter and group names must be stored using 7-bit ASCII format characters to maintain compatibility with applications that read C3D files.  UTF-8 encoding is not allowed for the group and parameter names.

2.  The parameter and group formats both support an ASCII description string which should always provide information about the item and its use to document the information stored in the file.  UTF-8 encoding is permitted for user entered values and internal data descriptions to make the C3D format internationally flexible, allowing users to describe their data in local language terms and international character sets, e.g. 左足先マーカー, Vänster tå markör, Marciwr toe chwith, or Left toe marker.

3.  Always spell group and parameter names correctly – a software application that expects to read data from a parameter called OFFSET will probably fail to find it if the parameter has been spelt incorrectly as OFFSETS.  Although the original C3D specification stated that the first six characters must be unique, the specification does not require that applications treat similar parameter names in the same way.

4.  The storage order of multi-dimensioned array parameters follows the FORTRAN convention.  In this format, the dimension that changes more rapidly appears first.  For example, the reconstruction volume (parameter “DATA_LIMITS” in group “SEG”) is made up from two 3D vectors stored in the order MinX, MinY, MinZ, MaxX, MaxY, MaxZ. Using the convention, this is defined as a 3 by 2 array.  Therefore, the correct definition for the parameter is Number of parameter dimensions = 2, Value of 1st dimension = 3, Value of 2nd dimension = 2.

5.  Programmers for whom C, Java, Python, etc., is their primary language need to remember that arrays in the C3D file are stored using FORTRAN conventions.  In C3D files the elements are stored in column order.

6.  The parameter data section ends when the index to the next item is zero.

7.  There is no count stored for the number of parameters in each group and all group and parameter records can appear in any order.  This means that it is permissible for a parameter to appear in the parameter section before the group information and software accessing a C3D file should be prepared to deal with this situation.

8.  Parameters are connected to groups by use of the group ID number.  Group records have unique ID numbers within the file, which are stored as a negative value in byte 2.  All parameters belonging to a group will store the same ID as a positive value, also in byte 2.

9.  Always use the absolute value of the first byte to determine the length of the parameter name.  This value may be set to a negative value to indicate that the data item has been marked as locked and should not be edited.

10. Traditionally, all integers used in the parameter section were  stored as one's complement signed integers with a range of –32767 to +32767 and all bytes were one's complement signed bytes with a range of –127 to +127.  However, some parameters may use unsigned integers to store data that will never have a negative value.  There is no flag to indicate that a C3D file uses unsigned integers in the parameter section.

11. Be aware that a group ID number may not be the same for a given parameter throughout a set of files.  Group ID numbers are required to be internally consistent in a single C3D file but may vary even within successive saves or copies of the same file.

12. All C3D files require a minimum set of parameters in order to be portable across different environments – always ensure that the minimum set of C3D parameters are present in every C3D file.  For example, all C3D files should include the FORCE_PLATFORM:USED parameter even if the value is 0 so that applications that process force data know that the file contains no force data.

13. Always look before you leap – all C3D software applications must test that parameters exist and determine the parameter format before they try to read them – never assume that any parameter has a specific format.  For example some manufacturers store the MANUFACTURER:VERSION parameter as a number while others store it as a text string or an array.

14. Do not assume that just because a parameter exists and has the name that you expect, that it will contain the same type of data.  The parameter structure provides a means to determine the type of the parameter (floating-point, signed integer, character etc.) before you read it.  The consequences of reading an integer value by default, when the parameter data structure turns out to be floating-point may cause applications to fail.

15. This documentation describes the expected and conventional parameter types but the C3D format was designed to be flexible and applications reading C3D files must always determine the parameter type before reading the data from the parameter.

16. Applications that modify C3D files must take care to preserve all groups and parameters from the original input file even if the application does not use or understand the parameters.

17. When an application creates parameter records, it is sensible to make sure that the records are created with some reasonable values – if the parameter values are unknown when the parameter is created then the parameter contents should be set to some convenient null value – ASCII spaces or 0.0 for instance.

18. Although the capability exists, in practice parameter Groups are not locked.  Locking is only used for individual parameters within Groups to flag items that that contain critical values within the C3D file structure.
