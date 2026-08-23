// Navbar scroll effect
const navbar = document.querySelector(".navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });
}

// Set active nav link
document.querySelectorAll(".nav-links a").forEach(a => {
  if (a.href === location.href) a.classList.add("active");
});

// Animate stats counters
function animateCount(el, target, duration = 1500) {
  let start = 0, step = target / 60, interval = duration / 60;
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, interval);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll("[data-count]").forEach(el => {
        animateCount(el, +el.dataset.count);
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector(".stats-bar");
if (statsBar) observer.observe(statsBar);

// Fade-in on scroll
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("fade-in");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".pillar-card,.toolkit-card,.card").forEach(el => fadeObserver.observe(el));

// Auth state UI
function updateNavAuth(user) {
  const loginBtn = document.getElementById("loginBtn");
  const navUser = document.getElementById("navUser");
  const navUserName = document.getElementById("navUserName");
  if (!loginBtn || !navUser) return;
  if (user) {
    loginBtn.classList.add("hidden");
    navUser.classList.remove("hidden");
    if (navUserName) navUserName.textContent = user.displayName || user.email;
  } else {
    loginBtn.classList.remove("hidden");
    navUser.classList.add("hidden");
  }
}

// Toast notifications
function showToast(msg, type = "success") {
  const t = document.createElement("div");
  t.className = "toast toast-" + type;
  t.innerHTML = `<span>${type === "success" ? "✅" : "⚠️"}</span><span>${msg}</span>`;
  t.style.cssText = "position:fixed;bottom:24px;right:24px;background:" + (type === "success" ? "var(--green-bg)" : "var(--amber-bg)") + ";border:1px solid " + (type === "success" ? "var(--green-border)" : "var(--amber-border)") + ";color:" + (type === "success" ? "var(--green)" : "var(--amber)") + ";padding:14px 20px;border-radius:var(--r-md);display:flex;gap:10px;align-items:center;font-size:.85rem;font-weight:600;z-index:9999;animation:fadeInUp .3s ease;backdrop-filter:blur(10px);";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

// Populate all club select dropdowns across form pages with 88 real Lions Clubs
document.addEventListener("DOMContentLoaded", () => {
  if (typeof CQI !== "undefined" && CQI.clubs) {
    const selects = document.querySelectorAll("select");
    selects.forEach(select => {
      // Check if this select is for choosing a club
      const firstOpt = select.querySelector("option");
      if (firstOpt && (firstOpt.textContent.includes("club") || firstOpt.textContent.includes("Club"))) {
        const placeholder = firstOpt.outerHTML;
        let html = placeholder;
        
        // Group by Region
        const regions = [...new Set(CQI.clubs.map(c => c.region))].sort();
        regions.forEach(r => {
          html += `<optgroup label="${r}">`;
          CQI.clubs.filter(c => c.region === r).sort((a, b) => a.name.localeCompare(b.name)).forEach(c => {
            html += `<option value="${c.name}">${c.name} (${c.zone})</option>`;
          });
          html += `</optgroup>`;
        });
        select.innerHTML = html;
      }
    });
  }
});

window.showToast = showToast;
window.updateNavAuth = updateNavAuth;
