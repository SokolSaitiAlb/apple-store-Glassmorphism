// Konfirmojmë që skedari u ngarkua
console.log("🚀 Script.js u aktivizua me sukses!");

document.addEventListener('click', function (e) {
    // Kontrollojmë nëse klikimi u bë mbi butonin "Bli Tani"
    if (e.target && e.target.innerText.trim() === 'Bli Tani') {
        console.log("🛒 Butoni u klikua! Po procesojmë...");
        
        // Gjejmë emrin e produktit (zakonisht është h2 ose h3 në card)
        const card = e.target.closest('div');
        const emri = card ? (card.querySelector('h2')?.innerText || card.querySelector('h3')?.innerText) : "Produkt i ri";

        shtoNeShporte(emri);
    }
});

function shtoNeShporte(emri) {
    let shporta = JSON.parse(localStorage.getItem('apple_cart')) || [];
    shporta.push({ emri: emri, koha: new Date().toLocaleString() });
    localStorage.setItem('apple_cart', JSON.stringify(shporta));
    
    // Njoftim vizual i menjëhershëm
    alert("SHTUAR: " + emri + "\nShporta tani ka " + shporta.length + " produkte.");
}
