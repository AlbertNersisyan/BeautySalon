// Common UI interactions

document.addEventListener('DOMContentLoaded', () => {
    // Set active nav link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links li a:not(.cart-icon-link)');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('active');
        }
    });

    // Update cart badge count
    updateCartBadge();
});

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    badge.textContent = cart.length;
    badge.style.display = cart.length > 0 ? 'flex' : 'none';
}

function showToast(message, icon = '🛍️') {
    // Remove existing toast if any
    const existing = document.getElementById('global-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span> ${message}`;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('show'));
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 350);
    }, 2800);
}

function createCard(title, description, price, imageUrl, buttonHtml = '') {
    return `
        <div class="card">
            <div class="card-img-container">
                <img src="${imageUrl}" alt="${title}" class="card-img">
            </div>
            <div class="card-content">
                <h3 class="card-title">${title}</h3>
                <p class="card-desc">${description}</p>
                <p class="card-price">$${price.toFixed(2)}</p>
                ${buttonHtml}
            </div>
        </div>
    `;
}
