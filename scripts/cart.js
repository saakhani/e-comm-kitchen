var itemsInCart = 0;
document.getElementById("itemsInCart").innerHTML = "Items in cart: " + getItemsInCart();

function addToCart() {
  itemsInCart++;
  document.getElementById("itemsInCart").innerHTML = "Items in cart: " + getItemsInCart();
}

function getItemsInCart() {
  return itemsInCart;
}

