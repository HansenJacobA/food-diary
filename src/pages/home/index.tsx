import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import Greeting from "../../components/greeting";
import RecordCard from "../../components/recordCard";

export default function Home() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      mb={10}
      w={300}
    >
      <Template />
      <Greeting />
      <RecordCard />
    </Flex>
  );
}
