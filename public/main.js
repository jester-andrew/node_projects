function test() { console.log("connected"); }

function createRateRequest() {
    let service = document.getElementById('service').value;
    let weight = document.getElementById('weight').value;

    let qString = "math?service=" + service + "&weight=" + weight;
    let url = "http://localhost:5000/" + qString;

    console.log(url);
    getRquest(url);
}

function getRquest(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send();
}

function displayWeightLimits() {
    let option = document.getElementById("service").value;
    let weightField = document.getElementById('weight');
    console.log(option);
    let message = "";
    if (option == 1 || option == 2) {
        message = "Weight should not exceed 3.5oz";
        weightField.setAttribute("max", 3.5);
    } else {
        message = "Weight should not exceed 13oz";
        weightField.setAttribute("max", 13);
    }

    document.getElementById('message').innerHTML = message;
}