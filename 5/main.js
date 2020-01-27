(() => {
  // const customers = [
  //   {
  //     image: 'contBcg-0',
  //     title: 'toto je nejaky nadpis 1',
  //     description: 'toto je nejaky text 1',
  //     star: 0
  //   },
  //   {
  //     image: 'contBcg-1',
  //     title: 'toto je nejaky nadpis 2',
  //     description: 'toto je nejaky text 2',
  //     star: 1
  //   },
  //   {
  //     image: 'contBcg-2',
  //     title: 'toto je nejaky nadpis 3',
  //     description: 'toto je nejaky text 3',
  //     star: 2
  //   },
  //   {
  //     image: 'contBcg-3',
  //     title: 'toto je nejaky nadpis 4',
  //     description: 'toto je nejaky text 4',
  //     star: 3
  //   },
  //   {
  //     image: 'contBcg-4',
  //     title: 'toto je nejaky nadpis 5',
  //     description: 'toto je nejaky text 5',
  //     star: 4
  //   }
  // ];

  // console.log(images);
  let counter = 0;
  let customers = [];
  ///VDAKA QUERYSELECTORALL STACI SELEKTNUT LEN JEDEN BUTTON?
  // console.log(btn1);
  // const btn2 = document.querySelectorAll('.btn');
  // console.log(btn2);

  function Customer(name, img, text, star) {
    this.name = name;
    this.img = img;
    this.text = text;
    this.star = star;
  }

  function createCustomer(name, img, text, star) {
    let fullImg = `img/customer-${img}.jpg`;
    const customer = new Customer(name, fullImg, text, star);
    customers.push(customer);
  }

  createCustomer(
    'Janko',
    0,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo ? Quae fugiat aspernatur harum aperiam, quis eos officia.`,
    4.5
  );
  createCustomer('Janko', 1, 'bla bla', 1);
  createCustomer('Ferko', 2, 'ta ne', 2);
  createCustomer('Traktorista', 3, 'ci pana', 4);
  createCustomer('Chlista', 4, 'ej ci bistu', 5);

  const star = `<span class="star-icon">
                  <i class="fas fa-star"></i>
                </span>`;
  const starHalf = `<span class="star-icon">
                  <i class="fas fa-star-half"></i>
                </span>`;

  const makeCustomer = counter => {
    document.getElementById('customer-img').src = customers[counter].img;
    document.getElementById('customer-name').textContent =
      customers[counter].name;
    document.getElementById('customer-text').textContent =
      customers[counter].text;
    let starsIsReady = '';
    const starState = customers[counter].star;
    for (let i = 0; i < starState; i++) {
      starsIsReady = starsIsReady + star;
      if (String(starState).includes('.') && i === Math.floor(starState)) {
        starsIsReady = starsIsReady + starHalf;
      }
    }
    document.getElementById('customer-star').innerHTML = starsIsReady;
  };

  window.onload = () => {
    makeCustomer(0);

    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', e => {
        let hodnota = e.target;
        if (
          hodnota.classList.contains('btn-left') ||
          hodnota.parentElement.classList.contains('btn-left')
        ) {
          if (counter <= 0) {
            counter = customers.length;
          }
          counter--;

          makeCustomer(counter);
        }

        if (
          hodnota.classList.contains('btn-right') ||
          hodnota.parentElement.classList.contains('btn-right')
        ) {
          if (counter === customers.length - 1) {
            counter = -1;
          }
          counter++;

          makeCustomer(counter);
        }
      });
    });
  };
})();
