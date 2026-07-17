import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { articles, categories, products, promotedBrands } from "../data/promotions";

const categoryImages: Record<string, string> = {
  electronics: "/images/category-electronics.jpg",
  apparel: "/images/category-apparel.jpg",
  skincare: "/images/category-skincare.jpg",
  home: "/images/category-home.jpg",
  travel: "/images/category-travel.jpg"
};

const featuredProducts = products.slice(0, 5);
const editorialProducts = products.slice(5, 11);

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="catalog-home">
        <section className="magazine-hero">
          <div className="hero-visual">
            <img
              src="/images/hero-living-room.jpg"
              alt="Bright modern living room with refined home decor and natural light"
            />
          </div>
          <div className="hero-panel">
            <p className="kicker">The independent edit</p>
            <h1>
              <span className="title-desktop">
                The Everyday
                <br />
                Essentials Edit.
              </span>
              <span className="title-mobile">
                The Everyday
                <br />
                Essentials
                <br />
                Edit.
              </span>
            </h1>
            <p>
              A calm shopping guide for tech, clothing, skincare, home goods, and travel pieces worth a closer look.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#editorial-picks">
                Explore the edit
              </a>
            </div>
          </div>
        </section>

        <section className="catalog-strip" aria-label="ShopsCrest catalog stats">
          <div>
            <strong>5</strong>
            <span>curated departments</span>
          </div>
          <div>
            <strong>20</strong>
            <span>product notes across core categories</span>
          </div>
          <div>
            <strong>8</strong>
            <span>editorial buying guides</span>
          </div>
          <div>
            <strong>Disclosure</strong>
            <span>transparent shopping disclosure</span>
          </div>
        </section>

        <section className="department-showcase" id="categories">
          <div className="catalog-heading">
            <p className="kicker">The ShopsCrest edit</p>
            <h2>A considered selection across the products people live with every day.</h2>
          </div>
          <div className="department-grid">
            {categories.map((category) => (
              <a className="department-card" href={`/categories/${category.slug}`} key={category.slug}>
                <img src={categoryImages[category.slug]} alt={`${category.name} product category`} />
                <span>{category.name}</span>
                <p>{category.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="editorial-section" id="editorial-picks">
          <div className="catalog-heading split">
            <div>
              <p className="kicker">Selected finds</p>
              <h2>Quietly useful pieces for work, travel, home, and personal care.</h2>
            </div>
            <p>
              Each product note explains where the item fits, what to review, and how to reach current merchant details.
            </p>
          </div>

          <div className="feature-grid">
            {featuredProducts.map((product, index) => (
              <article className={index === 0 ? "feature-card lead-feature" : "feature-card"} key={product.id}>
                <a href={`/products/${product.id}`} className="feature-image">
                  <img src={product.image} alt={product.title} />
                </a>
                <div className="feature-copy">
                  <p className="kicker">{product.category}</p>
                  <h3>{product.title}</h3>
                  <p>{product.tagline}</p>
                  <a className="text-link" href={`/products/${product.id}`}>
                    Read product note
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="journal-section" id="articles">
          <div className="catalog-heading">
            <p className="kicker">Field notes</p>
            <h2>Plain-spoken guides for narrowing the right purchase.</h2>
          </div>
          <div className="journal-grid">
            {articles.slice(0, 4).map((article) => (
              <a className="journal-card" href={`/articles/${article.slug}`} key={article.slug}>
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="product-index" id="finds">
          <div className="catalog-heading split">
            <div>
              <p className="kicker">The extended shelf</p>
              <h2>Additional picks for wardrobes, routines, rooms, and trips.</h2>
            </div>
            <a className="button secondary" href="/articles">
              View all guides
            </a>
          </div>
          <div className="index-grid">
            {editorialProducts.map((product) => (
              <a className="index-row" href={`/products/${product.id}`} key={product.id}>
                <img src={product.image} alt={product.title} />
                <div>
                  <span>{product.category}</span>
                  <h3>{product.title}</h3>
                  <p>{product.tagline}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="brand-marquee" id="brands">
          <div className="catalog-heading">
            <p className="kicker">Merchant references</p>
            <h2>Direct paths to current product information.</h2>
          </div>
          <div className="brand-pill-grid">
            {promotedBrands.map((brand) => (
              <a href={brand.url} target="_blank" rel="sponsored nofollow noopener noreferrer" key={brand.name}>
                <strong>{brand.name}</strong>
                <span>{brand.category}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="compliance-band">
          <div>
            <p className="kicker">Disclosure</p>
            <h2>Independent notes, transparent links.</h2>
            <p>
              ShopsCrest keeps pages concise and easy to scan. Prices, stock, shipping, and return terms should always be
              reviewed on the merchant site.
            </p>
            <p className="homepage-disclosure">
              Affiliate disclosure: ShopsCrest may earn a commission when visitors click links to merchant websites
              and complete qualifying purchases. This does not change the price paid by the visitor.
            </p>
          </div>
          <a className="button primary" href="/affiliate-disclosure">
            Read disclosure
          </a>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
