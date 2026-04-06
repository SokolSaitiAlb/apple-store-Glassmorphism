async function initApp() {
    const res = await fetch('products.json');
    const products = await res.json();
    
    const render = (items) => {
        document.getElementById('productGrid').innerHTML = items.map(p => `
            <div class="glass-card">
                <img src="${p.image}" class="product-img">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div style="display:flex; justify-content:space-between; align-items:center">
                    <span>${p.price}</span>
                    <button class="add-btn">Shto</button>
                </div>
            </div>
        `).join('');
    };

    render(products);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const cat = e.target.dataset.category;
            render(cat === 'all' ? products : products.filter(p => p.category === cat));
        });
    });
}
initApp();
