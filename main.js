/* Peltier Crêpes & Galettes — language switch, mobile menu, calendar boxes, gallery, dock */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  const T = {
    nl: {
      _title: 'Peltier Crêpes & Galettes | Food stall & brunchcafé, Tilburg',
      skip: 'Naar de inhoud',
      'nav.street': 'Food Stall', 'nav.ouioui': 'Oui, Oui!', 'nav.gallery': 'Galerij', 'nav.about': 'Over ons', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline': 'Authentieke Franse pannenkoeken. Food stall & brunchcafé.',
      'hero.street': 'Food Stall', 'hero.streetSub': 'Markten, evenementen & catering', 'hero.cta': 'Ontdek',
      'hero.streetAlt': 'Simon bakt crêpes op zijn kraam terwijl bezoekers wachten',
      'hero.ouioui': 'Oui, Oui!', 'hero.ouiouiSub': 'Brunchcafé bij Fabriek59 · elke zondag 9:30 – 17:30',
      'hero.ouiouiAlt': 'De rode treinwagon van Oui, Oui! bij Fabriek59, met terrasstoelen ervoor',
      route: 'Route', instagram: 'Instagram', 'menu.check': 'Bekijk de kaart', 'ouioui.menu': 'Ontdek onze kaart',
      'street.kicker': 'Food Stall', 'street.title': 'Crêpes & galettes street food',
      'street.text': 'Zoete crêpes & hartige boekweitgalettes, ter plekke gebakken volgens de Franse traditie. Je vindt onze food stall op markten, festivals en evenementen in heel Brabant. Op aanvraag ook op jouw eigen evenement.',
      'street.weekly': 'Wekelijkse locaties',
      'street.market.title': 'Tilburgse zaterdagmarkt', 'street.market.text': 'Hier is het allemaal begonnen, in september 2024.', 'street.market.hours': 'Elke zaterdag, 10:00 – 17:00',
      'street.city.title': 'The City - Cobbencampus', 'street.city.text': 'Wekelijks voor de studenten.', 'street.city.hours': 'Elke maandag, 12:00 – 20:00',
      'street.catering': 'Crêpes op jouw evenement?',
      'next.next': 'Binnenkort', 'next.now': 'Vandaag',
      'ouioui.kicker': 'Oui, Oui!', 'ouioui.title': 'Franse brunch in een treinwagon',
      'ouioui.text': 'Sinds september 2026 hebben we ons eigen brunchcafé bij Fabriek59. Schuif aan voor een gezellige rit in onze knusse treinwagon. Crêpes, galettes, Franse specialiteiten, warme dranken.',
      'ouioui.where.kicker': 'Waar?', 'ouioui.where.title': 'Rode wagon bij Fabriek59',
      'ouioui.hours.kicker': 'Openingstijden', 'ouioui.hours.title': 'Zondag 9:30 – 17:30', 'ouioui.hours.text': 'Alleen op zondag. Dat houdt het bijzonder.',
      'ticker.1': 'Food Stall', 'ticker.2': 'Brunchcafé', 'ticker.3': 'Catering', 'ticker.4': 'Tilburgse markt', 'ticker.5': 'Crêpes', 'ticker.6': 'Galettes', 'ticker.7': 'Bonjour', 'ticker.8': 'Traditioneel', 'ticker.9': 'Frans', 'ticker.10': 'Huisgemaakt', 'ticker.11': 'Vers',
      'gallery.kicker': 'Van de bakplaat', 'gallery.title': 'Onze bestsellers',
      'dish.sugar': 'Suiker', 'dish.stroop': 'Stroop', 'dish.og': 'The O.G', 'dish.honey': 'Honing', 'dish.applepie': 'Appeltaart', 'dish.nutella': 'Nutella',
      'about.kicker': 'Over ons', 'about.title': 'Bonjour! Simon hier,',
      'about.alt': 'Simon Peltier in zijn kraam, lachend met een verse crêpe in de hand',
      'about.p1': 'Ik groeide op met Franse & Belgische roots en kwam in 2019 naar Tilburg om te studeren. Mijn liefde voor Frans eten en voor ondernemen bracht me tot Peltier.',
      'about.p2': 'Van jongs af aan heb ik ontelbare crêpes verslonden. Ik bouwde hier mijn eigen wereldje op, maar één ding miste ik nog…',
      'about.p3': 'In september 2024 begon ik een kleine crêpeskraam op de markt van het Koningsplein in Tilburg. Na de enorme steun van de lokale community wist ik dat ik deze droom verder wilde najagen. Ik stond er elke week en stopte mijn hart in iedere crêpe.',
      'about.p4': 'Van het een kwam het ander. Ik ging evenementen, cateringklussen en markten door heel Brabant doen. De familie groeide een beetje, en in september 2026, na 9 maanden verbouwen, openden we een eigen plek. We verwelkomen je nu graag bij Oui, Oui!, de treinwagon van Fabriek59.',
      'contact.kicker': 'Contact', 'contact.title': 'Een vraag, een reservering of een boeking?',
      'contact.text': 'Festival, bruiloft, verjaardag, bedrijfsborrel of B2B: wij brengen de authentieke Franse ervaring, op maat van jouw evenement. Neem contact op via het kanaal dat jij het fijnst vindt.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
      'place.reviews': 'Google-reviews', 'place.photo': 'Foto via Google Maps',
      'foot.tag': 'Food stall & brunchcafé', 'foot.contact': 'Contact', 'foot.follow': 'Volg ons'
    },
    en: {
      _title: 'Peltier Crêpes & Galettes | Food stall & brunch café, Tilburg',
      skip: 'Skip to content',
      'nav.street': 'Food Stall', 'nav.ouioui': 'Oui, Oui!', 'nav.gallery': 'Gallery', 'nav.about': 'About us', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline': 'Authentic French pancakes. Food stall & brunch café.',
      'hero.street': 'Food Stall', 'hero.streetSub': 'Markets, events & catering', 'hero.cta': 'Discover',
      'hero.streetAlt': 'Simon making crêpes at his stall while visitors wait',
      'hero.ouioui': 'Oui, Oui!', 'hero.ouiouiSub': 'Brunch café at Fabriek59 · every Sunday 9:30 – 17:30',
      'hero.ouiouiAlt': 'The red Oui, Oui! train wagon at Fabriek59, with terrace chairs in front',
      route: 'Directions', instagram: 'Instagram', 'menu.check': 'Check the menu', 'ouioui.menu': 'Discover our menu',
      'street.kicker': 'Food Stall', 'street.title': 'Crêpes & galettes street food',
      'street.text': 'Sweet crêpes & savoury buckwheat galettes, baked on site true to the French tradition. Find our street-food stall at markets, festivals and events across Brabant. On request, at your own event.',
      'street.weekly': 'Weekly locations',
      'street.market.title': 'Tilburg Saturday market', 'street.market.text': 'This is where it all started, back in September 2024.', 'street.market.hours': 'Every Saturday, 10:00 – 17:00',
      'street.city.title': 'The City - Cobbencampus', 'street.city.text': 'Serving students, weekly.', 'street.city.hours': 'Every Monday, 12:00 – 20:00',
      'street.catering': 'Crêpes at your event?',
      'next.next': 'Coming up', 'next.now': 'Today',
      'ouioui.kicker': 'Oui, Oui!', 'ouioui.title': 'French brunch in a train wagon',
      'ouioui.text': 'Since September 2026, we opened our very own brunch café at Fabriek59. Settle in for a wholesome ride in our cozy train wagon. Crêpes, galettes, French specialties, warm drinks.',
      'ouioui.where.kicker': 'Where?', 'ouioui.where.title': 'Red wagon at Fabriek59',
      'ouioui.hours.kicker': 'Opening hours', 'ouioui.hours.title': 'Sunday 9:30 – 17:30', 'ouioui.hours.text': 'Sundays only. Keep it special.',
      'ticker.1': 'Food Stall', 'ticker.2': 'Brunch café', 'ticker.3': 'Catering', 'ticker.4': 'Tilburg Market', 'ticker.5': 'Crêpes', 'ticker.6': 'Galettes', 'ticker.7': 'Bonjour', 'ticker.8': 'Traditional', 'ticker.9': 'French', 'ticker.10': 'Homemade', 'ticker.11': 'Fresh',
      'gallery.kicker': 'Off the griddle', 'gallery.title': 'Our best sellers',
      'dish.sugar': 'Sugar', 'dish.stroop': 'Stroop', 'dish.og': 'The O.G', 'dish.honey': 'Honey', 'dish.applepie': 'Apple pie', 'dish.nutella': 'Nutella',
      'about.kicker': 'About us', 'about.title': 'Bonjour! Simon here,',
      'about.alt': 'Simon Peltier at his stall, smiling and holding out a freshly made crêpe',
      'about.p1': 'I grew up with French & Belgian roots and came to Tilburg in 2019 to study. My love for French food and for entrepreneurship led me to start Peltier.',
      'about.p2': 'Since my youngest age, I have devoured countless crêpes. I made my little world here, but I was missing one more thing…',
      'about.p3': 'In September 2024, I started a small crêpes stand on the Koningsplein Market of Tilburg. After receiving immense support from the local community, I knew I wanted to chase this dream further. I consistently attended the market and put my heart into every single crêpe.',
      'about.p4': 'One thing led to another. I started joining events, catering gigs, and markets across Brabant. The family grew a little bigger, and in September 2026, after 9 months of renovation, we opened a place of our own. We are now happy to welcome you at Oui, Oui!, the train wagon of Fabriek59.',
      'contact.kicker': 'Contact', 'contact.title': 'A question, a reservation, or a booking?',
      'contact.text': 'Festival, wedding, birthday, company gathering or B2B, we bring you the authentic French experience, tailored to your event. Contact us via your preferred channel.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
      'place.reviews': 'Google reviews', 'place.photo': 'Photo via Google Maps',
      'foot.tag': 'Food stall & brunch café', 'foot.contact': 'Contact', 'foot.follow': 'Follow us'
    },
    fr: {
      _title: 'Peltier Crêpes & Galettes | Food stall & brunch café, Tilburg',
      skip: 'Aller au contenu',
      'nav.street': 'Food Stall', 'nav.ouioui': 'Oui, Oui!', 'nav.gallery': 'Galerie', 'nav.about': 'À propos', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline': 'Crêpes françaises authentiques. Food stall & brunch café.',
      'hero.street': 'Food Stall', 'hero.streetSub': 'Marchés, événements & traiteur', 'hero.cta': 'Découvrir',
      'hero.streetAlt': 'Simon prépare des crêpes à son stand pendant que les visiteurs attendent',
      'hero.ouioui': 'Oui, Oui!', 'hero.ouiouiSub': 'Brunch café à Fabriek59 · tous les dimanches 9h30 – 17h30',
      'hero.ouiouiAlt': 'Le wagon rouge de Oui, Oui! à Fabriek59, avec les chaises de la terrasse devant',
      route: 'Itinéraire', instagram: 'Instagram', 'menu.check': 'Voir la carte', 'ouioui.menu': 'Découvrir notre carte',
      'street.kicker': 'Food Stall', 'street.title': 'Crêpes & galettes street food',
      'street.text': 'Crêpes sucrées & galettes de sarrasin salées, cuites sur place dans la pure tradition française. Retrouvez notre stand sur les marchés, festivals et événements de tout le Brabant. Sur demande, à votre propre événement.',
      'street.weekly': 'Chaque semaine',
      'street.market.title': 'Marché du samedi, Tilburg', 'street.market.text': 'C’est ici que tout a commencé, en septembre 2024.', 'street.market.hours': 'Tous les samedis, 10h00 – 17h00',
      'street.city.title': 'The City - Cobbencampus', 'street.city.text': 'Chaque semaine pour les étudiants.', 'street.city.hours': 'Tous les lundis, 12h00 – 20h00',
      'street.catering': 'Des crêpes à votre événement ?',
      'next.next': 'Prochainement', 'next.now': 'Aujourd’hui',
      'ouioui.kicker': 'Oui, Oui!', 'ouioui.title': 'Brunch français dans un wagon',
      'ouioui.text': 'Depuis septembre 2026, nous avons ouvert notre propre brunch café à Fabriek59. Installez-vous pour un voyage gourmand dans notre wagon douillet. Crêpes, galettes, spécialités françaises, boissons chaudes.',
      'ouioui.where.kicker': 'Où ?', 'ouioui.where.title': 'Le wagon rouge de Fabriek59',
      'ouioui.hours.kicker': 'Horaires', 'ouioui.hours.title': 'Dimanche 9h30 – 17h30', 'ouioui.hours.text': 'Le dimanche seulement. Pour que ça reste spécial.',
      'ticker.1': 'Food Stall', 'ticker.2': 'Brunch café', 'ticker.3': 'Traiteur', 'ticker.4': 'Marché de Tilburg', 'ticker.5': 'Crêpes', 'ticker.6': 'Galettes', 'ticker.7': 'Bonjour', 'ticker.8': 'Traditionnel', 'ticker.9': 'Français', 'ticker.10': 'Fait maison', 'ticker.11': 'Frais',
      'gallery.kicker': 'Sorties du bilig', 'gallery.title': 'Nos best-sellers',
      'dish.sugar': 'Sucre', 'dish.stroop': 'Sirop', 'dish.og': 'The O.G', 'dish.honey': 'Miel', 'dish.applepie': 'Tarte aux pommes', 'dish.nutella': 'Nutella',
      'about.kicker': 'À propos', 'about.title': 'Bonjour ! Ici Simon,',
      'about.alt': 'Simon Peltier à son stand, souriant, une crêpe fraîche à la main',
      'about.p1': 'J’ai grandi avec des racines françaises & belges et je suis venu à Tilburg en 2019 pour étudier. Mon amour de la cuisine française et de l’entrepreneuriat m’a mené à créer Peltier.',
      'about.p2': 'Depuis tout petit, j’ai dévoré d’innombrables crêpes. Je m’étais construit mon petit monde ici, mais il me manquait encore une chose…',
      'about.p3': 'En septembre 2024, j’ai lancé un petit stand de crêpes sur le marché du Koningsplein à Tilburg. Porté par l’immense soutien de la communauté locale, j’ai su que je voulais poursuivre ce rêve. J’ai tenu le marché chaque semaine et mis tout mon cœur dans chaque crêpe.',
      'about.p4': 'De fil en aiguille, j’ai rejoint des événements, des prestations traiteur et des marchés dans tout le Brabant. La famille s’est un peu agrandie et, en septembre 2026, après 9 mois de rénovation, nous avons ouvert notre propre adresse. Nous sommes heureux de vous accueillir à Oui, Oui!, le wagon de Fabriek59.',
      'contact.kicker': 'Contact', 'contact.title': 'Une question, une réservation ou une prestation ?',
      'contact.text': 'Festival, mariage, anniversaire, événement d’entreprise ou B2B : nous vous apportons l’authentique expérience française, adaptée à votre événement. Contactez-nous par le canal de votre choix.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
      'place.reviews': 'avis Google', 'place.photo': 'Photo via Google Maps',
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

  /* Marquees (ticker + carousel): duplicate the set once so the loop is seamless; pause on touch */
  function initMarquees() {
    document.querySelectorAll('#ticker, .carousel-track').forEach(function (track) {
      track.append.apply(track, Array.from(track.children).map(function (el) { return el.cloneNode(true); }));
    });
    const carousel = document.getElementById('carousel');
    if (carousel) {
      carousel.addEventListener('pointerdown', function () { carousel.classList.add('paused'); });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (t) {
        carousel.addEventListener(t, function () { carousel.classList.remove('paused'); });
      });
    }
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

  /* Google listing: map embed (resolves the listing by name, no key) + photo and rating from /api/place */
  const PLACE_Q = 'Oui, Oui! - by Peltier Crêpes & Galettes, Lovense Kanaaldijk 45-5, 5013 BJ Tilburg';
  let placeData = null;
  function renderPlace() {
    const frame = document.getElementById('place-frame');
    if (frame) frame.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(PLACE_Q) + '&z=16&hl=' + lang + '&output=embed';
    const d = placeData;
    if (!d || !d.ok) return;
    const img = document.getElementById('place-img');
    const rating = document.getElementById('place-rating');
    const credit = document.getElementById('place-credit');
    if (d.photos && d.photos[0]) {
      img.src = d.photos[0].src; img.removeAttribute('width'); img.removeAttribute('height');
      credit.textContent = T[lang]['place.photo'] + (d.photos[0].by ? ' · ' + d.photos[0].by : '');
      credit.hidden = false;
    }
    if (d.rating) {
      rating.textContent = '★ ' + d.rating.toLocaleString(LOCALE[lang], { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' · ' + d.count + ' ' + T[lang]['place.reviews'];
      if (d.mapsUrl) rating.href = d.mapsUrl;
      rating.hidden = false;
    }
  }
  function loadPlace() {
    renderPlace();
    fetch('/api/place').then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { placeData = d; renderPlace(); })
      .catch(function () { /* keep our own photo */ });
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
    initMenu();
    initMarquees();
    initReveals();
    initDock();
    loadPlace();
    loadNext();
  });
})();
