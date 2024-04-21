// Number of matches and players. This will not change
nMatches = 19;
nPlayers = 14;

// Matches. This will not change
matches = [
    "Grêmio (C)", 
    "RB Bragantino (F)", 
    "Fluminense (F)", 
    "Criciúma (C)", 
    "Athletico-PR (F)",
    "Vitória (C)",
    "Flamengo (C)",
    "Palmeiras (F)",
    "Cruzeiro (C)",
    "Juventude (F)",
    "São Paulo (C)",
    "Bahia (F)",
    "Botafogo (C)",
    "Fortaleza (C)",
    "Internacional (F)",
    "Corinthians (C)",
    "Atlético-GO (F)",
    "Atlético-MG (F)",
    "Cuiabá (C)"
];

// Players and guesses. This will not change
players = ["March", "Manu", "Fifi", "Guerra", "Finho", "Saymon", "Markim", "Testa", "Poliça", "Saúde", "Allan", "Youssef", "Geninho", "Robô"];
guesses = [["V", "E", "E", "V", "D", "E", "D", "E", "V", "E", "E", "E", "V", "E", "D", "E", "E", "E", "V"], 
            ["E", "D", "V", "V", "D", "V", "D", "D", "E", "E", "V", "D", "E", "V", "D", "E", "E", "D", "V"],
            ["V", "D", "V", "V", "D", "V", "E", "D", "V", "E", "E", "D", "V", "V", "D", "E", "E", "D", "V"],
            ["E", "V", "V", "V", "D", "V", "E", "D", "E", "E", "E", "D", "V", "V", "D", "E", "V", "E", "V"],
            ["E", "D", "E", "V", "D", "V", "D", "D", "V", "E", "E", "D", "V", "V", "D", "D", "E", "D", "V"],
            ["V", "D", "E", "V", "D", "V", "D", "D", "V", "E", "V", "D", "V", "V", "D", "D", "E", "D", "V"],
            ["V", "D", "E", "V", "D", "V", "E", "D", "E", "V", "E", "D", "V", "V", "D", "V", "E", "D", "V"],
            ["V", "D", "V", "V", "D", "E", "D", "D", "E", "E", "E", "D", "V", "V", "D", "E", "V", "D", "V"],
            ["E", "D", "V", "V", "D", "V", "D", "D", "E", "V", "E", "D", "E", "V", "D", "D", "V", "D", "V"],
            ["V", "V", "E", "V", "D", "V", "D", "D", "E", "D", "E", "D", "V", "E", "D", "E", "E", "D", "V"],
            ["V", "D", "V", "V", "V", "V", "V", "D", "V", "V", "V", "E", "E", "V", "E", "D", "E", "D", "V"],
            ["V", "E", "V", "V", "D", "V", "E", "D", "V", "D", "V", "D", "V", "E", "D", "E", "V", "V", "V"],
            ["V", "E", "V", "V", "E", "V", "E", "E", "V", "V", "V", "V", "V", "V", "D", "E", "D", "E", "V"],
            ["V", "E", "V", "V", "D", "V", "D", "D", "V", "V", "D", "V", "V", "E", "E", "D", "V", "D", "V"]];


// Counting player points
let playersPoints = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
for(let i = 0; i < nPlayers; i++) {
    for(let j = 0; j < nMatches; j++) {
        if(guesses[i][j] === "V") {
            playersPoints[i] = (parseInt(playersPoints[i]) + 3).toString();
        } else if(guesses[i][j] === "E") {
            playersPoints[i] = (parseInt(playersPoints[i]) + 1).toString();
        }
    }
}
console.log(playersPoints);

// Match results: update during the championship
results = ["V", "D", "D", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

// Actual points: update during the championship
actualPoints = "0";
for(let j = 0; j < nMatches; j++) {
    if(results[j] === "V") {
        actualPoints = (parseInt(actualPoints) + 3).toString();
    } else if(results[j] === "E") {
        actualPoints = (parseInt(actualPoints) + 1).toString();
    }
}
