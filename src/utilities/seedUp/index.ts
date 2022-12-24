import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function seedUp(): void {
  const days = getValueByKey("days");
  if (days === null) {
    setValueByKey("days", {});
  }
}
