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

#### Dropdown Menü

Als nächstes soll in unserem Beispiel eine Möglichkeit implementiert werden um die Winkelgeschwindigkeit zu ändern. Dies werden wir mittels eines Dropdown Menüs realisieren.

<iframe width=100% height=470 frameborder='no' src='https://goessner.github.io/webkinematik/Interaktivitaet/2 Kurbel - dropdown.html'></iframe>

Die Idee ist, die bisherige Winkelgeschwindigkeit als Standard zu definieren und einen Multiplikator einzuführen um sie zu skalieren. Gleichzeitig soll die neue Periodendauer berechnet und ausgegeben werden.
Dropdown Menüs bzw. Auswahllisten erstellt man in HTML über das <select> Element. Select-Elemente haben ein paar interessante optionale Parameter. Der Parameter multiple sorgt dafür, dass mehrere Optionen in der Liste gleichzeitig ausgewählt werden können und size definiert wie viele Elemente der Auswahlliste gleichzeitig sichtbar sein sollen. Gibt man keine optionalen Parameter an erhält man statt einer scrollbaren Liste, ein Auswahlmenü, dass beim Klick darauf expandiert und seine Werte zur Auswahl zur Verfügung stellt.

Die einzelnen Werte des Select-Elements fügt man diesem über <option> Tags hinzu. Diese erhalten in unserem Beispiel nur einen value Parameter, welcher dem Geschwindigkeitsmultiplikator entspricht. Eine dieser Options bekommt zusätzlich noch einen selected Parameter da standardmäßig das 1x-Fache der definierten Winkelgeschwindigkeit eingestellt sein soll. Wer mehr über select und option erfahren möchte findet unter den Links weiterführende Informationen.

Wir fügen nun folgenden Code unter den <button> Tag des Beispiels mit Start/Stop-Funktion hinzu:

```HTML
<br><br>
<label for="speed">Geschwindigkeit:</label>
<select id="speed">
    <option value="0.5">0,5x</option>
    <option value="1" selected>1x</option>
    <option value="2">2x</option>
    <option value="4">4x</option>
</select>
````
Wir haben nun also die Möglichkeit zwischen der 0,5-, 1-, 2- und 4-Fachen Standardwinkelgeschwindigkeit zu wählen. Es passiert allerdings noch nichts, weil das ganze ja über JavaScript verarbeitet werden muss. Darum kümmern wir uns jetzt.
Zuerst benötigen wir eine Variable in die die ausgewählte Select-Option geschrieben werden soll. Wir nennen diese `speedmod` und initialisieren sie bei den globalen Variablen auf `1`. Die Skalierung der Winkelgeschwindigkeit erfolgt über die Skalierung des Inkrements. Wir ändern also die entsprechende Zeile in der `position()` Funktion zu:

```HTML
...
// inkrementiert phi
phi += speedmod*pi/180;
...
````
Wie bereits beim Button fügen wir auch hier auf dieselbe Weise einen Eventlistener hinzu. Der einzige Unterschied ist, dass die hier definierte Funktion erst dann aufgerufen werden soll wenn eine Änderung eintritt. Dazu benutzen wir das Change-Event. Es wird nun also wieder eine Abkürzung zum entsprechendem HTML-Element in den globalen Variablen angelegt

`speed = document.getElementById('speed')`

und anschließend am Ende des Scripts ein Eventhandler an dieses gebunden, der bei Änderung des Wertes die (noch zu erstellende) Funktion `changeSpeed()` aufruft:
`speed.addEventListener("change",changeSpeed);`

Als nächstes erstellen wir die Funktion changeSpeed(), die folgendermaßen aussieht:

```HTML
function changeSpeed() {
    // weist dem speedmodifier den Wert der ausgewaehlten Option zu
    speedmod = +speed.options[speed.selectedIndex].value;
}
````

`speed` ist das Select-Element. Dieses enthält als Child ein Array `options` welches wiederum alle unserer erstellten Option-Elemente enthält. `speed.selectedIndex` gibt den Index des ersten (bei Auswahllisten können mehrere Werte gewählt werden) ausgewählten Option-Elements aus dem options-Array zurück. An den eigentlichen Wert gelangt man dann durch das Anhängen von `.value`. Weil das Value allerdings ein `string` ist,  schreiben wir noch ein `+` vor den Wert um ihn in einen number Typ zu wandeln bevor er der Variable `speedmod` zugewiesen wird.
Weitere nützliche Properties und Methoden des Select-Elementes können [hier](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement) nachgelesen werden.
Das Ändern der Geschwindigkeit funktioniert jetzt, es fehlt allerdings noch die gewünschte Ausgabe und Aktualisierung der Umlaufdauer.
Dazu fügen wir ein Output-Element unter dem Select hinzu, das den String `T: 6s` (dies entspricht der Dauer eines Umlaufs bei Standardwinkelgeschwindigkeit) enthält:
```HTML
<br>
<output id="Periodendauer" for="speed">T: 6s</output>
````
Der Inhalt dieses Outputs soll nun jedes Mal aktualisiert werden, wenn der Wert von `speedmod` sich ändert. Das geschieht immer dann, wenn das Change-Event des speed-Listeners feuert. Wir können also die Änderung des Outputs in der `changeSpeed()` Funktion vornehmen.

Dazu legen wir über die Id wieder eine Abkürzung zum Element an:

Periodendauer = document.getElementById('Periodendauer')

und fügen in `changeSpeed()` folgenden Code hinzu:
```HTML
// aktualisiert den Output
Periodendauer.innerHTML = "T: " + 6/speedmod + "s";
````

Wir ändern damit den Wert des `innerHTML`, also das was zwischen dem öffnenden und schließenden Tag des Outputs steht zu `"T: " + 6/speedmod + "s"`. Dies ist eine Verkettung (durch +) von strings und einem `number` Typ, welcher der aktuellen Umlaufdauer in Abhängigkeit des Multiplikators `speedmod` entspricht.

**Ergebnis:**

Der Quellcode sollte nun folgendermaßen aussehen:

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
 
 
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
 
const cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    b = document.getElementById('b'),
    speed = document.getElementById('speed'),
    Periodendauer = document.getElementById('Periodendauer'),
 
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
    run = true  // Boolean als Schalter um zu pruefen ob Animation laeuft
    ;
 
function position() {
    // baut dynamische Kurbel auf
    Kurbel.del()
          .lin({x1:0, y1:0, x2:mec.A.x, y2:mec.A.y, lw:3})
          .nod({...mec.A});
 
    if (run) {
        // inkrementiert phi
        phi += speedmod*pi/180;
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
    speedmod = +speed.options[speed.selectedIndex].value;
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


