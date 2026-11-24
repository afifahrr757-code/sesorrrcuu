const products = [
  {id:1,name:"Pastel Flower Hair Clip",category:"hair",label:"Hair clips",price:18000,emoji:"🌼",bg:"#fff0c7",tag:"BEST SELLER"},
  {id:2,name:"Cherry Pop Earrings",category:"jewelry",label:"Jewelry",price:25000,emoji:"🍒",bg:"#ffe1e8",tag:"NEW"},
  {id:3,name:"Cloud Nine Mini Bag",category:"bags",label:"Mini bags",price:59000,emoji:"☁️",bg:"#e8e1ff",tag:"CUTE PICK"},
  {id:4,name:"Rainbow Bead Bracelet",category:"jewelry",label:"Jewelry",price:22000,emoji:"🌈",bg:"#e0f5eb",tag:""},
  {id:5,name:"Teddy Bear Hair Claw",category:"hair",label:"Hair clips",price:28000,emoji:"🧸",bg:"#f4e5d7",tag:"FAVORITE"},
  {id:6,name:"Strawberry Pouch",category:"bags",label:"Mini bags",price:42000,emoji:"🍓",bg:"#ffe6ed",tag:""},
  {id:7,name:"Smiley Sticky Notes",category:"stationery",label:"Cute stuff",price:15000,emoji:"🌞",bg:"#fff1b9",tag:"UNDER 20K"},
  {id:8,name:"Kawaii Phone Charm",category:"stationery",label:"Cute stuff",price:20000,emoji:"🎀",bg:"#f1e5ff",tag:""}
];
let cart = [];
let activeCategory = "all";
const rupiah = n => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

function renderProducts(){
  const query = searchInput.value.toLowerCase().trim();
  const shown = products.filter(p => (activeCategory==="all" || p.category===activeCategory) && (p.name.toLowerCase().includes(query) || p.label.toLowerCase().includes(query)));
  grid.innerHTML = shown.map(p=>`
    <article class="product-card">
      <div class="product-visual" style="background:${p.bg}">
        ${p.tag?`<span class="product-tag">${p.tag}</span>`:""}
        <span class="emoji">${p.emoji}</span>
        <button class="quick-add" data-add="${p.id}" aria-label="Tambah ${p.name} ke keranjang">+</button>
      </div>
      <div class="product-info"><span class="product-category">${p.label}</span><h3>${p.name}</h3>
        <div class="product-bottom"><span class="price">${rupiah(p.price)}</span><span class="rating">★ 4.9</span></div>
      </div>
    </article>`).join("");
  document.getElementById("emptyState").hidden = shown.length!==0;
}
function renderCart(){
  document.getElementById("cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("drawerCount").textContent=`(${cart.reduce((s,i)=>s+i.qty,0)})`;
  document.getElementById("cartTotal").textContent=rupiah(cart.reduce((s,i)=>s+i.price*i.qty,0));
  const target=document.getElementById("cartItems");
  target.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><div class="cart-item-emoji" style="background:${i.bg}">${i.emoji}</div><div class="cart-item-info"><b>${i.name}</b><small>${i.qty} × ${rupiah(i.price)}</small></div><button class="remove-item" data-remove="${i.id}" aria-label="Hapus ${i.name}">×</button></div>`).join(""):'<p class="cart-empty">Keranjangmu masih kosong. Yuk cari yang lucu! ♡</p>';
}
function showToast(){const t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}
grid.addEventListener("click",e=>{const btn=e.target.closest("[data-add]");if(!btn)return;const p=products.find(x=>x.id===Number(btn.dataset.add));const existing=cart.find(x=>x.id===p.id);existing?existing.qty++:cart.push({...p,qty:1});renderCart();showToast()});
document.getElementById("cartItems").addEventListener("click",e=>{const btn=e.target.closest("[data-remove]");if(!btn)return;cart=cart.filter(x=>x.id!==Number(btn.dataset.remove));renderCart()});
document.getElementById("filters").addEventListener("click",e=>{const btn=e.target.closest("[data-category]");if(!btn)return;activeCategory=btn.dataset.category;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===btn));renderProducts()});
searchInput.addEventListener("input",renderProducts);
const openCart=()=>document.body.classList.add("cart-open");
const closeCart=()=>document.body.classList.remove("cart-open");
document.getElementById("cartToggle").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
document.getElementById("drawerBackdrop").addEventListener("click",closeCart);
document.getElementById("searchToggle").addEventListener("click",()=>{document.getElementById("searchBox").scrollIntoView({behavior:"smooth",block:"center"});searchInput.focus()});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open")));
document.getElementById("checkoutBtn").addEventListener("click",()=>{
  if(!cart.length){showToast();return}
  const lines=cart.map(i=>`• ${i.name} (${i.qty}x) — ${rupiah(i.price*i.qty)}`).join("%0A");
  const total=rupiah(cart.reduce((s,i)=>s+i.price*i.qty,0));
  const message=`Halo ColorPop! Saya ingin memesan:%0A${lines}%0A%0ASubtotal: ${total}%0A%0AMohon info cara pembayarannya.`;
  // Ganti nomor di bawah dengan nomor WhatsApp admin (format 62, tanpa + atau spasi).
  const adminNumber="6281234567890";
  window.open(`https://wa.me/${adminNumber}?text=${message}`,"_blank");
});
renderProducts();renderCart();
