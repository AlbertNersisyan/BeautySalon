// ============================================================
//  login.js  –  STATIC MODE
//  Real server auth call is commented out.
//  A hardcoded username/password check is used instead.
//  Demo credentials:  admin / admin123
// ============================================================

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');

    // ORIGINAL (server auth):
    // try {
    //     const response = await fetch(`${BASE_URL}/api/auth/login`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ username, password })
    //     });
    //     const data = await response.json();
    //     if (!response.ok) {
    //         throw new Error(data.message || 'Login failed');
    //     }
    //     localStorage.setItem('adminToken', data.token);
    //     window.location.href = '/admin.html';
    // } catch (err) {
    //     errorDiv.innerText = err.message;
    //     errorDiv.style.display = 'block';
    // }

    // STATIC: mock credential check (frontend only)
    await new Promise(r => setTimeout(r, 300)); // simulate network

    const DEMO_USERNAME = 'admin';
    const DEMO_PASSWORD = 'admin123';

    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
        localStorage.setItem('adminToken', 'static-demo-token');
        window.location.href = '/admin.html';
    } else {
        errorDiv.innerText = 'Invalid credentials. Use admin / admin123 for this demo.';
        errorDiv.style.display = 'block';
    }
});
