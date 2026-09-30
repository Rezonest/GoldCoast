import { PAGES } from "../data/siteData";

export default function SiteFooter({ onNavigate }) {
  return (
    <footer>
      <div className="wrap footer-main">
        <div className="footer-brand">
          <strong>GOLD COAST</strong>
          <span>ENGINEERING &amp; PROJECTS LTD.</span>
          <p>Industrial engineering and project support for Ghana and West Africa.</p>
        </div>
        <div className="footer-navigation">
          <nav>
            {PAGES.map((item) => (
              <button key={item} onClick={() => onNavigate(item)}>{item}</button>
            ))}
          </nav>
        </div>
        <div className="footer-map">
          <h2>Ghana · West Africa</h2>
          <iframe
            title="Map showing Ghana in West Africa"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-3.3%2C4.5%2C1.3%2C11.2&layer=mapnik"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href="https://www.openstreetmap.org/#map=6/7.95/-0.99" target="_blank" rel="noreferrer">
            View Ghana map
          </a>
        </div>
        <div className="footer-contact">
          <h2>Start a conversation</h2>
          <p>Have a drawing, specification or equipment requirement? Our team can help review the scope.</p>
          <button onClick={() => onNavigate("Contact")}>Contact our team <span aria-hidden="true">↗</span></button>
        </div>
      </div>
      <div className="footer-base">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Gold Coast Engineering &amp; Projects Ltd.</span>
          <span>Ghana · West Africa</span>
        </div>
      </div>
    </footer>
  );
}