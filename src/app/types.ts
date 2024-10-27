export type Location = {
    city: string;
    state: string;
}

export type Chorus = {
    id: string;
    name: string;
    description: string;
    contactEmail: string;
    location: Location;
  };