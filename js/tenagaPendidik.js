//javascript pagination
const itemsPerPage = 8;
const cards = document.querySelectorAll('.card');
const pagination = document.getElementById('pagination');
const list = document.getElementById('guru-list');

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

//javascript filter
const filterToggle = document.getElementById('filterToggle');
const filterOptions = document.getElementById('filterOptions');

filterToggle.addEventListener('click', () => {
  filterOptions.classList.toggle('hidden');
});

    // Close dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!filterToggle.contains(e.target) && !filterOptions.contains(e.target)) {
    filterOptions.classList.add('hidden');
  }
});

    // Logic filter (hubungkan dengan sistem kamu)
document.querySelectorAll('.filter-item').forEach(item => {
  item.addEventListener('click', () => {
    const selectedMapel = item.getAttribute('data-info');
    filterOptions.classList.add('hidden');
    // Lanjutkan dengan logika filter guru di sini
    filterGuru(selectedMapel);
  });
});

//javascript filter guru
function filterGuru(mapel) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const cardMapel = card.getAttribute('data-info');
    if (mapel === 'all' || cardMapel === mapel) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function toggleMenu() {
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("show");
}

