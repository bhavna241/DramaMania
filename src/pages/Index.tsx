import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentRow from "@/components/ContentRow";
import ActorRow from "@/components/ActorRow";
import Footer from "@/components/Footer";
import { trendingDramas, topRatedDramas, newReleases, mostWatched, actors } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <div className="mt-2">
        <ContentRow
          title="Trending Today"
          subtitle="What everyone's watching right now"
          dramas={trendingDramas}
        />
        <ContentRow
          title="Top Rated Dramas"
          subtitle="Highest rated by our community"
          dramas={topRatedDramas}
        />
        <ContentRow
          title="Most Watched This Week"
          dramas={mostWatched}
        />

        <ActorRow actors={actors} />

        <ContentRow
          title="New Releases"
          subtitle="Fresh titles just for you"
          dramas={newReleases}
        />
        <ContentRow
          title="Recommended For You"
          subtitle="Based on your taste profile"
          dramas={[...trendingDramas].reverse()}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
