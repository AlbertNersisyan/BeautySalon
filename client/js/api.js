// ============================================================
//  api.js  –  STATIC MODE (no server required)
//  All real fetch() calls are commented out below.
//  Data is served from STATIC_PRODUCTS / STATIC_SERVICES
//  defined in static-data.js (loaded before this file).
// ============================================================

// const BASE_URL = 'http://localhost:5000';

// --- Original network helper (kept for reference) ---
// async function fetchAPI(endpoint, options = {}) {
//     const token = localStorage.getItem('adminToken');
//     const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {};
//
//     const isFormData = options.body instanceof FormData;
//     const defaultHeaders = isFormData ? {} : { 'Content-Type': 'application/json' };
//
//     const config = {
//         ...options,
//         headers: {
//             ...defaultHeaders,
//             ...authHeaders,
//             ...options.headers
//         }
//     };
//
//     try {
//         const response = await fetch(`${BASE_URL}${endpoint}`, config);
//         const data = await response.json();
//         if (!response.ok) {
//             throw new Error(data.message || 'Something went wrong');
//         }
//         return data;
//     } catch (err) {
//         console.error('API Error:', err);
//         throw err;
//     }
// }

// --- Static mock implementation ---
async function fetchAPI(endpoint) {
    // Simulate a tiny network delay so the UI feels natural
    await new Promise(resolve => setTimeout(resolve, 120));

    // GET /api/products
    if (endpoint === '/api/products') {
        return JSON.parse(JSON.stringify(STATIC_PRODUCTS));
    }

    // GET /api/services
    if (endpoint === '/api/services') {
        return JSON.parse(JSON.stringify(STATIC_SERVICES));
    }

    // GET /api/products/:id
    const productMatch = endpoint.match(/^\/api\/products\/(.+)$/);
    if (productMatch) {
        const product = STATIC_PRODUCTS.find(p => p._id === productMatch[1]);
        if (!product) throw new Error('Product not found');
        return JSON.parse(JSON.stringify(product));
    }

    // GET /api/services/:id
    const serviceMatch = endpoint.match(/^\/api\/services\/(.+)$/);
    if (serviceMatch) {
        const service = STATIC_SERVICES.find(s => s._id === serviceMatch[1]);
        if (!service) throw new Error('Service not found');
        return JSON.parse(JSON.stringify(service));
    }

    // Any other endpoint → empty array (safe fallback)
    console.warn('[Static API] Unrecognised endpoint:', endpoint);
    return [];
}
