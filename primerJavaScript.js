function funcionAlerta(){
    alert("le pique al click");
}

function quitarSITEC(){
    let pregunta = confirm("¿Seguro de quitar SITEC?");
    if(pregunta == true){
        alert("SITEC borrado .... :(");
        let chi = document.getElementById("sitec");
        chi.innerHTML = "Shiiiiiaaaale";
    }
}

//alert("primer javaScript externo");