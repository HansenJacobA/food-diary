import { Day, Record } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const templateRecord: Record = {
  date: new Date().toLocaleDateString(),
  time: new Date().toLocaleTimeString(),
  foodName: "",
  weight: 0,
  cupsOfWater: 0,
  stoolRating: 0,
  happinessRating: 0,
  feelingRating: 0,
  recordNotes: [],
};

export const templateDay: Day = {
  date: new Date().toLocaleDateString(),
  records: [],
  notes: [],
};

export const getCurrentDayRecordsByCurrentDate = (): Day => {
  const days = getValueByKey("days");
  const currentDate = new Date().toLocaleDateString();
  return days[currentDate] || { date: currentDate, records: [], notes: [] };
};

export const upsertDayByDate = (day: Day): void => {
  const days = getValueByKey("days");
  days[day.date] = day;
  setValueByKey("days", days);
};
