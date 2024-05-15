// script.js
function toggleSubMenu(event) {
    event.preventDefault();
    var aboutSubMenu = document.getElementById("aboutSubMenu");
    aboutSubMenu.style.display = (aboutSubMenu.style.display === "block") ? "none" : "block";
}


// Fungsi untuk mengirim formulir kontak
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validasi input
    if (name === "" || email === "" || message === "") {
        alert("Silakan lengkapi semua kolom formulir.");
        return false;
    }

    // Di sini kamu dapat menambahkan logika untuk mengirim formulir ke backend

    alert("Pesan berhasil dikirim.\n\nNama: " + name + "\nEmail: " + email + "\nPesan: " + message);
    document.getElementById("contactForm").reset(); // Mengosongkan formulir setelah pengiriman berhasil
    return false; // Menghentikan pengiriman formulir (untuk mencegah pengiriman default)
}
