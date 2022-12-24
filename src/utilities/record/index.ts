import { getCurrentDayRecordsByCurrentDate, upsertDayByDate } from "../day";
import { Record } from "../../types";

export const submitRecord = (record: Record) => {
  const day = getCurrentDayRecordsByCurrentDate();
  day.records.unshift(record);
  upsertDayByDate(day);
};

export const validateRecord = (record): Record => {
  record.date = new Date().toLocaleDateString();
  record.time = new Date().toLocaleTimeString();
  record.weight = parseInt(record.weight) || 0;
  record.cupsOfWater = parseInt(record.cupsOfWater) || 0;
  record.stoolRating = parseInt(record.stoolRating) || 0;
  record.happinessRating = parseInt(record.happinessRating) || 0;
  return record;
};
