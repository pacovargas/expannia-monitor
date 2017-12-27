function display($str){
    $("#display").append($str + "<br />");
}

function lanzaMonitor(){
    console.log(cordova);
    console.log(cordova.plugins);
    display("device ready");
    cordova.plugins.simplexpbeacon.startMonitoring(
        function(data) {
            var json = JSON.parse(data);
            display(json.status);
        }
    );
}

document.addEventListener("deviceready", lanzaMonitor, false);