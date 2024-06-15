import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from '@mui/material';

type NextButtonProps = {
  isOutcome: boolean;
  isDisabled: boolean;
  onPressNext: () => void;
  onPressRestart: () => void;
};

export const NextButton: React.FC<NextButtonProps> = ({
  isOutcome,
  isDisabled,
  onPressNext,
  onPressRestart,
}) => {
  if (isOutcome) {
    return (
      <Button variant="text" onClick={onPressRestart} sx={{ mb: 10 }}>
        Back to the start screen
      </Button>
    );
  }

  return (
    <Button
      color="success"
      variant="contained"
      onClick={onPressNext}
      disabled={isDisabled}
      endIcon={<ChevronRightIcon />}
      sx={{ mb: 10 }}
    >
      Next
    </Button>
  );
};
