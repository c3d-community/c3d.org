---
title: Event Labels
---

A unique four-character label ASCII using the characters A-Z, a-z, 0-9, and space can be assigned to identify each event.  Labels shorter than four characters must be filled to four characters by adding spaces (ASCII 0x20h, 32 decimal) to the end of the label.  The event labels are stored in the same sequence as the event times and status flags. Since users applications may search for various labels by name it is essential that the names used in any individual C3D file are unique – storing two successive right heel strikes as “RHS” opens the possibility of third-party analysis errors, whereas storing the events as RHS1 and RHS2 means that each event can be uniquely identified and referenced. Event labels must be stored as 7-bit ASCII characters; UTF-8 encoding is not permitted due to the limited space available.
