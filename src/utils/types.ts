export type Answer = {
  id: string;
  label: string;
  score: number;
};

export type NextAction = {
  action: string;
  id: string;
  condition?: {
    type: string;
    value: any;
  };
};

export type Question = {
  id: string;
  question_text: string;
  answers: Answer[];
  next: {
    answered?: string;
    next_question?: string;
    max_score?: number;
    outcome?: string;
  }[];
};

export type Outcome = {
  id: string;
  text: string;
  show_booking_button: boolean;
};

export type Data = {
  questions: Question[];
  outcomes: Outcome[];
};
