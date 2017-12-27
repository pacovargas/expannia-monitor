var cont = 0;
var name = "";

function display(str){
    var contenido = $("#display").html();
    $("#display").html(str + "<br />" + contenido);
}

function updatePosition(lat, lng){
    if(name != ""){
        $.ajax({
            url: 'http://geosearch.sauz.es/server/updatereceiverposition/',
            type: 'POST',
            dataType: 'json',
            data: {
                name: name,
                lat: lat,
                lng: lng,
            },
        })
        .done(function(data) {
            if(data.success){
                display("Position updated");
            }
            else{
                display("Error updating position");
            }
        });
    }
}

function updateVehicleLocation(qr_code, receiver_name){
    $.ajax({
        url: 'http://geosearch.sauz.es/server/updatevehiclelocation/',
        type: 'POST',
        dataType: 'json',
        data: {
            receiver_name: receiver_name,
            qr_code: qr_code,
        },
    })
    .done(function(data) {
        if(data.success){
            display("Location updated");
        }
        else{
            display("Error updating location");
        }
    });
}

function lanzaMonitor(){
    display("device ready");

    window.plugins.insomnia.keepAwake();

    navigator.geolocation.watchPosition(
        function(position){
            display("New position: " + position.coords.latitude + " - " + position.coords.longitude);
            updatePosition(position.coords.latitude, position.coords.longitude);
        }
    );

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
            // display("start status: " + json.status);
            // display("start event: " + json.event);
            // display("start desc: " + json.desc);
            if(json.status == "OK" && json.event == "IBEACON"){
                if(cont < 1000)
                    cont = cont + 1;
                else
                    cont = 0;
                var distancia = parseInt(json.data["rssi"]) / parseInt(json.data["txpower"]);
                display(cont + " - BEACON: " + json.data["uuid"] + "-" + json.data["major"] + "-" + json.data["minor"] + "(rssi: " + json.data["rssi"] + ") (Distiancia: " + distancia);
                if(name != ""){
                    updateVehicleLocation(json.data["uuid"] + "-" + json.data["major"] + "-" + json.data["minor"], name);
                }
            }
        }
    );
}

document.addEventListener("deviceready", lanzaMonitor, false);

$(function(){
    $("#set-name").click(function(event) {
        name = prompt("name");
        $("#name-field").html(name);
    });
});