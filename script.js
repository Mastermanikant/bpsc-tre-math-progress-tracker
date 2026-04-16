// ============================================================
// BPSC TEACHER RECRUITMENT EXAM – PROGRESS TRACKER v3.2
// script.js – Multi-Profile Logic + Revision Tracking
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
      { id: "me_05", name: "Surface Area – Concept of Cone", ncert: [{ class: 9,  chapter: "Chapter 13 – Surface Areas and Volumes" }] },
      { id: "me_06", name: "Volume (3D)",                   ncert: [{ class: 8,  chapter: "Chapter 11 – Mensuration" }] },
    ]
  },
  {
    id: "trigonometry",
    name: "Trigonometry",
    weight: 10,
    videoLectures: ["Trigonometry"],
    pyqChapters: ["त्रिकोणमिति"],
    subtopics: [
      { id: "tr_01", name: "Trig Ratios",                   ncert: [{ class: 10, chapter: "Chapter 8 – Introduction to Trigonometry" }] },
      { id: "tr_02", name: "Height & Distance",             ncert: [{ class: 10, chapter: "Chapter 9 – Some Applications of Trigonometry" }] },
    ]
  },
  {
    id: "statistics",
    name: "Statistics",
    weight: 7,
    videoLectures: ["Statistics"],
    pyqChapters: ["सांख्यिकी"],
    subtopics: [
      { id: "st_01", name: "Mean, Median, Mode",            ncert: [{ class: 10, chapter: "Chapter 14 – Statistics" }] },
    ]
  },
  {
    id: "probability",
    name: "Probability",
    weight: 7,
    videoLectures: ["Probability"],
    pyqChapters: ["प्रायिकता"],
    subtopics: [
      { id: "pr_01", name: "Basic Probability",             ncert: [{ class: 10, chapter: "Chapter 15 – Probability" }] },
    ]
  }
];

// ──────────────────────────────────────────────
// STATE MANAGEMENT (v3.2)
// ──────────────────────────────────────────────
const STORAGE_KEY = "bpsc_tracker_v3";
let appState = {
  activeProfileId: null,
  profiles: {}
};

function init() {
  loadState();
  renderApp();
  setupInstallPrompt();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && !parsed.profiles) {
         // Legacy Migration
         const defaultId = "p_migrated";
         appState = { activeProfileId: null, profiles: { [defaultId]: { id: defaultId, name: "Legacy Data", createdAt: new Date().toISOString(), data: parsed } } };
         saveState();
      } else {
        appState = parsed;
      }
      // Migration for 'revisions' field in topics
      Object.keys(appState.profiles).forEach(pid => {
        const profile = appState.profiles[pid];
        Object.keys(profile.data).forEach(tid => {
          if (!profile.data[tid].revisions) {
            profile.data[tid].revisions = [];
          }
        });
      });
    } else {
      createNewProfile("Revision V1 (Start)");
    }
  } catch (e) {
    appState = { activeProfileId: null, profiles: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function createNewProfile(name) {
  const id = "p_" + Date.now();
  const profileData = {};
  MASTER_DATA.forEach(topic => {
    profileData[topic.id] = { subtopics: {}, revisions: [] };
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
    name: name || `Revision ${Object.keys(appState.profiles).length + 1}`,
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
  const copy = JSON.parse(JSON.stringify(original));
  copy.id = newId; copy.name += " (Copy)"; copy.createdAt = new Date().toISOString();
  appState.profiles[newId] = copy;
  saveState();
}

// ──────────────────────────────────────────────
// CALCULATION LOGIC
// ──────────────────────────────────────────────
function getActiveData() {
  const profile = appState.profiles[appState.activeProfileId];
  return profile ? profile.data : {};
}

function getSubtopicProgress(topicId, profileId) {
  const pid = profileId || appState.activeProfileId;
  const profile = appState.profiles[pid];
  if (!profile) return { done: 0, total: 0, pct: 0 };
  const topic = MASTER_DATA.find(t => t.id === topicId);
  const total = topic.subtopics.length;
  let done = 0;
  topic.subtopics.forEach(sub => {
    const s = profile.data[topicId]?.subtopics?.[sub.id];
    if (s && s.video && s.ncert && s.pyq) done++;
  });
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getOverallProgress(profileId) {
  const targetId = profileId || appState.activeProfileId;
  const profile = appState.profiles[targetId];
  if (!profile) return 0;
  const totalWeight = MASTER_DATA.reduce((a, t) => a + t.weight, 0);
  let weightedProgress = 0;
  MASTER_DATA.forEach(topic => {
    const { pct } = getSubtopicProgress(topic.id, targetId);
    weightedProgress += (pct * (topic.weight / totalWeight));
  });
  return Math.round(weightedProgress);
}

function getTotalCounts() {
  let doneSubs = 0, totalSubs = 0;
  MASTER_DATA.forEach(topic => {
    const p = getSubtopicProgress(topic.id);
    doneSubs += p.done; totalSubs += p.total;
  });
  return { doneSubs, totalSubs, pendingSubs: totalSubs - doneSubs };
}

// ──────────────────────────────────────────────
// UI RENDERING
// ──────────────────────────────────────────────
let activeTab = "topics", activeFilter = "all", expandedTopics = new Set();

function renderApp() {
  if (appState.activeProfileId === null) renderHome();
  else renderTracker();
}

function renderHome() {
  const container = document.getElementById("topics-container");
  const header    = document.getElementById("app-header");
  const controls = document.getElementById("controls-bar"), tabs = document.querySelector(".tabs-bar"), bnav = document.querySelector(".bottom-nav");
  if (controls) controls.style.display = "none";
  if (tabs) tabs.style.display = "none";
  if (bnav) bnav.style.display = "none";

  header.innerHTML = `
    <div class="header-top">
      <div>
        <div class="app-title">🏠 Preparation Hub</div>
        <div class="app-subtitle">Multi-Version Tracking Engine</div>
      </div>
      <button class="icon-btn" id="add-profile-btn" style="color:var(--accent3)">+ New Version</button>
    </div>
  `;

  let profilesHtml = Object.values(appState.profiles)
    .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(p => {
      const pct = getOverallProgress(p.id);
      return `
        <div class="profile-card">
          <div class="p-card-header">
            <div class="p-name">${p.name}</div>
            <div class="p-date">Created: ${formatDateSimple(p.createdAt)}</div>
          </div>
          <div class="p-card-body">
            <div class="p-pct-large">${pct}%</div>
            <div class="p-bar"><div class="p-bar-fill" style="width:${pct}%"></div></div>
          </div>
          <div class="p-card-footer">
            <button class="p-btn open" data-id="${p.id}">Open</button>
            <button class="p-btn delete" data-id="${p.id}" title="Delete">🗑️</button>
          </div>
        </div>
      `;
    }).join("");

  container.innerHTML = `<div class="profile-hub"><div class="hub-grid">${profilesHtml || "<p>Create a version to start tracking!</p>"}</div></div>`;
}

function renderTracker() {
  const profile = appState.profiles[appState.activeProfileId];
  if (!profile) { appState.activeProfileId = null; renderHome(); return; }
  const controls = document.getElementById("controls-bar"), tabs = document.querySelector(".tabs-bar"), bnav = document.querySelector(".bottom-nav");
  if (controls && activeTab === "topics") controls.style.display = "flex";
  if (tabs && window.innerWidth >= 700) tabs.style.display = "flex";
  if (bnav) bnav.style.display = "flex";
  renderHeader();
  if (activeTab === "topics") renderTopicsView(); else renderDashboard();
}

function renderHeader() {
  const profile = appState.profiles[appState.activeProfileId], overall = getOverallProgress(), counts = getTotalCounts(), header = document.getElementById("app-header");
  header.innerHTML = `
    <div class="header-top">
      <div class="back-home-wrap"><button id="go-home-btn" class="back-btn">←</button>
        <div><div class="app-title">${profile.name}</div><div class="app-subtitle">${overall}% Readiness</div></div>
      </div>
      <button class="icon-btn" id="reset-btn" style="color:var(--accent2)">↺ Reset</button>
    </div>
    <div class="overall-progress-wrap"><div id="top-progress-bar" style="width:${overall}%"></div></div>
    <div class="stats-strip">
      <div class="stat-item"><span class="stat-num overall">${overall}%</span><span class="stat-lbl">Done</span></div>
      <span class="stat-sep">|</span>
      <div class="stat-item"><span class="stat-num done">${counts.doneSubs}</span><span class="stat-lbl">Topics</span></div>
      <span class="stat-sep">|</span>
      <div class="stat-item"><span class="stat-num pending">${counts.pendingSubs}</span><span class="stat-lbl">Left</span></div>
    </div>
  `;
}

function renderTopicsView() {
  const container = document.getElementById("topics-container");
  container.innerHTML = "";
  const data = getActiveData();

  MASTER_DATA.forEach(topic => {
    const { done, total, pct } = getSubtopicProgress(topic.id);
    const isExpanded = expandedTopics.has(topic.id);
    const isComplete = pct === 100;
    const revs = data[topic.id]?.revisions || [];

    if (activeFilter === "done" && !isComplete) return;
    if (activeFilter === "pending" && isComplete) return;

    const card = document.createElement("div");
    card.className = `topic-card ${isExpanded ? "expanded" : ""} ${isComplete ? "complete" : ""}`;
    card.innerHTML = `
      <div class="topic-header" data-id="${topic.id}">
        <div class="topic-header-left">
          <div class="topic-icon">${isComplete ? "✓" : getTopicEmoji(topic.id)}</div>
          <div>
            <div class="topic-name">${topic.name} ${revs.length ? `<span class="rev-count">Rev: ${revs.length}</span>` : ""}</div>
            <div class="topic-lbl" style="font-size:10px;color:var(--text3)">${done}/${total} subtopics • Wt: ${topic.weight}</div>
          </div>
        </div>
        <div class="topic-header-right">
          <button class="rev-btn" data-tid="${topic.id}" title="Add Revision">Rev +</button>
          <div class="topic-pct">${pct}%</div>
        </div>
      </div>
      <div class="topic-progress-bar-wrap"><div class="p-bar-fill" style="width:${pct}%;height:100%;background:var(--accent)"></div></div>
      ${isExpanded ? renderTopicExpanded(topic) : ""}
    `;
    container.appendChild(card);
  });
}

function renderTopicExpanded(topic) {
  const data = getActiveData()[topic.id]?.subtopics || {};
  const revs = getActiveData()[topic.id]?.revisions || [];
  
  const revHistory = revs.length ? `<div class="rev-history">Recent Revision: ${formatDateSimple(revs[revs.length-1])}</div>` : "";

  const rows = topic.subtopics.map(sub => {
    const s = data[sub.id] || {};
    const complete = s.video && s.ncert && s.pyq;
    return `
      <div class="subtopic-row ${complete ? "sub-complete" : ""}">
        <div class="sub-name">${sub.name}</div>
        <div class="sub-checks">
          <label class="check-pill ${s.video ? "checked" : ""}">
            <input type="checkbox" data-tid="${topic.id}" data-sid="${sub.id}" data-section="video" ${s.video ? "checked" : ""}> 
            🎬 Vid ${s.videoDate ? `<span class="chk-date">${formatDateSimple(s.videoDate)}</span>` : ""}
          </label>
          <label class="check-pill ${s.ncert ? "checked" : ""}">
            <input type="checkbox" data-tid="${topic.id}" data-sid="${sub.id}" data-section="ncert" ${s.ncert ? "checked" : ""}> 
            📚 Book ${s.ncertDate ? `<span class="chk-date">${formatDateSimple(s.ncertDate)}</span>` : ""}
          </label>
          <label class="check-pill ${s.pyq ? "checked" : ""}">
            <input type="checkbox" data-tid="${topic.id}" data-sid="${sub.id}" data-section="pyq" ${s.pyq ? "checked" : ""}> 
            📝 PYQ ${s.pyqDate ? `<span class="chk-date">${formatDateSimple(s.pyqDate)}</span>` : ""}
          </label>
        </div>
      </div>
    `;
  }).join("");
  return `<div class="topic-expanded">${revHistory}${rows}</div>`;
}

function renderDashboard() {
  const container = document.getElementById("topics-container");
  const rows = MASTER_DATA.map(t => { const { pct } = getSubtopicProgress(t.id); return `<div class="dash-topic-row"><div class="dash-topic-name">${t.name}</div><div class="dash-track"><div class="dash-fill" style="width:${pct}%"></div></div><div class="dash-stat">${pct}%</div></div>`; }).join("");
  container.innerHTML = `<div class="dashboard"><div class="dash-card"><div class="dash-card-title">Syllabus Readiness</div>${rows}</div></div>`;
}

// ──────────────────────────────────────────────
// UTILS & HELPERS
// ──────────────────────────────────────────────
function formatDateSimple(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day:"numeric", month:"short" });
}
function getTopicEmoji(id) { const map = { number_system:"🔢", percentage:"💯", ratio_proportion:"⚖️", arithmetic:"🧮", algebra:"🔣", geometry:"📐", mensuration:"📏", trigonometry:"📡", statistics:"📊", probability:"🎲" }; return map[id] || "📘"; }

// ──────────────────────────────────────────────
// EVENTS
// ──────────────────────────────────────────────
document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.id === "add-profile-btn") {
    const name = prompt("Name this Version:", `Revision ${Object.keys(appState.profiles).length + 1}`);
    if (name) { createNewProfile(name); renderApp(); }
  }
  const pBtn = btn.closest(".p-btn");
  if (pBtn) {
    const id = pBtn.dataset.id;
    if (pBtn.classList.contains("open")) appState.activeProfileId = id;
    if (pBtn.classList.contains("delete")) if (confirm("Delete this version?")) deleteProfile(id);
    renderApp();
  }
  if (btn.id === "go-home-btn") { appState.activeProfileId = null; renderApp(); }
  const header = btn.closest(".topic-header");
  if (header && !btn.classList.contains("rev-btn")) {
    const id = header.dataset.id;
    if (expandedTopics.has(id)) expandedTopics.delete(id); else expandedTopics.add(id);
    renderApp();
  }
  if (btn.classList.contains("rev-btn")) {
    const tid = btn.dataset.tid;
    getActiveData()[tid].revisions.push(new Date().toISOString());
    saveState(); renderApp();
  }
  const tabBtn = btn.closest(".tab-btn");
  if (tabBtn) { activeTab = tabBtn.dataset.tab; document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b === tabBtn)); renderApp(); }
  const filBtn = btn.closest(".filter-btn");
  if (filBtn) { activeFilter = filBtn.dataset.filter; document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === filBtn)); renderTopicsView(); }
  if (btn.id === "reset-btn") {
     if (confirm("Reset THIS version?")) {
        const id = appState.activeProfileId, name = appState.profiles[id].name;
        deleteProfile(id); appState.activeProfileId = createNewProfile(name);
        renderApp();
     }
  }
});

document.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const { tid, sid, section } = e.target.dataset;
    const s = getActiveData()[tid].subtopics[sid];
    s[section] = e.target.checked;
    s[section + "Date"] = e.target.checked ? new Date().toISOString() : null;
    saveState(); renderApp();
  }
});

let deferredPrompt;
function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferredPrompt = e; const banner = document.getElementById('install-banner'); if (banner) banner.classList.remove('hidden'); });
}
function installApp() {
  if (!deferredPrompt) return; deferredPrompt.prompt();
  deferredPrompt.userChoice.then(() => { deferredPrompt = null; document.getElementById('install-banner').classList.add('hidden'); });
}

init();
