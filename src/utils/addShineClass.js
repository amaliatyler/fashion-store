function addShineClass() {
    const saleSection = document.querySelector('.sale__content'),
      stars = saleSection.querySelectorAll('.sale__star');

      saleSection.addEventListener('mouseover', () => {
        stars.forEach(star => {
            star.classList.add('shine');
        });
      });

      saleSection.addEventListener('mouseleave', () => {
        stars.forEach(star => {
            star.classList.remove('shine');
        });
      });
}

addShineClass();

export default addShineClass;