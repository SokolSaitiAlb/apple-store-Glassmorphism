console.log("🚀 Script.js u ngarkua dhe është gati!");

// Funksioni për të shtuar në shportë
function shtoNeShporte(emri) {
    console.log("Duke shtuar në shportë:", emri);
    let shporta = JSON.parse(localStorage.getItem('apple_cart')) || [];
    shporta.push({ emri: emri, koha: new Date().toLocaleString() });
    localStorage.setItem('apple_cart', JSON.stringify(shporta));

    alert("SHTUAR: " + emri + "\nShporta tani ka " + shporta.length + " produkte.");
}

// Event Listener për klikimet
document.addEventListener('click', function (e) {
    // Kontrollojmë nëse klikimi u bë mbi butonin "Bli Tani"
    if (e.target && e.target.innerText.trim() === 'Bli Tani') {
        e.preventDefault(); // Parandalon çdo sjellje default

        console.log("🛒 Butoni u klikua!");

        // Strategjia e re: Ngjitemi lart deri sa të gjejmë elementin që ka tekstin e produktit
        // Kërkojmë në prindin direkt, ose prindin e prindit (deri në 5 nivele lart)
        let prindi = e.target.parentElement;
        let emriGjetur = "Produkt pa emër";

        for (let i = 0; i < 5; i++) {
            if (!prindi) break;
            // Shiko nëse ky prind ka një H1, H2 ose H3 brenda tij
            let titulli = prindi.querySelector('h1, h2, h3');
            if (titulli) {
                emriGjetur = titulli.innerText;
                break;
            }
            prindi = prindi.parentElement;
        }

        shtoNeShporte(emriGjetur);
    }
});
