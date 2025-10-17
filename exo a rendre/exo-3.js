function p(tab, threshold) {
    let somme = 0, count = 0, inventory = {};

    for (let i = 0; i < tab.length; i++) {
        let item = tab[i];
        if (item.price > threshold) {
        somme += item.price;
        count++;
        if (!inventory[item.category]) {
            inventory[item.category] = 1;
        } else {
            inventory[item.category]++;
        }
        console.log(inventory);
        }
    }
    const average = somme / count;
    let mostValuable = 0, moreCount = null;

    for (const k of Object.keys(inventory)) {
        if (inventory[k] > mostValuable) {
            mostValuable = inventory[k];
            moreCount = k;
        }
    }

    console.log("avg:", average, "top:", moreCount);
    }

let market = {
  products: [
    { price: 50, category: "tech" },
    { price: 120, category: "clothes" },
    { price: 300, category: "tech" },
    { price: 90, category: "home" },
    { price: 500, category: "tech" },
  ],
  threshold: 100
};

p(market.products, market.threshold);

// ce que fais le code :
// Parcourt un tableau d’achats (d)
// Ne garde que les produits dont le prix p dépasse un certain seuil t
// Calcule la moyenne de prix de ces produits
// Identifie la catégorie la plus fréquente parmi eux
// Affiche ces deux résultats dans la console