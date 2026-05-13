const BASE_URL = 'http://localhost:5000';

async function fetchAPI(endpoint, options = {}) {
    const token = localStorage.getItem('adminToken');
    const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {};

    const isFormData = options.body instanceof FormData;
    const defaultHeaders = isFormData ? {} : { 'Content-Type': 'application/json' };
    
    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...authHeaders,
            ...options.headers
        }
    };

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        
        return data;
    } catch (err) {
        console.error('API Error:', err);
        throw err;
    }
}
