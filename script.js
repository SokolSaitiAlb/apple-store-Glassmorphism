async function loadStore() {
    const response = await fetch('products.json');
    const products = await response.json();
    
    const displayProducts = (list) => {
        const grid = document.getElementById('productGrid');
        grid.innerHTML = list.map(p => `
            <div class="glass-card">
                <img src="${p.image}" class="product-img">
                <h2>${p.name}</h2>
                <p style="opacity:0.6">${p.desc}</p>
                <div style="display:flex; justify-content:space-between; margin-top:20px">
                    <span style="font-weight:bold">${p.price}</span>
                    <button style="padding:10px 20px; border-radius:10px; border:none; cursor:pointer">Bli Tani</button>
                </div>
            </div>
        `).join('');
    };

    displayProducts(products);

    // Sidebar Logic
    const sidebar = document.getElementById('sidebar');
    document.getElementById('openMenu').onclick = () => sidebar.classList.add('active');
    document.getElementById('closeMenu').onclick = () => sidebar.classList.remove('active');

    // Filtering from Sidebar
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.onclick = (e) => {
            const cat = e.target.closest('a').dataset.filter;
            displayProducts(products.filter(p => p.category === cat));
            sidebar.classList.remove('active');
        };
    });
}

document.addEventListener('DOMContentLoaded', loadStore);
