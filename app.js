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
        if(results[i] === "V") {
            result.setAttribute("class", "table-success");
        }
        if(results[i] === "E") {
            result.setAttribute("class", "table-warning");
        }
        if(results[i] === "D") {
            result.setAttribute("class", "table-danger");
        }
        if(results[i] === "") {
            result.setAttribute("class", "table-light");
        }
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
    // // Adding "Adversário" and "Resultado" to the header
    footerColumns.forEach((column) => {
        let footerColumn = document.createElement("th");
        footerColumn.innerText = column;
        footerRow.appendChild(footerColumn);
    });

    // // Adding players to the header
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

// Create chart
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
      datasets: [{ 
          data: [3,3,3,6,6,9,9,9,12,13,14,14,17,20,20,21,22,22,25],
          label: "Marquinho",
          borderColor: "#3e95cd",
          fill: false,
          lineTension: 0, // Set lineTension to 0 for no interpolation
        }, { 
          data: [3,3,3],
          label: "Realizado",
          borderColor: "#8e5ea2",
          borderWidth: 8,
          fill: false,
          lineTension: 0, // Set lineTension to 0 for no interpolation
        }
      ]
    },
    options: {
        title: {
            display: false,
            text: 'Pontos Marquinho'
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: 'black', // Font color of x-axis labels
                    fontSize: 14, // Font size of x-axis labels
                    fontFamily: 'Arial', // Font family of x-axis labels
                    label: 'Rodada'
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: 'black', // Font color of y-axis labels
                    fontSize: 14, // Font size of y-axis labels
                    fontFamily: 'Arial', // Font family of y-axis labels
                    label: 'Pontos'
                }
            }]
        }
        }
  });