/* =========================================================================
   main.js
   Renders content from data.js into the page and wires up interactions.
   No build step required — just edit data.js and refresh.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAboutStats();
  renderSkills();
  renderLanguages();
  renderProjects();
  renderCertificates();
  renderExperience();
  renderEducation();
  renderServices();
  renderGithub();
  renderResume();
  renderContact();
  renderFooter();

  initIcons();
  initNav();
  initScrollSpy();
  initHeaderShadow();
  initReveal();
  initStatCounters();
  initSkillBars();
  initCertModal();
  initContactForm();
});

/* ---------------------------------------------------------------------- */
/* Icon helper (lucide, with inline SVG fallback for brand icons)          */
/* Recent lucide releases dropped brand/social marks (github, linkedin,    */
/* facebook) from the core set, so those are hand-drawn here instead.      */
/* ---------------------------------------------------------------------- */
const BRAND_ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>',
};

function icon(name, cls = "") {
  if (BRAND_ICONS[name]) {
    return `<span class="icon-inline ${cls}">${BRAND_ICONS[name]}</span>`;
  }
  return `<i data-lucide="${name}" class="${cls}"></i>`;
}
function initIcons() {
  if (window.lucide) lucide.createIcons();
}

/* ---------------------------------------------------------------------- */
/* Image fallback                                                          */
/* Called from an <img onerror>. The old version injected a raw            */
/* <i data-lucide> long after lucide.createIcons() had already run, so the */
/* placeholder never became an SVG. This swaps in the icon and immediately */
/* re-runs lucide so the mark actually renders at the right size.          */
/* ---------------------------------------------------------------------- */
function imgFallback(el, iconName) {
  const parent = el.parentElement;
  if (!parent) return;
  parent.innerHTML = `<i data-lucide="${iconName}" class="fallback-icon"></i>`;
  if (window.lucide) lucide.createIcons();
}

/* ---------------------------------------------------------------------- */
/* Hero                                                                    */
/* ---------------------------------------------------------------------- */
function renderHero() {
  document.getElementById("hero-kicker").textContent = `Hi there, I'm ${PROFILE.nickname}`;
  document.getElementById("hero-name").textContent = PROFILE.name;
  document.getElementById("hero-role").textContent = PROFILE.role;
  document.getElementById("hero-intro").textContent = PROFILE.intro;

  const resumeBtn = document.getElementById("hero-resume-btn");
  resumeBtn.href = PROFILE.resumePdf;

  const list = document.getElementById("hero-social");
  list.innerHTML = buildSocialLinks();
}

function buildSocialLinks() {
  const socials = [
    { name: "GitHub", url: PROFILE.github, iconName: "github" },
    { name: "LinkedIn", url: PROFILE.linkedin, iconName: "linkedin" },
    { name: "Facebook", url: PROFILE.facebook, iconName: "facebook" },
    { name: "Email", url: PROFILE.email ? `mailto:${PROFILE.email}` : "", iconName: "mail" },
  ];
  return socials
    .filter((s) => s.url)
    .map(
      (s) => `<li><a href="${s.url}" aria-label="${s.name}" target="_blank" rel="noopener">${icon(s.iconName)}</a></li>`
    )
    .join("");
}

/* ---------------------------------------------------------------------- */
/* About stats                                                             */
/* ---------------------------------------------------------------------- */
function renderAboutStats() {
  const el = document.getElementById("about-stats");
  el.innerHTML = STATS.map(
    (s) => `
    <div class="stat-card reveal">
      <span class="stat-number" data-count="${s.number}" data-suffix="${s.suffix}">0${s.suffix}</span>
      <span class="stat-label">${s.label}</span>
    </div>`
  ).join("");
}

/* ---------------------------------------------------------------------- */
/* Skills                                                                  */
/* ---------------------------------------------------------------------- */
function renderSkills() {
  const el = document.getElementById("skills-grid");
  el.innerHTML = SKILL_GROUPS.map(
    (group) => `
    <div class="skill-card reveal">
      <div class="skill-card-head">
        <span class="icon-badge">${icon(group.icon)}</span>
        <h3>${group.category}</h3>
      </div>
      ${group.skills
        .map(
          (s) => `
        <div class="skill-row">
          <div class="skill-row-top"><span>${s.name}</span><span>${s.level}%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
        </div>`
        )
        .join("")}
    </div>`
  ).join("");
}

/* ---------------------------------------------------------------------- */
/* Languages                                                                */
/* ---------------------------------------------------------------------- */
function renderLanguages() {
  const el = document.getElementById("languages-strip");
  if (!el) return;
  el.innerHTML = LANGUAGES.map(
    (l) => `<span class="tech-badge">${l.name} — ${l.level}</span>`
  ).join("");
}

/* ---------------------------------------------------------------------- */
/* Projects                                                                */
/* ---------------------------------------------------------------------- */
function renderProjects() {
  const el = document.getElementById("projects-grid");
  el.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card reveal">
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.name} screenshot" loading="lazy"
             onerror="imgFallback(this, 'image')" />
      </div>
      <div class="project-body">
        <p class="project-category">${p.category}</p>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="project-tech">${p.tech.map((t) => `<span class="tech-badge">${t}</span>`).join("")}</div>
        <div class="project-actions">
          ${p.github ? `<a class="btn btn-outline btn-small" href="${p.github}" target="_blank" rel="noopener">${icon("github")} Code</a>` : ""}
          ${p.demo ? `<a class="btn btn-primary btn-small" href="${p.demo}" target="_blank" rel="noopener">${icon("external-link")} Live Demo</a>` : ""}
        </div>
      </div>
    </article>`
  ).join("");
  initIcons();
}

/* ---------------------------------------------------------------------- */
/* Certificates                                                            */
/* ---------------------------------------------------------------------- */
function renderCertificates() {
  const el = document.getElementById("certificates-grid");
  el.innerHTML = CERTIFICATES.map(
    (c, i) => `
    <article class="cert-card reveal" data-cert-index="${i}" tabindex="0" role="button" aria-label="View certificate: ${c.title}">
      <div class="cert-thumb">
        <img src="${c.image}" alt="${c.title}" loading="lazy"
             onerror="imgFallback(this, 'award')" />
      </div>
      <div class="cert-body">
        <p class="cert-issuer">${c.issuer}</p>
        <h3>${c.title}</h3>
        <p class="cert-date">${c.date}</p>
        <p class="cert-desc">${c.description}</p>
        <button class="btn btn-outline btn-small" type="button" data-cert-open="${i}">View Certificate</button>
      </div>
    </article>`
  ).join("");
  initIcons();
}

/* ---------------------------------------------------------------------- */
/* Experience timeline                                                     */
/* ---------------------------------------------------------------------- */
function renderExperience() {
  const el = document.getElementById("timeline");
  el.innerHTML = EXPERIENCE.map(
    (e) => `
    <div class="timeline-item reveal">
      <p class="timeline-period">${e.period}</p>
      <h3>${e.role}</h3>
      <p class="timeline-org">${e.org}</p>
      <ul class="timeline-points">${e.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
    </div>`
  ).join("");
}

/* ---------------------------------------------------------------------- */
/* Education                                                               */
/* ---------------------------------------------------------------------- */
function renderEducation() {
  const el = document.getElementById("education-list");
  el.innerHTML = EDUCATION.map(
    (e) => `
    <div class="education-card reveal">
      <h3>${e.degree}</h3>
      <p class="education-school">${e.school}</p>
      <p class="education-year">${e.year}</p>
      ${e.details ? `<p class="education-details">${e.details}</p>` : ""}
    </div>`
  ).join("");
}

/* ---------------------------------------------------------------------- */
/* Services                                                                 */
/* ---------------------------------------------------------------------- */
function renderServices() {
  const el = document.getElementById("services-grid");
  el.innerHTML = SERVICES.map(
    (s) => `
    <div class="service-card reveal">
      <span class="service-icon">${icon(s.icon)}</span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`
  ).join("");
  initIcons();
}

/* ---------------------------------------------------------------------- */
/* GitHub                                                                   */
/* ---------------------------------------------------------------------- */
function renderGithub() {
  document.getElementById("github-username").textContent = GITHUB_INFO.username;
  document.getElementById("github-stats").innerHTML = GITHUB_INFO.stats
    .map((s) => `<div class="github-stat"><span class="num">${s.value}</span><span class="lbl">${s.label}</span></div>`)
    .join("");
  document.getElementById("github-languages").innerHTML = GITHUB_INFO.languages
    .map((l) => `<span class="tech-badge">${l}</span>`)
    .join("");
  document.getElementById("github-featured-list").innerHTML = GITHUB_INFO.featured
    .map((f) => `<li><span class="repo-name">${f.name}</span><p>${f.desc}</p></li>`)
    .join("");
  document.getElementById("github-visit-btn").href = PROFILE.github;
}

/* ---------------------------------------------------------------------- */
/* Resume                                                                   */
/* ---------------------------------------------------------------------- */
function renderResume() {
  document.getElementById("resume-summary").textContent = RESUME_SUMMARY;
  document.getElementById("resume-download-btn").href = PROFILE.resumePdf;
}

/* ---------------------------------------------------------------------- */
/* Contact                                                                  */
/* ---------------------------------------------------------------------- */
function renderContact() {
  const items = [
    { icon: "mail", text: PROFILE.email },
    { icon: "github", text: PROFILE.github.replace("https://", "") },
    { icon: "linkedin", text: PROFILE.linkedin.replace("https://", "") },
    { icon: "map-pin", text: PROFILE.location },
  ];
  document.getElementById("contact-details").innerHTML = items
    .map((i) => `<li><span class="icon-badge">${icon(i.icon)}</span>${i.text}</li>`)
    .join("");
  initIcons();
}

/* ---------------------------------------------------------------------- */
/* Footer                                                                   */
/* ---------------------------------------------------------------------- */
function renderFooter() {
  document.getElementById("footer-name").textContent = PROFILE.name;
  document.getElementById("footer-social").innerHTML = buildSocialLinks();
  document.getElementById("footer-copy").textContent = `© ${new Date().getFullYear()} ${PROFILE.name}. All Rights Reserved.`;
}

/* ---------------------------------------------------------------------- */
/* Navigation: mobile toggle + smooth close on link click                  */
/* ---------------------------------------------------------------------- */
function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------------------- */
/* Scroll spy: highlight active nav link                                   */
/* ---------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("main .section, .hero");
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ---------------------------------------------------------------------- */
/* Header background on scroll                                             */
/* ---------------------------------------------------------------------- */
function initHeaderShadow() {
  const header = document.getElementById("site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------------------------------------------------------------- */
/* Reveal-on-scroll                                                         */
/* ---------------------------------------------------------------------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

/* ---------------------------------------------------------------------- */
/* Animated stat counters                                                  */
/* ---------------------------------------------------------------------- */
function initStatCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(target * progress);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => observer.observe(c));
}

/* ---------------------------------------------------------------------- */
/* Animated skill bars                                                     */
/* ---------------------------------------------------------------------- */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.level}%`;
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((b) => observer.observe(b));
}

/* ---------------------------------------------------------------------- */
/* Certificate modal                                                       */
/* ---------------------------------------------------------------------- */
function initCertModal() {
  const modal = document.getElementById("cert-modal");
  const img = document.getElementById("cert-modal-image");
  const title = document.getElementById("cert-modal-title");
  const issuer = document.getElementById("cert-modal-issuer");
  const desc = document.getElementById("cert-modal-desc");
  let lastFocused = null;

  function open(cert) {
    lastFocused = document.activeElement;
    img.src = cert.image;
    img.alt = cert.title;
    img.style.display = "";
    img.onerror = () => { img.style.display = "none"; };
    title.textContent = cert.title;
    issuer.textContent = `${cert.issuer} — ${cert.date}`;
    desc.textContent = cert.description;
    modal.hidden = false;
    modal.querySelector(".modal-close").focus();
    document.body.style.overflow = "hidden";
  }
  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.getElementById("certificates-grid").addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-cert-open]");
    const card = e.target.closest("[data-cert-index]");
    if (trigger || (card && !e.target.closest("a"))) {
      const idx = trigger ? trigger.dataset.certOpen : card.dataset.certIndex;
      open(CERTIFICATES[Number(idx)]);
    }
  });

  document.getElementById("certificates-grid").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest("[data-cert-index]");
      if (card) {
        e.preventDefault();
        open(CERTIFICATES[Number(card.dataset.certIndex)]);
      }
    }
  });

  modal.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });
}

/* ---------------------------------------------------------------------- */
/* Contact form                                                            */
/* Static hosting (GitHub Pages) has no back end, so this falls back to    */
/* opening the visitor's email client with the message pre-filled. Swap    */
/* this out for Formspree / EmailJS / a serverless function if you want    */
/* submissions handled without leaving the page.                          */
/* ---------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = "Please fill in every field before sending.";
      return;
    }

    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    status.textContent = "Opening your email client to send this message…";
  });
}