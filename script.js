// ============================================================
// BPSC TEACHER RECRUITMENT EXAM – PROGRESS TRACKER
// script.js – Data Architecture + Full Application Logic
// ============================================================

// ──────────────────────────────────────────────
// MASTER DATA STRUCTURE
// ──────────────────────────────────────────────
const MASTER_DATA = [
  {
    id: "number_system",
    name: "Number System",
    weight: 10,
    videoLectures: ["Number System", "LCM & HCF", "Surds & Indices"],
    pyqChapters: ["संख्या पद्धति", "ल.स.प. एवं म.स.प."],
    subtopics: [
      { id: "ns_01", name: "Natural Numbers",               ncert: [{ class: 6,  chapter: "Chapter 1 – Knowing Our Numbers" }] },
      { id: "ns_02", name: "Whole Numbers",                 ncert: [{ class: 6,  chapter: "Chapter 2 – Whole Numbers" }] },
      { id: "ns_03", name: "Integers",                      ncert: [{ class: 7,  chapter: "Chapter 1 – Integers" }] },
      { id: "ns_04", name: "Fractions",                     ncert: [{ class: 6,  chapter: "Chapter 7 – Fractions" }] },
      { id: "ns_05", name: "Decimals",                      ncert: [{ class: 6,  chapter: "Chapter 8 – Decimals" }] },
      { id: "ns_06", name: "Rational Numbers",              ncert: [{ class: 7,  chapter: "Chapter 9 – Rational Numbers" }, { class: 8, chapter: "Chapter 1 – Rational Numbers" }] },
      { id: "ns_07", name: "Irrational Numbers",            ncert: [{ class: 9,  chapter: "Chapter 1 – Number Systems" }] },
      { id: "ns_08", name: "Real Numbers",                  ncert: [{ class: 9,  chapter: "Chapter 1 – Number Systems" }, { class: 10, chapter: "Chapter 1 – Real Numbers" }] },
      { id: "ns_09", name: "LCM & HCF",                    ncert: [{ class: 6,  chapter: "Chapter 3 – Playing with Numbers" }, { class: 10, chapter: "Chapter 1 – Real Numbers" }] },
      { id: "ns_10", name: "Divisibility Rules",            ncert: [{ class: 6,  chapter: "Chapter 3 – Playing with Numbers" }] },
      { id: "ns_11", name: "Exponents",                     ncert: [{ class: 8,  chapter: "Chapter 12 – Exponents and Powers" }] },
      { id: "ns_12", name: "Surds",                         ncert: [{ class: 9,  chapter: "Chapter 1 – Number Systems" }] },
      { id: "ns_13", name: "Squares & Square Roots",        ncert: [{ class: 8,  chapter: "Chapter 6 – Squares and Square Roots" }] },
      { id: "ns_14", name: "Cubes & Cube Roots",            ncert: [{ class: 8,  chapter: "Chapter 7 – Cubes and Cube Roots" }] },
      { id: "ns_15", name: "Decimal Expansion Logic",       ncert: [{ class: 9,  chapter: "Chapter 1 – Number Systems" }, { class: 10, chapter: "Chapter 1 – Real Numbers" }] },
      { id: "ns_16", name: "Euclid Division Algorithm",     ncert: [{ class: 10, chapter: "Chapter 1 – Real Numbers" }] },
      { id: "ns_17", name: "Fundamental Theorem of Arithmetic", ncert: [{ class: 10, chapter: "Chapter 1 – Real Numbers" }] },
      { id: "ns_18", name: "Absolute Value",                ncert: [{ class: 7,  chapter: "Chapter 1 – Integers (Derived Concept)" }] },
    ]
  },
  {
    id: "percentage",
    name: "Percentage",
    weight: 8,
    videoLectures: ["Percentage"],
    pyqChapters: ["प्रतिशत"],
    subtopics: [
      { id: "pct_01", name: "Percentage Basics",              ncert: [{ class: 7, chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "pct_02", name: "Percentage to Fraction/Decimal", ncert: [{ class: 7, chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "pct_03", name: "Percentage Change",              ncert: [{ class: 8, chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "pct_04", name: "Successive Percentage",          ncert: [{ class: 8, chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "pct_05", name: "Percentage in Data Interpretation", ncert: [{ class: 9, chapter: "Chapter 14 – Statistics" }] },
    ]
  },
  {
    id: "ratio_proportion",
    name: "Ratio & Proportion",
    weight: 8,
    videoLectures: ["Ratio & Proportion"],
    pyqChapters: ["अनुपात समानुपात"],
    subtopics: [
      { id: "rp_01", name: "Ratio Basics",            ncert: [{ class: 6, chapter: "Chapter 12 – Ratio and Proportion" }] },
      { id: "rp_02", name: "Proportion",              ncert: [{ class: 6, chapter: "Chapter 12 – Ratio and Proportion" }] },
      { id: "rp_03", name: "Unitary Method",          ncert: [{ class: 6, chapter: "Chapter 12 – Ratio and Proportion" }] },
      { id: "rp_04", name: "Direct Proportion",       ncert: [{ class: 8, chapter: "Chapter 13 – Direct and Inverse Proportions" }] },
      { id: "rp_05", name: "Inverse Proportion",      ncert: [{ class: 8, chapter: "Chapter 13 – Direct and Inverse Proportions" }] },
      { id: "rp_06", name: "Partnership Problems",    ncert: [{ class: 8, chapter: "Chapter 8 – Comparing Quantities" }] },
    ]
  },
  {
    id: "arithmetic",
    name: "Arithmetic",
    weight: 10,
    videoLectures: ["Profit Loss", "SI CI", "Time Work", "Time Speed Distance", "Percentage"],
    pyqChapters: ["लाभ हानि", "ब्याज", "कार्य समय", "पाइप टंकी", "दूरी"],
    subtopics: [
      { id: "ar_01", name: "Profit & Loss",                      ncert: [{ class: 7,  chapter: "Chapter 8 – Comparing Quantities" }, { class: 8, chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "ar_02", name: "Simple Interest",                    ncert: [{ class: 7,  chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "ar_03", name: "Compound Interest",                  ncert: [{ class: 8,  chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "ar_04", name: "Time & Work",                        ncert: [{ class: 8,  chapter: "Chapter 13 – Direct and Inverse Proportions" }] },
      { id: "ar_05", name: "Pipes & Cisterns",                   ncert: [{ class: 8,  chapter: "Chapter 13 – Direct and Inverse Proportions" }] },
      { id: "ar_06", name: "Time, Speed & Distance",             ncert: [{ class: 7,  chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "ar_07", name: "Trains & Relative Speed",            ncert: [{ class: 7,  chapter: "Chapter 8 – Comparing Quantities" }] },
      { id: "ar_08", name: "Boats & Streams",                    ncert: [{ class: 8,  chapter: "Chapter 13 – Direct and Inverse Proportions" }] },
      { id: "ar_09", name: "Averages",                           ncert: [{ class: 7,  chapter: "Chapter 3 – Data Handling" }] },
      { id: "ar_10", name: "Alligation & Mixture",               ncert: [{ class: 8,  chapter: "Chapter 8 – Comparing Quantities" }] },
    ]
  },
  {
    id: "algebra",
    name: "Algebra",
    weight: 10,
    videoLectures: ["Algebra", "Polynomial", "Progression"],
    pyqChapters: ["रैखिक समीकरण", "द्विघात समीकरण"],
    subtopics: [
      { id: "al_01", name: "Algebraic Expressions",         ncert: [{ class: 7,  chapter: "Chapter 12 – Algebraic Expressions" }, { class: 8, chapter: "Chapter 9 – Algebraic Expressions" }] },
      { id: "al_02", name: "Linear Equations (1 var)",      ncert: [{ class: 7,  chapter: "Chapter 4 – Simple Equations" }] },
      { id: "al_03", name: "Linear Equations (2 var)",      ncert: [{ class: 9,  chapter: "Chapter 4 – Linear Equations in Two Variables" }] },
      { id: "al_04", name: "Quadratic Equations",           ncert: [{ class: 10, chapter: "Chapter 4 – Quadratic Equations" }] },
      { id: "al_05", name: "Polynomials",                   ncert: [{ class: 9,  chapter: "Chapter 2 – Polynomials" }, { class: 10, chapter: "Chapter 2 – Polynomials" }] },
      { id: "al_06", name: "Arithmetic Progressions (AP)",  ncert: [{ class: 10, chapter: "Chapter 5 – Arithmetic Progressions" }] },
      { id: "al_07", name: "Identities & Factorisation",    ncert: [{ class: 8,  chapter: "Chapter 9 – Algebraic Expressions and Identities" }] },
      { id: "al_08", name: "Inequalities",                  ncert: [{ class: 11, chapter: "Chapter 6 – Linear Inequalities" }] },
    ]
  },
  {
    id: "geometry",
    name: "Geometry",
    weight: 9,
    videoLectures: ["Geometry"],
    pyqChapters: ["ज्यामिति"],
    subtopics: [
      { id: "ge_01", name: "Lines & Angles",                ncert: [{ class: 7,  chapter: "Chapter 5 – Lines and Angles" }, { class: 9, chapter: "Chapter 6 – Lines and Angles" }] },
      { id: "ge_02", name: "Triangles – Congruence",        ncert: [{ class: 7,  chapter: "Chapter 7 – Congruence of Triangles" }, { class: 9, chapter: "Chapter 7 – Triangles" }] },
      { id: "ge_03", name: "Triangles – Similarity",        ncert: [{ class: 10, chapter: "Chapter 6 – Triangles" }] },
      { id: "ge_04", name: "Pythagoras Theorem",            ncert: [{ class: 10, chapter: "Chapter 6 – Triangles" }] },
      { id: "ge_05", name: "Quadrilaterals",                ncert: [{ class: 8,  chapter: "Chapter 3 – Understanding Quadrilaterals" }, { class: 9, chapter: "Chapter 8 – Quadrilaterals" }] },
      { id: "ge_06", name: "Circles",                       ncert: [{ class: 9,  chapter: "Chapter 10 – Circles" }, { class: 10, chapter: "Chapter 10 – Circles" }] },
      { id: "ge_07", name: "Constructions",                 ncert: [{ class: 9,  chapter: "Chapter 11 – Constructions" }] },
    ]
  },
  {
    id: "mensuration",
    name: "Mensuration",
    weight: 9,
    videoLectures: ["Geometry"],
    pyqChapters: ["क्षेत्रमिति"],
    subtopics: [
      { id: "me_01", name: "Perimeter & Area (2D)",         ncert: [{ class: 6,  chapter: "Chapter 10 – Mensuration" }, { class: 7, chapter: "Chapter 11 – Perimeter and Area" }] },
      { id: "me_02", name: "Area of Circle",                ncert: [{ class: 7,  chapter: "Chapter 11 – Perimeter and Area" }] },
      { id: "me_03", name: "Surface Area – Cuboid/Cube",    ncert: [{ class: 8,  chapter: "Chapter 11 – Mensuration" }] },
      { id: "me_04", name: "Surface Area – Cylinder",       ncert: [{ class: 9,  chapter: "Chapter 13 – Surface Areas and Volumes" }] },
      { id: "me_05", name: "Surface Area – Cone & Sphere",  ncert: [{ class: 9,  chapter: "Chapter 13 – Surface Areas and Volumes" }] },
      { id: "me_06", name: "Volume – 3D Shapes",            ncert: [{ class: 8,  chapter: "Chapter 11 – Mensuration" }, { class: 9, chapter: "Chapter 13 – Surface Areas and Volumes" }] },
      { id: "me_07", name: "Combinations of Solids",        ncert: [{ class: 10, chapter: "Chapter 13 – Surface Areas and Volumes" }] },
    ]
  },
  {
    id: "coordinate_geometry",
    name: "Coordinate Geometry",
    weight: 7,
    videoLectures: ["Coordinate Geometry"],
    pyqChapters: ["निर्देशांक ज्यामिति"],
    subtopics: [
      { id: "cg_01", name: "Cartesian Plane",         ncert: [{ class: 9,  chapter: "Chapter 3 – Coordinate Geometry" }] },
      { id: "cg_02", name: "Distance Formula",         ncert: [{ class: 10, chapter: "Chapter 7 – Coordinate Geometry" }] },
      { id: "cg_03", name: "Section Formula",          ncert: [{ class: 10, chapter: "Chapter 7 – Coordinate Geometry" }] },
      { id: "cg_04", name: "Mid-point Formula",        ncert: [{ class: 10, chapter: "Chapter 7 – Coordinate Geometry" }] },
      { id: "cg_05", name: "Area of Triangle",         ncert: [{ class: 10, chapter: "Chapter 7 – Coordinate Geometry" }] },
    ]
  },
  {
    id: "trigonometry",
    name: "Trigonometry",
    weight: 10,
    videoLectures: ["Trigonometry", "Height and Distance"],
    pyqChapters: ["त्रिकोणमिति", "ऊँचाई दूरी"],
    subtopics: [
      { id: "tr_01", name: "Trigonometric Ratios",          ncert: [{ class: 10, chapter: "Chapter 8 – Introduction to Trigonometry" }] },
      { id: "tr_02", name: "Standard Angles & Values",      ncert: [{ class: 10, chapter: "Chapter 8 – Introduction to Trigonometry" }] },
      { id: "tr_03", name: "Trigonometric Identities",      ncert: [{ class: 10, chapter: "Chapter 8 – Introduction to Trigonometry" }] },
      { id: "tr_04", name: "Complementary Angles",          ncert: [{ class: 10, chapter: "Chapter 8 – Introduction to Trigonometry" }] },
      { id: "tr_05", name: "Heights & Distances",           ncert: [{ class: 10, chapter: "Chapter 9 – Some Applications of Trigonometry" }] },
      { id: "tr_06", name: "Angle of Elevation & Depression", ncert: [{ class: 10, chapter: "Chapter 9 – Some Applications of Trigonometry" }] },
    ]
  },
  {
    id: "statistics",
    name: "Statistics",
    weight: 7,
    videoLectures: ["Statistics"],
    pyqChapters: ["आंकड़े"],
    subtopics: [
      { id: "st_01", name: "Data Collection & Representation", ncert: [{ class: 6, chapter: "Chapter 9 – Data Handling" }, { class: 7, chapter: "Chapter 3 – Data Handling" }] },
      { id: "st_02", name: "Mean (Ungrouped & Grouped)",     ncert: [{ class: 9,  chapter: "Chapter 14 – Statistics" }] },
      { id: "st_03", name: "Median",                         ncert: [{ class: 9,  chapter: "Chapter 14 – Statistics" }, { class: 10, chapter: "Chapter 14 – Statistics" }] },
      { id: "st_04", name: "Mode",                           ncert: [{ class: 9,  chapter: "Chapter 14 – Statistics" }, { class: 10, chapter: "Chapter 14 – Statistics" }] },
      { id: "st_05", name: "Frequency Distribution",         ncert: [{ class: 9,  chapter: "Chapter 14 – Statistics" }] },
      { id: "st_06", name: "Ogive & Cumulative Frequency",   ncert: [{ class: 10, chapter: "Chapter 14 – Statistics" }] },
    ]
  },
  {
    id: "probability",
    name: "Probability",
    weight: 7,
    videoLectures: ["Permutation Combination", "Probability"],
    pyqChapters: ["प्रायिकता"],
    subtopics: [
      { id: "pr_01", name: "Basic Probability",              ncert: [{ class: 9,  chapter: "Chapter 15 – Probability" }] },
      { id: "pr_02", name: "Classical Probability",          ncert: [{ class: 10, chapter: "Chapter 15 – Probability" }] },
      { id: "pr_03", name: "Complementary Events",           ncert: [{ class: 10, chapter: "Chapter 15 – Probability" }] },
      { id: "pr_04", name: "Equally Likely Outcomes",        ncert: [{ class: 9,  chapter: "Chapter 15 – Probability" }] },
    ]
  },
  {
    id: "advanced",
    name: "Advanced Topics",
    weight: 6,
    videoLectures: ["Permutation Combination", "Probability", "Share & Dividend"],
    pyqChapters: ["क्रमचय संचय", "प्रायिकता", "लघुगणक"],
    subtopics: [
      { id: "adv_01", name: "Permutations",                  ncert: [{ class: 11, chapter: "Chapter 7 – Permutations and Combinations" }] },
      { id: "adv_02", name: "Combinations",                  ncert: [{ class: 11, chapter: "Chapter 7 – Permutations and Combinations" }] },
      { id: "adv_03", name: "Logarithms",                    ncert: [{ class: 9,  chapter: "Chapter 1 – Number Systems (Appendix)" }] },
      { id: "adv_04", name: "Shares & Dividends",            ncert: [{ class: 9,  chapter: "Chapter 8 – Linear Equations (Application)" }] },
      { id: "adv_05", name: "Set Theory Basics",             ncert: [{ class: 11, chapter: "Chapter 1 – Sets" }] },
    ]
  }
];

// ──────────────────────────────────────────────
// STATE MANAGEMENT
// ──────────────────────────────────────────────
// ──────────────────────────────────────────────
// STATE MANAGEMENT (MULTI-PROFILE)
// ──────────────────────────────────────────────
const STORAGE_KEY = "bpsc_tracker_v3"; // Upgraded key for new schema

let appState = {
  activeProfileId: null, // null means we are at the Home/Hub
  profiles: {}
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      appState = JSON.parse(raw);
      // Migrate from v2 if needed (minimal logic)
      if (!appState.profiles) {
        const oldData = appState;
        appState = { activeProfileId: null, profiles: { "V1": oldData } };
      }
    } else {
      initDefaultProfile();
    }
  } catch (e) {
    initDefaultProfile();
  }
}

function initDefaultProfile() {
  appState = { activeProfileId: null, profiles: {} };
  createNewProfile("My First Attempt (V1)");
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function createNewProfile(name) {
  const id = "p_" + Date.now();
  const profileData = {};
  MASTER_DATA.forEach(topic => {
    profileData[topic.id] = {
      subtopics: {}
    };
    topic.subtopics.forEach(sub => {
      profileData[topic.id].subtopics[sub.id] = {
        video: false, videoDate: null,
        ncert: false, ncertDate: null,
        pyq:   false, pyqDate:   null
      };
    });
  });

  appState.profiles[id] = {
    id,
    name: name || `Version ${Object.keys(appState.profiles).length + 1}`,
    createdAt: new Date().toISOString(),
    data: profileData
  };
  saveState();
  return id;
}

function deleteProfile(id) {
  delete appState.profiles[id];
  if (appState.activeProfileId === id) appState.activeProfileId = null;
  saveState();
}

function duplicateProfile(id) {
  const original = appState.profiles[id];
  if (!original) return;
  const newId = "p_" + Date.now();
  appState.profiles[newId] = JSON.parse(JSON.stringify(original));
  appState.profiles[newId].id = newId;
  appState.profiles[newId].name += " (Copy)";
  appState.profiles[newId].createdAt = new Date().toISOString();
  saveState();
}

// ──────────────────────────────────────────────
// PROGRESS CALCULATION (PROFILE-AWARE)
// ──────────────────────────────────────────────
function getActiveData() {
  return appState.profiles[appState.activeProfileId]?.data || {};
}

function isSubtopicComplete(topicId, subId) {
  const data = getActiveData();
  const s = data[topicId]?.subtopics?.[subId];
  return s ? (s.video && s.ncert && s.pyq) : false;
}

function getSubtopicProgress(topicId) {
  const topic = MASTER_DATA.find(t => t.id === topicId);
  if (!topic) return { done: 0, total: 0, pct: 0 };
  const total = topic.subtopics.length;
  const done  = topic.subtopics.filter(s => isSubtopicComplete(topicId, s.id)).length;
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getTopicSectionProgress(topicId, section) {
  const topic = MASTER_DATA.find(t => t.id === topicId);
  if (!topic) return 0;
  const data = getActiveData();
  const done = topic.subtopics.filter(s => data[topicId]?.subtopics?.[s.id]?.[section]).length;
  return topic.subtopics.length ? Math.round((done / topic.subtopics.length) * 100) : 0;
}

function getOverallProgress(profileId) {
  const targetId = profileId || appState.activeProfileId;
  const profile = appState.profiles[targetId];
  if (!profile) return 0;

  const totalWeight = MASTER_DATA.reduce((a, t) => a + t.weight, 0);
  let weightedSum = 0;
  MASTER_DATA.forEach(topic => {
    // Local calculation for specific profile if needed, or active one
    const subtopics = topic.subtopics;
    const total = subtopics.length;
    const done = subtopics.filter(s => {
      const st = profile.data[topic.id]?.subtopics?.[s.id];
      return st && st.video && st.ncert && st.pyq;
    }).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    weightedSum += (pct * topic.weight);
  });
  return Math.round(weightedSum / totalWeight);
}

function getTotalCounts() {
  let totalSubs = 0, doneSubs = 0;
  MASTER_DATA.forEach(topic => {
    const p = getSubtopicProgress(topic.id);
    totalSubs += p.total;
    doneSubs  += p.done;
  });
  return { totalSubs, doneSubs, pendingSubs: totalSubs - doneSubs };
}

function getDailyActivity() {
  const activity = {};
  MASTER_DATA.forEach(topic => {
    topic.subtopics.forEach(sub => {
      const s = state[topic.id]?.subtopics?.[sub.id];
      if (!s) return;
      ["videoDate","ncertDate","pyqDate"].forEach(df => {
        if (s[df]) {
          const d = s[df].split("T")[0];
          activity[d] = (activity[d] || 0) + 1;
        }
      });
    });
  });
  return activity;
}

// ──────────────────────────────────────────────
// UI STATE
// ──────────────────────────────────────────────
let activeFilter   = "all";   // all | done | pending
let expandedTopics = new Set();
let activeTab      = "topics"; // topics | dashboard

// ──────────────────────────────────────────────
// RENDER ENGINE
// ──────────────────────────────────────────────
function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"2-digit" });
}

function today() {
  return new Date().toISOString();
}

// ──────────────────────────────────────────────
// RENDER ENGINE
// ──────────────────────────────────────────────
function renderApp() {
  if (appState.activeProfileId === null) {
    renderHome();
  } else {
    renderTracker();
  }
}

function renderHome() {
  const container = document.getElementById("topics-container");
  const header    = document.getElementById("app-header");
  const controls  = document.getElementById("controls-bar");
  const bnav      = document.querySelector(".bottom-nav");
  const tabs      = document.querySelector(".tabs-bar");

  // Hide tracker-only elements
  if (controls) controls.style.display = "none";
  if (bnav)     bnav.style.display     = "none";
  if (tabs)     tabs.style.display     = "none";

  // Update Header for Home
  header.innerHTML = `
    <div class="header-top">
      <div>
        <div class="app-title">🏠 Version Hub</div>
        <div class="app-subtitle">Select a study profile to continue</div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" id="add-profile-btn" style="color:var(--accent3)">+ New Version</button>
      </div>
    </div>
  `;

  container.innerHTML = `
    <div class="profile-hub">
      <div class="hub-grid" id="profile-list"></div>
    </div>
  `;

  const list = document.getElementById("profile-list");
  Object.values(appState.profiles).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).forEach(p => {
    const pct = getOverallProgress(p.id);
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `
      <div class="p-card-header">
        <div class="p-name">${p.name}</div>
        <div class="p-date">Created: ${formatDate(p.createdAt)}</div>
      </div>
      <div class="p-card-body">
        <div class="p-pct-large">${pct}%</div>
        <div class="p-bar"><div class="p-bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="p-card-footer">
        <button class="p-btn open" data-id="${p.id}">Open</button>
        <button class="p-btn copy" data-id="${p.id}" title="Duplicate">📋</button>
        <button class="p-btn delete" data-id="${p.id}" title="Delete">🗑️</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderTracker() {
  const profile = appState.profiles[appState.activeProfileId];
  if (!profile) { appState.activeProfileId = null; renderHome(); return; }

  const controls  = document.getElementById("controls-bar");
  const bnav      = document.querySelector(".bottom-nav");
  const tabs      = document.querySelector(".tabs-bar");
  if (controls && activeTab === 'topics') controls.style.display = "";
  if (bnav)     bnav.style.display     = "";
  if (tabs && window.innerWidth >= 700) tabs.style.display = "";

  renderHeader();
  if (activeTab === "topics") {
    renderTopicsView();
  } else {
    renderDashboard();
  }
}

function renderHeader() {
  const profile = appState.profiles[appState.activeProfileId];
  const overall = getOverallProgress();
  const counts  = getTotalCounts();
  
  const header = document.getElementById("app-header");
  header.innerHTML = `
    <div class="header-top">
      <div class="back-home-wrap">
        <button id="go-home-btn" class="back-btn">←</button>
        <div>
          <div class="app-title">${profile.name}</div>
          <div class="app-subtitle">${overall}% Overall Readiness</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-btn" id="reset-btn" title="Reset all progress">↺ Reset</button>
      </div>
    </div>
    <div class="overall-progress-wrap">
      <div id="top-progress-bar" style="width:${overall}%"></div>
    </div>
    <div class="stats-strip">
      <div class="stat-item"><span class="stat-num overall">${overall}%</span><span class="stat-lbl">Readiness</span></div>
      <span class="stat-sep">|</span>
      <div class="stat-item"><span class="stat-num done">${counts.doneSubs}</span><span class="stat-lbl">Done</span></div>
      <span class="stat-sep">|</span>
      <div class="stat-item"><span class="stat-num pending">${counts.pendingSubs}</span><span class="stat-lbl">Left</span></div>
    </div>
  `;
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"2-digit" });
}

function today() {
  return new Date().toISOString();
}

function renderTopicsView() {
  const container = document.getElementById("topics-container");
  container.innerHTML = "";

  MASTER_DATA.forEach(topic => {
    const { done, total, pct } = getSubtopicProgress(topic.id);
    const isExpanded = expandedTopics.has(topic.id);
    const isComplete = pct === 100;

    if (activeFilter === "done"    && !isComplete) return;
    if (activeFilter === "pending" &&  isComplete) return;

    const card = document.createElement("div");
    card.className = "topic-card" + (isExpanded ? " expanded" : "") + (isComplete ? " complete" : "");
    card.dataset.id = topic.id;

    const vidPct  = getTopicSectionProgress(topic.id, "video");
    const ncertPct = getTopicSectionProgress(topic.id, "ncert");
    const pyqPct  = getTopicSectionProgress(topic.id, "pyq");

    card.innerHTML = `
      <div class="topic-header" data-id="${topic.id}">
        <div class="topic-header-left">
          <div class="topic-icon">${isComplete ? "✓" : getTopicEmoji(topic.id)}</div>
          <div class="topic-title-block">
            <div class="topic-name">${topic.name}</div>
            <div class="topic-meta">
              <span class="badge weight-badge">Wt: ${topic.weight}</span>
              <span class="badge sub-badge">${done}/${total} subtopics</span>
            </div>
          </div>
        </div>
        <div class="topic-header-right">
          <button class="quick-done-btn ${isComplete ? 'hidden' : ''}" data-tid="${topic.id}" title="Mark Topic Finished">Finish</button>
          <div class="topic-pct">${pct}%</div>
          <div class="chevron">${isExpanded ? "▲" : "▼"}</div>
        </div>
      </div>

      <div class="topic-progress-bar-wrap">
        <div class="topic-progress-bar" style="width:${pct}%"></div>
      </div>

      <div class="section-mini-bars">
        <div class="mini-bar-row">
          <span class="mini-label">🎬 Video</span>
          <div class="mini-bar-track"><div class="mini-bar video-bar" style="width:${vidPct}%"></div></div>
          <span class="mini-pct">${vidPct}%</span>
        </div>
        <div class="mini-bar-row">
          <span class="mini-label">📚 NCERT</span>
          <div class="mini-bar-track"><div class="mini-bar ncert-bar" style="width:${ncertPct}%"></div></div>
          <span class="mini-pct">${ncertPct}%</span>
        </div>
        <div class="mini-bar-row">
          <span class="mini-label">📝 PYQ</span>
          <div class="mini-bar-track"><div class="mini-bar pyq-bar" style="width:${pyqPct}%"></div></div>
          <span class="mini-pct">${pyqPct}%</span>
        </div>
      </div>

      ${isExpanded ? renderTopicExpanded(topic) : ""}
    `;

    container.appendChild(card);
  });
}

function renderTopicExpanded(topic) {
  const data = getActiveData();
  const ts = data[topic.id];

  const videoTags = topic.videoLectures.map(v => `<span class="tag video-tag">🎬 ${v}</span>`).join("");
  const pyqTags   = topic.pyqChapters.map(p => `<span class="tag pyq-tag">📝 ${p}</span>`).join("");

  let subtopicRows = topic.subtopics.map(sub => {
    const ss = ts?.subtopics?.[sub.id] || {};
    const complete = ss.video && ss.ncert && ss.pyq;
    const ncertText = sub.ncert.map(n => `Class ${n.class}: ${n.chapter}`).join("; ");
    return `
      <div class="subtopic-row ${complete ? "sub-complete" : ""}" data-tid="${topic.id}" data-sid="${sub.id}">
        <div class="sub-name">${complete ? "✓ " : ""}${sub.name}</div>
        <div class="sub-ncert">📘 ${ncertText}</div>
        <div class="sub-checks">
          <label class="check-pill ${ss.video ? "checked" : ""}">
            <input type="checkbox" data-tid="${topic.id}" data-sid="${sub.id}" data-section="video" ${ss.video ? "checked" : ""}>
            🎬 Video
          </label>
          <label class="check-pill ${ss.ncert ? "checked" : ""}">
            <input type="checkbox" data-tid="${topic.id}" data-sid="${sub.id}" data-section="ncert" ${ss.ncert ? "checked" : ""}>
            📚 NCERT
          </label>
          <label class="check-pill ${ss.pyq ? "checked" : ""}">
            <input type="checkbox" data-tid="${topic.id}" data-sid="${sub.id}" data-section="pyq" ${ss.pyq ? "checked" : ""}>
            📝 PYQ
          </label>
        </div>
      </div>`;
  }).join("");

  return `
    <div class="topic-expanded">
      <div class="expanded-tags">
        <div class="tag-row">${videoTags}</div>
        <div class="tag-row">${pyqTags}</div>
      </div>
      <div class="subtopics-list">
        <div class="sub-header-row">
          <span>Subtopic</span>
          <span>Actions</span>
        </div>
        ${subtopicRows}
      </div>
    </div>`;
}

function renderDashboard() {
  const container = document.getElementById("topics-container");
  const overall   = getOverallProgress();
  const counts    = getTotalCounts();
  // Simplified for performance in v3
  
  const topicRows = MASTER_DATA.map(topic => {
    const { pct } = getSubtopicProgress(topic.id);
    return `
      <div class="dash-topic-row">
        <div class="dash-topic-name">${getTopicEmoji(topic.id)} ${topic.name}</div>
        <div class="dash-track-wrap">
          <div class="dash-track"><div class="dash-fill" style="width:${pct}%"></div></div>
        </div>
        <div class="dash-topic-stat">${pct}%</div>
      </div>`;
  }).join("");

  container.innerHTML = `
    <div class="dashboard">
      <div class="dash-card">
        <div class="dash-card-title">📈 Topic-wise Progress</div>
        ${topicRows}
      </div>
    </div>`;
}

function buildReadiness() {
  const sections = [
    { key: "video", label: "🎬 Video Lectures", color: "#FF6B6B" },
    { key: "ncert", label: "📚 NCERT Reading",  color: "#4ECDC4" },
    { key: "pyq",   label: "📝 PYQ Practice",   color: "#45B7D1" },
  ];
  return sections.map(sec => {
    let total = 0, done = 0;
    MASTER_DATA.forEach(topic => {
      topic.subtopics.forEach(sub => {
        total++;
        if (state[topic.id]?.subtopics?.[sub.id]?.[sec.key]) done++;
      });
    });
    const pct = total ? Math.round((done / total) * 100) : 0;
    return `
      <div class="readiness-row">
        <div class="readiness-label">${sec.label}</div>
        <div class="readiness-track">
          <div class="readiness-fill" style="width:${pct}%;background:${sec.color}"></div>
        </div>
        <div class="readiness-stat">${done}/${total} (${pct}%)</div>
      </div>`;
  }).join("");
}

function buildActivityChart(dates, activity) {
  if (dates.length === 0) {
    return `<div class="no-activity">No activity recorded yet. Start marking subtopics as done!</div>`;
  }
  const max = Math.max(...dates.map(d => activity[d]));
  // Show last 14 days or all dates
  const show = dates.slice(-14);
  const bars = show.map(d => {
    const val = activity[d];
    const h   = max ? Math.round((val / max) * 100) : 0;
    const label = d.slice(5); // MM-DD
    return `
      <div class="act-bar-col">
        <div class="act-bar-wrap">
          <div class="act-bar" style="height:${h}%" title="${val} actions on ${d}"></div>
        </div>
        <div class="act-label">${label}</div>
      </div>`;
  }).join("");

  return `<div class="activity-chart">${bars}</div>`;
}

function getTopicEmoji(id) {
  const map = {
    number_system: "🔢", percentage: "💯", ratio_proportion: "⚖️",
    arithmetic: "🧮", algebra: "🔣", geometry: "📐",
    mensuration: "📏", coordinate_geometry: "🗺️", trigonometry: "📡",
    statistics: "📊", probability: "🎲", advanced: "🚀"
  };
  return map[id] || "📌";
}

// ──────────────────────────────────────────────
// EVENT HANDLERS
// ──────────────────────────────────────────────
// ──────────────────────────────────────────────
// EVENT HANDLERS
// ──────────────────────────────────────────────
document.addEventListener("change", (e) => {
  const input = e.target;
  if (input.type !== "checkbox") return;
  if (!input.dataset.tid) return;

  const { tid, sid, section } = input.dataset;
  const data = getActiveData();
  const ss = data[tid]?.subtopics?.[sid];
  if (!ss) return;

  const dateKey = section + "Date";
  if (input.checked) {
    ss[section]  = true;
    ss[dateKey]  = today();
  } else {
    ss[section]  = false;
    ss[dateKey]  = null;
  }
  saveState();
  renderApp();
});

document.addEventListener("click", (e) => {
  // --- HUB ACTIONS ---
  if (e.target.id === "add-profile-btn") {
    const name = prompt("Enter Version/Profile Name:", `Revision ${Object.keys(appState.profiles).length + 1}`);
    if (name) {
      createNewProfile(name);
      renderApp();
    }
  }

  const pBtn = e.target.closest(".p-btn");
  if (pBtn) {
    const id = pBtn.dataset.id;
    if (pBtn.classList.contains("open")) {
      appState.activeProfileId = id;
      renderApp();
    } else if (pBtn.classList.contains("copy")) {
      duplicateProfile(id);
      renderApp();
    } else if (pBtn.classList.contains("delete")) {
      if (confirm("Delete this version forever?")) {
        deleteProfile(id);
        renderApp();
      }
    }
    return;
  }

  // --- TRACKER ACTIONS ---
  if (e.target.id === "go-home-btn") {
    appState.activeProfileId = null;
    renderApp();
    return;
  }

  // Topic header toggle
  const header = e.target.closest(".topic-header");
  const quickBtn = e.target.closest(".quick-done-btn");
  
  if (quickBtn) {
    e.stopPropagation();
    const tid = quickBtn.dataset.tid;
    const topic = MASTER_DATA.find(t => t.id === tid);
    const data = getActiveData();
    topic.subtopics.forEach(sub => {
      const ss = data[tid].subtopics[sub.id];
      ["video","ncert","pyq"].forEach(sec => {
        if (!ss[sec]) {
          ss[sec] = true;
          ss[sec+"Date"] = today();
        }
      });
    });
    saveState();
    renderApp();
    return;
  }

  if (header) {
    const id = header.dataset.id;
    if (expandedTopics.has(id)) {
      expandedTopics.delete(id);
    } else {
      expandedTopics.add(id);
    }
    renderApp();
    return;
  }

  // Tab switch
  const tabBtn = e.target.closest(".tab-btn");
  if (tabBtn) {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    tabBtn.classList.add("active");
    activeTab = tabBtn.dataset.tab;
    renderApp();
    return;
  }

  // Filter buttons
  const filterBtn = e.target.closest(".filter-btn");
  if (filterBtn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    filterBtn.classList.add("active");
    activeFilter = filterBtn.dataset.filter;
    renderTopicsView();
    return;
  }

  // Reset
  if (e.target.id === "reset-btn") {
    if (confirm("⚠️ Erase all progress in THIS version?")) {
      const id = appState.activeProfileId;
      const name = appState.profiles[id].name;
      deleteProfile(id);
      createNewProfile(name); // Re-create fresh
      appState.activeProfileId = Object.keys(appState.profiles).pop();
      renderApp();
    }
    return;
  }

  // Expand All / Collapse All
  if (e.target.id === "expand-all") {
    MASTER_DATA.forEach(t => expandedTopics.add(t.id));
    renderApp();
    return;
  }
  if (e.target.id === "collapse-all") {
    expandedTopics.clear();
    renderApp();
    return;
  }
});

// ──────────────────────────────────────────────
// SERVICE WORKER REGISTRATION
// ──────────────────────────────────────────────
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(err => {
      console.warn("SW registration failed:", err);
    });
  });
}

// ──────────────────────────────────────────────
// BOOT
// ──────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  loadState();
  reconcileState();
  renderApp();
});
