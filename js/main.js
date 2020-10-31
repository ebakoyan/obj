listBlock= [];
listIMG= [];
const BlockSize=20;
const IMGSize=10;
for(i=0;i<20;i++){
    listBlock[i]=i;
    if(i<=9){
        listIMG[i]=i+1;
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  shuffle(listBlock);
  shuffle(listIMG);
  fruit= document.getElementsByClassName("fruit");
  for(i=0,j=19;i<10;i++,j--){
    a=listIMG[i];
    str="./img/";
    str2=String(a);
    str3=".png"
    res=str.concat(str2);
    res=res.concat(str3);
    fruit[listBlock[i]].getElementsByTagName("img")[0].setAttribute("src",res);  
    fruit[listBlock[j]].getElementsByTagName("img")[0].setAttribute("src",res);  
}
