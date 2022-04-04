// import FetchAPI from './ApiFetch';

export default function controlPopup() {
  if (!document.querySelector('.popup')) return;

  // const ws = new WebSocket('ws://localhost:7070/');

  ws.addEventListener('open', () => {
    console.log('Соединение установлено.');
  });

  // if (ws.readyState === WebSocket.OPEN) {
  //   ws.send();
  // }

  ws.addEventListener('message', (evt) => {
    const { data } = evt;
    console.log(data);
  });

  ws.addEventListener('close', (evt) => {
    console.log(
      `Соединение закрыто. Код «${evt.code}». Причина «${evt.reason}».`,
    );
  });

  ws.addEventListener('error', (err) => {
    console.log(`Произошла ошибка: «${err.code}».`, err);
  });

  const form = document.querySelector('#form');
  const formInput = form.querySelector('.form__name');
  // const api = new FetchAPI('http://localhost:7070/users');
  let interval;
  const nickFree = false;
  let popover;

  // formInput.addEventListener('input', (evt) => {
  //   clearTimeout(interval);

  //   const string = evt.target.value.replace(/\s+/g, '').trim();
  //   // console.log(string);

  //   interval = setTimeout(() => {
  //     if (string === '') {
  //       formInput.style.border = '1px solid rgb(7, 10, 10)';

  //       if (!popover) return;
  //       popover.remove();

  //       return;
  //     }

  //     ws.send(JSON.stringify(string));
  //     // const data = JSON.parse(data.message);
  //     // nickFree = data;
  //     // console.log(webS(JSON.stringify(string)));

  //     // if (!data) {
  //     //   formInput.style.border = '3px solid red';
  //     //   popover = document.createElement('div');
  //     //   popover.classList.add('popover');

  //     //   const popoverText = document.createElement('p');
  //     //   popoverText.textContent = `${evt.target.dataset.error}`;
  //     //   popover.appendChild(popoverText);

  //     //   evt.target.offsetParent.appendChild(popover);
  //     //   popover.style.top = `${
  //     //     evt.target.offsetTop - popover.offsetHeight
  //     //   }px`;
  //     //   popover.style.left = `${
  //     //     evt.target.offsetLeft
  //     //         + evt.target.offsetWidth / 2
  //     //         - popover.offsetWidth / 2
  //     //   }px`;
  //     // } else if (data) {
  //     //   formInput.style.border = '3px solid green';

  //     //   if (!popover) return;
  //     //   popover.remove();
  //     // }
  //   }, 300);
  // });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    // if (!nickFree) return;
    // // console.log('test submit');
    let formData = new FormData(form);
    formData = Object.fromEntries(formData);
    ws.send(JSON.stringify(formData));

    // // api.add(formData);
    // webS(JSON.stringify(formData));

    // form.reset();
    // form.closest('.popup').style.display = 'none';
  });
}
