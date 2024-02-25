import React from "react";
import classes from "./QuestionCard.module.css";

type QuestionProps = {
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  question: string;
  currentQuestionNum: number;
  totalQuestions: number;
  choices: string[];
  userAnswer: undefined | boolean;
};

const QuestionCard = ({
  callback,
  question,
  currentQuestionNum,
  totalQuestions,
  choices,
  userAnswer,
}: QuestionProps): JSX.Element => {
  return (
    <main className={classes.container}>
      <h3>
        Question: {currentQuestionNum} / {totalQuestions}{" "}
      </h3>
      <div className={classes.questionContainer}>
        <p>{question}</p>
        <div className={classes.choices}>
          {choices.map((choice) => (
            <button
              key={choice}
              className={classes.choice}
              disabled={userAnswer}
              onClick={callback}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default QuestionCard;
