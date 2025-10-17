function filterProducts(products, minPrice, maxPrice, sortBy) {
  const filtered = products.filter((product) => {
    return product.price > minPrice && product.price < maxPrice;
  });
  console.log("Produits filtrés :", filtered);
  const sorted = filtered.sort((a, b) => {
    if (sortBy === "name") {
      return a.name > b.name;
    } else if (sortBy === "price") {
      return a.price > b.price;
    } else {
      console.log("Sort mode non reconnu:", sortBy);
      return 0;
    }
  });

  return sorted;
}

const catalog = [
  { name: "Sneakers", price: 80 },
  { name: "Hat", price: 25 },
  { name: "Watch", price: 120 },
  { name: "Socks", price: 10 }
];

const result = filterProducts(catalog, 20, 100, "price");
console.log("Résultat final :", result);
