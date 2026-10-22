/* Peltier Crêpes & Galettes — language switch, mobile menu, calendar card, gallery, dock */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  const T = {
    nl: {
      _title: 'Peltier Crêpes & Galettes | Street food & Oui Oui brunch place, Tilburg',
      skip: 'Naar de inhoud',
      'nav.street': 'Street food', 'nav.ouioui': 'Oui Oui', 'nav.gallery': 'Galerij', 'nav.about': 'Over ons', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline': 'Franse crêpes en galettes uit Tilburg. Op straat en in onze wagon.',
      'hero.street': 'Street food', 'hero.streetSub': 'Markten, evenementen & catering', 'hero.streetTag': '01 · Op straat', 'hero.cta': 'Ontdek',
      'hero.streetAlt': 'Simon bakt crêpes op zijn kraam terwijl bezoekers wachten',
      'hero.ouioui': 'Oui Oui', 'hero.ouiouiSub': 'Brunch place bij Fabriek 59 · zondag 9:30 – 17:30', 'hero.ouiouiTag': '02 · In de wagon',
      'hero.ouiouiAlt': 'De rode treinwagon van Oui Oui bij Fabriek 59, met terrasstoelen ervoor',
      route: 'Route', instagram: 'Instagram', 'menu.check': 'Bekijk de kaart (PDF)',
      'street.kicker': 'Street food', 'street.title': 'De crêpes- & galettes-kraam',
      'street.text': 'Zoete crêpes en hartige galettes van boekweit, voor je neus gebakken op de bakplaat. Je vindt de kraam op de markt, op festivals en evenementen in Brabant, en op aanvraag op jouw eigen feest of bedrijfsborrel.',
      'street.fixed.kicker': 'Vaste plek', 'street.fixed.title': 'Zaterdagmarkt Koningsplein',
      'street.fixed.text': 'Hier begon het, in september 2024. Iedere zaterdag met de bakplaten aan.',
      'street.fixed.hours': 'Zaterdag 10:00 – 17:00',
      'street.catering': 'Crêpes op jouw evenement?',
      'next.next': 'Volgende keer', 'next.now': 'Vandaag', 'next.latest': 'Laatst', 'next.fallback': 'Crêpes en galettes, vers van de bakplaat. Tot dan!',
      'ouioui.kicker': 'Oui Oui', 'ouioui.title': 'Brunch place in de treinwagon',
      'ouioui.text': 'Sinds 2026 hebben we een eigen plek: een oude treinwagon aan het kanaal, op het terrein van Fabriek 59. Hier schuif je aan voor een ontspannen brunch met crêpes en galettes, zoals in Bretagne. Zonder haast, met een praatje.',
      'ouioui.where.kicker': 'Waar', 'ouioui.where.title': 'De wagon bij Fabriek 59',
      'ouioui.hours.kicker': 'Openingstijden', 'ouioui.hours.title': 'Zondag 9:30 – 17:30',
      'ouioui.hours.text': 'Elke zondag open voor brunch. Op de andere dagen is de wagon gesloten. Afwijkende tijden zetten we op Instagram.',
      'ticker.1': 'Crêpes', 'ticker.2': 'Galettes', 'ticker.3': 'Zondag brunch in de wagon', 'ticker.4': 'Elke zaterdag op de markt', 'ticker.5': 'Vers van de bakplaat', 'ticker.6': 'Catering op jouw evenement', 'ticker.7': 'Bonjour Tilburg',
      'gallery.kicker': 'Van de bakplaat', 'gallery.title': 'Onze crêpes',
      'dish.sugar': 'Suiker', 'dish.stroop': 'Stroop', 'dish.og': 'The O.G', 'dish.honey': 'Honing', 'dish.applepie': 'Appeltaart', 'dish.nutella': 'Nutella',
      'about.kicker': 'Over ons', 'about.title': 'Bonjour, ik ben Simon',
      'about.alt': 'Simon Peltier in zijn kraam, lachend met een verse crêpe in de hand',
      'about.p1': 'Ik groeide op met Franse en Belgische wortels en kwam naar Tilburg om ondernemerschap te studeren. De crêpes en galettes van thuis kwamen mee.',
      'about.p2': 'In september 2024 begon ik met een kraam op de zaterdagmarkt. Daarna volgden festivals, bedrijfsborrels, studentenhuizen en markten door heel Brabant. In 2026 opende ik, met steun van de Tilburgse community, een eigen plek: een treinwagon op Fabriek 59.',
      'about.p3': 'Het idee is simpel gebleven: goede ingrediënten, een hete bakplaat en alles vers voor je neus gebakken. En een praatje, dat hoort erbij.',
      'about.quote': '“Dun, perfect gebakken en vol van smaak.”', 'about.quoteSrc': 'Google-recensie over de zaterdagmarkt',
      'contact.kicker': 'Contact', 'contact.title': 'Vraag, reservering of crêpes op jouw evenement?',
      'contact.text': 'Bedrijfsborrel, festival, bruiloft, verjaardag of buurtfeest: Simon komt met de bakplaten naar jou. Stuur een berichtje en je krijgt snel antwoord.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
      'place.reviews': 'Google-reviews', 'place.photo': 'Foto via Google Maps',
      'foot.tag': 'Street food & Oui Oui brunch place', 'foot.contact': 'Contact', 'foot.follow': 'Volg ons', 'foot.gofundme': 'Steun ons via GoFundMe'
    },
    en: {
      _title: 'Peltier Crêpes & Galettes | Street food & Oui Oui brunch place, Tilburg',
      skip: 'Skip to content',
      'nav.street': 'Street food', 'nav.ouioui': 'Oui Oui', 'nav.gallery': 'Gallery', 'nav.about': 'About us', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline': 'French crêpes and galettes from Tilburg. On the street and in our wagon.',
      'hero.street': 'Street food', 'hero.streetSub': 'Markets, events & catering', 'hero.streetTag': '01 · On the street', 'hero.cta': 'Discover',
      'hero.streetAlt': 'Simon making crêpes at his stall while visitors wait',
      'hero.ouioui': 'Oui Oui', 'hero.ouiouiSub': 'Brunch place at Fabriek 59 · Sunday 9:30 – 17:30', 'hero.ouiouiTag': '02 · In the wagon',
      'hero.ouiouiAlt': 'The red Oui Oui train wagon at Fabriek 59, with terrace chairs in front',
      route: 'Directions', instagram: 'Instagram', 'menu.check': 'Check the menu (PDF)',
      'street.kicker': 'Street food', 'street.title': 'The crêpes & galettes stand',
      'street.text': 'Sweet crêpes and savoury buckwheat galettes, made in front of you on the griddle. Find the stand at the market, at festivals and events across Brabant, and on request at your own party or company drinks.',
      'street.fixed.kicker': 'Regular spot', 'street.fixed.title': 'Saturday market, Koningsplein',
      'street.fixed.text': 'This is where it started, in September 2024. Every Saturday with the griddles on.',
      'street.fixed.hours': 'Saturday 10:00 – 17:00',
      'street.catering': 'Crêpes at your event?',
      'next.next': 'Coming up', 'next.now': 'Today', 'next.latest': 'Most recently', 'next.fallback': 'Crêpes and galettes fresh off the griddle. See you there!',
      'ouioui.kicker': 'Oui Oui', 'ouioui.title': 'Brunch place in the train wagon',
      'ouioui.text': 'Since 2026 we have a place of our own: an old train wagon by the canal, on the Fabriek 59 grounds. Settle in for a relaxed brunch with crêpes and galettes, the Breton way. No rush, and a chat included.',
      'ouioui.where.kicker': 'Where', 'ouioui.where.title': 'The wagon at Fabriek 59',
      'ouioui.hours.kicker': 'Opening hours', 'ouioui.hours.title': 'Sunday 9:30 – 17:30',
      'ouioui.hours.text': 'Open every Sunday for brunch. The wagon is closed on the other days. Any changes are posted on Instagram.',
      'ticker.1': 'Crêpes', 'ticker.2': 'Galettes', 'ticker.3': 'Sunday brunch in the wagon', 'ticker.4': 'Every Saturday at the market', 'ticker.5': 'Fresh off the griddle', 'ticker.6': 'Catering at your event', 'ticker.7': 'Bonjour Tilburg',
      'gallery.kicker': 'Off the griddle', 'gallery.title': 'Our crêpes',
      'dish.sugar': 'Sugar', 'dish.stroop': 'Stroop', 'dish.og': 'The O.G', 'dish.honey': 'Honey', 'dish.applepie': 'Apple pie', 'dish.nutella': 'Nutella',
      'about.kicker': 'About us', 'about.title': 'Bonjour, I am Simon',
      'about.alt': 'Simon Peltier at his stall, smiling and holding out a freshly made crêpe',
      'about.p1': 'I grew up with French and Belgian roots and came to Tilburg to study entrepreneurship. The crêpes and galettes from home came along.',
      'about.p2': 'In September 2024 I started with a stall at the Saturday market. Festivals, company drinks, student residences and markets across Brabant followed. In 2026, backed by the Tilburg community, I opened a place of my own: a train wagon at Fabriek 59.',
      'about.p3': 'The idea has stayed simple: good ingredients, a hot griddle, and everything made fresh in front of you. Plus a chat, that is part of it.',
      'about.quote': '“Thin, perfectly baked and full of flavour.”', 'about.quoteSrc': 'Google review of the Saturday market stall',
      'contact.kicker': 'Contact', 'contact.title': 'A question, a booking, or crêpes at your event?',
      'contact.text': 'Company drinks, festival, wedding, birthday or street party: Simon brings the griddles to you. Send a message and you will hear back quickly.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
      'place.reviews': 'Google reviews', 'place.photo': 'Photo via Google Maps',
      'foot.tag': 'Street food & Oui Oui brunch place', 'foot.contact': 'Contact', 'foot.follow': 'Follow us', 'foot.gofundme': 'Support us on GoFundMe'
    },
    fr: {
      _title: 'Peltier Crêpes & Galettes | Street food & Oui Oui brunch place, Tilburg',
      skip: 'Aller au contenu',
      'nav.street': 'Street food', 'nav.ouioui': 'Oui Oui', 'nav.gallery': 'Galerie', 'nav.about': 'À propos', 'nav.contact': 'Contact',
      'hero.title': 'Peltier Crêpes & Galettes',
      'hero.tagline': 'Crêpes et galettes françaises à Tilburg. Dans la rue et dans notre wagon.',
      'hero.street': 'Street food', 'hero.streetSub': 'Marchés, événements & traiteur', 'hero.streetTag': '01 · Dans la rue', 'hero.cta': 'Découvrir',
      'hero.streetAlt': 'Simon prépare des crêpes à son stand pendant que les visiteurs attendent',
      'hero.ouioui': 'Oui Oui', 'hero.ouiouiSub': 'Brunch place à Fabriek 59 · dimanche 9h30 – 17h30', 'hero.ouiouiTag': '02 · Dans le wagon',
      'hero.ouiouiAlt': 'Le wagon rouge de Oui Oui à Fabriek 59, avec les chaises de la terrasse devant',
      route: 'Itinéraire', instagram: 'Instagram', 'menu.check': 'Voir la carte (PDF)',
      'street.kicker': 'Street food', 'street.title': 'Le stand de crêpes & galettes',
      'street.text': 'Crêpes sucrées et galettes de sarrasin salées, préparées devant vous sur le bilig. Retrouvez le stand au marché, dans les festivals et événements du Brabant, et sur demande à votre fête ou afterwork.',
      'street.fixed.kicker': 'Adresse fixe', 'street.fixed.title': 'Marché du samedi, Koningsplein',
      'street.fixed.text': 'Tout a commencé ici, en septembre 2024. Chaque samedi, biligs allumés.',
      'street.fixed.hours': 'Samedi 10:00 – 17:00',
      'street.catering': 'Des crêpes à votre événement ?',
      'next.next': 'Prochainement', 'next.now': 'Aujourd’hui', 'next.latest': 'Dernièrement', 'next.fallback': 'Crêpes et galettes tout juste sorties du bilig. À bientôt !',
      'ouioui.kicker': 'Oui Oui', 'ouioui.title': 'Brunch place dans le wagon',
      'ouioui.text': 'Depuis 2026, nous avons notre propre adresse : un ancien wagon au bord du canal, sur le site de Fabriek 59. Installez-vous pour un brunch tranquille, crêpes et galettes comme en Bretagne. Sans se presser, avec un brin de conversation.',
      'ouioui.where.kicker': 'Où', 'ouioui.where.title': 'Le wagon à Fabriek 59',
      'ouioui.hours.kicker': 'Horaires', 'ouioui.hours.title': 'Dimanche 9h30 – 17h30',
      'ouioui.hours.text': 'Ouvert tous les dimanches pour le brunch. Le wagon est fermé les autres jours. Les changements sont annoncés sur Instagram.',
      'ticker.1': 'Crêpes', 'ticker.2': 'Galettes', 'ticker.3': 'Brunch du dimanche dans le wagon', 'ticker.4': 'Chaque samedi au marché', 'ticker.5': 'Tout juste sorties du bilig', 'ticker.6': 'Traiteur pour vos événements', 'ticker.7': 'Bonjour Tilburg',
      'gallery.kicker': 'Sorties du bilig', 'gallery.title': 'Nos crêpes',
      'dish.sugar': 'Sucre', 'dish.stroop': 'Sirop', 'dish.og': 'The O.G', 'dish.honey': 'Miel', 'dish.applepie': 'Tarte aux pommes', 'dish.nutella': 'Nutella',
      'about.kicker': 'À propos', 'about.title': 'Bonjour, je suis Simon',
      'about.alt': 'Simon Peltier à son stand, souriant, une crêpe fraîche à la main',
      'about.p1': 'J’ai grandi avec des racines françaises et belges et je suis venu à Tilburg étudier l’entrepreneuriat. Les crêpes et galettes de la maison ont suivi.',
      'about.p2': 'En septembre 2024, j’ai démarré avec un stand au marché du samedi. Puis sont venus les festivals, les afterworks, les résidences étudiantes et les marchés dans tout le Brabant. En 2026, avec le soutien de la communauté de Tilburg, j’ai ouvert ma propre adresse : un wagon à Fabriek 59.',
      'about.p3': 'L’idée est restée simple : de bons ingrédients, un bilig bien chaud et tout est préparé devant vous. Avec un brin de conversation, ça fait partie du menu.',
      'about.quote': '« Fines, parfaitement cuites et pleines de saveur. »', 'about.quoteSrc': 'Avis Google sur le stand du marché',
      'contact.kicker': 'Contact', 'contact.title': 'Une question, une réservation ou des crêpes à votre événement ?',
      'contact.text': 'Afterwork, festival, mariage, anniversaire ou fête de quartier : Simon vient avec ses biligs. Envoyez un message et vous aurez vite une réponse.',
      'contact.wa': 'WhatsApp Simon', 'contact.mail': 'E-mail',
      'place.reviews': 'avis Google', 'place.photo': 'Photo via Google Maps',
      'foot.tag': 'Street food & Oui Oui brunch place', 'foot.contact': 'Contact', 'foot.follow': 'Suivez-nous', 'foot.gofundme': 'Soutenez-nous sur GoFundMe'
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
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
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

  /* Calendar card: /api/agenda returns the next event from Simon's public calendar
     (or the one happening now, or the most recent one when nothing is planned). */
  function renderNext(data) {
    const card = document.getElementById('next');
    if (!card) return;
    if (!data || data.mode === 'none' || !data.event) { card.hidden = true; return; }
    const ev = data.event;
    const start = new Date(ev.start), end = new Date(ev.end);
    const loc = LOCALE[lang];
    const dayFmt = new Intl.DateTimeFormat(loc, { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long' });
    const timeFmt = new Intl.DateTimeFormat(loc, { timeZone: TZ, hour: '2-digit', minute: '2-digit' });
    let when;
    if (ev.allDay) {
      const lastDay = new Date(end.getTime() - 1); // DTEND is exclusive
      when = dayFmt.format(start);
      if (dayFmt.format(lastDay) !== when) when += ' – ' + dayFmt.format(lastDay);
    } else {
      when = dayFmt.format(start) + ', ' + timeFmt.format(start) + ' – ' + timeFmt.format(end);
    }
    document.getElementById('next-kicker').textContent = T[lang]['next.' + data.mode] || T[lang]['next.next'];
    document.getElementById('next-title').textContent = ev.title;
    document.getElementById('next-when').textContent = when;
    const where = document.getElementById('next-where');
    const route = document.getElementById('next-route');
    where.textContent = ev.location || '';
    where.hidden = !ev.location;
    route.hidden = !ev.location;
    route.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ev.location || '');
    document.getElementById('next-text').textContent = ev.text || T[lang]['next.fallback'];
    card.classList.toggle('is-now', data.mode === 'now');
    card.hidden = false;
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
