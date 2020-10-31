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
block1=0,block2=1;
s=0;
function test(a,b){
  if(a.src===b.src&& a!=b){
    b.src="./img/green.png";
    a.src="./img/green.png";
    a.style.opacity="1";
    b.style.opacity="1";
    a.style.zIndex="-1";
    b.style.zIndex="-1";
  }
  else {
    a.style.opacity="0";
    b.style.opacity="0";
  };
}
function Game(block){
  s++;
  block=block || window.event;
  block=block.target || block.srcElement;
  // block.style.display="flex";
  block.style.opacity="1";
  if(s==1){
  block1=block;
  }
  else if(s==2){
    block1.style.opacity="1";
    block2=block;
    block2.style.opacity="1";

    test(block1,block2);
    s=0;
  }
}
function timeFunction() {
  setTimeout(function(){
    for(i=0;i<fruit.length;i++){
      fruit[i].getElementsByTagName("img")[0].style.opacity = "0";
} }, 2000);
}
function Play(){
  document.querySelector(".play").style.display="none";
  document.querySelector(".gameBlock").style.display="grid";
  timeFunction()
}



  