// je veut retrouver le nom de l'utilisateur qui a le plus grand total de score au dessus d'un certain seuil s
// je doit retourner le nom de l'utilisateur et son total de score au dessus de s
// je vais metre de noms de varaible plus explicite
// Consignes :
// Renommer la fonction et les variables de manière explicite

// Séparer les responsabilités dans des fonctions dédiées (ex: calcul du total, tri)

// Ajouter des commentaires utiles

// Vérifier que le code est lisible même sans indentation colorée

// Bonus : proposer une version qui retourne le résultat au lieu de l'afficher en console

// Affiche ces deux résultats dans la console

function getTopUserAboveThreshold(users, threshold) {
    let results = [];

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let sum = 0;
        for (let j = 0; j < user.scores.length; j++) {
        if (user.scores[j] >= threshold) {
            sum += user.scores[j];
        }
        }
        if (sum > 0) {
        results.push({ name: user.name, total: sum });
        }
    }

    results.sort(function(a, b) {
        return b.total - a.total;
    });
    
    let topUser = results[0] ? results[0].name : null;
    let topUserTotal = results[0] ? results[0].total : null;
    console.log("Top User:", topUser);
    console.log("Top User Total:", topUserTotal);
}

let r = ([
  { name: "alice", scores: [10,20,5,40] },
  { name: "bob", scores: [5,5,5,5] },
  { name: "charlie", scores: [50,10,30] },
], 10);


getTopUserAboveThreshold(r);