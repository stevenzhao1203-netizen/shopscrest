import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ShopsCrest."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="subhero">
          <p className="eyebrow">privacy policy</p>
          <h1>Privacy policy for ShopsCrest.</h1>
          <p className="lead">This policy describes basic data practices for visitors to shopscrest.com.</p>
        </section>
        <section className="content-page">
          <h2>Information we collect</h2>
          <p>
            ShopsCrest does not require visitors to create an account. If you contact us by email, we may receive your
            email address and any information you choose to include in the message.
          </p>
          <h2>Analytics and hosting</h2>
          <p>
            Our hosting provider and analytics tools may process basic technical information such as browser type,
            device information, referral pages, and approximate usage data to help operate and protect the website.
          </p>
          <h2>Affiliate links</h2>
          <p>
            When you click an external brand or affiliate link, the destination website may collect information under
            its own privacy policy. Please review the policies of those websites before making a purchase.
          </p>
          <h2>Contact</h2>
          <p>Questions about this policy can be sent to hello@shopscrest.com.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
