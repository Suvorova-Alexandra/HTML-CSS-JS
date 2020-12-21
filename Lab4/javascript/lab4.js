
var images = [].slice.call(document.images,0);
images[0]=new Image(100,100);
images[0].src="D:/My Documents/Visual Code proj/4 лаба/resorce/bg.png";
images[1]=new Image(100,100);
images[1].src="D:/My Documents/Visual Code proj/4 лаба/resorce/car.jpg";
images[2]=new Image(100,100);
images[2].src="D:/My Documents/Visual Code proj/4 лаба/resorce/scooter.jpg";
images[3]=new Image(100,100);
images[3].src="D:/My Documents/Visual Code proj/4 лаба/resorce/plane.jpg";
images[4]=new Image(100,100);
images[4].src="D:/My Documents/Visual Code proj/4 лаба/resorce/helicopter.jpg";
images[5]=new Image(100,100);
images[5].src="D:/My Documents/Visual Code proj/4 лаба/resorce/bus.jpg";
images[6]=new Image(100,200);
images[6].src="D:/My Documents/Visual Code proj/4 лаба/resorce/tram.jpg";


function addOption (oListbox, text, value, isDefaultSelected, isSelected)
{
  var oOption = document.createElement("option");
  oOption.appendChild(document.createTextNode(text));
  oOption.setAttribute("value", value);

  if (isDefaultSelected) oOption.defaultSelected = true;
  else if (isSelected) oOption.selected = true;

  oListbox.insertBefore(oOption, oListbox.options[0]);
}

function setListValue() 
    {   
      
    let elem=document.getElementById("text");
    var list=document.getElementById("id2");

    addOption(list, elem.value, elem.value, true);
    }

function imagesView(){
    var list=document.getElementById("id2");
    var pict=document.getElementById("picture");
   if(list.options[list.selectedIndex].text=="Не выбрано"){
       while(pict.firstChild){
        pict.removeChild(pict.firstChild);
    }
       pict.appendChild(images[0]);
     
    }
    else if(list.options[list.selectedIndex].text=="Автомобиль"){
        while(pict.firstChild){
            pict.removeChild(pict.firstChild);
        }
        pict.appendChild(images[1]);

     }
     else if(list.options[list.selectedIndex].text=="Самокат"){
        while(pict.firstChild){
            pict.removeChild(pict.firstChild);
        }
        pict.appendChild(images[2]);
     }
     else if(list.options[list.selectedIndex].text=="Самолет"){
        while(pict.firstChild){
            pict.removeChild(pict.firstChild);
        }
        pict.appendChild(images[3]);

     }
     else if(list.options[list.selectedIndex].text=="Вертолет"){
       
        while(pict.firstChild){
            pict.removeChild(pict.firstChild);
        }
        pict.appendChild(images[4]);

     }
     else if(list.options[list.selectedIndex].text=="Автобус"){
        while(pict.firstChild){
            pict.removeChild(pict.firstChild);
        }
        pict.appendChild(images[5]);
     }
     else if(list.options[list.selectedIndex].text=="Трамвай"){;
        while(pict.firstChild){
            pict.removeChild(pict.firstChild);
        }
        pict.appendChild(images[6]);
     }
else {
    while(pict.firstChild){
        pict.removeChild(pict.firstChild);
    }
    pict.appendChild(images[0]);
}
}



function showAllImages(){
  var pictures=document.getElementById("pict");
  var selValue=localStorage.getItem(0);
   var Index;

    if(selValue=="Не выбрано"){
       Index=0;
     }
     else if(selValue=="Автомобиль"){
      Index=1;
      }
      else if(selValue=="Самокат"){
        Index=2;
      }
      else if(selValue=="Самолет"){

        Index=3;
 
      }
      else if(selValue=="Вертолет"){

        Index=4;
 
      }
      else if(selValue=="Автобус"){

        Index=5;
      }
      else if(selValue=="Трамвай"){;

        Index=6;
      }
 else {
  Index=0;
 }

 pictures.appendChild(images[Index]);

  for(var i=0;i<Index;i++){
    pictures.appendChild(images[i]);
  }
for(var i=Index+1;i<images.length;i++){
  pictures.appendChild(images[i]);
}
}

    
function openNewWin(url) {
    myWin= open(url);
  }

function saveValue(){

    var list=document.getElementById("id2");
    localStorage.clear();
var selValue=list.options[list.selectedIndex].text;
   localStorage.setItem(0,selValue);
}

function clearStore(){
  localStorage.clear();
  alert(localStorage.length);
}

function focused(){
var block = document.querySelector('.block');

block.addEventListener('mouseenter', function () {
    block.classList.add('color1');
});
block.addEventListener('mouseleave', function () {
    block.classList.remove('color1');
});}