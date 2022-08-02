![MSABrowser Logo](https://user-images.githubusercontent.com/65191506/81839302-06123400-9550-11ea-92d2-ac904ccd32c6.png)
<h2 align="center"> 📰 Documentation and Examples: <a href="https://thekaplanlab.github.io/">https://thekaplanlab.github.io/</a> </h2>

---

# 🧬 MSABrowser

MSABrowser is developed as a new JavaScript tool with an ultimate goal of dynamic and fast visualization of sequence alignments, variations, and annotations. Also, it does not require any installation at any platform such as Linux, Mac OS X, and Windows.

# :hash: Documentation and Examples 
Please, visit [https://thekaplanlab.github.io/](https://thekaplanlab.github.io/)

# :hash: Screenshot

MSABrowser Overview

![MSABrowser Screenshot](https://user-images.githubusercontent.com/49681382/136694235-509b6f32-423f-4ecd-aa9f-9b3089a8bdee.jpg)

<details>
<summary>Figure 1: An overview of the MSABrowser tool. (Click here to see the full description for the image)</summary>
MSA for homologous proteins of the human TUBA1A is depicted in this figure, along with genetic variations on the corresponding positions on sequences and associated intervals such as protein domains. 
<br><br>  
(A) 
  <br> (I) The annotation part represents the specified intervals for the sequence and in this example, it is used for illustrating the positions of the protein domains with cross-link features that enable users to locate the website or page of the original database or article. 
  <br>(II) The notification part shows any type of defined modifications as a red asterisk above the sequence per position and displays the searched position in a species above the alignments. 
<br> (III) The sequence alignment part contains the imported alignment data with the previously selected colour scheme. Also, rounded (circle) positions indicate that at least one genetic variation or modification exists in this position. A rectangular white background pop-up box appears when the mouse hovers the specific position in the sequence and the genetic variations and modifications are listed in this pop-up box. On the bottom, an auto-generated ‘Consensus’ sequence is displayed. On the left side, species names contain cross-reference links for referring to the dedicated page of the sequence according to its protein identifier such as a UniProt number and the near-white ‘x’ button enables users to hide the sequence from the alignment together with its identifier. 
  <br>(IV) A position in the sequence of any species listed in the alignment can be searched and the sequence alignment data in FASTA format can be downloaded with the blue button and visualization of alignment data can be exported as PNG format. Also, with the green ‘Reset’ button, it is available to reload the viewer. 
<br><br>  
(B) Visualization of MSAs of six virus spike proteins with the MSABrowser tool. The positions with the annotations are marked in a circle, while the positions without annotations are displayed in a square. The full MSA comparisons with annotations can be found at our dedicated GitHub site https://thekaplanlab.github.io/ 
<br><br>  
(C) Shown is the display of orthologous variants (OrthoVars), the positions of amino acid position or nucleotide, or PTMs with the programmable notification part of MSABrowser
</details>

<br>

![Comparison Screenshot](https://user-images.githubusercontent.com/49681382/136694363-816f4c27-a969-4601-878c-5036c9dfecad.jpg)

<details>
    <summary>Figure 2: Comparison of MSA visualizers. (Click here to see the full description for the image)</summary>
  <br>
Comparison of MSA visualizers. The MSA of different genomes of the severe acute respiratory syndrome coronavirus 2 isolates (SARS-CoV-2: MT123293, MT152824, MT252708, MN988713 and MT039888) was created, followed by visualization with separate MSA viewers. 
  <br><br>
  (A) Shown is the MSA visualization with MSABrowser, which enables the addition of annotations (e.g. domains and notes) on top of the MSA. MSABrowser allows users to incorporate variant-specific annotations (missense variation, disease associations, variant ID, allele frequency, etc.). A pop-up will show up when users click on the circled amino acid or nucleotide position to display the annotations. Shown is a missense variation (G6537T) in SARS-CoV, an example of a particular annotation of a nucleotide position, MSABrowser enables users to remove the desired sequence by clicking the X button which appears in the far left of each line. Users can look up positions, download the FASTA and save the MSA as PNG. 
  <br><br>
  (B) Shown is MSAViewer tool on the same alignment as in A. Users can scroll to the left and right to see the rest of MSA. When the user clicks on a position, the amino acid is highlighted with a red square as in the position 88. 
  <br><br>
  (C) Shown is JSAV. It is possible to sort and delete sequences, add new sequences, change the colour schema and export FASTA with the buttons listed below the MSA. 
  <br><br>
  (D) Shown is Wasabi in which zoom in and zoom out options are enabled and scrolling is necessary to see the rest of the sequence. 
  <br><br>
  (E) Shows Proviz where users are able to search for a motif, switch to full screen, export the MSA and share it as a URL using the buttons located in the top right corner. 
  <br><br>
  (F) Shown is AlignmentViewer. For each sequence in the alignment, gaps ratio and identification ratio to the reference sequence is provided. Gaps and conservation per position are also shown above the MSA
</details>

# :hash: Contributing & Feedback
MSABrowser is released as an open-source and web-based software under MIT License. The visualizer, documentation, all source code and examples are available at https://thekaplanlab.github.io.

Moreover, please do not hesitate to `open an issue via Github` if you have any suggestion or feedback.

# :hash: Developers

**Halil I. Bilgin |  [bilginhalil@gmail.com](mailto:bilginhalil@gmail.com) | Academia: [Google Scholar Profile](https://scholar.google.com/citations?user=U1jyUGkAAAAJ&hl=en&oi=ao)**


**Furkan M. Torun |  [furkanmtorun@gmail.com](mailto:furkanmtorun@gmail.com) | Academia: [Google Scholar Profile](https://scholar.google.com/citations?user=d5ZyOZ4AAAAJ)**


**Oktay I. Kaplan |  [oktaykaplan@gmail.com](mailto:oktaykaplan@gmail.com) | Academia: [Google Scholar Profile](https://scholar.google.com/citations?user=YFzvQQUAAAAJ&hl=en)**


# :hash: Citing the *MSABrowser*
Furkan M Torun, Halil I Bilgin, Oktay I Kaplan, MSABrowser: dynamic and fast visualization of sequence alignments, variations, and annotations, Bioinformatics Advances, 2021;, vbab009, https://doi.org/10.1093/bioadv/vbab009

