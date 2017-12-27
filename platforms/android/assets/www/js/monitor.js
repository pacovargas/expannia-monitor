var cont = 0;

function display(str){
    var contenido = $("#display").html();
    $("#display").html(str + "<br />" + contenido);
}

function lanzaMonitor(){
    console.log(cordova);
    console.log(cordova.plugins);
    display("device ready");
    
    cordova.plugins.simplexpbeacon.initialiseBluetooth(
        function(data) {
            var json = JSON.parse(data);
            display("initialise status: " + json.status);
            display("initialise desc: " + json.desc);
        }
    );

    cordova.plugins.simplexpbeacon.startMonitoring(
        function(data) {
            var json = JSON.parse(data);
            display("start status: " + json.status);
            display("start event: " + json.event);
            display("start desc: " + json.desc);
            if(json.status == "OK" && json.event == "IBEACON"){
                if(cont < 1000)
                    cont = cont + 1;
                else
                    cont = 0;
                display(cont + " - BEACON: " + json.data["uuid"]);
            }
        }
    );
}

document.addEventListener("deviceready", lanzaMonitor, false);