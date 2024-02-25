export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

//Response from the API
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

//Create an array for both correct and incorrect answers so that can shuffle them
export type ExtendedQuestion = Question & { choices: string[] };

//api
export const QUESTIONS_NUM: number = 10;

export const url: string = `https://opentdb.com/api.php?amount=${QUESTIONS_NUM}&category=9&difficulty=${Difficulty.MEDIUM}&type=multiple`;
