import Link from "next/link";
import { categories, products } from "../lib/catalog";

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link href="/" className="brand">
            <span className="brand-mark">CH</span>
            <span>
              <strong>Canacona Hardware</strong>
              <small>& Paints</small>
            </span>
          </Link>
          <nav>
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="nav-cta" href="https://wa.me/919999999999" target="_blank">WhatsApp</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">CANACONA • GOA</p>
              <h1>Paints, hardware & tools for every project.</h1>
              <p className="hero-copy">
                A trusted local store for quality paints, hardware, tools,
                waterproofing and painting accessories.
              </p>
              <div className="actions">
                <Link href="/products" className="button primary">Explore Products</Link>
                <a href="https://wa.me/919999999999" target="_blank" className="button secondary">Ask on WhatsApp</a>
              </div>
              <div className="hero-meta">
                <span>✓ Local Canacona store</span>
                <span>✓ Genuine products</span>
                <span>✓ Easy enquiries</span>
              </div>
            </div>
            <div className="hero-card">
              <div className="paint-swatch swatch-a"></div>
              <div className="paint-swatch swatch-b"></div>
              <div className="paint-swatch swatch-c"></div>
              <div className="hero-card-copy">
                <span>Featured Brand</span>
                <strong>OPUS PAINTS</strong>
                <p>Explore selected Opus products available in-store.</p>
                <Link href="/brands/opus">View Opus range →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SHOP BY CATEGORY</p>
                <h2>Find what you need.</h2>
              </div>
              <Link href="/categories" className="text-link">View all categories →</Link>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <Link key={category.slug} href={`/categories/${category.slug}`} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">FEATURED PRODUCTS</p>
                <h2>Popular picks.</h2>
              </div>
              <Link href="/products" className="text-link">Browse catalogue →</Link>
            </div>
            <div className="product-grid">
              {featured.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="product-card">
                  <div className={`product-art ${product.tone}`}>
                    <span>{product.short}</span>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="product-link">View product →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="opus-banner">
          <div className="container opus-grid">
            <div>
              <p className="eyebrow light">FEATURED BRAND</p>
              <h2>Bring your next project to life with Opus Paints.</h2>
              <p>Browse the Opus range and enquire about availability, sizes and colours at our store.</p>
              <Link href="/brands/opus" className="button light-button">Explore Opus</Link>
            </div>
            <div className="opus-badge">OPUS</div>
          </div>
        </section>

        <section className="section">
          <div className="container visit-grid">
            <div>
              <p className="eyebrow">VISIT OUR STORE</p>
              <h2>Right here in Canacona.</h2>
              <p>Need help finding a product? Call us, send a WhatsApp message or get directions to the store.</p>
              <div className="actions">
                <Link href="/contact" className="button primary">Contact Us</Link>
                <a className="button secondary" href="https://maps.google.com/?q=Canacona,Goa" target="_blank">Get Directions</a>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="pin">●</div>
              <strong>Canacona, Goa</strong>
              <span>Google Maps location will be embedded here.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <strong>Canacona Hardware & Paints</strong>
            <p>Paints • Hardware • Tools • Accessories</p>
          </div>
          <div>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <span>Canacona, Goa</span>
            <span>+91 99999 99999</span>
          </div>
        </div>
      </footer>
    </>
  );
}
