import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-12">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-3">
              <span className="text-primary">Drama</span>Vault
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your personal library for drama discovery and community.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Explore</h4>
            <div className="flex flex-col gap-2">
              {["Trending", "Top Rated", "New Releases", "Genres"].map((item) => (
                <Link key={item} to="/discover" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Community</h4>
            <div className="flex flex-col gap-2">
              {["Forums", "Lists", "Reviews", "Calendar"].map((item) => (
                <Link key={item} to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
            <div className="flex flex-col gap-2">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <span key={item} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          © 2026 DramaVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
