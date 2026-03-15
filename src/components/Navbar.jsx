import { siteConfig } from "../config/site";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>{siteConfig.name}</h2>

      <div>
        <a href={siteConfig.twitter} target="_blank">Twitter</a>
        <a href={siteConfig.website} target="_blank">Website</a>
      </div>
    </nav>
  );
}
