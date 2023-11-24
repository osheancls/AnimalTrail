var contador = 1;
var img1="img/img1.png";
var img2="img/img2.png";
var img3="img/img3.png";
var tempo=10000; 
var exibir=setInterval("Exibindo()",tempo);
  
function Exibindo()
{
      document.images["slide"].src=eval("img"+contador);
    
    if (contador==1)
        document.querySelector("image");
    else if (contador==2)
        document.querySelector("image");
    else
        document.querySelector("image");
              
    if (contador<3)
        contador++;
    else
        contador=1;
} 
  
function Ante()
{
    clearInterval(exibir);
    
    if (contador == 2)
        contador = 3;
    else if (contador == 3)
        contador = 1;
    else
        contador = 2;
    
    
    document.images["slide"].src=eval("img"+contador);
    
    if (contador==1)
        document.querySelector("image");
    else if (contador==2)
        document.querySelector("image");
    else
        document.querySelector("image");
              
    if (contador<3)
        contador++;
    else
        contador=1;
            
    exibir=setInterval("Exibindo()",tempo);
}
 
 function Prox()
{
    clearInterval(exibir);//interrompe o looping 
    document.images["slide"].src=eval("img"+contador);
    
    if (contador==1)
        document.querySelector("image");
    else if (contador==2)
        document.querySelector("image");
    else
        document.querySelector("image");
        
    if (contador<3)
        contador++;
    else
        contador=1;
        
    exibir=setInterval("Exibindo()",tempo);
}



var im1="img com/c1.png";
var im2="img com/c2.png";
var im3="img com/c3.png";
var im4="img com/c4.png";
var im5="img com/c5.png";
var im6="img com/c6.png";
var time=150000; 


var exibir=setInterval("Exibindo()",time);


function Exibindo() 
{  
    document.images["carroclie"].src=eval("im"+contador); 
    document.getElementById("v"+contador).checked=true;  
        

    if (contador<6)
    {
        contador++
    }
        else
        {
        contador=1;
        }
}
        



slideShow();

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('icon').src = 'img/menu_white_36dp.svg';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('icon').src = 'img/close_white_36dp.svg';
    }
} 