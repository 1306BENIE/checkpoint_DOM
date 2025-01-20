// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
    const products = document.querySelectorAll('.card-body');
    let totalPrice = 0;
  
    products.forEach((product) => {
      const unitPrice = parseFloat(
        product.querySelector('.unit-price').textContent.replace('$', '').trim()
      );
      const quantity = parseInt(product.querySelector('.quantity').textContent);
      totalPrice += unitPrice * quantity;
    });
  
    document.querySelector('.total').textContent = `${totalPrice.toFixed(2)} $`;
  }
  
  // Fonction pour gérer l'ajout de la quantité
  function handleIncreaseQuantity(event) {
    const quantityElement = event.target.closest('.card-body').querySelector('.quantity');
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    updateTotalPrice();
  }
  
  // Fonction pour gérer la diminution de la quantité
  function handleDecreaseQuantity(event) {
    const quantityElement = event.target.closest('.card-body').querySelector('.quantity');
    const currentQuantity = parseInt(quantityElement.textContent);
  
    if (currentQuantity > 0) {
      quantityElement.textContent = currentQuantity - 1;
      updateTotalPrice();
    }
  }
  
  // Fonction pour supprimer un produit
  function handleRemoveProduct(event) {
    const productElement = event.target.closest('.card-body');
    productElement.remove();
    updateTotalPrice();
  }
  
  // Fonction pour aimer/désaimer un produit
  function handleToggleLike(event) {
    const heartIcon = event.target;
    heartIcon.classList.toggle('text-danger'); // Ajoute ou enlève une classe rouge (Bootstrap)
  }
  
  // Ajouter les gestionnaires d'événements
  document.addEventListener('DOMContentLoaded', () => {
    const plusButtons = document.querySelectorAll('.fa-plus-circle');
    const minusButtons = document.querySelectorAll('.fa-minus-circle');
    const deleteButtons = document.querySelectorAll('.fa-trash-alt');
    const heartButtons = document.querySelectorAll('.fa-heart');
  
    plusButtons.forEach((button) =>
      button.addEventListener('click', handleIncreaseQuantity)
    );
  
    minusButtons.forEach((button) =>
      button.addEventListener('click', handleDecreaseQuantity)
    );
  
    deleteButtons.forEach((button) =>
      button.addEventListener('click', handleRemoveProduct)
    );
  
    heartButtons.forEach((button) =>
      button.addEventListener('click', handleToggleLike)
    );
  
    // Initialisation du prix total
    updateTotalPrice();
  });
  