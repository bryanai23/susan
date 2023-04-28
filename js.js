
function abrirPresente() {
   
    var x = document.getElementById("coracao");
  
    
    if (x.style.display === "none") {
      // atribuir aparecer
      x.style.display = "block";
  
      
    } else {
      x.style.display = "none";
    }
  
    
    var x = document.getElementById("prenda");
  
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  
    
    var x = document.getElementById("titulo");
  
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  
    
    var x = document.getElementById("texto");
  
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  