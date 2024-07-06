document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tabPanel');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const target = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('API Error:' + response.statusText);
            }
            return response.json();
        })
        .then(data => getProducts(data.categories))
        .catch(error => console.error('Error fetching product data from API:', error));

    function getProducts(categories) {
        categories.forEach(category => {
            const categoryName = category.category_name.toLowerCase();
            const tabPane = document.getElementById(categoryName);

            if (tabPane) {
                category.category_products.forEach(product => {
                    tabPane.appendChild(createProductElement(product));
                });
            }
        });
    }

    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const badge = product.badge_text ? `<div class="badge">${product.badge_text}</div>` : '';
        const discountPercentage = calculateDiscount(product.price, product.compare_at_price);

        productElement.innerHTML = `
            ${badge}
            <img src="${product.image}" alt="${product.title}">
            <div class="productInfo">
                <h2>${product.title}</h2>
                <p>•</p>
                <p>${product.vendor}</p>
            </div>
            <div class="priceInfo">
                <p class="finalPrice">Rs ${product.price}</p>
                <p class="originalPrice">Rs ${product.compare_at_price}</p>
                <p class="discount">${discountPercentage}% Off</p>
            </div>
            <button>Add to Cart</button>
        `;

        return productElement;
    }

    function calculateDiscount(price, compareAtPrice) {
        return ((1 - (price / compareAtPrice)) * 100).toFixed(0);
    }
});
