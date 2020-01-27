window.onload = () => {
  const inputValue = document.getElementById('input-name-of-col');
  const createdColumn = document.getElementsByClassName('new-element')[0];
  const btnCreate = document.getElementById('btn-create');
  const btnDelete = document.getElementById('btn-delete');

  Array.from(document.getElementsByClassName('btns-wrapper')[0].children).map(
    div => {
      div.addEventListener('click', e => {
        if (e.target.classList.contains('fa-times')) {
          div.remove();
        }
      });
    }
  );

  btnCreate.addEventListener('click', () => {
    if (inputValue.value !== null) {
      let createHtml = `<div class="card m-2" style="width: 18rem; background-color: #9a5361">
      <div class="card-body">
      <a href="#">
        <i class="fas fa-times p-1" style="color: black;border-radius: 3px; font-size: 10px;"></i>
      </a>
      <h5 class="card-title text-center text-capitalize mb-1" style="background-color: rgba(207, 134, 185, 0.47);">${inputValue.value}</h5>
      <textarea style="background-color: rgba(207, 134, 185, 0.47); width: 100%; height: 80%">
        'Hello Lukas!
        
        Thank you
        for the 
        lesson.'
        </textarea>
        </div>
      </div>
      `;
      createdColumn.innerHTML += createHtml;

      Array.from(
        document.getElementsByClassName('new-element')[0].children
      ).map(div => {
        div.addEventListener('click', e => {
          if (e.target.classList.contains('fa-times')) {
            div.remove();
          }
        });
      });
    }
  });

  btnDelete.addEventListener('click', () => {
    createdColumn.innerHTML = null;
  });
};
