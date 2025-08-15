fetch('quizzes.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('quiz-container');
    data.forEach(quiz => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.innerHTML = `
        <h2>${quiz.title}</h2>
        <p>${quiz.description}</p>
        <a href="${quiz.path}">Commencer le quiz</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Erreur de chargement des quiz :', error));