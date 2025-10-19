---
title: Data Synchronization
---

C3D files can contain both analog data and 3D data, stored as values frame by frame with multiple analog values stored with each 3D sample. Storing the 3D location and analog samples in a single file with a defined format makes it is easy for users to retrieve the data with confidence that the data from multiple sources, e.g. cameras, video equipment, electromyography, accelerometers, foot-switches, and force plates etc., is temporally related sample by sample.

The C3D format supports the synchronization of the data stored in the file by defining a single analog sampling ratio in each C3D file related to the 3D point sampling rate.  As a result, the synchronization of the 3D location data and Analog data samples is determined by the environment that creates the C3D file in each data collection event, any temporal data synchronization issues are caused by the data collection application that creates the C3D file, not the C3D format.

When the C3D format was created, all analog data was normally sampled by a single analog data collection (ADC) device that was controlled by the CPU that sampled the video data.  As a result the C3D data synchronization was originally under the control of the environment that creates the C3D file.  However, analog signals are often filtered before being sampled by the ADC which can result in minor signal latency issues, unique to each data source.  For example, when analog force plate data is low-pass filtered at 10.5Hz, the data may be delayed by 25ms.  As a result when the force data is compared with foot-switch data recorded with a latency of only 2ms, the foot-switch data appears to report a foot strike before the force plate records the heel strike, because the force data has been filtered resulting in a delay.

Typical data collection system “calibrations” only record the 3D measurement accuracy, not the analog data collection or data synchronization accuracy.
