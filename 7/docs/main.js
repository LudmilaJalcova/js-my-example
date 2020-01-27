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
    <div class="img-container">
      <img src=${data.image} class="card-img-top" alt="sweets">
      <span class="store-item-icon">
        <i class="fas fa-shopping-cart">
        </i>
      </span>
    </div>
    <div class="card-body">
      <div class="card-text d-flex justify-content-between">
        <h5 class="text-capitalize filter-name">${data.name}</h5>
        <h5 class="justify-content-end filter-price">$ <strong>${data.price}</strong></h5>
      </div>
    </div>
  </div>
</div>
`;

  items.map(item => {
    storeItemsElement.innerHTML =
      storeItemsElement.innerHTML + createCakeItem(item);
  });

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
    Array.from(selectProductName).map(product => {
      if (
        product.querySelector('.filter-name').textContent === 'cake item' ||
        'cupcake item' ||
        'sweet item' ||
        'doughnut item'
      ) {
        product.style.display = '';
      }
    });
  });

  const filterButtons = [
    { selectorButton: btn2, filterName: 'cake item' },
    { selectorButton: btn3, filterName: 'cupcake item' },
    { selectorButton: btn4, filterName: 'sweet item' },
    { selectorButton: btn5, filterName: 'doughnut item' }
  ];

  filterButtons.map(filterValue => {
    filterValue.selectorButton.addEventListener('click', () => {
      Array.from(selectProductName).map(product => {
        product.style.display = 'block';
        if (
          product.querySelector('.filter-name').textContent !==
          filterValue.filterName
        ) {
          product.style.display = 'none';
        }
      });
    });
  });

  const itemInput = document.getElementById('itemInput');

  itemInput.addEventListener('keyup', e => {
    let value = e.target.value.toLowerCase().trim();

    Array.from(selectProductName).map(product => {
      product.style.display = 'block';
      let match = product.querySelector('.filter-name').textContent;

      let matchPrice = product.querySelector('.filter-price strong')
        .textContent;

      // vyskusat pridat logiku pre filtrovanie podla ceny a podla dalsich nazvov memo zaciatocneho pismenka ||
      if (match.includes(value) || Number(matchPrice) === Number(value)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
  //modal
  const selectImgItems = document.querySelectorAll('.img-container');
  let shoppingItemCount = 0;
  let shoppingItemPrice = 0;
  Array.from(selectImgItems).map((imgSelector, index) => {
    imgSelector.addEventListener('click', e => {
      const imgSrc = e.target.getAttribute('src');

      if (imgSrc === null) {
        alert(
          `Pridali ste do košíka: ${items[index].name} s cenou: ${items[index].price}$`
        );
        const shoppingItem = document.querySelectorAll('#shopping-card span');
        shoppingItemCount++;
        shoppingItem[0].innerHTML = shoppingItemCount;

        shoppingItemPrice = shoppingItemPrice + items[index].price;
        shoppingItem[1].innerHTML = shoppingItemPrice;
        document.getElementById(
          'shoping-cart-total-price'
        ).innerHTML = shoppingItemPrice;

        // vyrobit logiku vkladania do karty dany jeden item aj s jeho datami

        const cart = document.getElementById('cart');
        const cartItem = document.getElementById('cart-items');

        let createHtml = `
        <div class="d-flex justify-content-between text-capitalize mb-3">
          <img src="${items[index].image}" alt="cart item"
            class="img-fluid rounded-circle" style="width: 50px;">
          <div class="item-text">
            <p class="font-weight-bold mb-1">${items[index].name}</p>
            <span>$</span><span class="cart-item-price">${items[index].price}</span>
          </div>
          <a href="#" class="cart-item-remove">
            <i class="fas fa-trash"></i>
          </a>
        </div>
        `;

        cartItem.innerHTML += createHtml;

        if (shoppingItemCount > 0) {
          cart.style.display = 'inline-block';
        }

        document
          .getElementById('btn-clear-carts')
          .addEventListener('click', () => {
            cartItem.innerHTML = null;
            shoppingItem[0].innerHTML = 0;
            shoppingItem[1].innerHTML = 0;
            shoppingItemCount = 0;
            shoppingItemPrice = 0;
            document.getElementById('shoping-cart-total-price').innerHTML = 0;
            cart.style.display = 'none';
          });

        document
          .getElementById('btn-checkout')
          .addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
            document.getElementById('modal-checkout-btn').innerHTML = `
              <div class="container-fluid">
                <div class="row light-box-container align-items-center text-center overflow-auto">
                  <div class="col-10 col-md-6 mx-auto light-box-holder position-relative" style="height: 100vh;">
                  <div class="text-right">
                    <span class="light-box-close">
                      <i class="fas fa-window-close box-close" aria-hidden="true">
                      </i>
                    </span>
                    </div>
                    <form action="#" style="background-color: rgb(235, 208, 57)" id="form" class="p-2 pt-3">
                      <div class="form-group">
                        <label for="exampleName">Name</label>
                        <input type="text" class="form-control" id="exampleName" placeholder="Enter Name">
                      </div>
                      <div class="form-group">
                        <label for="exampleSurname">Surname</label>
                        <input type="text" class="form-control" id="exampleSurname" placeholder="Enter Surname">
                      </div>
                      <div class="form-group">
                        <label for="examplePhoneNumber">Phone number</label>
                        <input type="tel" class="form-control" id="examplePhoneNumber" placeholder="Enter Phone number">
                      </div>
                      <div class="form-group">
                        <label for="exampleAddress">Address</label>
                        <input type="tel" class="form-control" id="exampleAddress" placeholder="Enter Address">
                      </div>
                      <div class="form-group">
                        <label for="exampleEmail">Email address</label>
                        <input type="email" class="form-control" id="exampleEmail" aria-describedby="emailHelp" placeholder="Enter Email">
                      </div>
                      <div class="form-group">
                        <label for="exampleTextarea">Textarea</label>
                        <textarea class="form-control" id="exampleTextarea" placeholder="Enter text"></textarea></textarea>
                      </div>
                      <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheckBox">
                        <label class="form-check-label" for="exampleCheckBox">Želám si spamovať môj email novinkami</label>
                      </div>
                      <button type="submit" class="btn btn-primary btn-submit-modal-checkout my-4" id="btn-submit-modal-checkout">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            `;

            const modalBtnClose = document.querySelector('.light-box-close');
            modalBtnClose.addEventListener('click', () => {
              document.getElementById('modal-checkout-btn').innerHTML = null;
              document.body.style.overflow = 'auto';
            });

            const name = document.getElementById('exampleName');
            const surname = document.getElementById('exampleSurname');
            const phoneNumber = document.getElementById('examplePhoneNumber');
            const address = document.getElementById('exampleAddress');
            const emailAddress = document.getElementById('exampleEmail');
            const text = document.getElementById('exampleTextarea');

            document
              .getElementById('btn-submit-modal-checkout')
              .addEventListener('click', () => {
                if (
                  name.value.length !== 0 &&
                  surname.value.length !== 0 &&
                  phoneNumber.value.length !== 0 &&
                  address.value.length !== 0 &&
                  emailAddress.value.length !== 0
                ) {
                  alert(`
                  Name: ${name.value}
                  Surname: ${surname.value}
                  Phone number: ${phoneNumber.value}
                  Address: ${address.value}
                  Email address: ${emailAddress.value}
                  Text: ${text.value}`);
                } else {
                  alert(`Fill all required information, please!`);
                }
              });
          });

        Array.from(document.querySelectorAll(`.cart-item-remove`)).map(
          removeBtn => {
            removeBtn.addEventListener('click', e => {
              const shoppingItem = document.querySelectorAll(
                '#shopping-card span'
              );

              e.target.parentElement.parentElement.remove();

              shoppingItemCount--;
              shoppingItem[0].innerHTML = shoppingItemCount;

              shoppingItemPrice =
                shoppingItemPrice -
                Number(
                  e.target.parentElement.parentElement.childNodes[3]
                    .childNodes[4].textContent
                );
              shoppingItem[1].innerHTML = shoppingItemPrice;
              document.getElementById(
                'shoping-cart-total-price'
              ).innerHTML = shoppingItemPrice;

              if (shoppingItemCount === 0) {
                cart.style.display = 'none';
              }
            });
          }
        );

        return;
      }

      document.body.style.overflow = 'hidden';
      document.getElementById('modal').innerHTML = `
      <div class="container-fluid">
        <div class="row light-box-container align-items-center text-center">
          <div class="col-10 col-md-6 mx-auto light-box-holder position-relative" style="height: 100vh;">
            <div class="text-right">
             <span class="light-box-close">
               <i class="fas fa-window-close box-close">
               </i>
             </span>
            </div>
            <div class="light-box-item">
              <img src="${imgSrc}" class="img-fluid">
            </div>
            <span class="light-box-btn-left btn-direction">
              <i class="fas fa-caret-left">
              </i>
            </span>
            <span class="light-box-btn-right btn-direction">
              <i class="fas fa-caret-right">
              </i>
            </span>
          </div>
        </div>
      </div>
      `;

      const modalBtnClose = document.querySelector('.light-box-close');
      modalBtnClose.addEventListener('click', () => {
        document.getElementById('modal').innerHTML = null;
        document.body.style.overflow = 'auto';
      });

      //sipky

      let counter = 0;
      const btns = document.querySelectorAll('.btn-direction');
      btns.forEach(btn => {
        btn.addEventListener('click', e => {
          let hodnota = e.target;
          if (hodnota.classList.contains('fa-caret-left')) {
            counter--;
            if (counter < 0) {
              counter = items.length - 1;
            }
            document.querySelector('.light-box-item img').src =
              items[counter].image;
          }
          if (hodnota.classList.contains('fa-caret-right')) {
            counter++;
            if (counter > items.length - 1) {
              counter = 0;
            }
            document.querySelector('.light-box-item img').src =
              items[counter].image;
          }
        });
      });
    });
  });
};
