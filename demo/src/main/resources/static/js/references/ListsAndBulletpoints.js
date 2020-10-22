/**
 * Lists and Bulletpoints
 * Definitions and expected HTML results
 * - Unordered aka. Bulletpoint Lists
 * <ul>
 *     <li> Bulletpoint </li>
 *     <li> Bulletpoint </li>
 *     <li> Bulletpoint </li>
 *     <li> Bulletpoint </li>
 * </ul>
 *
 * - Ordered Lists (Items will be numbered by default)
 * <ol>
 *     <li> Item1 </li>    // Will Look like 1. Item1
 *     <li> Item2 </li>
 *     <li> Item3 </li>
 *     <li> Item4 </li>
 * </ol>
 *
 * -Description Lists
 * <dl>
 *     <dt>Coffee</dt>
 *     <dd> - A caffeinated bitter black drink. </dd>
 *     <dt>Milk</dt>
 *     <dd> - A white cold drink rich in lactose and calcium. </dd>
 * </dl>
 * */
class List {
    constructor(paramID = "", paramType = "ul", paramArrayOfItems = {}) {
        this.id = paramID;
        if (paramType == "ul" || paramType == "ol" || paramType == "dl") {
            this.type = paramType;
        }
        if (paramArrayOfItems.length > 0) {
            this.items = paramArrayOfItems;
        }
    }
    toString() {
        return `{type=${paramType}, items=${paramArrayOfItems}}`;
    }
}
class ListItem {
    constructor(paramValue = "", paramText = "") {
        // Note: if type of List is not "ol", value attr is ignored by html
        this.value = paramValue;
        this.text = paramText;
    }
    toString() {
        return `{value=${this.value}, ${this.text}}`;
    }
}

/**
 * getAllListItems() - Returns Array of All List Items in a List element
 */
function getAllListItems(targetListID) {
    let debugString = `getAllListItems(${targetListID}) returned `;
    let arrayOfListItems = [];
    let targetList = document.getElementById(targetListID);
    let allListItems = targetList.getElementsByTagName("li");
    for (let i = 0; i < allListItems.length; i++) {
        arrayOfListItems.push(new ListItem(allListItems[i].value, allListItems[i].innerText));
    }
    debugString = debugString.concat(arrayOfListItems);
    console.log(debugString);
    return arrayOfListItems;
}

/** 
 * addList() - Add new list to an element (div, p, span, etc)
*/
function addList(newListID, targetElementID, listType) {
    let debugString = `addList(${targetElementID}, ${listType}) `;
    let uniqueOrEmpty = false;
    let targetElement = document.getElementById(targetElementID);
    let newList = document.createElement(listType);
    // make sure ID is unique before appending
    if (document.getElementById(newListID) == null) {
        uniqueOrEmpty = true;
    };
    if (uniqueOrEmpty == true) {
        newList.id = newListID;
        targetElement.appendChild(newList);
        debugString = debugString.concat(`added: <${listType} id=${newListID}> </${listType}> child`);
    } else {
        debugString = debugString.concat("error: id not empty or unique.");
    }
    console.log(debugString);
}

/**
 * addListItem() - Add new item to a list
 */
function addListItem(targetListID, listItemValue, listItemText) {
    let debugString = `addListItem(${targetListID}, ${listItemValue}, ${listItemText}) added: `;
    let targetList = document.getElementById(targetListID);
    let listItemObj = new ListItem(listItemValue, listItemText);
    let newListItem = document.createElement("li");
    newListItem.value = listItemObj.value;
    newListItem.appendChild(document.createTextNode(listItemObj.text));
    targetList.appendChild(newListItem);
    debugString = debugString.concat(`<li value=${listItemValue}> ${listItemText} </li> child`);
    console.log(debugString);
}

/**
 * addArrayOfStringsAsListItemsToList() - Add an array of items to a list
 * Array contains ListItems
 */
function addArrayOfStringsAsListItemsToList(targetListID, arrayOfListItems) {
    let debugString = `addArrayOfStringsAsListItemsToList(${targetListID}, ${arrayOfListItems}) added `;
    let count = 0;
    let targetList = document.getElementById(targetListID);
    debugString = debugString.concat(`${count} list items.`);
    for (let i = 0; i < arrayOfListItems.length; i++) {
        count = count + 1;
        let newList = document.createElement("li");
        newList.setAttribute("value", "");
        newList.innerHTML = arrayOfListItems[i];
        targetList.appendChild(newList);
    }
    console.log(debugString);
}

/**
 * removeListItemByText() - Remove a item from a list by text node
 */
function removeListItemByText(targetListID, targetText) {
    let debugString = `removeListItemByText(${targetListID}, ${targetText}) removed `;
    let count = 0;
    let targetList = document.getElementById(targetListID);
    let array = Array.from(targetList.getElementsByTagName("li"))
    for (let index = 0; index < array.length; index++) {
        if (array[index].innerHTML == targetText) {
            count = count + 1;
            targetList.removeChild(array[index]);
        }
    }
    debugString = debugString.concat(`${count} list items`);
    console.log(debugString);
}

/**
 * removeAllListItems() - Remove all items from a list
 */
function removeAllListItems(targetListID) {
    let debugString = `removeAllListItems(${targetListID}) removed `;
    let count = 0;
    let targetList = document.getElementById(targetListID);
    let arrayOfListItems = Array.from(targetList.getElementsByTagName("li"));
    arrayOfListItems.forEach(function (each) {
        targetList.removeChild(each);
        count = count + 1;
    });
    debugString = debugString.concat(count + " items");
    console.log(debugString)
}