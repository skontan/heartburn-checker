import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { Answer } from '../../utils/types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type QuestionComponentProps = {
  text: string;
  answers: Answer[];
  selectedAnswer: Answer | undefined;
  onAnswer: (answer: Answer) => void;
};
const QuestionComponent: React.FC<QuestionComponentProps> = ({
  text,
  answers,
  onAnswer,
  selectedAnswer,
}) => {
  return (
    <Container maxWidth={'sm'}>
      <Typography variant="h5" gutterBottom>
        {text}
      </Typography>
      <Box display={'flex'} gap={2}>
        {answers.map((answer) => (
          <Button
            fullWidth
            key={answer.id}
            variant={selectedAnswer?.id === answer.id ? 'contained' : 'outlined'}
            onClick={() => onAnswer(answer)}
            endIcon={selectedAnswer?.id === answer.id && <CheckCircleIcon />}
          >
            {answer.label}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default QuestionComponent;
