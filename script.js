let cart = JSON.parse(localStorage.getItem('apple_cart')) || [];

// 1. Ngarkimi i produkteve nga JSON
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Gabim gjatë ngarkimit:", error);
    }
}

// 2. Renderimi i produkteve me data-id
function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(product => `
        <div class="product-card glass">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="buy-btn" data-id="${product.id}">Bli Tani</button>
        </div>
    `).join('');
}

// 3. Menaxhimi i Shportës
function addToCart(id) {
    fetch('products.json')
        .then(res => res.json())
        .then(products => {
            const product = products.find(p => p.id === id);
            const inCart = cart.find(item => item.id === id);

            if (inCart) {
                inCart.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            saveAndSync();
            showToast(`${product.name} u shtua!`);
        });
}

function saveAndSync() {
    localStorage.setItem('apple_cart', JSON.stringify(cart));
    updateUI();
}

function updateUI() {
    // Përditëso numrin te ikona
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const badge = document.querySelector('.cart-count');
    badge.textContent = count;
    badge.style.display = count > 0 ? 'block' : 'none';

    // Përditëso përmbajtjen e modalit
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total');
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}">
            <div>
                <h4>${item.name}</h4>
                <p>${item.quantity} x ${item.price}</p>
            </div>
            <button onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');

    const total = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return acc + (price * item.quantity);
    }, 0);
    
    totalEl.textContent = `$${total.toFixed(2)}`;
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveAndSync();
}

// 4. Toast Notification
function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// 5. Event Listeners
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn')) {
        addToCart(parseInt(e.target.dataset.id));
    }
    
    if (e.target.id === 'cart-btn') {
        document.getElementById('cart-modal').style.display = 'block';
    }
    
    if (e.target.classList.contains('close-modal')) {
        document.getElementById('cart-modal').style.display = 'none';
    }
});

// Inicializimi
window.onload = () => {
    fetchProducts();
    updateUI();
};

