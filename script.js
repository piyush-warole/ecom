let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toggleCart() {
  const cartEl = document.getElementById('cart');
  cartEl.style.right = cartEl.style.right === '0px' ? '-400px' : '0px';
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartCountEl = document.getElementById('cart-count');
  const cartCountMobileEl = document.getElementById('cart-count-mobile');
  const totalEl = document.getElementById('cart-total');

  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement('div');
    div.className = 'flex justify-between items-center border-b border-gray-700 pb-2';
    div.innerHTML = `
      <span>${item.name}</span>
      <div>
        ₹${item.price} <button onclick="removeFromCart(${index})" class="text-red-500 ml-2">X</button>
      </div>`;
    cartItemsEl.appendChild(div);
  });

  cartCountEl.textContent = cart.length;
  cartCountMobileEl.textContent = cart.length;
  totalEl.textContent = total.toFixed(2);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', updateCart);
