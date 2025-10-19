---
title: POINT:LABELS2
---
This new parameter is used to store additional point identifying labels beyond the 255 limit in the default POINT:LABELS group and expands the maximum number of labels to 511.  When LABELS2 is found in a C3D file then the LABELS parameter must always store 255 values.

This is an array of up to 255 character strings.  Some software applications can generate a great many 3D trajectories.  Since the C3D parameter arrays (used to store the POINT:LABELS names) have a maximum dimension of 255, the use of a single label array would limit the number of 3D markers that could be stored in a C3D file.  The solution here is to create additional LABELS parameters by adding a number e.g., LABELS2.  If required, additional parameters like this could exist such as LABELS3, LABELS4, etc., to store even more 3D point labels.

UTF-8 encoding is permitted for the LABELS but ASCII characters are recommended as most user localization requirements can be satisfied by defining a UTF-8 encoded DESCRIPTIONS string with the same array index.  It is important that all POINT:LABELS and POINT:LABELS2 names are concise and unique as they are used by software applications to identify, reference, and track individual 3D points recorded in the C3D file.
