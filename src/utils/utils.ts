export const shuffleAnswers = (answers: any[]) => {
  return [...answers].sort(() => 0.5 - Math.random());
};
