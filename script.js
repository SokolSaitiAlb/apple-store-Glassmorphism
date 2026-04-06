// 1. Prisni derisa të ngarkohet e gjithë faqja
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM u ngarkua. Sistemi i shportës është gati!");

    // 2. Event Delegation: Dëgjo çdo klikim në faqe
    document.addEventListener('click', (e) => {
        // Kontrollojmë nëse klikimi është bërë mbi butonin "Bli Tani"
        if (e.target && e.target.innerText.includes('Bli Tani')) {
            
            // Marrim emrin e produktit që është sipër butonit (për njoftim)
            const productCard = e.target.closest('div');
            const productName = productCard ? productCard.querySelector('h2, h3')?.innerText : "Produkt";

            console.log(`SUKSES: Klikove mbi ${productName}`);
            
            // Thirr funksionin për shtim në shportë
            addToCart(productName);
        }
    });
});

// 3. Funksioni i Shportës
function addToCart(name) {
    // Marrim shportën ekzistuese nga LocalStorage
    let cart = JSON.parse(localStorage.getItem('apple_cart')) || [];
    
    // Shtojmë produktin e ri
    cart.push({
        id: Date.now(),
        name: name,
        date: new Date().toISOString()
    });

    // Ruajmë shportën e përditësuar
    localStorage.setItem('apple_cart', JSON.stringify(cart));

    // Shfaqim njoftimin (Alert-i është më i sigurt për test)
    alert(`✅ ${name} u shtua në shportë!\nTotal produkte: ${cart.length}`);
    
    console.log("Shporta aktuale:", cart);
}
