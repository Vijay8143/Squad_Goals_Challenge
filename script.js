// Sample RCB player data (2023 squad)
const players = [
  {
    id: 1,
    name: "Faf du Plessis (c)",
    country: "za",
    role: "Batsman",
    image: "https://resources.pulse.icc-cricket.com/players/210/369.png",
    matches: 130,
    totalRuns: 3903,
    totalWickets: 0,
    totalCatches: 78,
    strikeRate: 134.2,
    battingAvg: 35.8,
    jersey: "18",
    bestBatting: "96 (55 balls) vs LSG, 2023",
    bestBowling: "N/A",
    playerOfMatches: 12,
    statsPreview: {
      runs: "3.9k",
      sr: "134.2",
      avg: "35.8"
    }
  },
  {
    id: 2,
    name: "Virat Kohli",
    country: "in",
    role: "Batsman",
    image: "https://resources.pulse.icc-cricket.com/players/210/164.png",
    matches: 237,
    totalRuns: 7263,
    totalWickets: 4,
    totalCatches: 109,
    strikeRate: 130.0,
    battingAvg: 37.3,
    jersey: "18",
    bestBatting: "113 (50 balls) vs KXIP, 2016",
    bestBowling: "1/15 vs CSK, 2021",
    playerOfMatches: 15,
    statsPreview: {
      runs: "7.2k",
      sr: "130.0",
      avg: "37.3"
    }
  },
  {
    id: 3,
    name: "Glenn Maxwell",
    country: "au",
    role: "All-Rounder",
    image: "https://resources.pulse.icc-cricket.com/players/210/80.png",
    matches: 124,
    totalRuns: 2719,
    totalWickets: 31,
    totalCatches: 72,
    strikeRate: 157.3,
    battingAvg: 26.7,
    jersey: "32",
    bestBatting: "95* (43 balls) vs KKR, 2023",
    bestBowling: "2/15 vs RR, 2021",
    playerOfMatches: 10,
    statsPreview: {
      runs: "2.7k",
      wickets: "31",
      sr: "157.3"
    }
  },
  {
    id: 4,
    name: "Mohammed Siraj",
    country: "in",
    role: "Bowler",
    image: "https://resources.pulse.icc-cricket.com/players/210/9407.png",
    matches: 79,
    totalRuns: 56,
    totalWickets: 78,
    totalCatches: 15,
    strikeRate: 92.4,
    battingAvg: 5.6,
    jersey: "73",
    bestBatting: "12* (5 balls) vs MI, 2022",
    bestBowling: "4/21 vs KKR, 2023",
    playerOfMatches: 5,
    statsPreview: {
      wickets: "78",
      econ: "8.2",
      avg: "26.5"
    }
  },
  {
    id: 5,
    name: "Dinesh Karthik",
    country: "in",
    role: "Wicket-Keeper",
    image: "https://resources.pulse.icc-cricket.com/players/210/253.png",
    matches: 242,
    totalRuns: 4516,
    totalWickets: 0,
    totalCatches: 140,
    strikeRate: 132.7,
    battingAvg: 26.1,
    jersey: "21",
    bestBatting: "97* (50 balls) vs RR, 2019",
    bestBowling: "N/A",
    playerOfMatches: 9,
    statsPreview: {
      runs: "4.5k",
      sr: "132.7",
      avg: "26.1"
    }
  },
  {
    id: 6,
    name: "Wanindu Hasaranga",
    country: "lk",
    role: "Bowler",
    image: "https://resources.pulse.icc-cricket.com/players/210/12230.png",
    matches: 26,
    totalRuns: 145,
    totalWickets: 35,
    totalCatches: 9,
    strikeRate: 118.0,
    battingAvg: 13.2,
    jersey: "28",
    bestBatting: "37* (19 balls) vs RR, 2022",
    bestBowling: "5/18 vs SRH, 2022",
    playerOfMatches: 4,
    statsPreview: {
      wickets: "35",
      econ: "7.5",
      avg: "21.4"
    }
  },
  {
    id: 7,
    name: "Harshal Patel",
    country: "in",
    role: "Bowler",
    image: "https://resources.pulse.icc-cricket.com/players/210/3275.png",
    matches: 91,
    totalRuns: 329,
    totalWickets: 111,
    totalCatches: 28,
    strikeRate: 138.2,
    battingAvg: 12.2,
    jersey: "12",
    bestBatting: "36* (16 balls) vs MI, 2021",
    bestBowling: "5/27 vs MI, 2021",
    playerOfMatches: 7,
    statsPreview: {
      wickets: "111",
      econ: "8.6",
      avg: "22.7"
    }
  },
  {
    id: 8,
    name: "Josh Hazlewood",
    country: "au",
    role: "Bowler",
    image: "https://resources.pulse.icc-cricket.com/players/210/707.png",
    matches: 27,
    totalRuns: 23,
    totalWickets: 35,
    totalCatches: 6,
    strikeRate: 85.2,
    battingAvg: 5.8,
    jersey: "38",
    bestBatting: "11* (6 balls) vs CSK, 2022",
    bestBowling: "4/25 vs MI, 2022",
    playerOfMatches: 3,
    statsPreview: {
      wickets: "35",
      econ: "7.9",
      avg: "20.8"
    }
  },
  {
    id: 9,
    name: "Shahbaz Ahmed",
    country: "in",
    role: "All-Rounder",
    image: "https://resources.pulse.icc-cricket.com/players/210/12231.png",
    matches: 47,
    totalRuns: 515,
    totalWickets: 14,
    totalCatches: 12,
    strikeRate: 126.5,
    battingAvg: 22.4,
    jersey: "14",
    bestBatting: "45 (26 balls) vs RR, 2022",
    bestBowling: "3/7 vs PBKS, 2021",
    playerOfMatches: 2,
    statsPreview: {
      runs: "515",
      wickets: "14",
      sr: "126.5"
    }
  },
  {
    id: 10,
    name: "Rajat Patidar",
    country: "in",
    role: "Batsman",
    image: "https://resources.pulse.icc-cricket.com/players/210/12232.png",
    matches: 23,
    totalRuns: 585,
    totalWickets: 0,
    totalCatches: 8,
    strikeRate: 144.3,
    battingAvg: 32.5,
    jersey: "5",
    bestBatting: "112* (54 balls) vs LSG, 2022",
    bestBowling: "N/A",
    playerOfMatches: 3,
    statsPreview: {
      runs: "585",
      sr: "144.3",
      avg: "32.5"
    }
  },
  {
    id: 11,
    name: "Mahipal Lomror",
    country: "in",
    role: "All-Rounder",
    image: "https://resources.pulse.icc-cricket.com/players/210/12233.png",
    matches: 32,
    totalRuns: 328,
    totalWickets: 5,
    totalCatches: 9,
    strikeRate: 132.8,
    battingAvg: 18.2,
    jersey: "25",
    bestBatting: "47* (29 balls) vs DC, 2022",
    bestBowling: "2/24 vs SRH, 2021",
    playerOfMatches: 1,
    statsPreview: {
      runs: "328",
      wickets: "5",
      sr: "132.8"
    }
  },
  {
    id: 12,
    name: "Anuj Rawat",
    country: "in",
    role: "Wicket-Keeper",
    image: "https://resources.pulse.icc-cricket.com/players/210/12234.png",
    matches: 21,
    totalRuns: 249,
    totalWickets: 0,
    totalCatches: 12,
    strikeRate: 118.6,
    battingAvg: 15.6,
    jersey: "7",
    bestBatting: "66 (47 balls) vs MI, 2022",
    bestBowling: "N/A",
    playerOfMatches: 1,
    statsPreview: {
      runs: "249",
      sr: "118.6",
      avg: "15.6"
    }
  }
];

// DOM elements
const playersGrid = document.getElementById('playersGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const playerModal = document.getElementById('playerModal');
const closeBtn = document.getElementById('closeBtn');
const scrollToTopBtn = document.getElementById('scrollToTop');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the app
function init() {
  renderPlayers(players);
  setupEventListeners();
}

// Render players to the grid
function renderPlayers(playersToRender) {
  playersGrid.innerHTML = '';
  
  if (playersToRender.length === 0) {
    playersGrid.innerHTML = '<div class="no-results">No players found matching your criteria</div>';
    return;
  }
  
  playersToRender.forEach((player, index) => {
    const playerCard = createPlayerCard(player, index);
    playersGrid.appendChild(playerCard);
  });
}

// Create a player card element
function createPlayerCard(player, index) {
  const card = document.createElement('div');
  card.className = `player-card animate-card`;
  card.style.animationDelay = `${index * 0.1}s`;
  card.dataset.id = player.id;
  card.dataset.role = player.role.toLowerCase().replace('-', ' ');
  
  // Determine badge class based on role
  let badgeClass = '';
  if (player.role.includes('Batsman')) badgeClass = 'batsman';
  else if (player.role.includes('Bowler')) badgeClass = 'bowler';
  else if (player.role.includes('All-Rounder')) badgeClass = 'all-rounder';
  else if (player.role.includes('Wicket-Keeper')) badgeClass = 'wicket-keeper';
  
  card.innerHTML = `
    <img src="${player.image}" alt="${player.name}" class="player-image">
    <h3 class="player-name">${player.name}</h3>
    <div class="player-details">
      <span class="player-role"><span class="flag-icon flag-icon-${player.country}"></span> ${player.role}</span>
      <span class="player-jersey">#${player.jersey}</span>
    </div>
    <div class="badges">
      <span class="badge ${badgeClass}">${player.role}</span>
    </div>
    <div class="stats-preview">
      ${player.role.includes('Bowler') ? `
        <div class="stat-item">
          <div class="stat-value">${player.statsPreview.wickets}</div>
          <div class="stat-label">Wickets</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${player.statsPreview.econ}</div>
          <div class="stat-label">Econ</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${player.statsPreview.avg}</div>
          <div class="stat-label">Avg</div>
        </div>
      ` : `
        <div class="stat-item">
          <div class="stat-value">${player.statsPreview.runs}</div>
          <div class="stat-label">Runs</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${player.statsPreview.sr}</div>
          <div class="stat-label">SR</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${player.statsPreview.avg}</div>
          <div class="stat-label">Avg</div>
        </div>
      `}
    </div>
  `;
  
  // Add click event to open modal
  card.addEventListener('click', () => openPlayerModal(player));
  
  return card;
}

// Open player modal with details
function openPlayerModal(player) {
  document.getElementById('playerName').textContent = player.name;
  document.getElementById('modalPlayerImage').src = player.image;
  document.getElementById('playerCountry').innerHTML = `<span class="flag-icon flag-icon-${player.country}"></span> ${getCountryName(player.country)}`;
  document.getElementById('jersey').textContent = `#${player.jersey}`;
  document.getElementById('matches').textContent = player.matches;
  document.getElementById('totalRuns').textContent = player.totalRuns;
  document.getElementById('totalWickets').textContent = player.totalWickets;
  document.getElementById('totalCatches').textContent = player.totalCatches;
  document.getElementById('strikeRate').textContent = player.strikeRate;
  document.getElementById('battingAvg').textContent = player.battingAvg;
  document.getElementById('bestBatting').textContent = player.bestBatting;
  document.getElementById('bestBowling').textContent = player.bestBowling;
  document.getElementById('playerOfMatches').textContent = `${player.playerOfMatches} matches`;
  
  // Set progress bars
  setTimeout(() => {
    document.getElementById('strikeBar').style.width = `${Math.min(player.strikeRate, 200) / 2}%`;
    document.getElementById('battingAvgBar').style.width = `${Math.min(player.battingAvg, 100)}%`;
  }, 100);
  
  // Update badges in modal
  const modalBadges = document.getElementById('modalBadges');
  modalBadges.innerHTML = '';
  
  let badgeClass = '';
  if (player.role.includes('Batsman')) badgeClass = 'batsman';
  else if (player.role.includes('Bowler')) badgeClass = 'bowler';
  else if (player.role.includes('All-Rounder')) badgeClass = 'all-rounder';
  else if (player.role.includes('Wicket-Keeper')) badgeClass = 'wicket-keeper';
  
  const badge = document.createElement('span');
  badge.className = `badge ${badgeClass}`;
  badge.textContent = player.role;
  modalBadges.appendChild(badge);
  
  // Show modal
  playerModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close player modal
function closePlayerModal() {
  playerModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Filter players based on current filter and search
function filterPlayers() {
  let filtered = players;
  
  // Apply role filter
  if (currentFilter !== 'all') {
    filtered = filtered.filter(player => 
      player.role.toLowerCase().includes(currentFilter))
  }
  
  // Apply search filter
  if (currentSearch) {
    const searchTerm = currentSearch.toLowerCase();
    filtered = filtered.filter(player => 
      player.name.toLowerCase().includes(searchTerm) || 
      player.role.toLowerCase().includes(searchTerm) ||
      getCountryName(player.country).toLowerCase().includes(searchTerm) ||
      player.jersey.includes(searchTerm)
    );
  }
  
  renderPlayers(filtered);
}

// Get country name from country code
function getCountryName(code) {
  const countries = {
    in: 'India',
    gb: 'England',
    au: 'Australia',
    nz: 'New Zealand',
    za: 'South Africa',
    bd: 'Bangladesh',
    af: 'Afghanistan',
    pk: 'Pakistan',
    lk: 'Sri Lanka'
  };
  return countries[code] || code;
}

// Set up event listeners
function setupEventListeners() {
  // Search input
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    filterPlayers();
  });
  
  // Filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentFilter = button.dataset.filter;
      filterPlayers();
    });
  });
  
  // Close modal button
  closeBtn.addEventListener('click', closePlayerModal);
  
  // Close modal when clicking outside
  playerModal.addEventListener('click', (e) => {
    if (e.target === playerModal) {
      closePlayerModal();
    }
  });
  
  // Scroll to top button
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show/hide scroll to top button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.visibility = 'visible';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.visibility = 'hidden';
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);