---
"layout": "page",
"lang": "de",
"title": "Einführung in die Interaktivität",
"subtitle": "GUI Bibliotheken",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Steuerung und Manipulation von Animationen und Grafiken im Webbrowser",
"tags": ["Web","Animation","Interaktivität","Grundlagen","JavaScript","HTML","Input","Programmierung","g2","Canvas"],
"math": true
---

## 5.7 GUI Bibliotheken

Das Erstellen und Handling von Steuerelementen mittels HTML Tags und Eventlistenern, wie es auf den vorangegangenen Seiten gezeigt wurde, ist zwar zielführend und schränkt den Entwickler programmatisch nicht ein, kann dafür aber sehr schnell aufwändig und unübersichtlich werden.<br>
Die modernere Methode Webapps mit GUI zu entwickeln sind Frontendframeworks, wie z.B. Facebooks [React.js](https://reactjs.org) oder die Open Source Alternative [Vue.js](https://vuejs.org). Diese setzen auf ein virtuelles DOM, d.h. im `body` steht meist nur noch ein Tag `<div id=‘app‘></div>`, in den die restliche App via JavaScript injiziert und gehandled wird. Für Microapps wie die im Rahmen dieses Kurses behandelten, wäre die Nutzung solcher Frameworks aber wie mit Kanonen auf Spatzen zu schießen. Stattdessen bieten sich minimalistische GUI Bibliotheken an, die lediglich die Ein- und Ausgabeelemente vom HTML entkoppeln.<br>
Besonders empfehlenswert sind dabei [dat.GUI](http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) von Google und [QuickSettings.js](https://github.com/bit101/quicksettings) von Keith Peters. Da QuickSettings, der Meinung des Autors dieses Kurses nach, die mächtigere Variante ist, beschränken wir uns darauf.

> Keith Peters betreibt übrigens einen interessanten [Youtube Kanal](https://www.youtube.com/channel/UCF6F8LdCSWlRwQm_hfA2bcQ), wo er sich mit der Lösung mathematischer und physikalischen Problemen unter der Verwendung von Webtechnologien beschäftigt. Dort gibt es unter anderem auch ein kurzes [Tutorial](https://www.youtube.com/watch?v=vpSy9f-hKhQ) zu QuickSettings falls jemand lieber ein Video schaut statt zu lesen.

Als Beispiel sollen die Ein- und Ausgabeelemente für die App aus dem ersten Teil des Kapitel Slider mit QuickSettings erstellt werden.

<iframe width=100% height=350 frameborder='no' src='https://goessner.github.io/webkinematik/Interaktivitaet/6 Kurbel - qsmin.html'></iframe>

Dazu können zuerst einmal sämtliche HTML-Elemente, bis auf das canvas, aus dem `body` entfernt werden da diese nicht mehr benötigt werden. Zudem fügen wir den CDN Link für QuickSettings ein, den wir auf dem Github Repository finden:

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Kurbel</title>
</head>
 
<body>
    <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/quicksettings@latest/quicksettings.min.js"></script>
 
    <script>
    ...
```

Die am Anfang des Appscripts auf Variablen gelegten HTML-Elemente (mit Ausnahme der beiden canvas-Variablen) werden ebenso nicht mehr benötigt, wie sämtliche Eventlistener von Schluss.

```JavaScript
const cnv = document.getElementById('c'),
      ctx = cnv.getContext('2d'),
      pi = Math.PI;
 
let l = 100,  // Laenge der Kurbel 
    phi = 0, // Laufvariable
    speedmod = 1,  // Faktor der die Geschwindigkeit modifiziert
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*mec.ephi.x, y:l*mec.ephi.y}; }
    },
    kurbel = g2(),  // definiert Kurbel als g2() Objekt
    // baut und initialisiert statische Umgebung
    world = g2().clr().view({x:150,y:150,cartesian:true})
                .use({grp:kurbel})
                .nodfix(),
    run = true  // Boolean als Schalter um zu pruefen ob Animation laeuft
    ...
```

Nachdem alles entfernt wurde, folgt nun eine neue Variable — hier `gui` genannt — der ein neues QuickSettings Steuerungspanel, mit der Methode `Quicksettings.create(x,y,Titel)`, zugewiesen wird. An dieses Panel können beliebige Steuerelemente durch Verkettung, wie von g2 gewohnt, angehangen werden.

```JavaScript
gui = QuickSettings.create(318, 8, 'Kurbel') // Initiale Position vom body margin: 8px, canvas + border 300 + 2px
                   .addButton('Start/Stop', startstop)
                   .addDropDown('Geschwindigkeit', [0.5,1,2,4], changeSpeed)
                   .addHTML('Periodendauer', `${6/speedmod}s`)
                   .addBoolean('Drehrichtung umkehren', false) // kein Callback notwendig weil im Animationscallback (render() -> positiom()) evaluiert
                   .addRange('l', 20, 150, 100, 1, setl)
    ;
    ...
```

Die meisten QuickSettings Methoden nehmen als Argumente einen Titel, der gebraucht wird um das entsprechende Element später zu finden (wie id bei HTML Tags), einen oder mehrere Werte, sowie einen Callback, der bei Interaktion ausgeführt wird und somit die Eventlistener ersetzt.

Die QuickSettings Methoden sollen hier nicht einzeln unter die Lupe genommen werden. Bitte werfen die dazu einen Blick in die [Dokumentation](https://github.com/bit101/quicksettings) und die [Masterdemo](http://bit101.github.io/quicksettings/demos/master_demo.html).

Darauf hingewiesen sei jedoch, dass der Ausdruck in Zeile 4 ein [Template-String](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings) ist. Diese Strings erlauben das Einbetten von Variablen, die auch ausgewertet werden wenn der String evaluiert wird und somit JavaScript Variablen in HTML ermöglichen. Variablen schreibt man dabei immer in die geschweiften Klammern denen ein Dollarzeichen voransteht `${Variable}`.<br>
An Werte aus den GUI-Elementen gelangt man Grundsätzlich mit der Methode gui.getValue(Elementtitel) (analog gibt es auch `gui.getValue(Elementtitel, Wert)`. Der Rückgabewert kann ein beliebiger Datentyp sein. Welcher ist immer in der Dokumentation nachzulesen oder durch loggen in er ein Konsole ersichtlich.<br>
Aus `position()` gibt es `Drehrichtung`.checked nicht mehr, den Wert der neuen Checkbox fragt man via `gui.getValue('Drehrichtung umkehren')` ab. Aus `changeSpeed()` und `setl()` werden:

```JavaScript
function changeSpeed() {
    // weist dem speedmodifier den Wert der ausgewaehlten Option zu
    speedmod = +gui.getValue('Geschwindigkeit').value;
    // aktualisiert den Output
    gui.setValue('Periodendauer', `${6/speedmod}s`);
}
 
function setl() {
    l = gui.getValue('l');
}
```

Das Dropdown Element gibt ein Objekt zurück, das Index und Wert der gewählten Option enthält.

`gui.getValue('Geschwindigkeit') // Object { index: 1, value: "1" }`

Der fertige Quelltext sieht dann so aus:

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Kurbel</title>
</head>
 
<body>
    <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/quicksettings@latest/quicksettings.min.js"></script>
 
    <script>
 
const cnv = document.getElementById('c'),
      ctx = cnv.getContext('2d'),
      pi = Math.PI;
 
let l = 100,  // Laenge der Kurbel 
    phi = 0, // Laufvariable
    speedmod = 1,  // Faktor der die Geschwindigkeit modifiziert
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*mec.ephi.x, y:l*mec.ephi.y}; }
    },
    kurbel = g2(),  // definiert Kurbel als g2() Objekt
    // baut und initialisiert statische Umgebung
    world = g2().clr().view({x:150,y:150,cartesian:true})
                .use({grp:kurbel})
                .nodfix(),
    run = true  // Boolean als Schalter um zu pruefen ob Animation laeuft
 
    gui = QuickSettings.create(318, 8, 'Kurbel') // Initiale Position vom body margin: 8px, canvas + border 300 + 2px
                       .addButton('Start/Stop', startstop)
                       .addDropDown('Geschwindigkeit', [0.5,1,2,4], changeSpeed)
                       .addHTML('Periodendauer', `${6/speedmod}s`)
                       .addBoolean('Drehrichtung umkehren', false) // kein Callback notwendig weil im Animationscallback (render() -> positiom()) evaluiert
                       .addRange('l', 20, 150, 100, 1, setl)
    ;
 
function position() {
    // baut dynamische Kurbel auf
    Kurbel.del()
          .lin({x1:0, y1:0, x2:mec.A.x, y2:mec.A.y, lw:3})
          .nod(mec.A);
 
    // inkrementiert phi
    if (run) {
        if (gui.getValue('Drehrichtung umkehren')) {
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
    run = !run;
}
 
function changeSpeed() {
    // weist dem speedmodifier den Wert der ausgewaehlten Option zu
    speedmod = +gui.getValue('Geschwindigkeit').value;
    // aktualisiert den Output
    gui.setValue('Periodendauer', `${6/speedmod}s`);
}
 
function setl() {
    l = gui.getValue('l');
}
 
/*
 *  Initialisierung
 */
gui.setValue('Geschwindigkeit', speedmod); // Initialwert der Variable im Dropdown setzen
// Animation starten
render();
    </script>
</body>
</html>
```

Noch effizienter ist es allerdings auf die externen Callbackfunktionen wie `changeSpeed()` zu verzichten und den Callback direkt im gui Objekt anonym als `function(value) { }` bzw. als Arrowfunktion `(value)=>{ }` zu deklarieren. Hier wird dann direkt der Wert des Elements übergeben und braucht nicht mehr mit `.getValue()` abgerufen werden.

Auf diese Art sieht der Quelltext des Beispiels folgendermaßen aus:

```HTML
<!doctype html>
<html>
<head>
    <meta charset='utf-8'>
    <title>Kurbel</title>
</head>
 
<body>
    <canvas id="c" width="300" height="300" style="border-width:1px;border-style:solid"></canvas>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/quicksettings@latest/quicksettings.min.js"></script>
 
    <script>
 
const cnv = document.getElementById('c'),
      ctx = cnv.getContext('2d'),
      pi = Math.PI;
 
let l = 100,  // Laenge der Kurbel 
    phi = 0, // Laufvariable
    speedmod = 1,  // Faktor der die Geschwindigkeit modifiziert 
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*mec.ephi.x, y:l*mec.ephi.y}; }
    },
    kurbel = g2(),  // definiert Kurbel als g2() Objekt
    // baut und initialisiert statische Umgebung
    world = g2().clr().view({x:150,y:150,cartesian:true})
                .use({grp:kurbel})
                .nodfix(),
    run = true  // Boolean als Schalter um zu pruefen ob Animation laeuft
 
    gui = QuickSettings.create(318, 8, 'Kurbel') // Initiale Position vom body margin: 8px, canvas + border 300 + 2px
             .addButton('Start/Stop', () => { run = !run; })
             .addDropDown('Geschwindigkeit', [0.5,1,2,4], (valueobject) => {
                speedmod = +valueobject.value;
                gui.setValue('Periodendauer', `${6/speedmod}s`); // nicht this.setValue() verwenden, weil this hier das window-Objekt ist und nicht gui
             })
             .addHTML('Periodendauer', `${6/speedmod}s`)
             .addBoolean('Drehrichtung umkehren', false) // kein Callback notwendig weil im Animationscallback (render() -> positiom()) evaluiert
             .addRange('l', 20, 150, 100, 1, (value) => { l = value; })
    ;
 
function position() {
    // baut dynamische Kurbel auf
    kurbel.del()
          .lin({x1:0, y1:0, x2:mec.A.x, y2:mec.A.y, lw:3})
          .nod(mec.A);
 
    // inkrementiert phi
    if (run) {
        if (gui.getValue('Drehrichtung umkehren')) {
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
 
/*
 *  Initialisierung
 */
gui.setValue('Geschwindigkeit', speedmod); // Initialwert der Variable im Dropdown setzen
 
// Animation starten
render();
    </script>
</body>
</html>
```