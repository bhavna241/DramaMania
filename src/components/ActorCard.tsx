import type { Actor } from "@/data/mockData";
import { motion } from "framer-motion";

interface ActorCardProps {
  actor: Actor;
  index?: number;
}

export default function ActorCard({ actor, index = 0 }: ActorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex-shrink-0 w-[130px] sm:w-[150px] group cursor-pointer text-center"
    >
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden bg-muted ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
        <img
          src={actor.photoUrl}
          alt={actor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h3 className="mt-2 text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
        {actor.name}
      </h3>
      <p className="text-xs text-muted-foreground">{actor.nationality}</p>
    </motion.div>
  );
}
