import ContactForm from "../components/ContactForm";
import { CONTACT } from "../data/siteData";
import { CONTACT_IMAGE } from "../data/siteImages";

export default function ContactPage() {
  return (
    <>
      <div className="wrap page-head contact-page-head">
        <div className="eyebrow">Contact</div>
        <h1>Let us discuss your requirement</h1>
        <p className="lead" style={{ marginBottom: 0 }}>
          Whether you need a specific spare, an engineered equipment package or support for a larger project, send us the details.
        </p>
      </div>
      <section className="contact-section">
        <div className="wrap contact-layout">
          <div className="contact-form-panel">
            <div className="contact-panel-heading">
              <div className="eyebrow">Project enquiry</div>
              <h2>Tell us about the work.</h2>
              <p>Share the key requirements and we will review the scope.</p>
            </div>
            <ContactForm />
          </div>
          <aside className="contact-aside">
            <img src={CONTACT_IMAGE} alt="Engineer reviewing technical plans" />
            <div className="contact-aside-copy">
              <div className="eyebrow">Help us get started</div>
              <h2>Useful information to include</h2>
              <ul>
                <li>Equipment type and operating conditions</li>
                <li>Technical specification or applicable code</li>
                <li>Required quantity and project schedule</li>
                <li>Site location and delivery requirements</li>
              </ul>
              <p>Drawings, data sheets and bills of quantities can be added to the email draft after it opens.</p>
              <div className="contact-details">
                <span>Ghana · West Africa</span>
                {CONTACT.email.includes("@") && !CONTACT.email.startsWith("[") && <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>}
                {CONTACT.phone && !CONTACT.phone.startsWith("[") && <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}>{CONTACT.phone}</a>}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}