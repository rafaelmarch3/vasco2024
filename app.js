// Get table container
let tableElement = document.querySelector("#summary-table");


// Creates Table header
function createHeader() {
    let tableHeader = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let headerColumns = ["Adversário", "Resultado"];
    // Adding "Adversário" and "Resultado" to the header
    headerColumns.forEach((column) => {
        let headerColumn = document.createElement("th");
        headerColumn.innerText = column;
        headerRow.appendChild(headerColumn);
    });

    // Adding players to the header
    players.forEach((column) => {
        let headerColumn = document.createElement("th");
        headerColumn.innerText = column;
        headerRow.appendChild(headerColumn);
    });
    tableHeader.appendChild(headerRow);

    return tableHeader;
}

function createBody() {
    let tableBody = document.createElement("tbody");
    for (let i = 0; i < nMatches; i++) {
    
        // Creates a row
        let row = document.createElement("tr");
    
        // Adding match to the row
        let match = document.createElement("td");
        match.innerText = matches[i];
        row.appendChild(match);
    
        // Adding result to the row
        let result = document.createElement("td");
        result.innerText = results[i];
        result.setAttribute("class", "table-Active");
        row.appendChild(result);
    
        //Adding guesses to the row
        for (let j = 0; j < nPlayers; j++) {
            let cell = document.createElement("td");
            cell.innerText = guesses[j][i];
            if(guesses[j][i] === "V") {
                cell.setAttribute("class", "table-success");
            }
            if(guesses[j][i] === "E") {
                cell.setAttribute("class", "table-warning");
            }
            if(guesses[j][i] === "D") {
                cell.setAttribute("class", "table-danger");
            }
            row.appendChild(cell);
        }
    
        tableBody.appendChild(row);
    }
    return tableBody;
}

function createFooter() {   
    let tableFooter = document.createElement("tfoot");
    let footerRow = document.createElement("tr");
    let footerColumns = ["Total Pontos", actualPoints];
    // Adding "Adversário" and "Resultado" to the header
    footerColumns.forEach((column) => {
        let footerColumn = document.createElement("th");
        footerColumn.innerText = column;
        footerRow.appendChild(footerColumn);
    });

    // Adding players to the header
    playersPoints.forEach((column) => {
        let footerColumn = document.createElement("th");
        footerColumn.innerText = column;
        footerRow.appendChild(footerColumn);
    });
    tableFooter.appendChild(footerRow);

    return tableFooter;
}

let tableHeader = createHeader();
let tableBody = createBody();
let tableFooter = createFooter();
tableElement.appendChild(tableHeader);
tableElement.appendChild(tableBody);
tableElement.appendChild(tableFooter);