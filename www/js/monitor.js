var cont = 0;
var name = "";

function display(str){
    var contenido = $("#display").html();
    $("#display").html(str + "<br />" + contenido);
}

function updatePosition(lat, lng){
    // display("updatePosition: " + lat + ":" + lng);
    if(name != ""){
        $.ajax({
            url: 'http://gpsti.sauz.es/server/updatereceiverposition/',
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

function updateVehicleLocation(qr_code, receiver_name, distance){
    $.ajax({
        url: 'http://gpsti.sauz.es/server/updatevehiclelocation/',
        type: 'POST',
        dataType: 'json',
        data: {
            receiver_name: receiver_name,
            qr_code: qr_code,
            distance: distance,
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
    // cordova.plugins.backgroundMode.enable();
    window.plugin.backgroundMode.enable();

    navigator.geolocation.watchPosition(
        function(position){
            display("New position: " + position.coords.latitude + ":" + position.coords.longitude);
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

    setTimeout(function(){
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
                        updateVehicleLocation(json.data["uuid"] + "-" + json.data["major"] + "-" + json.data["minor"], name, distancia);
                    }
                }
            }
        );
    }, 1);
    
}

document.addEventListener("deviceready", lanzaMonitor, false);

$(function(){
    if(window.localStorage.getItem("name_em") == null){
        name = "";
    }
    else{
        name = window.localStorage.getItem("name_em");
    }
    $("#name-field").html(name);

    $("#set-name").click(function(event) {
        var name_aux = prompt("name");
        if(name_aux == null) name = "";
        else name = name_aux;
        $("#name-field").html(name);
        window.localStorage.setItem("name_em", name);
    });
});