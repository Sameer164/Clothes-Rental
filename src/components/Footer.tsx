'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import styles from './Footer.module.css';

const navigation = {
  main: [
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ],
  categories: [
    { name: 'Party Wear', href: '/collection/party-wear' },
    { name: 'Ethnic Wear', href: '/collection/ethnic-wear' },
    { name: 'Western Looks', href: '/collection/western-looks' },
    { name: 'Accessories', href: '/collection/accessories' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.footerLogo}>
              <Image 
                src="/images/GlamOnRent.png" 
                alt="GlamOnRent Logo" 
                width={220} 
                height={65} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.brandDescription}>
              Your go-to destination for premium fashion rentals. Look fabulous without the commitment.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <FaInstagram />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaWhatsapp />
              </a>
              <a href="#" className={styles.socialLink}>
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.sectionTitle}>
              Quick Links
            </h3>
            <ul className={styles.linkList}>
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={styles.footerLink}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className={styles.sectionTitle}>
              Categories
            </h3>
            <ul className={styles.linkList}>
              {navigation.categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={styles.footerLink}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            © {new Date().getFullYear()} GlamOnRent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 