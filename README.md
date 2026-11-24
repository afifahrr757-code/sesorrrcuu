# ColorPop — Cute Accessories Store

Website katalog dan toko aksesori lucu warna-warni dengan tampilan responsif. Dibuat menggunakan HTML, CSS, dan JavaScript, sehingga bisa dipublikasikan melalui GitHub Pages.

## Fitur
- Landing page dengan tampilan colorful dan modern.
- Katalog produk contoh beserta harga.
- Filter kategori dan fitur pencarian.
- Keranjang belanja: tambah produk, lihat subtotal, dan hapus produk.
- Tombol checkout yang menyiapkan ringkasan pesanan melalui WhatsApp.
- Tampilan menyesuaikan desktop, tablet, dan ponsel.

## File
- `index.html` — struktur halaman website.
- `style.css` — desain, warna, layout, dan responsive styling.
- `script.js` — katalog, filter, pencarian, keranjang, dan checkout.
- `README.md` — panduan proyek.

## Cara menjalankan di komputer
1. Ekstrak file ZIP.
2. Buka folder `colorpop_accessories`.
3. Klik dua kali `index.html` atau buka melalui browser.
4. Pastikan koneksi internet tersedia agar Google Fonts dapat dimuat.

## Cara mengganti produk
Buka `script.js`, lalu ubah daftar pada bagian `const products`. Setiap produk memiliki:
- `name`: nama produk.
- `category`: kategori (`hair`, `jewelry`, `bags`, atau `stationery`).
- `label`: nama kategori yang ditampilkan.
- `price`: harga dalam angka Rupiah.
- `emoji`: ilustrasi sementara produk.
- `bg`: warna latar kartu produk.
- `tag`: label promosi (boleh dikosongkan).

Untuk menambah produk, salin salah satu objek produk dan ubah nilainya. Foto produk asli dapat ditambahkan kemudian dengan mengganti emoji pada template kartu di `script.js` menjadi elemen gambar.

## Mengatur checkout WhatsApp
Di bagian akhir `script.js`, cari:
`const adminNumber="6281234567890";`

Ganti dengan nomor WhatsApp admin milik toko, memakai format internasional tanpa tanda `+`, spasi, atau tanda hubung. Contoh format Indonesia: `628xxxxxxxxxx`.

## Publikasi gratis dengan GitHub Pages
1. Masuk ke GitHub dan buat repository baru, misalnya `colorpop-store`.
2. Upload semua file di dalam folder ini (`index.html`, `style.css`, `script.js`, dan `README.md`) ke repository.
3. Buka **Settings → Pages**.
4. Pada bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses publikasi selesai. GitHub akan menampilkan alamat website di halaman Pages.

## Catatan penting
Website ini adalah **prototype front-end**. Keranjang dan katalog berjalan di browser, sedangkan checkout hanya membuka WhatsApp dengan ringkasan pesanan. Belum ada database, akun/login pelanggan, stok real-time, payment gateway, atau dashboard admin. Untuk transaksi sungguhan, tambahkan backend dan sistem pembayaran yang aman.
