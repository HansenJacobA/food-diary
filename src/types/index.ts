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
  weight: number;
  cupsOfWater: number;
  stoolRating: number;
  happinessRating: number;
  feelingRating: number;
  recordNotes: string[];
}
