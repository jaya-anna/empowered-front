import React from 'react';
import { Text, Card, Divider, Button } from '@mantine/core';

function AboutPage() {
  return (
    <div>
      <Card shadow="sm" padding="lg">
        <Text align="center" variant="h2">
          Our Goal
        </Text>
        <Divider />
        <Text size="lg">
          Create a information exchange platform for teens and emerging adults on sexuality and relationship topics.
        </Text>
      </Card>

      <Card shadow="sm" padding="lg" marginTop="lg">
        <Text align="center" variant="h2">
          Our Mission
        </Text>
        <Divider />
        <Text size="lg">
          We believe that everyone deserves access to accurate and up-to-date information about their bodies and their sexual health, and we strive to provide that through our web application.
        </Text>
      </Card>

      <Card shadow="sm" padding="lg" marginTop="lg">
        <Text align="center" variant="h2">
          The Team
        </Text>
        <Divider />
        <Text size="lg">
          Anna, Leila, Diana
        </Text>
      </Card>

      <Card shadow="sm" padding="lg" marginTop="lg">
        <Text align="center" variant="h2">
          Follow us on Instagram
        </Text>
        <Divider />
        <Button
          fullWidth
          variant="light"
          component="a"
          href="https://www.instagram.com/empoweredemp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @empoweredemp
        </Button>
      </Card>
    </div>
  );
}

export default AboutPage;
