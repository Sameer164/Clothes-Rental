'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from './page.module.css';

const featuredCategories = [
  {
    name: 'Party Wear',
    description: 'Stunning dresses and suits for your special occasions',
    image: '/images/party-wear.jpg',
    href: '/collection/party-wear',
  },
  {
    name: 'Ethnic Wear',
    description: 'Traditional elegance for cultural celebrations',
    image: '/images/ethnic-wear.jpg',
    href: '/collection/ethnic-wear',
  },
  {
    name: 'Western Looks',
    description: 'Contemporary fashion for the modern you',
    image: '/images/western-looks.jpg',
    href: '/collection/western-looks',
  },
];

const howItWorks = [
  {
    title: 'Choose Your Style',
    description: 'Browse our curated collection and find the perfect outfit',
    icon: '👗',
  },
  {
    title: 'Book Your Dates',
    description: 'Select your rental period and reserve your items',
    icon: '📅',
  },
  {
    title: 'Try & Wear',
    description: 'Receive your outfit and look fabulous for your event',
    icon: '✨',
  },
  {
    title: 'Return with Love',
    description: 'Simply return the items in the provided packaging',
    icon: '💝',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Background Image */}
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero-bg.jpg"
            alt="Fashion rental hero image"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.overlay}></div>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroTextContent}
            >
              <h1 className={styles.heroTitle}>
                Look Fabulous.
                <br />
                <span className={styles.heroHighlight}>Without the Fuss.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                GlamOnRent offers premium fashion pieces for any occasion. Experience luxury without commitment.
              </p>
              <div className={styles.heroActions}>
                <Link
                  href="/collection"
                  className="btn-primary"
                >
                  Explore Collection
                  <ArrowRightIcon className={styles.buttonIcon} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Featured Collections
            </h2>
            <p className={styles.sectionSubtitle}>
              Discover our most popular rental categories
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {featuredCategories.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={styles.categoryCard}
              >
                <div className={styles.categoryImageContainer}>
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className={styles.categoryImage}
                  />
                </div>
                <h3 className={styles.categoryTitle}>
                  {category.name}
                </h3>
                <p className={styles.categoryDescription}>{category.description}</p>
                <Link
                  href={category.href}
                  className={styles.categoryLink}
                >
                  View Collection
                  <ArrowRightIcon className={styles.linkIcon} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorksSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              How It Works
            </h2>
            <p className={styles.sectionSubtitle}>
              Renting with us is simple and hassle-free
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.stepCard}
              >
                <div className={styles.stepIcon}>
                  {step.icon}
                </div>
                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
