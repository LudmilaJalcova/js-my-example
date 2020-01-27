window.onload = () => {
  document
    .getElementById('btn-add-grocery-item')
    .addEventListener('click', () => {
      const removeValidation = document.getElementsByClassName(
        'list-alert-items-remove'
      )[0];

      const inputValue = document.getElementById('input-grocery-items').value;
      const selectList = document.getElementById('grocery-list');

      let createHtml = `
      <li class="list-group-item d-flex justify-content-between align-items-center text-capitalize text-center" style="color: #e945a5e3">
        ${inputValue}
        <a href="#" class="grocery-item-remove">
        <i class="fas fa-trash" style="color: #e945a5e3"></i>
        </a>
      </li>
    `;

      const submitValidation = document.getElementsByClassName(
        'list-alert-items-submit'
      )[0];

      if (inputValue.length !== 0) {
        selectList.innerHTML += createHtml;

        const wrapperElement = document.getElementById('wrapper');
        const wrapperHeight = wrapperElement.offsetHeight;
        const childrenHeight = wrapperElement.children[0].offsetHeight;

        if (wrapperHeight < childrenHeight) {
          wrapperElement.style.height = 'auto';
        }

        submitValidation.innerHTML += `<div class="list-group-item d-flex justify-content-between align-items-center text-capitalize text-center mb-2" style="color: #52482a7a; border: 1px solid #52482a7a">${inputValue} added to the list</div>`;

        setTimeout(function() {
          submitValidation.innerHTML = null;
        }, 5000);

        Array.from(
          document.getElementsByClassName('list-group')[0].children
        ).map(li => {
          li.addEventListener('click', e => {
            if (e.target.classList.contains('fa-trash')) {
              li.remove();

              removeValidation.innerHTML += `<div class="list-group-item d-flex justify-content-between align-items-center text-capitalize text-center mb-2" style="color: #c241d8; border: 1px solid #c241d8">${li.textContent.trim()} removed from the list</div>`;

              setTimeout(function() {
                removeValidation.innerHTML = null;
              }, 2000);
            }
          });
        });
      } else {
        submitValidation.innerHTML = `<div class="list-group-item d-flex justify-content-between align-items-center text-capitalize mb-2" style="color: #ff5722ba; border: 1px solid #ff5722ba">add grocery item, please!</div>`;

        setTimeout(function() {
          submitValidation.innerHTML = null;
        }, 2000);
      }
    });

  document.getElementById('btn-clear-items').addEventListener('click', () => {
    document.getElementById('grocery-list').innerHTML = null;
    document.getElementsByClassName(
      'list-alert-items-remove'
    )[0].innerHTML = `<div class="list-group-item d-flex justify-content-between align-items-center text-capitalize text-center mb-2" style="color: #eddf49; border: 1px solid #eddf49">all items deleted</div>`;

    setTimeout(function() {
      document.getElementsByClassName(
        'list-alert-items-remove'
      )[0].innerHTML = null;
    }, 2000);
  });
};
