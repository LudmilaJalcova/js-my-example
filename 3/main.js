window.onload = () => {
  const btn = document.getElementsByClassName('btn')[0];

  const createAlert = (alertText, selector) => {
    const element = document.getElementById(selector);
    element.innerHTML = `
      <div class="alert alert-danger" role="alert">
        ${alertText}
      </div>`;
  };

  const validatorPrazdnehoTextu = (inputSelektor, alertText, selector) => {
    const inputElement = document.getElementById(inputSelektor);
    const inputValue = inputElement.value;
    if (inputValue.length === 0) {
      createAlert(alertText, selector);
    }
  };

  const validatorHesla = (inputSelektor, alertText, selector) => {
    const inputElement = document.getElementById(inputSelektor);
    const inputValue = inputElement.value;
    if (10 > inputValue.length && inputValue.length >= 1) {
      createAlert(alertText, selector);
    }
  };

  btn.addEventListener('click', () => {
    validatorPrazdnehoTextu(
      'exampleInputEmail1',
      'Email je prazdny',
      'emailAlert'
    );

    validatorPrazdnehoTextu(
      'exampleInputPassword1',
      'Heslo je prazdne',
      'passwordAlert'
    );

    validatorHesla(
      'exampleInputPassword1',
      'Heslo musi obsahovať aspoň dve čísla',
      'passwordAlert'
    );
  });

  const inputResetAlert = (selectInput, selectAlert) => {
    const input = document.getElementById(selectInput);
    input.addEventListener('focus', () => {
      document.getElementById(selectAlert).innerHTML = null;
    });
  };

  inputResetAlert('exampleInputEmail1', 'emailAlert');
  inputResetAlert('exampleInputPassword1', 'passwordAlert');
};
