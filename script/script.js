//function alerta(){
 //   window.alert("Vamos");
//}

// DOM: Modelo de documento de objeto


let menu = document.getElementById("menu");

function mostrarMenu(){
// Se o menu não estiver aparecendo, ele irá aparecer
if(menu.style.display == "none"){
    menu.style.display = "flex"
// Então, se o menu estiver aparecendo, ele irá desaparecer
}else{
menu.style.display = "none"
}

}

let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;

    console.log(emailDigitado);
}

// Usando o JQuery
        
$(document).ready(function(){

    $("#barras").click(function(){

    /* if($("#menu").hasClass("menu-ativo")){
        $("#menu").removeClass("menu-ativo");
    }else{
        $("#menu").addClass("menu-ativo");
    } */
    $("#menu").toggleClass("menu-ativo");
  });

  $("#carrossel img:eq(0)").addClass("banner-ativo").show();
  setInterval(slide,5000);
  function slide(){
      console.log("Retornou")
      if($(".banner-ativo").next().length){
      $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show();
     }else{
        console.log("Retornou os 3")
      $(".banner-ativo").removeClass().hide();
      $("#carrossel img:eq(0)").addClass("banner-ativo").show();
     }
  }

});
