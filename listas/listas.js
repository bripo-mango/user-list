var userList = [];//declaro el array

function adddata() {

    //1. tomo los datos del formulario
    var nameFromHtml = document.getElementById("name").value;
    var apellido = document.getElementById("apell").value;
    var documento = parseInt(document.getElementById("docu").value);
    var fecha = document.getElementById("date").value;
    var genero = document.getElementById("gender").value;
    var nacionalidad = document.getElementById("nacio").value;

    //2. creo un objeto con los datos tomados previamente y agregar a la lista

    var obj = {
        name: nameFromHtml,
        lastname: apellido,
        id: documento,
        date: fecha,
        gender: genero,
        country: nacionalidad
    };

    userList.push(obj);

    updateList();
}

function deleteUser(userId) {
    //busca al usuario dentro de la lista por id y lo borra
    //para borrar un elemento del array usar la funcion splice
    //como splice pide un indice del array primero tenemos que obtenerlo
    let index;

    for (index = 0; index < userList.length; index++) {
        if (userList[index].id == userId) {
            //lo encontro, me quedo con el indice, freno
            break;
        }
    }

    userList.splice(index, 1);

    updateList();

}

function updateList() {
    //1. VACIO LA TABLA

    document.getElementById("tablebody").innerHTML = "";

    //2. recorro la lista y voy escribiendo tr

    userList.forEach(function (user) {
        document.getElementById("tablebody").innerHTML +=
            "<tr> <td>" + user.name
            + "</td> <td>" + user.lastname
            + "</td> <td>" + user.id
            + "</td> <td>" + user.date
            + "</td> <td>" + user.country
            + " </td> <td>" + user.gender
            + " </td> <td> <a onclick = 'deleteUser(" + user.id + ")'> <i class='fa fa-trash'></i> </a> </td> </tr>";
    });



}
