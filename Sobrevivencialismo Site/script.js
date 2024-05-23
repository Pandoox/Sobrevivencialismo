document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-images img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
      });
    });
  
    close.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
      }
    });
  });
  