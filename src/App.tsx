import React from 'react';
import { Box } from '@mui/material';
import useQuestionnaire from './hooks/useQuestionnaire';
import QuestionComponent from './components/QuestionComponent/QuestionComponent';
import OutcomeComponent from './components/OutcomeComponent/OutcomeComponent';
import './App.css';
import { NextButton } from './components/NextButton/NextButton';
import { Header } from './components/Header/Header';

const App: React.FC = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    outcome,
    handlePressNext,
    setSelectedAnswer,
  } = useQuestionnaire();

  const handleBooking = () => alert('Booking a meeting...');

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      minHeight={'100vh'}
      maxWidth={'sm'}
      margin={'auto'}
    >
      <Header currentQuestionIndex={currentQuestionIndex} />

      <Box display={'flex'} flex={1} flexDirection={'column'} justifyContent={'center'}>
        {currentQuestion && (
          <QuestionComponent
            text={currentQuestion.question_text}
            answers={currentQuestion.answers}
            onAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
          />
        )}

        {outcome && (
          <OutcomeComponent
            text={outcome.text}
            showBookingButton={outcome.show_booking_button}
            onBook={handleBooking}
          />
        )}
      </Box>

      <NextButton
        isOutcome={!!outcome}
        isDisabled={!selectedAnswer}
        onPressNext={handlePressNext}
        onPressRestart={handleRestart}
      />
    </Box>
  );
};

export default App;
