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
        description: 'Gorra New Era chicago Sox color blanco con rosas modelo 59Fifty',
        stok:3,
        price:54999
    },
]

const container = document.getElementById('product-container');

function renderProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');

        productCard.innerHTML = `
            <img class="card-img-top" src="${product.img}" alt="${product.name}">
            <div class="card-body">
                <h1 class="h5 card-title">${product.name}</h1>
                    <p class="card-text">${product.description}</p>
                    <h3 class="h5 card-text">$${product.price}</h3>
                <button class="btn btn-success" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
        `;

        container.appendChild(productCard);
    });
}
 

renderProducts();
