window.onload = function(){

    document.getElementById("miBoton").addEventListener('click', function(){
        var newarticle = document.createElement("article");
        var divfecha = document.createElement("div");
        var divhora = document.createElement("div");
        //var divcuerpo = document.createElement("div");
        //var ptitulo = document-createElement("p");
        // var pdescripcion = document-createElement("p");
        // var pasistentes = document.createElement("p");

        //divcuerpo.appendChild(ptitulo);
        document.body.appendChild(newarticle);
        

        var divtextofecha = document.createTextNode("Viernes 12 - ENERO - 2022");
        divfecha.appendChild(divtextofecha);
        var divtextohora = document.createTextNode("22:00h");
        divhora.appendChild(divtextohora);
        
        divfecha.setAttribute
        
        
        //var ptextotitulo = document.createTextNode("Titulo evento 2");
        //ptitulo.appendChild(ptextotitulo);
        // var ptextodescripcion = document.createTextNode("Descripcion evento 2");
        // pdescripcion.appendChild(ptextodescripcion);
        // var ptextoasistentes = document.createTextNode("0 asistentes");
        // pasistentes.appendChild(ptextoasistentes);

        
        // divcuerpo.appendChild(pdescripcion);
        // divcuerpo.appendChild(pasistentes);

        newarticle.appendChild(divfecha);
        newarticle.appendChild(divhora);
        //newarticle.appendChild(divcuerpo);

        // body.appendChild(newarticle);

    });

}