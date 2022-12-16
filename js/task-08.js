// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в
// обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы
// методом reset.

const formEl = document.querySelector(".login-form");
const mailInputEl = document.getElementsByTagName("input")[0];
const passwordInputEl = document.getElementsByTagName("input")[1];

const handleFormSend = (event) => {
  event.preventDefault();

  if (mailInputEl.value === "" || passwordInputEl.value === "") {
    alert(`Все поля должны быть заполнены`);
  } else {
    const dataInfoEls = event.currentTarget.elements;
    const dataInfo = {
      email: dataInfoEls.email.value,
      password: dataInfoEls.password.value,
    };
    console.log(dataInfo);
  }
  event.target.reset();
};

formEl.addEventListener("submit", handleFormSend);
