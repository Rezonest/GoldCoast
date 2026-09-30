import { useState } from "react";

import { CONTACT, INDUSTRIES, SHEETS_URL } from "../data/siteData";

const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  industry: "",
  requirement: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [emailDraft, setEmailDraft] = useState("");

  const updateField = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      if (SHEETS_URL) {
        await fetch(SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
        });
        setStatus("done");
      } else {
        const recipient = CONTACT.email.includes("@") && !CONTACT.email.startsWith("[") ? CONTACT.email : "";
        const subject = `Project enquiry from ${form.name}`;
        const body = [
          `Name: ${form.name}`,
          `Company: ${form.company}`,
          `Email: ${form.email}`,
          `Phone or WhatsApp: ${form.phone}`,
          `Country: ${form.country}`,
          `Industry: ${form.industry}`,
          "",
          "Requirement:",
          form.requirement,
        ].join("\n");
        setEmailDraft(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        setStatus("drafted");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="ok" role="status">
        <h3>Thank you</h3>
        <p>We have received your requirement and will review the scope and contact you to discuss next steps.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <div className="row">
        <div>
          <label htmlFor="enquiry-name">Name *</label>
          <input id="enquiry-name" name="name" autoComplete="name" required value={form.name} onChange={updateField("name")} />
        </div>
        <div>
          <label htmlFor="enquiry-company">Company</label>
          <input id="enquiry-company" name="company" autoComplete="organization" value={form.company} onChange={updateField("company")} />
        </div>
      </div>
      <div className="row">
        <div>
          <label htmlFor="enquiry-email">Email *</label>
          <input id="enquiry-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField("email")} />
        </div>
        <div>
          <label htmlFor="enquiry-phone">Phone or WhatsApp</label>
          <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField("phone")} />
        </div>
      </div>
      <div className="row">
        <div>
          <label htmlFor="enquiry-country">Country</label>
          <input id="enquiry-country" name="country" autoComplete="country-name" value={form.country} onChange={updateField("country")} />
        </div>
        <div>
          <label htmlFor="enquiry-industry">Industry</label>
          <select id="enquiry-industry" name="industry" value={form.industry} onChange={updateField("industry")}>
            <option value="">Select</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry}>{industry}</option>
            ))}
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="enquiry-requirement">Requirement *</label>
        <textarea
          id="enquiry-requirement"
          name="requirement"
          rows={5}
          required
          value={form.requirement}
          onChange={updateField("requirement")}
          placeholder="Describe the equipment, spare or project you need."
        />
      </div>
      <p className="note">
        The enquiry opens as an email draft so you can review it and attach supporting files before sending.
      </p>
      {status === "error" && <p className="err">Something went wrong. Please try again or email us directly.</p>}
      {status === "drafted" && (
        <div className="email-draft-note" role="status">
          <p>No online submission service is connected yet. Open the prepared draft and send it from your email app. Add the destination address first if one is not prefilled.</p>
          <a href={emailDraft}>Open email draft <span aria-hidden="true">↗</span></a>
        </div>
      )}
      <div>
        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Preparing..." : "Prepare Your Enquiry"}
        </button>
      </div>
    </form>
  );
}
