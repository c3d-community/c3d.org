---
title: TYPE-2
---

The force platform outputs, FX, FY, and FZ go to the first three channels, and the moments MX, MY, MZ in order to the next three channels, an arrangement typical for many AMTI and Bertec force plates. The recommended ANALOG:LABEL and ANALOG:DESCRIPTIONS are shown below; when multiple force plates are used, identify each plate with a number ensures that each ANALOG:LABEL is unique and make the individual data channels easy to identify.  Providing a unique channel ANALOG:LABEL and DESCRIPTIONS parameter takes very little effort when compared to the amount of time that can be spent attempting to identify individual force plate configuration and scaling issues at any time in the future.  It is much easier to look at an analog channel identified as 5MY than a channel labeled A047.

It is common to see processed force and moment data stored using a TYPE-2 description in the channels defined by the FORCE_PLATFORM:CHANNEL parameter.
