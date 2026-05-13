document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});

function loadCart() {
    const cartContainer = document.getElementById('cart-container');
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2 style="margin-bottom: 20px;">Your bag is empty</h2>
                <a href="/products.html" class="btn">Shop Products</a>
            </div>
        `;
        return;
    }

    let total = 0;
    let html = `
        <div style="background: var(--primary-color); padding: 30px; border-radius: 8px; box-shadow: var(--shadow);">
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="border-bottom: 2px solid var(--accent-color);">
                        <th style="padding: 15px 10px;">Product</th>
                        <th style="padding: 15px 10px;">Price</th>
                        <th style="padding: 15px 10px; text-align: right;">Action</th>
                    </tr>
                </thead>
                <tbody>
    `;

    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <tr style="border-bottom: 1px solid var(--gray-light);">
                <td style="padding: 20px 10px; display: flex; align-items: center; gap: 15px;">
                    <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                    <span style="font-weight: 500;">${item.name}</span>
                </td>
                <td style="padding: 20px 10px;">$${item.price.toFixed(2)}</td>
                <td style="padding: 20px 10px; text-align: right;">
                    <button onclick="removeFromCart(${index})" title="Remove" style="background: none; border: none; cursor: pointer; font-size: 1.4rem; color: #e74c3c; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'">🗑️</button>
                </td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
            <div style="text-align: right; margin-top: 30px;">
                <h3 style="margin-bottom: 15px;">Total: <span style="color: var(--accent-color);">$${total.toFixed(2)}</span></h3>
                <button class="btn" onclick="alert('Checkout functionality coming soon!'); localStorage.removeItem('cart'); loadCart();">Checkout</button>
            </div>
        </div>
    `;

    cartContainer.innerHTML = html;
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const removed = cart[index];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    if (removed) showToast(`"${removed.name}" removed from your bag`, '🗑️');
    loadCart();
}
