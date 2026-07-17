import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="ShopsCrest home">
        <Image src="/assets/shopscrest-logo-v2.svg" alt="ShopsCrest shopping guides" width={302} height={68} priority />
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="/#finds">Picks</a>
        <a href="/#categories">Categories</a>
        <a href="/articles">Guides</a>
        <a href="/#brands">Brands</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
