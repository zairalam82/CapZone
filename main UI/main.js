// ================= CART =================

let cartCount = 0;

let cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        document.getElementById("cartCount").textContent = cartCount;

        alert("Cap added to your cart!");

    });

});


// ================= WISHLIST =================

let wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.textContent.trim() === "❤️") {

            button.textContent = "💖";

            alert("Added to wishlist!");

        } else {

            button.textContent = "❤️";

            alert("Removed from wishlist!");

        }

    });

});


// ================= LOGIN =================

let loginBtn = document.getElementById("loginBtn");

let loginPopup = document.getElementById("loginPopup");

let closeLogin = document.getElementById("closeLogin");

let loginSubmit = document.getElementById("loginSubmit");


// Open login popup

loginBtn.addEventListener("click", function(event) {

    event.preventDefault();

    loginPopup.style.display = "flex";

});


// Close login popup

closeLogin.addEventListener("click", function() {

    loginPopup.style.display = "none";

});


// Login

loginSubmit.addEventListener("click", function() {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let loginMessage = document.getElementById("loginMessage");


    if (email === "" || password === "") {

        loginMessage.textContent =
            "Please enter email and password.";

        loginMessage.style.color = "red";

        return;
    }


    loginMessage.textContent =
        "Login successful!";

    loginMessage.style.color = "green";


    setTimeout(function() {

        loginPopup.style.display = "none";

        showUserAccount();

    }, 1000);

});


// ================= USER ACCOUNT =================

function showUserAccount() {

    // Remove Login

    loginBtn.remove();


    // Create Account link

    let accountLink = document.createElement("a");

    accountLink.href = "#";

    accountLink.textContent = "👤 My Account";


    // Create Orders link

    let ordersLink = document.createElement("a");

    ordersLink.href = "#";

    ordersLink.textContent = "📦 Orders";


    // Create Logout link

    let logoutLink = document.createElement("a");

    logoutLink.href = "#";

    logoutLink.textContent = "Logout";


    // Add them to navigation

    let navLinks = document.querySelector(".nav-links");

    navLinks.insertBefore(
        accountLink,
        navLinks.children[5]
    );

    navLinks.insertBefore(
        ordersLink,
        navLinks.children[6]
    );


    navLinks.appendChild(logoutLink);


    // Logout

    logoutLink.addEventListener("click", function(event) {

        event.preventDefault();

        location.reload();

    });

}


// ================= CART BUTTON =================

document.getElementById("cartBtn")
    .addEventListener("click", function(event) {

        event.preventDefault();

        alert("Your cart will appear here.");

    });
