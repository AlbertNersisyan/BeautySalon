// ============================================================
//  products.js  –  STATIC MODE
//  Reads from STATIC_PRODUCTS via the mock fetchAPI() in api.js
// ============================================================

document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    try {
        // STATIC: fetchAPI returns STATIC_PRODUCTS (no server needed)
        // ORIGINAL: const products = await fetchAPI('/api/products');
        const products = await fetchAPI('/api/products');

        if (products.length === 0) {
            grid.innerHTML = '<p style="text-align:center;">No products found.</p>';
            return;
        }

        const defaultImg = 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=800&q=80';

        grid.innerHTML = products.map(product => {
            const imgUrl = product.images && product.images.length > 0 ? product.images[0] : defaultImg;
            return `
                <div class="card">
                    <div class="card-img-container">
                        <img src="${imgUrl}" alt="${product.name}" class="card-img"
                             onerror="this.onerror=null;this.src='${defaultImg}'">
                    </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${product.name}</h3>
                        <p class="card-price">$${product.price.toFixed(2)}</p>
                        <a href="/product.html?id=${product._id}" class="btn">View Details</a>
                    </div>
                </div>
            `;
        }).join('');

    } catch (error) {
        grid.innerHTML = '<p style="text-align:center;">Failed to load products.</p>';
    }
});
