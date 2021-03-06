---
"layout": "page",
"lang": "de",
"title": "Einführung in die Interaktivität",
"subtitle": "Button",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Steuerung und Manipulation von Animationen und Grafiken im Webbrowser",
"tags": ["Web","Animation","Interaktivität","Grundlagen","JavaScript","HTML","Input","Programmierung","g2","Canvas"],
"math": true
---

## 5.1 Einführung in die Interaktivität

In diesem Kapitel erfolgt eine Einführung in die Steuerung und Manipulation von Animationen und Grafiken mittels [Input-](https://wiki.selfhtml.org/wiki/HTML/Formulare/input) und Steuerelementen. Das Prinzip dieser Interaktivität beruht auf Ereignissen die durch Eingreifen des Benutzers auftreten (Klick auf Button, Ändern eines Wertes) und von Eventhandlern (Eventlistener) erkannt und entsprechend der ihnen zugewiesenen Routine (Aufruf einer Funktion, Wechseln einer Attributeigenschaft) weiterverarbeitet werden.

Als Basis dient uns die Animation der *Kurbel mit beliebigem Inkrement* aus dem Kapitel 4 - g2 Animation. Dieses Beispiel wird auf den folgenden Seiten nach und nach um weitere Input-Elemente erweitert.

<aside style="min-width:45%">
<iframe width=100% height=420 frameborder='no' src='https://goessner.github.io/webkinematik/Interaktivitaet/1 Kurbel - button.html'></iframe>
</aside>

## 5.2 Button

Es soll, wie nebenstehend dargestellt, ein Button erstellt werden mit dem der Benutzer die Animation starten und stoppen kann.

Das [Button-Element](https://developer.mozilla.org/de/docs/Web/HTML/Element/button) wird durch einen öffnenden und einen schließenden Tag erstellt, zwischen denen die Beschriftung des Buttons eingefügt wird:

`<button>Beschriftung</button>`

Zudem sollte mindestens ein Id-Attribut vergeben werden um dem Button im Script Eventhandler hinzufügen zu können. Man kann dies zwar auch direkt im HTML-Teil erledigen, dann ist jedoch nur möglich maximal einen Eventhandler pro HTML-Element zu definieren.

Wir fügen nun das Button-Element (zusammen mit einem Umbruch `<br>`) unter dem Canvas-Element dem Quelltext hinzu:

```HTML
    ...
    <h2>Kurbel</h2>             
    <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
    <br>
    <button id="b">Start/Stop</button>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
    ...
```

Die Idee ist, `phi` nur dann zu inkrementieren, wenn eine Variable `run` auf `true` steht. Ein Klick auf den Button soll eine Funktion aufrufen, die den Wert von `run` zwischen `true` und `false` umschaltet.

Dazu müssen wir natürlich die Variable initialisieren, indem wir am Anfang des Scripts `run = true` hinzufügen. An die selbe Stelle kommt, wie schon beim Canvas, eine Abkürzung um das Button-Element über seine ID im Script ansprechen zu können:

`b = document.getElementById('b')`

Wie bereits erwähnt wird `phi` nur während `run = true` erhöht, weshalb wir innerhalb der `position()` Funktion, vor die Zeile in der Inkrementiert wird, die entsprechende Bedingung hinzufügen:

```JavaScript
function position() {
    // baut dynamische Kurbel auf
    kurbel.del()
          .lin({x1:0, y1:0, x2:mec.A.x, y2:mec.A.y, lw:3})
          .nod({...mec.A});
 
    // inkrementiert phi
    if (run) phi += pi/180; 
}
```

Jetzt kümmern wir uns um die Funktion `startstop()`, die den Wert der Variable `run` zwischen `true` und `false` wechselt. Da eine Variable vom Datentyp boolean nur diese zwei Zustände annehmen kann, lässt sich das ganze recht einfach durch eine `if-else` Verzweigung erledigen. Es wird geprüft ob `run` den Wert `true` hat, falls das so ist wird `run = false` zugewiesen. Falls `run` nicht `true` ist muss es `false` sein und es wird `true` zugewiesen:

```JavaScript
// wechselt Status der Lauferlaubnis
function startstop() {
    if (run) {
        run = false;
    } else {
        run = true;
    }
}
```

An dieser Stelle wird darauf hingewiesen, dass `if-else`-Konstrukte durch den sogenannten [ternären Operator](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) verkürzt werden können.

```JavaScript
if (Bedingung) {
   Anweisung1    
} else {         
   Anweisung2    
}                
```

lässt sich somit auch in der Form `Bedingung ? Anweisung1 : Anweisung2` schreiben. `Anweisung1` wird ausgeführt, wenn `Bedingung` dem bool'schen Wert `true` entspricht; `Anweisung2` entsprechend bei `Bedingung = false`. Damit lässt sich die `startstop()`-Funktion verkürzen zu:

```JavaScript
// wechselt Status der Lauferlaubnis
function startstop() {
    run ? false : true;
}
```

Noch kürzer und ohne Bedingung aber für Programmieranfänger vielleicht nicht so intuitiv lässt sich die Funktion `startstop()` auch so schreiben:

```JavaScript
function startstop() {
    run = !run;         
}
```                      

Dadurch wird der momentane Wert der Variable beim Aufrufen der Funktion negiert.

Zuletzt muss noch der Button mit der eben erstellten Funktion verknüpft werden. Dazu bindet man am Ende des Scripts einen Eventhandler an das Button-Element. Dies geschieht mittels folgender Syntax:

`Eventziel.addEventListener(Eventtyp, Listener[, optionale Parameter])`

Das Eventziel ist der Button selbst bzw. seine ID, die wir Dank der Abkürzung in unserem Beispiel über die Variable `b` erreichen. Der Eventtyp für den Button sollte ein Klickevent sein und wird als `string` definiert, also `"click"` (direkt als HTML-Attribut würde man `onclick` definieren).

Der Listener ist die Routine die ausgeführt werden soll, wenn der definierte Eventtyp eintritt. Hier soll die Funktion `startstop()` aufgerufen werden, also trägt man `startstop` (im Gegensatz zur Definition im HTML-Tag ohne Klammern) ein. Wer sich für die optionalen Parameter interessiert, der möge sich im [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) umschauen. Der Vorteil dieser Methode gegenüber dem Hinzufügen im HTML-Tag oder auch mittels Punktoperator (`b.onclick = startstop()`) besteht darin, dass es so möglich ist mehrere Eventhandler an ein HTML-Element zu binden.

Für unser Beispiel sieht das ganze nun so aus:

```JavaScript
// Eventlistener hinzufuegen
b.addEventListener("click", startstop);
```
### 5.2.1 Ergebnis:

Der fertige Quellcode sollte nun folgendermaßen aussehen:

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
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
    <script>
const cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    b = document.getElementById('b'),
    pi = Math.PI,
    l = 100,  // Länge der Kurbel
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*mec.ephi.x, y:l*mec.ephi.y}; }
    },
    kurbel = g2(),  // definiert Kurbel als g2() Objekt
    // baut und initialisiert statische Umgebung
    world = g2().clr()
                .view({cartesian:true,x:150,y:150})
                .use({grp:kurbel})
                .nodfix({x:0,y:0});
 
let phi = 0, // Laufvariable
    run = true;  // Boolean als Schalter um zu prüfen ob Animation läuft
 
function position() {
    // baut dynamische Kurbel auf
    kurbel.del()
          .lin({x1:0, y1:0, x2:mec.A.x, y2:mec.A.y, lw:3})
          .nod({...mec.A});
    // inkrementiert phi
    if (run) phi += pi/180;
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
 
/*
 *  Initialisierung
 */
 
// Eventlistener hinzufügen
b.addEventListener("click",startstop);
// Animation anstoßen
render();
    </script>
</body>
</html>
```