import React from 'react';
import { Text, Card, Divider, Button } from '@mantine/core';

function AboutPage() {
  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      <Card shadow="sm" padding="lg">
        <Text align="center" variant="h2">
          Our Goal
        </Text>
        <Divider />
        <Text size="lg">
          Create a information exchange platform for teens and emerging adults on sexuality and relationship topics.
        </Text>
      </Card>

      <Card shadow="sm" padding="lg" marginTop="lg" style={{ maxWidth: '400px' }}>
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
        <Text align="center" variant="h2" style={{ maxWidth: '300px' }} >
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

      <Card shadow="sm" padding="lg" marginTop="lg">
        <Text align="center" variant="h2">
          Visit Us
        </Text>
        <Divider />
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1V9vrpxRAdI-G66_1-QRtHEgAo0k&ehbc=2E312F"
          width="640"
          height="480"
          title="Empowered Emp location"
          style={{ border: 0, marginTop: '1rem' }}
        />
      </Card>

    </div>
  );
}

export default AboutPage;
