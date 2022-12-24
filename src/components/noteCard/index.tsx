import { Button, Card, Fade, Flex, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Day } from "../../types";
import { submitNote } from "../../utilities/notes";
import { getCurrentDayRecordsByCurrentDate } from "../../utilities/day";
import { templateDay } from "../../utilities/day";

export default function NoteCard() {
  const [note, setNote] = useState("");
  const [currentDay, setCurrentDay] = useState<Day>(templateDay);
  const [noteSubmitted, setNoteSubmitted] = useState(false);

  useEffect(() => {
    const day = getCurrentDayRecordsByCurrentDate();
    setCurrentDay(day);
  }, [noteSubmitted]);

  return (
    <Flex direction="column" gap={5}>
      <Fade in={true}>
        <Card gap={3} w={300} p={3}>
          <Textarea
            h={150}
            placeholder="Add a note"
            value={note}
            onChange={function captureCurrentNote(e) {
              setNote(e.target.value);
            }}
          />
          <Button
            onClick={function addNoteToDay() {
              if (!note.split(" ").join("").length) {
                setNote("");
                return;
              }
              submitNote(note);
              setNoteSubmitted(!noteSubmitted);
              setNote("");
            }}
          >
            Add Note
          </Button>
        </Card>
      </Fade>

      <Fade in={true}>
        <Flex direction="column" gap={5}>
          {currentDay.notes.map((note: string, noteIndex: number) => (
            <Fade in={true} key={noteIndex}>
              <Card p={3}>{note}</Card>
            </Fade>
          ))}
        </Flex>
      </Fade>
    </Flex>
  );
}
