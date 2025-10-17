
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function tournamentPairs(players) {
    players = shuffleArray(players);
    const pairs = [];
    const exempt = players.length % 2 !== 0 ? players.pop() : "person n'est exempt";

    for (let i = 0; i < players.length; i += 2) {
        pairs.push([players[i], players[i + 1]]);
    }

    if (exempt == "person n'est exempt") {
        return { pairs };
    }
    return { pairs, exempt };
}

const players = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
console.log(tournamentPairs(players));

const playerss = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(tournamentPairs(playerss));
