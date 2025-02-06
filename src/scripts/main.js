'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');
const tbody = field.querySelector('tbody');

// check actual size
let actualRowsLength = field.querySelector('tbody').children.length;
let actualColumnsLength = field.querySelector('tr').children.length;

container.addEventListener('click', function (e) {
  const row = field.querySelector('tr');

  if (e.target.closest('.append-row')) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < actualColumnsLength; i++) {
      newRow.append(row.children[i].cloneNode());
    }

    if (actualRowsLength < 10) {
      tbody.append(newRow);
      actualRowsLength += 1;
    }
  }

  if (e.target.closest('.remove-row')) {
    if (actualRowsLength > 2) {
      row.remove();
      actualRowsLength -= 1;
    }
  }

  if (e.target.closest('.append-column')) {
    const newColumn = document.createElement('td');

    if (actualColumnsLength < 10) {
      actualColumnsLength += 1;

      for (let i = 0; i < actualRowsLength; i++) {
        tbody.children[i].append(newColumn.cloneNode());
      }
    }
  }

  if (e.target.closest('.remove-column')) {
    if (actualColumnsLength > 2) {
      actualColumnsLength -= 1;

      for (let i = 0; i < actualRowsLength; i++) {
        tbody.children[i].querySelector('td').remove();
      }
    }
  }
});
