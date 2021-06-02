window.onload = function(){

    axios.get('http://192.168.1.217:3000/api/v1/events', {
                responseType: 'json'
            })
            .then(function(res) {
                if (res.status == 200) {
                    var todoList = document.getElementById('todo-list');
                    var arrayData = res.data.data;
                    todoList.innerHTML = '';
                    for (let i = 0; i < arrayData.length; i++) {
                        console.log(arrayData);
                        console.log(arrayData[i]);
                        console.log(i);
                        todoList.innerHTML += '<li><a id="enlace-listado" href="">' + 
                        '<article class="articulo-listado"><div id="caracteristicas-listado">' + 
                        '<img id="foto-listado" src=' + arrayData[i].photo + '><div id="texto-listado">' + 
                        '<p id="titulo-listado">' + arrayData[i].name + '</p>' + 
                        '<p id="hora-listado">Fecha del evento - ' + arrayData[i].date + '</p></div></div>' + 
                        '</article></a></li>'; 
                    }
                }
            })
            .catch(function(err) {
                console.log(err);
            });
            
}