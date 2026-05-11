const API =
'http://localhost:5000/api/questions';

export const getQuestions =
async () => {

  const res =
    await fetch(API);

  return res.json();
};

