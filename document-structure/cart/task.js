//Кнопки управления количеством товара
const quantityControl = Array.from(document.getElementsByClassName('product__quantity-control'));
//Вешаем событие на счетчики
quantityControl.forEach((item) => {item.addEventListener('click', changeQuantity)});

//Функция управление количеством
function changeQuantity(event) {
    let quantityBox = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    let quantityValue = Number(quantityBox.textContent);
    if (event.target.classList.contains('product__quantity-control_dec')) {
        if(quantityValue === 1) {
            return;
        } else {
            quantityValue--;            
        }
    } else {
        quantityValue++;
    }
    quantityBox.textContent = quantityValue;
}

//Кнопка добавления товара в корзину
const buttonsAdd = Array.from(document.getElementsByClassName('product__add'));
//Вешаем событие на кнопку
buttonsAdd.forEach((item) => {item.addEventListener('click', addProduct)});

// Функция создает карточку товара
function createProductCard(item) {
    let cartProduct = item.closest('.product').cloneNode(false);
    cartProduct.className = 'cart__product';

    let cartProductImg = item.closest('.product').querySelector('img').cloneNode(false);
    cartProductImg.className = 'cart__product-image';
    cartProduct.appendChild(cartProductImg);

    let cartProductCount = document.createElement('div');
    cartProductCount.className = 'cart__product-count';
    cartProduct.appendChild(cartProductCount);
    return cartProduct;
}

//Корзина
let basket = Array.from(document.getElementsByClassName('cart__products'))[0];

//Функция добавляет товар в корзину
function addProduct(event) {
    let currentProduct = event.target.closest('.product');
    let currentCount = currentProduct.querySelector('.product__quantity-value').textContent;   
    let basketElements = Array.from(basket.querySelectorAll('.cart__product'));

    let ExistingProduct = basketElements.find((item) => {return item.getAttribute('data-id') === currentProduct.getAttribute('data-id')});

    if (ExistingProduct) {
        let ExistingCount = ExistingProduct.querySelector('.cart__product-count');
        ExistingCount.textContent = Number(ExistingCount.textContent) + Number(currentCount);
    } else {
    let objectProduct = createProductCard(event.target);        
    objectProduct.querySelector('.cart__product-count').textContent = currentCount;
    basket.appendChild(objectProduct);
    }   
}