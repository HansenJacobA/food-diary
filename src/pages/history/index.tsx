import { Flex } from "@chakra-ui/react";
import Template from "../../components/template";
import Greeting from "../../components/greeting";
import SearchForDay from "../../components/searchForDay";

export default function History() {
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
      <SearchForDay />
    </Flex>
  );
}
