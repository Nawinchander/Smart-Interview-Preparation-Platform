import {
  getQuestions
}
from './api/questionApi.js';

const questionList =
document.getElementById(
  'questionList'
);

const renderQuestion =
(question) => {

  const div =
    document.createElement('div');

  div.className =
    'question-card';

  div.innerHTML = `
    <h3>${question.title}</h3>

    <p>
      ${question.difficulty}
    </p>
  `;

  questionList.appendChild(div);
};

const loadQuestions =
async () => {

  const questions =
    await getQuestions();

  questions.forEach(
    renderQuestion
  );
};

loadQuestions();