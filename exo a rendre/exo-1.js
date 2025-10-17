// ## Exercice 1 – Analyse d'une chaîne compressée

// ### Consigne

// On vous donne une chaîne compressée sous la forme suivante :

// ```js
const input = "a3b2c4a1";
// ```
// ### Cela signifie :

// - 3 fois la lettre a
// - 2 fois la lettre b
// - 4 fois la lettre c
// - 1 fois la lettre a

// ### Vous devez :

// Reconstituer la chaîne complète : "aaabbcccca"
// Retourner un objet contenant :
//   decompressed : la chaîne reconstruite
//   mostFrequent : la lettre la plus fréquente
//   uniqueLetters : le nombre de lettres différentes dans la chaîne

const AnalyseString = {
    decompress: function(str) {
        let rep = ""
        const temp = str.split("")
        for (let i = 0; i < temp.length; i += 2) {
          for (let y = 0; y < Number(temp[i+1]); y++){
            rep += temp[i]
          }  
        }
        return rep
    },
    
    mostFrequent: function(str) {
        let rep = ""
        const temp = str.split("")
        for (let i = 0; i < temp.length; i += 2) {
            let etat = false
            for (let j = 0; j < rep.length; j += 2) {
                if (temp[i] == rep[j]) {
                    rep = rep.slice(0, j + 1) + (Number(rep[j + 1]) + Number(temp[i + 1])) + rep.slice(j + 2)
                    etat = true
                    break
                }
            }
            if (etat === false) {
                rep += temp[i] + temp[i + 1]
            }
        }
        let max = 0
        let lettre = ""
        for (let i = 0; i < rep.length; i += 2) {
            if (Number(rep[i + 1]) > max) {
                max = Number(rep[i + 1])
                lettre = rep[i]
            }
        }
        rep = lettre
        return rep
    },

    uniqueLetters: function(str) {
        let rep = 0
        const temp = str.split("")
        const temp1 = []
        for (let i = 0; i < temp.length; i++) {
            if (isNaN(Number(temp[i]))) {
                let etat = false
                for (let j = 0; j < temp1.length; j++) {
                    if (temp[i] == temp1[j]) {
                        etat = true
                        break
                    }
                }
                if (etat === false) {
                    temp1.push(temp[i])
                    rep += 1
                }
            }
        }
        return rep
    }

}

console.log(AnalyseString.mostFrequent(input))