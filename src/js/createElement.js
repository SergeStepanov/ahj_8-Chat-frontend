/* eslint-disable class-methods-use-this */
export default class CreateElement {
  initDOM() {
    document.body.innerHTML = `<div class="popup" data-popup="popup">
      <form class="popup-form" id="form">
        <h4 class="form__title">Выберите псевдоним</h4>
        <input
          class="form__name"
          type="text"
          name="name"
          minlength="3"
          maxlength="14"
          data-error="Выберите другой псевдоним"
          autofocus
          required
        />
        <button class="form__btn" data-btn-form="btn-form">Продолжить</button>
      </form>
    </div>

    
    <div class="container">
        <div class="chat__users">
          <ul class="users" >
          </ul>
        </div>

        <div class="chat__messages">
          <ul class="messages">
          </ul>
          <input
            class="chat__input"
            type="text"
            name="message"
            placeholder="Введите свое сообщение здесь"
            required
          />
        </div>

      </div>
    `;
  }

  createElemUser(data) {
    const userUl = document.querySelector('.users');
    if (userUl.length !== 0) {
      const arr = [...userUl];
      for (const val of arr) {
        userUl.removeChild(val);
      }
    }
    for (const item of data) {
      const userLiElem = document.createElement('li');
      userLiElem.classList.add('user__list');
      userLiElem.dataset.id = item.id;
      userLiElem.insertAdjacentHTML(
        'afterbegin',
        `            <img
              src="https://w7.pngwing.com/pngs/160/27/png-transparent-gray-telephone-logo-computer-icons-logo-telephone-miscellaneous-text-monochrome.png"
              alt=""
              class="user__logo"
            />${item.name}
      `,
      );

      userUl.appendChild(userLiElem);
    }
  }

  createElemUserMessage(data) {
    const messageLiElem = document.createElement('li');
    messageLiElem.classList.add('user__message');
    messageLiElem.innerHTML = `<div class="message__header">
        ${data.name}, <span class="message__time">${data.time}</span>
      </div>
      ${data.message}
    `;
  }
}
