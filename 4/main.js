window.onload = () => {
  const images = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4'
  ];

  let counter = 0;

  // const btns1 = document.getElementsByClassName('btn');
  // console.log(btns1); // vracia HTMLCollection

  const btns2 = document.querySelectorAll('.btn');
  // console.log(btns2); // vracia NodeList ktori sa da mapovat

  btns2.forEach(btn => {
    btn.addEventListener('click', e => {
      let hodnota = e.target;
      // console.log(hodnota);
      // console.log(hodnota.classList);
      // console.log(hodnota.parentElement.classList);
      if (
        hodnota.classList.contains('btn-left') ||
        hodnota.parentElement.classList.contains('btn-left')
      ) {
        counter--;
        if (counter < 0) {
          counter = images.length - 1;
        }

        // console.log(counter);
        document.querySelector(
          '.img-container'
        ).style.backgroundImage = `url('./img/${images[counter]}.jpeg')`;
      }
      if (
        hodnota.classList.contains('btn-right') ||
        hodnota.parentElement.classList.contains('btn-right')
      ) {
        counter++;
        if (counter > images.length - 1) {
          counter = 0;
        }
        // console.log(counter);
        document.querySelector(
          '.img-container'
        ).style.backgroundImage = `url('./img/${images[counter]}.jpeg')`;
      }
    });
  });
};
