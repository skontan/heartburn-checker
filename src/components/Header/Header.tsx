import { Box, Container, LinearProgress, Typography } from '@mui/material';
import { data } from '../../utils/data';

type HeaderProps = {
  currentQuestionIndex: number;
};

export const Header: React.FC<HeaderProps> = ({ currentQuestionIndex }) => {
  const progress = (currentQuestionIndex / data.questions.length) * 100;

  return (
    <Container>
      <Typography variant="h6" align="center">
        Heartburn Checker
      </Typography>

      <Box pl={4} pr={4} mt={2}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Container>
  );
};
