const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = 0; i < tab.length; i++) {
  let prenom = tab[i]
  let longueurPrenom = prenom.length
  console.log(`${prenom} ${longueurPrenom}`)
}

for (let prenom of tab) {
  let longueurPrenom = prenom.length
  console.log(`${prenom} ${longueurPrenom}`)
}

tab.forEach(prenom => {
  let longueurPrenom = prenom.length
  console.log(`${prenom} ${longueurPrenom}`)
})