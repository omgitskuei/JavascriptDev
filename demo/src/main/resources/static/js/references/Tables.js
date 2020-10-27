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
 * <table id="staticTable">
 *     <thead>
 *         <tr>
 *             <th id="staticTable-0-0">Code</th>
 *             <th id="staticTable-0-1">Name</th>
 *             <th id="staticTable-0-2">Price</th>
 *             <th id="staticTable-0-3">Stock</th>
 *         </tr>
 *     </thead>
 *     <tbody>
 *         <tr>
 *             <td id="staticTable-1-0">A1</td>
 *             <td id="staticTable-1-1">Bananas</td>
 *             <td id="staticTable-1-2">$10</td>
 *             <td id="staticTable-1-3">210</td>
 *         </tr>
 *     </tbody>
 * </table>
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
    newTable.id = tableID;
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    // add th to thead
    let tr = document.createElement("tr");
    for (let index = 0; index < headersArray.length; index++) {
        let th = document.createElement("th");
        th.innerHTML = headersArray[index];
        cellV = index;
        th.id = `${tableID}-${cellX}-${cellV}`;
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    newTable.appendChild(thead);
    // add tr rows based on headersArray.length
    cellX = 1;
    cellV = 0;
    if (cellsArrayIsDelimitedByColumn == true) {
        for (let index = 0; index < headersArray.length; index++) {
            tr = document.createElement("tr");
            // add td cells based on cellsArray[i].length
            for (let indexCell = 0; indexCell < headersArray.length; indexCell++) {
                let td = document.createElement("td");
                td.innerHTML = cellsArray[indexCell][index];
                td.id = `${tableID}-${cellX}-${cellV}`;
                cellV++;
                tr.appendChild(td);
            }
            cellX++;
            tbody.appendChild(tr);
            cellV = 0;
        }
    } else {
        for (let index = 0; index < headersArray.length; index++) {
            tr = document.createElement("tr");
            // add td cells based on cellsArray[i].length
            for (let indexCell = 0; indexCell < headersArray.length; indexCell++) {
                let td = document.createElement("td");
                td.innerHTML = cellsArray[index][indexCell];
                td.id = `${tableID}-${cellX}-${cellV}`;
                cellV++;
                tr.appendChild(td);
            }
            cellX++;
            tbody.appendChild(tr);
            cellV = 0;
        }
    }
    newTable.appendChild(tbody);
    targetDiv.appendChild(newTable);
    console.log(debugString);
}