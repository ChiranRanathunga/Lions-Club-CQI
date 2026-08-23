// District 306 D6 — CQI Interactive Dashboard Engine

let currentSelectedClub = "Pelawatta";

function renderKPIs(clubs = CQI.clubs) {
  const healthy = clubs.filter(c => c.status === "green").length;
  const monitor = clubs.filter(c => c.status === "amber").length;
  const critical = clubs.filter(c => c.status === "red").length;

  const hEl = document.getElementById("kpiHealthy");
  const mEl = document.getElementById("kpiMonitor");
  const cEl = document.getElementById("kpiCritical");

  if (hEl) hEl.textContent = healthy;
  if (mEl) mEl.textContent = monitor;
  if (cEl) cEl.textContent = critical;
}

function renderHeatmap(clubs) {
  const tbody = document.getElementById("heatmapBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (clubs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:24px;color:var(--text-muted);">No clubs found matching criteria.</td></tr>`;
    return;
  }

  clubs.forEach(c => {
    const s = (st) => st === "green" ? '<div class="hm-cell hm-green" title="Healthy (Score: 3)">🟢</div>' : st === "amber" ? '<div class="hm-cell hm-amber" title="Under Monitor (Score: 2)">🟡</div>' : st === "red" ? '<div class="hm-cell hm-red" title="Critical/Mismatch (Score: 1)">🔴</div>' : '<div class="hm-cell hm-gray">⚪</div>';
    
    let alertBadge = `<span class="badge-status badge-green">✅ Verified</span>`;
    if (c.alert === "DATA MISMATCH") {
      alertBadge = `<span class="badge-status badge-red" style="background:rgba(239,68,68,0.15);color:#fca5a5;border:1px solid rgba(239,68,68,0.3);">🚨 DATA MISMATCH</span>`;
    } else if (c.alert === "HIDDEN ISSUES") {
      alertBadge = `<span class="badge-status badge-amber">⚠️ HIDDEN ISSUES</span>`;
    }

    const row = document.createElement("tr");
    row.style.cursor = "pointer";
    row.title = "Click to inspect full CQI dossier for " + c.name;
    row.onclick = () => openClubDossier(c.name);
    
    row.innerHTML = `
      <td><strong style="color:var(--gold);">${c.name}</strong> <span style="font-size:0.75rem;color:var(--text-muted);">🔍</span></td>
      <td><span style="font-size:.78rem;color:var(--text-primary);font-weight:600;">${c.region}</span></td>
      <td><span style="font-size:.78rem;color:var(--text-secondary);">${c.zone}</span></td>
      <td>${s("green")}</td>
      <td>${s(c.status)}</td>
      <td>${alertBadge}</td>
      <td>${s(c.self)}</td>
      <td>${s(c.leader || c.status)}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderAlerts(clubs) {
  const container = document.getElementById("alertsList");
  if (!container) return;
  const alerts = clubs.filter(c => c.alert);
  if (!alerts.length) {
    container.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:24px;">No mismatches detected across selected clubs ✅</p>';
    return;
  }
  container.innerHTML = alerts.map(c => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 18px;background:rgba(245,158,11,.06);border:1px solid var(--amber-border);border-radius:var(--r-md);margin-bottom:10px;flex-wrap:wrap;gap:10px;cursor:pointer;" onclick="openClubDossier('${c.name}')">
      <div>
        <strong style="font-size:.92rem;color:var(--gold);">${c.name}</strong>
        <span style="font-size:0.75rem;color:var(--text-muted);margin-left:6px;">(Click for full dossier ↗)</span><br>
        <span style="font-size:.75rem;color:var(--text-muted);">${c.region} · ${c.zone}</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
        <span class="badge-status ${c.alert === 'DATA MISMATCH' ? 'badge-red' : 'badge-amber'}">${c.alert === 'DATA MISMATCH' ? '🚨 DATA MISMATCH' : '⚠️ HIDDEN ISSUES'}</span>
        <span style="font-size:.75rem;color:var(--text-secondary);">Self Status: ${c.self === 'green' ? '🟢 Green' : c.self} | Leader Audit: ${c.leader === 'red' ? '🔴 Red Critical' : c.leader === 'amber' ? '🟡 Amber Warning' : c.leader}</span>
      </div>
    </div>`).join("");
}

function renderSolutions(clubFilter = null) {
  const container = document.getElementById("solutionsList");
  if (!container) return;
  
  let list = CQI.solutions;
  if (clubFilter) {
    list = list.filter(s => s.club.toLowerCase() === clubFilter.toLowerCase());
  }

  if (list.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:20px;">No anonymous member solution entries recorded yet for this selection.</p>`;
    return;
  }

  container.innerHTML = list.map(s => `
    <div style="padding:18px;background:var(--glass);border:1px solid var(--glass-border);border-radius:var(--r-md);margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
        <span style="font-size:.75rem;font-weight:700;color:var(--gold);background:rgba(197,155,39,0.15);padding:3px 8px;border-radius:4px;">${s.domain}</span>
        <span style="font-size:.72rem;color:var(--text-muted);">${s.club} · ${s.date}</span>
      </div>
      <p style="font-size:.84rem;margin-bottom:8px;color:var(--text-secondary);">👁️ <strong>Observation:</strong> <em>"${s.observation}"</em></p>
      <p style="font-size:.84rem;color:var(--green);">💡 <strong>Proposed Solution:</strong> ${s.solution}</p>
      ${s.status ? `<div style="margin-top:6px;font-size:0.72rem;color:var(--text-muted);">Status: <span style="color:var(--gold);">${s.status}</span></div>` : ''}
    </div>`).join("");
}

// Single Club Specific View for Tier 3 (Club Officer Mode)
function renderClubOfficerView(clubName) {
  currentSelectedClub = clubName;
  const dossier = CQI.getClubDossier(clubName);
  const container = document.getElementById("clubOfficerSection");
  if (!container) return;

  const c = dossier.club;
  const sync = dossier.sync;
  const visit = dossier.visit;

  const isMismatch = c.alert === "DATA MISMATCH";
  const isHidden = c.alert === "HIDDEN ISSUES";

  container.innerHTML = `
    <div class="section-card" style="border: 2px solid ${isMismatch ? 'rgba(239,68,68,0.5)' : isHidden ? 'rgba(245,158,11,0.5)' : 'var(--gold-border)'};">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px;margin-bottom:20px;">
        <div>
          <div style="display:flex;align-items:center;gap:10px;">
            <h2 style="font-size:1.5rem;color:#fff;margin:0;">${c.name} Lions Club</h2>
            <span class="badge-status ${c.status === 'green' ? 'badge-green' : c.status === 'amber' ? 'badge-amber' : 'badge-red'}">
              ${c.status === 'green' ? '🟢 HEALTHY' : c.status === 'amber' ? '🟡 MONITOR' : '🔴 CRITICAL'}
            </span>
          </div>
          <p style="font-size:0.85rem;color:var(--text-secondary);margin:4px 0 0;">
            ${c.region} · ${c.zone} | Act as Club Officer Persona
          </p>
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm" onclick="openClubDossier('${c.name}')">🔍 Full CQI Dossier</button>
          <a href="toolkits/sync.html" class="btn btn-outline btn-sm">🔄 Monthly Health Sync (T1.3)</a>
          <a href="toolkits/meeting.html" class="btn btn-outline btn-sm">⏱️ Meeting Heartbeat (T1.1A)</a>
        </div>
      </div>

      ${isMismatch ? `
        <div style="background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.4);border-radius:var(--r-md);padding:14px 18px;margin-bottom:20px;">
          <h4 style="color:#fca5a5;margin:0 0 4px;font-size:0.95rem;">🚨 Cross-Validation Data Mismatch Flagged!</h4>
          <p style="color:var(--text-secondary);font-size:0.82rem;margin:0;">
            The Club self-reported status is <strong>🟢 Green</strong>, but external Zone Chair Visit Audit (Toolkit 2.2) recorded a <strong>🔴 Critical Red</strong> state.
            <br><em>Audit note: "${visit.hiddenIssues}"</em>
          </p>
        </div>
      ` : isHidden ? `
        <div style="background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.4);border-radius:var(--r-md);padding:14px 18px;margin-bottom:20px;">
          <h4 style="color:var(--gold);margin:0 0 4px;font-size:0.95rem;">⚠️ Hidden Issues Detected</h4>
          <p style="color:var(--text-secondary);font-size:0.82rem;margin:0;">
            <em>Note from Zone Leadership: "${visit.hiddenIssues}"</em>
          </p>
        </div>
      ` : ''}

      <!-- 5 Pillar Health Grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));gap:12px;margin-bottom:24px;">
        <div style="background:var(--surface);padding:14px;border-radius:var(--r-md);border:1px solid var(--border-subtle);text-align:center;">
          <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">1. Membership</div>
          <div style="font-size:1.4rem;font-weight:700;color:var(--gold);margin:4px 0;">${sync.membership}/5</div>
          <div style="font-size:0.7rem;color:var(--green);">Vitality Score</div>
        </div>
        <div style="background:var(--surface);padding:14px;border-radius:var(--r-md);border:1px solid var(--border-subtle);text-align:center;">
          <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">2. Leadership</div>
          <div style="font-size:1.4rem;font-weight:700;color:var(--gold);margin:4px 0;">${sync.leadership}/5</div>
          <div style="font-size:0.7rem;color:var(--green);">Decision Harmony</div>
        </div>
        <div style="background:var(--surface);padding:14px;border-radius:var(--r-md);border:1px solid var(--border-subtle);text-align:center;">
          <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">3. Governance/Admin</div>
          <div style="font-size:1.4rem;font-weight:700;color:var(--gold);margin:4px 0;">${sync.admin}/5</div>
          <div style="font-size:0.7rem;color:var(--green);">Dues & Financials</div>
        </div>
        <div style="background:var(--surface);padding:14px;border-radius:var(--r-md);border:1px solid var(--border-subtle);text-align:center;">
          <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">4. Service Projects</div>
          <div style="font-size:1.4rem;font-weight:700;color:var(--gold);margin:4px 0;">${sync.service}/5</div>
          <div style="font-size:0.7rem;color:var(--green);">Community Impact</div>
        </div>
        <div style="background:var(--surface);padding:14px;border-radius:var(--r-md);border:1px solid var(--border-subtle);text-align:center;">
          <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;">5. Meeting Vibe</div>
          <div style="font-size:1.4rem;font-weight:700;color:var(--gold);margin:4px 0;">${sync.fellowship}/5</div>
          <div style="font-size:0.7rem;color:var(--green);">Fellowship Level</div>
        </div>
      </div>

      <!-- Recent Club Activity Logs Grid -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
        <div style="background:var(--surface);padding:16px;border-radius:var(--r-md);border:1px solid var(--border-subtle);">
          <h4 style="font-size:0.85rem;color:var(--gold);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.05em;">⏱️ Recent Meeting Heartbeats (T1.1A)</h4>
          ${dossier.meetings.length ? dossier.meetings.map(m => `
            <div style="font-size:0.8rem;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <div style="display:flex;justify-content:space-between;color:var(--text-primary);font-weight:600;">
                <span>${m.date}</span>
                <span style="color:var(--green);">Engagement: ${m.vibeScore}/5 (${m.attendance}% Attendance)</span>
              </div>
              <p style="margin:4px 0 0;color:var(--text-secondary);">${m.notes}</p>
            </div>
          `).join("") : '<p style="font-size:0.8rem;color:var(--text-muted);">No meeting heartbeats recorded yet.</p>'}
        </div>

        <div style="background:var(--surface);padding:16px;border-radius:var(--r-md);border:1px solid var(--border-subtle);">
          <h4 style="font-size:0.85rem;color:var(--gold);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.05em;">📌 Post-Project Reflections (T1.1B)</h4>
          ${dossier.projects.length ? dossier.projects.map(p => `
            <div style="font-size:0.8rem;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
              <div style="display:flex;justify-content:space-between;color:var(--text-primary);font-weight:600;">
                <span>${p.project}</span>
                <span style="color:var(--gold);">${p.budgetAdherence}</span>
              </div>
              <p style="margin:4px 0 0;color:var(--text-secondary);">${p.beneficiaries} Beneficiaries reached. Takeaway: ${p.takeaways}</p>
            </div>
          `).join("") : '<p style="font-size:0.8rem;color:var(--text-muted);">No project checks recorded yet.</p>'}
        </div>
      </div>
    </div>
  `;
}

// Open Comprehensive Club CQI Dossier Modal
function openClubDossier(clubName) {
  const dossier = CQI.getClubDossier(clubName);
  const modal = document.getElementById("dossierModal");
  const modalBody = document.getElementById("dossierModalBody");
  if (!modal || !modalBody) return;

  const c = dossier.club;
  const sync = dossier.sync;
  const visit = dossier.visit;

  modalBody.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:20px;border-bottom:1px solid var(--glass-border);padding-bottom:16px;">
      <div>
        <h2 style="margin:0;font-size:1.4rem;color:#fff;">${c.name} Lions Club</h2>
        <span style="font-size:0.82rem;color:var(--text-muted);">${c.region} · ${c.zone} | Club Health Index Dossier</span>
      </div>
      <div style="text-align:right;">
        <span class="badge-status ${c.status === 'green' ? 'badge-green' : c.status === 'amber' ? 'badge-amber' : 'badge-red'}" style="font-size:0.9rem;">
          ${c.status === 'green' ? '🟢 Healthy' : c.status === 'amber' ? '🟡 Monitor' : '🔴 Critical Mismatch'}
        </span>
        <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Score: ${c.score}/3</div>
      </div>
    </div>

    <!-- Mismatch / Audit Analysis Box -->
    <div style="background:rgba(255,255,255,0.03);border:1px solid var(--glass-border);padding:16px;border-radius:var(--r-md);margin-bottom:20px;">
      <h3 style="font-size:0.85rem;color:var(--gold);margin:0 0 8px;text-transform:uppercase;letter-spacing:0.08em;">👁️ Toolkit 2.2 Leader's Visit Audit Card</h3>
      <p style="font-size:0.85rem;margin:0 0 6px;"><strong>Auditing Official:</strong> ${visit.visitingOfficer} (${visit.visitDate})</p>
      <p style="font-size:0.85rem;margin:0 0 6px;"><strong>Self Report vs Leader Audit:</strong> Self: ${c.self === 'green' ? '🟢 Green' : c.self} | Leader Audit: ${c.leader === 'green' ? '🟢 Green' : c.leader === 'amber' ? '🟡 Amber' : '🔴 Red Critical'}</p>
      <p style="font-size:0.85rem;margin:0 0 6px;color:var(--text-secondary);"><strong>Identified Findings:</strong> ${visit.hiddenIssues}</p>
      <p style="font-size:0.85rem;margin:0;color:var(--green);"><strong>Leadership Action Plan:</strong> ${visit.recommendedAction}</p>
    </div>

    <!-- 5 Pillar Health Breakdown -->
    <h3 style="font-size:0.85rem;color:var(--gold);margin:0 0 12px;text-transform:uppercase;letter-spacing:0.08em;">📊 Toolkit 1.3 Executive Health Sync (5 Pillars)</h3>
    <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:10px;margin-bottom:20px;text-align:center;">
      <div style="background:var(--surface);padding:10px;border-radius:var(--r-sm);border:1px solid var(--border-subtle);">
        <div style="font-size:0.7rem;color:var(--text-muted);">Membership</div>
        <div style="font-size:1.2rem;font-weight:700;color:var(--gold);">${sync.membership}/5</div>
      </div>
      <div style="background:var(--surface);padding:10px;border-radius:var(--r-sm);border:1px solid var(--border-subtle);">
        <div style="font-size:0.7rem;color:var(--text-muted);">Leadership</div>
        <div style="font-size:1.2rem;font-weight:700;color:var(--gold);">${sync.leadership}/5</div>
      </div>
      <div style="background:var(--surface);padding:10px;border-radius:var(--r-sm);border:1px solid var(--border-subtle);">
        <div style="font-size:0.7rem;color:var(--text-muted);">Governance</div>
        <div style="font-size:1.2rem;font-weight:700;color:var(--gold);">${sync.admin}/5</div>
      </div>
      <div style="background:var(--surface);padding:10px;border-radius:var(--r-sm);border:1px solid var(--border-subtle);">
        <div style="font-size:0.7rem;color:var(--text-muted);">Services</div>
        <div style="font-size:1.2rem;font-weight:700;color:var(--gold);">${sync.service}/5</div>
      </div>
      <div style="background:var(--surface);padding:10px;border-radius:var(--r-sm);border:1px solid var(--border-subtle);">
        <div style="font-size:0.7rem;color:var(--text-muted);">Fellowship</div>
        <div style="font-size:1.2rem;font-weight:700;color:var(--gold);">${sync.fellowship}/5</div>
      </div>
    </div>

    <!-- Member Solution Bank Submissions for this Club -->
    <h3 style="font-size:0.85rem;color:var(--gold);margin:0 0 12px;text-transform:uppercase;letter-spacing:0.08em;">💡 Toolkit 1.2 Anonymous Member Solution Bank</h3>
    ${dossier.solutions.length ? dossier.solutions.map(s => `
      <div style="padding:12px;background:rgba(255,255,255,0.02);border:1px solid var(--border-subtle);border-radius:var(--r-sm);margin-bottom:10px;font-size:0.82rem;">
        <div style="color:var(--gold);font-weight:600;margin-bottom:4px;">Domain: ${s.domain} (${s.date})</div>
        <p style="margin:0 0 4px;color:var(--text-secondary);">Observation: "${s.observation}"</p>
        <p style="margin:0;color:var(--green);">Proposed Solution: ${s.solution}</p>
      </div>
    `).join("") : '<p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:20px;">No member observations logged for this club yet.</p>'}

    <div style="margin-top:20px;text-align:right;">
      <button class="btn btn-glass" onclick="closeClubDossier()">Close Dossier</button>
      <button class="btn btn-primary" onclick="actAsClub('${c.name}')">Act as ${c.name} Officer ↗</button>
    </div>
  `;

  modal.style.display = "flex";
}

function closeClubDossier() {
  const modal = document.getElementById("dossierModal");
  if (modal) modal.style.display = "none";
}

function actAsClub(clubName) {
  closeClubDossier();
  const select = document.getElementById("personaClubSelect");
  if (select) {
    select.value = clubName;
    handlePersonaChange();
  }
}

function setupFilters(allClubs) {
  const regionFilter = document.getElementById("filterRegion");
  const zoneFilter = document.getElementById("filterZone");
  const searchInput = document.getElementById("searchClub");

  if (!regionFilter) return;

  regionFilter.innerHTML = '<option value="">All 10 Regions</option>';
  const regions = [...new Set(RAW_DISTRICT_CLUBS.map(c => c.region))].sort();
  regions.forEach(r => {
    const o = document.createElement("option");
    o.value = r;
    o.textContent = r;
    regionFilter.appendChild(o);
  });

  function applyFilter() {
    const rVal = regionFilter ? regionFilter.value : "";
    const zVal = zoneFilter ? zoneFilter.value : "";
    const qVal = searchInput ? searchInput.value.toLowerCase().trim() : "";

    let filtered = allClubs;
    if (rVal) filtered = filtered.filter(c => c.region === rVal);
    if (zVal) filtered = filtered.filter(c => c.zone === zVal);
    if (qVal) filtered = filtered.filter(c => c.name.toLowerCase().includes(qVal) || c.region.toLowerCase().includes(qVal));

    renderKPIs(filtered);
    renderHeatmap(filtered);
    renderAlerts(filtered);
  }

  regionFilter.addEventListener("change", applyFilter);
  if (zoneFilter) zoneFilter.addEventListener("change", applyFilter);
  if (searchInput) searchInput.addEventListener("input", applyFilter);
}

function populatePersonaSelects() {
  const regionSelect = document.getElementById("personaRegionSelect");
  const clubSelect = document.getElementById("personaClubSelect");

  if (regionSelect) {
    regionSelect.innerHTML = "";
    const regions = [...new Set(RAW_DISTRICT_CLUBS.map(c => c.region))].sort();
    regions.forEach(r => {
      const opt = document.createElement("option");
      opt.value = r;
      opt.textContent = `${r} Chairperson`;
      regionSelect.appendChild(opt);
    });
  }

  if (clubSelect) {
    clubSelect.innerHTML = "";
    RAW_DISTRICT_CLUBS.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.name;
      opt.textContent = `${c.name} (${c.status === 'green' ? '🟢 Healthy' : c.status === 'amber' ? '🟡 Monitor' : '🔴 Critical'})`;
      clubSelect.appendChild(opt);
    });
  }
}

function handlePersonaChange() {
  const mode = document.getElementById("personaModeSelect")?.value || "tier1";
  const regionVal = document.getElementById("personaRegionSelect")?.value || "Region 1A";
  const clubVal = document.getElementById("personaClubSelect")?.value || "Pelawatta";

  const tierBadge = document.getElementById("tierBadge");
  const t1 = document.getElementById("tier1Only");
  const filterBar = document.getElementById("filterBar");
  const heatmapCard = document.getElementById("heatmap");
  const alertsCard = document.getElementById("alerts");
  const clubOfficerSection = document.getElementById("clubOfficerSection");
  const personaRegionContainer = document.getElementById("personaRegionContainer");
  const personaClubContainer = document.getElementById("personaClubContainer");

  if (mode === "tier1") {
    if (personaRegionContainer) personaRegionContainer.style.display = "none";
    if (personaClubContainer) personaClubContainer.style.display = "none";
    if (tierBadge) tierBadge.textContent = "🔑 Governor View (District-Wide 88 Clubs)";
    if (t1) t1.style.display = "block";
    if (filterBar) filterBar.style.display = "flex";
    if (heatmapCard) heatmapCard.style.display = "block";
    if (alertsCard) alertsCard.style.display = "block";
    if (clubOfficerSection) clubOfficerSection.style.display = "none";

    renderKPIs(CQI.clubs);
    renderHeatmap(CQI.clubs);
    renderAlerts(CQI.clubs);
    renderSolutions();
    setupFilters(CQI.clubs);
  } else if (mode === "tier2") {
    if (personaRegionContainer) personaRegionContainer.style.display = "inline-block";
    if (personaClubContainer) personaClubContainer.style.display = "none";
    if (tierBadge) tierBadge.textContent = `📍 ${regionVal} Chairperson View (Jurisdiction)`;
    if (t1) t1.style.display = "none"; // Hide Cross-Validation Alerts according to Phase 5 architecture rules to avoid ego clash
    if (filterBar) filterBar.style.display = "flex";
    if (heatmapCard) heatmapCard.style.display = "block";
    if (alertsCard) alertsCard.style.display = "none"; // Phase 5 rule
    if (clubOfficerSection) clubOfficerSection.style.display = "none";

    const regionClubs = CQI.clubs.filter(c => c.region === regionVal);
    renderKPIs(regionClubs);
    renderHeatmap(regionClubs);
    renderSolutions();
    setupFilters(regionClubs);
  } else { // tier3 - Act as Club Officer
    if (personaRegionContainer) personaRegionContainer.style.display = "none";
    if (personaClubContainer) personaClubContainer.style.display = "inline-block";
    if (tierBadge) tierBadge.textContent = `🏠 ${clubVal} Club Officer View (Single Club)`;
    if (t1) t1.style.display = "none";
    if (filterBar) filterBar.style.display = "none";
    if (heatmapCard) heatmapCard.style.display = "none";
    if (alertsCard) alertsCard.style.display = "none";
    if (clubOfficerSection) clubOfficerSection.style.display = "block";

    renderClubOfficerView(clubVal);
    renderSolutions(clubVal);
  }
}

function demoLogin(tier, email, name, region = null) {
  sessionStorage.setItem("cqi_tier", tier);
  sessionStorage.setItem("cqi_email", email);
  sessionStorage.setItem("cqi_name", name);
  if (region) sessionStorage.setItem("cqi_region", region);

  const clubName = CQI.getClubByEmail(email);

  document.getElementById("loginGate").style.display = "none";
  document.getElementById("dashApp").style.display = "grid";
  document.getElementById("dashUserName").textContent = name;

  const modeSelect = document.getElementById("personaModeSelect");
  if (modeSelect) modeSelect.value = tier;
  
  if (region) {
    const regSelect = document.getElementById("personaRegionSelect");
    if (regSelect) regSelect.value = region;
  }
  
  if (clubName) {
    const clubSelect = document.getElementById("personaClubSelect");
    if (clubSelect) clubSelect.value = clubName;
  }

  handlePersonaChange();
}

document.addEventListener("DOMContentLoaded", () => {
  populatePersonaSelects();
  renderSolutions();

  const modeSelect = document.getElementById("personaModeSelect");
  const regSelect = document.getElementById("personaRegionSelect");
  const clubSelect = document.getElementById("personaClubSelect");

  if (modeSelect) modeSelect.addEventListener("change", handlePersonaChange);
  if (regSelect) regSelect.addEventListener("change", handlePersonaChange);
  if (clubSelect) clubSelect.addEventListener("change", handlePersonaChange);

  const tier = sessionStorage.getItem("cqi_tier") || "tier1";
  const email = sessionStorage.getItem("cqi_email") || "";
  const name = sessionStorage.getItem("cqi_name") || "District Governor";

  if (sessionStorage.getItem("cqi_email")) {
    document.getElementById("loginGate").style.display = "none";
    document.getElementById("dashApp").style.display = "grid";
    document.getElementById("dashUserName").textContent = name;
  }

  handlePersonaChange();

  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    sessionStorage.clear();
    location.reload();
  });
});

window.demoLogin = demoLogin;
window.handlePersonaChange = handlePersonaChange;
window.openClubDossier = openClubDossier;
window.closeClubDossier = closeClubDossier;
window.actAsClub = actAsClub;
