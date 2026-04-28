// Anime Isekai Game System

// Start Game Function
function startGame() {
    let worldDiv = document.getElementById("world");
    worldDiv.innerHTML = `
        <h2>🌍 Πεδιάδα των Ηρώων</h2>
        <p>Ήρωας: ${hero.name}</p>
        <p>Level: ${hero.level}</p>
        <p>HP: ${hero.hp}</p>
        <button onclick=\