import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Actor } from "@/data/mockData";
import ActorCard from "./ActorCard";
import { Button } from "@/components/ui/button";

interface ActorRowProps {
  actors: Actor[];
}

export default function ActorRow({ actors }: ActorRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-serif font-semibold text-foreground">
            Popular Actors
          </h2>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => scroll("left")}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => scroll("right")}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))]"
      >
        {actors.map((actor, i) => (
          <ActorCard key={actor.id} actor={actor} index={i} />
        ))}
      </div>
    </section>
  );
}
