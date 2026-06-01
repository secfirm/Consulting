/* ============================================================
   Hero.jsx — animated hero + live ROI calculator
   ============================================================ */
function RoiCalc() {
  const { t } = useT();
  const [team, setTeam] = React.useState(15);
  const [hours, setHours] = React.useState(10);
  const [rate, setRate] = React.useState(45);
  const [state, setState] = React.useState("chaotic");

  const CAP = 15_000_000;
  // Process state → (automation rate, rework factor)
  const tuning = {
    mild:    { auto: 0.25, rework: 1.15 },
    chaotic: { auto: 0.45, rework: 1.35 },
    archaic: { auto: 0.65, rework: 1.55 },
  };
  const { auto, rework } = tuning[state];

  // HOURS RECLAIMED = Team × Hours/Wk × Automation Rate × 52
  const reclaimed = Math.round(team * hours * auto * 52);
  // ANNUAL SAVINGS = Hours × Rate × Rework Factor, capped
  const rawSavings = Math.round(reclaimed * rate * rework);
  const savings = Math.min(rawSavings, CAP);
  const cappedFlag = rawSavings > CAP;

  // Denial recovery (Chaotic / Archaic only):
  // (Annual Claims × 10% × 65% recovery × $350); default claims = Team × 40
  const showDenial = state !== "mild";
  const annualClaims = team * 40;
  const denial = Math.round(annualClaims * 0.10 * 0.65 * 350);

  const fmtMoney = (v) => {
    if (v >= 1_000_000) return "$" + (v / 1_000_000).toFixed(v >= 10_000_000 ? 0 : 1) + "M";
    if (v >= 1_000)     return "$" + Math.round(v / 1_000) + "K";
    return "$" + v.toLocaleString("en-US");
  };

  const presets = [["calc.mild", "mild"], ["calc.chaotic", "chaotic"], ["calc.archaic", "archaic"]];

  return (
    <div className="calc">
      <div className="calc-head">
        <div className="ico"><Icon name="calculator" /></div>
        <div>
          <h3>{t("calc.title")}</h3>
          <p>{t("calc.sub")}</p>
        </div>
      </div>

      <div className="calc-g">
        <div className="calc-lr"><label>{t("calc.team")}</label><span className="calc-val">{team}</span></div>
        <input className="slider" type="range" min="1" max="100" value={team} onChange={e => setTeam(+e.target.value)} />
      </div>
      <div className="calc-g">
        <div className="calc-lr"><label>{t("calc.hours")}</label><span className="calc-val">{hours}h</span></div>
        <input className="slider" type="range" min="1" max="40" value={hours} onChange={e => setHours(+e.target.value)} />
      </div>
      <div className="calc-g">
        <div className="calc-lr"><label>{t("calc.rate")}</label><span className="calc-val">${rate}</span></div>
        <input className="slider" type="range" min="25" max="150" value={rate} onChange={e => setRate(+e.target.value)} />
      </div>

      <div className="calc-g">
        <div className="calc-lr"><label>{t("calc.state")}</label></div>
        <div className="presets">
          {presets.map(([k, v]) => (
            <button key={v} className={`preset ${state === v ? "on" : ""}`} onClick={() => setState(v)}>{t(k)}</button>
          ))}
        </div>
      </div>

      <div className="calc-out">
        <div>
          <div className="v">{reclaimed.toLocaleString("en-US")}</div>
          <div className="l">{t("calc.reclaimed")}</div>
        </div>
        <div>
          <div className="v save">
            {fmtMoney(savings)}
            {cappedFlag && <span className="cap-tag">{t("calc.capped")}</span>}
          </div>
          <div className="l">{t("calc.savings")}</div>
        </div>
      </div>

      {showDenial && (
        <div className="calc-bonus">
          <div className="cb-icon"><Icon name="shield-check" /></div>
          <div className="cb-meta">
            <div className="cb-l">{t("calc.denial")}</div>
            <div className="cb-v">{fmtMoney(denial)}</div>
          </div>
        </div>
      )}

      <div className="calc-foot">{t("calc.foot")}</div>
    </div>
  );
}

function Hero() {
  const { t, lang } = useT();
  const words = [t("hero.t1"), t("hero.t2"), t("hero.t3"), t("hero.t4")];
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-breathe" />
        <div className="hero-glow" />
        <div className="hero-grid" />
        <Particles />
      </div>
      <div className="container hero-inner">
        <div className="hero-content">
          <Reveal className="" delay="">
            <span className="eyebrow on-dark">{t("hero.eyebrow")}</span>
          </Reveal>
          <Reveal as="h1" delay="d1">
            <Magnetic strength={10}>{t("hero.title1")}</Magnetic><br />
            <Magnetic strength={10}>{t("hero.title2")}<span className="grad">{t("hero.titleAccent")}</span></Magnetic>
          </Reveal>
          <Reveal delay="d2">
            {/* key forces typewriter reset on language change */}
            <Typewriter key={lang} words={words} className="type-line" />
          </Reveal>
          <Reveal delay="d2">
            <p className="hero-sub">{t("hero.sub")}</p>
          </Reveal>
          <Reveal delay="d3">
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-pulse">{t("hero.cta1")}<Icon name="arrow-right" /></a>
              <a href="#work" className="btn btn-ghost">{t("hero.cta2")}</a>
            </div>
          </Reveal>
          <Reveal delay="d4">
            <div className="hero-trust">
              <span>{t("hero.trust1")}</span>
              <span className="dot" />
              <span>{t("hero.trust2")}</span>
              <span className="dot" />
              <span>{t("hero.trust3")}</span>
            </div>
          </Reveal>
        </div>
        <Reveal delay="d2"><RoiCalc /></Reveal>
      </div>
    </section>
  );
}
window.Hero = Hero;
