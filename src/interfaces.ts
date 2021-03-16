export interface BioInterface {
  name: string;
  tagline: string;
  email: string;
  website: string;
  location: string;
  phoneNumber: string;
  objective: string;
  shortDescription: string;
}

export interface SocialLinkInterface {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface LanguageInterface {
  id: string;
  name: string;
  level: string;
}

export interface TechnologyInterface {
  id: string;
  name: string;
  icon: string;
}

export interface EducationInterface {
  id: string;
  title: string;
  institution: string;
  shortDescription: string;
  startDate: string;
  endDate?: string;
}

export interface ProjectInterface {
  id: string;
  title: string;
  githubRepo: string;
  liveProject: string;
  shortDescription: string;
  technologies: string[];
}

export interface PositionInterface {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  achievements: string[];
}