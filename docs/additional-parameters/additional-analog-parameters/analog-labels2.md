---
title: ANALOG:LABELS2
---

This is an array of up to 255 additional ANALOG:LABELS entries that will only be seen in C3D files that contain more than 255 analog channels and extends support for an additional 255 additional analog channels.  C3D files that require even more analog channels may create a LABELS3 parameter.  All LABELS parameter characteristics must be identical, defined as CHAR strings with the same lengths.

The function of the LABELS is to provide a means of identifying and referencing analog channels so all ANALOG:LABELS must be concise and unique.  Since the entries in LABELS2 are an extension of the entries in the standard LABELS array no LABELS2 entry can duplicate a value stored in the LABELS parameter array because applications will often reference individual analog channels using the LABELS entries instead of the channel number.
