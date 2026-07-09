// Cart State
let cart = [];
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

// Add to Cart Function
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
}

// Update Cart View
function updateCartUI() {
    // Count total items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    // Display items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        cartTotal.innerText = '₹0';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.style.display = 'flex';
        itemEl.style.justifyContent = 'space-between';
        itemEl.style.marginBottom = '15px';
        itemEl.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <small>₹${item.price} x ${item.quantity}</small>
            </div>
            <strong>₹${item.price * item.quantity}</strong>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    cartTotal.innerText = '₹' + total;
}

// Open/Close Cart
function toggleCart() {
    cartDrawer.classList.toggle('open');
}

// Checkout Alert
function checkout() {
    if(cart.length === 0) {
        alert("Aapka cart khali hai!");
        return;
    }
    alert("Thank you for shopping! Aapka order receive ho gaya hai.");
    cart = [];
    updateCartUI();
    toggleCart();
}

// Theme Toggle (Light / Dark - Night Mode)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Countdown Timer for Night Campaign
setInterval(() => {
    let hoursEl = document.getElementById('hours');
    let minsEl = document.getElementById('mins');
    let secsEl = document.getElementById('secs');

    let h = parseInt(hoursEl.innerText);
    let m = parseInt(minsEl.innerText);
    let s = parseInt(secsEl.innerText);

    if (s > 0) s--;
    else {
        s = 59;
        if (m > 0) m--;
        else {
            m = 59;
            if (h > 0) h--;
            else { h = 3; m = 0; s = 0; } // Reset timer
        }
    }

    hoursEl.innerText = h < 10 ? '0' + h : h;
    minsEl.innerText = m < 10 ? '0' + m : m;
    secsEl.innerText = s < 10 ? '0' + s : s;
}, 1000);
