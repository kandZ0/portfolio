document.addEventListener('DOMContentLoaded', () => {
  // Интерактивный фильтр работ
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'ВСЕ' || category === filterValue) {
            card.style.display = 'block';
            setTimeout(() => { card.style.opacity = '1'; }, 50);
          } else {
            card.style.opacity = '0';
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Оптимизация загрузки изображений
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  }
});