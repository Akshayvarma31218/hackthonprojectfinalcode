<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Handlooms — Premium Store</title>

<style>
/* ===========================
   GLOBAL DESIGN
=========================== */
:root{
  --accent:#ff6a00;
  --accent2:#ff8c42;
  --bg:#faf9f7;
  --text:#222;
  --muted:#6b6b6b;
  --card:#fff;
  --radius:14px;
  --shadow:0 16px 40px rgba(0,0,0,0.08);
}

*{box-sizing:border-box;margin:0;padding:0}
body{
  font-family: 'Segoe UI', Arial, sans-serif;
  background:var(--bg);
  color:var(--text);
}

/* ===========================
   TOP NAVIGATION BAR
=========================== */
.topbar{
  position:sticky;top:0;z-index:999;
  background:#fff;
  padding:12px 18px;
  display:flex;align-items:center;gap:12px;
  border-bottom:1px solid #eee;
  box-shadow:0 3px 10px rgba(0,0,0,0.04);
}

.logo{
  display:flex;align-items:center;gap:12px;
}
.logo-icon{
  width:50px;height:50px;border-radius:12px;
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  display:flex;align-items:center;justify-content:center;
  color:#fff;font-size:22px;font-weight:800;
}
.logo-title{font-size:20px;font-weight:800}
.logo-sub{font-size:12px;color:var(--muted)}

.actions{
  margin-left:auto;
  display:flex;gap:10px;align-items:center;
}
.btn, .ghost{
  border:none;cursor:pointer;border-radius:10px;
  padding:8px 12px;font-weight:600;
}
.btn{
  background:var(--accent);color:#fff;
}
.ghost{
  background:#fff;border:1px solid #ddd;color:#333;
}

.icon-btn{
  width:40px;height:40px;border-radius:10px;
  background:#fff;border:1px solid #eee;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;
}
.icon-btn svg{width:20px;height:20px}

/* ===========================
   LAYOUT
=========================== */
.container{
  max-width:1250px;
  margin:20px auto;
  padding:0 15px;
  display:grid;
  gap:20px;
  grid-template-columns:260px 1fr;
}

/* Sidebar */
.sidebar{
  background:#fff;border-radius:var(--radius);
  padding:18px;border:1px solid #eee;
  box-shadow:var(--shadow);
  position:sticky;top:90px;
}
.sidebar h3{margin-bottom:12px;font-size:18px}
.sidebar label{display:block;font-size:14px;margin-top:10px;margin-bottom:5px}
.sidebar input, .sidebar select{
  width:100%;padding:8px;border-radius:10px;border:1px solid #ddd;
  margin-bottom:10px;
}
.sidebar .ghost{width:100%}

/* ===========================
   HOME CONTENT
=========================== */
.section-title{
  font-size:24px;font-weight:800;margin-bottom:10px;
}

.products{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
  gap:18px;
}

/* Product Card */
.card{
  background:#fff;border-radius:var(--radius);
  padding:14px;
  border:1px solid #eee;
  transition:0.25s;
  cursor:pointer;
  box-shadow:0 5px 15px rgba(0,0,0,0.05);
}
.card:hover{
  transform:translateY(-6px);
  box-shadow:var(--shadow);
}
.card img{
  width:100%;height:200px;
  object-fit:cover;border-radius:10px;
  margin-bottom:10px;
  transition:0.30s ease;
}
.card:hover img{transform:scale(1.06)}
.card h3{font-size:16px;margin-bottom:6px}
.price{font-size:17px;font-weight:800;color:#c0392b}

.card-buttons{
  display:flex;gap:10px;margin-top:10px;
}
.card-buttons .btn{flex:1}
.card-buttons .ghost{flex:1}

/* ===========================
   POPUPS (MODALS)
=========================== */
.popup{
  display:none;
  position:fixed;inset:0;
  background:rgba(0,0,0,0.5);
  align-items:center;justify-content:center;
  padding:20px;z-index:9999;
}
.box{
  background:#fff;border-radius:var(--radius);
  width:100%;max-width:650px;position:relative;
  padding:22px;
  box-shadow:var(--shadow);
}
.box.small{max-width:420px}
.close{
  position:absolute;top:15px;right:15px;
  font-size:20px;font-weight:bold;cursor:pointer;color:#555;
}

label{font-size:14px;margin-top:10px;display:block}
input, textarea, select{
  width:100%;padding:10px;border-radius:10px;
  border:1px solid #ddd;margin-top:6px;
}

/* Cart Items */
.cart-item{
  display:flex;gap:12px;padding:10px 0;
  border-bottom:1px dashed #eee;
}
.cart-item img{
  width:80px;height:80px;object-fit:cover;border-radius:10px;
}

/* ===========================
   FOOTER
=========================== */
footer{
  padding:25px 12px;
  background:#fff;border-top:1px solid #eee;
  text-align:center;margin-top:40px;color:#555;
}

/* Responsive */
@media(max-width:900px){
  .container{grid-template-columns:1fr}
  .topbar{flex-wrap:wrap}
}
</style>
</head>
<body>

<!-- ===========================
     TOP BAR
=========================== -->
<div class="topbar">
  <div class="logo">
    <div class="logo-icon">H</div>
    <div>
      <div class="logo-title">Handlooms</div>
      <div class="logo-sub">Authentic handcrafted textiles</div>
    </div>
  </div>

  <div class="actions">
    <button class="ghost" onclick="openPopup('referPopup')">🎁 Refer</button>
    <button class="ghost" onclick="openPopup('trackPopup')">🔍 Track</button>
    <button class="ghost" onclick="openPopup('historyPopup')">📦 Orders</button>
    <button class="ghost" onclick="openPopup('profilePopup')">👤 Profile</button>
    <button class="ghost" onclick="openCart()">🛒 <span id="cartCount">0</span></button>
    <button class="btn" id="loginBtn" onclick="openPopup('loginPopup')">Login</button>
    <button class="btn" id="logoutBtn" onclick="logout()" style="display:none;background:#777">Logout</button>

    <!-- SOCIAL ICONS: Instagram, Facebook, WhatsApp, Twitter -->
    <div style="display:flex;gap:6px;margin-left:4px">
      <!-- Instagram -->
      <a class="icon-btn" href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7Z" stroke="#E4405F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8.5C9.51472 8.5 7.5 10.5147 7.5 13C7.5 15.4853 9.51472 17.5 12 17.5C14.4853 17.5 16.5 15.4853 16.5 13C16.5 10.5147 14.4853 8.5 12 8.5Z" stroke="#E4405F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.8 6.2H17.81" stroke="#E4405F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <!-- Facebook -->
      <a class="icon-btn" href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener">
        <svg viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.675C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.349 14.683 3.7 17.45 3.7C18.776 3.7 19.915 3.798 20.247 3.842V7.082L18.329 7.083C16.825 7.083 16.533 7.798 16.533 8.846V11.159H20.12L19.653 14.781H16.533V24H22.675C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"/>
        </svg>
      </a>

      <!-- WhatsApp -->
      <a class="icon-btn" href="https://wa.me/0000000000" target="_blank" aria-label="WhatsApp" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20.52 3.48C18.93 1.89 16.65 0.98 14.25 1C10.07 1.03 6.59 4.5 6.52 8.7C6.47 11.47 7.92 13.98 10.22 15.35L10.22 18.5L13.39 17.91C16.86 19.09 20.61 17.18 22.34 13.94C23.92 10.74 23.79 6.8 21.86 4.02L20.52 3.48Z" stroke="#25D366" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.16 14.85C16.88 14.71 15.51 14.03 15.26 13.93C14.99 13.83 14.8 13.79 14.61 14.07C14.42 14.35 13.88 14.99 13.71 15.18C13.54 15.37 13.38 15.39 13.1 15.25C12.82 15.11 11.92 14.82 10.86 13.87C10.03 13.13 9.47 12.22 9.31 11.94C9.15 11.66 9.29 11.51 9.43 11.37C9.55 11.25 9.71 11.04 9.85 10.87C9.94 10.7 9.9 10.54 9.83 10.4C9.76 10.26 9.19 9.36 8.96 8.8C8.73 8.25 8.49 8.16 8.32 8.15C8.13 8.13 7.83 8.21 7.58 8.46C7.33 8.71 6.61 9.39 6.61 10.76C6.61 12.13 7.61 13.51 7.74 13.7C7.88 13.89 9.7 16.03 12.48 17.29C13.14 17.57 13.65 17.72 14.05 17.85C14.71 18.06 15.31 18 15.79 17.83C16.32 17.64 17.44 16.96 17.67 16.31C17.9 15.66 17.9 15.1 17.83 14.98C17.76 14.86 17.6 14.75 17.16 14.85Z" fill="#25D366"/>
        </svg>
      </a>

      <!-- Twitter -->
      <a class="icon-btn" href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener">
        <svg viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.693 4.693 0 002.048-2.591 9.345 9.345 0 01-2.97 1.136 4.675 4.675 0 00-7.958 4.262A13.26 13.26 0 011.64 3.16a4.675 4.675 0 001.447 6.234 4.64 4.64 0 01-2.118-.584v.06a4.678 4.678 0 003.748 4.583 4.69 4.69 0 01-1.228.163c-.3 0-.592-.03-.877-.086a4.682 4.682 0 004.366 3.246 9.375 9.375 0 01-5.806 2.002c-.377 0-.75-.022-1.119-.065A13.23 13.23 0 007.29 21c8.292 0 12.828-6.872 12.828-12.828 0-.196-.005-.391-.014-.585a9.176 9.176 0 002.539-2.55z"/>
        </svg>
      </a>
    </div>
  </div>
</div>

<!-- ===========================
     PAGE LAYOUT
=========================== -->
<div class="container">

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <h3>Filters</h3>

    <label>Sort by price</label>
    <select id="sortSelect" onchange="applyFilters()">
      <option value="default">Default</option>
      <option value="low">Low → High</option>
      <option value="high">High → Low</option>
    </select>

    <label>Price range (₹)</label>
    <input id="minPrice" type="number" placeholder="Min" oninput="applyFilters()">
    <input id="maxPrice" type="number" placeholder="Max" oninput="applyFilters()">

    <h3 style="margin-top:20px">Quick Filter</h3>
    <button class="ghost" onclick="setRange(0,3000)">Under 3K</button>
    <button class="ghost" onclick="setRange(3000,10000)">3K–10K</button>
    <button class="ghost" onclick="setRange(10000,999999)">10K+</button>
  </aside>

  <!-- PRODUCTS -->
  <main>
    <h2 class="section-title">Latest Collection</h2>
    <div id="products" class="products"></div>
  </main>

</div>

<!-- ===========================
     POPUPS (All Modals)
=========================== -->

<!-- IMAGE PREVIEW -->
<div class="popup" id="imagePopup">
  <div class="box" style="max-width:900px;display:flex;gap:20px">
    <div class="close" onclick="closePopup('imagePopup')">✕</div>

    <img id="previewImg" style="width:55%;border-radius:14px;object-fit:cover">

    <div style="flex:1">
      <h2 id="previewTitle"></h2>
      <div id="previewPrice" class="price" style="margin-top:10px"></div>
      <p id="previewDesc" style="margin-top:14px;color:var(--muted)"></p>

      <div style="display:flex;gap:10px;margin-top:20px">
        <button class="btn" onclick="buyNow()">Buy Now</button>
        <button class="ghost" onclick="addPreviewToCart()">Add To Cart</button>
      </div>
    </div>
  </div>
</div>

<!-- CART -->
<div class="popup" id="cartPopup">
  <div class="box small">
    <div class="close" onclick="closePopup('cartPopup')">✕</div>
    <h2>Your Cart</h2>

    <div id="cartList" style="margin-top:10px;max-height:300px;overflow:auto"></div>

    <div style="margin-top:12px;font-weight:700">Subtotal: ₹<span id="cartSubtotal">0</span></div>

    <div style="display:flex;gap:10px;margin-top:15px">
      <button class="btn" onclick="checkoutFromCart()">Checkout</button>
      <button class="ghost" onclick="clearCart()">Clear</button>
    </div>
  </div>
</div>

<!-- BUY -->
<div class="popup" id="buyPopup">
  <div class="box small">
    <div class="close" onclick="closePopup('buyPopup')">✕</div>
    <h2>Delivery Details</h2>

    <label>Name</label><input id="orderName">
    <label>Phone</label><input id="orderPhone">
    <label>Pincode</label><input id="orderPin">
    <label>Address</label><textarea id="orderAddr" rows="2"></textarea>

    <label>Payment</label>
    <select id="orderPay">
      <option>UPI</option>
      <option>Cash on Delivery</option>
      <option>Debit Card</option>
    </select>

    <button class="btn" style="margin-top:15px" onclick="placeOrder()">Place Order</button>
  </div>
</div>

<!-- LOGIN -->
<div class="popup" id="loginPopup">
  <div class="box small">
    <div class="close" onclick="closePopup('loginPopup')">✕</div>
    <h2>Login</h2>

    <label>Email</label><input id="loginEmail">
    <label>Password</label><input id="loginPass" type="password">

    <button class="btn" style="margin-top:10px" onclick="login()">Login</button>
    <button class="ghost" style="margin-top:10px" onclick="openPopup('createPopup')">Create Account</button>

    <div id="loginMsg" style="color:red;margin-top:10px"></div>
  </div>
</div>

<!-- CREATE ACCOUNT -->
<div class="popup" id="createPopup">
  <div class="box small">
    <div class="close" onclick="closePopup('createPopup')">✕</div>
    <h2>Create Account</h2>

    <label>Email</label><input id="createEmail">
    <label>Password</label><input id="createPass" type="password">
    <label>Phone</label><input id="createPhone">
    <label>Address</label><textarea id="createAddr" rows="2"></textarea>

    <button class="btn" style="margin-top:10px" onclick="createAccount()">Create Account</button>
  </div>
</div>

<!-- ORDER HISTORY -->
<div class="popup" id="historyPopup">
  <div class="box small">
    <div class="close" onclick="closePopup('historyPopup')">✕</div>
    <h2>Your Orders</h2>
    <div id="historyList" style="margin-top:10px;max-height:300px;overflow:auto"></div>
  </div>
</div>

<!-- TRACK -->
<div class="popup" id="trackPopup">
  <div class="box small">
    <div class="close" onclick="closePopup('trackPopup')">✕</div>
    <h2>Track Order</h2>

    <label>Order ID</label>
    <input id="trackId">

    <button class="btn" style="margin-top:10px" onclick="trackOrder()">Track</button>

    <div id="trackResult" style="margin-top:10px"></div>
  </div>
</div>

<!-- REFER -->
<div class="popup" id="referPopup">
  <div class="box small">
    <div class="close" onclick="closePopup('referPopup')">✕</div>
    <h2>Refer & Earn</h2>

    <div style="margin-top:10px">Coupon: <strong>REFER50</strong></div>
    <button class="btn" style="margin-top:10px" onclick="claimCoupon()">Claim Coupon</button>

    <div id="referMsg" style="margin-top:10px;color:green"></div>
  </div>
</div>

<!-- PROFILE -->
<div class="popup" id="profilePopup">
  <div class="box small">
    <div class="close" onclick="closePopup('profilePopup')">✕</div>
    <h2>Your Profile</h2>

    <div id="profileInfo" style="margin-top:10px;color:#555"></div>
  </div>
</div>

<!-- ===========================
     FOOTER
=========================== -->
<footer>
  © 2025 Handlooms • Built by Akshay Varma • 24/7 Support
</footer>

<!-- ===========================
     JAVASCRIPT
=========================== -->
<script>
/* Products */
const products = [
  {id:1,title:"Kanchipuram Silk Saree",price:12999,img:"https://images.news18.com/ibnlive/uploads/2022/06/rashmika-mandanna-7.jpg",desc:"Premium Kanchipuram silk"},
  {id:2,title:"Block Print Cotton Dress",price:2999,img:"https://imagescdn.jaypore.com/img/app/product/3/39577085-11331209.jpg",desc:"Beautiful cotton dress"},
  {id:3,title:"Men's Handloom Kurta",price:1999,img:"https://5.imimg.com/data5/ECOM/Default/2023/3/BP/AE/FU/3611652/1601388207621-242-28-khadiblackkhadikurtasdl642849396178239-originnm80prcnt-500x500.jpg",desc:"Handloom kurta"},
  {id:4,title:"Handcrafted Tote Bag",price:899,img:"https://tse2.mm.bing.net/th/id/OIP.Ac6H0ifWR1TL3WHoH_kFFwHaF_?pid=Api&P=0&h=180",desc:"Durable tote bag"},
  {id:5,title:"Banarasi Silk Saree",price:15999,img:"https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/3/4396sr04-10808.jpg",desc:"Royal banarasi saree"},
];

/* State */
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let currentUser = localStorage.getItem("user") || null;
let previewProduct = null;

/* Render products */
function renderProducts(list=products){
  const box = document.getElementById("products");
  box.innerHTML = "";
  list.forEach(p=>{
    box.innerHTML += `
      <div class="card" onclick="openPreview(${p.id})">
        <img src="${p.img}">
        <h3>${p.title}</h3>
        <div class="price">₹${p.price.toLocaleString()}</div>
        <div class="card-buttons">
          <button class="btn" onclick="event.stopPropagation();startBuy(${p.id})">Buy</button>
          <button class="ghost" onclick="event.stopPropagation();addToCart(${p.id})">Add</button>
        </div>
      </div>`;
  });
}
renderProducts();

/* Preview */
function openPreview(id){
  const p = products.find(x=>x.id===id);
  previewProduct=p;
  document.getElementById("previewImg").src=p.img;
  document.getElementById("previewTitle").innerText=p.title;
  document.getElementById("previewPrice").innerText="₹"+p.price.toLocaleString();
  document.getElementById("previewDesc").innerText=p.desc;
  openPopup("imagePopup");
}
function addPreviewToCart(){ addToCart(previewProduct.id); }

/* Cart */
function updateCart(){
  localStorage.setItem("cart",JSON.stringify(cart));
  document.getElementById("cartCount").innerText = cart.reduce((a,c)=>a+c.qty,0);
}
updateCart();

function addToCart(id){
  let found = cart.find(x=>x.id===id);
  if(found) found.qty++;
  else{
    let p = products.find(x=>x.id===id);
    cart.push({...p,qty:1});
  }
  updateCart();
  renderCart();
}

function renderCart(){
  const box=document.getElementById("cartList");
  if(cart.length===0){
    box.innerHTML="<div style='padding:10px;color:gray'>Cart is empty.</div>";
    document.getElementById("cartSubtotal").innerText=0;
    return;
  }
  box.innerHTML="";
  cart.forEach(i=>{
    box.innerHTML+=`
      <div class="cart-item">
        <img src="${i.img}">
        <div style="flex:1">
          <div><b>${i.title}</b></div>
          <div>₹${i.price.toLocaleString()}</div>
          <div style="margin-top:6px;display:flex;gap:6px">
            <button class="ghost" onclick="changeQty(${i.id},-1)">-</button>
            <div>${i.qty}</div>
            <button class="ghost" onclick="changeQty(${i.id},1)">+</button>
            <button class="ghost" onclick="removeItem(${i.id})">Remove</button>
          </div>
        </div>
      </div>`;
  });
  document.getElementById("cartSubtotal").innerText =
    cart.reduce((a,c)=>a+c.price*c.qty,0).toLocaleString();
}

function changeQty(id,v){
  let it = cart.find(x=>x.id===id);
  it.qty+=v;
  if(it.qty<1) it.qty=1;
  updateCart();renderCart();
}
function removeItem(id){
  cart=cart.filter(x=>x.id!==id);
  updateCart();renderCart();
}
function clearCart(){
  cart=[];updateCart();renderCart();
}
function openCart(){
  renderCart();
  openPopup("cartPopup");
}

/* Buy */
let buyItems=[];
function startBuy(id){
  const p=products.find(x=>x.id===id);
  buyItems=[{...p,qty:1}];
  openCheckout();
}
function checkoutFromCart(){
  buyItems=cart.map(x=>({...x}));
  openCheckout();
}
function openCheckout(){
  if(currentUser){
    document.getElementById("orderName").value=currentUser;
  }
  openPopup("buyPopup");
}
function placeOrder(){
  const name=document.getElementById("orderName").value;
  alert("Order placed! (demo)");
  cart=[];updateCart();
  closePopup("buyPopup");
}

/* Login */
function login(){
  const email=document.getElementById("loginEmail").value.toLowerCase();
  const pass=document.getElementById("loginPass").value;

  if(!email||!pass){
    document.getElementById("loginMsg").innerText="Enter all fields";
    return;
  }
  currentUser=email;
  localStorage.setItem("user",email);
  document.getElementById("loginBtn").style.display="none";
  document.getElementById("logoutBtn").style.display="inline-block";
  closePopup("loginPopup");
}

function logout(){
  currentUser=null;
  localStorage.removeItem("user");
  document.getElementById("loginBtn").style.display="inline-block";
  document.getElementById("logoutBtn").style.display="none";
  alert("Logged out");
}

/* Create account */
function createAccount(){
  alert("Account created (demo)");
  closePopup("createPopup");
}

/* Track */
function trackOrder(){
  document.getElementById("trackResult").innerText="Order in transit (demo)";
}

/* Refer */
function claimCoupon(){
  document.getElementById("referMsg").innerText="Coupon applied!";
}

/* Popup helpers */
function openPopup(id){document.getElementById(id).style.display="flex";}
function closePopup(id){document.getElementById(id).style.display="none";}

/* Filters */
function applyFilters(){
  let min=Number(document.getElementById("minPrice").value||0);
  let max=Number(document.getElementById("maxPrice").value||9999999);
  let sort=document.getElementById("sortSelect").value;

  let list=products.filter(p=>p.price>=min && p.price<=max);

  if(sort=="low") list.sort((a,b)=>a.price-b.price);
  if(sort=="high") list.sort((a,b)=>b.price-a.price);

  renderProducts(list);
}
function setRange(a,b){
  document.getElementById("minPrice").value=a;
  document.getElementById("maxPrice").value=b;
  applyFilters();
}
</script>

</body>
</html>
