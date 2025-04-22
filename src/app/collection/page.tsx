'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiFilter, FiX } from 'react-icons/fi';
import styles from './page.module.css';

// Sample product data - replace with actual data later
const products = [
  {
    id: 1,
    name: 'Emerald Party Gown',
    description: 'Elegant emerald green party gown with sequin details',
    price: 1200,
    imageUrl: '/images/party-wear.jpg',
    category: 'party-wear',
    size: ['S', 'M', 'L'],
    color: 'Green',
    occasion: 'Party',
  },
  {
    id: 2,
    name: 'Traditional Red Lehenga',
    description: 'Hand-embroidered bridal lehenga with golden threadwork',
    price: 2500,
    imageUrl: '/images/ethnic-wear.jpg',
    category: 'ethnic-wear',
    size: ['M', 'L', 'XL'],
    color: 'Red',
    occasion: 'Wedding',
  },
  {
    id: 3,
    name: 'Designer Summer Dress',
    description: 'Lightweight floral summer dress perfect for day events',
    price: 800,
    imageUrl: '/images/western-looks.jpg',
    category: 'western-looks',
    size: ['XS', 'S', 'M'],
    color: 'Blue',
    occasion: 'Casual',
  },
  {
    id: 4,
    name: 'Black Tuxedo Set',
    description: 'Classic black tuxedo with satin lapels for formal events',
    price: 1800,
    imageUrl: '/images/party-wear.jpg',
    category: 'party-wear',
    size: ['M', 'L', 'XL', 'XXL'],
    color: 'Black',
    occasion: 'Formal',
  },
  {
    id: 5,
    name: 'Pearl Statement Necklace',
    description: 'Elegant pearl necklace with crystal embellishments',
    price: 500,
    imageUrl: '/images/accessories.jpg',
    category: 'accessories',
    color: 'Pearl',
    occasion: 'Wedding',
  },
  {
    id: 6,
    name: 'Designer Kurta Set',
    description: 'Hand-crafted kurta set with intricate embroidery',
    price: 1500,
    imageUrl: '/images/ethnic-wear.jpg',
    category: 'ethnic-wear',
    size: ['S', 'M', 'L', 'XL'],
    color: 'Blue',
    occasion: 'Festival',
  },
];

// Filter options
const filterOptions = {
  categories: ['party-wear', 'ethnic-wear', 'western-looks', 'accessories'],
  occasions: ['Party', 'Wedding', 'Casual', 'Formal', 'Festival'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
};

export default function Collection() {
  const [filters, setFilters] = useState({
    category: '',
    occasion: '',
    size: '',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.occasion && product.occasion !== filters.occasion) return false;
    if (filters.size && (!product.size || !product.size.includes(filters.size))) return false;
    return true;
  });

  // Handle filter changes
  const handleFilterChange = (filterType: 'category' | 'occasion' | 'size', value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? '' : value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: '',
      occasion: '',
      size: '',
    });
  };

  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our Collection</h1>
          <p className={styles.pageDescription}>
            Discover our curated collection of premium fashion pieces for rent.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.collectionContainer}>
          {/* Mobile Filter Button */}
          <div className={styles.mobileFilterToggle}>
            <button 
              className={styles.filterButton} 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? <FiX /> : <FiFilter />}
              Filters
            </button>
          </div>

          {/* Sidebar Filters */}
          <aside className={`${styles.filtersContainer} ${isFilterOpen ? styles.filterOpen : ''}`}>
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Categories</h3>
              <div className={styles.filterOptions}>
                {filterOptions.categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.filterOption} ${
                      filters.category === category ? styles.activeFilter : ''
                    }`}
                    onClick={() => handleFilterChange('category', category)}
                  >
                    {category.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Occasion</h3>
              <div className={styles.filterOptions}>
                {filterOptions.occasions.map((occasion) => (
                  <button
                    key={occasion}
                    className={`${styles.filterOption} ${
                      filters.occasion === occasion ? styles.activeFilter : ''
                    }`}
                    onClick={() => handleFilterChange('occasion', occasion)}
                  >
                    {occasion}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Size</h3>
              <div className={styles.filterOptions}>
                {filterOptions.sizes.map((size) => (
                  <button
                    key={size}
                    className={`${styles.filterOption} ${styles.sizeOption} ${
                      filters.size === size ? styles.activeFilter : ''
                    }`}
                    onClick={() => handleFilterChange('size', size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {(filters.category || filters.occasion || filters.size) && (
              <button className={styles.clearFilters} onClick={clearFilters}>
                Clear Filters
              </button>
            )}
          </aside>

          {/* Products Grid */}
          <div className={styles.productsContainer}>
            {filteredProducts.length === 0 ? (
              <div className={styles.noResults}>
                <p>No items match your current filters. Try adjusting your selection.</p>
                <button className={styles.clearFilters} onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={styles.productsGrid}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className={styles.productCard}>
                    <div className={styles.productImageContainer}>
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productDescription}>{product.description}</p>
                      <p className={styles.productPrice}>Rs. {product.price}/day</p>
                      <Link href={`/product/${product.id}`} className={styles.viewButton}>
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 