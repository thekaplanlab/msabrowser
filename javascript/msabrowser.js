    const ColorSchemas = {
        "hydrophobicity": { A: "#ad0052", B: "#0c00f3", C: "#c2003d", D: "#0c00f3", E: "#0c00f3", F: "#cb0034", G: "#6a0095", H: "#1500ea", I: "#ff0000", J: "#fff", K: "#0000ff", L: "#ea0015", M: "#b0004f", N: "#0c00f3", O: "#fff", P: "#4600b9", Q: "#0c00f3", R: "#0000ff", S: "#5e00a1", T: "#61009e", U: "#fff", V: "#f60009", W: "#5b00a4", X: "#680097", Y: "#4f00b0", Z: "#0c00f3" },
        "buried": { A: "#00a35c", R: "#00fc03", N: "#00eb14", D: "#00eb14", C: "#0000ff", Q: "#00f10e", E: "#00f10e", G: "#009d62", H: "#00d52a", I: "#0054ab", L: "#007b84", K: "#00ff00", M: "#009768", F: "#008778", P: "#00e01f", S: "#00d52a", T: "#00db24", W: "#00a857", Y: "#00e619", V: "#005fa0", B: "#00eb14", X: "#00b649", Z: "#00f10e" },
        "cinema": { A: "#BBBBBB", B: "grey", C: "yellow", D: "red", E: "red", F: "magenta", G: "brown", H: "#00FFFF", I: "#BBBBBB", J: "#fff", K: "#00FFFF", L: "#BBBBBB", M: "#BBBBBB", N: "green", O: "#fff", P: "brown", Q: "green", R: "#00FFFF", S: "green", T: "green", U: "#fff", V: "#BBBBBB", W: "magenta", X: "grey", Y: "magenta", Z: "grey" },
        "clustal": { A: "orange", B: "#fff", C: "green", D: "red", E: "red", F: "blue", G: "orange", H: "red", I: "green", J: "#fff", K: "red", L: "green", M: "green", N: "#fff", O: "#fff", P: "orange", Q: "#fff", R: "red", S: "orange", T: "orange", U: "#fff", V: "green", W: "blue", X: "#fff", Y: "blue", Z: "#fff" },
        "clustal2": { A: "#80a0f0", R: "#f01505", N: "#00ff00", D: "#c048c0", C: "#f08080", Q: "#00ff00", E: "#c048c0", G: "#f09048", H: "#15a4a4", I: "#80a0f0", L: "#80a0f0", K: "#f01505", M: "#80a0f0", F: "#80a0f0", P: "#ffff00", S: "#00ff00", T: "#00ff00", W: "#80a0f0", Y: "#15a4a4", V: "#80a0f0", B: "#fff", X: "#fff", Z: "#fff" },
        "helix": { A: "#e718e7", R: "#6f906f", N: "#1be41b", D: "#778877", C: "#23dc23", Q: "#926d92", E: "#ff00ff", G: "#00ff00", H: "#758a75", I: "#8a758a", L: "#ae51ae", K: "#a05fa0", M: "#ef10ef", F: "#986798", P: "#00ff00", S: "#36c936", T: "#47b847", W: "#8a758a", Y: "#21de21", V: "#857a85", B: "#49b649", X: "#758a75", Z: "#c936c9" },
        "lesk": { A: " orange", B: " #fff", C: " green", D: " red", E: " red", F: " green", G: " orange", H: " magenta", I: " green", J: " #fff", K: " red", L: " green", M: " green", N: " magenta", O: " #fff", P: " green", Q: " magenta", R: " red", S: " orange", T: " orange", U: " #fff", V: " green", W: " green", X: " #fff", Y: " green", Z: " #fff" },
        "mae": { A: " #77dd88", B: " #fff", C: " #99ee66", D: " #55bb33", E: " #55bb33", F: " #9999ff", G: " #77dd88", H: " #5555ff", I: " #66bbff", J: " #fff", K: " #ffcc77", L: " #66bbff", M: " #66bbff", N: " #55bb33", O: " #fff", P: " #eeaaaa", Q: " #55bb33", R: " #ffcc77", S: " #ff4455", T: " #ff4455", U: " #fff", V: " #66bbff", W: " #9999ff", X: " #fff", Y: " #9999ff", Z: " #fff" },
        "strand": { A: "#5858a7", R: "#6b6b94", N: "#64649b", D: "#2121de", C: "#9d9d62", Q: "#8c8c73", E: "#0000ff", G: "#4949b6", H: "#60609f", I: "#ecec13", L: "#b2b24d", K: "#4747b8", M: "#82827d", F: "#c2c23d", P: "#2323dc", S: "#4949b6", T: "#9d9d62", W: "#c0c03f", Y: "#d3d32c", V: "#ffff00", B: "#4343bc", X: "#797986", Z: "#4747b8" },
        "taylor": { A: "#ccff00", R: "#0000ff", N: "#cc00ff", D: "#ff0000", C: "#ffff00", Q: "#ff00cc", E: "#ff0066", G: "#ff9900", H: "#0066ff", I: "#66ff00", L: "#33ff00", K: "#6600ff", M: "#00ff00", F: "#00ff66", P: "#ffcc00", S: "#ff3300", T: "#ff6600", W: "#00ccff", Y: "#00ffcc", V: "#99ff00", B: "#fff", X: "#fff", Z: "#fff" },
        "turn": { A: "#2cd3d3", R: "#708f8f", N: "#ff0000", D: "#e81717", C: "#a85757", Q: "#3fc0c0", E: "#778888", G: "#ff0000", H: "#708f8f", I: "#00ffff", L: "#1ce3e3", K: "#7e8181", M: "#1ee1e1", F: "#1ee1e1", P: "#f60909", S: "#e11e1e", T: "#738c8c", W: "#738c8c", Y: "#9d6262", V: "#07f8f8", B: "#f30c0c", X: "#7c8383", Z: "#5ba4a4" },
        "zappo": { A: "#ffafaf", R: "#6464ff", N: "#00ff00", D: "#ff0000", C: "#ffff00", Q: "#00ff00", E: "#ff0000", G: "#ff00ff", H: "#6464ff", I: "#ffafaf", L: "#ffafaf", K: "#6464ff", M: "#ffafaf", F: "#ffc800", P: "#ff00ff", S: "#00ff00", T: "#00ff00", W: "#ffc800", Y: "#ffc800", V: "#ffafaf", B: "#fff", X: "#fff", Z: "#fff" },
        "nucleotide": { A: " #64F73F", C: " #FFB340", G: " #EB413C", T: " #3C88EE", U: " #3C88EE" }
    }

    function MSAProcessor({
        fasta,
        hasConsensus = false
    }) {
        this.sequenceDetails = [];
        this.processedSequences = [];
        this.fasta = fasta;
        this.extractLinkFromId = function(sequenceId) {
            var sequenceType = sequenceId.substring(0, 2);
            var link;
            regexPattern = "[OPQ][0-9][A-Z0-9]{3}[0-9]|[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}";
            if (sequenceType == "gi") { link = "https://www.ncbi.nlm.nih.gov/protein/" + sequenceId.split("|")[3]; } 
            else if (sequenceType == "NP" || sequenceType == "XP") { link = "https://www.ncbi.nlm.nih.gov/protein/" + sequenceId; } 
            else if (sequenceType == "EN") { link = "https://www.ensembl.org/id/" + sequenceId; }
            else if (sequenceId.search(regexPattern) != "-1") { sequenceId = sequenceId.split("|")[1]; link = "https://www.uniprot.org/uniprot/" + sequenceId; }
            else { link = "https://www.ncbi.nlm.nih.gov/search/all/?term=" + sequenceId; }
            
            return link;
        }


        this.loadSeq = function(fasta) {
            let firstStartPointer, endPointer, currentStartPointer = -1;

            do {
                firstStartPointer = fasta.indexOf(">", firstStartPointer + 1);
                endPointer = fasta.indexOf("\n", firstStartPointer + 1);
                currentStartPointer = fasta.indexOf(">", firstStartPointer + 1);
                let sequence = fasta.slice(endPointer + 1, currentStartPointer);
                //removing new line characters inside seq1
                sequence = sequence.replace(/\s/g, "");

                this.processedSequences.push(sequence);
                //Protein Name-Identifier
                let sequenceDescription = fasta.slice(firstStartPointer + 1, endPointer + 1);
                if (sequenceDescription.substring(0, 2) == "gi") {
                    var sequenceId = sequenceDescription.split("|")[3];
                } else {
                    var sequenceId = sequenceDescription.split(" ")[0];
                }
                let species = sequenceDescription.split("[").slice(-1)[0].split("]")[0];
                let speciesByWord = species.split(" ");
                species = speciesByWord[0][0] + ". " + speciesByWord[1];
                var link = this.extractLinkFromId(sequenceId);
                this.sequenceDetails.push({
                    link: link,
                    species: species,
                    sequenceId: sequenceId,
                    rawProteinName: sequenceDescription
                });

            } while (currentStartPointer != -1);

        }

        // Time To Run
        loadSeq(fasta);

        this.addConsensus = function() {
            let consensus_logo = "";
            var aaCount = this.processedSequences[0].length;
            for (let positionIndex = 0; positionIndex < aaCount; positionIndex++) {
                var position_dict = {};
                for (let sequenceIndex = 0; sequenceIndex < this.processedSequences.length; sequenceIndex++) {
                    var sequence = this.processedSequences[sequenceIndex];
                    var aminoacid = sequence[positionIndex];
                    position_dict[aminoacid] = positionIndex;
                }
                if (Object.keys(position_dict).length == 1) {
                    consensus_logo = consensus_logo.concat(aminoacid);
                } else if (Object.keys(position_dict).length == this.processedSequences.length / 2) {
                    consensus_logo = consensus_logo.concat(':');
                } else if (Object.keys(position_dict).length == this.processedSequences.length) {
                    consensus_logo = consensus_logo.concat('-');
                } else {
                    consensus_logo = consensus_logo.concat('.');
                }
            }
            this.sequenceDetails.push({
                link: '#',
                species: 'Consensus',
                sequenceId: 'Consensus',
                rawProteinName: 'Consensus'
            });
            this.processedSequences.push(consensus_logo);

        }

        if (hasConsensus) {
            this.addConsensus();
        }

        return this;
    };

    function renderMSATemplate({
        ids
    }) {
        return `
        <section class="msa-container">
            <section class="scroll-container">
                <!--Gene name and specie names-->
                <section>
                    <section id="${ids.nameContainer}" class="species-and-gene-names">

                        <div id="${ids.speciesNames}" class="species-names"></div>
                    </section>
                </section>
                <!--MSABrowser | annotations and Sequences Parts -->
                <section id="${ids.annotationSequence}" class="annotation-sequence">
                    
                    <!-- MSABrowser | Protein annotations for Human -->
                    <!-- end of annotations -->

                </section> <!-- end of annotation and sequences parts -->
                <!-- MSABrowser | Protein Sequences -->
                <section id="${ids.sequence}" class="sequence-container">
                    <div id="${ids.aminoacidInfo}" class="aminoacid-info"></div>
                </section> <!-- end of protein sequences -->

            </section>
            <!-- Bottom and fixed panel -->
            <section class="bottom-panel">
                <a href="javascript:void(0)" class="reset-button">Reset</a>
            </section>
            
        </section>
        `;
    }

    function MSABrowser({ // notice the curly braces! we are receiving an object now
        id,
        msa,
        variations = [],
        annotations = [],
        templateFunction = renderMSATemplate,
        colorSchema
    }) {
        this.colorSchema = colorSchema;
        this.createdDivs = {};

        function i_(name) {
            return `${id}-${name}`;
        }
        this.id = id;
        this.ids = {
            id: id,
            annotationSequence: i_('-annotation-sequence'),
            sequenceLength: i_('-sequence-length'),
            sequence: i_('-sequence'),
            aminoacidInfo: i_('-aminoacid-info'),
            nameContainer: i_('-name-container'),
            geneName: i_('-gene-name'),
            speciesNames: i_('-species-names'),
            positionInput: i_('-position'),
            speciesSelect: i_('-species-select')
        }
        this.msa = msa;
        this.variationNotes = {};
        this.modificationNotes = {};
        this.loadedPositions = [];
        for (var seqIndex = 0; seqIndex < msa.processedSequences.length; seqIndex++) {
            this.loadedPositions[seqIndex] = [];
            for (i = 0; i < msa.processedSequences[0].length; i++) {
                this.loadedPositions[seqIndex].push(false);
            }
        }

        var that = this;

        function loadProteins(msa) {
            var ids = that.ids;
            var sequenceLengthforDomain = "width:" + msa.processedSequences[0].length * 20 + "px;";
            document.getElementById(ids.annotationSequence).style = sequenceLengthforDomain;

            for (var i in msa.sequenceDetails) {
                //creating flex container for proteins
                var sequenceDetails = msa.sequenceDetails[i];

                let sequence = document.createElement("section");
                document.getElementById(ids.sequence).appendChild(sequence);
                sequence.id = sequenceDetails.sequenceId;
                sequence.className = "sequence";
                sequence.style = sequenceLengthforDomain;
                var speciesName = document.createElement("div");
                var speciesNameLink = document.createElement("a");
                var sequenceHidingButton = document.createElement("a");
                var speciesTooltip = document.createElement('span');

                sequenceHidingButton.setAttribute("href", "#" + sequenceDetails.sequenceId);
                sequenceHidingButton.setAttribute('class', 'hiding-button');
                speciesNameLink.setAttribute("href", sequenceDetails.link);
                speciesNameLink.setAttribute('target', '_blank');
                speciesTooltip.setAttribute('class', 'tooltiptext');
                speciesTooltip.innerHTML = sequenceDetails.sequenceId;
                speciesName.className = "species-name tooltip";
                sequence.setAttribute("data-id", sequenceDetails.sequenceId);
                speciesName.setAttribute("data-id", sequenceDetails.sequenceId);

                document.getElementById(ids.speciesNames).appendChild(speciesName).appendChild(sequenceHidingButton);
                sequenceHidingButton.appendChild(document.createTextNode('x '));
                document.getElementById(ids.speciesNames).appendChild(speciesName).appendChild(speciesNameLink);
                speciesNameLink.appendChild(document.createTextNode(sequenceDetails.species));
                document.getElementById(ids.speciesNames).appendChild(speciesName).appendChild(speciesTooltip);
            }

            // For hiding sequences
            $(".hiding-button").click(function() {
                var sequenceId = $(this).attr("href").split("#")[1];
                $('[data-id="' + sequenceId + '"]').hide();
            });


        }

        function loadViewportToAANumber(msa) {
            viewportToAANumber = [];

            for (i in msa.processedSequences) {
                sequence = msa.processedSequences[i];
                viewportToAANumber.push([]);
                aa_ind = 0;
                for (ind = 0; ind < sequence.length; ind++) {

                    if (sequence.charAt(ind) == '-') {
                        viewportToAANumber[i].push(-1);
                        continue;
                    } else {
                        viewportToAANumber[i].push(aa_ind);
                        aa_ind++;
                    }
                }
            }
        }
        document.getElementById(id).innerHTML = templateFunction({ ids: this.ids });
        loadProteins(msa);
        this.viewportToAANumber = loadViewportToAANumber(msa);

        this.mainDiv = $('#' + id).find('.msa-container');

        this.loadAminoacidSearch(msa);

        function getOffsetX(prNumber, aaNumber) {
            var indexOfAA = that.getAminoacidPositionInViewport(prNumber, aaNumber);

            var offsetX = indexOfAA * 20 + 30;

            return offsetX;
        }

        this.showVariation = function(prNumber, aaNumber) {

            let textBox = document.createElement("div");
            let innerTextBox = document.createElement("div");
            textBox.setAttribute("class", "variation-text-box");
            innerTextBox.setAttribute("class", "variation-inner-text-box");

            var sequenceNotes = this.variationNotes[prNumber];
            for (var source in sequenceNotes[aaNumber]) {
                innerTextBox.innerHTML += "<h3>" + source + "</h3>" + sequenceNotes[aaNumber][source];
            }
            if (innerTextBox.innerHTML == ''){
                return false;
            }
            var aminoacidInfoBox = document.getElementById(this.ids.aminoacidInfo);
            aminoacidInfoBox.innerHTML = '';
            aminoacidInfoBox.appendChild(textBox).appendChild(innerTextBox); // time to insert the textBox into aminoacidInfoBox | eski: aminoacidInfoBox.appendChild(textBox)
            $(".variation-inner-text-box").mouseleave(function(e) {
                var aminoacidInfo = document.getElementById(that.ids.aminoacidInfo);
                aminoacidInfo.innerHTML = "";
            });

            offsetX = getOffsetX(prNumber, aaNumber);
            var container = document.getElementById(this.id).getElementsByClassName("sequence")[0];

            if (container.scrollWidth < (offsetX + 600)) {
                offsetX = offsetX - 340;

                textBox.className += " rightArrow";
            }
            let specificPositionforCVBox = "top: " + (prNumber * 20 - 13) + "px;" + "left: " + (offsetX) + "px;  box-shadow:#555 1px 1px 5px 3px;";
            document.getElementById(this.ids.aminoacidInfo).childNodes[0].style.cssText = specificPositionforCVBox;

        }

        for (i in variations) {
            variation = variations[i];
            this.addVariation(variation);
        }
        this.annotations = {};

        if ((typeof(annotations) != "undefined")) {
            this.addAnnotations(annotations);
        }
        var t;
        var aminoacidContainers = document.getElementById(that.ids.sequence).getElementsByTagName('section');

        function checkScroll() {
            setTimeout(() => {
                if ($('#' + that.ids.sequence).find('section div').length > 50000) {
                    for (var seqIndex in loadedPositions) {
                        for (var i in loadedPositions[seqIndex]) {
                            loadedPositions[seqIndex][i] = false;
                        }
                    }

                    for (section of aminoacidContainers) {
                        section.innerHTML = '';
                    }
                    that.loadDivsInViewport();
                }
            }, 500);
        };

        this.loadDivsInViewport();
        this.mainDiv.find('.scroll-container').scroll(() => {
            clearTimeout(t);
            this.loadDivsInViewport();
            checkScroll();

        });

        this.loadDomainBar();

        $('.reset-button').click(() => { this.reset() });

    }

    MSABrowser.prototype.reset = function() {
        this.mainDiv.find('.sequence, .species-name').show();
    }

    MSABrowser.prototype.loadDomainBar = function() {
        var that = this;
        $('.annotation').each(function() {
            //console.log($(this).data('start-point'), );
            startPosition = that.getAminoacidPositionInViewport(0, parseInt($(this).data('start-point')) - 1);

            width = that.getAminoacidPositionInViewport(0, parseInt($(this).data('end-point')) - 1) - startPosition;

            $(this).css('display', 'flex');
            $(this).css('left', (startPosition * 20) + 'px');
            $(this).width((width * 20) + 'px');
        });

        $(document).on('mouseover', '.specialAa', function() {
            prNumber = $(this).data('sid');
            aaNumber = parseInt($(this).attr('class').split(' ')[0].split('-')[1])
            that.showVariation(prNumber, viewportToAANumber[prNumber][aaNumber]);
        });
        
        $(document).on('click', '.sequence>div', function() {
            var regex = /i-([0-9]+)/i;
            var sequence = $(this).parent().index('.sequence');
            var position = viewportToAANumber[sequence][$(this).attr('class').match(regex)[1]];

            that.scrollToPosition(sequence+1, position+1);
        })


        var ids = this.ids;
        $('.sequence').width(($('#' + ids.sequenceLength).width()) + 'px');
        $('#' + ids.sequence).width(($('#' + ids.sequenceLength).width()) + 'px');
    }

    MSABrowser.prototype.getAminoacidPositionInViewport = function(species_id, position) {
        var sequence = this.msa.processedSequences[species_id];
        var aminoacidIndex = 0;
        for (i = 0; i < sequence.length; i++) {
            if (sequence.charAt(i) == '-')
                continue;
            if (aminoacidIndex == position) {
                return i;
            }
            if (sequence.charAt(i) != '-') {
                aminoacidIndex++;
            }

        }
        return -1;
    }

    MSABrowser.prototype.highlightPosition = function(species, position) {
        var alignmentPosition = this.getAminoacidPositionInViewport(species, position);

        $mainDiv.find('.highlight-column').removeClass('highlight-column modification-highlighted');
        $mainDiv.find('.position-number').remove();

        template = `<div class="highlight-column position-number" style="left:${alignmentPosition * 20}px">${position+1}</div>`;

        $mainDiv.find('.sequence:eq(0)').append(template);

        $mainDiv.find('.scroll-container').scrollLeft(alignmentPosition * 20 - ($mainDiv.width() - 160) / 2)

        setTimeout(function() {
            $mainDiv.find('.i-' + alignmentPosition).addClass('highlight-column');
            $mainDiv.find('.sequence:eq(' + species + ') .modification.i-' + alignmentPosition).addClass('modification-highlighted');
        }, 75);
    }
    MSABrowser.prototype.loadAminoacidSearch = function() {
        var ids = this.ids;
        $mainDiv = this.mainDiv;
        containerTemplate = `<section class="go-to-position">
            Search a position: <input type="number" placeholder="3" name="position" min="1" class="form_input" id="${ids.positionInput}">
            Species : <select name="species" id="${ids.speciesSelect}"></select>
            </section>`;

        $mainDiv.find('.bottom-panel').append(containerTemplate);

        for (var i in this.msa.sequenceDetails) {
            var species = this.msa.sequenceDetails[i].species;
            var template = `<option value="${i}">${species}</option>`;
            $('#' + ids.speciesSelect).append(template);
        }


        $(`#${ids.positionInput}, #${ids.speciesSelect}`).on("keyup change", () => {
            var position = parseInt($('#' + this.ids.positionInput).val());
            var species = parseInt($('#' + this.ids.speciesSelect).val());
            this.highlightPosition(species, position - 1)
        });
    }

    MSABrowser.prototype.loadDivsInViewport = function() {

        var ids = this.ids;
        loadedPositions = this.loadedPositions;
        processedSequences = this.msa.processedSequences;
        variationNotes = this.variationNotes;
        modificationNotes = this.modificationNotes;

        var viewportOffset = document.getElementById(ids.sequence).getBoundingClientRect();
        this.mainDiv.find('.species-and-gene-names').css('left', this.mainDiv.find('.scroll-container').scrollLeft());

        var startX = Math.max(0, parseInt((Math.abs(viewportOffset.left) - document.getElementById(ids.nameContainer).clientWidth) / 20));

        var endX = Math.min(processedSequences[0].length,
            parseInt(startX + (document.getElementById(ids.nameContainer).clientWidth) / 20 + 3 * this.mainDiv.innerWidth() / 40 + 1));

        var startY = 0;
        if (this.mainDiv.find('.gene-name')) {
            startY = -this.mainDiv.find('.gene-name').height() * this.mainDiv.find('.gene-name').length / 20
        }
        startY = Math.max(0, parseInt(startY + $('#' + ids.id).find('.scroll-container').scrollTop() / 20 - 3));

        var endY = Math.min(processedSequences.length, parseInt(startY + 350 / 20 + 1));

        for (var sequenceIndex = startY; sequenceIndex < endY; sequenceIndex++) {
            seq1 = processedSequences[sequenceIndex];
            var documentFragment = document.createDocumentFragment();
            for (var positionIndex = startX; positionIndex < endX; positionIndex++) {

                if (loadedPositions[sequenceIndex][positionIndex]) {
                    continue;
                } else {
                    loadedPositions[sequenceIndex][positionIndex] = true;
                }

                if (this.createdDivs[`${sequenceIndex};${positionIndex}`]) {
                    documentFragment.appendChild(this.createdDivs[`${sequenceIndex};${positionIndex}`]);
                    continue;
                }

                let aaBox = document.createElement("div");
                //reading protein sequence letter by letter
                var aaLetter = seq1.charAt(positionIndex);
                //creating amino acid boxes

                if (aaLetter != '-') {
                    aaBox.className = "i-" + positionIndex;
                }
                if (aaLetter == '-') {
                    continue;
                }

                if (sequenceIndex in variationNotes && viewportToAANumber[sequenceIndex][positionIndex] != -1 && viewportToAANumber[sequenceIndex][positionIndex] in variationNotes[sequenceIndex]) {
                    aaBox.className += " specialAa";
                    aaBox.setAttribute('data-sid', sequenceIndex);
                }

                if (sequenceIndex == 0 && viewportToAANumber[sequenceIndex][positionIndex] in modificationNotes) {
                    aaBox.className += " modification";
                    aaBox.setAttribute('data-sid', sequenceIndex);
                }

                aaBox.innerHTML = aaLetter;
                aaBox.style.cssText = 'left:' + (positionIndex * 20) + 'px;';

                // Color schema for amino acids

                var aaColor = ColorSchemas[this.colorSchema][aaLetter]
                aaBox.style.backgroundColor += aaColor;
                // Special cases for color schema
                if (aaColor == "#fff" || aaColor == "yellow") { aaBox.style.color += "#555" };
                // Consensus
                if (aaLetter == "." || aaLetter == ":" || !aaColor) { aaBox.style.backgroundColor += "#5c5c5c" };

                documentFragment.appendChild(aaBox);
                this.createdDivs[`${sequenceIndex};${positionIndex}`] = aaBox;
            }
            let element = this.mainDiv[0].getElementsByClassName('sequence')[sequenceIndex];

            element.appendChild(documentFragment);
            documentFragment.innerHTML = '';
        }


    }

    MSABrowser.prototype.addAnnotations = function(annotations) {

        var ids = this.ids;

        for (var annotation of annotations) {
            if (this.annotations[annotation.source]) {
                continue;
            }
            this.annotations[annotation.source] = annotations.data;

            var annotationContainerTemplate = `<section class="sequence-length"></section>`;
            $('#' + ids.annotationSequence).append(annotationContainerTemplate);


            var annotationContainer = $('#' + ids.annotationSequence).find('.sequence-length:last')[0];
            $('#' + ids.speciesNames).before(`<div class="gene-name">${annotation.source}</div>`);

            for (var key in annotation.data) {
                var name = annotation.data[key]["annotation_id"];
                var link = annotation.data[key]["annotation_external_link"];
                var startPoint = annotation.data[key]["annotation_start_point"];
                var endPoint = annotation.data[key]["annotation_end_point"];
                var repeatCount = Math.max(1, Math.round((endPoint - startPoint) * 20 / 800));
                
                var annotationMessage = `<p style="width: 800px">${name} (${startPoint} - ${endPoint})</p>`.repeat(repeatCount);


                var annotationHtml = `
                <a href="${link}" target="_blank">
                    <div class="annotation" data-start-point="${startPoint}" data-end-point="${endPoint}">
                        <div class="annotation_start_point">${startPoint}</div>
                        ${annotationMessage}
                        <div class="annotation_end_point">${endPoint}</div>
                    </div>
                </a>
                `;

                $(annotationContainer).append(annotationHtml);
            };
        }
    }

    MSABrowser.prototype.addVariation = function({
        sequenceIndex,
        position,
        note = "",
        source = ""
    }) {
        var sequenceIndex = sequenceIndex - 1; // the species start from 0
        let aaNumber = position - 1; // the aacids start from 0

        notesByProtein = this.variationNotes[sequenceIndex];
        if (notesByProtein == undefined) {
            notesByProtein = [];
        }

        if (notesByProtein[aaNumber] == undefined) {
            notesByProtein[aaNumber] = {};
            notesByProtein[aaNumber][source] = "";
        } else if (notesByProtein[aaNumber][source] == undefined) {
            notesByProtein[aaNumber][source] = "";
        }

        notesByProtein[aaNumber][source] += note;
        this.variationNotes[sequenceIndex] = notesByProtein

        if (source == "modification") {
            this.modificationNotes[aaNumber] += position + 1;
        }
    }

    function saveAs(uri, filename) {

        var link = document.createElement('a');

        if (typeof link.download === 'string') {

            link.href = uri;
            link.download = filename;

            //Firefox requires the link to be in the body
            document.body.appendChild(link);

            //simulate click
            link.click();

            //remove the link when done
            document.body.removeChild(link);

        } else {

            window.open(uri);

        }
    }

    MSABrowser.prototype.export = function(fileName) {
        if (fileName != "") { var fileName = "MSA_export.fasta" }
        var fileContent = this.msa.fasta;
        var hrefTag = "data:text/plain;charset=UTF-8," + encodeURIComponent(fileContent);
        this.mainDiv.find('.bottom-panel').append('<a class="msa-button export-button" href="' + hrefTag + '" download="' + fileName + '">Download as FASTA</a>');
        this.mainDiv.find('.bottom-panel').append('<a href="javascript:void(0)" class="msa-button ss-button">Save as PNG</a>');

        this.mainDiv.find('.ss-button').click(() => {
            this.mainDiv.find('.ss-button').prepend('<img src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/fancybox_loading.gif" style="height:18px"> ')

            html2canvas(this.mainDiv.find('.scroll-container')[0], { height: this.mainDiv.height(), width: this.mainDiv.width() }).then(canvas => {
                console.log(canvas);
                saveAs(canvas.toDataURL(), 'msa-browser-image.png');
                this.mainDiv.find('.ss-button').find('img').remove();
            });
        })
    }

    MSABrowser.prototype.scrollToPosition = function(species, position) {

        this.highlightPosition(species - 1, position - 1)
        this.mainDiv[0].scrollIntoViewIfNeeded();

        setTimeout(() => { this.showVariation(species - 1, position - 1); }, 20);
    }
