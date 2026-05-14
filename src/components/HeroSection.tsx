import { Play, Plus, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-drama.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Featured drama"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container flex items-end pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              Featured
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-semibold text-foreground">9.1</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            Alchemy of Souls
          </h1>

          <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
            A powerful sorceress in a blind woman's body encounters a man from a
            prestigious family who wants to change his destiny.
          </p>

          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span>2022</span>
            <span>·</span>
            <span>30 Episodes</span>
            <span>·</span>
            <span>Fantasy, Romance</span>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <Button size="lg" className="gap-2">
              <Play className="h-4 w-4" />
              Watch Trailer
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-muted">
              <Plus className="h-4 w-4" />
              Add to Watchlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
