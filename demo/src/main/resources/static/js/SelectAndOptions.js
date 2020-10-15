
/**
getAllOptions() - Returns Array of All Options in Select element
 */
function getAllOptions(targetSelectID) {
    console.log("Begin getAllOptions("+targetSelectID+")");
    let arrayOfOptions = [];
    let debugString = "getAllOptions("+targetSelectID+") returning: \n\r[";
    let arrayCounter = 0;
    Array.from(document.getElementById(targetSelectID).options).forEach(            // document.getElementById(targetSelectID).options is a HTMLCollection object
        function(eachOption) {
            let isOptionSelected = eachOption.selected;
            let optionText = eachOption.text;
            let optionValue = eachOption.value;
            arrayOfOptions.push({selected : isOptionSelected, text : optionText, value : optionValue});
            if(arrayCounter > 0) {
                debugString = debugString.concat(", \n\r ");
            }
            debugString = debugString.concat(arrayCounter + " : {selected : " + isOptionSelected + ", text : " + optionText + ", value : " + optionValue + "}");
            arrayCounter = arrayCounter+1;
        }
    )
    debugString = debugString.concat("]");
    console.log(debugString);
    console.log("Finish getAllOptions("+targetSelectID+")");
    return arrayOfOptions;
}

/**
getSelectedOption() - Returns the selected Option in a Select element
 */
function getSelectedOption(targetSelectID) { 
    console.log("Begin getSelectedOption("+targetSelectID+")");
    let debugString = "getSelectedOption("+targetSelectID+") returning: \n\r{";
    let thisSelect = document.getElementById(targetSelectID);
    let selectedOption = thisSelect.options[thisSelect.selectedIndex];
    if(selectedOption != undefined) {
        let text = thisSelect.options[thisSelect.selectedIndex].text;
        let value = thisSelect.options[thisSelect.selectedIndex].value;
        selectedOption = {text : text, value : value};
        debugString = debugString.concat("text : "+text+", value : "+value);
    }
    debugString = debugString.concat("}");
    console.log(debugString);
    console.log("Finish getSelectedOption("+targetSelectID+")");
    return selectedOption;
}

/**
getAllSelectedOptions() - Returns ALL selected Option in a (multi) Select element (also works for non-multi selects)
 */
function getAllSelectedOptions(targetSelectID) {
    console.log("Begin getAllSelectedOptions("+targetSelectID+")");
    let arrayOfOptions = [];
    let debugString = "getAllSelectedOptions("+targetSelectID+") returning: \n\r[";
    let arrayCounter = 0;
    Array.from(document.getElementById(targetSelectID).options).forEach(            // document.getElementById(targetSelectID).options is a HTMLCollection object
        function(eachOption) {
            let isOptionSelected = eachOption.selected;
            let optionText = eachOption.text;
            let optionValue = eachOption.value;
            if(isOptionSelected == true) {
                arrayOfOptions.push({selected : isOptionSelected, text : optionText, value : optionValue});
                debugString = debugString.concat(arrayCounter + " : {selected : " + isOptionSelected + ", text : " + optionText + ", value : " + optionValue + "}");
                if(arrayCounter > 0) {
                    debugString = debugString.concat(", \n\r ");
                }
                arrayCounter = arrayCounter+1;
            }

        }
    )
    debugString = debugString.concat("]");
    console.log(debugString);
    console.log("Finish getAllSelectedOptions("+targetSelectID+")");
    return arrayOfOptions;
}

/**
addOption - Add a single option with param text and value to a Select element
 */
function addOption(targetSelectID, optionText, optionValue) {
    console.log("Begin addOption("+targetSelectID+", "+optionText+", "+optionValue+")");
    let debugString = "addOption("+targetSelectID+", "+optionText+", "+optionValue+") added: ";
    let targetSelect = document.getElementById(targetSelectID);
    // create new option element
    let newOption = document.createElement('option');
    // create text node to add to option element (newOption)
    newOption.appendChild(document.createTextNode(optionText));
    // set value property of newOption
    newOption.value = optionValue; 
    // add newOption to end of select box (targetSelect)
    targetSelect.appendChild(newOption); 
    debugString = debugString.concat("{selected : false, text : " + optionText + ", value : " + optionValue + "}");
    console.log(debugString);
    console.log("Finish addOption("+targetSelectID+", "+optionText+", "+optionValue+")");
}

/**
removeAllOptionsByValue() - Remove all options that have matching values as the param
 */
function removeAllOptionsByValue(targetSelectID, optionValue) {
    console.log("Begin removeAllOptionsByValue("+targetSelectID+", "+optionValue+")");
    let debugString = "removeAllOptionsByValue("+targetSelectID+", "+optionValue+") removed:  \n\r[";
    let targetSelect = document.getElementById(targetSelectID);
    let arrayOfOptions = Array.from(document.getElementById(targetSelectID).options);
    let isOptionSelected = false;
    for(let i = 0; i<arrayOfOptions.length; i++) {
        let currOption = arrayOfOptions[i];
        if(currOption.value == optionValue) {
            debugString = debugString.concat(i + " : {selected : false, text : " + currOption.text + ", value : " + currOption.value + "}");
            if(i != arrayOfOptions.length-1) {
                debugString = debugString.concat(", \n\r ");
            }
        }
    }
    let length = arrayOfOptions.length;
    for(let i = 0; i<length; i++) {
        let currOption = arrayOfOptions[i];
        if(currOption.value == optionValue) {
            document.getElementById(targetSelectID).remove(i);
            i = i-1;
            length = length-1;
        }
    }
    debugString = debugString.concat("]");
    console.log(debugString);
    console.log("Finish removeAllOptionsByValue("+targetSelectID+", "+optionValue+")");
}

/**
removeallOptions() - Remove all options in a Select element
 */
function removeAllOptions(targetSelectID) {
    let targetSelect = document.getElementById(targetSelectID);
    let i, L = targetSelect.options.length - 1;
    for (i = L; i >= 0; i--) {
        targetSelect.remove(i);
    }
}
