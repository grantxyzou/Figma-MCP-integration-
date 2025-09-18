import React, { useState, useEffect } from 'react';
import { FluentButton } from './fluent/Button';
import { Card } from './fluent/Card';
import { FluentBadge } from './fluent/Badge';

const heroImage = "http://localhost:3845/assets/99887f11d04fb0c12b87ac43f3caaadf3dddfab3.png";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  category: 'pillow' | 'bed';
  image: string;
  description: string;
  features: string[];
}

const SnackSafeWebsite: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'pillow' | 'bed'>('all');

  const products: Product[] = [
    {
      id: '1',
      name: 'Purple Cloud Pillow Collection',
      price: 89.99,
      originalPrice: 119.99,
      discount: '-25%',
      category: 'pillow',
      image: 'http://localhost:3845/assets/99887f11d04fb0c12b87ac43f3caaadf3dddfab3.png',
      description: 'Ultra-soft memory foam pillows with hidden snack compartments',
      features: ['Food-Safe Materials', 'Completely Discreet', 'Ultra Comfortable']
    },
    {
      id: '2',
      name: 'Modern Storage Bed Frame',
      price: 599.99,
      originalPrice: 799.99,
      discount: '-25%',
      category: 'bed',
      image: 'http://localhost:3845/assets/99887f11d04fb0c12b87ac43f3caaadf3dddfab3.png',
      description: 'Sleek platform bed with multiple hidden storage compartments',
      features: ['Large Storage Capacity', 'Premium Materials', 'Modern Design']
    },
    {
      id: '3',
      name: 'Comfort Stripe Pillow Set',
      price: 149.99,
      category: 'pillow',
      image: 'http://localhost:3845/assets/99887f11d04fb0c12b87ac43f3caaadf3dddfab3.png',
      description: 'Set of 2 striped pillows with individual storage compartments',
      features: ['Set of 2', 'Individual Compartments', 'Washable Covers']
    },
    {
      id: '4',
      name: 'Executive Comfort Bed',
      price: 899.99,
      originalPrice: 1099.99,
      discount: '-18%',
      category: 'bed',
      image: 'http://localhost:3845/assets/99887f11d04fb0c12b87ac43f3caaadf3dddfab3.png',
      description: 'Premium bed with built-in mini-fridge and snack storage',
      features: ['Built-in Cooling', 'Premium Comfort', 'Multiple Compartments']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const navigationItems = [
    { label: 'Home', active: true },
    { label: 'Products', active: false },
    { label: 'Features', active: false },
    { label: 'About', active: false }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: '"Segoe UI", sans-serif',
      backgroundColor: '#faf9f8'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e1dfdd',
        padding: '16px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 600,
              color: '#242424',
              margin: 0
            }}>
              SnackSafe
            </h1>
            <span style={{
              fontSize: '14px',
              color: '#605e5c',
              fontWeight: 400
            }}>
              Comfort + Storage
            </span>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', gap: '32px' }}>
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  textDecoration: 'none',
                  color: item.active ? '#0f6cbd' : '#605e5c',
                  fontWeight: item.active ? 600 : 400,
                  fontSize: '16px',
                  padding: '8px 0',
                  borderBottom: item.active ? '2px solid #0f6cbd' : 'none'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Cart */}
          <div style={{ position: 'relative' }}>
            <FluentButton size="Medium (Default)" style="Outline">
              🛒 Cart
            </FluentButton>
            {cartCount > 0 && (
              <FluentBadge
                size="small"
                appearance="filled"
                color="brand"
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px'
                }}
              >
                {cartCount}
              </FluentBadge>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f3f2f1 0%, #e1dfdd 100%)',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Hero Content */}
          <div>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#242424',
              lineHeight: '1.2',
              marginBottom: '24px'
            }}>
              Sleep Comfortably,<br />
              Snack Discreetly
            </h1>
            
            <p style={{
              fontSize: '18px',
              color: '#605e5c',
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '480px'
            }}>
              Revolutionary pillows and beds with hidden food storage compartments. 
              Perfect for midnight snacks, sick days, or keeping treats safe from roommates.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
                        <FluentButton 
            size="Large"
            style="Primary"
            onClick={() => setIsCartOpen(true)}
          >
            Shop Now
          </FluentButton>
              <FluentButton size="Large" style="Outline">
                Learn More
              </FluentButton>
            </div>

            {/* Features */}
            <div style={{ display: 'flex', gap: '32px' }}>
              {[
                { icon: '🟢', label: 'Food-Safe Materials' },
                { icon: '👁️', label: 'Completely Discreet' },
                { icon: '❤️', label: 'Ultra Comfortable' }
              ].map((feature, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>{feature.icon}</span>
                  <span style={{ 
                    fontSize: '14px', 
                    color: '#242424',
                    fontWeight: 500
                  }}>
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div style={{
            background: `url('${heroImage}') center/cover no-repeat`,
            aspectRatio: '4/3',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
          }} />
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={{
        backgroundColor: '#ffffff',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 600,
              color: '#242424',
              marginBottom: '16px'
            }}>
              Featured Products
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#605e5c',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover our revolutionary collection of comfort meets storage solutions
            </p>
          </div>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '48px'
          }}>
            {[
              { key: 'all' as const, label: 'All Products' },
              { key: 'pillow' as const, label: 'Pillows' },
              { key: 'bed' as const, label: 'Beds' }
            ].map((category) => (
              <FluentButton
                key={category.key}
                size="Medium (Default)"
                style={activeCategory === category.key ? "Primary" : "Outline"}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </FluentButton>
            ))}
          </div>

          {/* Products Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                size="medium"
                style="outline"
                showPrimaryAction={true}
                showSecondaryAction={false}
                primaryActionText="Add to Cart"
                onPrimaryAction={addToCart}
                title={product.name}
                subtitle={`$${product.price}${product.originalPrice ? ` (was $${product.originalPrice})` : ''}`}
                body={
                  <div>
                    {product.discount && (
                      <div style={{ marginBottom: '12px' }}>
                        <FluentBadge
                          size="small"
                          appearance="filled"
                          color="danger"
                        >
                          {product.discount}
                        </FluentBadge>
                      </div>
                    )}
                    <div style={{ marginBottom: '12px' }}>
                      <FluentBadge
                        size="small"
                        appearance="tint"
                        color={product.category === 'pillow' ? 'informative' : 'success'}
                      >
                        {product.category === 'pillow' ? 'Pillow' : 'Bed'}
                      </FluentBadge>
                    </div>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#605e5c',
                      marginBottom: '16px',
                      lineHeight: '1.4'
                    }}>
                      {product.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {product.features.map((feature, index) => (
                        <FluentBadge
                          key={index}
                          size="small"
                          appearance="subtle"
                          color="subtle"
                        >
                          {feature}
                        </FluentBadge>
                      ))}
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#242424',
        color: '#ffffff',
        padding: '48px 0 32px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 600,
            marginBottom: '16px'
          }}>
            SnackSafe
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#c8c6c4',
            marginBottom: '24px'
          }}>
            Revolutionizing comfort with innovative storage solutions
          </p>
          <div style={{
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
            marginBottom: '32px'
          }}>
            {['Privacy Policy', 'Terms of Service', 'Contact Us', 'FAQ'].map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: '#c8c6c4',
                  textDecoration: 'none',
                  fontSize: '14px'
                }}
              >
                {link}
              </a>
            ))}
          </div>
          <div style={{
            borderTop: '1px solid #3b3a39',
            paddingTop: '24px',
            color: '#8a8886',
            fontSize: '14px'
          }}>
            © 2025 SnackSafe. All rights reserved. • Built with Fluent 2 Design System
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SnackSafeWebsite;