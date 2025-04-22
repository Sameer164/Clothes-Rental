'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const steps = [
  {
    number: '01',
    title: 'Browse & Choose',
    description: 'Explore our wide collection of fashion pieces and select your favorites.',
    details: [
      'Filter by occasion, size, color, and more',
      'View high-quality photos from multiple angles',
      'Check availability for your preferred dates'
    ],
    image: '/images/step1.jpg'
  },
  {
    number: '02',
    title: 'Book & Reserve',
    description: 'Select your rental dates and proceed with the booking process.',
    details: [
      'Secure your items with a simple reservation process',
      'Choose delivery or pickup options',
      'Pay a security deposit that is fully refundable'
    ],
    image: '/images/step2.jpg'
  },
  {
    number: '03',
    title: 'Receive & Enjoy',
    description: 'Your chosen items arrive at your doorstep, ready to be worn.',
    details: [
      'Get your outfit freshly cleaned and well-packaged',
      'Try it on and make sure it fits perfectly',
      'Look fabulous at your event!'
    ],
    image: '/images/step3.jpg'
  },
  {
    number: '04',
    title: 'Return & Relax',
    description: 'Simply return your items when you are done—no cleaning necessary.',
    details: [
      'Use our provided return packaging',
      'Drop off or schedule a pickup',
      'Receive your security deposit back promptly'
    ],
    image: '/images/step4.jpg'
  }
];

const faqItems = [
  {
    question: 'What if the item does not fit?',
    answer: 'We recommend checking our detailed size guide before booking. If the item does not fit, contact us within 24 hours of receiving it, and we will offer an exchange (subject to availability) or a partial refund.'
  },
  {
    question: 'Do I need to clean the items before returning?',
    answer: 'No, you do not need to clean the items before returning. We professionally clean all items between rentals to ensure they are fresh for the next customer.'
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 1-2 weeks in advance for popular items, especially during wedding and festival seasons. Last-minute bookings are possible, but selection may be limited.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 48 hours or more before your rental start date will receive a full refund. Cancellations within 48 hours will receive a partial refund or a credit for future rental.'
  }
];

export default function HowItWorks() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>How It Works</h1>
            <p className={styles.heroDescription}>
              Renting with GlamOnRent is simple, convenient, and 
              designed to make your fashion experience stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className={styles.stepsSection}>
        <div className="container">
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.stepCard}
              >
                <div className={styles.stepImageContainer}>
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className={styles.stepImage}
                  />
                  <div className={styles.stepNumber}>{step.number}</div>
                </div>
                <div className={styles.stepContent}>
                  <h2 className={styles.stepTitle}>{step.title}</h2>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <ul className={styles.stepDetailsList}>
                    {step.details.map((detail, i) => (
                      <li key={i} className={styles.stepDetailItem}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.faqItem}
              >
                <h3 className={styles.faqQuestion}>{item.question}</h3>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Find Your Perfect Look?</h2>
            <p className={styles.ctaDescription}>
              Browse our collection now and discover premium fashion pieces for your next occasion.
            </p>
            <Link href="/collection" className="btn-primary">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 