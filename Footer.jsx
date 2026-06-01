/* ============================================================
   Footer.jsx — final CTA + site footer
   ============================================================ */
function CTA() {
  const { t } = useT();
  const openChat = () => window.dispatchEvent(new CustomEvent("jlc:openChat"));
  return (
    <section className="s-darker s-pad cta" id="contact">
      <div className="cta-glow" />
      <div className="container">
        <Reveal className="cta-inner">
          <span className="eyebrow on-dark">{t("cta.eyebrow")}</span>
          <div className="draw-line center" style={{ marginTop: 14 }} />
          <h2>{t("cta.title")}</h2>
          <p>{t("cta.body")}</p>
          <div className="cta-actions">
            <a href={window.JLC_LINKS.CAL_URL} target="_blank" rel="noopener" className="btn btn-primary btn-pulse">
              {t("cta.b1")}<Icon name="arrow-right" />
            </a>
            <a href={window.JLC_LINKS.PHONE_TO} className="btn btn-ghost"><Icon name="phone" />{t("cta.b2")}</a>
            <button type="button" onClick={openChat} className="btn btn-soft">
              <Icon name="message-circle" />{t("cta.b3")}
            </button>
          </div>
          <div className="cta-meta">{t("cta.meta")}</div>
        </Reveal>
      </div>
    </section>
  );
}
window.CTA = CTA;

function Footer() {
  const { t } = useT();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#top" className="brand-lockup sm" style={{ marginBottom: 18 }}>
              <img className="bmark" src="../../assets/mark-light.png" alt="" />
              <span className="bword"><b>Jesse Lopez</b><i>Consulting</i></span>
            </a>
            <p className="footer-tag">{t("foot.tag")}</p>
            <p style={{ color: "var(--fg-3)", fontSize: 12, marginTop: 14 }}>714-388-6080 · jesselopezconsulting.com</p>
          </div>
          <div className="footer-col">
            <h4>{t("foot.c1")}</h4>
            <a href="#services">{t("svc.1n").split("· ")[1]}</a>
            <a href="#services">{t("svc.3n").split("· ")[1]}</a>
            <a href="#services">{t("svc.4n").split("· ")[1]}</a>
            <a href="#services">{t("svc.6n").split("· ")[1]}</a>
          </div>
          <div className="footer-col">
            <h4>{t("foot.c2")}</h4>
            <a href="#work">{t("foot.work")}</a>
            <a href="#about">{t("foot.about")}</a>
            <a href="#proof">{t("nav.proof")}</a>
            <a href="https://linkedin.com/in/jesse-lopez-automation">LinkedIn</a>
          </div>
          <div className="footer-col">
            <h4>{t("foot.c3")}</h4>
            <a href="#contact">{t("foot.audit")}</a>
            <a href="mailto:jesse@jesselopezconsulting.com">{t("foot.email")}</a>
            <a href="#top">{t("foot.lang")}</a>
          </div>
        </div>
        <div className="footer-bot">
          <span>{t("foot.copy")}</span>
          <div className="tags">
            <span>{t("foot.t1")}</span><span className="s" />
            <span>{t("foot.t2")}</span><span className="s" />
            <span>{t("foot.t3")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
