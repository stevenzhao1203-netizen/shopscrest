import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "About",
  description: "About ShopsCrest and how the site organizes shopping information."
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subhero">
          <p className="eyebrow">about shopscrest</p>
          <h1>About Us</h1>
          <p className="lead">
            Shopping notes across electronics, apparel, skincare, home, and travel.
          </p>
        </section>
        <section className="content-page">
          <p>
            ShopsCrest is a small shopping guide website. We organize products from familiar categories such as
            electronics, apparel, skincare, home goods, and travel so readers can build a shortlist before leaving for a
            merchant site.
          </p>
          <p>
            The site is built around short product pages, category pages, and buying guides. We avoid long ratings and
            user comments because most readers are looking for a quick overview before checking the current offer
            directly with the brand or retailer.
          </p>
          <h2>Editorial approach</h2>
          <p>
            We focus on product use cases, common trade-offs, and details to review before purchase. Product
            availability, prices, promotions, shipping terms, and return policies are controlled by the merchant website.
          </p>
          <p>
            Traffic primarily comes from search and paid channels, including Google Ads, with visitors directed to
            ShopsCrest content before they choose whether to visit a merchant website.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
