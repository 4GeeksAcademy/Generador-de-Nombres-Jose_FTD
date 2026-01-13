const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];

let Dominio = ""

for (let a = 0; a < pronoun.length; a++){

    for ( let b = 0; b < adj.length; b++){

        for ( let c = 0; c < noun.length; c++){
            Dominio += pronoun[a] + adj[b] + noun[c] + "\n"
        }
    }
}

console.log(Dominio)