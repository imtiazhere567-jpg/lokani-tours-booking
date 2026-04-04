/* ─── Data ───────────────────────────────────────────────────────────────── */

const PROPERTIES = [
  'Casa Sundeck',
  'Mahi Mahi Villa',
  'White Sand Condo',
  'Pacific Vibes Condo',
  'South Beach Villa',
  'Casa La Perla',
  'Casa La Perla 2',
  'La Perla Negra',
  'North Beach Retreat',
  'Other',
];

const BUDGET_OPTIONS = [
  { id: '60-100',   label: '$60 – $100',   desc: 'per person', tours: 'Nature walks, ATV, Snorkeling, Monkey & Crocodile tours' },
  { id: '100-150',  label: '$100 – $150',  desc: 'per person', tours: 'Zipline, Jet Ski, Bioluminescence, Jet Sailing' },
  { id: '150-250',  label: '$150 – $250',  desc: 'per person', tours: 'Paragliding, Sport Fishing, Tortuga Island & more' },
  { id: '250+',     label: '$250+',        desc: 'per person', tours: 'Private Sailing, premium full-day experiences' },
];

const INTERESTS = [
  { id: 'adventure',   label: 'Adventure',            desc: 'ATV, Zipline, Paragliding',      emoji: '🏔️' },
  { id: 'ocean',       label: 'Ocean Experiences',    desc: 'Jet Ski, Fishing, Sailing',       emoji: '🌊' },
  { id: 'wildlife',    label: 'Nature & Wildlife',    desc: 'Monkeys, Crocodiles, Rainforest', emoji: '🌿' },
  { id: 'relaxation',  label: 'Relaxation & Wellness',desc: 'Spa, Sunset, Slow experiences',   emoji: '🧘' },
  { id: 'food',        label: 'Food & Culture',       desc: 'Local cuisine & cultural tours',  emoji: '🍽️' },
];

const TOURS = [
  { id: 'atv',             name: 'ATV Tour',             tagline: 'Off-road jungle adventure',      interests: ['adventure'],            tiers: ['60-100','100-150','150-250','250+'], priceFrom: 75,  duration: '3–4 hours',          emoji: '🏍️',  gradient: 'linear-gradient(135deg,#5D4037,#A1643E)',  desc: 'Explore rugged Costa Rica terrain on an exciting ATV adventure through jungle trails and scenic overlooks.' },
  { id: 'horseback',       name: 'Horseback Riding',     tagline: 'Coastal trail rides',            interests: ['adventure','wildlife'],  tiers: ['60-100','100-150','150-250','250+'], priceFrom: 70,  duration: '2–3 hours',          emoji: '🐴',  gradient: 'linear-gradient(135deg,#BF360C,#E64A19)',  desc: 'Ride through scenic coastal trails, tropical forests, and stunning ocean overlooks with expert guides.' },
  { id: 'monkeys',         name: 'Monkey Tour',          tagline: 'Meet the jungle locals',         interests: ['wildlife'],             tiers: ['60-100','100-150','150-250','250+'], priceFrom: 65,  duration: '2–3 hours',          emoji: '🐒',  gradient: 'linear-gradient(135deg,#33691E,#558B2F)',  desc: 'Get up close with howler and white-faced monkeys in their natural tropical habitat. A must for nature lovers.' },
  { id: 'crocodile',       name: 'Crocodile Tour',       tagline: 'River wildlife adventure',       interests: ['wildlife'],             tiers: ['60-100','100-150','150-250','250+'], priceFrom: 65,  duration: '2 hours',            emoji: '🐊',  gradient: 'linear-gradient(135deg,#827717,#B39000)',  desc: 'Cruise the Tarcoles River and spot massive American crocodiles in the wild up close.' },
  { id: 'snorkeling',      name: 'Snorkeling',           tagline: 'Discover vibrant marine life',   interests: ['ocean'],                tiers: ['60-100','100-150','150-250','250+'], priceFrom: 65,  duration: '2–3 hours',          emoji: '🤿',  gradient: 'linear-gradient(135deg,#00838F,#00ACC1)',  desc: 'Discover vibrant marine life in the crystal-clear Pacific waters near the coastline.' },
  { id: 'zipline',         name: 'Zipline',              tagline: 'Fly through the canopy',         interests: ['adventure'],            tiers: ['100-150','150-250','250+'],          priceFrom: 120, duration: '3 hours',            emoji: '🪂',  gradient: 'linear-gradient(135deg,#2E7D32,#43A047)',  desc: 'Soar through the jungle canopy on thrilling ziplines with breathtaking panoramic views of the valley.' },
  { id: 'jetski',          name: 'Jet Ski',              tagline: 'Race across the waves',          interests: ['ocean'],                tiers: ['100-150','150-250','250+'],          priceFrom: 110, duration: '1–2 hours',          emoji: '🌊',  gradient: 'linear-gradient(135deg,#006064,#00838F)',  desc: 'Race across the Pacific waves on a thrilling jet ski adventure along the stunning coastline.' },
  { id: 'jetsailing',      name: 'Jet Sailing',          tagline: 'Speed meets serenity',           interests: ['ocean'],                tiers: ['100-150','150-250','250+'],          priceFrom: 130, duration: '3–4 hours',          emoji: '⛵',  gradient: 'linear-gradient(135deg,#1A237E,#283593)',  desc: 'The ultimate combo — high-speed jet boat and serene sailing along the stunning coastline.' },
  { id: 'bioluminescence', name: 'Bioluminescence Tour', tagline: 'Magic glowing waters at night',  interests: ['ocean','wildlife'],     tiers: ['100-150','150-250','250+'],          priceFrom: 115, duration: '2–3 hrs (evening)',  emoji: '✨',  gradient: 'linear-gradient(135deg,#1A1A2E,#0F3460)',  desc: 'Paddle through glowing bioluminescent waters in a truly magical evening kayaking experience.' },
  { id: 'tortuga',         name: 'Tortuga Island',       tagline: 'Paradise island escape',         interests: ['ocean','relaxation'],   tiers: ['100-150','150-250','250+'],          priceFrom: 125, duration: 'Full day',            emoji: '🏝️',  gradient: 'linear-gradient(135deg,#00695C,#00897B)',  desc: 'Sail to stunning Tortuga Island for world-class snorkeling, pristine beaches, and a delicious lunch.' },
  { id: 'paragliding',     name: 'Paragliding',          tagline: 'Soar above the coast',           interests: ['adventure'],            tiers: ['150-250','250+'],                   priceFrom: 165, duration: '2 hours',            emoji: '🪁',  gradient: 'linear-gradient(135deg,#1565C0,#1976D2)',  desc: 'Fly high above the coast and jungle with a professional paragliding guide. Unforgettable views await.' },
  { id: 'fishing',         name: 'Sport Fishing',        tagline: 'World-class offshore fishing',   interests: ['ocean'],                tiers: ['150-250','250+'],                   priceFrom: 200, duration: 'Full day',            emoji: '🎣',  gradient: 'linear-gradient(135deg,#01579B,#0277BD)',  desc: 'World-class offshore fishing for marlin, sailfish, and dorado with expert local guides.' },
  { id: 'sailing',         name: 'Private Sailing',      tagline: 'Luxury sunset charter',          interests: ['ocean','relaxation'],   tiers: ['250+'],                             priceFrom: 250, duration: 'Half or full day',   emoji: '🌅',  gradient: 'linear-gradient(135deg,#4A148C,#6A1B9A)',  desc: 'Private sailing charter along the stunning Pacific coastline. Perfect for sunset or a full-day escape.' },
];

const EXTRA_SERVICES = [
  { id: 'massage',      name: 'Massage',        emoji: '💆', desc: 'Professional in-villa massage service. Relax and recharge.',          priceFrom: 80,  options: ['60 min', '90 min'] },
  { id: 'uv-therapy',   name: 'UV Therapy',     emoji: '☀️', desc: 'Rejuvenating UV light therapy session at your villa.',                priceFrom: 60,  options: ['30 min', '60 min'] },
  { id: 'private-chef', name: 'Private Chef',   emoji: '👨‍🍳', desc: 'In-villa private chef with fresh local ingredients. Choose a meal.',  priceFrom: 120, options: ['Breakfast', 'Lunch', 'Dinner'] },
  { id: 'transport',    name: 'Transportation', emoji: '🚐', desc: 'Private transportation to and from your tours and activities.',        priceFrom: 50,  options: null },
];

const CELEBRATION_OPTIONS = [
  { id: 'family',      label: 'Family Trip',          emoji: '👨‍👩‍👧‍👦' },
  { id: 'bachelor',    label: 'Bachelor Party',       emoji: '🥂' },
  { id: 'vacation',    label: 'Vacation',             emoji: '🏝️' },
  { id: 'couple',      label: 'Couple',               emoji: '💑' },
  { id: 'birthday',    label: 'Birthday',             emoji: '🎂' },
  { id: 'none',        label: 'No specific',          emoji: '🌴' },
];

const KIDS_AGE_RANGES = ['Under 2', '2–4', '5–7', '8–10', '11–13', '14–17'];

/* ─── State ──────────────────────────────────────────────────────────────── */
const state = {
  flow: null,  // 'main' | 'transport'
  step: 1,
  data: {
    // Step 1
    name: '', email: '', phone: '', property: '', propertyOther: '', arrivalDate: '', departureDate: '',
    // Step 2
    adults: 2, kids: 0, kidsAges: [], celebration: null,
    // Step 3
    budget: null,
    // Step 4
    interests: [],
    // Step 5 — selected tours [{id, date, adults, kids}]
    selectedTours: [],
    // Step 6 — selected services [{id, option, date, notes}]
    selectedServices: [],
  },
  transport: {
    arrivals: [emptyArrival()],
    needsReturn: null,
    returnDate: '', returnTime: '', returnDepartureDate: '', returnDepartureTime: '', returnLocation: '',
  },
};

function emptyArrival() {
  return { flightNumber: '', houseName: '', arrivalDate: '', arrivalTime: '', guestCount: '', guestNames: '', pickupSign: '', notes: '' };
}

/* ─── Router ─────────────────────────────────────────────────────────────── */
const TOTAL_STEPS = 7;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ─── Welcome Screen ─────────────────────────────────────────────────────── */
function renderWelcome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="screen active" id="screen-welcome">
      <div class="welcome">
        <div class="welcome-decoration d1"></div>
        <div class="welcome-decoration d2"></div>
        <div class="welcome-decoration d3"></div>
        <div class="welcome-content">
          <img src="Lokani%20Branding/lokani.web.logo.png" alt="Lokani Tours" class="welcome-logo">
          <h1>Plan Your Perfect<br><em>Costa Rica Adventure</em></h1>
          <p>Answer a few quick questions and we'll match you with the best tours, rentals, and services for your stay.</p>
          <div class="welcome-actions">
            <button class="btn-primary" onclick="startMainFlow()" style="min-width:240px;font-size:1.05rem;padding:18px 48px;">
              Start Planning
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <button class="btn-ghost" onclick="startTransportFlow()">Transportation only →</button>
          </div>
        </div>
      </div>
    </div>`;
}

function startMainFlow() {
  state.flow = 'main';
  state.step = 1;
  renderStep();
}

function startTransportFlow() {
  state.flow = 'transport';
  renderTransportForm();
}

/* ─── Step Shell ─────────────────────────────────────────────────────────── */
function renderStep() {
  const pct = Math.round((state.step / TOTAL_STEPS) * 100);
  const stepRenderers = [null, renderStep1, renderStep2, renderStep3, renderStep4, renderStep5, renderStep6, renderStep7];
  const content = stepRenderers[state.step]?.() ?? '';

  document.getElementById('app').innerHTML = `
    <div class="screen active" id="screen-step">
      <div class="step-page">
        <header class="step-topbar">
          <img src="Lokani%20Branding/lokani.web.logo.png" alt="Lokani" class="step-topbar-logo">
          <div class="step-topbar-right">
            <span class="step-counter">Step ${state.step} of ${TOTAL_STEPS}</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
          </div>
        </header>
        <div class="step-body">
          ${content}
        </div>
        <nav class="step-nav">
          <button class="btn-back" onclick="goBack()">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Back
          </button>
          ${state.step < TOTAL_STEPS
            ? `<button class="btn-next" onclick="goNext()">Continue <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`
            : `<button class="btn-next btn-submit" onclick="submitForm()">Submit Reservation Request ✓</button>`
          }
        </nav>
      </div>
    </div>`;

  bindStepEvents();
}

/* ─── Step 1: Basic Info ─────────────────────────────────────────────────── */
function renderStep1() {
  const d = state.data;
  const propertyOptions = PROPERTIES.map(p =>
    `<option value="${p}" ${d.property === p ? 'selected' : ''}>${p}</option>`
  ).join('');

  const icons = {
    user: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    mail: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    phone: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    home: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    calendar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  };

  return `
    <span class="step-tag">Step 1 — Let's get started</span>
    <h2>Tell us about your stay</h2>
    <p>We'll use this to personalize your Costa Rica experience and send your reservation details.</p>

    <div class="form-grid">
      <div class="form-group">
        <label>${icons.user} Full name</label>
        <input class="form-control" id="f-name" type="text" placeholder="Maria Rodriguez" value="${esc(d.name)}">
        <div class="field-error" id="err-name">Please enter your name</div>
      </div>
      <div class="form-group">
        <label>${icons.mail} Email</label>
        <input class="form-control" id="f-email" type="email" placeholder="maria@email.com" value="${esc(d.email)}">
        <div class="field-error" id="err-email">Please enter a valid email</div>
      </div>
    </div>

    <div class="form-group">
      <label>${icons.phone} Phone / WhatsApp</label>
      <input class="form-control" id="f-phone" type="tel" placeholder="+1 (555) 000-0000" value="${esc(d.phone)}">
      <div class="field-error" id="err-phone">Please enter your phone number</div>
    </div>

    <div class="form-group">
      <label>${icons.home} Where are you staying?</label>
      <select class="form-control" id="f-property">
        <option value="">Select property…</option>
        ${propertyOptions}
      </select>
      <div class="field-error" id="err-property">Please select where you are staying</div>
    </div>

    <div class="form-group ${d.property !== 'Other' ? 'hidden' : ''}" id="other-property-group">
      <label>Property name</label>
      <input class="form-control" id="f-property-other" type="text" placeholder="Enter property name" value="${esc(d.propertyOther)}">
      <div class="field-error" id="err-property-other">Please enter the property name</div>
    </div>

    <div class="form-grid">
      <div class="form-group">
        <label>${icons.calendar} Arrival date</label>
        <input class="form-control" id="f-arrival" type="date" value="${esc(d.arrivalDate)}" min="${todayStr()}">
        <div class="field-error" id="err-arrival">Please select arrival date</div>
      </div>
      <div class="form-group">
        <label>${icons.calendar} Departure date</label>
        <input class="form-control" id="f-departure" type="date" value="${esc(d.departureDate)}" min="${todayStr()}">
        <div class="field-error" id="err-departure">Please select departure date</div>
      </div>
    </div>`;
}

/* ─── Step 2: Group Details ──────────────────────────────────────────────── */
function renderStep2() {
  const d = state.data;
  const total = d.adults + d.kids;

  const celebCards = CELEBRATION_OPTIONS.map(c => `
    <div class="select-card ${d.celebration === c.id ? 'selected' : ''}" data-celebrate="${c.id}">
      <div class="card-icon">${c.emoji}</div>
      <div class="card-label">${c.label}</div>
    </div>`).join('');

  let kidsAgesHtml = '';
  if (d.kids > 0) {
    for (let i = 0; i < d.kids; i++) {
      const selectedAge = d.kidsAges[i] || '';
      const chips = KIDS_AGE_RANGES.map(a => `
        <span class="age-chip ${selectedAge === a ? 'selected' : ''}" data-kid-idx="${i}" data-age="${a}" onclick="setKidAge(${i},'${a}')">${a}</span>`
      ).join('');
      kidsAgesHtml += `
        <div class="kid-age-row">
          <label>Kid ${i + 1} Age</label>
          <div class="age-chips">${chips}</div>
        </div>`;
    }
  }

  return `
    <span class="step-tag">Step 2 — Your group</span>
    <h2>Tell us about your group</h2>
    <p>This helps us recommend tours with the right fit for everyone.</p>

    <div class="total-guests-summary">
      <div class="total-label">Total Guests</div>
      <div class="total-value" id="total-guests-val">${total}</div>
    </div>

    <div class="counter-row">
      <div class="counter-info">
        <div class="counter-label">Adults</div>
        <div class="counter-desc">Age 18+</div>
      </div>
      <div class="counter-controls">
        <button class="counter-btn" id="adults-minus" onclick="changeCount('adults',-1)" ${d.adults <= 1 ? 'disabled' : ''}>−</button>
        <span class="counter-value" id="adults-val">${d.adults}</span>
        <button class="counter-btn" id="adults-plus" onclick="changeCount('adults',1)">+</button>
      </div>
    </div>

    <div class="counter-row">
      <div class="counter-info">
        <div class="counter-label">Kids</div>
        <div class="counter-desc">Under 18</div>
      </div>
      <div class="counter-controls">
        <button class="counter-btn" id="kids-minus" onclick="changeCount('kids',-1)" ${d.kids <= 0 ? 'disabled' : ''}>−</button>
        <span class="counter-value" id="kids-val">${d.kids}</span>
        <button class="counter-btn" id="kids-plus" onclick="changeCount('kids',1)">+</button>
      </div>
    </div>

    <div class="kids-ages-section ${d.kids === 0 ? 'hidden' : ''}" id="kids-ages-section">
      <p class="multi-hint mb-12">Ages of kids</p>
      <div class="field-error mb-16" id="err-kids-ages" style="display:none;">Please select age for all kids</div>
      ${kidsAgesHtml}
    </div>

    <div class="mt-24">
      <p class="multi-hint">Is this trip a special occasion?</p>
      <div class="field-error mb-16" id="err-celebration" style="display:none;">Please select an option</div>
      <div class="card-grid cols-2">
        ${celebCards}
      </div>
    </div>`;
}

/* ─── Step 3: Budget ─────────────────────────────────────────────────────── */
function renderStep3() {
  const d = state.data;
  const cards = BUDGET_OPTIONS.map(b => `
    <div class="select-card budget-card ${d.budget === b.id ? 'selected' : ''}" data-budget="${b.id}">
      <div class="budget-amount">${b.label}</div>
      <div class="budget-label">${b.desc}</div>
      <div class="hint mt-8">${b.tours}</div>
    </div>`).join('');

  return `
    <span class="step-tag">Step 3 — Budget</span>
    <h2>What's your budget per person for activities?</h2>
    <p>This helps us filter and show you tours that match your expectations. You can always mix and match.</p>
    <div class="field-error mb-16" id="err-budget" style="display:none;">Please select a budget range</div>
    <div class="card-grid cols-2">${cards}</div>`;
}

/* ─── Step 4: Interests ──────────────────────────────────────────────────── */
function renderStep4() {
  const d = state.data;
  const cards = INTERESTS.map(i => `
    <div class="select-card ${d.interests.includes(i.id) ? 'selected' : ''}" data-interest="${i.id}">
      <div class="card-icon">${i.emoji}</div>
      <div class="card-label">${i.label}</div>
      <div class="card-sub">${i.desc}</div>
    </div>`).join('');

  return `
    <span class="step-tag">Step 4 — Interests</span>
    <h2>What kind of experiences are you looking for?</h2>
    <p class="multi-hint">Select all that apply — we'll build your recommendations around these.</p>
    <div class="field-error mb-16" id="err-interests" style="display:none;">Please select at least one interest</div>
    <div class="card-grid">${cards}</div>`;
}

/* ─── Step 5: Tour Recommendations ──────────────────────────────────────── */
function renderStep5() {
  const d = state.data;
  const filtered = TOURS.filter(t => {
    const matchesBudget   = !d.budget || t.tiers.includes(d.budget);
    const matchesInterest = d.interests.length === 0 || t.interests.some(i => d.interests.includes(i));
    return matchesBudget && matchesInterest;
  });

  const cards = filtered.length
    ? filtered.map(t => {
        const sel = d.selectedTours.find(s => s.id === t.id);
        const isSelected = !!sel;
        return `
          <div class="tour-card ${isSelected ? 'tour-selected' : ''}" id="tour-${t.id}">
            <div class="tour-image" style="background:${t.gradient}">
              <span style="font-size:2.8rem">${t.emoji}</span>
              <div class="tour-image-label">${t.interests[0]}</div>
            </div>
            <div class="tour-body">
              <div class="tour-name">${t.name}</div>
              <div class="tour-tagline">${t.tagline}</div>
              <div class="tour-desc">${t.desc}</div>
              <div class="tour-meta">
                <div class="tour-duration">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#8A8480" stroke-width="1.2"/><path d="M6 3.5V6l2 1.5" stroke="#8A8480" stroke-width="1.2" stroke-linecap="round"/></svg>
                  ${t.duration}
                </div>
                <div class="tour-price">From $${t.priceFrom} <span>/ person</span></div>
              </div>
              <button class="btn-select-tour" onclick="toggleTour('${t.id}')">
                ${isSelected ? '✓ Selected — click to remove' : 'Select this tour'}
              </button>
            </div>
            <div class="tour-booking-form">
              <div class="booking-grid">
                <div class="form-group">
                  <label>Preferred date</label>
                  <input class="form-control" type="date" id="tour-date-${t.id}" value="${esc(sel?.date || '')}" min="${todayStr()}" onchange="updateTourData('${t.id}','date',this.value)">
                </div>
                <div class="form-group">
                  <label>Guests for this tour</label>
                  <input class="form-control" type="number" id="tour-guests-${t.id}" min="1" value="${sel?.guests || d.adults}" onchange="updateTourData('${t.id}','guests',this.value)">
                </div>
              </div>
              <div class="form-group">
                <label>Adults / Kids breakdown <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:0.78rem">(optional)</span></label>
                <input class="form-control" type="text" id="tour-breakdown-${t.id}" placeholder="e.g. 2 adults, 1 kid" value="${esc(sel?.breakdown || '')}" onchange="updateTourData('${t.id}','breakdown',this.value)">
              </div>
            </div>
          </div>`;
      }).join('')
    : `<div class="no-tours">
        <div class="no-tours-icon">🔍</div>
        <h3>No tours match your filters</h3>
        <p>Try going back and adjusting your budget or interest selections.</p>
      </div>`;

  return `
    <span class="step-tag">Step 5 — Your tours</span>
    <h2>Tours we recommend for you</h2>
    <p class="multi-hint">Select the ones you're interested in and choose preferred dates — you can pick more than one.</p>
    <div class="tours-grid">${cards}</div>`;
}

/* ─── Step 6: Extra Services ─────────────────────────────────────────────── */
function renderStep6() {
  const d = state.data;
  const cards = EXTRA_SERVICES.map(s => {
    const sel = d.selectedServices.find(x => x.id === s.id);
    const isSelected = !!sel;
    const optionChips = s.options
      ? `<div class="option-chips">${s.options.map(o =>
          `<span class="option-chip ${sel?.option === o ? 'active' : ''}" onclick="setServiceOption('${s.id}','${o}')">${o}</span>`
        ).join('')}</div>`
      : '';

    return `
      <div class="service-card ${isSelected ? 'service-selected' : ''}" id="srv-${s.id}" onclick="toggleService('${s.id}', event)">
        <div class="service-icon">${s.emoji}</div>
        <div class="service-name">${s.name}</div>
        <div class="service-desc">${s.desc}</div>
        <div class="service-price">From $${s.priceFrom}</div>
        <div class="service-details-form" onclick="event.stopPropagation()">
          ${s.options ? `<label>Choose option</label>${optionChips}` : ''}
          <label>Preferred date <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:0.78rem">(optional)</span></label>
          <input class="form-control" type="date" value="${esc(sel?.date || '')}" min="${todayStr()}" onchange="updateServiceData('${s.id}','date',this.value)">
          <label>Notes <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:0.78rem">(optional)</span></label>
          <input class="form-control" type="text" placeholder="Any special requests…" value="${esc(sel?.notes || '')}" onchange="updateServiceData('${s.id}','notes',this.value)">
        </div>
      </div>`;
  }).join('');

  return `
    <span class="step-tag">Step 6 — Enhance your stay</span>
    <h2>Would you like to add any extra services?</h2>
    <p>All optional — add what sounds good and we'll include it in your reservation.</p>
    <div class="services-grid">${cards}</div>`;
}

/* ─── Step 7: Review & Submit ────────────────────────────────────────────── */
function renderStep7() {
  const d = state.data;

  const toursHtml = d.selectedTours.length
    ? `<ul class="review-tours-list">${d.selectedTours.map(s => {
        const t = TOURS.find(x => x.id === s.id);
        return `<li class="review-tour-item">
          <span class="review-tour-icon">${t?.emoji || '🏝️'}</span>
          <div class="review-tour-info">
            <div class="tour-item-name">${t?.name || s.id}</div>
            <div class="tour-item-detail">${s.date ? `Date: ${formatDate(s.date)}` : 'Date TBD'} · ${s.guests || d.adults} guests</div>
          </div>
        </li>`;
      }).join('')}</ul>`
    : `<p class="review-empty">No tours selected — we'll follow up with recommendations.</p>`;

  const servicesHtml = d.selectedServices.length
    ? d.selectedServices.map(s => {
        const srv = EXTRA_SERVICES.find(x => x.id === s.id);
        return `<div class="review-row">
          <span class="review-label">${srv?.emoji} ${srv?.name}</span>
          <span class="review-value">${[s.option, s.date ? formatDate(s.date) : ''].filter(Boolean).join(' · ') || 'Details TBD'}</span>
        </div>`;
      }).join('')
    : `<p class="review-empty">No extra services selected.</p>`;

  return `
    <span class="step-tag">Step 7 — Review</span>
    <h2>Review your request</h2>
    <p>Everything look good? Hit submit and our team will be in touch within 24 hours.</p>

    <div class="review-section">
      <div class="review-section-header">
        <span class="review-section-title">Your details</span>
        <span class="review-edit-btn" onclick="goToStep(1)">Edit</span>
      </div>
      <div class="review-row"><span class="review-label">Name</span><span class="review-value">${esc(d.name) || '—'}</span></div>
      <div class="review-row"><span class="review-label">Email</span><span class="review-value">${esc(d.email) || '—'}</span></div>
      <div class="review-row"><span class="review-label">Phone</span><span class="review-value">${esc(d.phone) || '—'}</span></div>
      <div class="review-row"><span class="review-label">Property</span><span class="review-value">${esc(d.property === 'Other' ? d.propertyOther : d.property) || '—'}</span></div>
      <div class="review-row"><span class="review-label">Arrival date</span><span class="review-value">${d.arrivalDate ? formatDate(d.arrivalDate) : '—'}</span></div>
      <div class="review-row"><span class="review-label">Departure date</span><span class="review-value">${d.departureDate ? formatDate(d.departureDate) : '—'}</span></div>
    </div>

    <div class="review-section">
      <div class="review-section-header">
        <span class="review-section-title">Group</span>
        <span class="review-edit-btn" onclick="goToStep(2)">Edit</span>
      </div>
      <div class="review-row"><span class="review-label">Adults</span><span class="review-value">${d.adults}</span></div>
      <div class="review-row"><span class="review-label">Kids</span><span class="review-value">${d.kids > 0 ? `${d.kids} (${d.kidsAges.join(', ') || 'ages not specified'})` : 'None'}</span></div>
      ${d.celebration && d.celebration !== 'none' ? `<div class="review-row"><span class="review-label">Occasion</span><span class="review-value">${CELEBRATION_OPTIONS.find(c=>c.id===d.celebration)?.label || ''}</span></div>` : ''}
    </div>

    <div class="review-section">
      <div class="review-section-header">
        <span class="review-section-title">Selected tours</span>
        <span class="review-edit-btn" onclick="goToStep(5)">Edit</span>
      </div>
      ${toursHtml}
    </div>

    <div class="review-section">
      <div class="review-section-header">
        <span class="review-section-title">Extra services</span>
        <span class="review-edit-btn" onclick="goToStep(6)">Edit</span>
      </div>
      ${servicesHtml}
    </div>

    <p class="privacy-note">By submitting you agree to be contacted by Lokani Tours regarding your reservation.<br>Your information is kept private and never shared.</p>`;
}

/* ─── Step Navigation & Validation ──────────────────────────────────────── */
function goNext() {
  if (!validateStep(state.step)) return;
  collectStepData(state.step);
  state.step++;
  renderStep();
}

function goBack() {
  if (state.step === 1) {
    renderWelcome();
    return;
  }
  collectStepData(state.step);
  state.step--;
  renderStep();
}

function goToStep(n) {
  collectStepData(state.step);
  state.step = n;
  renderStep();
}

function validateStep(step) {
  if (step === 1) {
    let ok = true;
    const name  = document.getElementById('f-name')?.value.trim();
    const email = document.getElementById('f-email')?.value.trim();
    const phone = document.getElementById('f-phone')?.value.trim();
    const prop  = document.getElementById('f-property')?.value;
    const pOther = document.getElementById('f-property-other')?.value.trim();
    const arr   = document.getElementById('f-arrival')?.value;
    const dep   = document.getElementById('f-departure')?.value;

    if (!name)  { showError('err-name', true);  ok = false; }
    else          showError('err-name', false);
    if (!email || !email.includes('@')) { showError('err-email', true); ok = false; }
    else          showError('err-email', false);
    if (!phone) { showError('err-phone', true); ok = false; }
    else          showError('err-phone', false);
    
    if (!prop) { showError('err-property', true); ok = false; }
    else         showError('err-property', false);

    if (prop === 'Other' && !pOther) { showError('err-property-other', true); ok = false; }
    else                               showError('err-property-other', false);

    if (!arr)   { showError('err-arrival', true); ok = false; }
    else          showError('err-arrival', false);
    if (!dep)   { showError('err-departure', true); ok = false; }
    else          showError('err-departure', false);
    
    if (!ok) shake('.step-nav .btn-next');
    return ok;
  }
  if (step === 2) {
    let ok = true;
    const d = state.data;
    
    // Validate Kids Ages if kids > 0
    if (d.kids > 0) {
      // Ensure each kid index exists in the array and has a value
      const allSelected = d.kidsAges.length >= d.kids && d.kidsAges.slice(0, d.kids).every(age => age && age !== '');
      const errAges = document.getElementById('err-kids-ages');
      if (!allSelected) {
        if (errAges) errAges.style.display = 'block';
        ok = false;
      } else {
        if (errAges) errAges.style.display = 'none';
      }
    }

    // Validate Celebration
    const errCeleb = document.getElementById('err-celebration');
    if (!d.celebration) {
      if (errCeleb) errCeleb.style.display = 'block';
      ok = false;
    } else {
      if (errCeleb) errCeleb.style.display = 'none';
    }

    if (!ok) shake('.step-nav .btn-next');
    return ok;
  }
  if (step === 3) {
    if (!state.data.budget) {
      const el = document.getElementById('err-budget');
      if (el) el.style.display = 'block';
      shake('.step-nav .btn-next');
      return false;
    }
  }
  if (step === 4) {
    if (state.data.interests.length === 0) {
      const el = document.getElementById('err-interests');
      if (el) el.style.display = 'block';
      shake('.step-nav .btn-next');
      return false;
    }
  }
  return true;
}

function collectStepData(step) {
  const d = state.data;
  if (step === 1) {
    d.name          = document.getElementById('f-name')?.value.trim()   || d.name;
    d.email         = document.getElementById('f-email')?.value.trim()  || d.email;
    d.phone         = document.getElementById('f-phone')?.value.trim()  || d.phone;
    d.property      = document.getElementById('f-property')?.value      || d.property;
    d.propertyOther = document.getElementById('f-property-other')?.value.trim() || d.propertyOther;
    d.arrivalDate   = document.getElementById('f-arrival')?.value       || d.arrivalDate;
    d.departureDate = document.getElementById('f-departure')?.value     || d.departureDate;
  }
}

function showError(id, show) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = show ? 'block' : 'none';
    el.classList.toggle('visible', show);
  }
}

function shake(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.classList.remove('shake');
  void el.offsetWidth;
  el.classList.add('shake');
  el.addEventListener('animationend', () => el.classList.remove('shake'), { once: true });
}

/* ─── Step Event Bindings ────────────────────────────────────────────────── */
function bindStepEvents() {
  // Step 1 — show/hide other property
  const propSelect = document.getElementById('f-property');
  if (propSelect) {
    propSelect.addEventListener('change', () => {
      const group = document.getElementById('other-property-group');
      if (group) group.classList.toggle('hidden', propSelect.value !== 'Other');
    });
  }

  // Step 2 — celebration cards
  document.querySelectorAll('[data-celebrate]').forEach(card => {
    card.addEventListener('click', () => {
      state.data.celebration = card.dataset.celebrate;
      document.querySelectorAll('[data-celebrate]').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const err = document.getElementById('err-celebration');
      if (err) err.style.display = 'none';
    });
  });

      // Step 2 — age chips handled by setKidAge

  // Step 3 — budget cards
  document.querySelectorAll('[data-budget]').forEach(card => {
    card.addEventListener('click', () => {
      state.data.budget = card.dataset.budget;
      document.querySelectorAll('[data-budget]').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const err = document.getElementById('err-budget');
      if (err) err.style.display = 'none';
    });
  });

  // Step 4 — interest cards
  document.querySelectorAll('[data-interest]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.interest;
      const idx = state.data.interests.indexOf(id);
      if (idx === -1) state.data.interests.push(id);
      else state.data.interests.splice(idx, 1);
      card.classList.toggle('selected');
      const err = document.getElementById('err-interests');
      if (err) err.style.display = 'none';
    });
  });
}

/* ─── Counter Buttons ────────────────────────────────────────────────────── */
function changeCount(field, delta) {
  const min = field === 'adults' ? 1 : 0;
  state.data[field] = Math.max(min, state.data[field] + delta);

  const valEl = document.getElementById(`${field}-val`);
  if (valEl) valEl.textContent = state.data[field];

  const minusBtn = document.getElementById(`${field}-minus`);
  if (minusBtn) minusBtn.disabled = state.data[field] <= min;

  // Update total guests
  const total = state.data.adults + state.data.kids;
  const totalEl = document.getElementById('total-guests-val');
  if (totalEl) totalEl.textContent = total;

  // Show/hide kids ages section & update entries
  if (field === 'kids') {
    const sec = document.getElementById('kids-ages-section');
    if (sec) {
      sec.classList.toggle('hidden', state.data.kids === 0);
      // Re-render the individual kid age selectors
      renderStep(); // Re-render the whole step to easily update kid age inputs
    }
    // Sync kidsAges array length
    while (state.data.kidsAges.length < state.data.kids) state.data.kidsAges.push('');
    while (state.data.kidsAges.length > state.data.kids) state.data.kidsAges.pop();
  }
}

function setKidAge(idx, age) {
  state.data.kidsAges[idx] = age;
  // Update UI chips for this kid
  document.querySelectorAll(`.age-chip[data-kid-idx="${idx}"]`).forEach(chip => {
    chip.classList.toggle('selected', chip.dataset.age === age);
  });
  // Clear error if all kid ages are now selected
  const allSelected = state.data.kidsAges.length === state.data.kids && state.data.kidsAges.every(a => a !== '');
  if (allSelected) {
    const err = document.getElementById('err-kids-ages');
    if (err) err.style.display = 'none';
  }
}

/* ─── Tour Selection ─────────────────────────────────────────────────────── */
function toggleTour(id) {
  const idx = state.data.selectedTours.findIndex(s => s.id === id);
  if (idx === -1) {
    state.data.selectedTours.push({ id, date: '', guests: state.data.adults, breakdown: '' });
  } else {
    state.data.selectedTours.splice(idx, 1);
  }
  // Re-render just the tour card
  const card = document.getElementById(`tour-${id}`);
  if (!card) return;
  const isSelected = state.data.selectedTours.some(s => s.id === id);
  card.classList.toggle('tour-selected', isSelected);

  const btn = card.querySelector('.btn-select-tour');
  if (btn) btn.textContent = isSelected ? '✓ Selected — click to remove' : 'Select this tour';
}

function updateTourData(id, field, value) {
  const entry = state.data.selectedTours.find(s => s.id === id);
  if (entry) entry[field] = value;
}

/* ─── Service Selection ──────────────────────────────────────────────────── */
function toggleService(id, event) {
  // Don't toggle if clicking inside the form
  if (event.target.closest('.service-details-form')) return;

  const idx = state.data.selectedServices.findIndex(s => s.id === id);
  if (idx === -1) {
    state.data.selectedServices.push({ id, option: null, date: '', notes: '' });
  } else {
    state.data.selectedServices.splice(idx, 1);
  }

  const card = document.getElementById(`srv-${id}`);
  if (card) card.classList.toggle('service-selected');
}

function setServiceOption(id, option) {
  let entry = state.data.selectedServices.find(s => s.id === id);
  if (!entry) {
    entry = { id, option: null, date: '', notes: '' };
    state.data.selectedServices.push(entry);
    const card = document.getElementById(`srv-${id}`);
    if (card) card.classList.add('service-selected');
  }
  entry.option = option;

  // Update chip UI
  const card = document.getElementById(`srv-${id}`);
  if (card) {
    card.querySelectorAll('.option-chip').forEach(chip => {
      chip.classList.toggle('active', chip.textContent.trim() === option);
    });
  }
}

function updateServiceData(id, field, value) {
  const entry = state.data.selectedServices.find(s => s.id === id);
  if (entry) entry[field] = value;
}

/* ─── Submit ─────────────────────────────────────────────────────────────── */
function submitForm() {
  collectStepData(7);
  // Log for now — wire up to backend/email later
  console.log('Reservation submitted:', JSON.stringify(state.data, null, 2));
  renderConfirmation();
}

function renderConfirmation() {
  const d = state.data;
  document.getElementById('app').innerHTML = `
    <div class="screen active" id="screen-confirm">
      <div class="confirm-page">
        <img src="Lokani%20Branding/lokani.web.logo.png" alt="Lokani Tours" class="confirm-logo" style="filter:brightness(0) invert(1)">
        <div class="confirm-icon">✓</div>
        <h2>Request received,<br><em style="font-style:italic;color:rgba(255,255,255,0.75);">${d.name.split(' ')[0]}!</em></h2>
        <p>Our team will review your request and reach out within 24 hours to confirm your tours, services, and all the details.</p>
        <div class="confirm-details">
          <div class="confirm-detail-row"><span>Name</span><span>${esc(d.name)}</span></div>
          <div class="confirm-detail-row"><span>Email</span><span>${esc(d.email)}</span></div>
          ${d.arrivalDate ? `<div class="confirm-detail-row"><span>Arrival</span><span>${formatDate(d.arrivalDate)}</span></div>` : ''}
          <div class="confirm-detail-row"><span>Tours selected</span><span>${d.selectedTours.length} tour${d.selectedTours.length !== 1 ? 's' : ''}</span></div>
          <div class="confirm-detail-row"><span>Extra services</span><span>${d.selectedServices.length > 0 ? d.selectedServices.length + ' added' : 'None'}</span></div>
        </div>
        <button class="btn-start-over" onclick="location.reload()">
          ← Start a new request
        </button>
      </div>
    </div>`;
}

/* ─── Transportation Flow ────────────────────────────────────────────────── */
function renderTransportForm() {
  const t = state.transport;
  const arrivalsHtml = t.arrivals.map((a, i) => renderArrivalBlock(a, i)).join('');
  const returnVisible = t.needsReturn === true;

  document.getElementById('app').innerHTML = `
    <div class="screen active" id="screen-transport">
      <div class="transport-page">
        <header class="transport-topbar">
          <img src="Lokani%20Branding/lokani.web.logo.png" alt="Lokani" class="transport-topbar-logo">
          <button class="btn-ghost" onclick="renderWelcome()" style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.25);">← Back</button>
        </header>
        <div class="transport-body">
          <span class="step-tag">Transportation only</span>
          <h2>Arrange your airport transfer</h2>
          <p>Provide your arrival details and we'll coordinate your pickup and drop-off.</p>

          <div class="section-title">Arrival details</div>
          <div id="arrivals-container">${arrivalsHtml}</div>
          <button class="btn-add-arrival" onclick="addArrival()">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            Add another arrival
          </button>

          <hr class="section-divider">

          <div class="form-group">
            <label>Do you need return transportation?</label>
            <div class="yes-no-group">
              <button class="yes-no-btn ${t.needsReturn === false ? 'active' : ''}" onclick="setNeedsReturn(false)">No</button>
              <button class="yes-no-btn ${t.needsReturn === true  ? 'active' : ''}" onclick="setNeedsReturn(true)">Yes</button>
            </div>
          </div>

          <div class="return-fields ${returnVisible ? 'visible' : ''}" id="return-fields">
            <div class="section-title">Return details</div>
            <div class="form-grid">
              <div class="form-group">
                <label>Departure date</label>
                <input class="form-control" type="date" id="r-dep-date" value="${esc(t.returnDepartureDate)}" min="${todayStr()}">
              </div>
              <div class="form-group">
                <label>Departure time</label>
                <input class="form-control" type="time" id="r-dep-time" value="${esc(t.returnDepartureTime)}">
              </div>
            </div>
            <div class="form-grid">
              <div class="form-group">
                <label>Return date <span>(if different)</span></label>
                <input class="form-control" type="date" id="r-ret-date" value="${esc(t.returnDate)}" min="${todayStr()}">
              </div>
              <div class="form-group">
                <label>Return time <span>(optional)</span></label>
                <input class="form-control" type="time" id="r-ret-time" value="${esc(t.returnTime)}">
              </div>
            </div>
            <div class="form-group">
              <label>Pickup location for return</label>
              <input class="form-control" type="text" id="r-location" placeholder="Villa or address for pickup" value="${esc(t.returnLocation)}">
            </div>
          </div>
        </div>

        <nav class="step-nav">
          <button class="btn-back" onclick="renderWelcome()">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Back
          </button>
          <button class="btn-next btn-submit" onclick="submitTransport()">Submit Transportation Request ✓</button>
        </nav>
      </div>
    </div>`;
}

function renderArrivalBlock(arrival, index) {
  const canRemove = state.transport.arrivals.length > 1;
  return `
    <div class="arrival-block" id="arrival-block-${index}">
      <div class="arrival-block-header">
        <span class="arrival-block-title">Arrival ${index + 1}</span>
        ${canRemove ? `<button class="btn-remove-arrival" onclick="removeArrival(${index})">Remove</button>` : ''}
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Flight number <span>(optional)</span></label>
          <input class="form-control" type="text" placeholder="e.g. AA 1234" value="${esc(arrival.flightNumber)}"
            onchange="updateArrival(${index},'flightNumber',this.value)">
        </div>
        <div class="form-group">
          <label>House / property name</label>
          <input class="form-control" type="text" placeholder="Villa name" value="${esc(arrival.houseName)}"
            onchange="updateArrival(${index},'houseName',this.value)">
        </div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Arrival date</label>
          <input class="form-control" type="date" value="${esc(arrival.arrivalDate)}" min="${todayStr()}"
            onchange="updateArrival(${index},'arrivalDate',this.value)">
        </div>
        <div class="form-group">
          <label>Arrival time</label>
          <input class="form-control" type="time" value="${esc(arrival.arrivalTime)}"
            onchange="updateArrival(${index},'arrivalTime',this.value)">
        </div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Number of guests</label>
          <input class="form-control" type="number" min="1" placeholder="2" value="${esc(arrival.guestCount)}"
            onchange="updateArrival(${index},'guestCount',this.value)">
        </div>
        <div class="form-group">
          <label>Name for pickup sign</label>
          <input class="form-control" type="text" placeholder="Your last name" value="${esc(arrival.pickupSign)}"
            onchange="updateArrival(${index},'pickupSign',this.value)">
        </div>
      </div>
      <div class="form-group">
        <label>Guest names <span>(optional)</span></label>
        <input class="form-control" type="text" placeholder="Names of people arriving" value="${esc(arrival.guestNames)}"
          onchange="updateArrival(${index},'guestNames',this.value)">
      </div>
      <div class="form-group">
        <label>Special instructions <span>(optional)</span></label>
        <textarea class="form-control" rows="2" placeholder="Anything else we should know…"
          onchange="updateArrival(${index},'notes',this.value)">${esc(arrival.notes)}</textarea>
      </div>
    </div>`;
}

function addArrival() {
  state.transport.arrivals.push(emptyArrival());
  renderTransportForm();
}

function removeArrival(index) {
  state.transport.arrivals.splice(index, 1);
  renderTransportForm();
}

function updateArrival(index, field, value) {
  state.transport.arrivals[index][field] = value;
}

function setNeedsReturn(val) {
  state.transport.needsReturn = val;
  document.querySelectorAll('.yes-no-btn').forEach(btn => btn.classList.remove('active'));
  event.currentTarget.classList.add('active');
  const returnFields = document.getElementById('return-fields');
  if (returnFields) returnFields.classList.toggle('visible', val);
}

function submitTransport() {
  // Collect return fields
  const t = state.transport;
  t.returnDepartureDate = document.getElementById('r-dep-date')?.value || '';
  t.returnDepartureTime = document.getElementById('r-dep-time')?.value || '';
  t.returnDate          = document.getElementById('r-ret-date')?.value || '';
  t.returnTime          = document.getElementById('r-ret-time')?.value || '';
  t.returnLocation      = document.getElementById('r-location')?.value || '';
  console.log('Transport submitted:', JSON.stringify(t, null, 2));
  renderTransportConfirmation();
}

function renderTransportConfirmation() {
  const firstArrival = state.transport.arrivals[0];
  document.getElementById('app').innerHTML = `
    <div class="screen active" id="screen-transport-confirm">
      <div class="confirm-page">
        <img src="Lokani%20Branding/lokani.web.logo.png" alt="Lokani Tours" class="confirm-logo" style="filter:brightness(0) invert(1)">
        <div class="confirm-icon">✓</div>
        <h2>Transfer request<br><em style="font-style:italic;color:rgba(255,255,255,0.75);">received!</em></h2>
        <p>Our team will confirm your transportation details within 24 hours. You'll receive all pickup information via WhatsApp or email.</p>
        <div class="confirm-details">
          <div class="confirm-detail-row"><span>Arrivals</span><span>${state.transport.arrivals.length} group${state.transport.arrivals.length > 1 ? 's' : ''}</span></div>
          ${firstArrival.arrivalDate ? `<div class="confirm-detail-row"><span>First arrival</span><span>${formatDate(firstArrival.arrivalDate)}</span></div>` : ''}
          <div class="confirm-detail-row"><span>Return transfer</span><span>${state.transport.needsReturn ? 'Yes' : 'No'}</span></div>
        </div>
        <button class="btn-start-over" onclick="location.reload()">← Start a new request</button>
      </div>
    </div>`;
}

/* ─── Utilities ──────────────────────────────────────────────────────────── */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(m,10)-1]} ${parseInt(d,10)}, ${y}`;
}

/* ─── Init ───────────────────────────────────────────────────────────────── */
renderWelcome();
