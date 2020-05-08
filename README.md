# 🧬 MSABrowser

**Contents**

- [🧬 MSABrowser](#%f0%9f%a7%ac-msabrowser)
	- [:hash: What is *MSABrowser* and the aim of this library?](#hash-what-is-msabrowser-and-the-aim-of-this-library)
	- [:hash: Requirements and Installation](#hash-requirements-and-installation)
	- [:hash: How to use *MSABrowser*?](#hash-how-to-use-msabrowser)
	- [:hash: Parameters & Examples for the Functions](#hash-parameters--examples-for-the-functions)
		- [:hash: Color Schemas List](#hash-color-schemas-list)
		- [:hash: Adding Annoations (Protein Domains) & Example](#hash-adding-annoations-protein-domains--example)
		- [:hash: Adding Variations & Example](#hash-adding-variations--example)
	- [:hash: Example Usages (Use Cases) of MSABrowser](#hash-example-usages-use-cases-of-msabrowser)
		- [:hash: Evolutionary/Comparative Genomics Study](#hash-evolutionarycomparative-genomics-study)
		- [Click here to reach MSABrowser example for Evolutionary/Comparative Genomics Study.](#click-here-to-reach-msabrowser-example-for-evolutionarycomparative-genomics-study)
		- [:hash: COVID-19 / Virology Study](#hash-covid-19--virology-study)
		- [:hash: Do you have another study which is not listed here?](#hash-do-you-have-another-study-which-is-not-listed-here)
	- [:hash: Contributing & Feedback](#hash-contributing--feedback)
	- [:hash: Developers](#hash-developers)

---

## :hash: What is *MSABrowser* and the aim of this library?
*MSABrowser* is an open-source, flexible and modern web-based tool to illustrate the genetic variants, post-translational modifications, and protein domainson the corresponding positions of aminoacids at the protein sequence of any species together with pairwise or multiple sequence alignment of anysize. Ever-increasing number of genetic variants and sequencing projects in next-generation sequencingera enable researchers to investigate the impacts of these variants together with the protein domains. Here, MSABrowser environment and its core features make it easy to visualize the evolutionary conserved amino acids and genetic variants. 


## :hash: Requirements and Installation
*MSABrowser* is entirely developed in JavaScript and works on a web browser at any platform including Linux, Mac OS X and Windows systems without any installation.

## :hash: How to use *MSABrowser*?
 - Create a directory and download any example listed below or use CDN links for required files on your page or clone the repository via Git using following command:
 
 	`git clone https://github.com/thekaplanlab/MSABrowser.git`

> CDN links for JS and CSS files will be added here!


- Then, place your pairwise or multiple sequence alignment (MSA) result file as **FASTA** format in the folder.

- Afterwards, set your parameters and define the title, specify the annotations such as protein domains and add your variants. 

- It's ready to use and visualize now! 

## :hash: Parameters & Examples for the Functions
| Options in the script | Description | Example |
|--|--|--|
| id | *It defines the ID of the element where you place MSABrowser component.* |`<section id="MSABrowserDemo"></section>` |
| fasta | *It refers a variable that holds your sequence alignment or the name of the file in FASTA format* | `sample_msa.txt` or `sample_msa.fasta`
| hasConsensus  | It asks whether you would like to display the consensus sequence or not. | Please state as either `true` or `false`.
| title | *It defines the title of MSABrowser component on the box at the top left corner* | HARS Protein
| domains  | It refers a variable that holds your protein domanin information. | Please check the example below.
| variations | It serves for adding variations on the corresponding positions. | Please check the example below.
| colorSchema  | It defines the name of the color schema you would like to display | Please the check the list of color schemas below.
| resetOnScroll  | It enables to render (only) the positions in viewport. | Please state as either `true` (default) or `false`.

### :hash: Color Schemas List

> You need to select a color schema and put the name of the color schema into the variable:

Example for this:
> `colorSchema = "clustal";`

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
- `nucleotide`


### :hash: Adding Annoations (Protein Domains) & Example

> You are able to visualize the protein domains above the sequence aligner in the annotation part.

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

### :hash: Adding Variations & Example

> You are able to add variations and modifications or any types of notes on the corresponding positions.

**Here is the details for use of `variations` :**


| Key | Description | Example |
|---------------------------------------------------|--------------------------------------------------------|----------------------------------------------------------|
| protein | The order of the species in the sequence alignment | 1 |
| position | The (real) position of the amino acid in the protein.* | 5 |
| note | The annotation part for this position. | M->A : Pathogenic and causes a disease with a name of X. |
| source | The source of the information. | Surname et. al (2020) |



**Here is the example how to add a variation:**
```
{
	'protein': 2, 
	'position': 5, 
	'note': 'M->A : Pathogenic and causes a disease X', 
	source: 'Surname et. al (2020)'
},
...
```

> Here, this variation will be added onto the `5th` amino acid in the protein of `2nd` species in the sequence alignment with a note of "`M->A : Pathogenic and causes a disease with a name of X`" and source of "`Surname et. al (2020)`". 


> In addition, if you state the `source` as `"PTM"` (post-translational modification), it also will be notified as red asterisk in the viewer.


## :hash: Example Usages (Use Cases) of MSABrowser

### :hash: Evolutionary/Comparative Genomics Study 
> In this example, human MLH1 protein and its homologous proteins are aligned and human protein domains are added. Additionaly, some genetic variations are also included from different sources such as gnomAD and ClinVar. 

### [Click here to reach MSABrowser example for Evolutionary/Comparative Genomics Study.](https://github.com/thekaplanlab/msaviewer/tree/master/sample_files)

### :hash: COVID-19 / Virology Study 
Will be added.

### :hash: Do you have another study which is not listed here?
Please do not hesitate to contact us for your study. 

We would be very happy to list your study here.


## :hash: Contributing & Feedback
MSABrowser is released as an open-source and web-based software under GNU General Public License, version 3.0 (GPLv3). The visualizer, documentation, all source code and examples are available at GitHub repository https://github.com/thekaplanlab/MSABrowser.

Moreover, please do not hesitate to `open an issue via Github` if you have any suggestion or feedback.


## :hash: Developers
**Halil Bilgin |  [bilginhalil@gmail.com](mailto:bilginhalil@gmail.com) | Academia: [Google Scholar Profile](https://scholar.google.com/citations?user=U1jyUGkAAAAJ&hl=en&oi=ao)**


**Furkan Torun |  [furkanmtorun@gmail.com](mailto:furkanmtorun@gmail.com) | Academia: [Google Scholar Profile](https://scholar.google.com/citations?user=d5ZyOZ4AAAAJ)**


