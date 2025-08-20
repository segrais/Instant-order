function submitOrder() {
  const input = document.getElementById("orderInput").value;
  const confirmation = document.getElementById("confirmation");

  if (input.trim() === "") {
    confirmation.innerHTML = "⚠️ Merci de saisir une commande.";
    confirmation.style.color = "red";
  } else {
    confirmation.innerHTML = "✅ Commande envoyée : " + input;
    confirmation.style.color = "green";
  }
}