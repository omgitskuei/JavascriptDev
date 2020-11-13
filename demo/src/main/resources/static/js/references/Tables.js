/**
 * getAllOptions() - Returns Array of All Options in Select element
 * param targetID
 * param newTableID
 * param headersArray
 * param cellsArray
 * param cellsArrayIsDelimitedByColumn
 * 
 * automatically generate table from data sets (arrays)
 * 
 * eg. 
 * Params:
 *     newTableID = staticTable;
 *     headersArray = ["Code", "Name", "Price", "Stock"];
 *     cellsArray = [["A1", "Bananas", "$10", "210"]];
 *     cellsArrayIsDelimitedByColumn = false;
 * Generated result:
<table class="table-style normal-table" id="staticTable">
    <thead>
        <tr id="staticTable-Row0">
            <th id="staticTable-Row0-Col0">Code</th>
            <th id="staticTable-Row0-Col1">Name</th>
            <th id="staticTable-Row0-Col2">Price</th>
            <th id="staticTable-Row0-Col3">Stock</th>
        </tr>
    </thead>
    <tbody>
        <tr id="staticTable-Row1">
            <td id="staticTable-Row1-Col0">A1</td>
            <td id="staticTable-Row1-Col1">Bananas</td>
            <td id="staticTable-Row1-Col2">$10</td>
            <td id="staticTable-Row1-Col3">210</td>
            <td>
                <button>Delete Row</button>
            </td>
            <td>
                <button>Delete me</button>
            </td>
        </tr>
    </tbody>
</table>
 */
function createNewTable(
    targetID,
    newTableID,
    headersArray,
    cellsArray,
    cellsArrayIsDelimitedByColumn) {
    let debugString = `createNewTable(${targetID}, ${newTableID}, ${headersArray}, ${cellsArray}, ${cellsArrayIsDelimitedByColumn})`;
    let cellX = 0;
    let cellV = 0;
    // where will the new table be appended into?
    let targetDiv = document.getElementById(targetID);
    // create table, thead, and tbody
    let newTable = document.createElement("table");
    newTable.classList.add("table-style");
    newTable.classList.add("normal-table");
    newTable.id = newTableID;
    // thead
    let thead = document.createElement("thead");
    // create tr
    let tr = document.createElement("tr");
    tr.id = `${newTableID}-Row0`;
    // add th cells to tr
    for (let index = 0; index < headersArray.length; index++) {
        let th = document.createElement("th");
        th.innerHTML = headersArray[index];
        cellV = index;
        th.id = `${newTableID}-Row${cellX}-Col${cellV}`;
        tr.appendChild(th);
    }
    // add tr to thead
    thead.appendChild(tr);
    newTable.appendChild(thead);

    // tbody
    let tbody = document.createElement("tbody");
    cellX = 1;
    cellV = 0;
    if (cellsArrayIsDelimitedByColumn == true) {
        // If data is grouped by ROWS
        for (let index = 0; index < headersArray.length; index++) {
            // create tr
            tr = document.createElement("tr");
            let rowCount = tbody.childElementCount + 1;
            tr.id = `${newTableID}-Row${rowCount}`;
            // add td cells to tr
            for (let indexCell = 0; indexCell < headersArray.length; indexCell++) {
                let td = document.createElement("td");
                td.innerHTML = cellsArray[indexCell][index];
                td.id = `${newTableID}-Row${cellX}-Col${cellV}`;
                cellV++;
                tr.appendChild(td);
            }
            cellX++;
            // add tr to tbody
            tbody.appendChild(tr);
            cellV = 0;
        }
    } else {
        // If data is grouped by COLUMNS not ROWS
        for (let index = 0; index < headersArray.length; index++) {
            // create tr
            tr = document.createElement("tr");
            let rowCount = tbody.childElementCount + 1;
            tr.id = `${newTableID}-Row${rowCount}`;
            // add td cells to tr
            for (let indexCell = 0; indexCell < headersArray.length; indexCell++) {
                let td = document.createElement("td");
                td.innerHTML = cellsArray[index][indexCell];
                td.id = `${newTableID}-Row${cellX}-Col${cellV}`;
                cellV++;
                tr.appendChild(td);
            }
            cellX++;
            // add tr
            tbody.appendChild(tr);
            cellV = 0;
        }
    }
    newTable.appendChild(tbody);
    targetDiv.appendChild(newTable);
    console.log(debugString);
}

// Add a column of buttons to the end of each tr
function addRowsDeleteBtns(tableID, btnText) {
    let debugString = `addRowsDeleteBtns(${tableID}, ${btnText})`;
    let table = document.getElementById(tableID);
    let tableRows = table.getElementsByTagName("tr");
    // Add btn to each row
    for (let i = 1; i < tableRows.length; i++) { // start from 1, not 0, to skip adding btn to header
        // Create new td
        let newTd = document.createElement("td");
        // Create new btn
        let button = document.createElement("button");
        button.innerHTML = btnText;
        button.addEventListener("click", deleteRow);
        // Add btn to td
        newTd.appendChild(button);
        let eachRow = tableRows[i];
        eachRow.appendChild(newTd);
    }
    function deleteRow() {
        console.log("clicked button \"" + this.innerHTML + "\", running function deleteRow()");
        this.parentNode.parentNode.remove();
    }
    console.log(debugString);
}

// function tableDeleteRow(element, tableID) {
//     let table = document.getElementById(tableID);
//     let tableBody = table.getElementsByTagName("tbody");
//     let tableRows = tableBody.getElementsByTagName("tr");
//     tableRows.remove();


//     console.log("clicked tableDeleteRow(element)");
//     var targetRow = $(this).closest("tr");
//     targetRow.remove();
//     function deleteRow() {
//         console.log("clicked button \"" + this.innerHTML + "\", running function deleteRow()");
//         this.parentNode.parentNode.parentNode.remove();
//     }
// }