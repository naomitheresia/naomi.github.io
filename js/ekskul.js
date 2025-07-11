//javascript pagination
const itemsPerPage = 8;
const cards = document.querySelectorAll('.grid');
const pagination = document.getElementById('pagination');
const list = document.getElementById('ekskul-list');

let currentPage = 1;
const totalPages = Math.ceil(cards.length / itemsPerPage);

function showPage(page) {
  cards.forEach((card, index) => {
    card.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
  });

  renderPagination(page);
}

function renderPagination(current) {
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    if (i === current) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
    });
    pagination.appendChild(btn);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  showPage(currentPage);
});

