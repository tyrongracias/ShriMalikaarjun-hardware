import Link from "next/link";
import { categories, products } from "../../../lib/catalog";

export function generateStaticParams(){return categories.map(c=>({slug:c.slug}));}

export default async function CategoryPage({params}){
  const {slug}=await params;
  const category=categories.find(c=>c.slug===slug);
  const items=products.filter(p=>p.categorySlug===slug);
  if(!category)return <div className="page container"><h1>Category not found</h1><Link href="/categories">Back to categories</Link></div>;
  return <><Header/><main className="page"><div className="container"><Link href="/categories" className="back">← All categories</Link><p className="eyebrow">{category.icon} {category.name}</p><h1>{category.name}</h1><p className="lead">{category.description}</p><div className="product-grid large">{items.length?items.map(p=><Link key={p.slug} href={`/products/${p.slug}`} className="product-card"><div className={`product-art ${p.tone}`}><span>{p.short}</span></div><div className="product-info"><h3>{p.name}</h3><p>{p.description}</p><span className="product-link">View product →</span></div></Link>):<p>Products for this category will be added soon.</p>}</div></div></main><Footer/></>;
}
function Header(){return <header className="site-header"><div className="container nav"><Link href="/" className="brand"><span className="brand-mark">SM</span><span><strong>Shri Malikaarjun</strong><small>& Paints</small></span></Link><nav><Link href="/products">Products</Link><Link href="/categories">Categories</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><a className="nav-cta" href="https://wa.me/919999999999" target="_blank">WhatsApp</a></div></header>}
function Footer(){return <footer className="footer"><div className="container footer-grid"><div><strong>Shri Malikaarjun Hardware & Paints</strong><p>Paints • Hardware • Tools • Accessories</p></div><div><Link href="/products">Products</Link><Link href="/contact">Contact</Link><Link href="/about">About</Link></div><div><span>Canacona, Goa</span><span>+91 99999 99999</span></div></div></footer>}
