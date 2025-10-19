---
title: Event Interpretation
---

The C3D format does not specify the meaning or interpretation of the events stored in the header section although the original intent of this feature was to allow a small number of human gait related event times to be recorded by any application.  As a result, C3D file may contain a varied number of events and labels.

When used to record gait events the header section can record a maximum of four gait cycles per side (left/right).  While this is generally sufficient for most gait applications, other C3D file users, such as treadmill recordings, or the entertainment industry, have required more event storage than the C3D header can provide.   Most modern applications may store multiple events in the EVENT group in the parameter section of the C3D file.

When a sequence of events are stored as parameters then whether or not the header events are read and used is up to the application processing the data.  For example if a C3D file contained 16 gait cycles then potentially it could store 64 separate events as parameters, two events per gait cycle, per side.  An application processing the C3D file data might select one gait cycle from each side for analysis and could store the analyzed gait event times in the C3D file header, thus recording the gait cycle events that define the analysis for any future review.

By storing significant events resulting from analysis or processing in the C3D file header section, it becomes very easy for applications to search multiple C3D files when looking for specific C3D file contents, e.g. a file that contains both left and right side gait cycles or something else entirely.
