document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    try {
        const products = await fetchAPI('/api/products');
        if (products.length === 0) {
            grid.innerHTML = '<p style="text-align:center;">No products found.</p>';
            return;
        }
        
        grid.innerHTML = products.map(product => {
            const defaultImg = 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop';
            const imgUrl = product.images && product.images.length > 0 ? product.images[0] : defaultImg;
            
            return `
                <div class="card">
                    <div class="card-img-container">
                        <img src="${imgUrl}" alt="${product.name}" class="card-img">
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
