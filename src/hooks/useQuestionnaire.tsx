import { useState } from 'react';
import { Answer, Outcome, Question } from '../utils/types';
import { data } from '../utils/data';

type UseQuestionnaireResult = {
  currentQuestion: Question | undefined;
  currentQuestionIndex: number;
  selectedAnswer: Answer | undefined;
  outcome: Outcome | undefined;
  handlePressNext: () => void;
  setSelectedAnswer: (answer: Answer) => void;
};

const useQuestionnaire = (): UseQuestionnaireResult => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState<Outcome>();
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>();

  const currentQuestion: Question | undefined = data.questions[currentQuestionIndex];

  const handlePressNext = () => {
    if (selectedAnswer) {
      handleAnswer(selectedAnswer);
      setSelectedAnswer(undefined);
    }
  };

  const findNextQuestionOrOutcome = (newScore: number, answer: Answer) =>
    currentQuestion?.next.find((action) => {
      if (action.answered) {
        return action.answered === answer.id;
      } else if (action.max_score !== undefined) {
        return newScore <= action.max_score;
      }
      return true;
    });

  const handleAnswer = (answer: Answer) => {
    const newScore = score + answer.score;
    setScore(newScore);

    const nextQuestionOrOutcome = findNextQuestionOrOutcome(newScore, answer);

    if (!nextQuestionOrOutcome) return;

    if (nextQuestionOrOutcome.next_question) {
      const nextQuestionIndex = data.questions.findIndex(
        (q) => q.id === nextQuestionOrOutcome.next_question,
      );
      setCurrentQuestionIndex(nextQuestionIndex);
    } else if (nextQuestionOrOutcome.outcome) {
      const nextOutcome = data.outcomes.find((o) => o.id === nextQuestionOrOutcome.outcome);
      setOutcome(nextOutcome);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    outcome,
    handlePressNext,
    setSelectedAnswer,
  };
};

export default useQuestionnaire;
