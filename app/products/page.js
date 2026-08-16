import Link from "next/link";
import { products } from "../../lib/catalog";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <p className="eyebrow">PRODUCT CATALOGUE</p>
          <h1>Products</h1>
          <p className="lead">Browse our range of paints, hardware, tools, waterproofing and accessories.</p>
          <div className="product-grid large">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="product-card">
                <div className={`product-art ${product.tone}`}><span>{product.short}</span></div>
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
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return <header className="site-header"><div className="container nav"><Link href="/" className="brand"><span className="brand-mark">CH</span><span><strong>Canacona Hardware</strong><small>& Paints</small></span></Link><nav><Link href="/products">Products</Link><Link href="/categories">Categories</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><a className="nav-cta" href="https://wa.me/919999999999" target="_blank">WhatsApp</a></div></header>;
}
function Footer() { return <footer className="footer"><div className="container footer-grid"><div><strong>Canacona Hardware & Paints</strong><p>Paints • Hardware • Tools • Accessories</p></div><div><Link href="/products">Products</Link><Link href="/contact">Contact</Link><Link href="/about">About</Link></div><div><span>Canacona, Goa</span><span>+91 99999 99999</span></div></div></footer>; }
