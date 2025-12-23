let totalPrice = 0;
let itemCount = 0;

function addToCart(price) {
    totalPrice += price;
    itemCount++;

    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("itemCount").innerText = itemCount;
}

function checkout() {
    if (itemCount === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!\nTotal Amount: Rs. " + totalPrice);
        totalPrice = 0;
        itemCount = 0;
        document.getElementById("totalPrice").innerText = 0;
        document.getElementById("itemCount").innerText = 0;
    }
}