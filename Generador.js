const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const dominios = [".com", ".es", ".net",]
let Dominio = ""

for (let a = 0; a < pronoun.length; a++) {

    for (let b = 0; b < adj.length; b++) {

        for (let d = 0; d < noun.length; d++) {

            for (let c = 0; c < dominios.length; c++) {
                Dominio += pronoun[a] + adj[b] + noun[d] + dominios[c] + "\n"
            }
        }
    }
}

console.log(Dominio)