//PRINCIPIO API-JS FORMULARIO DE CREACIÓN DE EVENTOS

window.onload = () => {

    // axios.post('http://163.172.135.235:3000/api/v1/users/login', {
    //     email: email,
    //     password: password,
    // })
    //     .then(function (res) {
    //         console.log(res.data);
    //         if (res.status == 200) {
    //             mensaje.innerHTML = 'Has logeado correctamente, el token ha sido guardado en memoria.';
    //             localStorage.setItem('token', res.data.token);
    //         }
    //     })

    //     var loading = document.getElementById('loading');
    var boton = document.getElementById('creacioneventosform');

    boton.addEventListener('submit', function (e) {
        e.preventDefault();

        var fecha = document.getElementById('fecha').value;
        var nombre = document.getElementById('nombredelevento').value;
        var descripcion = document.getElementById('descripcion').value;
        var tipoEvento = document.getElementById("eventopresencial").checked;
        var foto = document.getElementById('fileinput').value;
        var eventoCreado = document.getElementById('peventocreado');

        if (localStorage.getItem('token') != null) {
            var token = localStorage.getItem('token');
        } else {
            var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGFhYzc4NzU2ZmNmYzFiZGQ5YWE2OWEiLCJlbWFpbCI6InBhY29AcGFjby5lcyIsImlhdCI6MTYyMTg4MzgxNiwiZXhwIjoxNjIxOTU1ODE2fQ.b-llibgs0br0YhZHq7nxoSwnisrfDmeFlCKJNoJe060';
        }

        //loading.style.display = 'block';
        axios.post('http://163.172.135.235:3000/api/v1/events', {

            date: fecha,
            name: nombre,
            description: descripcion,
            type: tipoEvento,
            photo: foto

        }, {
            headers: {
                token: token
            }
        })
            .then(function (respuesta) {
                console.log(respuesta);
                console.log(respuesta.data);
                if (res.status == 201) {
                    eventoCreado.innerHTML = 'El nuevo evento ha sido almacenado con id: ' + res.data._id;
                }
            })
            .catch(function (err) {
                console.log(err);
            })
            .then(function () {
                //loading.style.display = 'none';
            });
    });
}

//FIN API-JS FORMULARIO DE CREACIÓN DE EVENTOS