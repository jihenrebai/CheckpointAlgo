/*let v1=[1,2]
let v2=[3,4]
let ps=0

    ps = (v1[0]*v2[0]) + (v1[1]*v2[1])
    if (ps === 0) {
        console.log("The paire of vector are ortoghonal");
    }
      
    else {
        console.log(`The dot product is ${ps}`);
    }
*/
function dot_product(v1 ,v2){
    let ps=0
    for (let i = 0; i < v1.length; i++) {
        ps = (v1[i]*v2[i]) + (v1[i]*v2[i])
    }
    
    if (ps === 0) {
        return("The paire of vector are ortoghonal");
    }
      
    else {
        return(`The dot product is ${ps}`);
    }
    
}
console.log(dot_product([1,2],[3,4]));