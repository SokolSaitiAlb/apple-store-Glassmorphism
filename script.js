// Kjo i detyron butonat të bëhen funksionalë edhe nëse shtohen më vonë
document.addEventListener('click', function (e) {
    if (e.target && e.target.innerText === 'Bli Tani') {
        alert('Butoni punon! Po e shtojmë në shportë...');
        addToCart(e.target);
    }
});

function addToCart(element) {
    let cart = JSON.parse(localStorage.getItem('apple_cart')) || [];
    cart.push("Produkt"); // Test i shpejtë
    localStorage.setItem('apple_cart', JSON.stringify(cart));
    console.log("Shporta aktuale:", cart);
}
