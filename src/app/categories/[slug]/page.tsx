import Image from "next/image";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { articles, categories, getCategory, getProductsByCategory } from "../../../data/promotions";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);

  return {
    title: category ? `${category.name} Finds` : "Category",
    description: category?.description
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  const products = getProductsByCategory(slug).slice(0, 4);
  const categoryArticles = articles.filter((article) => article.categorySlug === slug);

  if (!category) {
    return null;
  }

  return (
    <>
      <SiteHeader />

      <main>
        <section className="subhero">
          <p className="eyebrow">{category.eyebrow}</p>
          <h1>{category.title}</h1>
          <p className="lead">{category.description}</p>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">category picks</p>
              <h2>ShopsCrest finds in {category.name.toLowerCase()}.</h2>
            </div>
          </div>
          <div className="finds-grid">
            {products.map((product) => (
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

        {categoryArticles.length > 0 && (
          <section className="section category-documents">
            <div className="section-head">
              <div>
                <p className="eyebrow">buying guides</p>
                <h2>Guides for comparing {category.name.toLowerCase()} products.</h2>
              </div>
            </div>
            <div className="category-doc-grid">
              {categoryArticles.map((article) => (
                <a className="category-doc-card" href={`/articles/${article.slug}`} key={article.slug}>
                  <span>{article.readTime}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <strong>Read guide</strong>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
