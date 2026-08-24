import Link from "next/link";
import { categories, products } from "../lib/catalog";
import { Header, Footer } from "./components/SiteChrome";

const tradeItems = [
  ["CONTRACTORS", "Project materials, paint and hardware for the job."],
  ["PAINTERS", "Paints, primers, rollers, brushes and accessories."],
  ["BUILDERS", "Reliable supplies for ongoing construction and renovation."],
  ["PROPERTY TEAMS", "Maintenance and repair essentials, locally available."],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero hero-photo">
          <div className="hero-photo-image" aria-hidden="true" />
          <div className="hero-photo-overlay" />
          <div className="container hero-content">
            <div className="hero-copy-block">
              <p className="kicker orange-kicker">BUILT FOR THE JOB</p>
              <h1>Paint it. Build it. <span>Get it done.</span></h1>
              <p className="hero-copy">Your local source for paints, hardware, tools and project essentials in Canacona, Goa.</p>
              <div className="hero-actions">
                <Link href="/products" className="btn btn-orange">SHOP PRODUCTS</Link>
                <a href="https://wa.me/918310248961" target="_blank" rel="noreferrer" className="btn btn-outline-white">WHATSAPP US</a>
              </div>
            </div>
          </div>
          <div className="hero-corner">SM<br /><small>CANACONA</small></div>
        </section>

       <section className="quick-links">
  <div className="container quick-grid">
  {categories.slice(0, 5).map((c) => (
    <Link
      key={c.slug}
      href={`/categories/${c.slug}`}
      className="quick-link"
    >
      <span
        className="quick-icon"
        style={{
          maskImage: `url(${c.icon})`,
          WebkitMaskImage: `url(${c.icon})`,
        }}
        aria-hidden="true"
      />

      <strong>{c.name.toUpperCase()}</strong>

      <span className="quick-arrow">↗</span>
    </Link>
  ))}
</div>
</section>

        

        <section className="section products-section">
          <div className="container">
            <div className="section-head">
              <div><p className="kicker">FEATURED PRODUCTS</p><h2>Ready for the next job.</h2></div>
              <Link href="/products" className="section-link">VIEW ALL PRODUCTS ↗</Link>
            </div>
            <div className="product-grid pro-grid">
              {products.filter((p) => p.available !== false && p.featured).slice(0, 6).map((p, i) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="product-card pro-card">
                  <div className={`product-art ${p.tone}`}><span className="product-tag">{String(i + 1).padStart(2, "0")}</span><span className="product-short">{p.short}</span></div>
                  <div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><span className="product-link">VIEW PRODUCT →</span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="opus-feature">
          <div className="container opus-feature-grid">
            <div className="opus-copy">
              <p className="kicker orange-kicker">FEATURED PAINT BRAND</p>
              <h2>OPUS<br /><span>PAINTS</span></h2>
              <p>Explore selected Opus products available through Shri Mallikarjun. Ask us about current colours, pack sizes and availability.</p>
              <Link href="/brands/opus" className="btn btn-orange">EXPLORE OPUS</Link>
            </div>
            <div className="paint-swatch-wall" aria-hidden="true">
              <div className="swatch swatch-1" /><div className="swatch swatch-2" /><div className="swatch swatch-3" /><div className="swatch swatch-4" /><div className="swatch swatch-5" /><div className="swatch swatch-6" />
            </div>
          </div>
        </section>
                
       <section className="section dark-section">
          <div className="container">
            <div className="section-head light-head">
              <div><p className="kicker orange-kicker">TRADE SOLUTIONS</p><h2>Built for the people who build.</h2></div>
              <Link href="/contact" className="section-link light-link">TALK TO US ↗</Link>
            </div>
            <div className="trade-grid">
              {tradeItems.map(([title, text], i) => (
                <div className="trade-card" key={title}>
                  <span className="trade-index">0{i + 1}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <span className="trade-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section store-section">
  <div className="container store-grid">
    <div>
      <p className="kicker">FIND US</p>

      <h2>Your local supply stop.</h2>

      <p className="lead">
        Need a product checked before you make the trip? Send your requirement
        on WhatsApp and we'll help you check availability.
      </p>

      <div className="hero-actions">
        <Link href="/contact" className="btn btn-black">
          STORE DETAILS
        </Link>

        <a
          href="https://www.google.com/maps/search/?api=1&query=15.00798854638001,74.0453690848158"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-black"
        >
          GET DIRECTIONS
        </a>
      </div>
    </div>

    <div className="store-panel">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240.857734657081!2d74.04528344348333!3d15.008032267609096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1787553954195!5m2!1sen!2sin"
    width="100%"
    height="340"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
}
