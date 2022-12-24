import {
  Button,
  Card,
  Fade,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { submitRecord, validateRecord } from "../../utilities/record";

export default function RecordCard() {
  const [foodName, setFoodName] = useState("");
  const [cupsOfWater, setCupsOfWater] = useState("");
  const [weight, setWeight] = useState("");
  const [happinessRating, setHappinessRating] = useState("");
  const [stoolRating, setStoolRating] = useState("");
  const [recordNote, setRecordNote] = useState("");
  const [recordNotes, setRecordNotes] = useState([]);
  const toast = useToast();

  const resetValues = () => {
    setFoodName("");
    setCupsOfWater("");
    setWeight("");
    setHappinessRating("");
    setStoolRating("");
    setRecordNote("");
    setRecordNotes([]);
  };

  return (
    <Fade in={true}>
      <Flex direction="column" gap={5}>
        <Card>
          <Input
            placeholder="What did you eat?"
            onChange={function updateFoodName({ target }) {
              setFoodName(target.value);
            }}
            value={foodName}
          />
        </Card>

        <Card>
          <Input
            placeholder="Cups (8oz) of water drank?"
            onChange={function updateCupsOfWater({ target }) {
              setCupsOfWater(target.value);
            }}
            value={cupsOfWater}
          />
        </Card>

        <Card>
          <Input
            placeholder="Current weight (lbs)?"
            onChange={function updateWeight({ target }) {
              setWeight(target.value);
            }}
            value={weight}
          />
        </Card>

        <Card p={2}>
          <Flex justify="center" align="center" direction="column" gap={2}>
            <Text textAlign="center" fontWeight="semibold">
              Happiness Level
            </Text>
            <RadioGroup onChange={setHappinessRating} value={happinessRating}>
              <Stack direction="row">
                <Radio value="1">🙁</Radio>
                <Radio value="2">😕</Radio>
                <Radio value="3">😐</Radio>
                <Radio value="4">🙂</Radio>
                <Radio value="5">😃</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Card>

        <Card p={2}>
          <Flex justify="center" align="center" direction="column" gap={2}>
            <Text textAlign="center" fontWeight="semibold">
              Stool Rating
            </Text>
            <RadioGroup onChange={setStoolRating} value={stoolRating}>
              <Stack direction="row" gap={1}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
                <Radio value="4">4</Radio>
                <Radio value="5">5</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Card>

        <Card gap={3} w={300} p={3}>
          <Textarea
            h={150}
            placeholder="Add a note"
            value={recordNote}
            onChange={function captureCurrentNote(e) {
              setRecordNote(e.target.value);
            }}
          />
          <Button
            onClick={function addNoteToDay() {
              if (!recordNote.split(" ").join("").length) {
                setRecordNote("");
                return;
              }
              const updatedRecordNotes = [...recordNotes];
              updatedRecordNotes.unshift(recordNote);
              setRecordNotes(updatedRecordNotes);
              setRecordNote("");
            }}
          >
            Add Note
          </Button>
        </Card>

        <Fade in={true}>
          <Flex direction="column" gap={5}>
            {recordNotes.map((note: string, noteIndex: number) => (
              <Fade in={true} key={noteIndex}>
                <Card p={3}>{note}</Card>
              </Fade>
            ))}
          </Flex>
        </Fade>

        <Button
          onClick={function addRecordToDay() {
            const validatedRecord = validateRecord({
              foodName,
              weight,
              cupsOfWater,
              stoolRating,
              happinessRating,
              recordNotes,
            });
            submitRecord(validatedRecord);
            resetValues();

            toast({
              title: "Record Saved.",
              description: "Your record has been saved.",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
          }}
        >
          Add Record
        </Button>
      </Flex>
    </Fade>
  );
}
