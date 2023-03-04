
import { Box, Text } from '@mantine/core'

const HomePage = () => {
  return (

<Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
      }}
    >
      <Text size='xl' weight='bold' align='center'>
      Welcome to our fantastic Web App
      </Text>
  
      <Text size='xl' weight='bold' align='center'>
      EMPOWERED = ability to do things or make decisions for oneself.
      </Text>
  
    </Box>
  );
};

export default HomePage;
