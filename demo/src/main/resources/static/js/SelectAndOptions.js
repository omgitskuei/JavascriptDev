// Functions for reading document data
/**
getAllOptions() - Returns Array of All Options in Select
 */
function getAllOptions(targetSelectID) {
    console.log("Begin getallOptions("+targetSelectID+")");
    let arrayOfOptions = [];
    let debugString = "getAllOptions("+targetSelectID+") returning: \n\r[";
    let thisSelectAsHTMLCollectionObj = document.getElementById(targetSelectID).options;
    let arrayCounter = 0;
    Array.from(thisSelectAsHTMLCollectionObj).forEach(
        function(eachOption) {
            let isOptionSelected = eachOption.selected;
            let optionText = eachOption.text;
            let optionValue = eachOption.value;
            arrayOfOptions.push({selected : isOptionSelected, text : optionText, value : optionValue});
            if(arrayCounter > 0) {
                debugString = debugString.concat(", \n\r ");
            }
            debugString = debugString.concat(arrayCounter + " : {selected : " + isOptionSelected + ", text : " + optionText + ", value : " + optionValue + "}")
            arrayCounter = arrayCounter+1;
        }
    )
    debugString = debugString.concat("]");
    console.log(debugString);
    console.log("Finish getallOptions("+targetSelectID+")");
    return arrayOfOptions;
}

function getSelectedOption(targetSelectID) { 
    console.log("Begin getSelectedOption("+targetSelectID+")");
    let debugString = "getSelectedOption("+targetSelectID+") returning: \n\r{";
    let thisSelect = document.getElementById(targetSelectID);
    let text = thisSelect.options[thisSelect.selectedIndex].text;
    let value = thisSelect.options[thisSelect.selectedIndex].value;
    let selectedOption = {text : text, value : value};
    debugString = debugString.concat("text : "+text+", value : "+value+"}");
    console.log(debugString);
    console.log("Finish getSelectedOption("+targetSelectID+")");
    return selectedOption;
}

function getAllSelectedOptions(targetSelectID) {
    console.log("Begin getAllSelectedOptions("+targetSelectID+")");
    let debugString = 
    let selectedOptions = [];
    for (let option of document.getElementById(targetSelectID).options) {
        if (option.selected) {
            selectedOptions.push(option.value);
        }
    }
    console.log("Finish getAllSelectedOptions("+targetSelectID+")");
    return selectedOptions;
}

