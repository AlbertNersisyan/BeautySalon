let currentType = 'products'; // 'products' or 'services'
let editingId = null; // track currently editing item ID

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('adminToken')) {
        window.location.href = '/login.html';
        return;
    }
    loadList();

    document.getElementById('admin-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        await saveItem();
    });
});

function switchTab(type) {
    currentType = type;
    
    document.querySelectorAll('.admin-nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const titleType = type === 'products' ? 'Product' : 'Service';
    document.getElementById('form-title').innerText = `Add New ${titleType}`;
    document.getElementById('list-title').innerText = `Manage ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    document.getElementById('item-type').value = type;

    if (type === 'products') {
        document.getElementById('image-group-products').classList.remove('section-hidden');
        document.getElementById('image-group-services').classList.add('section-hidden');
        document.getElementById('item-images').required = true;
        document.getElementById('item-image').required = false;
    } else {
        document.getElementById('image-group-products').classList.add('section-hidden');
        document.getElementById('image-group-services').classList.remove('section-hidden');
        document.getElementById('item-images').required = false;
        document.getElementById('item-image').required = false;
    }

    resetForm();
    loadList();
}

async function loadList() {
    const listContainer = document.getElementById('admin-list');
    listContainer.innerHTML = '<div class="loader">Loading...</div>';

    try {
        const items = await fetchAPI(`/api/${currentType}`);
        
        if (items.length === 0) {
            listContainer.innerHTML = '<p>No items found.</p>';
            return;
        }

        listContainer.innerHTML = items.map(item => `
            <div class="admin-item">
                <div class="admin-item-info">
                    <strong>${item.name}</strong>
                    <span style="color: var(--gray-dark)">$${item.price.toFixed(2)}</span>
                </div>
                <div class="admin-actions">
                    <button class="btn btn-outline" onclick="editItem('${item._id}')" style="padding: 6px 12px; font-size: 0.85rem;">Edit</button>
                    <button class="btn delete-btn" onclick="deleteItem('${item._id}')">Delete</button>
                </div>
            </div>
        `).join('');
    } catch (err) {
        listContainer.innerHTML = `<p style="color: red;">Failed to load ${currentType}.</p>`;
    }
}

async function saveItem() {
    const name = document.getElementById('item-name').value;
    const price = document.getElementById('item-price').value;
    const description = document.getElementById('item-desc').value;

    let payload = new FormData();
    payload.append('name', name);
    payload.append('price', price);
    payload.append('description', description);

    if (currentType === 'products') {
        const fileInput = document.getElementById('item-images');
        if (fileInput.files.length > 0) {
            for (let i = 0; i < fileInput.files.length; i++) {
                payload.append('images', fileInput.files[i]);
            }
        }
    } else {
        const fileInput = document.getElementById('item-image');
        if (fileInput.files.length > 0) {
            payload.append('image', fileInput.files[0]);
        }
    }

    const btn = document.getElementById('submit-btn');
    btn.innerText = 'Saving...';
    btn.disabled = true;

    try {
        if (editingId) {
            await fetchAPI(`/api/${currentType}/${editingId}`, { method: 'PUT', body: payload });
            alert('Item updated successfully!');
        } else {
            await fetchAPI(`/api/${currentType}`, { method: 'POST', body: payload });
            alert('Item created successfully!');
        }
        resetForm();
        loadList();
    } catch (err) {
        alert('Failed to save item: ' + err.message);
    } finally {
        btn.innerText = editingId ? 'Update Item' : 'Save Item';
        btn.disabled = false;
    }
}

async function editItem(id) {
    try {
        const item = await fetchAPI(`/api/${currentType}/${id}`);
        editingId = item._id;

        document.getElementById('item-name').value = item.name;
        document.getElementById('item-price').value = item.price;
        document.getElementById('item-desc').value = item.description;
        // File inputs can't be pre-filled — user re-uploads only if they want to change image

        const titleType = currentType === 'products' ? 'Product' : 'Service';
        document.getElementById('form-title').innerText = `Edit ${titleType}: ${item.name}`;
        document.getElementById('submit-btn').innerText = 'Update Item';
        document.getElementById('cancel-btn').style.display = 'block';
        
        // File inputs optional when editing
        document.getElementById('item-images').required = false;
        document.getElementById('item-image').required = false;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
        alert('Failed to fetch item details.');
    }
}

async function deleteItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
        await fetchAPI(`/api/${currentType}/${id}`, { method: 'DELETE' });
        loadList();
    } catch (err) {
        alert('Failed to delete item: ' + err.message);
    }
}

function resetForm() {
    document.getElementById('admin-form').reset();
    editingId = null;
    
    const titleType = currentType === 'products' ? 'Product' : 'Service';
    document.getElementById('form-title').innerText = `Add New ${titleType}`;
    document.getElementById('submit-btn').innerText = 'Save Item';
    document.getElementById('cancel-btn').style.display = 'none';

    if (currentType === 'products') {
        document.getElementById('item-images').required = true;
    }
}

function logout() {
    localStorage.removeItem('adminToken');
    window.location.href = '/login.html';
}
