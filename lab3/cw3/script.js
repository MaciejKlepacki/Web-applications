const tableBody = document.getElementById("productsTableBody");
const filterInput = document.getElementById("filterInput");
const sortSelect = document.getElementById("sortSelect");

let originalData = [];

async function getData() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  originalData = data.products.slice(0, 30);
  renderTable(originalData);
}

function renderTable(data) {
  tableBody.innerHTML = "";

  data.forEach((product) => {
    const tr = document.createElement("tr");

    const imgTd = document.createElement("td");
    const img = document.createElement("img");
    img.src = product.thumbnail;
    img.width = 100;
    imgTd.appendChild(img);

    const titleTd = document.createElement("td");
    titleTd.textContent = product.title;

    const descTd = document.createElement("td");
    descTd.textContent = product.description;

    tr.appendChild(imgTd);
    tr.appendChild(titleTd);
    tr.appendChild(descTd);

    tableBody.appendChild(tr);
  });
}

function processData() {
  let currentData = [...originalData];
  const phrase = filterInput.value.toLowerCase();
  const sortMode = sortSelect.value;

  if (phrase) {
    currentData = currentData.filter(
      (item) =>
        item.title.toLowerCase().includes(phrase) ||
        item.description.toLowerCase().includes(phrase)
    );
  }

  if (sortMode === "asc") {
    currentData.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortMode === "desc") {
    currentData.sort((a, b) => b.title.localeCompare(a.title));
  }

  renderTable(currentData);
}

filterInput.addEventListener("input", processData);
sortSelect.addEventListener("change", processData);

getData();
