import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { Question, ExtendedQuestion, url, QUESTIONS_NUM } from "./API";
import { shuffleAnswers } from "./utils";

export type UserAnswer = {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<ExtendedQuestion[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const handleStartGame = (e: React.MouseEvent<HTMLButtonElement>) => {
    const fetchQuestions = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const result: ExtendedQuestion[] = data.results.map(
        (question: Question) => ({
          ...question,
          choices: shuffleAnswers([
            question.correct_answer,
            ...question.incorrect_answers,
          ]),
        })
      );
      setQuestions(result);
      setNumber(0);
      setUserAnswers([]);
      setScore(0);
      setGameOver(false);
      setLoading(false);
    };
    fetchQuestions();
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const correctAnswer = questions[number].correct_answer;
    const userAnswer = (e.target as HTMLButtonElement).innerHTML;
    const isCorrect = userAnswer === correctAnswer;

    const answerObject: UserAnswer = {
      question: questions[number].question,
      correctAnswer,
      userAnswer,
      isCorrect,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const nextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    setNumber(number + 1);
  };

  return (
    <>
      <h1>Quiz Game</h1>
      {gameOver && <button onClick={handleStartGame}>Start quiz!</button>}
      {loading && <p>Loading questions...</p>}
      {!gameOver && <p>Score: {score} </p>}
      {!gameOver && userAnswers.length <= QUESTIONS_NUM && (
        <QuestionCard
          callback={checkAnswer}
          question={questions[number].question}
          currentQuestionNum={number + 1}
          totalQuestions={questions.length}
          choices={[
            questions[number].correct_answer,
            ...questions[number].incorrect_answers,
          ]}
          userAnswer={userAnswers.length === number + 1}
        />
      )}

      {!gameOver &&
        userAnswers.length === number + 1 &&
        userAnswers.length <= QUESTIONS_NUM - 1 && (
          <button onClick={nextQuestion}>Next question</button>
        )}
      {!gameOver &&
        userAnswers.length === number + 1 &&
        userAnswers.length === QUESTIONS_NUM && (
          <button onClick={handleStartGame}>Restart quiz!</button>
        )}
    </>
  );
}

export default App;
