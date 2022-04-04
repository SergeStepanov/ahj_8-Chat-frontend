import CreateElement from './createElement';

const url = 'ws://localhost:7070/';

console.log('Test: app.js Hello!');

const app = new CreateElement();
app.initDOM();

const ws = new WebSocket(url);

ws.addEventListener('open', () => {
  console.log('Соединение установлено.');
  const btn = document.querySelector('.form__btn');
  const formEl = document.querySelector('.form__name');

  btn.addEventListener('click', (evt) => {
    evt.preventDefault();

    const string = formEl.value.replace(/\s+/g, '').trim();
    if (string === '') return;

    // console.log(string);

    ws.send(JSON.stringify({ type: 'newUser', name: string }));
  });
});

ws.addEventListener('message', (evt) => {
  const data = JSON.parse(evt.data);
  if (data.type === 'error name') {
    // const popover = document.createElement('div');
    // popover.classList.add('popover');

    // const popoverText = document.createElement('p');
    // popoverText.textContent = `${evt.target.dataset.error}`;
    // popover.appendChild(popoverText);

    // evt.target.offsetParent.appendChild(popover);
    // popover.style.top = `${
    //   evt.target.offsetTop - popover.offsetHeight
    // }px`;
    // popover.style.left = `${
    //   evt.target.offsetLeft
    //             + evt.target.offsetWidth / 2
    //             - popover.offsetWidth / 2
    // }px`;
    console.log('имя занято!!!');
  }
  if (data.type === 'true name') {
    console.log('имя!!!', data.clients);
    // document.querySelector('[data-popup=popup]').remove();
    app.createElemUser(data.clients);
  }
  console.log(data);
});

ws.addEventListener('close', (evt) => {
  console.log(
    `Соединение закрыто. Код «${evt.code}».`,
  );
});

ws.addEventListener('error', (evt) => {
  console.log(`Произошла ошибка: «${evt.message}».`, evt);
});
