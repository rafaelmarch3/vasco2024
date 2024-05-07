// Function to fetch and display results
async function fetchAndDisplayResults() {
    const response = await fetch('http://www.google.com/search?q=ultima+partida+vasco', {
        mode: 'no-cors'
      });
    const html = await response.text();
    console.log(response)
    console.log(html)
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const results = doc.querySelectorAll('.z1asCe .E9hVAb'); // Adjust this selector based on your source HTML structure
    console.log(results)
    
}

// Call the function when the page loads
window.onload = fetchAndDisplayResults;