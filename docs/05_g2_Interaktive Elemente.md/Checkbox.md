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

#### Checkbox

Das nächste Element um das wir uns kümmern ist `<input>`. Input-Elemente sind sehr vielseitig und ändern Ihre Gestalt, je nachdem als welcher Typ sie deklariert werden. Da wir in diesem Kurs nicht alle möglichen Typen abdecken können, beschränken uns hier auf `checkbox` und `range`. Zur Übersicht über die restlichen Typen sei jedem z.B. ein Blick ins [MDN](https://developer.mozilla.org/de/docs/Web/HTML/Element/Input) oder ein Besuch von [selfHTML](https://wiki.selfhtml.org/wiki/HTML/Formulare/input) empfohlen.
Es soll nun eine Möglichkeit hinzugefügt werden, die Drehrichtung der Kurbel durch eine Checkbox umzukehren.

<iframe width=100% height=520 frameborder='no' src='https://goessner.github.io/webkinematik/Interaktivitaet/3 Kurbel - checkbox.html'></iframe>

Wir fügen im HTML-Teil den Input, mit einem zugehörigen Label, direkt unter dem Output für die Periodendauer hinzu:

```HTML
<br><br>
<input type="checkbox" id="direction">
<label for="direction"> Drehrichtung umkehren</label>
````

Checkboxen haben zwei spezielle optionale Attribute, `checked` und `value`. `checked` ist von Typ `boolean` und standardmäßig (auch wenn nicht explizit deklariert) `false`. Wie der Name schon sagt, gibt es an ob die Box aktiviert (abgehakt) ist oder nicht. Durch `value` kann die Checkbox einen Wert übertragen, standardmäßig ist dieser `"on"`.
Um nun die Drehrichtung umzukehren brauchen eigentlich nicht einmal eine Variable deklarieren. Dennoch legen wir zur Übersichtlichkeit wieder die gewohnte Abkürzung zum HTML-Element an:

`Drehrichtung = document.getElementById('direction')`

Wir prüfen dann in der `position()` Funktion welchen Wert das `checked` Attribut der Checkbox hat. Falls die Checkbox abgehakt ist soll die Kurbel mathematisch negativ, also im Uhrzeigersinn, laufen. `checked` ist dann `true` und das Inkrement wird durch Subtraktion von diesem zu einem Dekrement. Ist `checked = false` bleibt alles wie gehabt.

Die neue `position()` Funktion sollte so aussehen:

```HTML
function position() {
    // baut dynamische Kurbel auf
    Kurbel.del()
          .lin(0, 0, mec.A.x, mec.A.y, {lw:3})
          .use("nod", mec.A);
 
    // inkrementiert phi 
    if (run) {
        if (Drehrichtung.checked) {
            phi -= speedmod*pi/180;
        } else {
            phi += speedmod*pi/180; 
        }
    }
}
````

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
    <input type="checkbox" id="direction">
    <label for="direction"> Drehrichtung umkehren</label>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
    <script>
 
const cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    b = document.getElementById('b'),
    speed = document.getElementById('speed'),
    Periodendauer = document.getElementById('Periodendauer'),
    Drehrichtung = document.getElementById('direction'),
 
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
 
 
/*
 *  Initialisierung
 */
 
// Eventlistener hinzufuegen
b.addEventListener("click",startstop);
speed.addEventListener("change",changeSpeed);
 
// Animation starten
render();
 
    </script>
</body>
</html>
````

