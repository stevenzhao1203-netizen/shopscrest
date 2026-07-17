import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Contact",
  description: "Contact ShopsCrest."
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subhero">
          <p className="eyebrow">contact</p>
          <h1>Contact ShopsCrest.</h1>
          <p className="lead">For product suggestions, corrections, partnerships, or general questions, email us.</p>
        </section>
        <section className="content-page">
          <h2>Email</h2>
          <p>
            You can contact ShopsCrest at <a href="mailto:hello@shopscrest.com">hello@shopscrest.com</a>.
          </p>
          <h2>Partnership notes</h2>
          <p>
            ShopsCrest may work with affiliate programs, brand partners, and approved merchants across electronics,
            fashion, beauty, home, and travel categories. We do not guarantee placement for every product or offer.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
