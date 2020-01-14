window.addEventListener('DOMContentLoaded', () => {
    const [productsContainer] = [...document.getElementsByClassName("products")];
    const [cart] = [...document.getElementsByClassName("cart")];
    const [cartProducts] = [...cart.getElementsByClassName('cart__products')];

    if (localStorage.getItem('cartProducts')) {//восстанавливаем корзину
        cartProducts.innerHTML = localStorage.getItem('cartProducts');
    }
    
    function toggleHidden() {//скрываем пустую корзину
        if (!cartProducts.children.length) {
            cart.classList.add('hidden');
        } else {
            cart.classList.remove('hidden');
        }
    }

    toggleHidden();
    
    //добавляем прослушку на весь контейнер с продуктами 
    productsContainer.addEventListener("click", (event) => {
        const product = event.target.closest('.product');
        const [productQuantityValue] = [...product.getElementsByClassName('product__quantity-value')];
        
        //если жмем на -
        if (event.target.classList.contains("product__quantity-control_dec")) {
            productQuantityValue.textContent = (productQuantityValue.textContent <= 1) ?
                                                1 : --productQuantityValue.textContent;
        }
        //если жмем на +
        if (event.target.classList.contains("product__quantity-control_inc")) {
            productQuantityValue.textContent++;
        }
        //если жмем добавить в корзину
        if (event.target.classList.contains("product__add")) {
            
            const cartProduct = [...cartProducts.getElementsByClassName("cart__product")];
            const article = product.dataset.id;
            const srcImg = product.getElementsByClassName("product__image")[0].getAttribute('src');
            
            if (!cartProduct.length) {
                cartProducts.innerHTML = `<div class="cart__product" data-id="${article}">
                    <img class="cart__product-image" src="${srcImg}">
                    <div class="cart__product-count">${productQuantityValue.textContent}</div>
                    <div class="cart__product-delete">✘</div>
                </div>`;
                toggleHidden();
                localStorage.setItem('cartProducts', cartProducts.innerHTML);
                return;
            }
            //проверяем товар на наличие в корзине
            for (let product of cartProduct) {
                if (product.dataset.id == article) {
                    const [countCartProduct] = [...product.getElementsByClassName("cart__product-count")];
                    countCartProduct.textContent = (+countCartProduct.textContent) + (+productQuantityValue.textContent);
                    localStorage.setItem('cartProducts', cartProducts.innerHTML);
                    return;
                }
            }
            //добавляем новый товар в корзину если его там нет
            cartProducts.innerHTML += `<div class="cart__product" data-id="${article}">
                    <img class="cart__product-image" src="${srcImg}">
                    <div class="cart__product-count">${productQuantityValue.textContent}</div>
                    <div class="cart__product-delete">✘</div>
                </div>`; 
            localStorage.setItem('cartProducts', cartProducts.innerHTML);
        }              
    });
    //прослушку на корзину
    cartProducts.addEventListener('click', (event) => {
        const productInCart = event.target.closest('.cart__product');

        if (event.target.classList.contains('cart__product-delete')) {
            productInCart.remove();
            localStorage.setItem('cartProducts', cartProducts.innerHTML);
        }

        toggleHidden(); 
    });
});