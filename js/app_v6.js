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
  { id: '65-100',   label: '$65 – $100',   desc: '(per person)', tours: 'Ziplining, Horseback Riding, Monkey Tour, Crocodile Tour' },
  { id: '100-150',  label: '$100 – $150',  desc: '(per person)', tours: 'ATV Tour, Surf Lessons, Coffee & Tasting, Jet Skiing' },
  { id: '150-250',  label: '$150 – $250',  desc: '(per person)', tours: 'Tortuga Island, Paragliding, and more' },
  { id: '250+',     label: '$250+',        desc: '(per person)', tours: 'Private Sailing, fishing tours, and premium experiences' },
];

const INTERESTS = [
  { id: 'adventure',   label: 'Adventure',            desc: 'ATV, Zipline, Paragliding',      emoji: '🏔️', icon: 'assets/icons/LOKANI ICONS-04.png' },
  { id: 'ocean',       label: 'Ocean Experiences',    desc: 'Jet Ski, Fishing, Sailing',       emoji: '🌊', icon: 'assets/icons/LOKANI ICONS-09.png' },
  { id: 'wildlife',    label: 'Nature & Wildlife',    desc: 'Monkeys, Crocodiles, Rainforest', emoji: '🌿', icon: 'assets/icons/LOKANI ICONS-20.png' },
  { id: 'relaxation',  label: 'Relaxation & Wellness',desc: 'Spa, Sunset, Slow experiences',   emoji: '🧘', icon: 'assets/icons/LOKANI ICONS-11.png' },
  { id: 'food',        label: 'Food & Culture',       desc: 'Local cuisine & cultural tours',  emoji: '🍽️', icon: 'assets/icons/LOKANI ICONS-21.png' },
];

const TOURS = [
  { id: 'atv',             name: 'ATV Tour',             tagline: 'Off-road jungle adventure',      interests: ['adventure'],            tiers: ['100-150','150-250','250+'], priceFrom: 70,  duration: '2–4 hours',          emoji: '🏍️',  image: 'assets/atv.jpg',  gradient: 'linear-gradient(135deg,#5D4037,#A1643E)',  desc: 'Explore rugged Costa Rica terrain on an exciting ATV adventure through jungle trails and scenic overlooks.', durationOptions: ['2h ($70)', '3h ($95)', '4h ($120)'] },
  { id: 'horseback',       name: 'Horseback Riding',     tagline: 'Coastal trail rides',            interests: ['adventure','wildlife'],  tiers: ['65-100','100-150','150-250','250+'], priceFrom: 65,  duration: '2–3 hours',          emoji: '🐴',  image: 'assets/horseback.jpg', gradient: 'linear-gradient(135deg,#BF360C,#E64A19)',  desc: 'Ride through scenic coastal trails, tropical forests, and stunning ocean overlooks with expert guides.', timeOptions: ['AM', 'PM'], durationOptions: ['2h', '3h'] },
  { id: 'monkeys',         name: 'Monkey Tour',          tagline: 'Meet the jungle locals',         interests: ['wildlife'],             tiers: ['65-100','100-150','150-250','250+'], priceFrom: 55,  duration: '2–3 hours',          emoji: '🐒',  image: 'assets/monkeys.jpg', gradient: 'linear-gradient(135deg,#33691E,#558B2F)',  desc: 'Get up close with howler and white-faced monkeys in their natural tropical habitat. A must for nature lovers.', transportNote: 'Transportation to the Mangrove is an extra cost depending on where you are staying — <strong>$190 for 1–6 pax</strong>.' },
  { id: 'crocodile',       name: 'Crocodile Tour',       tagline: 'River wildlife adventure',       interests: ['wildlife'],             tiers: ['65-100','100-150','150-250','250+'], priceFrom: 65,  duration: '2 hours',            emoji: '🐊',  image: 'assets/crocodile.jpg', gradient: 'linear-gradient(135deg,#827717,#B39000)',  desc: 'Cruise the Tarcoles River and spot massive American crocodiles in the wild up close.', kidsNote: 'Kids ages 5–12: <strong>$45</strong>. Kids under 4: <strong>free</strong>.', timeOptions: ['AM', 'PM'] },
  { id: 'snorkeling',      name: 'Snorkeling',           tagline: 'Discover marine life',           interests: ['ocean'],                tiers: ['65-100','100-150','150-250','250+'], priceFrom: 90,  duration: '2–3 hours',          emoji: '🤿',  image: 'assets/snorkeling.jpg', gradient: 'linear-gradient(135deg,#00838F,#00ACC1)',  desc: 'Discover vibrant marine life in the crystal-clear Pacific waters near the coastline.', durationOptions: ['2h', '3h'] },
  { id: 'zipline',         name: 'Zipline',              tagline: 'Fly through the canopy',         interests: ['adventure'],            tiers: ['65-100','100-150','150-250','250+'], priceFrom: 70, duration: '3 hours',            emoji: '🪂',  image: 'assets/zipline.jpg', gradient: 'linear-gradient(135deg,#2E7D32,#43A047)',  desc: 'Soar through the jungle canopy on thrilling ziplines with breathtaking panoramic views of the valley.', timeOptions: ['AM', 'PM'] },
  { id: 'rafting',         name: 'White Water Rafting',  tagline: 'River rapids adventure',         interests: ['adventure'],            tiers: ['100-150','150-250','250+'],          priceFrom: 120, duration: 'Full day',            emoji: '🚣',  image: 'assets/rafting.jpg', gradient: 'linear-gradient(135deg,#0277BD,#01579B)',  desc: 'Experience the thrill of navigating high-energy river rapids through lush tropical canyons with expert guides.', priceUnit: '/ person (pickup included)' },
  { id: 'jetski',          name: 'Jet Ski',              tagline: 'Race across the waves',          interests: ['ocean'],                tiers: ['100-150','150-250','250+'],          priceFrom: 120, duration: '1–4 hours',          emoji: '🌊',  image: 'assets/jetski.jpg',  gradient: 'linear-gradient(135deg,#006064,#00838F)',  desc: 'Race across the Pacific waves on a thrilling jet ski adventure along the stunning coastline.', durationOptions: ['1h ($120)', '2h ($200)', '3h ($280)', '4h ($350)'] },
  { id: 'tortuga',         name: 'Tortuga Island',       tagline: 'Paradise island escape',         interests: ['ocean','relaxation'],   tiers: ['150-250','250+'],                   priceFrom: 160, duration: 'Full day',            emoji: '🏝️', image: 'assets/tortuga.jpg', gradient: 'linear-gradient(135deg,#00695C,#00897B)',  desc: 'All-inclusive full-day tour to Tortuga Island departing from Los Sueños Marina. Includes light breakfast, gourmet and DELICIOUS beachfront lunch, unlimited drinks with VIP beach service (host will go to every chair and serve you), private beach chair and umbrella plus 3 activities included (snorkeling, banana boat and hike — <em>hike is optional</em>).' },
  { id: 'paragliding',     name: 'Paragliding',          tagline: 'Soar above the coast',           interests: ['adventure'],            tiers: ['150-250','250+'],                   priceFrom: 165, duration: '2 hours',            emoji: '🪁',  image: 'assets/paragliding.jpg', gradient: 'linear-gradient(135deg,#1565C0,#1976D2)',  desc: 'Fly high above the coast and jungle with a professional paragliding guide. Unforgettable views await.', timeOptions: ['AM', 'PM'] },
  { id: 'fishing',         name: 'Sport Fishing',        tagline: 'Offshore fishing',               interests: ['ocean'],                tiers: ['250+'],                             priceFrom: 850, duration: 'Full day',            emoji: '🎣',  image: 'assets/fishing.jpg', gradient: 'linear-gradient(135deg,#01579B,#0277BD)',  desc: 'World-class offshore fishing for marlin, sailfish, and dorado with expert local guides.' },
  { id: 'surf',            name: 'Surf Lessons',         tagline: 'Catch your first wave',          interests: ['ocean','adventure'],    tiers: ['100-150','150-250','250+'],          priceFrom: 80,  duration: '2 hours',            emoji: '🏄‍♂️', image: 'assets/surf.jpg', gradient: 'linear-gradient(135deg,#0097A7,#00BCD4)',  desc: 'Learn to surf with professional local instructors at some of the world’s best beginner breaks.', timeOptions: ['AM', 'PM'] },
  { id: 'coffee',          name: 'Coffee & Guaro Tasting',     tagline: 'Authentic local flavors',        interests: ['food'],                 tiers: ['100-150','150-250','250+'],          priceFrom: 80,  duration: '2 hours',            emoji: '☕',  image: 'assets/coffee.jpg', gradient: 'linear-gradient(135deg,#795548,#8D6E63)',  desc: 'We bring the flavors to you with a guided tasting of Costa Rican coffee and Guaro. Enjoy traditional coffee brewing and cupping, premium Guaro tastings, and handcrafted local snacks—all while supporting local farmers, artists, and families.' },
  { id: 'volcano',         name: 'Volcano Tour',         tagline: 'Majestic peaks & hot springs',   interests: ['adventure'],            tiers: ['150-250','250+'],                   priceFrom: 180, duration: 'Full day',            emoji: '🌋',  image: 'assets/volcano.jpg', gradient: 'linear-gradient(135deg,#BF360C,#3E2723)',  desc: 'This full-day tour includes a day pass to the hot springs, transportation, and lunch.', infoNote: 'For night stays, ask the Lokani team for price and information.<br><a href="https://wa.me/1234567890" target="_blank" style="color:var(--teal); font-weight:600; text-decoration:none; margin-right: 12px; display:inline-block; margin-top:6px;">📱 WhatsApp</a><a href="mailto:info@lokanitours.com" style="color:var(--teal); font-weight:600; text-decoration:none; display:inline-block; margin-top:6px;">✉️ Email</a>' },
  { id: 'chocolate',       name: 'Chocolate Tasting',    tagline: 'The art of cocoa',               interests: ['food'],                 tiers: ['65-100','100-150','150-250','250+'], priceFrom: 65,  duration: '2 hours',            emoji: '🍫',  image: 'assets/chocolate.jpg', gradient: 'linear-gradient(135deg,#3E2723,#5D4037)',  desc: 'Experience the rich flavors of Costa Rican cacao through an authentic and flavorful chocolate tasting.', timeOptions: ['AM', 'PM'] },
  { id: 'partyboat',       name: 'Party Boat',    tagline: 'Music, drinks & ocean vibes',    interests: ['ocean','relaxation'],   tiers: ['150-250','250+'],                   priceFrom: 1550,  duration: '4 hours',            emoji: '🍹',  image: 'assets/party_boat.jpg', gradient: 'linear-gradient(135deg,#FF6F00,#E65100)',  desc: 'Dance the afternoon away on a luxury catamaran with live music, open bar, and the best sunset views on the coast.', priceUnit: 'for whole boat', timeOptions: ['8 AM to 12 PM', '12 PM to 4 PM'] },
];


const EXTRA_SERVICES = [
  { id: 'massage',      name: 'Massage',        icon: 'assets/icons/LOKANI ICONS-11.png', desc: 'Professional in-villa massage service. Relax and recharge.',          priceFrom: 65,  options: ['55 min', '90 min'] },
  { id: 'iv-therapy',   name: 'IV Therapy',     icon: 'assets/icons/LOKANI ICONS-18.png', desc: 'Recharge and recover with our hydration-focused in-villa IV therapy, packed with fluids, Complex B vitamins, and Vitamin C, this treatment helps restore hydration, boost energy, and get you feeling refreshed faster so you can get the best of your stay.',              priceFrom: 150, options: null },
  { id: 'private-chef', name: 'Private Chef',   icon: 'assets/icons/LOKANI ICONS-12.png', desc: 'In-villa private chef with fresh local ingredients. Choose a meal.',  priceFrom: 105, options: ['Breakfast · 1–8 pax ($105)', 'Breakfast · 10–14 pax ($130)', 'Lunch · 1–8 pax ($120)', 'Lunch · 10–14 pax ($140)', 'Dinner · 1–8 pax ($140)', 'Dinner · 10–14 pax ($170)'] },
  { id: 'bartender',    name: 'Bartender',      icon: 'assets/icons/LOKANI ICONS-21.png', desc: 'Professional mixologist to prepare fresh tropical cocktails at your villa.', priceFrom: 80,  options: ['4 hours', 'Full evening'], note: 'Client provides the liquor.' },
  { id: 'night-concierge', name: 'Night Concierge', icon: 'assets/icons/night_concierge.svg', desc: 'Enjoy Costa Rica nightlife stress-free — we handle restaurant reservations, club and bar access, VIP tables, grocery runs, taxi coordination and more, so your group enjoys an authentic local experience. From the first stop of the night to making sure everyone returns safely to the villa, we\'ve got your night covered.', priceFrom: 200, options: null, nightOnly: true },
];

const CELEBRATION_OPTIONS = [
  { id: 'family',      label: 'Family Trip',          icon: 'assets/icons/family_trip.png' },
  { id: 'bachelor',    label: 'Bachelor Party',       icon: 'assets/icons/bachelor_party.png' },
  { id: 'vacation',    label: 'Vacation',             icon: 'assets/icons/vacation_trip.png' },
  { id: 'couple',      label: 'Couple',               icon: 'assets/icons/couple_trip.png' },
  { id: 'birthday',    label: 'Birthday',             icon: 'assets/icons/birthday_trip.png' },
  { id: 'none',        label: 'No specific',          icon: 'assets/icons/general_trip.png' },
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
    adults: 0, kids: 0, kidsAges: [], celebration: null,
    // Step 3
    budget: null,
    // Step 4
    interests: [],
    // Step 5 — selected tours [{id, date, adults, kids}]
    selectedTours: [],
    // Step 6 — selected services [{id, option, date, notes}]
    selectedServices: [],
    // Step 7
    needsTransportation: null,
  },
  transport: {
    name: '', email: '', phone: '',
    isMultipleArrivals: false,
    arrivals: [emptyArrival()],
    needsReturn: null,
    departures: [],
  },
};

function emptyArrival() {
  return { flightNumber: '', houseName: '', arrivalDate: '', arrivalTime: '', guestCount: '', guestNames: '', pickupSign: '', notes: '' };
}

function emptyDeparture() {
  return { departureDate: '', departureTime: '', returnDate: '', returnTime: '', location: '', notes: '' };
}

/* ─── Router ─────────────────────────────────────────────────────────────── */
const TOTAL_STEPS = 9;

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
  const stepRenderers = [null, renderStep1, renderStep2, renderStep3, renderStep4, renderStep5, renderStep6, renderStep7, renderStep8, renderStep9];
  const content = stepRenderers[state.step]?.() ?? '';
  const isLast = (state.step === TOTAL_STEPS);

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
          ${isLast
            ? `<button class="btn-next btn-submit" onclick="submitForm()">Submit Reservation Request ✓</button>`
            : `<button class="btn-next" onclick="goNext()">Continue <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`
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

  const celebCards = CELEBRATION_OPTIONS.map(c => {
    // Some generated icons have different internal margins; we normalize them with a zoom scale
    const scale = (c.id === 'family' || c.id === 'none') ? '145%' : '125%'; 
    return `
      <div class="select-card ${d.celebration === c.id ? 'selected' : ''}" data-celebrate="${c.id}">
        <div class="card-icon" style="height:90px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;">
          <div style="width:80px;height:80px;border-radius:50%;background-image:url('${c.icon}');background-size:${scale};background-position:center;background-repeat:no-repeat;border:none;"></div>
        </div>
        <div class="card-label">${c.label}</div>
      </div>`;
  }).join('');

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
    <div class="field-error mb-16" id="err-total-guests" style="display:none; text-align:center;">Please add at least one guest</div>

    <div class="counter-row">
      <div class="counter-info">
        <div class="counter-label">Adults</div>
        <div class="counter-desc">Age 18+</div>
      </div>
      <div class="counter-controls">
        <button class="counter-btn" id="adults-minus" onclick="changeCount('adults',-1)" ${d.adults <= 0 ? 'disabled' : ''}>−</button>
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
    <div class="card-grid cols-2">${cards}</div>
    <div style="text-align:center; margin-top:32px;">
      <button class="btn-skip-filters" onclick="skipFilters()" style="background:none;border:none;color:var(--teal);font-size:0.92rem;font-weight:600;text-decoration:underline;cursor:pointer;padding:8px 16px;">
        Skip step and see all available tours and services →
      </button>
    </div>`;
}

function skipFilters() {
  state.data.budget = '';
  state.data.interests = [];
  state.step = 5;
  renderStep();
}

/* ─── Step 4: Interests ──────────────────────────────────────────────────── */
function renderStep4() {
  const d = state.data;
  const cards = INTERESTS.map(i => `
    <div class="select-card ${d.interests.includes(i.id) ? 'selected' : ''}" data-interest="${i.id}">
      <div class="card-icon">
        <img src="${i.icon}" alt="${i.label}" style="width:80px;height:80px;object-fit:contain;margin:0 auto 12px;">
      </div>
      <div class="card-label">${i.label}</div>
      <div class="card-sub">${i.desc}</div>
    </div>`).join('');

  return `
    <span class="step-tag">Step 4 — Interests</span>
    <h2>What kind of experiences are you looking for?</h2>
    <p class="multi-hint">Select all that apply—we'll craft your Costa Rica experience around your preferences.</p>
    <div class="field-error mb-16" id="err-interests" style="display:none;">Please select at least one interest</div>
    <div class="card-grid">${cards}</div>`;
}

/* ─── Step 5: Tour Recommendations ──────────────────────────────────────── */
function renderStep5() {
  const d = state.data;
  
  // 1. Filter Tours
  const filtered = TOURS.filter(t => {
    const matchesBudget   = !d.budget || t.tiers.includes(d.budget);
    const matchesInterest = d.interests.length === 0 || t.interests.some(i => d.interests.includes(i));
    return matchesBudget && matchesInterest;
  });

  if (filtered.length === 0) {
    return `
      <span class="step-tag">Step 5 — Your tours</span>
      <h2>Tours we recommend for you</h2>
      <div class="no-tours">
        <div class="no-tours-icon">🔍</div>
        <h3>No tours match your filters</h3>
        <p>Try going back and adjusting your budget or interest selections.</p>
      </div>`;
  }

  // 2. Render a single deduped list of tour cards
  const cards = filtered.map(t => {
    const sel = d.selectedTours.find(s => s.id === t.id);
    const isSelected = !!sel;
    const primaryInterest = INTERESTS.find(i => t.interests.includes(i.id));
    const displayInterest = primaryInterest ? primaryInterest.label : t.interests[0];

    return `
      <div class="tour-card ${isSelected ? 'tour-selected' : ''}" id="tour-${t.id}">
        <div class="tour-image" style="background-image: url('${t.image}'); background-size: cover; background-position: center;">
          <div class="tour-image-label">${displayInterest}</div>
        </div>
        <div class="tour-body">
          <div class="tour-name">${t.name}</div>
          <div class="tour-desc">${t.desc}</div>
          <div class="tour-meta">
            <div class="tour-duration">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#8A8480" stroke-width="1.2"/><path d="M6 3.5V6l2 1.5" stroke="#8A8480" stroke-width="1.2" stroke-linecap="round"/></svg>
              ${t.duration}
            </div>
            <div class="tour-price">Price starting at <span>$${t.priceFrom} ${t.priceUnit || '/ person'}</span></div>
          </div>
          ${t.kidsNote ? `<div class="tour-kids-pricing-row"><div class="tour-price">Kids pricing <span>$45 (5–12) / kid</span></div></div>
          <div class="tour-kids-free-note"><strong>Note:</strong> Kids under 4 is free.</div>` : ''}
          ${t.transportNote ? `<div class="tour-transport-note" style="font-size:0.82rem;color:#6B6560;background:rgba(26,92,74,0.05);border-left:3px solid var(--teal);padding:8px 10px;border-radius:4px;margin:8px 0 0;line-height:1.45;"><strong style="color:var(--teal);text-transform:uppercase;letter-spacing:0.5px;font-size:0.72rem;display:block;margin-bottom:2px;">Getting there</strong>${t.transportNote}</div>` : ''}
          ${t.infoNote ? `<div class="tour-info-note" style="font-size:0.82rem;color:#6B6560;background:rgba(26,92,74,0.05);border-left:3px solid var(--teal);padding:8px 10px;border-radius:4px;margin:8px 0 0;line-height:1.45;"><strong style="color:var(--teal);text-transform:uppercase;letter-spacing:0.5px;font-size:0.72rem;display:block;margin-bottom:2px;">Good to know</strong>${t.infoNote}</div>` : ''}
          <button class="btn-select-tour" onclick="toggleTour('${t.id}')" style="margin-top:12px;">
            ${isSelected ? '✓ Selected — click to remove' : 'Select this tour'}
          </button>
        </div>

          <div class="tour-booking-form">
            <div class="booking-grid">
              <div class="form-group">
                <label>Preferred date</label>
                <input class="form-control" type="date" id="tour-date-${t.id}" value="${esc(sel?.date || '')}" min="${esc(d.arrivalDate) || todayStr()}" ${d.departureDate ? `max="${esc(d.departureDate)}"` : ''} onchange="updateTourData('${t.id}','date',this.value)">
              </div>
              <div class="form-group">
                <label>Guests</label>
                <input class="form-control" type="number" id="tour-guests-${t.id}" min="1" max="${state.data.adults + state.data.kids}" value="${sel?.guests || (state.data.adults + state.data.kids)}" oninput="validateTourGuestsInline('${t.id}', this, ${state.data.adults + state.data.kids})" onchange="updateTourData('${t.id}','guests',this.value)">
                <div class="field-error" id="err-tour-guests-inline-${t.id}" style="display:none; font-size:0.75rem; margin-top:4px; text-align:left; line-height:1.4;">Guest count cannot exceed your total party size (${state.data.adults + state.data.kids}).</div>
              </div>
            </div>
            ${t.id === 'volcano' ? `
              <div class="form-group" style="margin-top:12px;">
                <label style="display:flex; align-items:center; gap:8px; text-transform:none; letter-spacing:normal; cursor:pointer;">
                  <input type="checkbox" style="width:18px; height:18px; accent-color:var(--teal);" id="tour-nightstay-${t.id}" ${sel?.nightStay ? 'checked' : ''} onchange="updateTourData('${t.id}','nightStay',this.checked)">
                  <span>I'm interested in a night stay — please contact me with pricing</span>
                </label>
              </div>` : ''}
            ${t.durationOptions ? `
              <div class="form-group" style="margin-top:12px;" id="tour-duration-group-${t.id}">
                <label>Preferred duration</label>
                <div class="option-chips" style="margin-top:4px;">
                  ${t.durationOptions.map(o =>
                    `<span class="option-chip ${sel?.durationOption === o ? 'active' : ''}" onclick="setTourDuration('${t.id}','${o}',this); this.parentElement.querySelectorAll('.option-chip').forEach(c=>c.style.borderColor='');">${o}</span>`
                  ).join('')}
                </div>
              </div>` : ''}
            ${t.timeOptions ? `
              <div class="form-group" style="margin-top:12px;" id="tour-time-group-${t.id}">
                <label>Preferred time</label>
                <div class="option-chips" style="margin-top:4px;">
                  ${t.timeOptions.map(o =>
                    `<span class="option-chip ${sel?.time === o ? 'active' : ''}" onclick="setTourTime('${t.id}','${o}',this); this.parentElement.querySelectorAll('.option-chip').forEach(c=>c.style.borderColor='');">${o}</span>`
                  ).join('')}
                </div>
              </div>` : ''}
          </div>
        </div>`;
  }).join('');

  return `
    <span class="step-tag">Step 5 — Your tours</span>
    <h2>Tours we recommend for you</h2>
    <p class="multi-hint">Select the ones you're interested in — you can pick more than one.</p>
    <div class="field-error mb-24" id="err-tours" style="display:none; text-align:center;">Please select at least one tour to continue</div>
    <div class="tours-grid">${cards}</div>`;
}

/* ─── Step 6: Extra Services ─────────────────────────────────────────────── */
function renderStep6() {
  const d = state.data;
  const cards = EXTRA_SERVICES.map(s => {
    const sel = d.selectedServices.find(x => x.id === s.id);
    const isSelected = !!sel;
    let dropdownLabel = 'Select options...';
    if (sel?.options && sel.options.length > 0) {
      dropdownLabel = sel.options.length === 1 ? sel.options[0] : `${sel.options.length} options selected`;
    }

    const optionDropdown = s.options
      ? `<div class="custom-dropdown">
          <div class="custom-dropdown-header" onclick="this.classList.toggle('open')">
            ${dropdownLabel}
          </div>
          <div class="custom-dropdown-list">
            ${s.options.map(o => `
              <label class="custom-dropdown-item">
                <input type="checkbox" value="${o}" ${sel?.options && sel.options.includes(o) ? 'checked' : ''} onchange="setServiceOptionsCustom('${s.id}', '${o}', this.checked, event)">
                <span>${o}</span>
              </label>
            `).join('')}
          </div>
         </div>`
      : '';

    return `
      <div class="service-card ${isSelected ? 'service-selected' : ''}" id="srv-${s.id}" onclick="toggleService('${s.id}', event)">
        <div class="card-icon" style="height:90px;display:flex;align-items:center;justify-content:flex-start;">
          <img src="${s.icon}" alt="${s.name}" style="width:80px;height:80px;object-fit:contain;margin-bottom:0;">
        </div>
        <div class="service-name">${s.name}</div>
        <div class="service-desc">${s.desc}</div>
        ${s.note ? `<div class="service-note" style="font-size:0.82rem;color:#6B6560;background:rgba(26,92,74,0.05);border-left:3px solid var(--teal);padding:8px 10px;border-radius:4px;margin:4px 0 12px;line-height:1.45;"><strong style="color:var(--teal);text-transform:uppercase;letter-spacing:0.5px;font-size:0.72rem;display:block;margin-bottom:2px;">Please note</strong>${s.note}</div>` : ''}
        <div class="service-price">From $${s.priceFrom}</div>
        <div class="service-details-form" onclick="event.stopPropagation()">
          ${s.options ? `<label>Choose options</label>${optionDropdown}` : ''}
          <label>Preferred date</label>
          <input class="form-control" type="date" id="srv-date-${s.id}" value="${esc(sel?.date || '')}" min="${esc(d.arrivalDate) || todayStr()}" ${d.departureDate ? `max="${esc(d.departureDate)}"` : ''} onchange="updateServiceData('${s.id}','date',this.value); this.style.borderColor='';">
          <label>Preferred time</label>
          <select class="form-control" id="srv-time-${s.id}" onchange="updateServiceData('${s.id}','time',this.value); this.style.borderColor='';">${time15Options(sel?.time || '', s.nightOnly)}</select>
          <label>Notes <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:0.78rem">(optional)</span></label>
          <input class="form-control" type="text" placeholder="Any special requests…" value="${esc(sel?.notes || '')}" onchange="updateServiceData('${s.id}','notes',this.value)">
        </div>
      </div>`;
  }).join('');

  return `
    <span class="step-tag">Step 6 — Enhance your stay</span>
    <h2>Would you like to add any extra services?</h2>
    <p>All optional — add what sounds good and we'll include it in your reservation.</p>
    <div class="field-error mb-24" id="err-services" style="display:none; text-align:center;"></div>
    <div class="services-grid">
      ${cards}
      <div class="service-card ${d.selectedServices.length === 0 ? 'service-selected' : ''}" id="srv-none" onclick="clearServices()">
        <div class="card-icon" style="height:90px;display:flex;align-items:center;justify-content:flex-start;">
          <img src="assets/icons/LOKANI ICONS-08.png" alt="No" style="width:80px;height:80px;object-fit:contain;">
        </div>
        <div class="service-name">No, thank you</div>
        <div class="service-desc">I am not interested in any extra services at this time.</div>
      </div>
    </div>`;
}

/* ─── Step 7: Transportation Inquiry ─────────────────────────────────────── */
function renderStep7() {
  const d = state.data;
  return `
    <span class="step-tag">Step 7 — Transportation</span>
    <h2>Do you need transportation services?</h2>
    <p class="multi-hint">We can arrange private transfers for your group during your stay.</p>
    <div class="field-error mb-16" id="err-transport" style="display:none;">Please select an option to continue</div>
    <div class="card-grid">
      <div class="select-card ${d.needsTransportation === true ? 'selected' : ''}" onclick="setTransportation(true)">
        <div class="card-icon" style="height:90px;display:flex;align-items:center;justify-content:center;">
          <img src="assets/icons/LOKANI ICONS-07.png" alt="Yes" style="width:80px;height:80px;object-fit:contain;">
        </div>
        <div class="card-label">Yes, please</div>
        <div class="card-sub">I need help with transportation to/from my villa or tours.</div>
      </div>
      <div class="select-card ${d.needsTransportation === false ? 'selected' : ''}" onclick="setTransportation(false)">
        <div class="card-icon" style="height:90px;display:flex;align-items:center;justify-content:center;">
          <img src="assets/icons/LOKANI ICONS-08.png" alt="No" style="width:80px;height:80px;object-fit:contain;">
        </div>
        <div class="card-label">No, thank you</div>
        <div class="card-sub">I already have transportation or a rental car arranged.</div>
      </div>
    </div>`;
}

function setTransportation(val) {
  state.data.needsTransportation = val;
  showError('err-transport', false);
  // Auto-advance to the next step
  goNext();
}

/* ─── Step 8: Transportation Details ─────────────────────────────────────── */
function renderStep8() {
  const t = state.transport;
  const d = state.data;
  
  // Auto-fill house name for all arrivals if not already set manually
  t.arrivals.forEach(a => {
    if (!a.houseName) a.houseName = d.property === 'Other' ? d.propertyOther : d.property;
  });

  const arrivalsHtml = t.arrivals.map((a, i) => renderArrivalBlock(a, i, true)).join('');
  const returnVisible = t.needsReturn === true;
  const departuresHtml = t.departures.map((dep, i) => renderDepartureBlock(dep, i, true, d.property)).join('');

  return `
    <span class="step-tag">Step 8 — Transportation Details</span>
    <h2>Please provide your arrival details</h2>
    <p class="multi-hint">We'll arrange your pickup and drop-off based on this information.</p>

    <div class="form-group mb-24">
      <label>Arrival details</label>
    </div>

    <div id="arrivals-container">
      ${arrivalsHtml}
    </div>

    <button class="btn-add-arrival mb-24" onclick="addArrival(true)">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      Add Arrival
    </button>

    <hr class="section-divider mt-24 mb-24">

    <div class="form-group mb-24">
      <label>Do you need return transportation?</label>
      <div class="yes-no-group" style="margin-top:8px;">
        <button class="yes-no-btn ${t.needsReturn === false ? 'active' : ''}" onclick="setNeedsReturn(false, true)">No</button>
        <button class="yes-no-btn ${t.needsReturn === true  ? 'active' : ''}" onclick="setNeedsReturn(true, true)">Yes</button>
      </div>
    </div>

    <div class="return-fields ${returnVisible ? 'visible' : ''}" id="return-fields" style="${returnVisible ? '' : 'display:none;'}">
      <div class="section-title">Departure details</div>
      <div id="departures-container">
        ${departuresHtml}
      </div>
      <button class="btn-add-arrival mb-24" onclick="addDeparture(true)">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Add Departure
      </button>
    </div>`;
}

function toggleArrivalMode(isMultiple) {
  state.transport.isMultipleArrivals = isMultiple;
  if (!isMultiple && state.transport.arrivals.length > 1) {
    state.transport.arrivals = [state.transport.arrivals[0]];
  }
  renderStep();
}


/* ─── Step 9: Review & Submit ────────────────────────────────────────────── */
function renderStep9() {
  const d = state.data;
  const t = state.transport;

  // 1. Stay Details
  const guestsLabel = `${d.adults} Adult${d.adults !== 1 ? 's' : ''}${d.kids > 0 ? `, ${d.kids} Kid${d.kids !== 1 ? 's' : ''}` : ''}`;
  const agesLabel = d.kids > 0 ? `<div class="review-list-sub">Ages: ${d.kidsAges.filter(a=>a).join(', ') || 'N/A'}</div>` : '';
  const propertyLabel = d.property === 'Other' ? d.propertyOther : d.property;
  const stayDates = `${formatShortDate(d.arrivalDate)} — ${formatShortDate(d.departureDate)}`;

  // 2. Selected Tours
  const toursHtml = d.selectedTours.length
    ? d.selectedTours.map(s => {
        const tour = TOURS.find(x => x.id === s.id);
        return `
          <div class="review-list-item">
            <div class="review-list-main">${tour.name}</div>
            <div class="review-list-sub">
              ${s.date ? `Date: ${formatShortDate(s.date)}` : 'Date TBD'} 
              ${s.durationOption ? `· <span style="font-weight:600;color:var(--teal);">${s.durationOption}</span>` : ''} 
              ${s.time ? `· <span style="font-weight:600;color:var(--teal);">${s.time}</span>` : ''} 
              · ${s.guests} guest${s.guests !== 1 ? 's' : ''}
            </div>
            <div class="review-list-sub" style="margin-top:4px;">
              ${getTourPriceBreakdown(s)}
            </div>
            ${s.nightStay ? `<div style="margin-top:6px; font-size:0.8rem; color:var(--teal); font-weight:600;">🌙 Night stay requested — team will contact you</div>` : ''}
          </div>`;
      }).join('')
    : '<div class="review-list-item review-empty">No tours selected</div>';

  // 3. Extra Services
  const servicesHtml = d.selectedServices.length
    ? d.selectedServices.map(s => {
        const srv = EXTRA_SERVICES.find(x => x.id === s.id);
        const guestCount = s.guests || (d.adults + d.kids);
        return `
          <div class="review-list-item">
            <div class="review-list-main">${srv.name}${s.options && s.options.length > 0 ? ` (${s.options.join(', ')})` : ''}</div>
            <div class="review-list-sub">
              ${s.date ? `Date: ${formatShortDate(s.date)}` : 'Date TBD'} ${s.time ? `· @ ${s.time}` : ''} · ${guestCount} guest${guestCount !== 1 ? 's' : ''}
            </div>
          </div>`;
      }).join('')
    : '<div class="review-list-item review-empty">No extra services selected</div>';

  // 4. Transportation
  let transportHtml = '';
  if (!d.needsTransportation) {
    transportHtml = '<div class="review-list-item review-empty">No transportation requested</div>';
  } else {
    transportHtml = t.arrivals.map((arr, i) => `
      <div class="transport-review-group" style="background:#fcfcfc; border:1px solid #eee; padding:16px; border-radius:12px; margin-bottom:12px;">
        <div class="review-list-main" style="color:var(--teal); margin-bottom:12px; display:flex; align-items:center; gap:8px;">
           <span style="background:var(--teal); color:#fff; width:20px; height:20px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:10px;">${i+1}</span>
           Arrival Group details
        </div>
        <div class="review-data-grid">
          <div class="review-data-item">
            <span class="review-data-label">Flight #</span>
            <span class="review-data-value">${arr.flightNumber || 'Not provided'}</span>
          </div>
          <div class="review-data-item">
            <span class="review-data-label">Date & Time</span>
            <span class="review-data-value">${formatShortDate(arr.arrivalDate)} @ ${arr.arrivalTime || 'TBD'}</span>
          </div>
          <div class="review-data-item">
            <span class="review-data-label">Sign Name</span>
            <span class="review-data-value">${arr.pickupSign || 'Not provided'}</span>
          </div>
          <div class="review-data-item">
            <span class="review-data-label">Guests</span>
            <span class="review-data-value">${arr.guestCount || (d.adults + d.kids)}</span>
          </div>
        </div>
        ${arr.notes ? `<div class="review-list-sub" style="margin-top:12px; border-top:1px dashed #eee; padding-top:8px;"><strong>Special Instructions:</strong> ${arr.notes}</div>` : ''}
      </div>
    `).join('');

    if (t.needsReturn) {
      transportHtml += t.departures.map((dep, i) => `
        <div class="transport-review-group" style="background:rgba(26,92,74,0.03); border:1px solid rgba(26,92,74,0.1); padding:16px; border-radius:12px; margin-bottom:12px;">
          <div class="review-list-main" style="color:var(--teal); display:flex; align-items:center; gap:8px; margin-bottom:12px;">
            <span style="background:var(--teal); color:#fff; width:20px; height:20px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:10px;">${i+1}</span>
            Departure ${i+1} details
          </div>
          <div class="review-data-grid">
            <div class="review-data-item">
              <span class="review-data-label">Departure</span>
              <span class="review-data-value">${formatShortDate(dep.departureDate) || 'TBD'} @ ${dep.departureTime || 'TBD'}</span>
            </div>
            <div class="review-data-item">
              <span class="review-data-label">Pickup Location</span>
              <span class="review-data-value">${dep.location || propertyLabel}</span>
            </div>
          </div>
          ${dep.notes ? `<div class="review-list-sub" style="margin-top:12px; border-top:1px dashed #eee; padding-top:8px;"><strong>Special Instructions:</strong> ${dep.notes}</div>` : ''}
        </div>`).join('');
    }
  }

  return `
    <span class="step-tag">Step 9 — Final Review</span>
    <h2>Review Your Booking Request</h2>
    <p class="multi-hint">Please verify all your travel details below.</p>

    <div class="review-summary">
      <div class="review-card">
        <div class="review-card-header">
           <div class="review-card-title">🏠 Your Stay & Property</div>
           <div class="review-edit-btn" onclick="goToStep(1)">Edit</div>
        </div>
        <div class="review-data-grid">
           <div class="review-data-item">
             <span class="review-data-label">Selected Property</span>
             <span class="review-data-value">${propertyLabel}</span>
           </div>
           <div class="review-data-item">
             <span class="review-data-label">Itinerary Dates</span>
             <span class="review-data-value">${stayDates}</span>
           </div>
           <div class="review-data-item">
             <span class="review-data-label">Travel Party</span>
             <span class="review-data-value">${guestsLabel}</span>
             ${agesLabel}
           </div>
        </div>
      </div>

      <div class="review-card">
        <div class="review-card-header">
           <div class="review-card-title">🏝️ Tours Scheduled</div>
           <div class="review-edit-btn" onclick="goToStep(5)">Edit</div>
        </div>
        ${toursHtml}
      </div>

      <div class="review-card">
        <div class="review-card-header">
           <div class="review-card-title">💆 Services Requested</div>
           <div class="review-edit-btn" onclick="goToStep(6)">Edit</div>
        </div>
        ${servicesHtml}
      </div>

      <div class="review-card">
        <div class="review-card-header">
           <div class="review-card-title">🚐 Transportation Details</div>
           <div class="review-edit-btn" onclick="goToStep(7)">Edit</div>
        </div>
        ${transportHtml}
      </div>
    </div>
    
    <div style="margin-top:32px; padding:20px; background:#fff; border-radius:12px; border:1px solid #eee; font-size:0.85rem; color:var(--gray-600); line-height:1.6;">
       <p>By clicking submit, you agree to be contacted by Lokani Tours regarding your reservation request. We will review your selections manually to ensure availability and will get back to you shortly to finalize your custom itinerary.</p>
    </div>
  `;
}

/* ─── Step Navigation & Validation ──────────────────────────────────────── */
function goNext() {
  if (!validateStep(state.step)) return;
  collectStepData(state.step);
  
  // Skip logic: if Step 7 is NO, skip Step 8
  if (state.step === 7 && state.data.needsTransportation === false) {
    state.step = 9;
  } else {
    state.step++;
  }
  
  renderStep();
}

function goBack() {
  if (state.step === 1) {
    renderWelcome();
    return;
  }
  collectStepData(state.step);
  
  // Skip logic: if Step 9 and No, skip back to Step 7
  if (state.step === 9 && state.data.needsTransportation === false) {
    state.step = 7;
  } else {
    state.step--;
  }
  
  renderStep();
}

function goToStep(n) {
  collectStepData(state.step);
  state.step = n;
  renderStep();
}

function formatShortDate(ds) {
  if (!ds) return 'TBD';
  const d = new Date(ds + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getTourPriceBreakdown(sel) {
  const t = TOURS.find(x => x.id === sel.id);
  if (!t || !t.priceFrom) return '';
  
  const d = state.data;
  let adultsCount = 0;
  let kidsAges = [];
  
  let remaining = parseInt(sel.guests, 10) || 0;
  if (remaining <= 0) return '';
  
  if (remaining >= d.adults) {
    adultsCount = d.adults;
    remaining -= d.adults;
  } else {
    adultsCount = remaining;
    remaining = 0;
  }
  
  if (remaining > 0) {
    const ageMap = { '14–17': 15, '11–13': 12, '8–10': 9, '5–7': 6, '2–4': 3, 'Under 2': 1 };
    let sortedKids = [...d.kidsAges].filter(a => a).sort((a, b) => ageMap[b] - ageMap[a]);
    kidsAges = sortedKids.slice(0, remaining);
  }
  
  if (t.id === 'crocodile') {
    let adultTotal = adultsCount * 65;
    let kids5to12Count = 0;
    let kidsUnder4Count = 0;
    
    kidsAges.forEach(ageStr => {
      if (['5–7', '8–10', '11–13', '14–17'].includes(ageStr)) kids5to12Count++;
      else kidsUnder4Count++;
    });
    
    let kidTotal = kids5to12Count * 45;
    let total = adultTotal + kidTotal;
    
    let parts = [];
    if (adultsCount > 0) parts.push(`${adultsCount} Adult(s) @ $65`);
    if (kids5to12Count > 0) parts.push(`${kids5to12Count} Kid(s) @ $45`);
    if (kidsUnder4Count > 0) parts.push(`${kidsUnder4Count} Kid(s) Free`);
    
    return `<strong>Est. Tour Total: $${total}</strong> <span style="font-size:0.8rem;color:#888;">(${parts.join(', ')})</span>`;
  }
  
  let total = sel.guests * t.priceFrom;
  return `<strong>Est. Tour Total: $${total}</strong> <span style="font-size:0.8rem;color:#888;">(${sel.guests} pax @ $${t.priceFrom})</span>`;
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

    if (!name)  { showError('err-name', true);  shake('#f-name'); ok = false; }
    else          showError('err-name', false);
    if (!email || !email.includes('@')) { showError('err-email', true); shake('#f-email'); ok = false; }
    else          showError('err-email', false);
    if (!phone) { showError('err-phone', true); shake('#f-phone'); ok = false; }
    else          showError('err-phone', false);
    
    if (!prop) { showError('err-property', true); shake('#f-property'); ok = false; }
    else         showError('err-property', false);

    if (prop === 'Other' && !pOther) { showError('err-property-other', true); shake('#f-property-other'); ok = false; }
    else                               showError('err-property-other', false);

    if (!arr) { 
      showError('err-arrival', true); 
      shake('#f-arrival'); 
      ok = false; 
    } else {
      showError('err-arrival', false);
    }

    if (!dep) { 
      const errDep = document.getElementById('err-departure');
      if (errDep) errDep.textContent = 'Please select departure date';
      showError('err-departure', true); 
      shake('#f-departure'); 
      ok = false; 
    } else if (arr && dep && arr > dep) {
      const errDep = document.getElementById('err-departure');
      if (errDep) errDep.textContent = 'Departure must be after arrival';
      showError('err-departure', true); 
      shake('#f-departure'); 
      ok = false; 
    } else {
      showError('err-departure', false);
    }
    
    if (!ok) shake('.step-nav .btn-next');
    return ok;
  }
  if (step === 2) {
    let ok = true;
    const d = state.data;
    
    // Validate Total Guests > 0
    if (d.adults + d.kids === 0) {
      const errGuests = document.getElementById('err-total-guests');
      if (errGuests) {
        errGuests.style.display = 'block';
        shake('.total-guests-summary');
      }
      ok = false;
    } else {
      const errGuests = document.getElementById('err-total-guests');
      if (errGuests) errGuests.style.display = 'none';
    }
    
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
  if (step === 5) {
    if (state.data.selectedTours.length === 0) {
      const el = document.getElementById('err-tours');
      if (el) {
        el.textContent = 'Please select at least one tour to continue';
        el.style.display = 'block';
      }
      shake('.step-nav .btn-next');
      return false;
    }

    let ok = true;
    let exceedsGuests = false;
    for (const sel of state.data.selectedTours) {
      const t = TOURS.find(x => x.id === sel.id);
      let missing = false;
      const maxGuests = state.data.adults + state.data.kids;

      // Date
      const dateInput = document.getElementById(`tour-date-${t.id}`);
      if (!sel.date) {
        missing = true;
        if (dateInput) dateInput.style.borderColor = 'red';
      } else {
        if (dateInput) dateInput.style.borderColor = '';
      }

      // Guests
      const guestsInput = document.getElementById(`tour-guests-${t.id}`);
      if (!sel.guests || sel.guests < 1) {
        missing = true;
        if (guestsInput) guestsInput.style.borderColor = 'red';
      } else if (sel.guests > maxGuests) {
        missing = true;
        exceedsGuests = true;
        if (guestsInput) guestsInput.style.borderColor = 'red';
      } else {
        if (guestsInput) guestsInput.style.borderColor = '';
      }

      // Duration Options
      if (t.durationOptions) {
        const durationGroup = document.getElementById(`tour-duration-group-${t.id}`);
        const chips = durationGroup ? durationGroup.querySelectorAll('.option-chip') : [];
        if (!sel.durationOption) {
          missing = true;
          chips.forEach(c => c.style.borderColor = 'red');
        } else {
          chips.forEach(c => c.style.borderColor = '');
        }
      }

      // Time Options
      if (t.timeOptions) {
        const timeGroup = document.getElementById(`tour-time-group-${t.id}`);
        const chips = timeGroup ? timeGroup.querySelectorAll('.option-chip') : [];
        if (!sel.time) {
          missing = true;
          chips.forEach(c => c.style.borderColor = 'red');
        } else {
          chips.forEach(c => c.style.borderColor = '');
        }
      }

      if (missing) {
        ok = false;
        shake(`#tour-${t.id}`);
      }
    }

    const errTours = document.getElementById('err-tours');
    if (!ok) {
      if (errTours) {
        if (exceedsGuests) {
          errTours.textContent = `Guest count for a tour cannot exceed your total party size of ${state.data.adults + state.data.kids}.`;
        } else {
          errTours.textContent = 'Please fill out all required options (Date, Duration, Time) for your selected tours.';
        }
        errTours.style.display = 'block';
      }
      shake('.step-nav .btn-next');
      return false;
    } else {
      if (errTours) errTours.style.display = 'none';
    }
  }
  if (step === 6) {
    let ok = true;
    for (const sel of state.data.selectedServices) {
      const srv = EXTRA_SERVICES.find(x => x.id === sel.id);
      let missing = false;

      // Options
      if (srv.options) {
        const card = document.getElementById(`srv-${srv.id}`);
        const dropdownHeader = card ? card.querySelector('.custom-dropdown-header') : null;
        if (!sel.options || sel.options.length === 0) {
          missing = true;
          if (dropdownHeader) dropdownHeader.style.borderColor = 'red';
        } else {
          if (dropdownHeader) dropdownHeader.style.borderColor = '';
        }
      }

      // Date
      const dateInput = document.getElementById(`srv-date-${srv.id}`);
      if (!sel.date) {
        missing = true;
        if (dateInput) dateInput.style.borderColor = 'red';
      } else {
        if (dateInput) dateInput.style.borderColor = '';
      }

      // Time
      const timeInput = document.getElementById(`srv-time-${srv.id}`);
      if (!sel.time || sel.time === '') {
        missing = true;
        if (timeInput) timeInput.style.borderColor = 'red';
      } else {
        if (timeInput) timeInput.style.borderColor = '';
      }

      if (missing) {
        ok = false;
        shake(`#srv-${srv.id}`);
      }
    }

    const errServices = document.getElementById('err-services');
    if (!ok) {
      if (errServices) {
        errServices.textContent = 'Please fill out all required fields (Options, Date, Time) for your selected services.';
        errServices.style.display = 'block';
      }
      shake('.step-nav .btn-next');
      return false;
    } else {
      if (errServices) errServices.style.display = 'none';
    }
  }
  if (step === 7) {
    if (state.data.needsTransportation === null) {
      const el = document.getElementById('err-transport');
      if (el) el.style.display = 'block';
      shake('.step-nav .btn-next');
      return false;
    }
  }
  if (step === 8) {
    let ok = true;
    const t = state.transport;
    
    // Validate each arrival block
    t.arrivals.forEach((a, i) => {
      if (!a.houseName) { showError(`err-step-house-${i}`, true); ok = false; } else { showError(`err-step-house-${i}`, false); }
      if (!a.arrivalDate) { showError(`err-step-date-${i}`, true); ok = false; } else { showError(`err-step-date-${i}`, false); }
      if (!a.arrivalTime) { showError(`err-step-time-${i}`, true); ok = false; } else { showError(`err-step-time-${i}`, false); }
      if (!a.guestCount) { showError(`err-step-guests-${i}`, true); ok = false; } else { showError(`err-step-guests-${i}`, false); }
      if (!a.pickupSign) { showError(`err-step-sign-${i}`, true); ok = false; } else { showError(`err-step-sign-${i}`, false); }
    });

    // Validate each departure block
    if (t.needsReturn === true) {
      t.departures.forEach((dep, i) => {
        if (!dep.departureDate) { showError(`err-step-dep-date-${i}`, true); ok = false; } else { showError(`err-step-dep-date-${i}`, false); }
        if (!dep.departureTime) { showError(`err-step-dep-time-${i}`, true); ok = false; } else { showError(`err-step-dep-time-${i}`, false); }
        if (!dep.location)      { showError(`err-step-dep-location-${i}`, true); ok = false; } else { showError(`err-step-dep-location-${i}`, false); }
      });
    }

    if (!ok) shake('.step-nav .btn-next');
    return ok;
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
  // Also highlight the corresponding input
  const inputId = id.replace('err-', 'f-');
  const input = document.getElementById(inputId);
  if (input) {
    input.classList.toggle('error', show);
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
  // Step 1 — field listeners to clear errors
  ['f-name','f-email','f-phone','f-property','f-property-other','f-arrival','f-departure'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const eventType = el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(eventType, () => {
      showError(id.replace('f-', 'err-'), false);
    });
  });

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
  const min = 0;
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
    state.data.selectedTours.push({ id, date: '', guests: state.data.adults, time: null, durationOption: null, breakdown: '' });
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

  // Clear error if at least one tour is selected
  if (state.data.selectedTours.length > 0) {
    const err = document.getElementById('err-tours');
    if (err) err.style.display = 'none';
  }
}

function updateTourData(id, field, value) {
  const entry = state.data.selectedTours.find(s => s.id === id);
  if (entry) entry[field] = value;
}

function validateTourGuestsInline(id, inputEl, max) {
  const val = parseInt(inputEl.value, 10);
  const errEl = document.getElementById(`err-tour-guests-inline-${id}`);
  if (val > max) {
    inputEl.style.borderColor = 'red';
    if (errEl) errEl.style.display = 'block';
  } else {
    inputEl.style.borderColor = '';
    if (errEl) errEl.style.display = 'none';
  }
}

function setTourDuration(id, duration, el) {
  updateTourData(id, 'durationOption', duration);
  const parent = el.parentElement;
  if (parent) {
    parent.querySelectorAll('.option-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  }
}

function setTourTime(id, time, el) {
  updateTourData(id, 'time', time);
  const parent = el.parentElement;
  if (parent) {
    parent.querySelectorAll('.option-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
  }
}

/* ─── Service Selection ──────────────────────────────────────────────────── */
function toggleService(id, event) {
  // Don't toggle if clicking inside the form
  if (event.target.closest('.service-details-form')) return;

  const idx = state.data.selectedServices.findIndex(s => s.id === id);
  if (idx === -1) {
    state.data.selectedServices.push({ id, options: [], date: '', time: '', notes: '' });
  } else {
    state.data.selectedServices.splice(idx, 1);
  }

  renderStep();
}

function setServiceOption(id, option) {
  let entry = state.data.selectedServices.find(s => s.id === id);
  if (!entry) {
    entry = { id, options: [], date: '', notes: '' };
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

function setServiceOptionsCustom(id, option, isChecked, event) {
  let entry = state.data.selectedServices.find(s => s.id === id);
  if (!entry) {
    entry = { id, options: [], date: '', notes: '' };
    state.data.selectedServices.push(entry);
    const card = document.getElementById(`srv-${id}`);
    if (card) card.classList.add('service-selected');
  }
  
  if (isChecked) {
    if (!entry.options.includes(option)) entry.options.push(option);
  } else {
    entry.options = entry.options.filter(o => o !== option);
  }
  
  const card = document.getElementById(`srv-${id}`);
  if (card) {
    const header = card.querySelector('.custom-dropdown-header');
    if (header) {
      if (entry.options.length === 0) header.innerHTML = 'Select options...';
      else if (entry.options.length === 1) header.innerHTML = entry.options[0];
      else header.innerHTML = `${entry.options.length} options selected`;
      header.style.borderColor = ''; // clear error outline on change
    }
  }
}

function updateServiceData(id, field, value) {
  const entry = state.data.selectedServices.find(s => s.id === id);
  if (entry) entry[field] = value;
}

function clearServices() {
  state.data.selectedServices = [];
  renderStep();
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
  const departuresHtml = t.departures.map((dep, i) => renderDepartureBlock(dep, i, false, state.data.property)).join('');

  document.getElementById('app').innerHTML = `
    <div class="screen active" id="screen-transport">
      <div class="transport-page">
        <header class="transport-topbar">
          <img src="Lokani%20Branding/lokani.web.logo.png" alt="Lokani" class="transport-topbar-logo">
        </header>
        <div class="transport-body">
          <div class="section-title">Your details</div>
          <div class="form-grid">
            <div class="form-group">
              <label>Full name</label>
              <input class="form-control" id="t-name" type="text" placeholder="Maria Rodriguez" value="${esc(t.name)}">
              <div class="field-error" id="err-t-name">Please enter your name</div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input class="form-control" id="t-email" type="email" placeholder="maria@email.com" value="${esc(t.email)}">
              <div class="field-error" id="err-t-email">Please enter a valid email</div>
            </div>
          </div>
          <div class="form-group mb-24">
            <label>Phone / WhatsApp</label>
            <input class="form-control" id="t-phone" type="tel" placeholder="+1 (555) 000-0000" value="${esc(t.phone)}">
            <div class="field-error" id="err-t-phone">Please enter your phone number</div>
          </div>

          <div class="section-title">Arrival details</div>
          <div id="arrivals-container">${arrivalsHtml}</div>
          <button class="btn-add-arrival" onclick="addArrival()">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            Add Arrival
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
            <div class="section-title">Departure details</div>
            <div id="departures-container">${departuresHtml}</div>
            <button class="btn-add-arrival" onclick="addDeparture()">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              Add Departure
            </button>
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

function renderArrivalBlock(arrival, index, isStep) {
  const canRemove = state.transport.arrivals.length > 1;
  const prefix = isStep ? 'step-' : '';
  return `
    <div class="arrival-block" id="arrival-block-${index}">
      <div class="arrival-block-header">
        <span class="arrival-block-title">Arrival ${index + 1}</span>
        ${canRemove ? `<button class="btn-remove-arrival" onclick="removeArrival(${index}, ${isStep})">Remove</button>` : ''}
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Flight number <span>(optional)</span></label>
          <input class="form-control" id="${prefix}flight-${index}" type="text" placeholder="e.g. AA 1234" value="${esc(arrival.flightNumber)}"
            onchange="updateArrival(${index},'flightNumber',this.value)">
        </div>
        <div class="form-group">
          <label>House / property name</label>
          <input class="form-control" id="${prefix}house-${index}" type="text" placeholder="Villa name" value="${esc(arrival.houseName)}"
            onchange="updateArrival(${index},'houseName',this.value)">
          <div class="field-error" id="err-${prefix}house-${index}">Please enter property name</div>
        </div>
      </div>
      <div class="form-group mb-16">
        <label>Arrival address <span>(optional)</span></label>
        <input class="form-control" id="${prefix}addr-${index}" type="text" placeholder="Pickup location" value="${esc(arrival.arrivalAddress || '')}"
          onchange="updateArrival(${index},'arrivalAddress',this.value)">
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Arrival date (MM/DD/YYYY)</label>
          <input class="form-control" id="${prefix}date-${index}" type="date" value="${esc(arrival.arrivalDate)}" min="${todayStr()}"
            onchange="updateArrival(${index},'arrivalDate',this.value)">
          <div class="field-error" id="err-${prefix}date-${index}">Please select arrival date</div>
        </div>
        <div class="form-group">
          <label>Arrival time (HH:MM AM/PM)</label>
          <input class="form-control" id="${prefix}time-${index}" type="time" value="${esc(arrival.arrivalTime)}"
            onchange="updateArrival(${index},'arrivalTime',this.value)">
          <div class="field-error" id="err-${prefix}time-${index}">Please select arrival time</div>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Number of guests arriving</label>
          <input class="form-control" id="${prefix}guests-${index}" type="number" min="1" placeholder="2" value="${esc(arrival.guestCount)}"
            onchange="updateArrival(${index},'guestCount',this.value)">
          <div class="field-error" id="err-${prefix}guests-${index}">Enter guest count</div>
        </div>
        <div class="form-group">
          <label>Name for pickup sign</label>
          <input class="form-control" id="${prefix}sign-${index}" type="text" placeholder="Your last name" value="${esc(arrival.pickupSign)}"
            onchange="updateArrival(${index},'pickupSign',this.value)">
          <div class="field-error" id="err-${prefix}sign-${index}">Enter sign name</div>
        </div>
      </div>
      <div class="form-group">
        <label>Guest names <span>(optional / space to list)</span></label>
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

function addArrival(isStep) {
  state.transport.arrivals.push(emptyArrival());
  if (isStep) renderStep();
  else renderTransportForm();
}

function removeArrival(index, isStep) {
  state.transport.arrivals.splice(index, 1);
  if (isStep) renderStep();
  else renderTransportForm();
}

function updateArrival(index, field, value) {
  state.transport.arrivals[index][field] = value;
}

function renderDepartureBlock(departure, index, isStep, defaultLocation) {
  const canRemove = state.transport.departures.length > 1;
  const prefix = isStep ? 'step-' : '';
  return `
    <div class="arrival-block" id="departure-block-${index}">
      <div class="arrival-block-header">
        <span class="arrival-block-title">Departure ${index + 1}</span>
        ${canRemove ? `<button class="btn-remove-arrival" onclick="removeDeparture(${index}, ${isStep})">Remove</button>` : ''}
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Departure date</label>
          <input class="form-control" id="${prefix}dep-date-${index}" type="date" value="${esc(departure.departureDate)}" min="${todayStr()}"
            onchange="updateDeparture(${index},'departureDate',this.value)">
          <div class="field-error" id="err-${prefix}dep-date-${index}">Please select departure date</div>
        </div>
        <div class="form-group">
          <label>Departure time</label>
          <input class="form-control" id="${prefix}dep-time-${index}" type="time" value="${esc(departure.departureTime)}"
            onchange="updateDeparture(${index},'departureTime',this.value)">
          <div class="field-error" id="err-${prefix}dep-time-${index}">Please select departure time</div>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Return date <span>(if different)</span></label>
          <input class="form-control" id="${prefix}ret-date-${index}" type="date" value="${esc(departure.returnDate)}" min="${todayStr()}"
            onchange="updateDeparture(${index},'returnDate',this.value)">
        </div>
        <div class="form-group">
          <label>Return time <span>(optional)</span></label>
          <input class="form-control" id="${prefix}ret-time-${index}" type="time" value="${esc(departure.returnTime)}"
            onchange="updateDeparture(${index},'returnTime',this.value)">
        </div>
      </div>
      <div class="form-group">
        <label>Pickup location</label>
        <input class="form-control" id="${prefix}dep-location-${index}" type="text" placeholder="Villa or address for pickup" value="${esc(departure.location || defaultLocation || '')}"
          onchange="updateDeparture(${index},'location',this.value)">
        <div class="field-error" id="err-${prefix}dep-location-${index}">Please enter pickup location</div>
      </div>
      <div class="form-group">
        <label>Special instructions <span>(optional)</span></label>
        <textarea class="form-control" rows="2" placeholder="Anything else we should know…"
          onchange="updateDeparture(${index},'notes',this.value)">${esc(departure.notes)}</textarea>
      </div>
    </div>`;
}

function addDeparture(isStep) {
  state.transport.departures.push(emptyDeparture());
  if (isStep) renderStep();
  else renderTransportForm();
}

function removeDeparture(index, isStep) {
  state.transport.departures.splice(index, 1);
  if (isStep) renderStep();
  else renderTransportForm();
}

function updateDeparture(index, field, value) {
  state.transport.departures[index][field] = value;
}

function setNeedsReturn(val, isStep) {
  state.transport.needsReturn = val;
  if (val && state.transport.departures.length === 0) {
    state.transport.departures.push(emptyDeparture());
  }
  if (isStep) {
    renderStep();
  } else {
    renderTransportForm();
  }
}

function submitTransport() {
  const t = state.transport;
  let ok = true;

  // 1. Collect & Validate Contact Info
  t.name  = document.getElementById('t-name')?.value.trim() || '';
  t.email = document.getElementById('t-email')?.value.trim() || '';
  t.phone = document.getElementById('t-phone')?.value.trim() || '';

  if (!t.name) { showError('err-t-name', true); ok = false; } else { showError('err-t-name', false); }
  if (!t.email || !t.email.includes('@')) { showError('err-t-email', true); ok = false; } else { showError('err-t-email', false); }
  if (!t.phone) { showError('err-t-phone', true); ok = false; } else { showError('err-t-phone', false); }

  // 2. Validate Arrivals
  t.arrivals.forEach((a, i) => {
    // Villa/House Name
    if (!a.houseName) { showError(`err-house-${i}`, true); ok = false; } else { showError(`err-house-${i}`, false); }
    // Arrival Date
    if (!a.arrivalDate) { showError(`err-date-${i}`, true); ok = false; } else { showError(`err-date-${i}`, false); }
    // Arrival Time
    if (!a.arrivalTime) { showError(`err-time-${i}`, true); ok = false; } else { showError(`err-time-${i}`, false); }
    // Guest Count
    if (!a.guestCount || parseInt(a.guestCount) <= 0) { showError(`err-guests-${i}`, true); ok = false; } else { showError(`err-guests-${i}`, false); }
    // Pickup Sign
    if (!a.pickupSign) { showError(`err-sign-${i}`, true); ok = false; } else { showError(`err-sign-${i}`, false); }
  });

  // 3. Validate Departures (if return needed)
  if (t.needsReturn === true) {
    t.departures.forEach((dep, i) => {
      if (!dep.departureDate) { showError(`err-dep-date-${i}`, true); ok = false; } else { showError(`err-dep-date-${i}`, false); }
      if (!dep.departureTime) { showError(`err-dep-time-${i}`, true); ok = false; } else { showError(`err-dep-time-${i}`, false); }
      if (!dep.location)      { showError(`err-dep-location-${i}`, true); ok = false; } else { showError(`err-dep-location-${i}`, false); }
    });
  }

  if (!ok) {
    shake('.step-nav .btn-submit');
    // Scroll to first error for better UX
    const firstErr = document.querySelector('.field-error.visible');
    if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  console.log('Transport submitted:', JSON.stringify(t, null, 2));
  renderTransportConfirmation();
}

function renderTransportConfirmation() {
  const t = state.transport;
  const firstArrival = t.arrivals[0];
  
  document.getElementById('app').innerHTML = `
    <div class="screen active" id="screen-transport-confirm">
      <div class="confirm-page">
        <img src="Lokani%20Branding/lokani.web.logo.png" alt="Lokani Tours" class="confirm-logo" style="filter:brightness(0) invert(1)">
        <div class="confirm-icon">✓</div>
        <h2>Request received,<br><em style="font-style:italic;color:rgba(255,255,255,0.75);">${t.name.split(' ')[0]}!</em></h2>
        <p>Our team will confirm your transportation details within 24 hours. You'll receive all pickup information via WhatsApp or email.</p>
        
        <div class="confirm-details">
          <div class="confirm-detail-row">
            <span>Name</span>
            <span>${esc(t.name)}</span>
          </div>
          <div class="confirm-detail-row">
            <span>Email</span>
            <span>${esc(t.email)}</span>
          </div>
          <div class="confirm-detail-row">
            <span>Phone</span>
            <span>${esc(t.phone)}</span>
          </div>
          <div class="confirm-detail-row">
            <span>Arrival Groups</span>
            <span>${t.arrivals.length} group${t.arrivals.length !== 1 ? 's' : ''}</span>
          </div>
          ${firstArrival.arrivalDate ? `
          <div class="confirm-detail-row">
            <span>First Arrival</span>
            <span>${formatDate(firstArrival.arrivalDate)}</span>
          </div>` : ''}
          <div class="confirm-detail-row">
            <span>Return Transfer</span>
            <span>${t.needsReturn ? 'Yes' : 'No'}</span>
          </div>
        </div>
        
        <button class="btn-start-over" onclick="location.reload()">
          ← Start a new request
        </button>
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

function time15Options(selected, nightOnly) {
  let html = '<option value="">Select time</option>';
  const hours = nightOnly
    ? [17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4]
    : Array.from({ length: 24 }, (_, i) => i);
  for (const h of hours) {
    for (let m = 0; m < 60; m += 15) {
      const val = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
      const hour12 = ((h + 11) % 12) + 1;
      const period = h < 12 ? 'AM' : 'PM';
      const label = `${hour12}:${String(m).padStart(2,'0')} ${period}`;
      html += `<option value="${val}" ${val === selected ? 'selected' : ''}>${label}</option>`;
    }
  }
  return html;
}

/* ─── Init ───────────────────────────────────────────────────────────────── */
renderWelcome();
