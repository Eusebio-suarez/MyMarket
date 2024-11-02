const products = [
    {
        id:1,  
        name: 'New Era New York Yankees',
        img: '/Assets/Image/cap1.png',
        description: 'Gorra New Era Yankees roja modelo 9Fifty',
        stok:10,
        price:49999
    },
    {
        id:2,  
        name: 'New Era Chicago Sox',
        img: '/Assets/Image/cap2.jpg',
        description: 'Gorra New Era chicago Sox color negro modelo 59Fifty',
        stok:15,
        price:49999
    },
    {
        id:3,  
        name: 'New Era New York Yankees',
        img: '/Assets/Image/cap3.jfif',
        description: 'Gorra New Era Yankees color negro modelo 9Fifty',
        stok:15,
        price:49999
    },
    {
        id:4,  
        name: 'New Era New York Yankees',
        img: '/Assets/Image/cap4.jfif',
        description: 'Gorra New Era Yankees color negro con rosas modelo 59Fifty',
        stok:3,
        price:49999
    },
    {
        id:5,  
        name: 'New Era Angeles',
        img: '/Assets/Image/cap5.jfif',
        description: 'Gorra New Era Angeles color blanco modelo 59Fifty',
        stok:20,
        price:49999
    },
    {
        id:6,  
        name: 'New Era New York Yankees',
        img: '/Assets/Image/cap6.jpg',
        description: 'Gorra New Era Yankees color blanco modelo 9Fifty',
        stok:10,
        price:99999
    },
    {
        id:7,  
        name: 'New Era New York Yankees',
        img: '/Assets/Image/cap7.jfif',
        description: 'Gorra New Era Yankees color verde modelo 59Fifty',
        stok:15,
        price:99999
    },
    {
        id:8,  
        name: 'New Era Angeles Lakers',
        img: '/Assets/Image/cap8.jfif',
        description: 'Gorra New Angeles lakers color negro modelo 9Fifty',
        stok:10,
        price:99999
    },
    {
        id:9,  
        name: 'New Era Chicago Bulls',
        img: '/Assets/Image/cap9.jfif',
        description: 'Gorra New Chicago bulls color negro modelo 9Fifty',
        stok:5,
        price:99999
    },
    {
        id:10,  
        name: 'New Era Boston Celtics',
        img: '/Assets/Image/cap10.jfif',
        description: 'Gorra New Boston Celtics color verde modelo 59Fifty',
        stok:15,
        price:99999
    },
    {
        id:11,  
        name: 'New Era Angeles Dodgers',
        img: '/Assets/Image/cap11.jfif',
        description: 'Gorra New Angeles Dodgers color negro modelo 9Fifty',
        stok:10,
        price:74999
    },
    {
        id:12,  
        name: 'New Era Angeles Lakers',
        img: '/Assets/Image/cap12.jfif',
        description: 'Gorra New Angeles lakers color blanco modelo 59Fifty',
        stok:20,
        price:74999
    },
    {
        id:13,  
        name: 'New Era New York Yankees',
        img: '/Assets/Image/cap13.jpg',
        description: 'Gorra New Era Yankees color blanco modelo 59Fifty',
        stok:10,
        price:74999
    },
    {
        id:14,  
        name: 'New Era Angeles Dodgers',
        img: '/Assets/Image/cap14.jfif',
        description: 'Gorra New Angeles Dodgers Azul modelo 9Fifty',
        stok:5,
        price:74999
    },
    {
        id:15,  
        name: 'New Era Chicago Sox ',
        img: '/Assets/Image/cap15.jfif',
        description: 'Gorra New Era chicago Sox color cafe modelo 9Fifty',
        stok:15,
        price:74999
    },
    {
        id:16,  
        name: 'New Era New York Yankees',
        img: '/Assets/Image/cap16.jfif',
        description: 'Gorra New Era Yankees color verde claro modelo 59Fifty',
        stok:10,
        price:54999
    },
    {
        id:17,  
        name: 'New Era Angeles Dodgers',
        img: '/Assets/Image/cap17.jfif',
        description: 'Gorra New Angeles Dodgers color rosado modelo 9Fifty',
        stok:10,
        price:54999
    },
    {
        id:18,  
        name: 'New Era New York Yankees',
        img: '/Assets/Image/cap18.jfif',
        description: 'Gorra New Era Yankees color blanco modelo 59Fifty',
        stok:5,
        price:54999
    },
    {
        id:19,  
        name: 'New Era Angeles Dodgers',
        img: '/Assets/Image/cap19.jfif',
        description: 'Gorra New Angeles Dodgers color blanco modelo 9Fifty',
        stok:10,
        price:54999
    },
    {
        id:20,  
        name: 'New Era Chicago Sox ',
        img: '/Assets/Image/cap20.jfif',
        img: '/Assets/Image/cap20.jfif',
        description: 'Gorra New Era chicago Sox color blanco con rosas modelo 59Fifty',
        stok:3,
        price:54999
    },
]

const container = document.getElementById('product-container');
const carContainer = document.getElementById('carContainer');
document.getElementById('generateOrderButton').addEventListener('click', generateOrder);

let cart = [];

function renderProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card', 'mb-3');

        productCard.innerHTML = `
            <img class="card-img-top" src="${product.img}" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <h6 class="card-text">$${product.price}</h6>
                <button class="btn btn-success" data-id="${product.id}">Añadir al Carrito</button>
            </div>
        `;

        container.appendChild(productCard);
    });

    const shopButtons = document.querySelectorAll('.btn-success');
    shopButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        if (cartItem.quantity < product.stok) {
            cartItem.quantity++;
        } else {
            alert("No hay suficiente stock para agregar más de este producto.");
        }
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
}

function renderCart() {
    carContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <h5>${item.name}</h5>
            <p>Precio: $${item.price}</p>
            <p>Cantidad: ${item.quantity}</p>
            <p>Total: $${item.price * item.quantity}</p>
            <button class="btn btn-primary" onclick="increaseQuantity(${item.id})">+</button>
            <button class="btn btn-primary" onclick="decreaseQuantity(${item.id})">-</button>
            <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;

        carContainer.appendChild(cartItem);
    });

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
    carContainer.appendChild(totalDiv);
}

function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);

    if (cartItem && product && cartItem.quantity < product.stok) {
        cartItem.quantity++;
        renderCart();
    } else {
        alert("No hay suficiente stock para aumentar la cantidad.");
    }
}

function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }

    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

function generateOrder() {
    if (cart.length === 0) {
        alert("El carrito está vacío. No puedes generar una orden de compra.");
        return;
    }

    const orderDetails = cart.map(item => {
        return {
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
        };
    });

    const totalOrderAmount = orderDetails.reduce((acc, item) => acc + item.total, 0);

    console.log("Detalles de la Orden de Compra:", orderDetails);
    console.log("Total de la Orden:", totalOrderAmount);

    displayOrder(orderDetails, totalOrderAmount);
}

function displayOrder(orderDetails, total) {
    const orderContainer = document.getElementById('orderContainer');
    orderContainer.innerHTML = '';

    const orderTitle = document.createElement('h2');
    orderTitle.textContent = "Detalles de la Orden de Compra";
    orderTitle.classList.add('card-title');

    orderContainer.appendChild(orderTitle);

    orderDetails.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-total');

        itemElement.innerHTML = `
            <p class="card-text">${item.name} - Cantidad: ${item.quantity} - Precio: $${item.price} - Total: $${item.total}</p>
        `;
        orderContainer.appendChild(itemElement);
    });

    const totalElement = document.createElement('h3');
    totalElement.textContent = `Total de la Orden: $${total}`;
    orderContainer.appendChild(totalElement);
}

renderProducts();