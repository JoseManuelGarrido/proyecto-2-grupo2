//PRINCIPIO JS FORMULARIO DE CREACIÓN DE EVENTOS

function previewImage(nb) {
    console.log(nb);
    console.log(2)
    const reader = new FileReader();
    reader.readAsDataURL(document.getElementById('fileinput').files[0]);
    reader.onload = function (e) {
        document.getElementById('Previewimg').src = e.target.result;
        
    };
}

//FIN JS FORMULARIO DE CREACIÓN DE EVENTOS