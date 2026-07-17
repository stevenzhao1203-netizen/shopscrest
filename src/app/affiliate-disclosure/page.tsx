import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure for ShopsCrest."
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subhero">
          <p className="eyebrow">affiliate disclosure</p>
          <h1>Affiliate Disclosure</h1>
          <p className="lead">
            Some links on ShopsCrest may lead to merchant or brand websites.
          </p>
        </section>
        <section className="content-page">
          <p>
            ShopsCrest may use affiliate links. If you click one of these links and make a qualifying purchase, we may
            receive a commission from the merchant.
          </p>
          <p>
            This does not add any extra cost to your purchase. The final price, taxes, shipping, availability, and return
            terms are set by the merchant.
          </p>
          <p>
            Affiliate relationships do not require us to list every product from a brand. We choose topics that fit the
            site categories and update pages when a section needs improvement.
          </p>
          <h2>Product information</h2>
          <p>
            Product details, prices, availability, shipping terms, and return policies can change at any time. Please
            verify current information on the official merchant website before purchasing.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
