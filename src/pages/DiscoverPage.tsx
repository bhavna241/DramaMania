import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DramaCard from "@/components/DramaCard";
import { dramas, genres, countries, platforms } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DiscoverPage() {
  const [query, setQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleGenre = (g: string) =>
    setSelectedGenres((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );

  const filtered = useMemo(() => {
    return dramas.filter((d) => {
      const matchesQuery =
        !query || d.title.toLowerCase().includes(query.toLowerCase());
      const matchesGenre =
        selectedGenres.length === 0 ||
        selectedGenres.some((g) => d.genres.includes(g));
      return matchesQuery && matchesGenre;
    });
  }, [query, selectedGenres]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-12">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
          Discover
        </h1>
        <p className="text-muted-foreground mt-1">
          Find your next favorite drama
        </p>

        {/* Search bar */}
        <div className="flex gap-2 mt-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search dramas, actors, genres..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 p-4 rounded-lg bg-card border border-border animate-fade-in">
            <h3 className="text-sm font-semibold text-foreground mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((g) => (
                <Badge
                  key={g}
                  variant={selectedGenres.includes(g) ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => toggleGenre(g)}
                >
                  {g}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          {filtered.map((drama, i) => (
            <div key={drama.id}>
              <DramaCard drama={drama} index={i} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No dramas found. Try adjusting your filters.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
