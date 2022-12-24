import { getCurrentDayRecordsByCurrentDate, upsertDayByDate } from "../day";

export const submitNote = (note: string) => {
  const day = getCurrentDayRecordsByCurrentDate();
  day.notes.unshift(note);
  upsertDayByDate(day);
};
