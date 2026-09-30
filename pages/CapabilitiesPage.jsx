import { CAPS, INDUSTRIES } from "../data/siteData";
import { CAPABILITY_IMAGES } from "../data/siteImages";

export default function CapabilitiesPage() {
  return (
    <>
      <div className="wrap page-head">
        <div className="eyebrow">Capabilities</div>
        <h1>Equipment, fabrication and site support</h1>
      </div>
      <section className="capability-catalog-section">
        <div className="wrap">
          <div className="capability-catalog-intro">
            <div className="eyebrow">What we deliver</div>
            <h2>Specialist scope. Coordinated delivery.</h2>
            <p className="note">Each requirement is assessed against its technical specification, operating environment and site needs.</p>
          </div>
          <div className="capability-catalog">
            {CAPS.map(([title, description], index) => (
              <article className="capability-detail with-image" key={title}>
                <img src={CAPABILITY_IMAGES[index]} alt="" loading="lazy" />
                <div>
                  <span className="capability-detail-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="industries-directory">
        <div className="wrap industries-directory-layout">
          <div>
            <div className="eyebrow">Industries</div>
            <h2>Knowledge for demanding environments.</h2>
            <p>We assess each enquiry on its own technical requirements and the conditions of the operation.</p>
          </div>
          <div className="industry-list">
            {INDUSTRIES.map((industry, index) => (
              <div key={industry}><span>{String(index + 1).padStart(2, "0")}</span>{industry}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}