function loadDoc1() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function1(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function1(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Region</th><th>Total Winnings</th><th>Wins</th><th>Loses</th></tr>";

    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("region")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("total_winnings")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}
//------------------------------------------------------------------------------
function loadDoc2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function2(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function2(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Region</th></tr>";
    for (let i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("region")[0].childNodes[0].nodeValue == "Europe") {
            table += "<tr><td>" +
                x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("region")[0].childNodes[0].nodeValue + "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
}
//------------------------------------------------------------------------------
function loadDoc3() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function3(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function3(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Region</th></tr>";
    for (let i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("region")[0].childNodes[0].nodeValue == "USA") {
            table += "<tr><td>" +
                x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("region")[0].childNodes[0].nodeValue + "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
}
//------------------------------------------------------------------------------
function loadDoc4() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function4(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function4(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Region</th></tr>";
    for (let i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("region")[0].childNodes[0].nodeValue == "Asia") {
            table += "<tr><td>" +
                x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
                x[i].getElementsByTagName("region")[0].childNodes[0].nodeValue + "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
}
//------------------------------------------------------------------------------
function loadDoc5() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function5(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function5(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Wins</th></tr>";
    for (let i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue>=30){
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue + "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
    sortTableNumericallyDescending("demo",1);
}
//------------------------------------------------------------------------------
function loadDoc6() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function6(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function6(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Loses</th></tr>";
    for (let i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue<=20){
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue + "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
    sortTableNumerically("demo",1);
}
//------------------------------------------------------------------------------
function loadDoc7() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function7(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function7(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Total Winnings($)</th></tr>";
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("total_winnings")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
    sortTableNumericallyDescending("demo",1);
}
//------------------------------------------------------------------------------
function loadDoc8() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function8(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function8(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Wins</th><th>Loses</th></tr>";
    
    let MaxValue = 0;

    for (let i = 0; i < x.length; i++) {
      if (((x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue)/(x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue)) > MaxValue) {
        MaxValue = ((x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue)/(x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue));
      }
    }
    for (let i = 0; i < x.length; i++) {
        if(MaxValue == ((x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue)/(x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue))){
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue + "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
}
//------------------------------------------------------------------------------
function loadDoc9() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function9(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function9(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Wins</th><th>Loses</th></tr>";
    
    let MaxValue = 5000;

    for (let i = 0; i < x.length; i++) {
      if (((x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue)/(x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue)) < MaxValue) {
        MaxValue = ((x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue)/(x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue));
      }
    }
    for (let i = 0; i < x.length; i++) {
        if(MaxValue == ((x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue)/(x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue))){
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue + "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
}
//------------------------------------------------------------------------------
function loadDoc10() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        Function10(this);
    }
    xhttp.open("GET", "xml.xml");
    xhttp.send();
}
function Function10(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("team");
    let table = "<tr><th>Name</th><th>Games Played</th></tr>";
    
    let GamesPlayed = 0;
    let w=0;let l=0;
    for (let i = 0; i < x.length; i++) {
        w = parseInt((x[i].getElementsByTagName("wins")[0].childNodes[0].nodeValue));
        l = parseInt((x[i].getElementsByTagName("loses")[0].childNodes[0].nodeValue));
      if ((w + l) > GamesPlayed) {
        GamesPlayed = (w + l);
      }
      if(GamesPlayed = w+l){
        table += "<tr><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
            GamesPlayed + "</td></tr>";
        }
    }
    document.getElementById("demo").innerHTML = table;
    sortTableNumericallyDescending("demo",1);
}
//------------------------------------------------------------------------------
function sortTableNumerically(tableId, column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(tableId);
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = parseFloat(rows[i].getElementsByTagName("TD")[column].innerHTML);
        y = parseFloat(rows[i + 1].getElementsByTagName("TD")[column].innerHTML);
        if (x > y) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
//------------------------------------------------------------------------------
  function sortTableNumericallyDescending(tableId, column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(tableId);
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = parseFloat(rows[i].getElementsByTagName("TD")[column].innerHTML);
        y = parseFloat(rows[i + 1].getElementsByTagName("TD")[column].innerHTML);
        if (x < y) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
//------------------------------------------------------------------------------
function sortTable() {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("demo");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}