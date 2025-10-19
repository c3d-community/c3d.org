---
title: Data encryption
---

In the United States, the Health Insurance Portability and Accountability Act of 1996 (HIPPA) created a set of national standards for the protection of certain classes of personal information that might be stored in the SUBJECTS group and might uniquely identify the subject.  Many counties may have similar requirements but the presence of this group does not indicate that any policies have been violated as parameters such as HEIGHT, WEIGHT, GENDER etc. are often required for data processing and analysis without uniquely identifying the subject or source of the data stored in the C3D file.  When C3D files containing this group are shared, privacy requirements may be met by either removing or encrypting the personal identification parameters while retaining parameters that are needed to research and analysis such as MARKER_SETS, WEIGHT, HEIGHT, GENDER etc.

The C3D file format is a public domain format designed to help all users share and access data, as a result it does not define support for encryption, but encryption of specific parameter values is possible.  As a result, if encryption is required, the encryption and decryption of personal information in a C3D file can be performed by the applications storing the personal information in a C3D file e.g.

SUBJECT:NAME = Mr. Mistoffelees … can be encoded and stored as

SUBJECT:NAME = zFnhmZncQfmB43Axs2DDr092APIVFvw

*The example above illustrates the encryption of the subject’s name using a secure algorithm encoded with a private key.  This could allow the creation of C3D files that meet privacy requirements while remaining accessible to all users.*
