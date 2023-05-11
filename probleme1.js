let machaine="The number of vowels in the sentence."
  console.log(machaine)
 let dern=machaine.charAt(machaine.length - 1)
  //console.log(dern);
  let nbv=0;
  let nbmot=machaine.split(' ').length;
  console.log(`le nombre des mots dans cette phrase : ${nbmot}`);
  
  if(dern!=='.'){
    console.log("votre chaine ne termine pas par un point")
}
   else {
    for(let i=0; i<machaine.length-1;i++){
        if (machaine[i] == "a" || machaine[i]== "e" || machaine[i] == "i" || machaine[i]== "o" || machaine[i] == "u") {
                
            nbv += 1;}
       
    
       }
    }
    console.log(`le nombre des voyelles dans cette phrase: ${nbv}`)
  
