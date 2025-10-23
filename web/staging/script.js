// script.js (module)
// --- Remote endpoints ---
const endpoints = {
  employments: 'data/employments.json',
  skills:      'data/skills.json',
  education:   'data/education.json',
  books:       'data/books.json',
  projects:    'data/projects.json',
  designs:     'data/designs.json',
  socials:     'data/socials_all.json'
};

// --- Local secondary sources ---
const localEndpoints = {
  employments: 'data/employments.json',
  skills:      'data/skills.json',
  education:   'data/education.json',
  books:       'data/books.json',
  projects:    'data/projects.json',
  designs:     'data/designs.json',
  socials:     'data/socials_all.json'
};

// --- Static profile info ---
const BIO = `Dewan M.I. Mukto is a multipotentialite interested in maximizing profits and efficiency under the influence of his ENFP-T MBTI personality type. He is notable for contributions to art, literature, science and technology. Since 2014, Dewan has created videos, music, graphics, UIs, code, games, books, 3D animation, fashion, marketing, teaching and research in AI, mathematics, economics and psychology.`;

const CONTACTS = [
  { label: 'Phone', value: '+1 (709) 219-8850', href: 'tel:+17092198850' },
  { label: 'Email', value: 'hiring@mux8.com', href: 'mailto:hiring@mux8.com' },
  { label: 'Location', value: 'Dhaka 🇧🇩 | St. John\'s 🇨🇦', href: '#' },
  { label: 'LinkedIn', value: 'linkedin.com/in/dewanmukto', href: 'https://linkedin.com/in/dewanmukto' },
  { label: 'GitHub', value: 'github.com/dwmk', href: 'https://github.com/dwmk' }
];

// --- Fetch helper with fallback to local ---
async function fetchJson(primaryUrl, localUrl) {
  try {
    const res = await fetch(primaryUrl, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err1) {
    console.warn('Primary fetch failed:', primaryUrl, err1);
    try {
      const res2 = await fetch(localUrl, { cache: "no-store" });
      if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
      return await res2.json();
    } catch (err2) {
      console.error('Local fetch failed:', localUrl, err2);
      return null;
    }
  }
}

// --- Load all data ---
async function loadAll() {
  const keys = Object.keys(endpoints);
  const data = {};

  for (const k of keys) {
    data[k] = await fetchJson(endpoints[k], localEndpoints[k]);
    if (!data[k]) markFailed(k);
  }

  renderAll(data);
}

// --- Renderers ---
function markFailed(sectionKey) {
  const mapping = {
    employments: 'experience-list',
    skills: 'skill-list',
    education: 'education-list',
    books: 'publications-list',
    projects: 'projects-list',
    designs: 'projects-list',
    socials: 'contact-grid'
  };
  const el = document.getElementById(mapping[sectionKey]);
  if (el) el.innerHTML = `<div style="color:var(--muted);font-style:italic;">Failed to load data.</div>`;
}

function renderAll(data) {
  renderProfile();
  renderContactsInline();

  if (data.skills) renderSkills(data.skills);
  if (data.education) renderEducation(data.education);
  if (data.books) renderPublications(data.books);
  if (data.employments) renderExperience(data.employments);
  if (data.projects) renderProjects(data.projects, data.designs);
  if (data.socials) renderSocials(data.socials);
}

function renderProfile() {
  const el = document.getElementById('profile');
  el.innerHTML = `
    <h2 style="margin:0">Dewan M.I. Mukto</h2>
    <p class="role" style="margin:6px 0 0 0">Multipotentialite · ENFP-T</p>
    <p class="bio">${BIO}</p>
  `;
}

function renderContactsInline() {
  const el = document.getElementById('contacts-inline');
  el.innerHTML = '';
  CONTACTS.forEach(c => {
    const a = document.createElement('a');
    a.className = 'btn-ghost';
    a.href = c.href;
    a.textContent = c.value;
    if (c.href.startsWith('http')) a.target = '_blank';
    el.appendChild(a);
  });

  const grid = document.getElementById('contact-grid');
  grid.innerHTML = '';
  CONTACTS.forEach(c => {
    const a = document.createElement('a');
    a.href = c.href;
    a.textContent = `${c.label}: ${c.value}`;
    if (c.href.startsWith('http')) a.target = '_blank';
    const div = document.createElement('div');
    div.appendChild(a);
    grid.appendChild(div);
  });
}

function renderSkills(skillsData) {
  const container = document.getElementById('skill-list');
  container.innerHTML = '';
  if (Array.isArray(skillsData)) {
    skillsData.forEach(s => container.appendChild(chip(s)));
    return;
  }
  Object.entries(skillsData).forEach(([cat, arr]) => {
    const group = document.createElement('div');
    group.style.marginBottom = '10px';
    const h = document.createElement('div');
    h.textContent = cat;
    h.style.fontWeight = '600';
    h.style.fontSize = '13px';
    h.style.marginBottom = '6px';
    group.appendChild(h);
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flexWrap = 'wrap';
    row.style.gap = '8px';
    (arr || []).forEach(s => row.appendChild(chip(s)));
    group.appendChild(row);
    container.appendChild(group);
  });
}

function chip(text) {
  const c = document.createElement('div');
  c.className = 'skill-chip';
  c.textContent = text;
  return c;
}

function renderEducation(edu) {
  const el = document.getElementById('education-list');
  el.innerHTML = '';
  edu.forEach(item => {
    const div = document.createElement('div');
    div.className = 'education-item';
    div.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div>
          <strong>${item.degree || item.title || ''}</strong>
          <div style="color:var(--muted)">${item.institution || ''}</div>
        </div>
        <div style="color:var(--muted)">${item.start || ''} — ${item.end || ''}</div>
      </div>
      <div style="margin-top:6px;color:var(--muted);font-size:13px">${item.notes || ''}</div>
    `;
    el.appendChild(div);
  });
}

function renderPublications(list) {
  const el = document.getElementById('publications-list');
  el.innerHTML = '';
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'publication-item';
    div.innerHTML = `<strong>${item.title || item.name}</strong> ${item.year ? `· ${item.year}` : ''} 
      <div style="color:var(--muted);font-size:13px">${item.publisher || item.journal || ''}</div>`;
    el.appendChild(div);
  });
}

function renderExperience(list) {
  const el = document.getElementById('experience-list');
  el.innerHTML = '';
  list.forEach(job => {
    const div = document.createElement('div');
    div.className = 'experience-item';
    div.innerHTML = `
      <div class="job-head">
        <div>
          <div class="job-title">${job.title || job.position || ''}</div>
          <div class="job-meta">${job.company || job.employer || ''}</div>
        </div>
        <div class="job-meta">${job.start || ''} — ${job.end || 'Present'}</div>
      </div>
      <div style="margin-top:8px;color:var(--muted);font-size:14px">${job.description || job.summary || ''}</div>
    `;
    el.appendChild(div);
  });
}

function renderProjects(projectsList, designsData) {
  const el = document.getElementById('projects-list');
  el.innerHTML = '';
  const list = (projectsList || []).slice(0, 30);
  list.forEach(p => {
    const node = document.createElement('article');
    node.className = 'project-item card';
    node.style.padding = '12px';
    node.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div style="flex:1">
          <strong style="display:block">${p.name || p.title}</strong>
          <div style="color:var(--muted);font-size:13px;margin-top:6px">${(p.description || '').slice(0,180)}</div>
          <div style="margin-top:8px;font-size:12px;color:var(--muted)">${(p.tech || (p.tags||[])).join ? (p.tech || p.tags || []).join(' · ') : ''}</div>
        </div>
        <div style="margin-left:12px;min-width:86px;display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <a href="${p.url || '#'}" target="_blank" rel="noopener" class="btn-ghost">Open</a>
        </div>
      </div>`;
    el.appendChild(node);
  });
  if (designsData && Array.isArray(designsData)) {
    const note = document.createElement('div');
    note.style.marginTop = '10px';
    note.style.color = 'var(--muted)';
    note.textContent = `Designs available: ${designsData.length}`;
    el.appendChild(note);
  }
}

function renderSocials(list) {
  const grid = document.getElementById('contact-grid');
  list.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url || '#';
    a.textContent = `${s.name} — ${s.username || ''}`.trim();
    a.target = '_blank';
    a.rel = 'noopener';
    const div = document.createElement('div');
    div.className = 'contact-item';
    div.appendChild(a);
    grid.appendChild(div);
  });
}

// --- Print button ---
document.getElementById('print-btn').addEventListener('click', () => window.print());

// --- Init ---
loadAll();
