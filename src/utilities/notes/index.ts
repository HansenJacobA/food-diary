import { getCurrentDayRecordsByCurrentDate, upsertDayByDate } from "../record";

export const submitNote = (note: string) => {
  const day = getCurrentDayRecordsByCurrentDate();
  day.notes.unshift(note);
  upsertDayByDate(day);
};
