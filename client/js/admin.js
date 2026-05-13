// ============================================================
//  admin.js  –  STATIC MODE (read-only demo, no server needed)
//  All POST / PUT / DELETE API calls are commented out.
//  The list is populated from STATIC_PRODUCTS / STATIC_SERVICES.
//  Add / Edit / Delete actions show an info message instead.
// ============================================================

let currentType = 'products'; // 'products' or 'services'
let editingId = null;

// In-memory copies so the demo UI stays interactive
let _products = JSON.parse(JSON.stringify(STATIC_PRODUCTS));
let _services = JSON.parse(JSON.stringify(STATIC_SERVICES));

document.addEventListener('DOMContentLoaded', () => {
    // STATIC: skip token check so admin panel is always visible in demo
    // ORIGINAL:
    // if (!localStorage.getItem('adminToken')) {
    //     window.location.href = '/login.html';
    //     return;
    // }

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

function _getList() {
    return currentType === 'products' ? _products : _services;
}

async function loadList() {
    const listContainer = document.getElementById('admin-list');
    listContainer.innerHTML = '<div class="loader">Loading...</div>';

    // STATIC: use in-memory arrays instead of a real API call
    // ORIGINAL: const items = await fetchAPI(`/api/${currentType}`);
    await new Promise(r => setTimeout(r, 80)); // tiny delay for feel
    const items = _getList();

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
}

async function saveItem() {
    const name = document.getElementById('item-name').value;
    const price = parseFloat(document.getElementById('item-price').value);
    const description = document.getElementById('item-desc').value;

    // STATIC: build an in-memory object instead of sending FormData to the server
    // ORIGINAL:
    // let payload = new FormData();
    // payload.append('name', name);
    // payload.append('price', price);
    // payload.append('description', description);
    // if (currentType === 'products') { ... payload.append('images', file) ... }
    // await fetchAPI(`/api/${currentType}`, { method: 'POST', body: payload });

    const btn = document.getElementById('submit-btn');
    btn.innerText = 'Saving...';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 200));

    try {
        const list = _getList();

        if (editingId) {
            // Update existing item in memory
            const idx = list.findIndex(i => i._id === editingId);
            if (idx !== -1) {
                list[idx] = { ...list[idx], name, price, description };
            }
            alert('✅ Item updated! (demo only – not saved to server)');
        } else {
            // Create new item in memory
            const newItem = {
                _id: 'static-' + Date.now(),
                name,
                price,
                description,
                images: [],
                image: ''
            };
            list.push(newItem);
            alert('✅ Item created! (demo only – not saved to server)');
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
    // STATIC: find item in memory instead of calling the API
    // ORIGINAL: const item = await fetchAPI(`/api/${currentType}/${id}`);
    const list = _getList();
    const item = list.find(i => i._id === id);

    if (!item) {
        alert('Item not found.');
        return;
    }

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
}

async function deleteItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    // STATIC: remove from in-memory array instead of calling the API
    // ORIGINAL: await fetchAPI(`/api/${currentType}/${id}`, { method: 'DELETE' });
    if (currentType === 'products') {
        _products = _products.filter(p => p._id !== id);
    } else {
        _services = _services.filter(s => s._id !== id);
    }

    loadList();
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
