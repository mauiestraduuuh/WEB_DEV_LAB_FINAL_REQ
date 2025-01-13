function changeImage(image) {
    document.getElementById("mainImage").src = image;
}

function updatePrice() {
    var quantity = document.getElementById("quantity").value;
    var price = 6720.00;
    var totalPrice = quantity * price;
    document.getElementById("totalPrice").innerText = "$" + totalPrice.toFixed(2);
}
