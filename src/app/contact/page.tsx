'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import styles from './page.module.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We would love to hear from you. Reach out for inquiries, 
            styling advice, or to schedule a fitting appointment.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Get in Touch</h2>
              
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.iconWrapper}>
                    <PhoneIcon className={styles.icon} />
                  </div>
                  <div>
                    <h3 className={styles.methodTitle}>Phone</h3>
                    <p>+977 9812345678</p>
                    <p className={styles.note}>Available 10:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.iconWrapper}>
                    <EnvelopeIcon className={styles.icon} />
                  </div>
                  <div>
                    <h3 className={styles.methodTitle}>Email</h3>
                    <p>info@glamonrent.com</p>
                    <p className={styles.note}>We reply within 24 hours</p>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.iconWrapper}>
                    <MapPinIcon className={styles.icon} />
                  </div>
                  <div>
                    <h3 className={styles.methodTitle}>Location</h3>
                    <p>Labim Mall, 3rd Floor</p>
                    <p>Pulchowk, Lalitpur</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <h3 className={styles.socialTitle}>Follow Us</h3>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialIcon}>
                    <FaInstagram />
                  </a>
                  <a href="#" className={styles.socialIcon}>
                    <FaWhatsapp />
                  </a>
                  <a href="#" className={styles.socialIcon}>
                    <FaFacebook />
                  </a>
                </div>
              </div>

              <div className={styles.hours}>
                <h3 className={styles.hoursTitle}>Studio Hours</h3>
                <div className={styles.hoursList}>
                  <div className={styles.hourItem}>
                    <span>Monday - Friday:</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className={styles.hourItem}>
                    <span>Saturday:</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </div>
                  <div className={styles.hourItem}>
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Send a Message</h2>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Rental Inquiry">Rental Inquiry</option>
                    <option value="Booking Assistance">Booking Assistance</option>
                    <option value="Fitting Appointment">Fitting Appointment</option>
                    <option value="Styling Advice">Styling Advice</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitSuccess && (
                  <div className={styles.successMessage}>
                    Your message has been sent successfully. We will get back to you soon!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (optional) */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapContainer}>
            {/* Map placeholder */}
            <div className={styles.map}>
              <div className={styles.mapPlaceholder}>
                Google Maps location will be embedded here
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 