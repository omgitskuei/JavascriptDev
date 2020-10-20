/**
 * 
 * @param {} targetSelectID 
 */


/**
 * getAllOptions() - Returns Array of All Options in Select element
 */
function getAllOptions(targetSelectID) {
    let arrayOfOptions = [];
    let debugString = "getAllOptions(" + targetSelectID + ") returning: \n\r[";
    let arrayCounter = 0;
    Array.from(document.getElementById(targetSelectID).options).forEach(
        function (eachOption) {
            let isOptionSelected = eachOption.selected;
            let optionText = eachOption.text;
            let optionValue = eachOption.value;
            arrayOfOptions.push({ selected: isOptionSelected, text: optionText, value: optionValue });
            if (arrayCounter > 0) {
                debugString = debugString.concat(", \n\r ");
            }
            debugString = debugString.concat(arrayCounter + " : {selected : " + isOptionSelected + ", text : " + optionText + ", value : " + optionValue + "}");
            arrayCounter = arrayCounter + 1;
        }
    )
    debugString = debugString.concat("]");
    console.log(debugString);
    return arrayOfOptions;
}

/**
 * getSelectedOption() - Returns the selected Option in a Select element
 */
function getSelectedOption(targetSelectID) {
    let debugString = "getSelectedOption(" + targetSelectID + ") returning: \n\r{";
    let thisSelect = document.getElementById(targetSelectID);
    let selectedOption = thisSelect.options[thisSelect.selectedIndex];
    if (selectedOption != undefined) {
        let text = thisSelect.options[thisSelect.selectedIndex].text;
        let value = thisSelect.options[thisSelect.selectedIndex].value;
        selectedOption = { text: text, value: value };
        debugString = debugString.concat("text : " + text + ", value : " + value);
    }
    debugString = debugString.concat("}");
    console.log(debugString);
    return selectedOption;
}

/**
 * getAllSelectedOptions() - Returns ALL selected Options
 * This requires a multi-select to work
 */
function getAllSelectedOptions(targetSelectID) {
    let arrayOfOptions = [];
    let debugString = "getAllSelectedOptions(" + targetSelectID + ") returning: \n\r[";
    let arrayCounter = 0;
    Array.from(document.getElementById(targetSelectID).options).forEach(            // document.getElementById(targetSelectID).options is a HTMLCollection object
        function (eachOption) {
            let isOptionSelected = eachOption.selected;
            let optionText = eachOption.text;
            let optionValue = eachOption.value;
            if (isOptionSelected == true) {
                arrayOfOptions.push({ selected: isOptionSelected, text: optionText, value: optionValue });
                if (arrayCounter > 0) {
                    debugString = debugString.concat(", \n\r ");
                }
                debugString = debugString.concat(arrayCounter + " : {selected : " + isOptionSelected + ", text : " + optionText + ", value : " + optionValue + "}");
                arrayCounter = arrayCounter + 1;
            }
        }
    )
    debugString = debugString.concat("]");
    console.log(debugString);
    return arrayOfOptions;
}

/**
 * getOptionValueByOptionText() - Returns option value given param option text
 */
function getOptionValuesByOptionText(targetSelectID, targetOptionText) {
    let debugString = "getOptionValuesByOptionText(" + targetSelectID + ", " + targetOptionText + ") returned: \n\r[";
    let arrayOfOptions = [];
    let targetSelect = document.getElementById(targetSelectID);
    let arrayCounter = 0;
    Array.from(targetSelect.options).forEach(
        function (eachOption) {
            let isOptionSelected = eachOption.selected;
            let optionText = eachOption.text;
            let optionValue = eachOption.value;

            if (targetOptionText == optionText) {
                arrayOfOptions.push({ selected: isOptionSelected, text: optionText, value: optionValue });
                if (arrayCounter > 0) {
                    debugString = debugString.concat(", \n\r ");
                }
                debugString = debugString.concat(arrayCounter + " : {selected : " + isOptionSelected + ", text : " + optionText + ", value : " + optionValue + "}");
                arrayCounter = arrayCounter + 1;
            }
        }
    )
    debugString = debugString.concat("]");
    console.log(debugString);
    return arrayOfOptions;
}




/**
 * setSelectSize() - Update Select element's size attribute'
 */
function setSelectSize(targetSelectID, size) {
    let debugString = "setSelectSize(" + targetSelectID + ", " + size + ") updated element's attribute size=" + size;
    document.getElementById(targetSelectID).size = size;
    console.log(debugString);
}




/**
 * addOption - Add a single option with param text and value to a Select element
 */
function addOption(targetSelectID, optionText, optionValue) {
    let debugString = "addOption(" + targetSelectID + ", " + optionText + ", " + optionValue + ") added: \n\r";
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
}

/**
 * addArrayOfOptionsToSelect - Add an array of Options to a Select element
 */
function addArrayOfOptionsToSelect(targetSelectID, arrayOfOptions) {
    let debugString = "addArrayOfOptionsToSelect(" + targetSelectID + ", " + arrayOfOptions + ") added: \n\r[";
    let targetSelect = document.getElementById(targetSelectID);
    for (let i = 0; i < arrayOfOptions.length; i++) {
        let text = arrayOfOptions[i].text;
        let value = arrayOfOptions[i].value;
        let newOption = document.createElement('option');
        // create text node to add to option element (newOption)
        newOption.appendChild(document.createTextNode(text));
        // set value property of newOption
        newOption.value = value;
        // add newOption to end of select box (targetSelect)
        targetSelect.appendChild(newOption);
        debugString = debugString.concat("{selected : false, text : " + text + ", value : " + value + "}");
    }
    debugString = debugString.concat("]");
    console.log(debugString);
}




/**
 * removeAllOptionsByValue() - Remove all options with matching values as param
 */
function removeAllOptionsByValue(targetSelectID, optionValue) {
    let debugString = "removeAllOptionsByValue(" + targetSelectID + ", " + optionValue + ") removed:  \n\r[";
    let targetSelect = document.getElementById(targetSelectID);
    let arrayOfOptions = Array.from(targetSelect.options);
    let arrayOfIndicesOfMatchingOptions = [];
    for (let i = 0; i < arrayOfOptions.length; i++) {
        let currOption = arrayOfOptions[i];
        if (currOption.value == optionValue) {
            debugString = debugString.concat(i + " : {selected : false, text : " + currOption.text + ", value : " + currOption.value + "},\n\r ");
        }
        arrayOfIndicesOfMatchingOptions.push(i);
    }
    // Remove the ",\n\r " from the last removed option
    debugString = debugString.substring(0, debugString.length - 4);
    debugString = debugString.concat("]");
    console.log(debugString);
    // Remove matching options from the end, not beginning, because .remove() starting from beginning causes later options to slide forward, you'd have to adjust for shrinking array size starting from beginning.
    for (let i = (arrayOfOptions.length - 1); i >= 0; i--) {
        let currOption = arrayOfOptions[i];
        if (currOption.value == optionValue) {
            document.getElementById(targetSelectID).remove(i);
        }
    }
}

/**
 * removeAllOptionsByValue() - Remove all options with matching text as param
 */
function removeAllOptionsByText(targetSelectID, optionText) {
    let debugString = "removeAllOptionsByText(" + targetSelectID + ", " + optionText + ") removed:  \n\r[";
    let targetSelect = document.getElementById(targetSelectID);
    let arrayOfOptions = Array.from(targetSelect.options);
    let arrayOfIndicesOfMatchingOptions = [];
    for (let i = 0; i < arrayOfOptions.length; i++) {
        let currOption = arrayOfOptions[i];
        if (currOption.text == optionText) {
            debugString = debugString.concat(i + " : {selected : false, text : " + currOption.text + ", value : " + currOption.value + "},\n\r ");
        }
        arrayOfIndicesOfMatchingOptions.push(i);
    }
    // Remove the ",\n\r " from the last removed option
    debugString = debugString.substring(0, debugString.length - 4);
    debugString = debugString.concat("]");
    console.log(debugString);
    // Remove matching options from the end, not beginning, because .remove() starting from beginning causes later options to slide forward, you'd have to adjust for shrinking array size starting from beginning.
    for (let i = (arrayOfOptions.length - 1); i >= 0; i--) {
        let currOption = arrayOfOptions[i];
        if (currOption.text == optionText) {
            document.getElementById(targetSelectID).remove(i);
        }
    }
}

/**
 * removeAllOptions() - Remove all options in a Select element
 */
function removeAllOptions(targetSelectID) {
    let targetSelect = document.getElementById(targetSelectID);
    let debugString = "removeAllOptions() removed all " + targetSelect.options.length + " options."
    let i, L = targetSelect.options.length - 1;
    for (i = L; i >= 0; i--) {
        targetSelect.remove(i);
    }
    console.log(debugString);
}

/**
 * removeDuplicateOptions() - Removes options with duplicate values and text
 */
function removeDuplicateOptions(targetSelectID) {
    let debugString = `removeDuplciateOptions(${targetSelectID}) removed: \n\r[`;
    let targetSelect = document.getElementById(targetSelectID);
    let arrayOfOptions = Array.from(targetSelect.options);
    let arrayOfUniqueOptions = [];
    // loop through each option
    for (let index = 0; index < arrayOfOptions.length; index++) {
        let eachOption = arrayOfOptions[index];
        let eachValue = eachOption.value;
        let eachText = eachOption.text;
        let duplicate = false;

        // check if each is unique;
        for (let indexUnique = 0; indexUnique < arrayOfUniqueOptions.length; indexUnique++) {
            if (arrayOfUniqueOptions[indexUnique].value == eachValue && arrayOfUniqueOptions[indexUnique].text == eachText) {
                duplicate = true;
                debugString.concat("{selected=false, value=" + eachValue + ", text=" + eachText + "},\n\r ");
                console.log("asdasda");
            }
        }
        if (duplicate === false) {
            arrayOfUniqueOptions.push(eachOption);
        }
    }
    removeAllOptions(targetSelectID);
    addArrayOfOptionsToSelect(targetSelectID, arrayOfUniqueOptions);
    debugString = debugString.substring(0, debugString.length - 1);
    debugString.concat("]");
    console.log(debugString);
    return arrayOfUniqueOptions;
} 
