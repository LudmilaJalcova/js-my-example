1. ak kliknem na kosik pridam do cart divka
   tento htmml code

```html
<div class="cart-item d-flex justify-content-between text-capitalize">
  <img
    src="./images/items/doughnut-2.jpeg"
    alt="cart item"
    class="img-fluid rounded-circle"
    style="width: 50px;"
  />
  <div class="item-text">
    <p class="font-weight-bold mb-1">cart item</p>
    <span>$</span><span class="cart-item-price">10</span>
  </div>
  <a href="#" class="cart-item-remove">
    <i class="fas fa-trash"></i>
  </a>
</div>
```

<!-- document.selektorcart.innerHTML = vlozimHTML
document.selektorcart.innerHTML = document.selektorcart.innerHTML + vlozimHTML -->

- ktori bude mat v sebe cestu k obrazku
- nazov produktu
- cenu produktu
  vramci kliknuteho produktu

ak to bude fungovat vyskusat kliknut na dalsi produkt ci sa pridal pod to

ak to bude fungovat
vytvorit posluchaca na tlacitko kos vramci kazdeho itemu v karte
ak kliknem zmazem dany item

ak to bude fungovat
vytvorit logiku ak som odobral item z karty odpocitam danu sumu a item zo zobrazenej karty v navigacii

ak zmazes posledny item tak sa odobere classa show-cart

2. vytvor po kliknuti na checkout modal v ktorom bude formular

- meno input
- priezvisko input
- tel c. input
- adresa input
- email input
- poznamka textarea
- checkbox s textom zelam si spamovat email o novinkach
- submit btn pri ktorom ked kliknem zobrazi sa alert ktori bude obsahovat vsetky data z inputov
- ak mi nejaka value z inputov chyba vypisat error hlasku o tom ze je potrebne vyplnit kazdy vstup
