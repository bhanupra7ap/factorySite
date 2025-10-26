import { useEffect, useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import headerImg from "../assets/contact-header.avif";
import "./ContactUs.css";
import { env, sanitizedPhone } from "../config/env";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactUs = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error" | "info"; message: string }>(null);

  // Centralized env
  const contactEmail = env.CONTACT_EMAIL;
  const contactPhone = env.CONTACT_PHONE;
  const contactAddress = env.CONTACT_ADDRESS;

  // Dev-only diagnostics to confirm env values are loaded at runtime
  useEffect(() => {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug("ContactUs env:", {
        emailMode: "mailto",
        contactEmail,
      });
    }
  }, [contactEmail]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    // Basic client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill in your name, email, and message." });
      return;
    }
    // Require a target recipient
    if (!contactEmail) {
      setStatus({ type: "error", message: "Contact email is not configured. Please set VITE_CONTACT_EMAIL." });
      return;
    }

    try {
      setSending(true);

      // Build subject and body for a mailto link
      const subject = form.subject?.trim() || `New inquiry from ${form.name}`;
      const bodyLines = [
        `From: ${form.name} <${form.email}>`,
        subject ? `Subject: ${subject}` : undefined,
        "",
        form.message,
      ].filter(Boolean) as string[];

      const mailtoUrl = `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      // Open the user's default mail client
      window.location.href = mailtoUrl;

      // Light feedback so users know what's happening
      setStatus({ type: "info", message: "Opening your email app to send the message…" });
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Couldn't open your email app. Please email us directly." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page">
      <div
        className="header-image"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <h1 className="header-title">Contact Us</h1>
      </div>
      <div className="content">
        <h2>Contact Information</h2>
        <p className="contact-lead">Have a question or want to work with us? Send us a message and we’ll get back to you.</p>

        <div className="contact-layout">
          <aside className="contact-info-card">
            <h3 className="info-title">Get in touch</h3>
            <div className="info-list">
              {contactAddress && (
                <div className="info-item">
                  <span className="info-icon" aria-hidden>
                    <FiMapPin />
                  </span>
                  <div className="info-text">
                    <div className="info-label">Address</div>
                    <div className="info-value">{contactAddress}</div>
                  </div>
                </div>
              )}
              {contactPhone && sanitizedPhone && (
                <div className="info-item">
                  <span className="info-icon" aria-hidden>
                    <FiPhone />
                  </span>
                  <div className="info-text">
                    <div className="info-label">Phone</div>
                    <a className="info-link" href={`tel:${sanitizedPhone}`}>{contactPhone}</a>
                  </div>
                </div>
              )}
              {contactEmail && (
                <div className="info-item">
                  <span className="info-icon" aria-hidden>
                    <FiMail />
                  </span>
                  <div className="info-text">
                    <div className="info-label">Email</div>
                    <a className="info-link" href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </div>
                </div>
              )}
            </div>

            <div className="info-actions">
              {contactAddress && (
                <a
                  className="btn-outline"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactAddress)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open in Maps
                </a>
              )}
              {contactPhone && sanitizedPhone && (
                <a className="btn-outline" href={`tel:${sanitizedPhone}`}>Call Now</a>
              )}
              {contactEmail && (
                <a className="btn-outline" href={`mailto:${contactEmail}`}>Email Us</a>
              )}
            </div>
          </aside>

          <form onSubmit={onSubmit} className="contact-form">
          <div className="form-row two-col">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={onChange}
              placeholder="How can we help?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              placeholder="Write your message here..."
              required
            />
          </div>

          {!contactEmail && (
            <div role="status" className="alert info" style={{ marginBottom: 12 }}>
              No recipient email configured. Set VITE_CONTACT_EMAIL in your .env to enable the form.
            </div>
          )}

          {status && (
            <div role="alert" className={`alert ${status.type}`}>
              {status.message}
            </div>
          )}

          <button type="submit" disabled={sending} className={`btn-primary ${sending ? "is-loading" : ""}`}>
            {sending ? "Sending…" : "Send Message"}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
