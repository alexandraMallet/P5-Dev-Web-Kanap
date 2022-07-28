async function showItems() {

  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();

  getItems(products);

}

function getItems(products) {
  for (item of products) {
    let itemsSection = document.getElementById("items");
    let linkToItem = document.createElement("a");
    let contenerItem = document.createElement("article");
    let imgItem = document.createElement("img");
    let nameItem = document.createElement("h3");
    let descrItem = document.createElement("p");
    itemsSection.appendChild(linkToItem).appendChild(contenerItem);
    contenerItem.appendChild(imgItem);
    contenerItem.appendChild(nameItem);
    contenerItem.appendChild(descrItem);
    imgItem.setAttribute("src", item.imageUrl, "alt", item.altTxt);
    nameItem.classList.add("productName");
    descrItem.classList.add("productDescription");
    nameItem.textContent = item.name;
    descrItem.textContent = item.description;
  }
}

showItems();