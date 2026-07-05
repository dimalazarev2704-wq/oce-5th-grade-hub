// 1. Safety Patrol Roster Matrix Data Mapping
const rosters = {
    "Mighty Shrimp": [
        { name: "Oakley Rillo", shift: "AM", station: "Carpool (Front)" },
        { name: "Campbell Cabaleiro", shift: "AM", station: "Bus Loop" },
        { name: "Wyatt Ellison", shift: "AM", station: "Front Door" },
        { name: "Caleb Kanter", shift: "AM", station: "Hallway Monitor" },
        { name: "Charlotte Maichle", shift: "AM", station: "Carpool (Back)" },
        { name: "Maanvi Hirani", shift: "AM", station: "Bus Loop" },
        { name: "Eleanor Franks", shift: "PM", station: "Carpool (Front)" },
        { name: "Fletcher Hale", shift: "PM", station: "Bus Loop" },
        { name: "Lexi Desai", shift: "PM", station: "Front Door" },
        { name: "Maahi Hirani", shift: "PM", station: "Hallway Monitor" },
        { name: "Liya Desai", shift: "PM", station: "Carpool (Back)" },
        { name: "Taylor Dangerfield", shift: "PM", station: "Bus Loop" },
        { name: "Ellie Dangerfield", shift: "AM", station: "Hallway Monitor" },
        { name: "Samanvi Dasari", shift: "AM", station: "Front Door" },
        { name: "Maddie Price", shift: "PM", station: "Carpool (Front)" },
        { name: "Elizabeth Spittler", shift: "PM", station: "Bus Loop" },
        { name: "Grayson Cook", shift: "AM", station: "Carpool (Front)" },
        { name: "Sumsaara Karicherla", shift: "AM", station: "Bus Loop" },
        { name: "Hannah Pozezanac", shift: "PM", station: "Hallway Monitor" },
        { name: "Jorge Romero", shift: "PM", station: "Front Door" },
        { name: "Camilla Contreras", shift: "PM", station: "Carpool (Back)" }
    ],
    "Fearless Sea Turtles": [
        { name: "Prisha Madavaram", shift: "AM", station: "Carpool (Front)" },
        { name: "Maya Whipple", shift: "AM", station: "Bus Loop" },
        { name: "Ishka Patel", shift: "AM", station: "Front Door" },
        { name: "Elise Moore", shift: "AM", station: "Hallway Monitor" },
        { name: "Emmet Hornbeck", shift: "AM", station: "Carpool (Back)" },
        { name: "Panth Viradiya", shift: "AM", station: "Bus Loop" },
        { name: "Viraaj Singh", shift: "PM", station: "Carpool (Front)" },
        { name: "Luci Fernandez", shift: "PM", station: "Bus Loop" },
        { name: "Dylan Hartley", shift: "PM", station: "Front Door" },
        { name: "Dylan Casadiego", shift: "PM", station: "Hallway Monitor" },
        { name: "Halia Low", shift: "PM", station: "Carpool (Back)" },
        { name: "Noah Abdelhalim", shift: "PM", station: "Bus Loop" },
        { name: "Autumn Smith", shift: "AM", station: "Hallway Monitor" },
        { name: "Taylor Yan", shift: "AM", station: "Front Door" },
        { name: "Eliana Schreuder", shift: "PM", station: "Carpool (Front)" },
        { name: "Giovanni Cruz-Rivera", shift: "PM", station: "Bus Loop" },
        { name: "Addalyn Turner", shift: "AM", station: "Carpool (Front)" },
        { name: "Gabriella Brown", shift: "AM", station: "Bus Loop" },
        { name: "Hamzah Abu Jaradeh", shift: "PM", station: "Hallway Monitor" },
        { name: "Eloise Riffle", shift: "PM", station: "Front Door" },
        { name: "Arden Boyd", shift: "PM", station: "Carpool (Back)" }
    ],
    "Dynamic Starfish": [
        { name: "Londyn Ashwood", shift: "AM", station: "Carpool (Front)" },
        { name: "Nora Rowny", shift: "AM", station: "Bus Loop" },
        { name: "Evan Brockett", shift: "AM", station: "Front Door" },
        { name: "Dima Lazarev", shift: "AM", station: "Hallway Monitor" },
        { name: "Malak Bsiss", shift: "AM", station: "Carpool (Back)" },
        { name: "Reyansh Chalke", shift: "AM", station: "Bus Loop" },
        { name: "Iverson Ramos", shift: "PM", station: "Carpool (Front)" },
        { name: "Olivia Waite", shift: "PM", station: "Bus Loop" },
        { name: "Eleanor Hauck", shift: "PM", station: "Front Door" },
        { name: "Natalie Cochrane", shift: "PM", station: "Hallway Monitor" },
        { name: "Eleni Esquivel", shift: "PM", station: "Carpool (Back)" },
        { name: "Gabriela Polhemus", shift: "PM", station: "Bus Loop" },
        { name: "Carter Clayton", shift: "AM", station: "Hallway Monitor" },
        { name: "Daniela Castillo Ramirez", shift: "AM", station: "Front Door" },
        { name: "Andrey Lushnikov", shift: "PM", station: "Carpool (Front)" },
        { name: "Ivan Ramos", shift: "PM", station: "Bus Loop" },
        { name: "Abigail Shi", shift: "AM", station: "Carpool (Front)" }
    ]
};

// 2. Active Scheduled Calendar Blocks (Starts on July 7th)
const schedule = [
    { start: "2026-07-07", end: "2026-08-31", team: "Mighty Shrimp", bg: "#e67e22", text: "#fff" },
    { start: "2026-09-01", end: "2026-10-06", team: "Dynamic Starfish", bg: "#f1c40f", text: "#333" },
    { start: "2026-10-07", end: "2026-10-31", team: "Mighty Shrimp", bg: "#e67e22", text: "#fff" },
    { start: "2026-11-01", end: "2026-11-30", team: "Fearless Sea Turtles", bg: "#2ecc71", text: "#fff" },
    { start: "2026-12-01", end: "2026-12-31", team: "Dynamic Starfish", bg: "#f1c40f", text: "#333" }
];

// 3. Tab Navigation Engine
function openTab(evt, tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }
    
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add("active-content");
    }
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
}

// 4. Smart Multi-Match Student Search Engine
function searchStudent() {
    const input = document.getElementById('student-search').value.trim().toLowerCase();
    const resultBox = document.getElementById('search-result');
    
    if (!input) {
        resultBox.innerHTML = "<p style='color:#e11d48; font-weight: 500;'>Please enter a name to search!</p>";
        return;
    }

    let matches = [];

    for (let team in rosters) {
        rosters[team].forEach(student => {
            let studentName = student.name.toLowerCase();
            if (studentName.includes(input)) {
                matches.push({
                    teamName: team,
                    data: student
                });
            }
        });
    }

    if (matches.length > 0) {
        let htmlOutput = "";
        
        matches.forEach(item => {
            let teamColor = item.teamName === "Mighty Shrimp" ? "#e67e22" : item.teamName === "Fearless Sea Turtles" ? "#2ecc71" : "#d4af37";
            htmlOutput += `
                <div style="border-left: 5px solid ${teamColor}; background: #f8fafc; padding: 18px; border-radius: 8px; margin-top: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                    <p style="margin: 0 0 8px 0; font-size: 16px;"><strong>${item.data.name}</strong></p>
                    <p style="margin: 4px 0;">✨ <strong>Group:</strong> <span style="color:${teamColor}; font-weight:800;">${item.teamName}</span></p>
                    <p style="margin: 4px 0;">⏰ <strong>When They Go:</strong> <span style="font-weight:600; color:#334155;">${item.data.shift} Shift</span></p>
                    <p style="margin: 4px 0;">📍 <strong>Station Assignment:</strong> <span style="font-weight:600; color:#334155;">${item.data.station}</span></p>
                </div>
            `;
        });
        
        resultBox.innerHTML = htmlOutput;
    } else {
        resultBox.innerHTML = "<p style='color:#e67e22; font-weight: 500; margin-top: 15px;'>No student names matched your search. Double check spelling and try again.</p>";
    }
}

// 5. Environment Load Initialization
function initDashboard() {
    try {
        const today = new Date();
        const dateString = today.toLocaleDateString('en-US', { 
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
        });
        
        const dateElement = document.getElementById('current-date');
        if (dateElement) dateElement.innerText = dateString;

        let activeTeam = null;
        let config = null;

        for (let block of schedule) {
            const start = new Date(block.start.replace(/-/g, '\/'));
            const end = new Date(block.end.replace(/-/g, '\/'));
            end.setHours(23, 59, 59, 999);
            
            if (today >= start && today <= end) {
                activeTeam = block.team;
                config = block;
                break;
            }
        }

        const display = document.getElementById('team-display');
        const list = document.getElementById('roster-list');
        
        if (display && list) {
            list.innerHTML = "";
            if (activeTeam) {
                display.innerText = activeTeam;
                display.style.backgroundColor = config.bg;
                display.style.color = config.text;

                rosters[activeTeam].forEach(student => {
                    let li = document.createElement('li');
                    li.innerText = `${student.name} (${student.shift} - ${student.station})`;
                    list.appendChild(li);
                });
            } else {
                display.innerText = "No Safety Patrol Rotation Today";
                display.style.backgroundColor = "#cbd5e0";
                display.style.color = "#4a5568";
                list.innerHTML = "<li style='text-align: center; color: #64748b; padding: 20px;'>Enjoy your day off before rotation tracks launch!</li>";
            }
        }

        const searchInput = document.getElementById('student-search');
        if (searchInput) {
            searchInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    searchStudent();
                }
            });
        }
    } catch (error) {
        console.error("Initialization failure: ", error);
    }
}

window.onload = initDashboard;
