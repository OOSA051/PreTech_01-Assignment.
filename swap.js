'use strict'

let swapbtn = document.getElementById(swapBtn);
 function swapCSS(){
     
     let styles = document.getElementById('stylesheet');
     
     console.log(styles.getAttribute("href"));
     
     if (styles.getAttribute("href") == "css/styletwo.css") {
         styles.getAttribute("href", "css/style.css");
         
         
     } else {
          styles.setAttribute("href", "css/styletwo.css");                   
                             
     }
 }
swapBtn.addEventListener('click', swapCSS);