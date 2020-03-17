'use strict';

let preloader = document.getElementById('loader');
let items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    preloader.classList.remove('loader_active');
    const data = JSON.parse(xhr.responseText);
    const valute = data.response.Valute;

    for (let index in valute) {
      const currency = valute[index];
      const curName = currency.CharCode;
      const sum = currency.Value;

      const currElement = document.createElement('div');
      currElement.setAttribute('class', 'item');
      currElement.innerHTML =
          `<div class='item__code'>${curName}</div>
          <div class='item__value'>${sum}</div>
          <div class='item__currency'>руб.</div>`;
      items.insertAdjacentElement('beforeend', currElement);
    }
  }
};