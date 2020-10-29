---
"layout": "page",
"lang": "de",
"title": "Dokumentation von Webkinematik",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Notwendige Kentnisse zur Bearbeitung eines Projekts von Webkinematik",
"tags": ["mechanismentechnik","Bewegungs- und Kraftübertragung","g2"],
"math": true
---

#### Slider1/2

Das zweite Input-Element, das wir uns etwas genauer anschauen wollen, ist vom Typ `"range"`. Durch die Erstellung eines Range-Inputs erhalten wir einen Schieberegler (Slider) über den wir einen Wert auf einem beliebigen Intervall mit einem frei wählbaren Inkrement verstellen können.

Es soll nun in unserem Beispiel die Kurbellänge `l` über einen Slider verstellbar gestaltet werden.

<iframe width=100% height=560 frameborder='no' src='https://goessner.github.io/webkinematik/Interaktivitaet/4 Kurbel - ani slider.html'></iframe>

Input-Elemente vom Typ `"range"` besitzen vier spezielle optionale Attribute.

* `min`: Legt die untere Grenze des Sliders fest (standardmäßig = `0`)

* `max`: Legt die obere Grenze des Sliders fest (standardmäßig = `100`)

* `step`: Legt das Inkrement fest, mit dem der Sliderwert verstellt werden kann (standardmäßig 1). Meist werden Gleitkomma- oder Ganzzahlen verwendet, es kann allerdings auch `"any"` angegeben werden. Dann kann der Slider von Hand immer noch mit einem Inkrement von 1 verstellt werden, lässt aber auch Zwischenwerte zu die keine Ganzzahlen sind. Das ist zum Beispiel praktisch, wenn man Werte im Script berechnet die man nicht runden will bevor anschließend der entsprechende Zustand eingestellt wird.

* `value`: Ist der Wert auf den der Slider beim initialisieren gestellt wird. (standardmäßig `min + (max-min)/2`)

Wir fügen nun in unserem HTML-Dokument folgenden Code unter dem Label für die Drehrichtung hinzu:

```HTML
<br><br>
<label for="lslider">l:
<input type="range" id="lslider" style="width:240px;vertical-align:middle;padding:0" min="20" max="150" value="100">
<output id="lout" for="lslider" >100</output>mm
</label>
````

Dadurch wird ein Slider erstellt, der seinen Wert auf einem Bereich von 20 bis 150 in Schritten von 1 ändern kann. Beim initialisieren soll er den Wert 100 haben, weil dieser dem Wert vom l im Script entspricht. Über das Style-Attribut wurden hier zusätzlich noch Position und Breite angepasst.
Nach dem Anlegen von Abkürzungen für Slider und Output in den Script-Variablen,

`lslider = document.getElementById('lslider'),
lout = document.getElementById('lout')`

wird auf die inzwischen bekannte Weise ein Eventhandler hinzugefügt:

`lslider.addEventListener("input",setl);`

Bei Slidern ist es so, dass bei einem Input-Event die Listener-Funktion jedes Mal aufgerufen wird, wenn man den Slider auf seinem Verstellbereich bewegt. Das heißt, steht er initial auf 100 und der Benutzer klickt ihn an, zieht in nach 120 und lässt ihn dann los, wurde setl() 20 Mal aufgerufen. Benutzt man stattdessen ein Change-Event und führt die gleiche Bewegung aus, wird setl() nur einmal aufgerufen, beim loslassen des Sliders. Je mehr Berechnungen implizit an diesem Slider hängen desto schlechter wird die Performance der Web-App und so muss man abwägen ob man wirklich ein Input-Event benötigt. In diesem Beispiel stellt es jedoch kein Problem dar.


Nun kümmern wir uns um die noch fehlende Funktion `setl()`. Diese gestaltet sich wie folgt:

```HTML
function setl() {
        l = lslider.value;
        lout.innerHTML = lslider.value;
}
````

Der globalen Variable l wird der zu number konvertierte Wert des Sliders zugewiesen und anschließend wird auf dieselbe Weise der Text innerhalb des zugehörigen Outputs aktualisiert.

**Ergebnis:**

Das HTML-Dokument sollte nun folgendermaßen aussehen:

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Kurbel</title>
</head>
 
<body>
    <h2>Kurbel</h2>
    <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
    <br>
    <button id="b">Start/Stop</button>
    <br><br>
    <label for="speed">Geschwindigkeit:</label>
    <select id="speed">
        <option value="0.5">0,5x</option>
        <option value="1" selected>1x</option>
        <option value="2">2x</option>
        <option value="4">4x</option>
    </select>
    <br>
    <output id="Periodendauer" for="speed">T: 6s</output>
    <br><br>
    <input type="checkbox" id="direction" >
    <label for="direction"> Drehrichtung umkehren</label>
    <br><br>
    <label for="lslider">l:
    <input type="range" id="lslider" style="width:240px;vertical-align:middle;padding:0" min="20" max="150" value="100">
    <output id="lout" for="lslider" >100</output>mm
    </label>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
 
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    b = document.getElementById('b'),
    speed = document.getElementById('speed'),
    Periodendauer = document.getElementById('Periodendauer'),
    Drehrichtung = document.getElementById('direction'),
    lslider = document.getElementById('lslider'),
    lout = document.getElementById('lout'),
 
    pi = Math.PI,
    l = 100,  // Laenge der Kurbel
 
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*mec.ephi.x, y:l*mec.ephi.y}; }
    },
 
    Kurbel = g2(),  // definiert Kurbel als g2() Objekt
 
    // baut und initialisiert statische Umgebung
    world = g2().clr()
                .view({cartesian:true,x:150,y:150})
                .use({grp:Kurbel})
                .nodfix({x:0,y:0});
 
 
let phi = 0, // Laufvariable
    speedmod = 1,  // Faktor der die Geschwindigkeit modifiziert
    run = true;  // Boolean als Schalter um zu pruefen ob Animation laeuft
 
function position() {
    // baut dynamische Kurbel auf
    Kurbel.del()
          .lin({x1:0, y1:0, x2:mec.A.x, y2:mec.A.y, lw:3})
          .nod({...mec.A});
 
    // inkrementiert phi
    if (run) {
        if (Drehrichtung.checked) {
            phi -= speedmod*pi/180;
        } else {
            phi += speedmod*pi/180;
        }
    }
}
 
function render() {
    position();  // aktualisiere Position
    world.exe(ctx);  // rendert world in den Context
    requestAnimationFrame(render);  // asynchroner callback von render(), keine Rekursion!
}
 
// wechselt Status der Lauferlaubnis
function startstop() {
    if (run) {
        run = false;
    } else {
        run = true;
    }
}
 
function changeSpeed() {
    // weist dem speedmodifier den Wert der ausgewaehlten Option zu
    speedmod = speed.options[speed.selectedIndex].value;
    // aktualisiert den Output
    Periodendauer.innerHTML = "T: " + 6/speedmod + "s";
}
 
function setl() {
        l = +lslider.value;
        lout.innerHTML = lslider.value;
}
 
 
/*
 *  Initialisierung
 */
 
// Eventlistener hinzufuegen
b.addEventListener("click",startstop);
speed.addEventListener("change",changeSpeed);
lslider.addEventListener("input",setl);
 
// Animation starten
render();
 
    </script>
</body>
</html>
````
