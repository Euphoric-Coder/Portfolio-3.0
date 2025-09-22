export interface Project {
  id: number;
  title: string;
  date: string;
  role: string;
  image: string;
  tags: string[];
  shortDescription: string;
  longDescription: string;
  features: string[];
  github: string;
  demo: string;
  video: string;
  live?: boolean; // optional flag for "LIVE" badge
}

export interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: {
    name: string;
    expertise: string; // Changed from percentage to expertise level
  }[];
}
