import { STEPS } from "../data/siteData";
import { ABOUT_IMAGES } from "../data/siteImages";

export default function AboutPage() {
  return (
    <>
      <div className="wrap page-head">
        <div className="eyebrow">About us</div>
        <h1>A Ghana based partner for industrial engineering</h1>
      </div>
      <section className="about-story-section">
        <div className="wrap about-story-layout">
          <div className="about-story-copy">
            <div className="eyebrow">Local understanding. Wider capability.</div>
            <h2>Engineering support, grounded in the region.</h2>
            <p style={{ marginBottom: 18 }}>
              Gold Coast Engineering & Projects Ltd. was formed to serve industrial and infrastructure projects in Ghana and the wider West African region.
            </p>
            <p style={{ marginBottom: 18 }}>
              Our work centres on understanding customer requirements and coordinating the engineering, manufacturing, supply and site resources needed to fulfil them. We work with Dehu Engineering (India) Private Limited, whose core work includes boilers, pressure components, heavy engineering, trading and site services.
            </p>
            <p>
              This gives customers a local point of contact for projects involving specialist engineering and manufacturing capability.
            </p>
            <div className="about-principle">
              <span>Our aim</span>
              <p>Practical solutions, clear communication and dependable follow through.</p>
            </div>
          </div>
          <div className="about-image-pair">
            <figure className="about-image-main">
              <img src={ABOUT_IMAGES[0]} alt="Wind farm generating power across a rural landscape" />
              <figcaption>Power generation is one of the sectors we support</figcaption>
            </figure>
            <img className="about-image-detail" src={ABOUT_IMAGES[1]} alt="Engineers collaborating on technical project work" loading="lazy" />
          </div>
        </div>
      </section>
      <section className="soft">
        <div className="wrap">
          <h2>Our approach</h2>
          <div className="grid">
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
    </>
  );
}