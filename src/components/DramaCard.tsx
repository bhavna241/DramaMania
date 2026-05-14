import { Star } from "lucide-react";
import type { Drama } from "@/data/mockData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface DramaCardProps {
  drama: Drama;
  index?: number;
}

const platformColors: Record<string, string> = {
  Netflix: "bg-curtain text-accent-foreground",
  Viki: "bg-primary text-primary-foreground",
  Amazon: "bg-secondary text-secondary-foreground",
  "Disney+": "bg-secondary text-secondary-foreground",
};

export default function DramaCard({ drama, index = 0 }: DramaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex-shrink-0 w-[180px] sm:w-[200px] md:w-auto cursor-pointer"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-muted">
        <img
          src={drama.posterUrl}
          alt={drama.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          <div className="flex flex-wrap gap-1">
            {drama.genres.slice(0, 2).map((g) => (
              <span key={g} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-primary/20 text-primary">
                {g}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {drama.episodes} eps · {drama.duration}
          </p>
        </div>

        {/* Rating badge */}
        <div className="absolute top-2 right-2 flex items-center gap-0.5 bg-background/80 backdrop-blur-sm rounded-full px-1.5 py-0.5">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="text-xs font-semibold text-foreground">{drama.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-2 px-0.5">
        <h3 className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
          {drama.title}
        </h3>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-xs text-muted-foreground">{drama.year}</span>
          {drama.platform.slice(0, 1).map((p) => (
            <Badge key={p} variant="secondary" className="text-[10px] h-4 px-1.5">
              {p}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
