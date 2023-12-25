export interface ExperienceCardItemType {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: Array<string>;
}
export interface ProjectsCardItemType {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: Array<string>;
  category: string;
  github?: string | undefined;
  webapp: string;
}