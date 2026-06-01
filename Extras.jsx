/* ============================================================
   Extras.jsx — Community Mission · Contact · Chat Widget
   ============================================================ */

const CAL_URL  = "/audit.html";
const MAIL_TO  = "mailto:info@jesselopezconsulting.com";
const MAIL_JESSE = "mailto:jesse@jesselopezconsulting.com";
const PHONE_TO = "tel:+17143886080";
const LINKEDIN = "https://linkedin.com/in/jesse-lopez-automation";

/* ---------------- COMMUNITY MISSION ---------------- */
function Community() {
  const { t } = useT();
  return (
    <section className="comm s-pad" id="community">
      <div className="comm-img" />
      <div className="comm-overlay" />
      <div className="container comm-inner">
        <div className="comm-left">
          <Reveal>
            <span className="eyebrow on-dark">{t("comm.eyebrow")}</span>
            <div className="draw-line" style={{ marginTop: 14 }} />
            <TypeReveal as="h2" text={t("comm.title")} className="comm-h" speed={26} />
            <p className="comm-body">{t("comm.body")}</p>
            <a href={MAIL_TO + "?subject=Join%20the%20AI%20Literacy%20movement"} className="btn btn-primary">
              {t("comm.cta")}<Icon name="arrow-right" />
            </a>
            <div className="comm-pills">
              <span className="pill"><Icon name="map-pin" />{t("comm.pill1")}</span>
              <span className="pill"><Icon name="users" />{t("comm.pill2")}</span>
              <span className="pill"><Icon name="library" />{t("comm.pill3")}</span>
            </div>
          </Reveal>
        </div>
        <Reveal delay="d2" className="comm-right">
          <div className="comm-quote">
            <div className="cq-mark"><Icon name="quote" /></div>
            <blockquote>{t("comm.quote")}</blockquote>
            <div className="cq-by">
              <img src="../../assets/jesse-son.png" alt="Jesse and his son Nican" />
              <div>
                <div className="cq-name">— {t("comm.who")}</div>
                <div className="cq-role">{t("comm.role")}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
window.Community = Community;

/* ---------------- CONTACT ---------------- */
function Contact() {
  const { t } = useT();
  const cards = [
    { ico: "mail",     lbl: "contact.email",    val: "jesse@jesselopezconsulting.com",  href: MAIL_TO,  cta: "Open mail" },
    { ico: "phone",    lbl: "contact.phone",    val: "714-388-6080",                     href: PHONE_TO, cta: "Call now" },
    { ico: "linkedin", lbl: "contact.linkedin", val: t("contact.handle"),                href: LINKEDIN, cta: "Open profile" },
  ];
  return (
    <section className="s-light s-pad" id="contact-info">
      <div className="container">
        <Head eyebrow={t("contact.eyebrow")} title={t("contact.title")} center />
        <div className="contact-grid">
          {cards.map((c, i) => (
            <Reveal key={c.lbl} delay={`d${i + 1}`}>
              <a className="contact-card" href={c.href} target={c.ico === "linkedin" ? "_blank" : undefined} rel="noopener">
                <div className="cc-ico"><Icon name={c.ico} /></div>
                <div className="cc-lbl">{t(c.lbl)}</div>
                <div className="cc-val">{c.val}</div>
                <span className="cc-cta">{c.cta}<Icon name="arrow-up-right" /></span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="contact-foot">{t("contact.foot")}</Reveal>
      </div>
    </section>
  );
}
window.Contact = Contact;

/* ---------------- LIVE CHAT WIDGET ---------------- */
function ChatWidget() {
  const { t } = useT();
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const taRef = React.useRef(null);
  React.useEffect(() => { if (open && taRef.current) taRef.current.focus(); }, [open]);

  // Listen for external "open chat" triggers (CTA button)
  React.useEffect(() => {
    const open = () => setOpen(true);
    window.addEventListener("jlc:openChat", open);
    return () => window.removeEventListener("jlc:openChat", open);
  }, []);

  const send = (e) => {
    e && e.preventDefault();
    const subject = "Question from jesselopezconsulting.com";
    const body = encodeURIComponent(msg || t("chat.placeholder"));
    window.location.href = `${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <>
      <button
        className={`chat-fab ${open ? "open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t("chat.close") : t("chat.open")}
      >
        <span className="fab-ring" />
        <Icon name={open ? "x" : "message-circle"} />
        {!open && <span className="fab-label">{t("chat.open")}</span>}
      </button>

      <div className={`chat-panel ${open ? "open" : ""}`} role="dialog" aria-label={t("chat.title")}>
        <div className="cp-head">
          <div className="cp-av">
            <img src="../../assets/portrait-circle.png" alt="Jesse" />
            <span className="cp-on" />
          </div>
          <div className="cp-meta">
            <div className="cp-name">{t("chat.title")}</div>
            <div className="cp-role">{t("chat.role")}</div>
          </div>
          <button className="cp-x" onClick={() => setOpen(false)} aria-label={t("chat.close")}>
            <Icon name="x" />
          </button>
        </div>
        <div className="cp-body">
          <div className="cp-bubble">{t("chat.intro")}</div>
          <form className="cp-form" onSubmit={send}>
            <textarea
              ref={taRef}
              rows={3}
              placeholder={t("chat.placeholder")}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <div className="cp-actions">
              <button type="submit" className="btn btn-primary cp-send">
                <Icon name="send" />{t("chat.send")}
              </button>
              <a href={PHONE_TO} className="cp-call"><Icon name="phone" />{t("chat.call")}</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
window.ChatWidget = ChatWidget;

window.JLC_LINKS = { CAL_URL, MAIL_TO, PHONE_TO, LINKEDIN };
