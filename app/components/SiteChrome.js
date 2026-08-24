import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>CANACONA • GOA</span>
          <span>PAINTS • HARDWARE • TOOLS • PROJECT SUPPLIES</span>
        </div>
      </div>
      <div className="container nav">
        <Link href="/" className="brand-logo" aria-label="Shri Mallikarjun Hardware & Paints">
          <img src="/images/logo.png" alt="Shri Mallikarjun Hardware & Paints" />
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="nav-cta" href="https://wa.me/918310248961" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-orange-bar" />
      <div className="container footer-main">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Shri Mallikarjun Hardware & Paints" />
          <p>Paints, hardware, tools and project essentials for Canacona and the surrounding area.</p>
        </div>
        <div className="footer-col">
          <h3>SHOP</h3>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
        </div>
        <div className="footer-col">
          <h3>COMPANY</h3>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col footer-contact">
          <h3>CONTACT</h3>
          <span>Canacona, Goa</span>
          <a href="tel:+918310248961">+91 8310 2489 61</a>
          <a href="https://wa.me/918310248961" target="_blank" rel="noreferrer">WhatsApp us</a>
          <a href="https://www.google.com/maps/search/?api=1&query=15.00798854638001,74.0453690848158" target="_blank" rel="noreferrer">Get directions</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Shri Mallikarjun Hardware & Paints</span>
        <span>Shop No. 6, Vijayabai Complex<br />
  Chaudi, Canacona, Goa – 403702</span>
      </div>
    </footer>
  );
}
