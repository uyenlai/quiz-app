import React from "react";

type QuestionProps = {
  question: string[];
  answer: string;
  callback: any;
  userAnswers: string[];
  questionNum: number;
  total: number;
};

const QuestionCard = ({
  question,
  answer,
  callback,
  userAnswers,
  questionNum,
  total,
}: QuestionProps): JSX.Element => {
  return (
    <main>
      <p>
        Question: {questionNum} / {total}{" "}
      </p>
      <p>{question}</p>
      <div>
        {userAnswers.map((answer) => (
          <div>
            <button disabled>
              <span>{answer}</span>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default QuestionCard;
