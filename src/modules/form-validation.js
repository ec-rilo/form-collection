const formLogic = (() => {
  const formInputFactory = (elemIdName, labelClassName) => {
    const elem = document.getElementById(elemIdName);
    const label = document.getElementById(labelClassName);
    const elemText = elemIdName;
    return { elem, label };
  };

  function updateErrorMessage(inputArr, count) {
    const errorMessage = document.querySelector('.error-message');
    inputArr.forEach((input) => {
      if (input.elem.validity.valid) {
        count += 1;
      } else {
        count -= 1;
      }
    });

    const numOfInputs = inputArr.length;
    if (count === numOfInputs) {
      errorMessage.innerHTML = 'You are ready to Submit!';
      errorMessage.style.color = '#23C552';
    }
    count = 0;
  }

  function resetForm(inputArr) {
    form.reset();
    const errorMessage = document.querySelector('.error-message');
    inputArr.forEach((input) => {
      input.label.style.color = '#6f6f6f';
      input.elem.removeEventListener('input', () => updateInputs());
    });
    errorMessage.style.opacity = 0;
    errorMessage.innerHTML = 'Please correct the above fields.';
    errorMessage.style.color = '#ff4545';
  }

  function checkFormCompletion(inputArr, count) {
    inputArr.forEach((userInput) => {
      if (userInput.elem.validity.valid) {
        count += 1;
      } else {
        count -= 1;
      }
    });

    const numOfInputs = inputArr.length;
    if (count === numOfInputs) {
      return true;
    }
    return false;
  }

  function updateInputs(userInput, inputArr, count) {
    const errorMessage = document.querySelector('.error-message');
    if (userInput.elem.validity.typeMismatch) {
      userInput.label.style.color = '#ff4545';
      errorMessage.style.opacity = '1';
    } else {
      userInput.label.style.color = '#6f6f6f';
      updateErrorMessage(inputArr, count);
    }
  }

  function submitForm() {
    const submitPopup = document.querySelector('.submit-popup-card');
    submitPopup.style.pointerEvents = 'auto';
    submitPopup.classList.add('open-card');
    const popupTimeOut = setTimeout(() => {
      submitPopup.style.pointerEvents = 'none';
      submitPopup.classList.remove('open-card');
      clearTimeout(popupTimeOut);
    }, 5000);
  }

  function checkInputs() {
    const userEmail = formInputFactory('email', 'email-label');
    const userName = formInputFactory('name', 'name-label');
    const userCountry = formInputFactory('country', 'country-label');
    const userZip = formInputFactory('zip', 'zip-label');
    const userPass = formInputFactory('password', 'pass-label');
    const userPassConf = formInputFactory('password-conf', 'pass-conf-label');
    const errorMessage = document.querySelector('.error-message');
    let count = 0;

    const inputArr = [
      userName,
      userEmail,
      userCountry,
      userZip,
      userPass,
      userPassConf,
    ];

    let formCompleted = checkFormCompletion(inputArr, count);
    if (formCompleted === true) {
      resetForm(inputArr);
      submitForm();
    } else {
      inputArr.forEach((userInput) => {
        if (!userInput.elem.validity.valid) {
          userInput.label.style.color = '#ff4545';
          errorMessage.style.opacity = '1';
        }

        userInput.elem.addEventListener('input', () =>
          updateInputs(userInput, inputArr, count)
        );
      });
    }
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    checkInputs();
    event.preventDefault();
  });
})();

export default formLogic;
