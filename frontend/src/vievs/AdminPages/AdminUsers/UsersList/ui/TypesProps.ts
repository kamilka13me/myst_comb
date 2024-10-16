export interface Media {
  name: string;
  idColor: string;
}

export interface MediaProps {
  media: Media[];
}

export interface User {
  id: string;
  name: string;
  date: string;
  media: Media[];
  email: string;
  type_services: string;
}

export interface TypeBgColors {
  yellow: string;
  purple: string;
  orange: string;
  blue: string;
}
