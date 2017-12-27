function display($str){
    $("#display").append($str + "<br />");
}

function lanzaMonitor(){
    console.log(cordova);
    console.log(cordova.plugins);
    display("device ready");
    cordova.plugins.simplexpbeacon.startMonitoring(
        function(data) {
            display("dentro de la funcion");
        }
    );
}

document.addEventListener("deviceready", lanzaMonitor, false);

// $(function(){
//     console.log("probando funciones");
//     display("Antes de las funciones");
//     lanzaMonitor();
//     cordova.plugins.simplexpbeacon.initialiseBluetooth(
//         function(data) {
//             display("dentro de la funcion");
//         }
//     );
// });