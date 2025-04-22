'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './page.module.css';

// Sample lookbook images - replace with your actual images
const lookbookItems = [
  {
    id: 1,
    image: '/images/lookbook1.jpg',
    title: 'Summer Elegance',
    description: 'Light fabrics with a touch of glamour',
  },
  {
    id: 2,
    image: '/images/lookbook2.jpg',
    title: 'Evening Glow',
    description: 'Sophisticated ensembles for special nights',
  },
  {
    id: 3,
    image: '/images/lookbook3.jpg',
    title: 'Festival Vibes',
    description: 'Colorful ethnic wear for celebrations',
  },
  {
    id: 4,
    image: '/images/lookbook4.jpg',
    title: 'Urban Chic',
    description: 'Contemporary styles for the modern woman',
  },
  {
    id: 5,
    image: '/images/lookbook5.jpg',
    title: 'Wedding Ready',
    description: 'Stunning outfits for wedding season',
  },
  {
    id: 6,
    image: '/images/lookbook6.jpg',
    title: 'Accessorize',
    description: 'Statement pieces that define your style',
  },
];

export default function Lookbook() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setSelectedItem(id === selectedItem ? null : id);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Our Lookbook</h1>
          <p className={styles.subtitle}>
            Get inspired by our curated collection of styles and looks
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.grid}>
            {lookbookItems.map((item) => (
              <motion.div
                key={item.id}
                className={styles.item}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleItemClick(item.id)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.info}>
                  <h2 className={styles.itemTitle}>{item.title}</h2>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className={styles.note}>
        <div className="container">
          <p>
            All pieces shown in our lookbook are available for rent. Contact us for styling advice
            or to reserve these looks for your next event.
          </p>
        </div>
      </section>
    </div>
  );
} 