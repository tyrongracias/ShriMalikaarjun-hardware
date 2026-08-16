import Link from "next/link";
import { categories } from "../../lib/catalog";

export default function CategoriesPage() {
  return <><Header /><main className="page"><div className="container"><p className="eyebrow">PRODUCT RANGE</p><h1>Shop by category</h1><p className="lead">Explore products by the type of project you're working on.</p><div className="category-grid big">{categories.map(c => <Link key={c.slug} href={`/categories/${c.slug}`} className="category-card"><div className="category-icon">{c.icon}</div><div><h3>{c.name}</h3><p>{c.description}</p></div><span>→</span></Link>)}</div></div></main><Footer /></>;
}
function Header(){return <header className="site-header"><div className="container nav"><Link href="/" className="brand"><span className="brand-mark">CH</span><span><strong>Canacona Hardware</strong><small>& Paints</small></span></Link><nav><Link href="/products">Products</Link><Link href="/categories">Categories</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><a className="nav-cta" href="https://wa.me/919999999999" target="_blank">WhatsApp</a></div></header>}
function Footer(){return <footer className="footer"><div className="container footer-grid"><div><strong>Canacona Hardware & Paints</strong><p>Paints • Hardware • Tools • Accessories</p></div><div><Link href="/products">Products</Link><Link href="/contact">Contact</Link><Link href="/about">About</Link></div><div><span>Canacona, Goa</span><span>+91 99999 99999</span></div></div></footer>}
