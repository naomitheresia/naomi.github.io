  document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const menu = dropdown.querySelector('.dropdown-menu');
    const button = dropdown.querySelector('button');

    button.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('active');
    });

    // Tutup dropdown jika klik di luar
    document.addEventListener('click', function () {
      menu.classList.remove('active');
    });
  });

