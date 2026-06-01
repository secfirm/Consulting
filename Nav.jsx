/* ============================================================
   Nav.jsx — sticky nav · bilingual toggle · animated links · mobile menu
   ============================================================ */
function Nav() {
  const { t, lang, setLang } = useT();
  const [mobile, setMobile] = React.useState(false);
  const links = [
    ["#services", t("nav.services")],
    ["#work", t("nav.work")],
    ["#proof", t("nav.proof")],
    ["#about", t("nav.about")],
    ["#community", t("comm.eyebrow")],
  ];
  const close = () => setMobile(false);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand-lockup" onClick={close}>
          <img className="bmark" src="../../assets/mark-light.png" alt="" />
          <span className="bword"><b>Jesse Lopez</b><i>Consulting</i></span>
        </a>
        <div className="nav-right">
          <div className={`lang ${lang}`}>
            <span className="lang-slider" />
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "es" ? "on" : ""} onClick={() => setLang("es")}>ES</button>
          </div>
          <div className="nav-links">
            {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <a className="nav-linkedin" href={window.JLC_LINKS.LINKEDIN} target="_blank" rel="noopener" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href={window.JLC_LINKS.CAL_URL} target="_blank" rel="noopener" className="btn btn-primary nav-cta">
            <span className="nav-cta-text">{t("nav.cta")}</span>
            <Icon name="calendar-check" />
          </a>
          <button className="nav-burger" onClick={() => setMobile((m) => !m)} aria-label="Menu">
            <Icon name={mobile ? "x" : "menu"} />
          </button>
        </div>
      </div>
      <div className={`nav-mobile ${mobile ? "open" : ""}`}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={close}>{label}</a>
        ))}
        <a href={window.JLC_LINKS.LINKEDIN} target="_blank" rel="noopener" onClick={close}>LinkedIn</a>
      </div>
    </nav>
  );
}
window.Nav = Nav;
