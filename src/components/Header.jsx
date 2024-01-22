import { Heading, Image, Text } from '@chakra-ui/react';
import keyword_bot from '../assets/keyword_bot.png';

const Header = () => {
  return (
    <>
      <Image src={keyword_bot} alt='keyword_bot' width={200} />
      <Heading color='white' marginBottom='1rem'>
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign='center'>
        Insert your text in the space provided, and we will identify the keywords for you.
      </Text>
    </>
  );
};

export default Header;