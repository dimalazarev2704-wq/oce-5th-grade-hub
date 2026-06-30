// 1. Safety Patrol Roster Data Matrix
const rosters = {
    "Mighty Shrimp": [
        "Oakley Rillo", "Campbell Cabaleiro", "Wyatt Ellison", "Caleb Kanter", 
        "Charlotte Maichle", "Maanvi Hirani", "Eleanor Franks", "Fletcher Hale", 
        "Lexi Desai", "Maahi Hirani", "Liya Desai", "Taylor Dangerfield", 
        "Ellie Dangerfield", "Samanvi Dasari", "Maddie Price", "Elizabeth Spittler", 
        "Grayson Cook", "Sumsaara Karicherla", "Hannah Pozezanac", "Jorge Romero", "Camilla Contreras"
    ],
    "Fearless Sea Turtles": [
        "Prisha Madavaram", "Maya Whipple", "Ishka Patel", "Elise Moore", 
        "Emmet Hornbeck", "Panth Viradiya", "Viraaj Singh", "Luci Fernandez", 
        "Dylan Hartley", "Dylan Casadiego", "Halia Low", "Noah Abdelhalim", 
        "Autumn Smith", "Taylor Yan", "Eliana Schreuder", "Giovanni Cruz-Rivera", 
        "Addalyn Turner", "Gabriella Brown", "Hamzah Abu Jaradeh", "Eloise Riffle", "Arden Boyd"
    ],
    "Dynamic Starfish": [
        "Londyn Ashwood", "Nora Rowny", "Evan Brockett", "Dima Lazarev", 
        "Malak Bsiss", "Reyansh Chalke", "Iverson Ramos", "Olivia Waite", 
        "Eleanor Hauck", "Natalie Cochrane", "Eleni Esquivel", "Gabriela Polhemus", 
        "Carter Clayton", "Daniela Castillo Ramirez", "Andrey Lushnikov", "Ivan Ramos", "Abigail Shi"
    ]
};

// 2. Automated Rotation Schedules Date Targets Mapping
const schedule = [
    { start: "2025-07-06", end: "2025-07-31", team: "Mighty Shrimp", bg: "#e67e22", text: "#fff" },
    { start: "2025-08-03", end: "2025-08-28", team: "Fearless Sea Turtles", bg: "#2ecc71", text: "#fff" },
    { start: "2025-08-31", end: "2025-10-06", team: "Dynamic Starfish", bg: "#f1c40f", text: "#333" },
    { start: "2025-10-07", end: "2025-10-30", team: "Mighty Shrimp", bg: "#e67e22", text: "#fff" },
    { start: "2025-11-02", end: "2025-11-24", team: "Fearless Sea Turtles", bg: "#2ecc71", text: "#fff" },
    { start: "2025-12-01", end: "2025-12-18", team: "Dynamic Starfish", bg: "#f1c40f", text: "#333" }
];

// Tab Switching Mechanism Engine Control
function openTab(evt, tabId) {
    if (evt.currentTarget.classList.contains("active")) return; 

    const tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) {
        content.classList.remove("active-content");
    }
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let btn of tabButtons) {
        btn.classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}

// Full Substring Database Parsing Engines Architecture
function searchStudent() {
    const input = document.getElementById('student-search').value.trim().toLowerCase();
    const resultBox = document.getElementById('search-result');
    
    if (!input) {
        resultBox.innerHTML = "<p style='color:red;'>Please enter a name to search!</p>";
        return;
    }

    let foundTeam = null;
    let trueStudentName = "";

    for (let team in rosters) {
        let match = rosters[team].find(s => {
            const studentLower = s.toLowerCase();
            return studentLower === input || studentLower.startsWith(input + " ") || studentLower.endsWith(" " + input);
        });

        if (match) {
            foundTeam = team;
            trueStudentName = match;
            break;
        }
    }

    if (foundTeam) {
        let teamColor = foundTeam === "Mighty Shrimp" ? "#e67e22" : foundTeam === "Fearless Sea Turtles" ? "#2ecc71" : "#d4af37";
        resultBox.innerHTML = `
            <div style="border-left: 5px solid ${teamColor}; padding-left: 10px; background: #fafafa; padding: 15px; border-radius: 4px;">
                <p><strong>${trueStudentName}</strong> has been found!</p>
                <p>Assigned Group: <span style="color:${teamColor}; font-weight:bold;">${foundTeam}</span></p>
            </div>
        `;
    } else {
        resultBox.innerHTML = "<p style='color:orange;'>Student name not found. Try typing just their first name.</p>";
    }
}

// Main Window Live Environment Calculation Engine
function initDashboard() {
    const today = new Date();
    document.getElementById('current-date').innerText = today.toLocaleDateString('en-US', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });

    let activeTeam = null;
    let config = null;

    for (let block of schedule) {
        const start = new Date(block.start + "T00:00:00");
        const end = new Date(block.end + "T23:59:59");
        if (today >= start && today <= end) {
            activeTeam = block.team;
            config = block;
            break;
        }
    }

    const display = document.getElementById('team-display');
    const list = document.getElementById('roster-list');
    list.innerHTML = "";

    if (activeTeam) {
        display.innerText = activeTeam;
        display.style.backgroundColor = config.bg;
        display.style.color = config.text;

        rosters[activeTeam].forEach(student => {
            let li = document.createElement('li');
            li.innerText = student;
            list.appendChild(li);
        });
    } else {
        display.innerText = "No Safety Patrol Rotation Today";
        display.style.backgroundColor = "#cbd5e0";
        display.style.color = "#4a5568";
        list.innerHTML = "<li>Enjoy your day off!</li>";
    }
}

window.onload = initDashboard;
