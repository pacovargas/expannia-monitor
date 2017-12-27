function display($str){
    $("#display").append($str + "<br />");
}

$(function(){
    console.log("probando funciones");
    display("Antes de las funciones");
    cordova.plugins.simplexpbeacon.initialiseBluetooth(
        function(data) {
            display("dentro de la funcion");
        }
    );
});