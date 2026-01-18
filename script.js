const table = document.getElementById('myTable');

table.onclick = function (e) {
  if (e.target.tagName !== 'TH') return;

  const th = e.target;
  const index = th.cellIndex;
  const type = th.dataset.type;
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);

  const compare = (rowA, rowB) => {
    const valA = rowA.cells[index].innerText;
    const valB = rowB.cells[index].innerText;

    if (type === 'number') {
      return Number(valA) - Number(valB);
    } else {
      return valA.localeCompare(valB);
    }
  };

  rows.sort(compare);
  tbody.append(...rows); // Переставляємо рядки в DOM
};



const box = document.getElementById('resizable');
const handle = document.getElementById('handle');

handle.onmousedown = function (e) {
  e.preventDefault();

  function onMouseMove(e) {
    // Нова ширина = поточна координата миші - ліва межа блоку
    box.style.width = e.pageX - box.getBoundingClientRect().left + 'px';
    box.style.height = e.pageY - box.getBoundingClientRect().top + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};