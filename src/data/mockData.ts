export interface Drama {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  genres: string[];
  year: number;
  country: string;
  episodes: number;
  duration: string;
  platform: string[];
  status: "Ongoing" | "Completed" | "Upcoming";
  synopsis: string;
}

export interface Actor {
  id: string;
  name: string;
  photoUrl: string;
  nationality: string;
  age: number;
}

export const dramas: Drama[] = [
  {
    id: "1",
    title: "Alchemy of Souls",
    posterUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    rating: 9.1,
    genres: ["Fantasy", "Romance", "Historical"],
    year: 2022,
    country: "South Korea",
    episodes: 30,
    duration: "75 min",
    platform: ["Netflix"],
    status: "Completed",
    synopsis: "A powerful sorceress in a blind woman's body encounters a man from a prestigious family who wants her help to change his destiny.",
  },
  {
    id: "2",
    title: "Crash Landing on You",
    posterUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=600&fit=crop",
    rating: 9.3,
    genres: ["Romance", "Comedy", "Drama"],
    year: 2019,
    country: "South Korea",
    episodes: 16,
    duration: "85 min",
    platform: ["Netflix"],
    status: "Completed",
    synopsis: "A South Korean heiress accidentally paraglides into North Korea, where she meets an army officer who decides to help her hide.",
  },
  {
    id: "3",
    title: "Vincenzo",
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    rating: 8.9,
    genres: ["Comedy", "Crime", "Drama"],
    year: 2021,
    country: "South Korea",
    episodes: 20,
    duration: "80 min",
    platform: ["Netflix"],
    status: "Completed",
    synopsis: "An Italian lawyer of Korean descent returns to Seoul and uses his Mafia expertise to take down villains.",
  },
  {
    id: "4",
    title: "Goblin",
    posterUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop",
    rating: 9.2,
    genres: ["Fantasy", "Romance", "Drama"],
    year: 2016,
    country: "South Korea",
    episodes: 16,
    duration: "70 min",
    platform: ["Viki"],
    status: "Completed",
    synopsis: "A modern-day goblin seeks a human bride to end his immortal life, but finds something unexpected.",
  },
  {
    id: "5",
    title: "My Love from the Star",
    posterUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
    rating: 8.8,
    genres: ["Romance", "Comedy", "Sci-Fi"],
    year: 2013,
    country: "South Korea",
    episodes: 21,
    duration: "65 min",
    platform: ["Viki", "Amazon"],
    status: "Completed",
    synopsis: "An alien who landed on Earth 400 years ago falls in love with a top actress in modern-day Seoul.",
  },
  {
    id: "6",
    title: "Squid Game",
    posterUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    rating: 8.7,
    genres: ["Thriller", "Drama", "Mystery"],
    year: 2021,
    country: "South Korea",
    episodes: 9,
    duration: "60 min",
    platform: ["Netflix"],
    status: "Completed",
    synopsis: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.",
  },
  {
    id: "7",
    title: "Reply 1988",
    posterUrl: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?w=400&h=600&fit=crop",
    rating: 9.4,
    genres: ["Drama", "Comedy", "Romance"],
    year: 2015,
    country: "South Korea",
    episodes: 20,
    duration: "90 min",
    platform: ["Netflix"],
    status: "Completed",
    synopsis: "Five childhood friends and their families living in the same neighborhood navigate life, love, and growing up in 1988 Seoul.",
  },
  {
    id: "8",
    title: "Extraordinary Attorney Woo",
    posterUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=600&fit=crop",
    rating: 9.0,
    genres: ["Legal", "Comedy", "Drama"],
    year: 2022,
    country: "South Korea",
    episodes: 16,
    duration: "77 min",
    platform: ["Netflix"],
    status: "Completed",
    synopsis: "A brilliant attorney with autism navigates the challenges of a prestigious law firm and the courtroom.",
  },
  {
    id: "9",
    title: "The Glory",
    posterUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    rating: 8.9,
    genres: ["Thriller", "Drama", "Revenge"],
    year: 2022,
    country: "South Korea",
    episodes: 16,
    duration: "55 min",
    platform: ["Netflix"],
    status: "Completed",
    synopsis: "A woman who suffered horrific abuse in school meticulously plans her revenge against her tormentors.",
  },
  {
    id: "10",
    title: "Hotel del Luna",
    posterUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop",
    rating: 8.8,
    genres: ["Fantasy", "Romance", "Comedy"],
    year: 2019,
    country: "South Korea",
    episodes: 16,
    duration: "75 min",
    platform: ["Viki", "Netflix"],
    status: "Completed",
    synopsis: "The owner of a mysterious hotel that caters to ghosts is forced to employ a new manager with unexpected consequences.",
  },
];

export const trendingDramas = dramas.slice(0, 8);
export const topRatedDramas = [...dramas].sort((a, b) => b.rating - a.rating).slice(0, 8);
export const newReleases = dramas.filter(d => d.year >= 2022);
export const mostWatched = [dramas[5], dramas[1], dramas[7], dramas[2], dramas[8], dramas[0]];

export const actors: Actor[] = [
  { id: "1", name: "Song Joong-ki", photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", nationality: "South Korean", age: 38 },
  { id: "2", name: "Son Ye-jin", photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", nationality: "South Korean", age: 41 },
  { id: "3", name: "Lee Min-ho", photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", nationality: "South Korean", age: 36 },
  { id: "4", name: "Jun Ji-hyun", photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", nationality: "South Korean", age: 42 },
  { id: "5", name: "Park Seo-joon", photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", nationality: "South Korean", age: 35 },
  { id: "6", name: "IU (Lee Ji-eun)", photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face", nationality: "South Korean", age: 30 },
];

export const genres = ["Romance", "Fantasy", "Thriller", "Comedy", "Drama", "Historical", "Crime", "Sci-Fi", "Mystery", "Legal", "Revenge", "Action"];
export const countries = ["South Korea", "Japan", "China", "Thailand", "Taiwan"];
export const platforms = ["Netflix", "Viki", "Amazon", "Disney+", "WeTV"];
