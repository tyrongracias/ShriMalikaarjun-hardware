import Link from "next/link";
import { products, getCategory, getSubcategory } from "../../../lib/catalog";
import { Header, Footer } from "../../components/SiteChrome";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div className="page container"><h1>Product not found.</h1></div>;
  }

  const category = getCategory(product.categorySlug);
  const subcategory = getSubcategory(product.categorySlug, product.subcategory);

  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <Link href={`/categories/${product.categorySlug}`} className="back">
            ← BACK TO {product.category.toUpperCase()}
          </Link>

          <div className="product-detail pro-detail">
            <div className={`detail-art ${product.tone}`}>
              {product.image ? <img src={product.image} alt="" className="detail-photo" /> : null}
              <span>{product.short}</span>
            </div>

            <div>
              <span className="product-category">{product.brand || product.category}</span>
              <h1>{product.name}</h1>
              <p className="detail-copy">{product.longDescription}</p>

              <div className="spec-list">
                <div><span>CATEGORY</span><strong>{category?.name || product.category}</strong></div>
                <div><span>PRODUCT TYPE</span><strong>{subcategory?.name || "GENERAL"}</strong></div>
                <div><span>BRAND</span><strong>{product.brand || "VARIOUS"}</strong></div>
                <div><span>AVAILABILITY</span><strong>{product.available === false ? "CHECK STORE" : "CONTACT STORE"}</strong></div>
              </div>

              <div className="detail-actions">
                <a
                  className="btn btn-orange"
                  href={`https://wa.me/918310248961?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Is it available?`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  ENQUIRE ON WHATSAPP
                </a>
                <Link href={`/categories/${product.categorySlug}`} className="btn btn-outline-black">
                  VIEW CATEGORY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
