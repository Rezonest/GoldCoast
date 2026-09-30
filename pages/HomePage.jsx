import SectionCTA from "../components/SectionCTA";
import { CAPS, INDUSTRIES, STEPS } from "../data/siteData";
import { CAPABILITY_IMAGES, HERO_IMAGE, HOME_APPROACH_IMAGE } from "../data/siteImages";

export default function HomePage({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src={HERO_IMAGE} alt="Industrial plant and engineering infrastructure" />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <div className="eyebrow">Gold Coast Engineering &amp; Projects Ltd. · Ghana</div>
          <h1>Engineering for the work that keeps industry moving.</h1>
          <p className="lead">
            Equipment, fabrication and project support for power, process and industrial operations across Ghana and West Africa.
          </p>
          <div className="hero-actions">
            <button className="btn" onClick={() => onNavigate("Capabilities")}>
              Explore Capabilities <span aria-hidden="true">↗</span>
            </button>
            <button className="btn ghost" onClick={() => onNavigate("Contact")}>
              Contact Our Team
            </button>
          </div>
          <div className="hero-location">Local engagement <span /> Specialist engineering network</div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">What we do</div>
              <h2>Built around your operation.</h2>
            </div>
          </div>
          <div className="capability-grid">
            {CAPS.slice(0, 4).map(([title, description], index) => (
              <article className="capability-card" key={title}>
                <div className="capability-image-wrap">
                  <img src={CAPABILITY_IMAGES[index]} alt="" loading="lazy" />
                  <span className="capability-number">0{index + 1}</span>
                </div>
                <div className="capability-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button className="text-link" onClick={() => onNavigate("Capabilities")}>
                    View capability <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="wrap approach-layout">
          <div className="approach-image">
            <img src={HOME_APPROACH_IMAGE} alt="Engineers reviewing industrial equipment on site" loading="lazy" />
            <div className="image-caption">A local point of contact. A wider engineering network.</div>
          </div>
          <div className="approach-copy">
            <div className="eyebrow">From enquiry to execution</div>
            <h2>Clear coordination. Practical engineering.</h2>
            <p className="note">
              Industrial work depends on getting the details right: operating conditions, specification, schedule and site requirements. We help shape the scope and coordinate the resources needed to deliver it.
            </p>
            <div className="approach-steps">
              {STEPS.map(([title], index) => (
                <div className="approach-step" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                </div>
              ))}
            </div>
            <button className="btn" onClick={() => onNavigate("Network")}>
              Meet Our Network <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="wrap industries-layout">
          <div>
            <div className="eyebrow">Sectors we support</div>
            <h2>Experience across demanding industries.</h2>
          </div>
          <div className="tags">
            {INDUSTRIES.map((industry) => <span key={industry}>{industry}</span>)}
          </div>
        </div>
      </section>

      <section className="soft process-section">
        <div className="wrap">
          <div className="eyebrow">A considered approach</div>
          <h2>From the first conversation to the site.</h2>
          <div className="grid process-grid">
            {STEPS.map(([title, description], index) => (
              <div className="card" key={title}>
                <div className="num">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Have a drawing, specification or bill of quantities?"
        text="Send it to our team and we will review the scope."
        btn="Send Your Technical Enquiry"
        onAction={() => onNavigate("Contact")}
      />
    </>
  );
}