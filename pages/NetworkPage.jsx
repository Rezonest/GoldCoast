import { NETWORK_IMAGE } from "../data/siteImages";

export default function NetworkPage({ onNavigate }) {
  return (
    <>
      <div className="wrap page-head">
        <div className="eyebrow">Our engineering network</div>
        <h1>Local engagement. Specialist manufacturing capability.</h1>
      </div>
      <section className="network-overview-section">
        <div className="wrap network-overview">
          <div className="network-image">
            <img src={NETWORK_IMAGE} alt="Industrial robotic equipment inside a manufacturing facility" />
            <span>Manufacturing capability, connected</span>
          </div>
          <div className="network-copy">
            <div className="eyebrow">The right expertise for the scope</div>
            <h2>Local project support, backed by specialist experience.</h2>
            <p style={{ marginBottom: 18 }}>
              Gold Coast Engineering & Projects Ltd. works with Dehu Engineering (India) Private Limited on relevant opportunities. Dehu&apos;s published capabilities include boiler and power plant solutions, pressure parts, engineered products, heavy engineering, trading and site work services.
            </p>
            <p>
              Discuss the requirement with Gold Coast in Ghana, define the technical and commercial scope with the appropriate teams, and coordinate execution through the agreed project structure.
            </p>
            <button className="btn" onClick={() => onNavigate("Contact")}>
              Discuss a requirement <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>
      <section className="soft process-section network-process-section">
        <div className="wrap">
          <div className="eyebrow">How we work together</div>
          <h2>One connected project journey.</h2>
          <div className="grid network-steps">
            <article className="card">
              <h3>Local engagement</h3>
              <p>Understand the operating context, project priorities and customer requirements in Ghana.</p>
            </article>
            <article className="card">
              <h3>Technical alignment</h3>
              <p>Bring the right engineering and manufacturing expertise into the scope definition.</p>
            </article>
            <article className="card">
              <h3>Coordinated execution</h3>
              <p>Support communication, documentation, delivery and site interfaces through the agreed scope.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}