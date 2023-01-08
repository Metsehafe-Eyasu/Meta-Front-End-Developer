import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack background="white" color="black" borderRadius={12}>
      <Image src={imageSrc} borderRadius={12} />
      <VStack 
        alignItems="flex-start" 
        justifyContent="space-between"
        p={4}
      >
        <Heading as='h3' size='md'>{title}</Heading>
        <Text color='#777'>{description}</Text>
        <HStack fontWeight='bold'>
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size='1x'/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
