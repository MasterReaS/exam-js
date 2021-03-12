const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let i = -1
while (i < tab.length - 1) {
  ++i
  let prenom = tab[i]
  let longueurPrenom = prenom.length
  console.log(`${prenom} ${longueurPrenom}`)
}