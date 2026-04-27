// Anime Isekai Game System

// Player Data
let player = {
    name: "Hero",
    level: 1,
    hp: 100,
    mana: 50,
    team: "None"
};

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

// Show Teams in Console (test)
console.log("Available Teams:");
teams.forEach(team => {
    console.log(team.name + " - " + team.bonus);
});
