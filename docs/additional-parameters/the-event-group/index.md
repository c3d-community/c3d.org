---
title: The EVENT Group
---

The EVENT group (and the associated EVENT_CONTEXT group) first appeared in C3D files created by Oxford Metrics in 2001 to work around the limit of a maximum of 18 simple events in the C3D file header.  The descriptions are based on a document provided by the manufacturer.  The existence of this group is optional, it is only described here as part of the C3D file format because it appears in many files but may be modified by users to support different event environments.

The basic idea behind this implementation is very much like the concept of the C3D header record events, a count of the total number of events is maintained and then used as an index to access the event times, status etc.  It differs in that it allows events to be placed in a context that can be used to organize and group events in an open-ended and flexible manner.

All user defined strings stored in these parameters may be stored using UTF-8 encoding but the parameter and group names must remain unchanged in 7-bit ASCII encoding for universal compatibility.
