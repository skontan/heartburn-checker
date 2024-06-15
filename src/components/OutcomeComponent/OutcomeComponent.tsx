import { Button, Container, Typography } from '@mui/material';
import React from 'react';

type OutcomeComponentProps = {
  text: string;
  showBookingButton: boolean;
  onBook: () => void;
};

const OutcomeComponent: React.FC<OutcomeComponentProps> = ({ text, showBookingButton, onBook }) => (
  <Container maxWidth="sm">
    <Typography variant="h5" gutterBottom>
      Thank you for answering the questions!
    </Typography>

    <Typography>{text}</Typography>

    {showBookingButton && (
      <Button variant="contained" onClick={onBook} sx={{ marginTop: 2 }}>
        Book a meeting
      </Button>
    )}
  </Container>
);

export default OutcomeComponent;
