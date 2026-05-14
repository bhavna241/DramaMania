import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Drama } from "@/data/mockData";
import DramaCard from "./DramaCard";
import { Button } from "@/components/ui/button";

interface ContentRowProps {
  title: string;
  dramas: Drama[];
  subtitle?: string;
}

export default function ContentRow({ title, dramas, subtitle }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 600;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))]"
      >
        {dramas.map((drama, i) => (
          <DramaCard key={drama.id} drama={drama} index={i} />
        ))}
      </div>
    </section>
  );
}
