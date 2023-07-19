let table = document.getElementById("table").getElementsByTagName("tbody")[0];

document
  .getElementById("user-add-data")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("input-username").value;
    let existingRow = findRowByUsername(table, username);
    let email = document.getElementById("input-email").value;
    let address = document.getElementById("input-address").value;
    let admin = document.getElementById("input-admin").checked;
    let imageInput = document.getElementById("input-image");
    let image = imageInput.files[0];

    if (existingRow) {
      let cells = existingRow.cells;
      cells[1].innerHTML = email;
      cells[2].innerHTML = address;
      cells[3].innerHTML = admin ? "X" : "-";
      if (image) {
        cells[4].innerHTML = `<img src="${URL.createObjectURL(
          image
        )}" width="64" height="64" alt="User Image">`;
      } else {
        cells[4].innerHTML = "";
      }
    } else {
      let newRow = table.insertRow(table.rows.length);
      let firstCell = newRow.insertCell(0);
      firstCell.innerHTML = username;
      let secondCell = newRow.insertCell(1);
      secondCell.innerHTML = email;
      let thirdCell = newRow.insertCell(2);
      thirdCell.innerHTML = address;
      let fourthCell = newRow.insertCell(3);
      fourthCell.innerHTML = admin ? "X" : "-";
      let fifthCell = newRow.insertCell(4);
      if (image) {
        fifthCell.innerHTML = `<img src="${URL.createObjectURL(
          image
        )}" width="64" height="64" alt="User Image">`;
      } else {
        fifthCell.innerHTML = "";
      }
    }

    document.getElementById("user-add-data").reset();
  });

document.getElementById("empty-table").addEventListener("click", function () {
  let rowCount = table.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
});

function findRowByUsername(table, username) {
  let rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    let cell = rows[i].cells[0];
    if (cell.innerHTML === username) {
      return rows[i];
    }
  }
  return null;
}
