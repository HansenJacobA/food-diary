import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function seedUp(): void {
  const records = getValueByKey("records");
  if (records === null) {
    setValueByKey("records", []);
  }
}
