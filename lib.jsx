/* ============================================================
   lib.jsx — shared primitives for the JLC homepage kit
   i18n (EN/ES), Lucide icons, Reveal, Counter, Typewriter, Particles
   ============================================================ */

/* ---------- i18n dictionary ---------- */
const DICT = {
  en: {
    "nav.services": "Services", "nav.work": "How We Work", "nav.about": "About",
    "nav.proof": "Results", "nav.cta": "Book a Free Audit",
    "hero.eyebrow": "Enterprise Workflow Modernization",
    "hero.specialist": "Appointment Lifecycle Specialist — from referral to revenue",
    "hero.t1": "BPM Architect.", "hero.t2": "Power Platform Expert.",
    "hero.t3": "Healthcare IT Specialist.", "hero.t4": "Automation Strategist.",
    "hero.title1": "Your people deserve a better process", "hero.title2": "to produce the ",
    "hero.titleAccent": "best product.",
    "hero.sub": "I modernize the workflows that run healthcare and professional-services teams — aligning people, streamlining operations, and delivering automation that actually sticks.",
    "hero.cta1": "Book a Free Audit", "hero.cta2": "See How It Works",
    "hero.trust1": "15+ yrs in healthcare ops", "hero.trust2": "Bilingual EN / ES", "hero.trust3": "Remote, US-wide",
    "calc.title": "Calculate Your Savings", "calc.sub": "The real cost of manual operations",
    "calc.team": "Team Size", "calc.hours": "Manual Hrs / Person / Week", "calc.rate": "Avg Hourly Rate ($)",
    "calc.state": "Process Inefficiency", "calc.mild": "Mild", "calc.chaotic": "Chaotic", "calc.archaic": "Archaic",
    "calc.reclaimed": "Hours Reclaimed / Yr", "calc.savings": "Annual Savings",
    "calc.denial": "Denial Recovery Potential",
    "calc.capped": "capped",
    "calc.foot": "Estimates based on healthcare revenue-cycle benchmarks. Actual results vary.",
    "proof.kicker": "Trusted by teams who run on",
    "proof.eyebrow": "Social proof", "proof.title": "Results that earn the next engagement.",
    "proof.q1": "Streamlined an archaic refund process with automation — cutting handling and approval time by 80%. It scaled across multiple lanes of the organization.",
    "proof.r1": "SVP, Internal Performance · Sonrava Healthcare",
    "proof.q2": "Delivered ahead of schedule — and considered user needs AND management priorities at every step.",
    "proof.r2": "Accounting Director · Sonrava Health",
    "proof.q3": "He didn't just solve the problem — he made sure our team understood it too.",
    "proof.r3": "Business Analyst",
    "work.eyebrow": "How we work", "work.title": "We simplify the chaos.",
    "work.sub": "Systems that run smoothly. People who work confidently. A method, not a mystery.",
    "work.1t": "Ask the right questions first", "work.1d": "We start with your people, goals, and pain points — never the technology.",
    "work.2t": "Build it and document it", "work.2d": "Every solution is built to last and documented so your team can own it.",
    "work.3t": "Train your team to run it", "work.3d": "We don't disappear after delivery. Your people operate confidently without us.",
    "svc.eyebrow": "What I deliver", "svc.title": "Services built for real operational problems.",
    "svc.sub": "Fixed scope. Clear ROI. Built to be owned by your team — not to keep you dependent on me.",
    "svc.flip": "Hover to see how",
    "svc.1n": "01 · Automation Audit", "svc.1t": "Map Your Pain Points", "svc.1d": "Pinpoint your top 3–5 manual bottlenecks. Fixed price, clear ROI roadmap. Free 30-minute version available.",
    "svc.2n": "02 · Quick Win Build", "svc.2t": "One Workflow, End-to-End", "svc.2d": "A complete workflow built, automated, and documented — delivered in days, not months.",
    "svc.3n": "03 · Department Sprint", "svc.3t": "30–60 Day Transformation", "svc.3d": "Full redesign for one department: flows, apps, integrations, and staff training included.",
    "svc.4n": "04 · Full Office Automation", "svc.4t": "Discovery → Delivery", "svc.4d": "End-to-end transformation across every department, with support through the transition.",
    "svc.5n": "05 · Monthly Care Plan", "svc.5t": "Continuous Optimization", "svc.5d": "One retainer for ongoing reviews, monitoring, and priority improvements as you grow.",
    "svc.6n": "06 · AI Integration", "svc.6t": "Practical AI, Not Hype", "svc.6d": "Document processing, intelligent routing, and AI-assisted reporting — applied where it pays off.",
    "stats.eyebrow": "By the numbers", "stats.title": "Fifteen years of measurable operational impact.",
    "stats.1": "Operational value delivered",
    "stats.2": "Years in healthcare ops",
    "stats.3": "Faster refund-approval cycle",
    "stats.3sub": "Sonrava Healthcare engagement",
    "founder.eyebrow": "Why Jesse", "founder.title": "I don't disappear after delivery.",
    "founder.body": "Most consultants hand off and move on. I stay until your team is fully operational and confident — because a system nobody can run isn't a solution.",
    "founder.p1": "We document the process — your team owns it.",
    "founder.p2": "We train your people — not create dependence.",
    "founder.p3": "We explain the why — so decisions stick.",
    "founder.p4": "Deep healthcare revenue-cycle expertise.",
    "founder.badgeN": "$12M+", "founder.badgeL": "Value delivered",

    "comm.eyebrow": "Community Mission", "comm.title": "AI, Demystified. Growth, Multiplied.",
    "comm.body": "Technology should empower families — not intimidate them. Jesse Lopez Consulting is building an AI literacy program for children and parents in Southern California — starting at local libraries.",
    "comm.quote": "My son Nican is why I do this. If we can teach a 10-year-old to use AI responsibly, we can teach anyone.",
    "comm.who": "Jesse Lopez", "comm.role": "Father & Founder",
    "comm.pill1": "Southern California", "comm.pill2": "Families & Kids", "comm.pill3": "Local Libraries",
    "comm.cta": "Join the Movement",

    "cta.eyebrow": "Let's get to work", "cta.title": "Ready to stop fighting your own systems?",
    "cta.body": "One workflow or an entire operation — it starts with a 30-minute conversation. No commitment. No pitch deck. Just clarity.",
    "cta.b1": "Book a Free Audit", "cta.b2": "Call 714-388-6080",
    "cta.b3": "Send a Message",
    "cta.meta": "Replies within 24 hours · Remote engagements US-wide",

    "contact.eyebrow": "Get in touch", "contact.title": "Three ways to reach Jesse.",
    "contact.email": "Email", "contact.phone": "Phone", "contact.linkedin": "LinkedIn",
    "contact.handle": "in/jesse-lopez-automation",
    "contact.foot": "Bilingual — hablo español · Remote, US-wide · Replies within 24 hours",

    "chat.title": "Chat with Jesse",
    "chat.role": "Founder · Replies in ~24 hrs",
    "chat.intro": "Tell me a little about your team and what's slowing you down — I'll get back to you personally.",
    "chat.placeholder": "Hi Jesse, I'd like to learn more about...",
    "chat.send": "Send via email", "chat.call": "Or call 714-388-6080",
    "chat.open": "Chat with Jesse", "chat.close": "Close chat",
    "foot.tag": "Your people. Better process. Best product.",
    "foot.c1": "Services", "foot.c2": "Company", "foot.c3": "Contact",
    "foot.work": "How We Work", "foot.about": "About Jesse", "foot.audit": "Book an Audit",
    "foot.email": "Email Jesse", "foot.lang": "English / Español",
    "foot.t1": "Systems Thinking", "foot.t2": "Process Optimization", "foot.t3": "Human-First Automation",
    "foot.copy": "© 2026 Jesse Lopez Consulting · All rights reserved"
  },
  es: {
    "nav.services": "Servicios", "nav.work": "Cómo Trabajo", "nav.about": "Acerca",
    "nav.proof": "Resultados", "nav.cta": "Auditoría Gratis",
    "hero.eyebrow": "Modernización de Flujos Empresariales",
    "hero.specialist": "Especialista en Ciclo de Vida de Citas — de la referencia a los ingresos",
    "hero.t1": "Arquitecto BPM.", "hero.t2": "Experto en Power Platform.",
    "hero.t3": "Especialista en IT de Salud.", "hero.t4": "Estratega de Automatización.",
    "hero.title1": "Tu equipo merece un mejor proceso", "hero.title2": "para crear el ",
    "hero.titleAccent": "mejor producto.",
    "hero.sub": "Modernizo los flujos de trabajo de equipos de salud y servicios profesionales — alineando personas, optimizando operaciones y entregando automatización que perdura.",
    "hero.cta1": "Auditoría Gratis", "hero.cta2": "Cómo Funciona",
    "hero.trust1": "15+ años en operaciones de salud", "hero.trust2": "Bilingüe EN / ES", "hero.trust3": "Remoto, todo EE.UU.",
    "calc.title": "Calcula Tu Ahorro", "calc.sub": "El costo real del trabajo manual",
    "calc.team": "Tamaño del Equipo", "calc.hours": "Hrs Manuales / Persona / Semana", "calc.rate": "Tarifa por Hora ($)",
    "calc.state": "Ineficiencia del Proceso", "calc.mild": "Leve", "calc.chaotic": "Caótico", "calc.archaic": "Arcaico",
    "calc.reclaimed": "Horas Recuperadas / Año", "calc.savings": "Ahorro Anual",
    "calc.denial": "Potencial de Recuperación de Denegaciones",
    "calc.capped": "tope",
    "calc.foot": "Estimaciones basadas en benchmarks del ciclo de ingresos de salud. Los resultados reales varían.",
    "proof.kicker": "Equipos que confían y operan con",
    "proof.eyebrow": "Prueba social", "proof.title": "Resultados que ganan el próximo proyecto.",
    "proof.q1": "Optimizó un arcaico proceso de reembolsos con automatización — reduciendo el tiempo de gestión y aprobación en un 80%. Se expandió por toda la organización.",
    "proof.r1": "VP Sr., Desempeño Interno · Sonrava Healthcare",
    "proof.q2": "Entregado antes de tiempo — considerando las necesidades del usuario Y las prioridades de la gerencia.",
    "proof.r2": "Directora de Contabilidad · Sonrava Health",
    "proof.q3": "No solo resolvió el problema — se aseguró de que nuestro equipo lo entendiera también.",
    "proof.r3": "Analista de Negocios",
    "work.eyebrow": "Cómo trabajo", "work.title": "Simplificamos el caos.",
    "work.sub": "Sistemas que funcionan sin fricción. Personas que trabajan con confianza. Un método, no un misterio.",
    "work.1t": "Primero las preguntas correctas", "work.1d": "Empezamos con tu gente, tus metas y tus problemas — nunca con la tecnología.",
    "work.2t": "Construir y documentar", "work.2d": "Cada solución se construye para durar y se documenta para que tu equipo la administre.",
    "work.3t": "Capacitar a tu equipo", "work.3d": "No desaparecemos tras la entrega. Tu gente opera con confianza sin nosotros.",
    "svc.eyebrow": "Lo que entrego", "svc.title": "Servicios para problemas operativos reales.",
    "svc.sub": "Alcance fijo. ROI claro. Construido para que tu equipo lo administre — no para depender de mí.",
    "svc.flip": "Pasa el cursor para ver",
    "svc.1n": "01 · Auditoría", "svc.1t": "Mapea Tus Cuellos de Botella", "svc.1d": "Identifica tus 3–5 cuellos de botella manuales. Precio fijo, hoja de ruta de ROI. Versión gratis de 30 min.",
    "svc.2n": "02 · Victoria Rápida", "svc.2t": "Un Flujo, de Inicio a Fin", "svc.2d": "Un flujo completo construido, automatizado y documentado — entregado en días, no meses.",
    "svc.3n": "03 · Sprint de Departamento", "svc.3t": "Transformación de 30–60 Días", "svc.3d": "Rediseño total de un departamento: flujos, apps, integraciones y capacitación incluida.",
    "svc.4n": "04 · Automatización Total", "svc.4t": "Descubrimiento → Entrega", "svc.4d": "Transformación integral en cada departamento, con soporte durante la transición.",
    "svc.5n": "05 · Plan Mensual", "svc.5t": "Optimización Continua", "svc.5d": "Un retén para revisiones, monitoreo y mejoras prioritarias a medida que creces.",
    "svc.6n": "06 · Integración de IA", "svc.6t": "IA Práctica, Sin Humo", "svc.6d": "Procesamiento de documentos, enrutamiento inteligente y reportes con IA — donde rinde.",
    "stats.eyebrow": "En números", "stats.title": "Quince años de impacto operativo medible.",
    "stats.1": "Valor operativo entregado",
    "stats.2": "Años en operaciones de salud",
    "stats.3": "Ciclo de aprobación de reembolsos más rápido",
    "stats.3sub": "Proyecto en Sonrava Healthcare",
    "founder.eyebrow": "Por qué Jesse", "founder.title": "No desaparezco tras la entrega.",
    "founder.body": "La mayoría entrega y se va. Yo me quedo hasta que tu equipo esté operando con confianza — porque un sistema que nadie puede usar no es una solución.",
    "founder.p1": "Documentamos el proceso — tu equipo lo administra.",
    "founder.p2": "Capacitamos a tu gente — no creamos dependencia.",
    "founder.p3": "Explicamos el porqué — las decisiones perduran.",
    "founder.p4": "Profunda experiencia en ciclo de ingresos de salud.",
    "founder.badgeN": "$12M+", "founder.badgeL": "Valor entregado",

    "comm.eyebrow": "Misión Comunitaria", "comm.title": "IA, Sin Misterios. Crecimiento, Multiplicado.",
    "comm.body": "La tecnología debe empoderar a las familias — no intimidarlas. Jesse Lopez Consulting está creando un programa de alfabetización en IA para niños y padres en el sur de California — empezando por las bibliotecas locales.",
    "comm.quote": "Mi hijo Nican es la razón por la que hago esto. Si podemos enseñarle a un niño de 10 años a usar IA con responsabilidad, podemos enseñarle a cualquiera.",
    "comm.who": "Jesse Lopez", "comm.role": "Padre y Fundador",
    "comm.pill1": "Sur de California", "comm.pill2": "Familias y Niños", "comm.pill3": "Bibliotecas Locales",
    "comm.cta": "Únete al Movimiento",

    "cta.eyebrow": "Manos a la obra", "cta.title": "¿Listo para dejar de pelear con tus sistemas?",
    "cta.body": "Un flujo o toda una operación — comienza con una conversación de 30 minutos. Sin compromiso. Sin presentación. Solo claridad.",
    "cta.b1": "Auditoría Gratis", "cta.b2": "Llama 714-388-6080",
    "cta.b3": "Enviar Mensaje",
    "cta.meta": "Respuesta en 24 horas · Proyectos remotos en todo EE.UU.",

    "contact.eyebrow": "Contáctame", "contact.title": "Tres formas de hablar con Jesse.",
    "contact.email": "Correo", "contact.phone": "Teléfono", "contact.linkedin": "LinkedIn",
    "contact.handle": "in/jesse-lopez-automation",
    "contact.foot": "Bilingüe — hablo español · Remoto, todo EE.UU. · Respuesta en 24 horas",

    "chat.title": "Chatea con Jesse",
    "chat.role": "Fundador · Responde en ~24 hrs",
    "chat.intro": "Cuéntame sobre tu equipo y qué los está deteniendo — te respondo personalmente.",
    "chat.placeholder": "Hola Jesse, me gustaría saber más sobre...",
    "chat.send": "Enviar por correo", "chat.call": "O llama al 714-388-6080",
    "chat.open": "Chatea con Jesse", "chat.close": "Cerrar chat",
    "foot.tag": "Tu gente. Mejor proceso. Mejor producto.",
    "foot.c1": "Servicios", "foot.c2": "Empresa", "foot.c3": "Contacto",
    "foot.work": "Cómo Trabajo", "foot.about": "Acerca de Jesse", "foot.audit": "Reservar Auditoría",
    "foot.email": "Escribir a Jesse", "foot.lang": "English / Español",
    "foot.t1": "Pensamiento de Sistemas", "foot.t2": "Optimización de Procesos", "foot.t3": "Automatización Humana",
    "foot.copy": "© 2026 Jesse Lopez Consulting · Todos los derechos reservados"
  }
};

const I18nContext = React.createContext({ lang: "en", t: (k) => k, setLang: () => {} });
function useT() { return React.useContext(I18nContext); }

/* ---------- Cross-page link helper ----------
   On index.html, hash links scroll. On audit.html/support.html, they
   navigate to index.html and then scroll. Determined by <body data-page>. */
function jlcPage() {
  return (document.body && document.body.dataset && document.body.dataset.page) || "home";
}
function hashHref(hash) {
  return jlcPage() === "home" ? hash : "index.html" + hash;
}

/* ---------- Lucide icon (React-safe injection) ---------- */
function Icon({ name, size, className }) {
  // Inline SVG for icons Lucide's CDN bundle is missing
  if (name === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size || undefined} height={size || undefined}
           fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
      </svg>
    );
  }
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    window.lucide.createIcons();
    const svg = el.querySelector('svg');
    if (svg && size) { svg.setAttribute('width', size); svg.setAttribute('height', size); }
  }, [name, size]);
  return <span ref={ref} className={className} style={{ display: 'inline-flex', lineHeight: 0 }} />;
}

/* ---------- Reveal on scroll (rAF-driven, timeline-independent) ---------- */
const REVEAL_DELAY = { d1: 90, d2: 180, d3: 270, d4: 360, d5: 450 };
function Reveal({ children, className = "", delay = "", as = "div", style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0, io = null, started = false;
    const line = el.querySelector(".draw-line");
    const begin = () => {
      if (started) return;
      started = true;
      el.classList.add("in");
      const dur = 760, wait = REVEAL_DELAY[delay] || 0;
      let t0 = null;
      const tick = (now) => {
        if (t0 === null) t0 = now + wait;
        const p = Math.max(0, Math.min(1, (now - t0) / dur));
        const e = 1 - Math.pow(1 - p, 3);
        el.style.opacity = e.toFixed(3);
        el.style.transform = p < 1 ? `translateY(${((1 - e) * 34).toFixed(2)}px)` : "none";
        if (line) line.style.width = (e * 64).toFixed(1) + "px";
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.94 && r.bottom > 0) {
      begin();
    } else {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { begin(); io.unobserve(en.target); } });
      }, { threshold: 0.16, rootMargin: "0px 0px -6% 0px" });
      io.observe(el);
    }
    return () => { if (raf) cancelAnimationFrame(raf); if (io) io.disconnect(); };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${delay} ${className}`}
         style={{ opacity: 0, transform: "translateY(34px)", ...style }}>
      {children}
    </Tag>
  );
}

/* ---------- Count-up number ---------- */
function Counter({ value, prefix = "", suffix = "", decimals = 0, duration = 1600 }) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  const done = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const display = n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* ---------- Typewriter ---------- */
function Typewriter({ words, className }) {
  const [txt, setTxt] = React.useState("");
  const [wi, setWi] = React.useState(0);
  const [del, setDel] = React.useState(false);
  React.useEffect(() => {
    const word = words[wi % words.length];
    let to;
    if (!del && txt === word) {
      to = setTimeout(() => setDel(true), 1500);
    } else if (del && txt === "") {
      setDel(false); setWi((i) => i + 1);
    } else {
      to = setTimeout(() => {
        setTxt(del ? word.slice(0, txt.length - 1) : word.slice(0, txt.length + 1));
      }, del ? 38 : 70);
    }
    return () => clearTimeout(to);
  }, [txt, del, wi, words]);
  return <div className={className}>{txt}<span className="type-cursor" /></div>;
}

/* ---------- Particle field — drifts away from cursor ---------- */
function Particles() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf, w, h, pts = [];
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999, on: false };
    const REPEL = 130, LINK = 132;

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * DPR; canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.min(72, Math.floor(w / 20));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.26, vy: (Math.random() - 0.5) * 0.26,
        r: Math.random() * 1.7 + 0.7
      }));
    }
    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.on = true;
    }
    function onLeave() { mouse.on = false; mouse.x = mouse.y = -9999; }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (mouse.on) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < REPEL && d > 0.01) {
            const f = (1 - d / REPEL) * 0.85;
            p.vx += (dx / d) * f; p.vy += (dy / d) * f;
          }
        }
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.95; p.vy *= 0.95;
        if (Math.hypot(p.vx, p.vy) < 0.15) { p.vx += (Math.random() - 0.5) * 0.06; p.vy += (Math.random() - 0.5) * 0.06; }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x)); p.y = Math.max(0, Math.min(h, p.y));
        const near = mouse.on && Math.hypot(p.x - mouse.x, p.y - mouse.y) < REPEL;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = near ? "rgba(45,212,191,0.95)" : "rgba(45,212,191,0.5)"; ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(20,184,166,${0.18 * (1 - d / LINK)})`;
            ctx.lineWidth = 1; ctx.stroke();
          }
        }
        if (near) {
          const d2 = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(45,212,191,${0.22 * (1 - d2 / REPEL)})`;
          ctx.lineWidth = 1; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(frame);
    }
    resize(); frame();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);
  return <canvas ref={ref} className="hero-canvas" />;
}

/* ---------- Custom cursor: teal dot + lagging ring ---------- */
function CustomCursor() {
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot"; ring.className = "cursor-ring";
    document.body.appendChild(dot); document.body.appendChild(ring);
    document.body.classList.add("has-cursor");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, raf;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };
    const hot = (t) => t.closest && t.closest('a, button, .flip, .preset, input, .lang, [data-tilt]');
    const onOver = (e) => { if (hot(e.target)) ring.classList.add("hot"); };
    const onOut  = (e) => { if (hot(e.target)) ring.classList.remove("hot"); };
    const onDown = () => ring.classList.add("press");
    const onUp   = () => ring.classList.remove("press");
    const loop = () => {
      rx += (mx - rx) * 0.22; ry += (my - ry) * 0.22;
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      dot.remove(); ring.remove();
      document.body.classList.remove("has-cursor");
    };
  }, []);
  return null;
}

/* ---------- Magnetic: gentle pull toward cursor ---------- */
function Magnetic({ children, strength = 14, className = "", style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)) return;
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;
    const apply = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      el.style.transform = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`;
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) raf = requestAnimationFrame(apply);
      else raf = 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(apply); };
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cxp = r.left + r.width / 2, cyp = r.top + r.height / 2;
      const dx = e.clientX - cxp, dy = e.clientY - cyp;
      const dist = Math.hypot(dx, dy);
      const R = Math.max(r.width, r.height) * 1.2;
      if (dist > R) { tx = 0; ty = 0; }
      else {
        const fall = 1 - dist / R;
        tx = (dx / R) * strength * fall * 2;
        ty = (dy / R) * strength * fall * 2;
      }
      kick();
    };
    window.addEventListener("mousemove", onMove);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); el.style.transform = ""; };
  }, [strength]);
  return <div ref={ref} className={className} style={{ willChange: "transform", display: "inline-block", ...style }}>{children}</div>;
}

/* ---------- TypeReveal: section heading types itself in view ---------- */
function TypeReveal({ text, as = "h2", className = "", speed = 22 }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState("");
  const done = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reset for re-runs (e.g. language switch)
    done.current = false;
    setShown("");
    const start = () => {
      if (done.current) return; done.current = true;
      let i = 0;
      const step = () => {
        i++; setShown(text.slice(0, i));
        if (i < text.length) setTimeout(step, speed);
      };
      step();
    };
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 1.2 && r.bottom > -200) { start(); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { start(); io.unobserve(e.target); } });
    }, { threshold: 0.3 });
    io.observe(el);
    const fallback = setTimeout(start, 2200);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, [text, speed]);
  const Tag = as;
  const inProgress = shown.length < text.length;
  return (
    <Tag ref={ref} className={className} style={{ minHeight: "1.14em" }}>
      {shown}
      {inProgress && <span className="head-caret" />}
    </Tag>
  );
}

/* ---------- useTilt: 3D tilt toward the cursor ---------- */
function useTilt(max = 9) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)) return;
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0, lift = 0, lt = 0;
    const apply = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18; lt += (lift - lt) * 0.18;
      el.style.transform = `perspective(900px) rotateX(${cy.toFixed(2)}deg) rotateY(${cx.toFixed(2)}deg) translateY(${lt.toFixed(2)}px)`;
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05 || Math.abs(lift - lt) > 0.05) raf = requestAnimationFrame(apply);
      else raf = 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(apply); };
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      tx = px * max * 2; ty = -py * max * 2; lift = -6; kick();
    };
    const onLeave = () => { tx = 0; ty = 0; lift = 0; kick(); };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); el.style.transform = ""; };
  }, [max]);
  return ref;
}

/* ---------- Stars row ---------- */
function Stars() {
  return (
    <div className="stars">
      {[0,1,2,3,4].map(i => <Icon key={i} name="star" />)}
    </div>
  );
}

Object.assign(window, { DICT, I18nContext, useT, Icon, Reveal, Counter, Typewriter, Particles, CustomCursor, Magnetic, TypeReveal, useTilt, Stars });
