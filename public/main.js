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