document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const container = document.getElementById('product-container');

    if (!productId) {
        container.innerHTML = '<p>Product not found.</p>';
        return;
    }

    try {
        const product = await fetchAPI(`/api/products/${productId}`);
        
        let imagesHtml = '';
        let thumbnailsHtml = '';
        
        if (product.images && product.images.length > 0) {
            imagesHtml = `<img src="${product.images[0]}" alt="${product.name}" id="main-image" class="main-image">`;
            
            thumbnailsHtml = '<div class="thumbnail-container">';
            product.images.forEach((img, index) => {
                thumbnailsHtml += `<img src="${img}" alt="thumbnail" class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">`;
            });
            thumbnailsHtml += '</div>';
        } else {
            const defaultImg = 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop';
            imagesHtml = `<img src="${defaultImg}" alt="${product.name}" id="main-image" class="main-image">`;
        }

        container.innerHTML = `
            <div class="product-single">
                <div class="product-gallery">
                    ${imagesHtml}
                    ${thumbnailsHtml}
                </div>
                <div class="product-info">
                    <h1>${product.name}</h1>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <div class="description">
                        <p>${product.description.replace(/\n/g, '<br>')}</p>
                    </div>
                    <button class="btn" style="width: 100%; padding: 15px; font-size: 1.1rem;" onclick="addToCart('${product._id}', '${product.name}', ${product.price}, '${product.images && product.images.length > 0 ? product.images[0] : ''}')">Add to Cart</button>
                    <p id="cart-msg" style="color: var(--accent-color); font-weight: 500; margin-top: 15px; display: none;">Added to your beauty bag!</p>
                </div>
            </div>
        `;
    } catch (error) {
        container.innerHTML = '<p>Error loading product details.</p>';
    }
});

function changeImage(src, element) {
    document.getElementById('main-image').src = src;
    
    // Update active state
    document.querySelectorAll('.thumbnail').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function addToCart(id, name, price, image) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ id, name, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update badge immediately
    updateCartBadge();

    // Show toast
    showToast(`"${name}" added to your beauty bag!`);

    const msg = document.getElementById('cart-msg');
    if (msg) {
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 3000);
    }
}
