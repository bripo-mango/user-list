function adddata(){

    var name = document.getElementById("name").value;
    var apellido = document.getElementById("apell").value;
    var documento = parseInt(document.getElementById("docu").value);
    var fecha = document.getElementById("date").value;
    var genero = document.getElementById("gender").value;
    var nacionalidad = document.getElementById("nacio").value;

    document.getElementById("tablebody").innerHTML += 
    "<tr> <td>"+name
    +"</td> <td>"+apellido
    +"</td> <td>"+documento
    +"</td> <td>"+fecha
    +"</td> <td>"+nacionalidad
    +" </td> <td>"+genero
    +" </td> <td> <i class='fa fa-trash'></i> </td> </tr>";


}