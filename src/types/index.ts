export interface NavBarLinkNameAndUrl {
  linkName: string;
  url: string;
}

export interface Day {
  date: string;
  records: Record[];
  notes: string[];
}

export interface Record {
  date: string;
  time: string;
  foodName: string;
  cupsOfWater: number;
  weight: number;
  stoolRating: number;
  happinessRating: number;
  recordNotes: string[];
}
