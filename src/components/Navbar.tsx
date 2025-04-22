'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import styles from './Navbar.module.css';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Collection', href: '/collection' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Lookbook', href: '/lookbook' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoContainer}>
              <Image 
                src="/images/GlamOnRent.png" 
                alt="GlamOnRent Logo" 
                width={250} 
                height={80} 
                className={styles.logoImage}
              />
            </div>
          </Link>

          <div className={styles.desktopNav}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles.navLink}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className={styles.icons}>
            <button className={styles.iconButton}>
              <UserIcon className={styles.icon} />
            </button>
            <button className={styles.iconButton}>
              <ShoppingBagIcon className={styles.icon} />
            </button>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className={styles.icon} />
            ) : (
              <Bars3Icon className={styles.icon} />
            )}
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className={styles.mobileIcons}>
            <button className={styles.iconButton}>
              <UserIcon className={styles.icon} />
            </button>
            <button className={styles.iconButton}>
              <ShoppingBagIcon className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 