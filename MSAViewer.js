function MSAProcessor({
    fasta,
    hasConsensus = false
}) {
        this.sequenceDetails = [];
        this.processedSequences = [];

        this.extractLinkFromId = function(proteinId){
            var proteinType = proteinId.substring(0, 2);
            // console.log('hey', prType);
            if (proteinType == "NP" || proteinType == "XP") {
                link = "https://www.ncbi.nlm.nih.gov/protein/" + proteinId;
            }
            if (proteinType == "EN") {
                link = "https://www.ensembl.org/id/" + proteinId;
            }
            
            regexPattern = "[OPQ][0-9][A-Z0-9]{3}[0-9]|[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}"
            if (proteinId.search(regexPattern) != "-1") {
                proteinId = proteinId.split(" ")[1];
                link = "https://www.uniprot.org/uniprot/" + proteinId;
            }

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
                let proteinName = fasta.slice(firstStartPointer + 1, endPointer + 1);
                let proteinId = proteinName.split(" ")[0]; 
                let species = proteinName.split("[").slice(-1)[0].split("]")[0];
                let speciesByWord = species.split(" ");
                species = speciesByWord[0][0] + ". " + speciesByWord[1];
                var link = this.extractLinkFromId(proteinId);
                this.sequenceDetails.push({
                    link: link,
                    species: species,
                    proteinId: proteinId,
                    rawProteinName: proteinName
                });
    
            } while (currentStartPointer != -1);
            
        }

        // Time To Run
        loadSeq(fasta);

        this.addConsensus = function() {
            let consensus_logo = "";
            var aaCount = this.processedSequences[0].length;
            for (let aaInd = 0; aaInd < aaCount; aaInd++) {
                var position_dict = {};
                for (let proteinIndex = 0; proteinIndex < this.processedSequences.length; proteinIndex++) {
                    var protein = this.processedSequences[proteinIndex];
                    var aminoacid = protein[aaInd];
                    position_dict[aminoacid] = aaInd;
            }
                console.log(position_dict);
                if (Object.keys(position_dict).length == 1){
                    consensus_logo = consensus_logo.concat(aminoacid);
                }
                else if (Object.keys(position_dict).length == this.processedSequences.length/2) {
                    consensus_logo = consensus_logo.concat(':');
                }
                else if (Object.keys(position_dict).length == this.processedSequences.length)
                {
                    consensus_logo = consensus_logo.concat('-');
                }
                else{
                    consensus_logo = consensus_logo.concat('.');
                }
            }
            this.sequenceDetails.push({
                link: '#',
                species: 'Consensus',
                proteinId: 'Consensus',
                rawProteinName: 'Consensus'
            });
            this.processedSequences.push(consensus_logo);
            
    }

    if(this.hasConsensus) {
        this.addConsensus();
    }

    return this;
};

function renderMSATemplate({
    ids,
    title = ""
}){
    return `
    <section class="msa-container">
        <!--Current Project | Domains and Sequences Parts -->
        <section id="${ids.domainSequence}" class="domain-sequence">
            
            <!-- Current Project | Protein Domains for Human -->
            <section id="${ids.proteinLength}" class="protein-length">
            </section> <!-- end of domains -->

            <!-- Current Project | Protein Sequences -->
            <section id="${ids.sequence}" class="sequence-container">
                <div id="${ids.aminoacidInfo}" class="aminoacid-info"></div>
            </section> <!-- end of protein sequences -->

        </section> <!-- end of domain and sequences parts -->

        <!--Gene name and specie names-->
        <section id="${ids.nameContainer}" class="species-and-gene-names">
            <div id="${ids.geneName}" class="gene-name"><br>${title}</div>
            <div id="${ids.speciesNames}" class="species-names"></div>
        </section>
        <section class="go-to-position">
        </section>
        <br><br>
    </section>
    `;
}

function MSAViewer({   // notice the curly braces! we are receiving an object now
    id,
    msa,
    title = "",
    variations = [],
    templateFunction = renderMSATemplate
  }) {

    function i_(name) {
        return `${id}-${name}`;
    }
    this.id = id;
    this.ids = {
        id: id,
        domainSequence: i_('-domain-sequence'),
        proteinLength: i_('-protein-length'),
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
    this.ptmNotes = {};
    this.loadedPositions = [];
    for (i = 0; i < msa.processedSequences[0].length; i++) {
        this.loadedPositions.push(false);
    }
    var that = this;
    
    function loadProteins(msa) {
        var ids = that.ids;
        var proteinLengthforDomain = "width:" + msa.processedSequences[0].length * 20 + "px;"; 
        document.getElementById(ids.proteinLength).style = proteinLengthforDomain;

        for(var i in msa.sequenceDetails) {
                    //creating flex container for proteins
            var sequenceDetails = msa.sequenceDetails[i];

            let protein = document.createElement("section");
            document.getElementById(ids.sequence).appendChild(protein);
            protein.id = sequenceDetails.proteinId;
            protein.className = "protein";
            var speciesName = document.createElement("div");
            var speciesNameLink = document.createElement("a");
            
            speciesNameLink.setAttribute("href", sequenceDetails.link);
            speciesNameLink.setAttribute('target', '_blank');
            speciesNameLink.setAttribute('class', 'tooltipped');
            speciesNameLink.setAttribute('data-position', 'right');
            speciesNameLink.setAttribute('data-tooltip', sequenceDetails.proteinId);

            document.getElementById(ids.speciesNames).appendChild(speciesName).appendChild(speciesNameLink);
            speciesName.className = "species-name";
            speciesNameLink.appendChild(document.createTextNode(sequenceDetails.species)); //// exception case olacak 
        }

    }
    
    function loadViewportToAANumber(msa){
        viewportToAANumber = [];

        for(i in msa.processedSequences){
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
    document.getElementById(id).innerHTML = templateFunction({ids: this.ids, title: title});
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

        proteinNotes = this.variationNotes[prNumber];
        for (var source in proteinNotes[aaNumber]) {
            innerTextBox.innerHTML += "<h3>" + source + "</h3>" + proteinNotes[aaNumber][source];
            //console.log(source);
        }
        var aminoacidInfoBox = document.getElementById(this.ids.aminoacidInfo);
        aminoacidInfoBox.innerHTML = '';
        aminoacidInfoBox.appendChild(textBox).appendChild(innerTextBox); // time to insert the textBox into aminoacidInfoBox | eski: aminoacidInfoBox.appendChild(textBox)
        $(".variation-inner-text-box").mouseleave(function (e) {
            var aminoacidInfo = document.getElementById(that.ids.aminoacidInfo);
            aminoacidInfo.innerHTML = "";
        });

        offsetX = getOffsetX(prNumber, aaNumber);
        var container = document.getElementById(this.id).getElementsByClassName("protein")[0];

        if (container.scrollWidth < (offsetX + 600)) {
            offsetX = offsetX - 340;

            textBox.className = "rightArrow";
        }
        let specificPositionforCVBox = "top: " + (prNumber * 20 - 13) + "px;" + "left: " + (offsetX) + "px;  box-shadow:#555 1px 1px 5px 3px;";
        document.getElementById(this.ids.aminoacidInfo).childNodes[0].style.cssText = specificPositionforCVBox;

    }

    for(i in variations) {
        variation = variations[i];
        this.addVariation(variation['protein'], variation['aminoacid'], variation['note'], variation['source']);
    }

    if ((typeof(domains) != "undefined") && (domains.length != 0)) {
        this.addDomains(domains);
    }
    this.loadDivsInViewport();
    this.mainDiv.scroll(function() {
        that.loadDivsInViewport();
    });

    this.loadDomainBar();

}


MSAViewer.prototype.loadDomainBar = function() {
    var that = this;
    $('.domain').each(function() {
        //console.log($(this).data('start-point'), );
        startPosition = that.getAminoacidPositionInViewport(0, parseInt($(this).data('start-point'))-1);

        width = that.getAminoacidPositionInViewport(0, parseInt($(this).data('end-point'))-1) - startPosition;

        $(this).css('display', 'flex');
        $(this).css('left', (startPosition*20)+'px');
        $(this).width((width*20)+'px');
    });

    $(document).on('mouseover', '.specialAa', function(){
        prNumber = $(this).data('sid');
        aaNumber = parseInt($(this).attr('class').split(' ')[0].split('-')[1])
        that.showVariation(prNumber, viewportToAANumber[prNumber][aaNumber]);
    });

        
    var ids = this.ids;
    $('.protein').width(($('#'+ids.proteinLength).width())+'px');
    $('#'+ids.sequence).width(($('#'+ids.proteinLength).width())+'px');
}

MSAViewer.prototype.getAminoacidPositionInViewport = function(species_id, position) {
    var sequence = this.msa.processedSequences[species_id];
    var aminoacidIndex = 0;
    for(i = 0; i< sequence.length; i++){
    if(sequence.charAt(i) == '-')
        continue;
    if(aminoacidIndex == position){
        return i;
    }
    if(sequence.charAt(i) != '-'){
        aminoacidIndex++;
    }
    
    }
    return -1;
}

MSAViewer.prototype.positionKeyUp = function() {
    $mainDiv = this.mainDiv;
    console.log(this);
    var position = $('#'+this.ids.positionInput).val();
    var species = parseInt($('#'+this.ids.speciesSelect).val());
    var alignmentPosition = this.getAminoacidPositionInViewport(species, position - 1);
    
    $mainDiv.find('#position-number').remove();
    $mainDiv.find('.highlight-column').removeClass('highlight-column');
    $mainDiv.find('.ptmHighlighted').removeClass('ptmHighlighted');
    $mainDiv.find('.protein:eq(0)').append('<div class="highlight-column" id="position-number" style="left:' + (alignmentPosition * 20) + 'px">' + position + '</div>');

    $mainDiv.scrollLeft(alignmentPosition * 20 - ($mainDiv.width() - 160) / 2)

    setTimeout(function () {
        $mainDiv.find('.i-' + alignmentPosition).addClass('highlight-column');
        $mainDiv.find('.protein:eq(' + species + ') .ptm.i-' + alignmentPosition).addClass('ptmHighlighted');
    }, 75);
}

MSAViewer.prototype.loadAminoacidSearch = function() {
    var ids = this.ids;
    var that = this;

    $goToDiv = this.mainDiv.find('.go-to-position');

    $goToDiv.append('Search a position: <input type="number" placeholder="3" name="position" class="form_input" id="'+ids.positionInput+'">');
    $goToDiv.append(' Species : <select name="species" id="'+ids.speciesSelect+'"></select><br>');

    for(var i in this.msa.sequenceDetails) {
        var species = this.msa.sequenceDetails[i].species;
        $('#'+ids.speciesSelect).html($('#'+ids.speciesSelect).html() + '<option value="' + i + '">' + species + '</option>');
    }


    $('#'+ids.positionInput).on("keyup", function() {
        that.positionKeyUp();
    });
    $('#'+ids.speciesSelect).on("change", function() {
        that.positionKeyUp();
    });
}

MSAViewer.prototype.loadDivsInViewport = function(reset) {

    var ids  = this.ids;
    loadedPositions = this.loadedPositions;
    processedSequences = this.msa.processedSequences;
    variationNotes  = this.variationNotes;
    ptmNotes = this.ptmNotes;
    if(reset == true){
        for(var i in loadedPositions){
            loadedPositions[i] = false;
        }
        $('#'+ids.sequence).find('section div').remove();
    }  
    var viewportOffset = document.getElementById(ids.sequence).getBoundingClientRect();

    var aminoacid_index = 0;
   
    startX = parseInt((Math.abs(viewportOffset.left) - document.getElementById(ids.nameContainer).clientWidth)/20 - window.innerWidth/40) ;
    if(startX < 0){
      startX = 0;
    }
    endX = parseInt(startX+(document.getElementById(ids.nameContainer).clientWidth)/20 + 3*window.innerWidth/40 + 20) ;
    
    if(processedSequences[0].length <= endX) {
      endX = processedSequences[0].length-1;
    }

    
    for(j = 0; j < processedSequences.length; j++){
      seq1 = processedSequences[j];
       var documentFragment = document.createDocumentFragment();
      for (i = startX; i < endX; i++) {

        if(loadedPositions[i] && seq1.length < 5000){
            continue;
        }
        let aaBox = document.createElement("div");
        //reading protein sequence letter by letter
        var aaLetter = seq1.charAt(i);
        //creating amino acid boxes
        
        if(aaLetter != '-'){
            aminoacid_index+= 1;
            
            aaBox.className = "i-"+i;  
        }
        if(aaLetter == '-'){
          continue;
        }

        if(j in variationNotes && viewportToAANumber[j][i] != -1 && viewportToAANumber[j][i] in variationNotes[j]){
           aaBox.className += " specialAa";
           aaBox.setAttribute('data-sid', j);
        }

        if(j == 0 && viewportToAANumber[j][i] != -1 && viewportToAANumber[j][i] in ptmNotes){
           aaBox.className += " ptm";
           aaBox.setAttribute('data-sid', j);
        }

        aaBox.innerHTML = aaLetter;
        aaBox.style.cssText  = 'left:'+(i*20)+'px;';
        //giving the proper color to each amino acid
        if (aaLetter.includes("M") === true || aaLetter.includes("C") === true) {aaBox.style.cssText += "background-color:#a5a513"};
        if (aaLetter.includes("A") === true) {aaBox.style.cssText += "background-color:#C8C8C8"};
        if (aaLetter.includes("L") === true || aaLetter.includes("V") === true || aaLetter.includes("I") === true) {aaBox.style.cssText += "background-color:#0F820F"};
        if (aaLetter.includes("D") === true || aaLetter.includes("E") === true) {aaBox.style.cssText += "background-color:#E60A0A"};
        if (aaLetter.includes("K") === true || aaLetter.includes("R") === true) {aaBox.style.cssText += "background-color:#145AFF"};
        if (aaLetter.includes("S") === true || aaLetter.includes("T") === true) {aaBox.style.cssText += "background-color:#FA9600"};
        if (aaLetter.includes("F") === true || aaLetter.includes("Y") === true) {aaBox.style.cssText += "background-color:#3232AA"};
        if (aaLetter.includes("N") === true || aaLetter.includes("Q") === true) {aaBox.style.cssText += "background-color:#00DCDC"};
        if (aaLetter.includes("G") === true) {aaBox.style.cssText += "background: #EBEBEB; color: #777;"};
        if (aaLetter.includes("W") === true) {aaBox.style.cssText += "background-color:#B45AB4"};
        if (aaLetter.includes("-") === true) {aaBox.style.cssText += "background-color:#333"};
        if (aaLetter.includes("H") === true) {aaBox.style.cssText += "background-color:#8282D2"};
        if (aaLetter.includes("P") === true) {aaBox.style.cssText += "background-color:#DC9682"};
        documentFragment.appendChild(aaBox);
        aaBox = null;
    }
        let element = document.getElementById(this.id).getElementsByClassName('protein')[j];
        if(seq1.length >= 5000){
          element.innerHTML = '';  
        }
        element.appendChild(documentFragment);
        documentFragment.innerHTML='';
    }
    
    for(i = 0; i < seq1.length; i++){
      if(i >= startX && i < endX)
        loadedPositions[i] = true;
      else if(seq1.length >= 5000)
        loadedPositions[i] = false;
    }  

}

MSAViewer.prototype.addDomains = function(domains) {
    var ids = this.ids;
    for (var key in domains){
        domain_id = domains[key]["domain_id"];
        domain_name = domains[key]["domain_id"];
        domain_external_link = domains[key]["domain_external_link"];
        domain_start_point = domains[key]["domain_start_point"];
        domain_end_point = domains[key]["domain_end_point"];

        domain_template = `
        <a href="${domain_external_link}" target="_blank">
            <div class="domain" data-start-point="${domain_start_point}" data-end-point="${domain_end_point}">
                <div class="domain_start_point">${domain_start_point}</div>
                <p>${domain_name} (${domain_start_point} - ${domain_end_point})</p>
                <div class="domain_end_point">${domain_end_point}</div>
            </div>
        </a>
        `;

        $('#' + ids.proteinLength).append(domain_template);
    };
}

MSAViewer.prototype.addVariation = function(protein, aminoacid, variationNote, source) {
    let aaNumber = aminoacid - 1; // the aacids start from 0

    notesByProtein = this.variationNotes[protein];
    if (notesByProtein == undefined) {
        notesByProtein = [];
    }

    if (notesByProtein[aaNumber] == undefined) {
        notesByProtein[aaNumber] = {};
        notesByProtein[aaNumber][source] = "";
    } else if (notesByProtein[aaNumber][source] == undefined) {
        notesByProtein[aaNumber][source] = "";
    }

    notesByProtein[aaNumber][source] += "<br>" + variationNote;
    this.variationNotes[protein] = notesByProtein

    if (source == "PTM") {
        this.ptmNotes[aaNumber] += aminoacid + 1;
    }
}

MSAViewer.prototype.scrollIfNeeded = function(element, container) {

    const halfClientWidth = container.clientWidth / 2;
    if (element.offsetLeft < container.scrollLeft-200) {
      container.scrollLeft = element.offsetLeft - halfClientWidth;
    } else {
      const offsetRight = element.offsetLeft + element.offsetWidth;
      const scrollRight = container.scrollLeft + container.offsetWidth;
      if (offsetRight+200 > scrollRight) {
        container.scrollLeft = offsetRight - halfClientWidth;
      }
    }
}

