'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import styles from './page.module.css';

const faqCategories = [
  {
    title: 'Rentals & Booking',
    questions: [
      {
        question: 'How does the rental process work?',
        answer: 'Browse our collection online, select your desired items, choose your rental dates (typically 4-8 days), and complete the checkout process. We will deliver your items clean and ready to wear. After your event, simply return them using our prepaid packaging—no cleaning necessary!'
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking at least 1-2 weeks in advance, especially during peak wedding and festival seasons. For special events like weddings, booking 3-4 weeks ahead ensures you get your preferred styles and sizes.'
      },
      {
        question: 'Can I try before I rent?',
        answer: 'Yes! We offer in-person try-ons at our studio by appointment. Alternatively, we have a "Backup Size" option where you can rent a second size of the same style for a minimal additional fee.'
      },
      {
        question: 'What if the outfit does not fit?',
        answer: 'If you receive your outfit and it does not fit, contact us within 24 hours of delivery. We will do our best to arrange an exchange (subject to availability) or provide a store credit for future use.'
      }
    ]
  },
  {
    title: 'Payments & Pricing',
    questions: [
      {
        question: 'How much does it cost to rent an outfit?',
        answer: 'Our rental prices typically range from Rs. 500-5,000 depending on the item, designer, and original retail value. Each listing shows the rental price clearly. The rental period is usually 4-8 days.'
      },
      {
        question: 'Is a security deposit required?',
        answer: "Yes, a refundable security deposit is required for most items. The amount varies based on the item's value and will be clearly stated during checkout. The deposit is fully refunded when the item is returned in good condition."
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit/debit cards, mobile payment apps, and bank transfers. Payment must be completed before your order is confirmed.'
      }
    ]
  },
  {
    title: 'Delivery & Returns',
    questions: [
      {
        question: 'How is my order delivered?',
        answer: 'We offer delivery throughout Nepal. Orders are delivered 1-2 days before your rental start date. For Kathmandu Valley, we offer same-day delivery for orders placed before noon.'
      },
      {
        question: 'Do I need to clean the items before returning?',
        answer: "No! That&apos;s the beauty of renting. Simply return the items as they are. We professionally clean every item between rentals to ensure they&apos;re fresh for the next customer."
      },
      {
        question: 'What if I return an item late?',
        answer: "Late returns are charged at 25% of the rental price per additional day. Please contact us if you need to extend your rental period, and we&apos;ll try to accommodate if the item is not booked by another customer."
      }
    ]
  },
  {
    title: 'Damage & Insurance',
    questions: [
      {
        question: 'What if I accidentally damage an item?',
        answer: 'Minor wear and tear is expected and covered in your rental fee. For significant damage, a portion of your security deposit may be retained. We evaluate each case individually and always communicate with you first.'
      },
      {
        question: 'Is insurance included in my rental?',
        answer: 'Basic insurance for minor wear and tear is included. For complete peace of mind, we offer "Worry-Free Insurance" for an additional 10% of the rental price, which covers most accidental damages.'
      }
    ]
  }
];

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState<string>('Rentals & Booking');
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});
  
  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Everything you need to know about GlamOnRent services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.faqContainer}>
            {/* Category Tabs */}
            <div className={styles.categories}>
              {faqCategories.map((category) => (
                <button
                  key={category.title}
                  className={`${styles.categoryButton} ${
                    activeCategory === category.title ? styles.activeCategory : ''
                  }`}
                  onClick={() => setActiveCategory(category.title)}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Questions & Answers */}
            <div className={styles.questionsContainer}>
              {faqCategories
                .find((category) => category.title === activeCategory)
                ?.questions.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <button
                      className={styles.questionButton}
                      onClick={() => toggleQuestion(faq.question)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDownIcon
                        className={`${styles.icon} ${
                          openQuestions[faq.question] ? styles.rotateIcon : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openQuestions[faq.question] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.answerContainer}
                        >
                          <p className={styles.answer}>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className={styles.contactCta}>
            <h3>Still have questions?</h3>
            <p>
              We're here to help! Contact our customer support team for
              personalized assistance.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 