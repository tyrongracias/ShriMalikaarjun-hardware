import Link from "next/link";
import { categories, products } from "../lib/catalog";

const BrandHeader=()=> <header className="site-header"><div className="container nav">
  <Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Shri Malikaarjun</strong><small>Hardware & Paints</small></span></Link>
  <nav><Link href="/products">Products</Link><Link href="/categories">Categories</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
  <a className="nav-cta" href="https://wa.me/919999999999" target="_blank">WhatsApp</a>
</div></header>;

const Footer=()=> <footer className="footer"><div className="container footer-grid">
  <div><strong>Shri Malikaarjun Hardware & Paints</strong><p>Paints • Hardware • Tools • Accessories</p></div>
  <div><Link href="/products">Products</Link><Link href="/categories">Categories</Link><Link href="/contact">Contact</Link></div>
  <div><span>Canacona, Goa</span><span>+91 99999 99999</span></div>
</div></footer>;

export default function Home(){
  return <><BrandHeader/><main>
    <section className="hero hero-photo">
      <div className="hero-photo-image" aria-hidden="true"></div>
      <div className="hero-photo-overlay"></div>
      <div className="container hero-photo-content">
        <div className="hero-photo-copy">
          <p className="eyebrow light">CANACONA • GOA</p>
          <h1>Everything you need to finish the job.</h1>
          <p className="hero-copy">Paints, hardware, tools and everyday project essentials — available locally in Canacona.</p>
          <div className="actions">
            <Link href="/products" className="button primary">Browse products</Link>
            <a href="https://wa.me/919999999999" target="_blank" className="button hero-outline">Ask on WhatsApp</a>
          </div>
          <div className="hero-meta hero-meta-light"><span>Local store</span><span>Genuine products</span><span>Helpful advice</span></div>
        </div>
      </div>
    </section>

    <section className="section"><div className="container">
      <div className="section-heading"><div><p className="eyebrow">SHOP BY CATEGORY</p><h2>Find what you need.</h2></div><Link href="/categories" className="text-link">All categories →</Link></div>
      <div className="category-grid">{categories.map(c=><Link key={c.slug} href={`/categories/${c.slug}`} className="category-card"><div className="category-icon">{c.icon}</div><div><h3>{c.name}</h3><p>{c.description}</p></div><span>→</span></Link>)}</div>
    </div></section>

    <section className="section muted"><div className="container">
      <div className="section-heading"><div><p className="eyebrow">THE CATALOGUE</p><h2>Selected products.</h2></div><Link href="/products" className="text-link">View all →</Link></div>
      <div className="product-grid">{products.slice(0,6).map(p=><Link key={p.slug} href={`/products/${p.slug}`} className="product-card"><div className={`product-art ${p.tone}`}><span>{p.short}</span></div><div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><span className="product-link">View product →</span></div></Link>)}</div>
    </div></section>

    <section className="opus-banner"><div className="container opus-grid"><div><p className="eyebrow light">FEATURED BRAND</p><h2>Opus Paints, available locally.</h2><p>Browse the featured range and contact the store for current colours, pack sizes and availability.</p><Link href="/brands/opus" className="button light-button">Explore Opus</Link></div><div className="opus-badge">OPUS</div></div></section>

    <section className="section"><div className="container visit-grid"><div><p className="eyebrow">VISIT THE STORE</p><h2>Local, convenient, close to home.</h2><p className="lead">For availability, sizes or product advice, call or WhatsApp the store. You can also get directions straight to the shop.</p><div className="actions"><Link href="/contact" className="button primary">Contact the store</Link><a href="https://maps.google.com/?q=Canacona,Goa" target="_blank" className="button">Get directions</a></div></div><div className="map-placeholder"><div className="pin">●</div><strong>Canacona, Goa</strong><span>Exact Google Maps location will be added before launch.</span></div></div></section>
  </main><Footer/></>
}
