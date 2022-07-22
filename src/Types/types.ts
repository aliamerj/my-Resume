export interface Certfication {
  id: number;
  name: string;
  photo: string;
  link: string;
}
export interface Project {
  id: number;
  img: string;
  link: string;
  name: string;
  description: string;
  techUsed?: string[];
  techUsedFrontend?: string[];
  techUsedBackend?: string[];
  language: string;
}
