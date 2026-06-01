/* ============================================================
   Body.jsx — Proof, Services, Stats, Founder
   ============================================================ */

function Head({ eyebrow, title, sub, center, dark }) {
  return (
    <Reveal className={`s-head ${center ? "center" : ""}`}>
      <span className={`eyebrow ${dark ? "on-dark" : ""}`}>{eyebrow}</span>
      <div className={`draw-line ${center ? "center" : ""}`} style={{ marginTop: 14 }} />
      <TypeReveal as="h2" text={title} />
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}
window.Head = Head;

function TiltFlip({ children }) {
  const ref = useTilt(8);
  return <div ref={ref} className="flip" data-tilt>{children}</div>;
}
window.TiltFlip = TiltFlip;

/* ---------------- PROOF ---------------- */
function Proof() {
  const { t } = useT();
  const tools = ["Power Platform", "Bizagi", "SQL Server", "Power Automate", "SharePoint", "Zapier"];
  const quotes = [
    ["proof.q1", "Amy Milunas", "proof.r1"],
    ["proof.q2", "Joan Toves", "proof.r2"],
    ["proof.q3", "Eva Medina", "proof.r3"],
  ];
  return (
    <section className="s-light s-pad" id="proof">
      <div className="container">
        <Reveal className="proof-rail">
          <span className="t">{t("proof.kicker")}</span>
          {tools.map(x => <span key={x} className="tool">{x}</span>)}
        </Reveal>
        <Head eyebrow={t("proof.eyebrow")} title={t("proof.title")} center />
        <div className="quotes">
          {quotes.map(([q, who, r], i) => (
            <Reveal key={who} as="div" delay={`d${i + 1}`} className="quote">
              <Stars />
              <p>{t(q)}</p>
              <div className="who">{who}</div>
              <div className="role">{t(r)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Proof = Proof;

/* ---------------- HOW WE WORK ---------------- */
function Work() {
  const { t } = useT();
  const steps = [
    ["01", "work.1t", "work.1d"],
    ["02", "work.2t", "work.2d"],
    ["03", "work.3t", "work.3d"],
  ];
  return (
    <section className="s-dark s-pad" id="work">
      <div className="container">
        <Head eyebrow={t("work.eyebrow")} title={t("work.title")} sub={t("work.sub")} center dark />
        <div className="work-steps">
          {steps.map(([n, ti, d], i) => (
            <Reveal key={n} delay={`d${i + 1}`} className="work-step">
              <div className="work-num">{n}</div>
              <h3>{t(ti)}</h3>
              <p>{t(d)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Work = Work;

/* ---------------- SERVICES (flip) ---------------- */
function Services() {
  const { t } = useT();
  const cards = [
    ["gauge", "svc.1n", "svc.1t", "svc.1d"],
    ["zap", "svc.2n", "svc.2t", "svc.2d"],
    ["calendar-check", "svc.3n", "svc.3t", "svc.3d"],
    ["building-2", "svc.4n", "svc.4t", "svc.4d"],
    ["refresh-cw", "svc.5n", "svc.5t", "svc.5d"],
    ["bot", "svc.6n", "svc.6t", "svc.6d"],
  ];
  return (
    <section className="s-darker s-pad" id="services">
      <div className="container">
        <Head eyebrow={t("svc.eyebrow")} title={t("svc.title")} sub={t("svc.sub")} center dark />
        <div className="svc-grid">
          {cards.map(([ico, n, ti, d], i) => (
            <Reveal key={n} delay={`d${(i % 3) + 1}`}>
              <TiltFlip>
                <div className="flip-in" onMouseMove={(e)=>{const t=e.currentTarget.querySelector('.face-front');if(!t)return;const r=t.getBoundingClientRect();t.style.setProperty('--gx',((e.clientX-r.left)/r.width*100)+'%');t.style.setProperty('--gy',((e.clientY-r.top)/r.height*100)+'%');}}>
                  <div className="face face-front">
                    <div className="ico"><Icon name={ico} /></div>
                    <div className="svc-num">{t(n)}</div>
                    <h3>{t(ti)}</h3>
                    <div className="hint"><Icon name="repeat" />{t("svc.flip")}</div>
                  </div>
                  <div className="face face-back">
                    <h3>{t(ti)}</h3>
                    <p>{t(d)}</p>
                    <a href="#contact" className="go">{t("nav.cta")}<Icon name="arrow-right" /></a>
                  </div>
                </div>
              </TiltFlip>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Services = Services;

/* ---------------- STATS (counters) ---------------- */
function Stats() {
  const { t } = useT();
  const items = [
    ["trending-up", <Counter prefix="$" value={12} suffix="M+" />, "stats.1", null],
    ["briefcase", <Counter value={15} suffix="+" />, "stats.2", null],
    ["timer", <Counter value={80} suffix="%" />, "stats.3", "stats.3sub"],
  ];
  return (
    <section className="s-dark s-pad" id="results">
      <div className="container">
        <Head eyebrow={t("stats.eyebrow")} title={t("stats.title")} center dark />
        <div className="stats-grid">
          {items.map(([ico, node, lbl, sub], i) => (
            <Reveal key={lbl} delay={`d${i + 1}`} className="stat-card">
              <span className="ico"><Icon name={ico} /></span>
              <div className="num">{node}</div>
              <div className="lbl">{t(lbl)}</div>
              {sub && <div className="lbl sub">{t(sub)}</div>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stats = Stats;

/* ---------------- FOUNDER (parallax photo) ---------------- */
function Founder() {
  const { t } = useT();
  const frameRef = React.useRef(null);
  React.useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const prog = (window.innerHeight - r.top) / (window.innerHeight + r.height);
        const y = Math.max(-26, Math.min(26, (prog - 0.5) * -52));
        el.style.transform = `translateY(${y}px)`;
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const points = ["founder.p1", "founder.p2", "founder.p3", "founder.p4"];
  return (
    <section className="s-light s-pad" id="about">
      <div className="container founder-inner">
        <Reveal className="founder-photo">
          <div className="frame" ref={frameRef} style={{ height: 460 }}>
            <img src="../../assets/portrait.jpg" alt="Jesse Lopez" />
          </div>
          <div className="founder-badge">
            <div className="n">{t("founder.badgeN")}</div>
            <div className="l">{t("founder.badgeL")}</div>
          </div>
        </Reveal>
        <Reveal delay="d1">
          <span className="eyebrow">{t("founder.eyebrow")}</span>
          <div className="draw-line" style={{ marginTop: 14 }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.9rem,3.2vw,2.7rem)", color: "var(--navy)", letterSpacing: "-.02em", margin: "14px 0 16px", lineHeight: 1.14 }}>
            {t("founder.title")}
          </h2>
          <p style={{ color: "var(--ink-600)", fontSize: "1.06rem" }}>{t("founder.body")}</p>
          <ul className="founder-list">
            {points.map(p => (
              <li key={p}><Icon name="check-circle-2" />{t(p)}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
window.Founder = Founder;
