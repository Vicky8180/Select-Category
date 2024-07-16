// // Sample API URL for demonstration purposes
// const API_URL = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

// async function fetchProducts() {
//     try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         return data.categories.reduce((acc, category) => {
//             acc[category.category_name.toLowerCase()] = category.category_products;
//             return acc;
//         }, {});
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return { men: [], women: [], kids: [] };
//     }
// }

// function showProducts(category, products) {
//     const productContainer = document.getElementById('products');
//     productContainer.innerHTML = '';

//     const buttons = document.querySelectorAll('.buttons button');
//     buttons.forEach(button => button.classList.remove('active'));
//     document.getElementById(category + 'Btn').classList.add('active');

//     products[category].forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.className = 'product-card';
        
       

//         productCard.innerHTML = `
//             <img src="${product.image}" alt="${product.title}">
       
//            <div class="badge_text">${product.badge_text}</div>
   
           
//             <div class="temp">    <h3>${product.title}</h3>
//         <p>
//         <li>${product.vendor}</li></p> </div>
            
//         <div class="temp2">
//                 <p> Rs.${product.price}</p>
//         <del>${product.compare_at_price}</del>
//         <p class="temp2p"> ${Math.round(((product.compare_at_price-product.price)*100)/product.compare_at_price)}% Off</p>
//             </div>

//         <button class="buttonincard">Add to Cart</button>
//         `;

//         productContainer.appendChild(productCard);
      
//     });
// }

// async function initialize() {
//     const products = await fetchProducts();
//     showProducts('men', products);

//     document.getElementById('menBtn').addEventListener('click', () => showProducts('men', products));
//     document.getElementById('womenBtn').addEventListener('click', () => showProducts('women', products));
//     document.getElementById('kidsBtn').addEventListener('click', () => showProducts('kids', products));
// }

// document.addEventListener('DOMContentLoaded', initialize);



// Sample API URL for demonstration purposes
const API_URL = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json';

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.categories.reduce((acc, category) => {
            acc[category.category_name.toLowerCase()] = category.category_products;
            return acc;
        }, {});
    } catch (error) {
        console.error('Error fetching products:', error);
        return { men: [], women: [], kids: [] };
    }
}

function showProducts(category, products) {
    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';

    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(category + 'Btn').classList.add('active');

    products[category].forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const badgeHTML = product.badge_text ? `<div class="badge_text">${product.badge_text}</div>` : '';

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            ${badgeHTML}
            <div class="temp">
                <h3>${product.title}</h3>
                <p><li>${product.vendor}</li></p>
            </div>
            <div class="temp2">
                <p> Rs.${product.price}</p>
                <del>${product.compare_at_price}</del>
                <p class="temp2p">${Math.round(((product.compare_at_price - product.price) * 100) / product.compare_at_price)}% Off</p>
            </div>
            <button class="buttonincard">Add to Cart</button>
        `;

        productContainer.appendChild(productCard);
    });
}

async function initialize() {
    const products = await fetchProducts();
    showProducts('men', products);

    document.getElementById('menBtn').addEventListener('click', () => showProducts('men', products));
    document.getElementById('womenBtn').addEventListener('click', () => showProducts('women', products));
    document.getElementById('kidsBtn').addEventListener('click', () => showProducts('kids', products));
}

document.addEventListener('DOMContentLoaded', initialize);
