let currentIndex = 0;

function moveCarousel(direction) {
    const carouselImages = document.querySelector('.carousel-images');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const visibleItems = 3; // Quantidade de itens visíveis
    const maxIndex = Math.ceil(totalItems / visibleItems) + 1; // Define o índice máximo possível (se for colocar mais carros, adiciona ao número)

    // Atualiza o índice atual
    currentIndex += direction;

    // Se o índice atual for maior ou menor que os limites, reseta
    if (currentIndex > maxIndex) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    // Move o carrossel
    carouselImages.style.transform = `translateX(-${currentIndex * 100 / visibleItems}%)`;
}
