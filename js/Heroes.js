// Teams Data
let teams = [
    {
        name: "Fire Team",
        element: "Fire",
        bonus: "+10 Attack"
    },
    {
        name: "Water Team",
        element: "Water",
        bonus: "+10 Defense"
    },
    {
        name: "Earth Team",
        element: "Earth",
        bonus: "+15 HP"
    },
    {
        name: "Wind Team",
        element: "Wind",
        bonus: "+10 Speed"
    }
];

// Show Teams
function showTeams() {
    let worldDiv = document.getElementById("world");
    let html = `<h2>🔥 Choose Your Team</h2>`;
    
    teams.forEach(team => {
        html += `<button onclick="joinTeam('${team.name}')">${team.name}</button>`;
    });
    
    worldDiv.innerHTML = html;
}