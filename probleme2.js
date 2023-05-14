
  let tab = [5, 8, 11, 6, 1, 9, 3];
  console.log(`tableau avant le tri tab ${tab}`);
  for (let i = 1; i < tab.length; i++) {
    let j = i - 1
    let tmp = tab[i]
    while (j >= 0 && tab[j] > tmp) {
      tab[j + 1] = tab[j]
      j--
    }
    tab[j+1] = tmp
  }
 
  console.log(`tableau aprés le tri  ${tab}`);
