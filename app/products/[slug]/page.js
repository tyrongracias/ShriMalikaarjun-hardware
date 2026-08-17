import Link from "next/link";
import { products } from "../../../lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return <div className="page container"><h1>Product not found</h1><Link href="/products">Back to products</Link></div>;

  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <Link href="/products" className="back">← Back to products</Link>
          <div className="product-detail">
            <div className={`detail-art ${product.tone}`}><span>{product.short}</span></div>
            <div>
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="detail-copy">{product.longDescription}</p>
              <div className="spec-list">
                <div><span>Category</span><strong>{product.category}</strong></div>
                <div><span>Availability</span><strong>Contact store</strong></div>
                <div><span>Sizes</span><strong>Ask for current options</strong></div>
              </div>
              <a className="button primary" href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Is it available?`)}`} target="_blank">Enquire on WhatsApp</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
function Header() { return <header className="site-header"><div className="container nav"><Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Shri Malikaarjun</strong><small>& Paints</small></span></Link><nav><Link href="/products">Products</Link><Link href="/categories">Categories</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><a className="nav-cta" href="https://wa.me/919999999999" target="_blank">WhatsApp</a></div></header>; }
function Footer() { return <footer className="footer"><div className="container footer-grid"><div><strong>Shri Malikaarjun Hardware & Paints</strong><p>Paints • Hardware • Tools • Accessories</p></div><div><Link href="/products">Products</Link><Link href="/contact">Contact</Link><Link href="/about">About</Link></div><div><span>Canacona, Goa</span><span>+91 99999 99999</span></div></div></footer>; }
