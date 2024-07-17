

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(res => console.log("Service worker registered"))
            .catch(err => console.log("Service worker not registered", err))
    });
}

function modeSwitch(event, mode) {
    console.log("Mode switch to " + mode);

    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tabcontent = document.getElementsByClassName("tab-content-footer");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tabcontent = document.getElementsByClassName(mode);
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
    }
}