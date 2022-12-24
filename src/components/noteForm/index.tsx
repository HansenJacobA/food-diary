import { Button, Card, Flex, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { submitNote } from "../../utilities/notes";

export default function NoteForm() {
  const [note, setNote] = useState("");
  const [noteSubmitted, setNoteSubmitted] = useState(false);

  useEffect(() => {
    //
  }, [noteSubmitted]);

  return (
    <Card gap={5} w={300} p={3}>
      <Textarea
        placeholder="Add a note"
        value={note}
        onChange={function captureCurrentNote(e) {
          setNote(e.target.value);
        }}
        h={150}
      />
      <Button
        size="sm"
        onClick={function addNoteToProfile() {
          if (!note.split(" ").join("").length) {
            setNote("");
            return;
          }
          submitNote(note);
          setNote("");
        }}
      >
        Add Note
      </Button>
    </Card>
  );
}
