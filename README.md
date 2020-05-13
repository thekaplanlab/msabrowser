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
	- [:hash: Example Usages (Use Cases) of *MSABrowser*](#hash-example-usages-use-cases-of-msabrowser)
		- [:hash: Evolutionary/Comparative Genomics Study](#hash-evolutionarycomparative-genomics-study)
		- [:hash: COVID-19 / Virology Study](#hash-covid-19--virology-study)
		- [:hash: Spike Proteins Example](#hash-spike-proteins-example)
		- [:hash: Do you have another study which is not listed here?](#hash-do-you-have-another-study-which-is-not-listed-here)
	- [:hash: Contributing & Feedback](#hash-contributing--feedback)
	- [:hash: Developers](#hash-developers)
	- [:hash: Citing the *MSABrowser*](#hash-citing-the-msabrowser)

---

## :hash: What is *MSABrowser* and the aim of this library?
Sequence alignment (MSA) is an excellent way to visualize the similarities and differences between DNA, RNA or protein sequences, yet it is currently difficult to jointly view MSAs with genetic variants, post-translational modifications and protein domains. Here, we develop the *MSABrowser* environment that makes easy to co-visualize genetic variations, modifications (i.e. PTMs), and annotations such as protein domains on the respective positions of amino acids or nucleotides in the genomes of any organisms in pairwise or multiple genome alignments. *MSABrowser* is developed entirely in JavaScript and works on any modern web browser at any platform including Linux, Mac OS X and Windows systems without any installation. MSABrowser is also freely available for the benefit of the scientific community. 


## :hash: Requirements and Installation
*MSABrowser* is entirely developed in JavaScript and works on a web browser at any platform including Linux, Mac OS X and Windows systems without any installation.

## :hash: How to use *MSABrowser*?
 - Create a directory and download any example listed below or use CDN links for required files on your page or clone the repository via Git using following command:
 
 	`git clone https://github.com/msabrowser/msabrowser.git`

> CDN Links:
>
> JS: https://cdn.jsdelivr.net/gh/msabrowser/msabrowser/javascript/msabrowser.js
> 
> CSS: https://cdn.jsdelivr.net/gh/msabrowser/msabrowser/css/style.css
> 
> You can directly import them into your HTML file!


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
| annotations  | *It refers a variable that holds your annotations such as protein domains.* | Please check the example below.
| variations | *It serves for adding variations on the corresponding positions.* | Please check the example below.
| colorSchema  | *It defines the name of the color schema you would like to display.* | Please the check the list of color schemas below.
| scrollToPosition() | *It enables addressing a specific position in a species.* | Please, give the `sequenceIndex` and `position` into the `scrollToPosition(sequenceIndex, position)` function, respectively.
| export() | *It serves for downloading the alignment data. You can give a filename for the output into the function.* | Default name is `"MSA_export.fasta"`. 


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

> Also, you might consider to add more than one annotation parts in the *MSABrowser*.

Here is the example use of `annotations` variable.
```
var annotations = [
	{
		source: "SourceName1",
		data: [
			{
				'annotation_id': 'AnnotationID',
				'annotation_name': 'AnnotationName',
				'annotation_external_link': 'https://msabrowser.github.io',
				'annotation_start_point': 15,
				'annotation_end_point': 290
			},
			{
				'annotation_id': 'SecondAnnotationID',
				'annotation_name': 'SecondAnnotationName',
				'annotation_external_link': 'https://kaplanlab.com',
				'annotation_start_point': 450,
				'annotation_end_point': 570
			}
		]
	}, 
	{
		source: "SourceName2",
		data: [
			{
				'annotation_id': 'AnnotationID',
				'annotation_name': 'AnnotationName',
				'annotation_external_link': 'https://msabrowser.github.io',
				'annotation_start_point': 25,
				'annotation_end_point': 160
			},
			{
				'annotation_id': 'SecondAnnotationID',
				'annotation_name': 'SecondAnnotationName',
				'annotation_external_link': 'http://kaplanlab.com',
				'annotation_start_point': 250,
				'annotation_end_point': 490
			}
		]
	}
]
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
var variations = [
	{
		'sequenceIndex': 2, 
		'position': 5, 
		'note': 'M->A : Pathogenic and causes a disease X', 
		'source': 'Surname et. al (2020)'
	},
]
```

> Here, this variation will be added onto the `5th` position in the sequnce of `2nd` species in the alignment data with a note of "`M->A : Pathogenic and causes a disease with a name of X`" and source of "`Surname et. al (2020)`". 

> In addition, if you state the `source` as `"modification"` (post-translational modification), it also will be notified as `red asterisk` in the viewer.

> Also, you might want to add a cross-reference link by adding it within the `note` after changing the link in `href` attribute:
> 
> `<a href="http://msabrowser.github.io" target="_blank">For details, visit here</a>`

## :hash: Example Usages (Use Cases) of *MSABrowser*

### :hash: Evolutionary/Comparative Genomics Study 
In this example, human TUBA1A protein and its homologous proteins are aligned and human protein domains are added. Additionaly, some genetic variations are also included from different sources such as gnomAD and ClinVar. 

> [Click here to reach *MSABrowser* example for Evolutionary/Comparative Genomics Study.](https://github.com/msabrowser/msabrowser/blob/master/examples/TUBA1A.html)

### :hash: COVID-19 / Virology Study 
In this example, some available SARS-CoV-2 sequences are aligned with default options of MUSCLE and their genetic variations received from [China National Center for Bioinformation 2019 Novel Coronavirus Resource (2019nCoVR)](https://bigd.big.ac.cn/ncov/) are added.

> [Click here to reach *MSABrowser* example for COVID-19 / Virology Study.](https://github.com/msabrowser/msabrowser/blob/master/examples/SarsCov2.html)

### :hash: Spike Proteins Example
In this example, spike proteins are retrieved and aligned. Additionaly, some genetic variations and modifications are also added.

> [Click here to reach *MSABrowser* example for Spike Proteins.](https://github.com/msabrowser/msabrowser/blob/master/examples/SpikeProteins.html)


### :hash: Do you have another study which is not listed here?
Please do not hesitate to [contact us](#hash-developers) for adding your study! 

We would be very happy to list your study here!


## :hash: Contributing & Feedback
MSABrowser is released as an open-source and web-based software under GNU General Public License, version 3.0 (GPLv3). The visualizer, documentation, all source code and examples are available at GitHub repository https://github.com/msabrowser/msabrowser.

Moreover, please do not hesitate to `open an issue via Github` if you have any suggestion or feedback.


## :hash: Developers
**Halil I. Bilgin |  [bilginhalil@gmail.com](mailto:bilginhalil@gmail.com) | Academia: [Google Scholar Profile](https://scholar.google.com/citations?user=U1jyUGkAAAAJ&hl=en&oi=ao)**


**Furkan M. Torun |  [furkanmtorun@gmail.com](mailto:furkanmtorun@gmail.com) | Academia: [Google Scholar Profile](https://scholar.google.com/citations?user=d5ZyOZ4AAAAJ)**

## :hash: Citing the *MSABrowser*
Upcoming 