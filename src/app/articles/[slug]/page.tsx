import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { articles, getArticle, getCategory, getProduct, getProductsByCategory } from "../../../data/promotions";

const affiliateDisclosure =
  "Disclosure: ShopsCrest may earn a commission from qualifying purchases made through partner or affiliate links.";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  return {
    title: article ? article.title : "Buying Guide",
    description: article?.excerpt
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  const category = article ? getCategory(article.categorySlug) : null;
  const featuredProduct = article?.featuredProductSlug ? getProduct(article.featuredProductSlug) : null;
  const relatedProducts = article ? getProductsByCategory(article.categorySlug).slice(0, 3) : [];

  if (!article) {
    return null;
  }

  return (
    <>
      <SiteHeader />

      <main>
        <article className="article-detail">
          <div className="article-detail-copy">
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="article-meta">{article.readTime}</p>
            <p className="lead">{article.excerpt}</p>
          </div>
          <figure className="article-detail-image">
            <Image src={article.image} alt={article.title} width={1200} height={900} priority />
          </figure>
        </article>

        <section className="article-body">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          {featuredProduct && (
            <aside className="article-cta">
              <span className="tag">{featuredProduct.category}</span>
              <h2>Related product</h2>
              <p>
                This guide mentions the type of problem that {featuredProduct.title.toLowerCase()} is often bought to
                solve. Visit {featuredProduct.brand} for current product details.
              </p>
              <p className="affiliate-note">{affiliateDisclosure}</p>
              <div className="detail-actions">
                <a
                  className="button primary"
                  href={featuredProduct.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                >
                  Visit {featuredProduct.brand}
                </a>
                <a className="button secondary" href={`/products/${featuredProduct.slug}`}>
                  View product note
                </a>
              </div>
            </aside>
          )}
        </section>

        {relatedProducts.length > 0 && (
          <section className="section related-section">
            <div className="section-head">
              <div>
                <p className="eyebrow">related finds</p>
                <h2>More products in this category.</h2>
              </div>
            </div>
            <div className="finds-grid related-grid">
              {relatedProducts.map((product) => (
                <article className="find-card" key={product.slug}>
                  <a className="find-image" href={`/products/${product.slug}`}>
                    <Image src={product.image} alt={product.title} width={900} height={675} loading="eager" />
                  </a>
                  <div className="find-content">
                    <div className="find-meta">
                      <span className="tag">{product.category}</span>
                      <strong>{product.price}</strong>
                    </div>
                    <h3>{product.title}</h3>
                    <p>{product.copy}</p>
                    <div className="find-footer">
                      <span>{product.brand}</span>
                      <a href={`/products/${product.slug}`}>View details</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
