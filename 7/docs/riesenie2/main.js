window.onload = () => {
  const storeItemsElement = document.getElementById('store-items');
  const items = [
    {
      name: 'sweet item',
      image: './images/items/cake-1.jpeg',
      price: 5
    },
    {
      name: 'cupcake item',
      image: './images/items/cake-2.jpeg',
      price: 5
    },
    {
      name: 'cake item',
      image: './images/items/cake-3.jpeg',
      price: 5
    },
    {
      name: 'doughnut item',
      image: './images/items/cupcake-1.jpeg',
      price: 5
    },
    {
      name: 'sweet item',
      image: './images/items/cupcake-2.jpeg',
      price: 10
    },
    {
      name: 'cupcake item',
      image: './images/items/cupcake-3.jpeg',
      price: 10
    },
    {
      name: 'cake item',
      image: './images/items/doughnut-1.jpeg',
      price: 10
    },
    {
      name: 'doughnut item',
      image: './images/items/doughnut-2.jpeg',
      price: 10
    },
    {
      name: 'sweet item',
      image: './images/items/doughnut-3.jpeg',
      price: 15
    },
    {
      name: 'cupcake item',
      image: './images/items/sweets-1.jpeg',
      price: 15
    },
    {
      name: 'cake item',
      image: './images/items/sweets-2.jpeg',
      price: 15
    },
    {
      name: 'doughnut item',
      image: './images/items/sweets-3.jpeg',
      price: 15
    }
  ];

  const createCakeItem = data => `
  <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 filter-product">
    <div class="card">
    <img src=${data.image} class="card-img-top" alt="sweets">
    <div class="card-body">
      <div class="card-text d-flex justify-content-between">
        <h5 class="text-capitalize filter-name">${data.name}</h5>
        <h5 class="justify-content-end filter-price">$ <strong>${data.price}</strong></h5>
      </div>
    </div>
  </div>
</div>
`;
  function createItemsElements() {
    items.map(item => {
      storeItemsElement.innerHTML =
        storeItemsElement.innerHTML + createCakeItem(item);
    });
  }
  createItemsElements();

  const cakeItem = document.createElement('div');
  cakeItem.innerHTML = createCakeItem(items[0]);

  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');
  const btn5 = document.getElementById('btn5');

  // zopakuj logiku pre vsetky btn
  // len pre prvy btn1 bude logika ina kde vymazes vsetkym productom style display none na ''
  // ak budes mat vsetky logiky funkcne vytvor globalnu funkciu pre vsetky tieto btn a zavolaj tuto metodu...
  const selectProductName = document.querySelectorAll('.filter-product');

  btn1.addEventListener('click', () => {
    storeItemsElement.innerHTML = '';
    createItemsElements();
  });

  // btn2.addEventListener('click', () => {
  //   Array.from(selectProductName).map(product => {
  //     if (product.querySelector('.filter-name').textContent !== 'cake item') {
  //       product.style.display = 'none';
  //     }
  //   });
  // });

  // btn3.addEventListener('click', () => {
  //   Array.from(selectProductName).map(product => {
  //     if (
  //       product.querySelector('.filter-name').textContent !== 'cupcake item'
  //     ) {
  //       product.style.display = 'none';
  //     }
  //   });
  // });

  // btn4.addEventListener('click', () => {
  //   Array.from(selectProductName).map(product => {
  //     if (product.querySelector('.filter-name').textContent !== 'sweet item') {
  //       product.style.display = 'none';
  //     }
  //   });
  // });

  // btn5.addEventListener('click', () => {
  //   Array.from(selectProductName).map(product => {
  //     if (
  //       product.querySelector('.filter-name').textContent !== 'doughnut item'
  //     ) {
  //       product.style.display = 'none';
  //     }
  //   });
  // });
  const filterButtons = [
    { selectorButton: btn2, filterName: 'cake item' },
    { selectorButton: btn3, filterName: 'cupcake item' },
    { selectorButton: btn4, filterName: 'sweet item' },
    { selectorButton: btn5, filterName: 'doughnut item' }
  ];
  filterButtons.map(filterValue => {
    filterValue.selectorButton.addEventListener('click', () => {
      storeItemsElement.innerHTML = '';
      items.map(item => {
        if (item.name === filterValue.filterName) {
          storeItemsElement.innerHTML =
            storeItemsElement.innerHTML + createCakeItem(item);
        }
      });
    });
  });

  const itemInput = document.getElementById('itemInput');

  itemInput.addEventListener('keyup', e => {
    let value = e.target.value.toLowerCase().trim();

    let lengthValue = value.length;

    Array.from(selectProductName).map(product => {
      let match = product
        .querySelector('.filter-name')
        .textContent.slice(0, lengthValue);

      let matchPrice = product
        .querySelector('.filter-price strong')
        .textContent.slice(0, lengthValue);

      // vyskusat pridat logiku pre filtrovanie podla ceny a podla dalsich nazvov memo zaciatocneho pismenka ||
      if (match !== value) {
        product.style.display = 'none';
      } else {
        product.style.display = '';
      }

      if (matchPrice !== value) {
        product.style.display = 'none';
      } else {
        product.style.display = '';
      }
      // Array.from(selectProductName).map(product => {
      //   let match = product
      //     .querySelector('.filter-price strong')
      //     .textContent.slice(0, lengthValue);
      //   if (match !== value) {
      //     product.style.display = 'none';
      //   } else {
      //     product.style.display = '';
      //   }
      // });
    });
  });
};
