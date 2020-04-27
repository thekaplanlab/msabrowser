# 🧬 MSAViewer

**Contents**

- [🧬 MSAViewer](#%f0%9f%a7%ac-msaviewer)
  - [:hash: What is *MSAViewer* and the aim of this library?](#hash-what-is-msaviewer-and-the-aim-of-this-library)
  - [:hash: Requirements and Installation](#hash-requirements-and-installation)
  - [:hash: How to use *MSAViewer*?](#hash-how-to-use-msaviewer)
  - [:hash: Parameters & Examples for the Functions](#hash-parameters--examples-for-the-functions)
    - [Color Schemas List](#color-schemas-list)
    - [Domain Example](#domain-example)
    - [``addVariation()`` Function & Example Use](#addvariation-function--example-use)
  - [:hash: Example Usages (Use Cases) of MSAViewer](#hash-example-usages-use-cases-of-msaviewer)
    - [:hash: Evolutionary Genomics Study](#hash-evolutionary-genomics-study)
    - [:hash: Clinical Variant Interpretation Study](#hash-clinical-variant-interpretation-study)
    - [:hash: COVID-19 / Virology Study](#hash-covid-19--virology-study)
  - [:hash: Do you have another study which is not listed here?](#hash-do-you-have-another-study-which-is-not-listed-here)
  - [:hash: Contributing & Feedback](#hash-contributing--feedback)
  - [:hash: Developers](#hash-developers)

---

## :hash: What is *MSAViewer* and the aim of this library?
*MSAViewer* is an open-source, flexible and modern web-based tool to illustrate the genetic variants, post-translational modifications, and protein domainson the corresponding positions of aminoacids at the protein sequence of any species together with pairwise or multiple sequence alignment of anysize. Ever-increasing number of genetic variants and sequencing projects in next-generation sequencingera enable researchers to investigate the impacts of these variants together with the protein domains. Here, MSAViewer environment and its core features make it easy to visualize the evolutionary conserved amino acids and genetic variants. 


## :hash: Requirements and Installation
*MSAViewer* is entirely developed in JavaScript and works on a web browser at any platform including Linux, Mac OS X and Windows systems without any installation.

## :hash: How to use *MSAViewer*?
 - Create a directory and download any example shown below or retrieve "**MSAViewer.js**" and "**index.html**" files or clone the repository via Git using following command:
 
 	`git clone https://github.com/thekaplanlab/msaviewer.git`

- Then, place your pairwise or multiple sequence alignment (MSA) result file as **FASTA** format in the folder.

- Afterwards, set your parameters and define the title, give protein domains information and add your variants onto any species. 

- It's ready to use and visualize now! 

## :hash: Parameters & Examples for the Functions
| Options in the script | Description | Example |
|--|--|--|
| id | *It defines the ID of the element where you place MSAViewer component.* |`<section id="MSAViewerDemo"></section>` |
| fasta | *It refers a variable that holds your sequence alignment or the name of the file in FASTA format* | `sample_msa.txt` or `sample_msa.fasta`
| title | *It defines the title of MSAViewer component on the box at the top left corner* | HARS Protein
| colorSchema  | It defines the name of the color schema you would like to display | Please the check the list of color schemas below.
| domains  | It refers a variable that holds your protein domanin information. | Please the example below.
| ``addVariation()`` function  | It serves for adding variations on the corresponding amino acids. | Please the example below.

### Color Schemas List

> You need to select a color schema and put the name of the color schema into the variable:

Example for this:
> `var colorSchema = "clustal";`

**List of the color schemas:**

- `hydrophobicity`
- `buried`
- `cinema`
- `clustal`
- `clustal2`
- `helix`
- `lesk`
- `mae`
- `strand`
- `taylor`
- `turn`
- `zappo`


### Domain Example

> You are able to visualize the protein domains above the sequence aligner.

Here is the example use of `domains` variable.
```
var domains = [
	{
		'domain_id': "PFAM123",
		'domain_name': "Protein Kinase Domain",
		'domain_external_link': "http://link_for_the_domain.com/",
		'domain_start_point': 11,
		'domain_end_point': 32
	},
	{
		'domain_id': "PFAM456",
		'domain_name': "Another Protein Domain",
		'domain_external_link': "http://link_for_the_domain2.com/",
		'domain_start_point': 35,
		'domain_end_point': 55
	}
];
```

### ``addVariation()`` Function & Example Use

> You are able to add variations and substitutions on the corresponding amino acids.

**Here is the details of ``addVariation()`` function:**


| Parameter | Description | Example |
|---------------------------------------------------|--------------------------------------------------------|----------------------------------------------------------|
| protein | The order of the species in the sequence alignment | 1 |
| aminoacid | The (real) position of the amino acid in the protein.* | 5 |
| variationNote | The annotation part of this variation. | M->A : Pathogenic and causes a disease with a name of X. |
| source | The source of the information. | Surname et. al (2020) |

> * For instance, an amino acid in a protein in the position of 15 has a substitution. However, since the sequences are aligned and some dashes `-` added into the sequence, you do not need to consider the new position of the amino acid. Only, put the real position of the amino acid. 

**Here is the example how to add a variation:**
```
viewer.addVariation(1, 5, "M->A : Pathogenic and causes a disease with a name of X", "Surname et. al (2020)");
```

> Here, this variation will be added onto the `5th` amino acid in the protein of `1st` species in the sequence alignment with a note of `M->A : Pathogenic and causes a disease with a name of X` and source of `Surname et. al (2020)`. 

## :hash: Example Usages (Use Cases) of MSAViewer

### :hash: Evolutionary Genomics Study 
Will be added.

### :hash: Clinical Variant Interpretation Study 
Will be added.

### :hash: COVID-19 / Virology Study 
Will be added.

## :hash: Do you have another study which is not listed here?
Please do not hesitate to contact us for your study. 

We would be very happy to list your study here.


## :hash: Contributing & Feedback
MSAViewer is released as an open-source and web-based software under GNU General Public License, version 3.0 (GPLv3). The visualizer, documentation, all source code and examples are available at http://MSAViewer.github.io/ and GitHub repository https://github.com/thekaplanlab/MSAViewer.

Moreover, please do not hesitate to open an issue via Github if you have any suggestion or feedback.


## :hash: Developers
**Halil Bilgin |  [bilginhalil@gmail.com](mailto:bilginhalil@gmail.com) | Academia: [Google Scholar Profile](https://scholar.google.com/citations?user=U1jyUGkAAAAJ&hl=en&oi=ao)**


**Furkan Torun |  [furkanmtorun@gmail.com](mailto:furkanmtorun@gmail.com) | Website: [furkanmtorun.github.io](https://furkanmtorun.github.io/)**


