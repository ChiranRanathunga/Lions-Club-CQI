// District 306 D6 — Official Real Club Structure (88 Lions Clubs across 10 Regions)
const RAW_DISTRICT_CLUBS = [
  // Region 1A
  { id: 1, name: "Pelawatta", region: "Region 1A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 2, name: "Wickramasinghepura", region: "Region 1A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 3, name: "Colombo Legends United", region: "Region 1A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 4, name: "Colombo Wisdom", region: "Region 1A", zone: "Zone 1", status: "amber", self: "green", leader: "amber", score: 2 },
  { id: 5, name: "Battaramulla", region: "Region 1A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 6, name: "Colombo Wekanda", region: "Region 1A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 7, name: "Thalangama South New Century", region: "Region 1A", zone: "Zone 2", status: "amber", self: "green", leader: "amber", score: 2, alert: "HIDDEN ISSUES" },
  { id: 8, name: "Colombo Skyline", region: "Region 1A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },

  // Region 1B
  { id: 9, name: "Sri Jayawardena Pitakotte", region: "Region 1B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 10, name: "Thalangama South", region: "Region 1B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 11, name: "Battaramulla Central", region: "Region 1B", zone: "Zone 1", status: "amber", self: "amber", leader: "amber", score: 2 },
  { id: 12, name: "Sri Jayawardenapura Pearl", region: "Region 1B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 13, name: "Colombo Maitland", region: "Region 1B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 14, name: "Pita Kotte", region: "Region 1B", zone: "Zone 2", status: "red", self: "green", leader: "red", score: 1, alert: "DATA MISMATCH" },

  // Region 2A
  { id: 15, name: "Diyawanna Nadee", region: "Region 2A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 16, name: "Battharamulla Centennial Paradise", region: "Region 2A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 17, name: "Gothatuwa DLeoz", region: "Region 2A", zone: "Zone 1", status: "amber", self: "green", leader: "amber", score: 2 },
  { id: 18, name: "Kolonnawa", region: "Region 2A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 19, name: "Colombo Ceylon Excellence", region: "Region 2A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 20, name: "Colombo Grand Excellence", region: "Region 2A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 21, name: "Gothatuwa New Century Leo", region: "Region 2A", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },
  { id: 22, name: "Gothatuwa New Town", region: "Region 2A", zone: "Zone 3", status: "amber", self: "amber", leader: "amber", score: 2 },
  { id: 23, name: "Colombo Superior", region: "Region 2A", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },
  { id: 24, name: "Colombo Techno Elegance", region: "Region 2A", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },

  // Region 2B
  { id: 25, name: "Mulleriyawa Royalty", region: "Region 2B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 26, name: "Kolonnawa Classic", region: "Region 2B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 27, name: "Kotikawatta Excellence", region: "Region 2B", zone: "Zone 1", status: "amber", self: "amber", leader: "amber", score: 2 },
  { id: 28, name: "Diyawannaoya Golden", region: "Region 2B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 29, name: "Kolomthota Excellence", region: "Region 2B", zone: "Zone 2", status: "red", self: "green", leader: "red", score: 1, alert: "DATA MISMATCH" },
  { id: 30, name: "Colombo Lumo", region: "Region 2B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 31, name: "Diyawannawa", region: "Region 2B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },
  { id: 32, name: "Kotikawatta", region: "Region 2B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },
  { id: 33, name: "Kotikawatta Centennial", region: "Region 2B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },

  // Region 3A
  { id: 34, name: "Colombo Royality", region: "Region 3A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 35, name: "Colombo Stratford", region: "Region 3A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 36, name: "Colombo Stratford City", region: "Region 3A", zone: "Zone 1", status: "amber", self: "green", leader: "amber", score: 2 },
  { id: 37, name: "Colombo Rosmead", region: "Region 3A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 38, name: "Colombo Centennial", region: "Region 3A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 39, name: "Colobo Pride", region: "Region 3A", zone: "Zone 2", status: "red", self: "amber", leader: "red", score: 1 },
  { id: 40, name: "Colombo Leads", region: "Region 3A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },

  // Region 3B
  { id: 41, name: "Colombo Heroes", region: "Region 3B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 42, name: "Colombo Cambridge", region: "Region 3B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 43, name: "Colombo Fort", region: "Region 3B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 44, name: "Colombo Elevate", region: "Region 3B", zone: "Zone 2", status: "amber", self: "amber", leader: "amber", score: 2 },
  { id: 45, name: "Colombo Eagles", region: "Region 3B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },

  // Region 4A
  { id: 46, name: "Hokandara", region: "Region 4A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 47, name: "Athurugiriya Cinnamon City", region: "Region 4A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 48, name: "Colombo Excellence", region: "Region 4A", zone: "Zone 1", status: "amber", self: "green", leader: "amber", score: 2 },
  { id: 49, name: "Oruwala", region: "Region 4A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 50, name: "Colombo Tea Taster", region: "Region 4A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 51, name: "Colombo Merchant Blend", region: "Region 4A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 52, name: "Athurugiriya", region: "Region 4A", zone: "Zone 2", status: "red", self: "green", leader: "red", score: 1, alert: "DATA MISMATCH" },
  { id: 53, name: "Colombo Super Elite", region: "Region 4A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 54, name: "Athurugiriya Elegance", region: "Region 4A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 55, name: "Colombo Elegance", region: "Region 4A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },

  // Region 4B
  { id: 56, name: "Thalangama Malabe", region: "Region 4B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 57, name: "Malabe Horizon", region: "Region 4B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 58, name: "Thalangama New Century", region: "Region 4B", zone: "Zone 1", status: "amber", self: "amber", leader: "amber", score: 2 },
  { id: 59, name: "Kaduwela", region: "Region 4B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 60, name: "Colombo Premier Elite", region: "Region 4B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 61, name: "Malabe Beyond Belief", region: "Region 4B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 62, name: "Malabe Supreme Elite", region: "Region 4B", zone: "Zone 2", status: "amber", self: "green", leader: "amber", score: 2 },
  { id: 63, name: "Colombo Green City", region: "Region 4B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 64, name: "Malabe Legacy", region: "Region 4B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 65, name: "Koswatta Elegance", region: "Region 4B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },
  { id: 66, name: "Thalangama Golden City", region: "Region 4B", zone: "Zone 3", status: "red", self: "amber", leader: "red", score: 1, alert: "HIDDEN ISSUES" },
  { id: 67, name: "Colombo Serendib", region: "Region 4B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },
  { id: 68, name: "Koswatta", region: "Region 4B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },

  // Region 5A
  { id: 69, name: "Hanwella Rajasingha Centennial", region: "Region 5A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 70, name: "Nawagamuwa", region: "Region 5A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 71, name: "Siyane Hanweli", region: "Region 5A", zone: "Zone 1", status: "amber", self: "amber", leader: "amber", score: 2 },
  { id: 72, name: "Gurubawila", region: "Region 5A", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 73, name: "Kelanimitiyawatha", region: "Region 5A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 74, name: "Kelanimitiyawatha Centennial", region: "Region 5A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 75, name: "Hanwelipura", region: "Region 5A", zone: "Zone 2", status: "amber", self: "green", leader: "amber", score: 2 },
  { id: 76, name: "Colombo Open Elite Legends", region: "Region 5A", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },

  // Region 5B
  { id: 77, name: "Avissawella New Century", region: "Region 5B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 78, name: "Avissawella Elegance", region: "Region 5B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 79, name: "Avissawella Silverline", region: "Region 5B", zone: "Zone 1", status: "green", self: "green", leader: "green", score: 3 },
  { id: 80, name: "Ruwanwella Royal", region: "Region 5B", zone: "Zone 1", status: "amber", self: "amber", leader: "amber", score: 2 },
  { id: 81, name: "Kosgama", region: "Region 5B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 82, name: "Ruwanwella Elite", region: "Region 5B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 83, name: "Avissawella Supreme", region: "Region 5B", zone: "Zone 2", status: "red", self: "green", leader: "red", score: 1, alert: "DATA MISMATCH" },
  { id: 84, name: "Yatiyanthota", region: "Region 5B", zone: "Zone 2", status: "green", self: "green", leader: "green", score: 3 },
  { id: 85, name: "Dehiowita Thunkorale", region: "Region 5B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },
  { id: 86, name: "Thalduwa", region: "Region 5B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 },
  { id: 87, name: "Dehiovita", region: "Region 5B", zone: "Zone 3", status: "amber", self: "green", leader: "amber", score: 2 },
  { id: 88, name: "Avissawella", region: "Region 5B", zone: "Zone 3", status: "green", self: "green", leader: "green", score: 3 }
];

// District Summary Calculator
const healthyCount = RAW_DISTRICT_CLUBS.filter(c => c.status === "green").length;
const monitorCount = RAW_DISTRICT_CLUBS.filter(c => c.status === "amber").length;
const criticalCount = RAW_DISTRICT_CLUBS.filter(c => c.status === "red").length;

// Pre-populated Form Responses based on attached Google Forms Architecture
const MOCK_MEETINGS = [
  { id: "M-101", club: "Pelawatta", date: "2026-08-15", month: "August 2026", coordinator: "Lion Nalin Perera", attendance: 88, agendaCompletion: 95, financeShared: true, vibeScore: 4.9, notes: "Full quorum reached. Monthly financial statement presented & adopted unanimously. Positive fellowship." },
  { id: "M-102", club: "Athurugiriya", date: "2026-08-14", month: "August 2026", coordinator: "Lion Sarath Gamage", attendance: 25, agendaCompletion: 40, financeShared: false, vibeScore: 2.1, notes: "Only 4 members attended in person. Tabled financial accounts were disputed; meeting adjourned early due to lack of quorum." },
  { id: "M-103", club: "Pita Kotte", date: "2026-08-12", month: "August 2026", coordinator: "Lion K. Wickramasinghe", attendance: 30, agendaCompletion: 50, financeShared: false, vibeScore: 2.5, notes: "President conducted meeting without formal agenda. Secretary absent, minutes pending from July." },
  { id: "M-104", club: "Thalangama South New Century", date: "2026-08-11", month: "August 2026", coordinator: "Lion Samantha Silva", attendance: 70, agendaCompletion: 85, financeShared: true, vibeScore: 3.5, notes: "Senior members dominated discussion; newer members requested rotated leadership for upcoming project." },
  { id: "M-105", club: "Malabe Horizon", date: "2026-08-18", month: "August 2026", coordinator: "Lion Ruwan Dissanayake", attendance: 92, agendaCompletion: 100, financeShared: true, vibeScore: 5.0, notes: "Enthusiastic meeting with 3 prospective members present. Digital voting used for project budgets." },
  { id: "M-106", club: "Kolomthota Excellence", date: "2026-08-08", month: "August 2026", coordinator: "Lion A. Jayasekara", attendance: 40, agendaCompletion: 60, financeShared: false, vibeScore: 2.8, notes: "Dues collection delayed; debate over unpaid district fees created friction." },
  { id: "M-107", club: "Avissawella Supreme", date: "2026-08-10", month: "August 2026", coordinator: "Lion T. Bandara", attendance: 35, agendaCompletion: 45, financeShared: false, vibeScore: 2.2, notes: "Disagreement over service project budget allocation; no consensus reached." },
  { id: "M-108", club: "Avissawella Elegance", date: "2026-08-16", month: "August 2026", coordinator: "Lion Kumari Fonseka", attendance: 85, agendaCompletion: 90, financeShared: true, vibeScore: 4.7, notes: "Solid participation. Detailed accounts presented by Treasurer for Diabetes screening camp." }
];

const MOCK_PROJECTS = [
  { id: "P-201", club: "Pelawatta", project: "Vision Care Camp Phase 2", chair: "Lion Dr. Priyantha", pillar: "Vision", budgetAdherence: "On Budget", beneficiaries: 380, volunteerSatisfaction: 4.9, date: "2026-08-10", takeaways: "Distributed 250 free custom eyeglasses & 40 cataract surgeries scheduled. Seamless team execution." },
  { id: "P-202", club: "Athurugiriya", project: "Community Food Drive", chair: "Lion Sarath Gamage", pillar: "Hunger", budgetAdherence: "Over Budget", beneficiaries: 120, volunteerSatisfaction: 2.4, date: "2026-08-05", takeaways: "Budget exceeded by 35% without prior board approval. Receipts not yet submitted to Treasurer." },
  { id: "P-203", club: "Pita Kotte", project: "Tree Plantation Drive", chair: "Lion K. Wickramasinghe", pillar: "Environment", budgetAdherence: "Under Budget", beneficiaries: 80, volunteerSatisfaction: 2.8, date: "2026-08-02", takeaways: "Low member turnout (only 5 members attended). Saplings planted but post-care assignment was omitted." },
  { id: "P-204", club: "Malabe Horizon", project: "Youth IT Skills Workshop", chair: "Lion Ruwan Dissanayake", pillar: "Youth", budgetAdherence: "On Budget", beneficiaries: 210, volunteerSatisfaction: 4.8, date: "2026-08-14", takeaways: "Partnered with local IT academy. High praise from school principals and District Youth Chairperson." },
  { id: "P-205", club: "Avissawella Supreme", project: "Elderly Health Checkup", chair: "Lion T. Bandara", pillar: "Diabetes & Health", budgetAdherence: "Over Budget", beneficiaries: 95, volunteerSatisfaction: 3.0, date: "2026-08-07", takeaways: "Medical supplies bought at retail prices due to last-minute procurement. Post-project report delayed." }
];

const MOCK_SOLUTIONS = [
  { id: 1, club: "Pelawatta", domain: "Finance & Admin", observation: "Financial reports are not consistently shared on digital channels post-meeting.", solution: "Implement a monthly WhatsApp PDF summary of all income & expenditures within 48 hours of meeting.", date: "2026-08-01", status: "Implemented" },
  { id: 2, club: "Thalangama South New Century", domain: "Leadership & Decision-making", observation: "Decision-making is concentrated among 2 senior charter members.", solution: "Rotate project leadership roles to newer members each quarter and form co-chair pairs.", date: "2026-08-05", status: "In Progress" },
  { id: 3, club: "Battaramulla Central", domain: "Member Unity & Meetings", observation: "Meeting attendance has dropped 20% over the past 2 months.", solution: "Host a monthly informal fellowship dinner and shift meeting venue to a central accessible location.", date: "2026-08-10", status: "Under Review" },
  { id: 4, club: "Athurugiriya", domain: "Projects & Community Service", observation: "Project impact metrics and expenditure receipts are not being recorded post-completion.", solution: "Assign a dedicated documentation officer and mandate receipt reconciliation before releasing funds.", date: "2026-08-12", status: "Critical Flag" },
  { id: 5, club: "Avissawella Supreme", domain: "Finance & Admin", observation: "MyLCI records are frequently updated late, risking district penalty.", solution: "Set an automated weekly calendar reminder system for the Secretary via WhatsApp Bot.", date: "2026-08-15", status: "Under Review" },
  { id: 6, club: "Pita Kotte", domain: "Governance & Transparency", observation: "Board decisions are made via informal calls without minute records.", solution: "Mandate official written agenda and board minute approval before any expenditure is authorized.", date: "2026-08-16", status: "Critical Flag" },
  { id: 7, club: "Malabe Horizon", domain: "Member Engagement", observation: "New members are unsure how to contribute during monthly business meetings.", solution: "Introduce a 10-minute 'New Member Idea Pitch' segment in every regular meeting agenda.", date: "2026-08-17", status: "Implemented" }
];

const MOCK_SYNCS = [
  { id: "S-301", club: "Pelawatta", month: "August 2026", membership: 5, leadership: 5, admin: 4, service: 5, fellowship: 5, overallStatus: "green", primaryChallenge: "Sustaining high youth retention for Q2 projects" },
  { id: "S-302", club: "Athurugiriya", month: "August 2026", membership: 4, leadership: 4, admin: 5, service: 4, fellowship: 4, overallStatus: "green", primaryChallenge: "None — all operations running smooth (Self Report)" },
  { id: "S-303", club: "Pita Kotte", month: "August 2026", membership: 4, leadership: 5, admin: 4, service: 4, fellowship: 4, overallStatus: "green", primaryChallenge: "Minor administrative delays (Self Report)" },
  { id: "S-304", club: "Thalangama South New Century", month: "August 2026", membership: 4, leadership: 3, admin: 4, service: 4, fellowship: 3, overallStatus: "amber", primaryChallenge: "Friction between senior charter members and newly inducted Lions" },
  { id: "S-305", club: "Malabe Horizon", month: "August 2026", membership: 5, leadership: 5, admin: 5, service: 5, fellowship: 5, overallStatus: "green", primaryChallenge: "Expanding donor corporate sponsorship for Q3 mega-project" },
  { id: "S-306", club: "Kolomthota Excellence", month: "August 2026", membership: 4, leadership: 4, admin: 4, service: 4, fellowship: 4, overallStatus: "green", primaryChallenge: "Normal operations (Self Report)" },
  { id: "S-307", club: "Avissawella Supreme", month: "August 2026", membership: 4, leadership: 4, admin: 5, service: 4, fellowship: 4, overallStatus: "green", primaryChallenge: "Slight delay in district dues transfer (Self Report)" }
];

const MOCK_VISITS = [
  { 
    id: "V-401", 
    club: "Pelawatta", 
    visitingOfficer: "Lion Chaminda Perera (Zone Chair 1)", 
    visitDate: "2026-08-12", 
    meetingEngagement: 5, 
    adminAudit: 4, 
    leadershipHarmony: 5, 
    leaderStatus: "green", 
    hiddenIssues: "None observed. Club records, bank reconciliation, and member attendance are exemplary.", 
    recommendedAction: "Commend Club President & share Pelawatta's digital treasury practice with Zone 1." 
  },
  { 
    id: "V-402", 
    club: "Athurugiriya", 
    visitingOfficer: "Lion Kithsiri Wickrama (Region Chair 4A)", 
    visitDate: "2026-08-14", 
    meetingEngagement: 2, 
    adminAudit: 1, 
    leadershipHarmony: 2, 
    leaderStatus: "red", 
    hiddenIssues: "DATA MISMATCH: Self-reported Green, but audit revealed severe financial dispute, unbacked expenditure of Rs 140,000, and low meeting attendance (only 4 members).", 
    recommendedAction: "Immediate Cabinet intervention required. Freeze club project funds until District Treasurer audit completed." 
  },
  { 
    id: "V-403", 
    club: "Pita Kotte", 
    visitingOfficer: "Lion Mahinda Ratnayake (Zone Chair 1B)", 
    visitDate: "2026-08-13", 
    meetingEngagement: 2, 
    adminAudit: 2, 
    leadershipHarmony: 2, 
    leaderStatus: "red", 
    hiddenIssues: "DATA MISMATCH: Self-reported Green, but visit revealed minute books unmaintained for 3 months, President acting without board consultation, high resignation risk among 5 members.", 
    recommendedAction: "Zone Chair advisory session scheduled with Club Executive Committee." 
  },
  { 
    id: "V-404", 
    club: "Thalangama South New Century", 
    visitingOfficer: "Lion Nanda Kumara (Zone Chair 1A)", 
    visitDate: "2026-08-09", 
    meetingEngagement: 3, 
    adminAudit: 4, 
    leadershipHarmony: 3, 
    leaderStatus: "amber", 
    hiddenIssues: "HIDDEN ISSUES: Self-reported Green, but visit confirmed member frustration regarding centralized decision-making and lack of committee autonomy.", 
    recommendedAction: "Facilitate a leadership harmony workshop; establish formal committee terms of reference." 
  },
  { 
    id: "V-405", 
    club: "Kolomthota Excellence", 
    visitingOfficer: "Lion S. Rajaratnam (Zone Chair 2B)", 
    visitDate: "2026-08-15", 
    meetingEngagement: 2, 
    adminAudit: 1, 
    leadershipHarmony: 2, 
    leaderStatus: "red", 
    hiddenIssues: "DATA MISMATCH: Self-reported Green, but audit found unpaid district dues for 2 quarters and cancelled meetings without notice.", 
    recommendedAction: "Issue formal Cabinet warning and mandate weekly progress sync with Zone Chair." 
  },
  { 
    id: "V-406", 
    club: "Avissawella Supreme", 
    visitingOfficer: "Lion Gamini Gunawardena (Zone Chair 5B)", 
    visitDate: "2026-08-11", 
    meetingEngagement: 2, 
    adminAudit: 2, 
    leadershipHarmony: 2, 
    leaderStatus: "red", 
    hiddenIssues: "DATA MISMATCH: Self-reported Green, but visit uncovered unrecorded cash transactions and complete breakdown between President and Secretary.", 
    recommendedAction: "Region Chair 5B to convene special mediation meeting before August 30." 
  }
];

// Helper to retrieve local storage dynamic submissions
function getLocalSubmissions() {
  try {
    const data = localStorage.getItem("cqi_local_submissions");
    return data ? JSON.parse(data) : { meetings: [], projects: [], solutions: [], syncs: [], visits: [] };
  } catch(e) {
    return { meetings: [], projects: [], solutions: [], syncs: [], visits: [] };
  }
}

function saveSubmission(type, entry) {
  const current = getLocalSubmissions();
  if (!current[type]) current[type] = [];
  current[type].unshift(entry);
  localStorage.setItem("cqi_local_submissions", JSON.stringify(current));
}

const CQI = {
  district: {
    name: "District 306 D6",
    country: "Sri Lanka",
    year: "2026-27",
    totalClubs: RAW_DISTRICT_CLUBS.length,
    healthy: healthyCount,
    monitor: monitorCount,
    critical: criticalCount
  },
  roles: {
    "governor@lions306d6.lk": "tier1",
    "cabinet@lions306d6.lk": "tier1",
    "region1a@lions306d6.lk": "tier2",
    "region1b@lions306d6.lk": "tier2",
    "region2a@lions306d6.lk": "tier2",
    "region2b@lions306d6.lk": "tier2",
    "region3a@lions306d6.lk": "tier2",
    "region3b@lions306d6.lk": "tier2",
    "region4a@lions306d6.lk": "tier2",
    "region4b@lions306d6.lk": "tier2",
    "region5a@lions306d6.lk": "tier2",
    "region5b@lions306d6.lk": "tier2",
    "pelawatta@lions306d6.lk": "tier3",
    "battaramulla@lions306d6.lk": "tier3",
    "athurugiriya@lions306d6.lk": "tier3"
  },
  clubs: RAW_DISTRICT_CLUBS,
  
  // Datasets combining baseline mock data with local dynamic submissions
  get meetings() {
    const local = getLocalSubmissions().meetings || [];
    return [...local, ...MOCK_MEETINGS];
  },
  get projects() {
    const local = getLocalSubmissions().projects || [];
    return [...local, ...MOCK_PROJECTS];
  },
  get solutions() {
    const local = getLocalSubmissions().solutions || [];
    return [...local, ...MOCK_SOLUTIONS];
  },
  get syncs() {
    const local = getLocalSubmissions().syncs || [];
    return [...local, ...MOCK_SYNCS];
  },
  get visits() {
    const local = getLocalSubmissions().visits || [];
    return [...local, ...MOCK_VISITS];
  },

  months: ["July 2026", "August 2026"],
  
  getClubByEmail(email) {
    if (!email) return "Pelawatta";
    const cleaned = email.toLowerCase().trim();
    // Direct lookup map for known preset accounts
    const map = {
      "governor@lions306d6.lk": "District-Wide",
      "cabinet@lions306d6.lk": "District-Wide",
      "pelawatta@lions306d6.lk": "Pelawatta",
      "battaramulla@lions306d6.lk": "Battaramulla",
      "athurugiriya@lions306d6.lk": "Athurugiriya",
      "pitakotte@lions306d6.lk": "Pita Kotte",
      "malabe@lions306d6.lk": "Malabe Horizon",
      "avissawella@lions306d6.lk": "Avissawella Supreme"
    };
    if (map[cleaned]) return map[cleaned];

    // Try fuzzy match against all 88 real club names
    const prefix = cleaned.split("@")[0].replace(/[^a-z0-9]/g, '');
    const found = RAW_DISTRICT_CLUBS.find(c => c.name.toLowerCase().replace(/[^a-z0-9]/g, '').includes(prefix));
    return found ? found.name : "Pelawatta";
  },

  getClubDossier(clubName) {
    const club = RAW_DISTRICT_CLUBS.find(c => c.name.toLowerCase() === clubName.toLowerCase()) || RAW_DISTRICT_CLUBS[0];
    const meetings = this.meetings.filter(m => m.club.toLowerCase() === club.name.toLowerCase());
    const projects = this.projects.filter(p => p.club.toLowerCase() === club.name.toLowerCase());
    const solutions = this.solutions.filter(s => s.club.toLowerCase() === club.name.toLowerCase());
    const sync = this.syncs.find(s => s.club.toLowerCase() === club.name.toLowerCase()) || {
      membership: club.status === 'green' ? 5 : club.status === 'amber' ? 3 : 2,
      leadership: club.status === 'green' ? 5 : club.status === 'amber' ? 3 : 2,
      admin: club.self === 'green' ? 5 : 2,
      service: club.status === 'green' ? 5 : 3,
      fellowship: club.status === 'green' ? 4 : 3,
      overallStatus: club.self || club.status,
      primaryChallenge: "Routine monthly quality monitoring"
    };
    const visit = this.visits.find(v => v.club.toLowerCase() === club.name.toLowerCase()) || {
      visitingOfficer: `Zone Chair (${club.zone})`,
      visitDate: "2026-08-15",
      meetingEngagement: club.leader === 'green' ? 5 : club.leader === 'amber' ? 3 : 2,
      adminAudit: club.leader === 'green' ? 5 : club.leader === 'amber' ? 3 : 1,
      leadershipHarmony: club.leader === 'green' ? 5 : 3,
      leaderStatus: club.leader || club.status,
      hiddenIssues: club.alert ? `Alert flagged: ${club.alert}` : "No critical discrepancies reported during field audit.",
      recommendedAction: club.status === 'green' ? "Maintain standard quality improvement workflow." : "Schedule target Zone Chair consultation session."
    };

    return { club, meetings, projects, solutions, sync, visit };
  }
};

if (typeof window !== 'undefined') {
  window.RAW_DISTRICT_CLUBS = RAW_DISTRICT_CLUBS;
  window.CQI = CQI;
  window.saveSubmission = saveSubmission;
}
if (typeof module !== 'undefined') {
  module.exports = { RAW_DISTRICT_CLUBS, CQI, saveSubmission };
}
