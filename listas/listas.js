var userList = [];//declaro el array

function adddata(){

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

    //3. escribo en el tableBody
    document.getElementById("tablebody").innerHTML += 
    "<tr> <td>"+nameFromHtml
    +"</td> <td>"+apellido
    +"</td> <td>"+documento
    +"</td> <td>"+fecha
    +"</td> <td>"+nacionalidad
    +" </td> <td>"+genero
    +" </td> <td> <i class='fa fa-trash'></i> </td> </tr>";

}


