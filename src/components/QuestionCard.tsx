import React from "react";

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
    <main>
      <p>
        Question: {currentQuestionNum} / {totalQuestions}{" "}
      </p>
      <p>{question}</p>
      <div>
        {choices.map((choice) => (
          <div key={choice}>
            <button disabled={userAnswer} onClick={callback}>
              {choice}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default QuestionCard;
