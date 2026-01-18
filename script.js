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