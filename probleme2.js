let tab1 =[3, 1, 7,0, 9]
   let tab2 =[2, 4, 9, 3]
   let sum=0;
   let Nmdist =""
   for(let i=0; i<tab1.length;i++){
    let posind =tab2.indexOf(tab1[i])
    if(posind<0){
      sum+=tab1[i]
    
    
    Nmdist +=tab1[i].toString()+","
      
    }
    
  }
  for(let j=0; j<tab2.length;j++){
    let posind =tab1.indexOf(tab2[j])
    if(posind<0){
      sum+=tab2[j]
    
    
    Nmdist +=tab2[j].toString()+","
      
    }
    
  }
  console.log(` la somme : ${sum}`)
  //Nmdist = Nmdist.slice(0, -1);
  console.log(` les nombres qui ne sont pas identiques : ${Nmdist.slice(0, -1)}`)