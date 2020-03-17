'use strict';

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const pollAnswerList = document.getElementsByClassName('poll__answer');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const poll = JSON.parse(xhr.responseText);
    pollTitle.innerText = poll.data.title;
    const answers = poll.data.answers;
    for (let i = 0; i < answers.length; i++) {
      const answer = document.createElement('button');
      answer.setAttribute('class', 'poll__answer');
      answer.innerText = answers[i];
      pollAnswers.insertAdjacentElement('beforeend', answer);
    }

    for (let pollAnswer of pollAnswerList) {
      pollAnswer.onclick = () => {
        alert('Спасибо, Ваш голос засчитан!');
      };
    }
  }
};