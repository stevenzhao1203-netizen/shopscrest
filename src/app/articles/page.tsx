import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { articles } from "../../data/promotions";

export const metadata = {
  title: "Buying Guides",
  description: "ShopsCrest buying guides for electronics, fashion, skincare, home goods, travel, and everyday shopping."
};

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="subhero">
          <p className="eyebrow">buying guides</p>
          <h1>Articles for comparing everyday products.</h1>
          <p className="lead">
            Short, practical guides across electronics, apparel, skincare, home goods, and travel essentials.
          </p>
        </section>

        <section className="section">
          <div className="article-grid article-grid-wide">
            {articles.map((article) => (
              <article className="article-card" key={article.slug}>
                <Image src={article.image} alt={article.title} width={900} height={675} loading="eager" />
                <div>
                  <span className="tag">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a className="text-link" href={`/articles/${article.slug}`}>
                    Read guide
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
