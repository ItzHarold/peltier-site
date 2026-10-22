/* Peltier Crêpes & Galettes — language switch, mobile menu, calendar boxes, gallery, dock */
(function () {
  'use strict';
  const T = {
    nl: {
      _title: 'Peltier Crêpes & Galettes | Food stall & brunchcafé, Tilburg',
      skip: 'Naar de inhoud', loading: 'Even geduld, de crêpe ligt op de bakplaat…',
      'nav.street': 'Food Stall', 'nav.ouioui': 'Oui, Oui!', 'nav.gallery': 'Galerij', 'nav.about': 'Over ons', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline1': 'Authentieke Franse ', 'hero.tagline2': 'pannenkoeken', 'hero.tagline3': '. Food stall & brunchcafé.',
      'hero.street': 'Food Stall', 'hero.streetSub': 'Markten, evenementen & catering', 'hero.cta': 'Ontdek',
      'hero.streetAlt': 'Simon bakt crêpes op zijn kraam',
      'hero.ouioui': 'Oui, Oui!', 'hero.ouiouiSub': 'Brunchcafé bij Fabriek59 · elke zondag 9:30 – 17:30',
      'hero.ouiouiAlt': 'De rode treinwagon van Oui, Oui! onder het lichtbord van Fabriek59, met terrasstoelen ervoor',
      route: 'Route', instagram: 'Instagram', 'menu.check': 'Bekijk de kaart', 'ouioui.menu': 'Brunchmenu',
      'street.kicker': 'Food Stall', 'street.title': 'Crêpes & galettes street food',
      'street.text': 'Zoete crêpes & hartige boekweitgalettes, ter plekke gebakken volgens de Franse traditie. Je vindt onze food stall op markten, festivals en evenementen in heel Brabant. Op aanvraag ook op jouw eigen evenement.',
      'street.weekly': 'Wekelijkse locaties',
      'street.market.title': 'Tilburgse zaterdagmarkt', 'street.market.text': 'Hier is het allemaal begonnen, in september 2024.', 'street.market.hours': 'Elke zaterdag, 10:00 – 17:00',
      'street.city.title': 'The City - Cobbencampus', 'street.city.text': 'Wekelijks voor de studenten.', 'street.city.hours': 'Elke maandag, 12:00 – 20:00',
      'street.catering': 'Crêpes op jouw evenement?',
      'next.next': 'Binnenkort', 'next.now': 'Vandaag',
      'ouioui.kicker': 'Oui, Oui!', 'ouioui.title': 'Franse brunch in een vintage treinwagon',
      'ouioui.text': 'Sinds september 2026 hebben we ons eigen brunchcafé bij Fabriek59. Schuif aan voor een gezellige rit in onze knusse treinwagon. Crêpes, galettes, Franse specialiteiten, warme dranken.',
      'ouioui.where.kicker': 'Waar?', 'ouioui.where.title': 'Rode wagon bij Fabriek59',
      'ouioui.hours.kicker': 'Openingstijden', 'ouioui.hours.title': 'Zondag 9:30 – 17:30', 'ouioui.hours.text': 'Alleen op zondag. Dat houdt het bijzonder.',
      'ticker.1': 'Food Stall', 'ticker.2': 'Brunchcafé', 'ticker.3': 'Catering', 'ticker.4': 'Tilburgse markt', 'ticker.5': 'Crêpes', 'ticker.6': 'Galettes', 'ticker.7': 'Bonjour', 'ticker.8': 'Traditioneel', 'ticker.9': 'Frans', 'ticker.10': 'Huisgemaakt', 'ticker.11': 'Vers',
      'gallery.kicker': 'Van de bakplaat', 'gallery.title': 'Onze bestsellers',
      'about.kicker': 'Over ons', 'about.title': 'Bonjour! Simon hier,',
      'about.alt': 'Simon Peltier in zijn kraam, lachend met een verse crêpe in de hand',
      'about.p1': 'Ik groeide op met Franse & Belgische roots en kwam in 2019 naar Tilburg om te studeren. Omdat ik iets concreets met mijn leven wilde doen, stopte ik in 2023 met mijn studie. Na een paar ervaringen, mijn liefde voor Frans eten en voor ondernemen brachten me tot "Peltier".',
      'about.p2': 'Vanaf toen ik jong was heb ik ontelbare crêpes verslonden. Ik bouwde hier mijn eigen wereldje op, maar er ontbrak nog iets…',
      'about.p3': '…dus probeerde ik vanuit mijn huis crêpes te bakken. In september 2024 begon ik een kleine crêpeskraam op de markt van het Koningsplein in Tilburg. Na de enorme steun van de lokale community wist ik dat ik deze droom verder wilde aspireren. Ik stond er elke week en stopte mijn hart in iedere crêpe.',
      'about.p4': 'Van het een kwam het ander. Ik ging evenementen, cateringklussen en markten door heel Brabant doen. De familie groeide een beetje, en in september 2026, na 9 maanden verbouwen, openden we een eigen plek. We ontvangen je nu graag bij Oui, Oui!, de treinwagon van Fabriek59.',
      'contact.kicker': 'Contact', 'contact.title': 'Een vraag, een reservering of een boeking?',
      'contact.text': 'Festival, bruiloft, verjaardag, bedrijfsborrel of B2B: wij brengen de authentieke Franse ervaring, op maat van jouw evenement.\nNeem contact op via het kanaal dat jij het fijnst vindt.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
            'foot.tag': 'Food stall & brunchcafé', 'foot.contact': 'Contact', 'foot.follow': 'Volg ons'
    },
    en: {
      _title: 'Peltier Crêpes & Galettes | Food stall & brunch café, Tilburg',
      skip: 'Skip to content', loading: 'One moment, your crêpe is on the griddle…',
      'nav.street': 'Food Stall', 'nav.ouioui': 'Oui, Oui!', 'nav.gallery': 'Gallery', 'nav.about': 'About us', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline1': 'Authentic French ', 'hero.tagline2': 'pancakes', 'hero.tagline3': '. Food stall & brunch café.',
      'hero.street': 'Food Stall', 'hero.streetSub': 'Markets, events & catering', 'hero.cta': 'Discover',
      'hero.streetAlt': 'Simon making crêpes at his stall',
      'hero.ouioui': 'Oui, Oui!', 'hero.ouiouiSub': 'Brunch café at Fabriek59 · every Sunday 9:30 – 17:30',
      'hero.ouiouiAlt': 'The red Oui, Oui! train wagon under the Fabriek59 sign, with terrace chairs in front',
      route: 'Directions', instagram: 'Instagram', 'menu.check': 'Check the menu', 'ouioui.menu': 'Brunch Menu',
      'street.kicker': 'Food Stall', 'street.title': 'Crêpes & galettes street food',
      'street.text': 'Sweet crêpes & savoury buckwheat galettes, baked on site true to the French tradition. Find our street-food stall at markets, festivals and events across Brabant. On request, at your own event.',
      'street.weekly': 'Weekly locations',
      'street.market.title': 'Tilburg Saturday market', 'street.market.text': 'This is where it all started, back in September 2024.', 'street.market.hours': 'Every Saturday, 10:00 – 17:00',
      'street.city.title': 'The City - Cobbencampus', 'street.city.text': 'Serving students, weekly.', 'street.city.hours': 'Every Monday, 12:00 – 20:00',
      'street.catering': 'Crêpes at your event?',
      'next.next': 'Coming up', 'next.now': 'Today',
      'ouioui.kicker': 'Oui, Oui!', 'ouioui.title': 'French brunch in a vintage train wagon',
      'ouioui.text': 'Since September 2026, we opened our very own brunch café at Fabriek59. Settle in for a wholesome ride in our cozy train wagon. Crêpes, galettes, French specialties, warm drinks.',
      'ouioui.where.kicker': 'Where?', 'ouioui.where.title': 'Red wagon at Fabriek59',
      'ouioui.hours.kicker': 'Opening hours', 'ouioui.hours.title': 'Sunday 9:30 – 17:30', 'ouioui.hours.text': 'Sundays only. Keep it special.',
      'ticker.1': 'Food Stall', 'ticker.2': 'Brunch café', 'ticker.3': 'Catering', 'ticker.4': 'Tilburg Market', 'ticker.5': 'Crêpes', 'ticker.6': 'Galettes', 'ticker.7': 'Bonjour', 'ticker.8': 'Traditional', 'ticker.9': 'French', 'ticker.10': 'Homemade', 'ticker.11': 'Fresh',
      'gallery.kicker': 'Off the griddle', 'gallery.title': 'Our best sellers',
      'about.kicker': 'About us', 'about.title': 'Bonjour! Simon here,',
      'about.alt': 'Simon Peltier at his stall, smiling and holding out a freshly made crêpe',
      'about.p1': 'I grew up with French & Belgian roots and came to Tilburg in 2019 to study. Realising I wanted to do something concrete with my life, I dropped out of university in 2023. A few experiences, my love for french food and for entrepreneurship led me to start Peltier.',
      'about.p2': 'From a very young age, I have devoured countless crêpes. I created my own little world here, but something was still missing…',
      'about.p3': '…so I tried making crêpes at home.\nIn September 2024, I started a small crêpes stand on the Koningsplein Market of Tilburg. After receiving immense support from the local community, I knew I wanted to chase this dream further. I consistently attended the market and put my heart into every single crêpe.',
      'about.p4': 'One thing led to another. I started joining events, catering gigs, and markets across Brabant. The family grew a little bigger, and in September 2026, after 9 months of renovation, we opened a place of our own. We are now happy to welcome you at Oui, Oui!, the train wagon of Fabriek59.',
      'contact.kicker': 'Contact', 'contact.title': 'A question, a reservation, or a booking?',
      'contact.text': 'Festival, wedding, birthday, company gathering or B2B, we bring you the authentic French experience, tailored to your event.\nContact us via your preferred channel.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
            'foot.tag': 'Food stall & brunch café', 'foot.contact': 'Contact', 'foot.follow': 'Follow us'
    },
    fr: {
      _title: 'Peltier Crêpes & Galettes | Food stall & brunch café, Tilburg',
      skip: 'Aller au contenu', loading: 'Un instant, la crêpe est sur le bilig…',
      'nav.street': 'Food Stall', 'nav.ouioui': 'Oui, Oui!', 'nav.gallery': 'Galerie', 'nav.about': 'À propos', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline1': '', 'hero.tagline2': 'Crêpes', 'hero.tagline3': ' françaises authentiques. Food stall & brunch café.',
      'hero.street': 'Food Stall', 'hero.streetSub': 'Marchés, événements & traiteur', 'hero.cta': 'Découvrir',
      'hero.streetAlt': 'Simon prépare des crêpes à son stand',
      'hero.ouioui': 'Oui, Oui!', 'hero.ouiouiSub': 'Brunch café à Fabriek59 · tous les dimanches 9h30 – 17h30',
      'hero.ouiouiAlt': 'Le wagon rouge de Oui, Oui! sous l’enseigne de Fabriek59, avec les chaises de la terrasse devant',
      route: 'Itinéraire', instagram: 'Instagram', 'menu.check': 'Voir la carte', 'ouioui.menu': 'Menu brunch',
      'street.kicker': 'Food Stall', 'street.title': 'Crêpes & galettes street food',
      'street.text': 'Crêpes sucrées & galettes de sarrasin salées, cuites sur place dans la pure tradition française. Retrouvez notre stand sur les marchés, festivals et événements de tout le Brabant. Sur demande, à votre propre événement.',
      'street.weekly': 'Chaque semaine',
      'street.market.title': 'Marché du samedi, Tilburg', 'street.market.text': 'C’est ici que tout a commencé, en septembre 2024.', 'street.market.hours': 'Tous les samedis, 10h00 – 17h00',
      'street.city.title': 'The City - Cobbencampus', 'street.city.text': 'Chaque semaine pour les étudiants.', 'street.city.hours': 'Tous les lundis, 12h00 – 20h00',
      'street.catering': 'Des crêpes à votre événement ?',
      'next.next': 'Prochainement', 'next.now': 'Aujourd’hui',
      'ouioui.kicker': 'Oui, Oui!', 'ouioui.title': 'Brunch français dans un wagon vintage',
      'ouioui.text': 'Depuis septembre 2026, nous avons ouvert notre propre brunch café à Fabriek59. Installez-vous pour un voyage gourmand dans notre wagon douillet. Crêpes, galettes, spécialités françaises, boissons chaudes.',
      'ouioui.where.kicker': 'Où ?', 'ouioui.where.title': 'Le wagon rouge de Fabriek59',
      'ouioui.hours.kicker': 'Horaires', 'ouioui.hours.title': 'Dimanche 9h30 – 17h30', 'ouioui.hours.text': 'Le dimanche seulement. Pour que ça reste spécial.',
      'ticker.1': 'Food Stall', 'ticker.2': 'Brunch café', 'ticker.3': 'Traiteur', 'ticker.4': 'Marché de Tilburg', 'ticker.5': 'Crêpes', 'ticker.6': 'Galettes', 'ticker.7': 'Bonjour', 'ticker.8': 'Traditionnel', 'ticker.9': 'Français', 'ticker.10': 'Fait maison', 'ticker.11': 'Frais',
      'gallery.kicker': 'Sorties du bilig', 'gallery.title': 'Nos best-sellers',
      'about.kicker': 'À propos', 'about.title': 'Bonjour ! Ici Simon,',
      'about.alt': 'Simon Peltier à son stand, souriant, une crêpe fraîche à la main',
      'about.p1': 'J’ai grandi avec des racines françaises & belges et je suis venu à Tilburg en 2019 pour étudier. Voulant faire quelque chose de concret de ma vie, j’ai quitté l’université en 2023. Quelques expériences, mon amour de la cuisine française et de l’entrepreneuriat m’ont mené à créer Peltier.',
      'about.p2': 'Depuis tout petit, j’ai dévoré d’innombrables crêpes. Je m’étais construit mon petit monde ici, mais il manquait encore quelque chose…',
      'about.p3': '…alors j’ai essayé de faire des crêpes à la maison.\nEn septembre 2024, j’ai lancé un petit stand de crêpes sur le marché du Koningsplein à Tilburg. Porté par l’immense soutien de la communauté locale, j’ai su que je voulais poursuivre ce rêve. J’ai tenu le marché chaque semaine et mis tout mon cœur dans chaque crêpe.',
      'about.p4': 'De fil en aiguille, j’ai rejoint des événements, des prestations traiteur et des marchés dans tout le Brabant. La famille s’est un peu agrandie et, en septembre 2026, après 9 mois de rénovation, nous avons ouvert notre propre adresse. Nous sommes heureux de vous accueillir à Oui, Oui!, le wagon de Fabriek59.',
      'contact.kicker': 'Contact', 'contact.title': 'Une question, une réservation ou une prestation ?',
      'contact.text': 'Festival, mariage, anniversaire, événement d’entreprise ou B2B : nous vous apportons l’authentique expérience française, adaptée à votre événement.\nContactez-nous par le canal de votre choix.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
            'foot.tag': 'Food stall & brunch café', 'foot.contact': 'Contact', 'foot.follow': 'Suivez-nous'
    }
  };
  const LOCALE = { nl: 'nl-NL', en: 'en-GB', fr: 'fr-FR' };
  const TZ = 'Europe/Amsterdam';

  let lang = 'nl';
  let agenda = null;

  function detectLanguage() {
    try {
      const saved = localStorage.getItem('peltier-lang');
      if (saved && T[saved]) return saved;
    } catch (e) { /* storage unavailable */ }
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    if (nav === 'nl' || nav === 'fr') return nav;
    return 'en';
  }

  function applyTranslations() {
    const dict = T[lang];
    document.documentElement.lang = lang;
    document.title = dict._title;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.alt = dict[key];
    });
    document.querySelectorAll('.lang button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
    const menu = document.getElementById('brunch-menu'); // Dutch menu for NL, English for EN and FR
    if (menu) menu.href = '/menu/oui-oui-' + (lang === 'nl' ? 'nl' : 'en') + '.pdf';
  }

  function setLanguage(next) {
    if (!T[next]) return;
    lang = next;
    try { localStorage.setItem('peltier-lang', lang); } catch (e) { /* ignore */ }
    applyTranslations();
    if (agenda) renderNext(agenda);
    renderPlace();
  }

  /* Coming up: /api/agenda returns the next (up to three) one-off events from Simon's event calendar.
     One box per event; nothing planned -> the whole block stays hidden. */
  function renderNext(data) {
    const block = document.getElementById('next');
    if (!block) return;
    if (!data || !data.events || !data.events.length) { block.hidden = true; return; }
    const loc = LOCALE[lang], now = Date.now();
    const dayFmt = new Intl.DateTimeFormat(loc, { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long' });
    const timeFmt = new Intl.DateTimeFormat(loc, { timeZone: TZ, hour: '2-digit', minute: '2-digit' });
    const tpl = document.getElementById('next-tpl');
    const list = document.getElementById('next-list');
    list.textContent = '';
    data.events.forEach(function (ev) {
      const start = new Date(ev.start), end = new Date(ev.end);
      let when;
      if (ev.allDay) {
        const lastDay = new Date(end.getTime() - 1); // DTEND is exclusive
        when = dayFmt.format(start);
        if (dayFmt.format(lastDay) !== when) when += ' – ' + dayFmt.format(lastDay);
      } else {
        when = dayFmt.format(start) + ', ' + timeFmt.format(start) + ' – ' + timeFmt.format(end);
      }
      const live = start.getTime() <= now && end.getTime() > now;
      const box = tpl.content.firstElementChild.cloneNode(true);
      box.classList.toggle('is-now', live);
      box.querySelector('.next-when').textContent = live ? T[lang]['next.now'] + ' · ' + when : when;
      box.querySelector('.next-title').textContent = ev.title;
      const where = box.querySelector('.next-where');
      const route = box.querySelector('.next-route');
      where.textContent = ev.location || '';
      where.hidden = !ev.location;
      route.textContent = T[lang].route;
      route.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ev.location || '');
      route.parentNode.hidden = !ev.location;
      const text = box.querySelector('.next-text');
      text.textContent = ev.text || '';
      text.hidden = !ev.text;
      list.appendChild(box);
    });
    document.getElementById('next-kicker').textContent = T[lang]['next.next'];
    block.hidden = false;
  }

  function loadNext() {
    fetch('/api/agenda').then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) { agenda = data; renderNext(data); })
      .catch(function () { renderNext(null); });
  }

  /* Mobile menu (burger) */
  function initMenu() {
    const btn = document.querySelector('.burger');
    const menu = document.getElementById('menu');
    if (!btn || !menu) return;
    const set = function (open) {
      document.body.classList.toggle('nav-open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', function () { set(!document.body.classList.contains('nav-open')); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }

  /* Ticker: duplicate the words once so the CSS marquee loops seamlessly */
  function initMarquees() {
    const track = document.getElementById('ticker');
    if (track) track.append.apply(track, Array.from(track.children).map(function (el) { return el.cloneNode(true); }));
  }

  /* Gallery: drifts left to right on its own; drag it (mouse, finger, trackpad) to look around.
     Holding it stops it, letting go resumes the drift, a fling keeps its speed and eases back to the
     drift speed, in either direction. One rAF loop owns the position; the set is repeated enough times
     to cover any screen and the position wraps by one set width, so it never runs out. */
  function initCarousel() {
    const carousel = document.getElementById('carousel');
    const track = carousel && carousel.querySelector('.carousel-track');
    if (!track) return;
    const DRIFT = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 45; // px/s
    const items = Array.from(track.children);
    let setWidth = 0, copies = 1, x = 0, v = DRIFT, dragging = false, lastT = 0, lastX = 0, samples = [];
    const clone = function () { items.forEach(function (el) { track.appendChild(el.cloneNode(true)); }); copies++; };
    const layout = function () {
      if (copies < 2) clone();
      setWidth = track.children[items.length].offsetLeft - items[0].offsetLeft; // one set, gaps included
      const need = Math.max(3, Math.ceil(window.innerWidth / setWidth) + 2);
      while (copies < need) clone();
    };
    const wrap = function () { if (x > -setWidth) x -= setWidth; else if (x <= -2 * setWidth) x += setWidth; };
    const frame = function (t) {
      const dt = Math.min((t - lastT) / 1000, .05); lastT = t;
      if (!dragging) { v += (DRIFT - v) * (1 - Math.exp(-dt / .9)); x += v * dt; }
      wrap();
      track.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(frame);
    };
    carousel.addEventListener('pointerdown', function (e) {
      dragging = true; v = 0; lastX = e.clientX; samples = [[e.clientX, performance.now()]];
      carousel.setPointerCapture(e.pointerId); carousel.classList.add('dragging');
    });
    carousel.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      x += e.clientX - lastX; lastX = e.clientX;
      const now = performance.now(); samples.push([e.clientX, now]);
      while (samples.length > 2 && now - samples[0][1] > 120) samples.shift();
    });
    const release = function () {
      if (!dragging) return;
      dragging = false; carousel.classList.remove('dragging');
      const a = samples[0], b = samples[samples.length - 1], dt = (b[1] - a[1]) / 1000;
      v = dt > 0.016 ? Math.max(-3000, Math.min(3000, (b[0] - a[0]) / dt)) : 0; // fling speed, or a plain stop
    };
    carousel.addEventListener('pointerup', release);
    carousel.addEventListener('pointercancel', release);
    carousel.addEventListener('wheel', function (e) { // trackpad sideways swipe
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) { e.preventDefault(); x -= e.deltaX; }
    }, { passive: false });
    layout(); x = -setWidth;
    window.addEventListener('resize', function () { const ratio = x / setWidth; layout(); x = ratio * setWidth; });
    requestAnimationFrame(frame);
  }

  /* Scroll reveals + header shadow */
  function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (el) { el.classList.add('in'); }); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
    const onScroll = function () { document.body.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Google Maps embed of the listing (resolves it by name, no key) */
  const PLACE_Q = 'Oui, Oui! - by Peltier Crêpes & Galettes, Lovense Kanaaldijk 45-5, 5013 BJ Tilburg';
  function renderPlace() {
    const frame = document.getElementById('place-frame');
    if (frame) frame.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(PLACE_Q) + '&z=16&hl=' + lang + '&output=embed';
  }

  /* Oui, Oui! stage: the video follows the scroll. Progress 0 when the stage reaches the header, 1 when
     its pinned part is about to scroll away; that gives a target time, and a frame loop glides the
     video towards it (same easing as the gallery), so wheel steps don't land as jumps and the picture
     keeps moving a moment after the scroll stops. Phones get the smaller file. iOS only lets a video
     seek once it has been "played", hence the play/pause on first touch. */
  function initStage() {
    const stage = document.getElementById('stage');
    const video = document.getElementById('stage-video');
    if (!stage || !video) return;
    const pin = stage.firstElementChild;
    video.src = window.innerWidth >= 720 ? '/video/wagon-1080.mp4' : '/video/wagon-540.mp4';
    let target = 0, current = 0, lastT = 0;
    const measure = function () {
      const top = parseFloat(getComputedStyle(pin).top) || 0;
      const rect = stage.getBoundingClientRect();
      target = Math.min(1, Math.max(0, (top - rect.top) / (stage.offsetHeight - pin.offsetHeight)));
    };
    const frame = function (t) {
      const dt = Math.min((t - lastT) / 1000, .05); lastT = t;
      current += (target - current) * (1 - Math.exp(-dt / .28));
      if (video.duration && Math.abs(current * video.duration - video.currentTime) > 1 / 60) video.currentTime = current * video.duration;
      requestAnimationFrame(frame);
    };
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    video.addEventListener('loadedmetadata', function () { measure(); current = target; });
    document.addEventListener('touchstart', function () {
      const p = video.play(); if (p && p.then) p.then(function () { video.pause(); }).catch(function () {});
    }, { once: true, passive: true });
    measure(); current = target;
    requestAnimationFrame(frame);
  }

  /* Loading screen. First page load of a visit (html.intro, set in index.html): visible at once and kept
     for one whole crêpe (2.7s). Later loads: it fades in only when the hero photos take longer than
     500ms, and then also stays 2.7s so it does not flash. Hard stop after 5s. */
  function initLoader() {
    const el = document.getElementById('loader');
    if (!el) return;
    const t0 = performance.now();
    const intro = document.documentElement.classList.contains('intro') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    const imgs = Array.from(document.querySelectorAll('.half img'));
    const ready = Promise.all(imgs.map(function (img) {
      return img.complete ? null : new Promise(function (r) { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); });
    }));
    Promise.race([ready, new Promise(function (r) { setTimeout(r, 5000); })]).then(function () {
      const shown = performance.now() - t0;
      try { sessionStorage.setItem('peltier-seen', '1'); } catch (e) { /* ignore */ }
      if (!intro && shown < 500) { el.remove(); return; } // never became visible
      setTimeout(function () {
        el.style.animation = 'none'; el.style.opacity = '1'; // hold, then fade out (transition in CSS)
        requestAnimationFrame(function () { requestAnimationFrame(function () { el.style.opacity = '0'; }); });
        setTimeout(function () { el.remove(); }, 600);
      }, Math.max(0, 2700 - shown));
    });
  }

  /* Mobile action dock: hidden on the landing screen, slides in once it has scrolled away */
  function initDock() {
    const trigger = document.querySelector('.hero');
    if (!trigger || !('IntersectionObserver' in window)) {
      document.body.classList.add('dock-on');
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      const e = entries[0];
      document.body.classList.toggle('dock-on', !e.isIntersecting && e.boundingClientRect.top < 0);
    }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' });
    io.observe(trigger);
  }

  document.addEventListener('DOMContentLoaded', function () {
    lang = detectLanguage();
    applyTranslations();
    document.querySelectorAll('.lang button').forEach(function (btn) {
      btn.addEventListener('click', function () { setLanguage(btn.dataset.lang); });
    });
    const y = document.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
    initLoader();
    initMenu();
    initMarquees();
    initCarousel();
    initReveals();
    initDock();
    initStage();
    // The Google embed needs ~5s to boot, so it starts right after the page's own assets instead of when scrolled near
    if (document.readyState === 'complete') renderPlace(); else addEventListener('load', renderPlace, { once: true });
    loadNext();
  });
})();
