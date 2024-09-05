//! Pour recuperer les nombres aleatoirs et leur produit
export const getNumbers = (questionEl) => {
  const num1 = Math.ceil(Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 10);
  const correctAns = num1 * num2;
  questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

  return correctAns;
};
