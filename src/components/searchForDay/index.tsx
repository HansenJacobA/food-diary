import { Card, Fade, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getDayRecordsByDate } from "../../utilities/day";
import { Record } from "../../types";

export default function SearchForDay() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDayRecords, setSelectedDayRecords] = useState([]);

  useEffect(() => {
    const currentDate = getCurrentDate();
    setSelectedDate(currentDate);

    const currentDayRecords = getDayRecordsByDate(
      new Date().toLocaleDateString()
    );
    setSelectedDayRecords(currentDayRecords);
  }, []);

  const getCurrentDate = (): string => {
    const currentDate = new Date().toLocaleDateString().split("/");
    const year = currentDate.pop();
    currentDate.unshift(year);
    const formattedDate = currentDate.join("-");
    return formattedDate;
  };

  return (
    <Fade in={true}>
      <Flex w={300} direction="column" gap={5}>
        <Input
          type="date"
          value={selectedDate}
          onChange={function updateSelectedDate({ target }) {
            setSelectedDate(target.value);
          }}
        />

        <Text fontWeight="light" textAlign="center">
          Select a date to view previous records
        </Text>

        {selectedDayRecords.map((record: Record, recordIndex: number) => (
          <Fade in={true} key={recordIndex}>
            <Card p={3} gap={2}>
              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">Time</Text>
                <Text fontWeight="light">{record.time}</Text>
              </Flex>

              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">Food</Text>
                <Text fontWeight="light">{record.foodName}</Text>
              </Flex>

              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">Cups of water drank</Text>
                <Text fontWeight="light">{record.cupsOfWater}</Text>
              </Flex>

              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">Weight</Text>
                <Text fontWeight="light">{record.weight}</Text>
              </Flex>

              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">Stool Rating</Text>
                <Text fontWeight="light">{record.stoolRating} / 5</Text>
              </Flex>

              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">Happiness Rating</Text>
                <Text fontWeight="light">{record.happinessRating} / 5</Text>
              </Flex>

              <Flex direction="column" textAlign="center">
                <Text fontWeight="bold">Notes</Text>
                {record.recordNotes.map((note, noteIndex) => (
                  <Text key={noteIndex}>{note}</Text>
                ))}
              </Flex>
            </Card>
          </Fade>
        ))}
      </Flex>
    </Fade>
  );
}
