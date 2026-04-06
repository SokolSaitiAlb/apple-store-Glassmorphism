document.addEventListener('click', function(e) {
    // Kjo do të na tregojë në Console saktësisht çfarë po klikon
    console.log("Ti klikove mbi:", e.target);

    if (e.target.classList.contains('buy-btn')) {
        const productId = e.target.getAttribute('data-id');
        console.log("SUKSES: Po shtohet produkti me ID:", productId);
        
        // Këtu thirret funksioni i shportës
        addToCart(parseInt(productId));
    }
});

function addToCart(id) {
    // Logjika e shportës (LocalStorage)
    let cart = JSON.parse(localStorage.getItem('apple_cart')) || [];
    cart.push(id); 
    localStorage.setItem('apple_cart', JSON.stringify(cart));
    
    alert("Produkti u shtua në shportë!"); // Test i thjeshtë
}
