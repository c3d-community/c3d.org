---
title: Event Status
---

Words 189 to 197 contain flags that indicate the status of each event.  Each word contains two byte-sized flags stored in the same order as the event times.  The byte-flags are set to 0x01h if the event status is ON and 0x00h if the event is OFF.

The on/off status of the event may be interpreted in any convenient way – in general, applications that graph or otherwise display data will indicate the presence of an event if the status is ON and will hide the event if the status is OFF.  However there is no formal convention for the interpretation or use of the event status.  Events are valid within the C3D file regardless of their actual status.

Note that header word 198, originally documented as reserved for event status flags, is unused.
