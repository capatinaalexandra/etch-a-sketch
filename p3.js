

let board = document.querySelector(".board");//oboectul global al intregului nostru


board.style.gridTemplateColumns='repeat(16, 1fr)';//fraction
  board.style.gridTemplateRows='repeat(16, 1fr)';
  

  for (let i=0; i<256;i++){
    let square=document.createElement('span');//este mai neutru decat div-ul (di ul este pt a numi ceva general-o diviziune,)
    square.addEventListener("mouseover", colorsquare);
    square.style.backgroundColor= "white"
    board.insertAdjacentElement("beforeend",square);

  }

  let color="black";
 
function colorsquare(){
    if(color=='random'){
        this.style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    }else{
        this.style.backgroundColor=color;
    }
}
  function changecolor(choice){
    color=choice;
  }

  function reset(){
    let board = document.querySelector(".board");
  let squares=document.querySelectorAll("span");
    squares.forEach((square)=>square.style.backgroundColor="white");//met care vine pe protopitul arraw-urilor. for each eate o funct pe prototipul lui array
  }//o funct care exista pe prototilul array-urilor. noi putem pune orice. pt fievare elem ii puenm cul alb
