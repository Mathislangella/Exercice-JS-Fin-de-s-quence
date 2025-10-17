// ce que c'est sensé faire :
// Prendre une liste de joueurs, avec :
// une série de scores par niveau (levelScores)
// un statut (isActive)
// Calculer une moyenne des scores par joueur, uniquement s’il est actif
// Classer les joueurs selon leur moyenne
// Retourner un classement avec :
// le nom
// la moyenne
// la position dans le classement final

// Calcule le total des scores d'un utilisateur au-dessus d'un certain seuil
function calculateTotalAboveThreshold(user, threshold) {
    let total = 0;
    for (let i = 0; i < user.scores.length; i++) {
        if (user.scores[i] >= threshold) {
            total += user.scores[i];
        }
    }
    return total;
}

// Trouve l'utilisateur ayant le plus grand total de score au-dessus d'un seuil
function getTopUserAboveThreshold(users, threshold) {
    let results = [];

    // Calcul du total pour chaque utilisateur
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let sum = calculateTotalAboveThreshold(user, threshold);
        if (sum > 0) {
            results.push({ name: user.name, total: sum });
        }
    }

    // Tri du plus grand au plus petit total
    results.sort(function(a, b) {
        return b.total - a.total;
    });

    // Récupération du meilleur utilisateur
    let topUser = results[0] ? results[0].name : null;
    let topUserTotal = results[0] ? results[0].total : null;

    // Affichage
    console.log("Top User:", topUser);
    console.log("Top User Total:", topUserTotal);

    // Bonus : renvoyer aussi le résultat
    return { name: topUser, total: topUserTotal };
}

let users = [
    { name: "alice", scores: [10, 20, 5, 40] },
    { name: "bob", scores: [5, 5, 5, 5] },
    { name: "charlie", scores: [50, 10, 30] },
];

getTopUserAboveThreshold(users, 10);