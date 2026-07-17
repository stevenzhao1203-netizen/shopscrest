import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { getProductReview, products } from "../../../data/promotions";
import ProductFitNotes from "./ProductFitNotes";

const affiliateDisclosure =
  "Disclosure: ShopsCrest may earn a commission from qualifying purchases made through partner or affiliate links.";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProductReview(id);

  return {
    title: product ? `${product.title} Product Note` : "Product Note",
    description: product?.tagline
  };
}

export default async function ProductReviewPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductReview(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <main className="review-page">
        <nav className="review-nav" aria-label="Review navigation">
          <Link href="/">Back to ShopsCrest</Link>
          <span>Product buying notes</span>
        </nav>

        <article className="review-article">
          <header className="review-header">
            <p className="kicker">{product.category} pick</p>
            <h1>{product.title}: what to know before buying</h1>
            <p>{product.tagline}</p>
          </header>

          <figure className="review-hero-image">
            <img src={product.image} alt={product.title} />
          </figure>

          <section className="review-section">
            <h2>Why people look at this product</h2>
            <p>{product.painPoint}</p>
          </section>

          <aside className="inline-referral">
            <p>
              {affiliateDisclosure} Current colors, sizes, bundles, stock, and shipping details can change. The latest
              information is available from the{" "}
              <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer sponsored nofollow">
                merchant website
              </a>
              .
            </p>
          </aside>

          <ProductFitNotes category={product.category} />

          <section className="review-section">
            <h2>How it fits into a routine</h2>
            <p>{product.deepReview}</p>
            <p>
              Before purchasing, review the current product page for specifications, sizing, ingredients, compatibility,
              warranty coverage, and return terms. Those details are controlled by the merchant and may change over time.
            </p>
          </section>

          <aside className="inventory-card">
            <div>
              <strong>Merchant page</strong>
              <span>
                {affiliateDisclosure} Use the retailer page for current availability, pricing, delivery, and support
                information.
              </span>
            </div>
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer sponsored nofollow">
              Visit merchant
            </a>
          </aside>

          <section className="review-section">
            <h2>Quick notes</h2>
            <div className="pros-cons-grid">
              <div className="pros-box">
                <h3>Reasons to consider it</h3>
                <ul>
                  {product.pros.map((pro) => (
                    <li key={pro}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div className="cons-box">
                <h3>Things to keep in mind</h3>
                <ul>
                  {product.cons.map((con) => (
                    <li key={con}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <p className="final-referral">
            {affiliateDisclosure} If this product fits your needs, review current details through the{" "}
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer sponsored nofollow">
              merchant page
            </a>
            .
          </p>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
