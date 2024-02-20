import React, { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestionss] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {};

    const checkAnswer = () => {};

    const nextQuestion = () => {};
  }, []);

  return (
    <>
      <h1>Quiz Game</h1>
      <button>Start quiz!</button>
      <p>Score</p>
      <p>Loading questions...</p>
      {/* <QuestionCard answer="" callback={} question={} questionNum={} total={} userAnswer={} /> */}
      <button>Next question</button>
    </>
  );
}

export default App;
