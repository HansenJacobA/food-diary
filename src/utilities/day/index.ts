import { Day } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

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

export const getDayRecordsByDate = (date: string) => {
  const days = getValueByKey("days");
  const day = days[date];
  return day?.records || [];
};
