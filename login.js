window.onload = () => {
    //var loading = document.getElementById('loading');
    //var mensaje = document.getElementById('mensaje');
    var form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
        //loading.style.display = 'block';

        e.preventDefault();

        login();
        
    });    
}


function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    axios.post('http://192.168.1.217:3000/api/v1/users/login', {

            email: email,
            password: password,
        })
        .then(function(respuesta) {
            console.log(respuesta.data);
            if (respuesta.status == 200) {
                console.log("Login Correct");
                mensaje.innerHTML = 'Has logeado correctamente, el token ha sido guardado en memoria.';
                localStorage.setItem('token', res.data.token);
            }
        })
        .catch(function(err) {
            console.log(err);
        })
        .then(function() {
            loading.style.display = 'none';
        });
}