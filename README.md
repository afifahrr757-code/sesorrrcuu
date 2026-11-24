# THRIFTERRA — Curated International Thrift & Vintage E-Commerce

Website e-commerce statis modern untuk platform jual beli pakaian *thrift* dan *vintage* kurasi mancanegara (Jepang, Korea Selatan, Amerika Serikat, dan Italia). Dirancang khusus agar siap di-hosting secara gratis menggunakan **GitHub Pages**.

---

## ✨ Fitur Utama untuk Pengunjung (Client)

1. **Katalog Kurasi Mancanegara**:
   - Filter produk berdasarkan negara asal (*Jepang, Korea Selatan, USA, Italia*).
   - Pencarian *real-time* berdasarkan nama barang, brand, atau kategori.
   - Modal detail produk lengkap dengan ukuran aktual (`P x L`), kondisi fisik, dan kota asal kurasi.
2. **Sistem Autentikasi (Login & Register)**:
   - Pengunjung dapat masuk atau mendaftar akun baru.
   - Sesi login tersimpan otomatis menggunakan `localStorage` browser.
3. **Keranjang Belanja & Checkout Lengkap**:
   - Slide-over keranjang belanja interaktif dengan perhitungan subtotal dan gratis ongkir otomatis (minimal belanja Rp 350.000).
   - Validasi login sebelum checkout.
   - Form checkout lengkap (nama penerima, WhatsApp, alamat, pilihan kurir, dan metode pembayaran).
   - **Sistem Stok 1-of-1**: Item yang sudah di-checkout otomatis berubah status menjadi **SOLD OUT** dan muncul di bagian **Riwayat Pesanan Saya**.

---

## 📁 Struktur File

```text
thrifterra-website/
├── index.html   # Struktur utama halaman, modal login, keranjang, & checkout
├── style.css    # Kustomisasi CSS, animasi modal, & styling tambahan
├── app.js       # Logika katalog, filter, login/register, keranjang, & checkout
└── README.md    # Dokumentasi proyek & panduan deploy ke GitHub Pages
```

---

## 🚀 Cara Menjalankan & Deploy ke GitHub Pages

### 1. Menjalankan di Komputer Lokal
Cukup ekstrak file ZIP ini, lalu klik dua kali file `index.html` untuk membukanya langsung di browser (Chrome, Edge, Safari, atau Firefox).

### 2. Upload & Hosting Gratis di GitHub Pages
1. Buat repository baru di [GitHub](https://github.com) (misalnya beri nama `thrifterra-store`).
2. Upload seluruh file (`index.html`, `style.css`, `app.js`, dan `README.md`) ke dalam repository tersebut.
3. Buka tab **Settings** pada repository Anda > pilih menu **Pages** di sebelah kiri.
4. Pada bagian **Build and deployment > Branch**, pilih `main` (atau `master`) dengan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1–2 menit, dan website Anda akan langsung online di alamat `https://<username-github>.github.io/thrifterra-store/`.

---

## 🛠️ Kustomisasi Produk
Untuk menambah atau mengubah daftar baju yang dijual, buka file `app.js` dan edit bagian array `PRODUCTS` di baris paling atas sesuai foto, harga, dan deskripsi stok Anda.
