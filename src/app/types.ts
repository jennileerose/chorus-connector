export type Location = {
    city: string;
    state: string;
}

export type ChorusData = {
    id: string;
    name: string;
    description: string;
    contactEmail: string;
    location: Location;
  };

export type ChorusDataForTable = {
    id: string;
    name: string;
    description: string;
    contactEmail: string;
    locationCity: string;
    locationState: string;
}