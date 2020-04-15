---
title:  "COSMIC: Compressed Sensing for Magnetic Resonance Imaging & Cosmology"
image: images/cosmic.jpg
excerpt: "I am currently in charge with Sam of pysap, a Python module that binds sparse decomposotion tools. This module also integrates common optimization tools for image reconstruction/denoising (FISTA, Condat-Vu, ...), and common application plugins."
collection: about
reference: https://cosmic.cosmostat.org
code: https://github.com/CEA-COSMIC
---

![image]({{"images/cosmic.jpg" | relative_url}}){: .img-center }

Most scientific developments rely on new acquisition systems which present improved resolution. In biomedical imaging, the advent of Magnetic Resonance Imaging (MRI) strongly impacted medicine and neuroscience while in astrophysics, gravitational waves have recently been discovered thanks to a new generation of instruments. In the COSMIC project, experts in MR and astrophysical image processing have joined their efforts to work on Compressed Sensing because:

- The image formation model (or forward modeling) is very similar, i.e. the data are collected in the Fourier (spatial frequency) domain.
- The images are compressible in similar transform domains (e.g., wavelets), i.e. they can be well approximated by sparse decomposition in an appropriate transform domain.
- The same convex optimization algorithms can be deployed to perform nonlinear image reconstruction in both application fields.
