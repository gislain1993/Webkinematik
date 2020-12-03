---
"layout": "page",
"lang": "de",
"title": "Einführung in die Interaktivität",
"subtitle": "Slider",
"uses": [ { "uri": "navigation.md" } ],
"date": "Oktober 2020",
"description": "Steuerung und Manipulation von Animationen und Grafiken im Webbrowser",
"tags": ["Web","Animation","Interaktivität","Grundlagen","JavaScript","HTML","Input","Programmierung","g2","Canvas"],
"math": true
---

<aside style="min-width:45%">
<iframe width=100% height=450 frameborder='no' src='https://goessner.github.io/webkinematik/Interaktivitaet/5 Kurbel - 2 slider.html'></iframe>
</aside>

## 5.6 Slider - Teil 2

Auch wenn wir unser Animationsbeispiel bereits um einige Steuerelemente erweitert haben, bleibt es doch eine Animation. Um vollständige Interaktivität zu erreichen koppeln wir nun `phi` mit einem Slider. Zuerst entfernen wir, bis auf den Slider für `l`, alles wieder was wir in diesem Kapitel hinzugefügt haben (oder laden die folgende Vorlage runter).

<br><br><br><br><br><br><br><br><br>

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
    <label for="lslider">l:
    <input type="range" id="lslider" style="width:240px;vertical-align:middle;padding:0" min="20" max="150" value="100">
    <output id="lout" for="lslider" >100</output>mm
    </label>
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>    
    <script>
 
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    lslider = document.getElementById('lslider'),
    lout = document.getElementById('lout'),    
    pi = Math.PI,
    l = 100,  // Laenge der Kurbel
    phi = 0, // Laufvariable
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*mec.ephi.x, y:l*mec.ephi.y}; }
    },  
    kurbel = g2(),  // definiert Kurbel als g2() Objekt
    // baut und initialisiert statische Umgebung
    world = g2().clr().view({x:150,y:150,cartesian:true})
                .use({grp:kurbel})
                .nodfix()
    ;
 
function position() {
    // baut dynamische Kurbel auf
    kurbel.del()
          .lin({x1:0, y1:0, x2:mec.A.x, y2:mec.A.y, lw:3})
          .nod(mec.A);
}        
 
function render() {
    position();  // aktualisiere Position
    world.exe(ctx);  // rendert world in den Context
    requestAnimationFrame(render);  // asynchroner callback von render(), keine Rekursion!
}
 
function setl() {
    l = lslider.value;
    lout.innerHTML = lslider.value;
}
 
/*
 *  Initialisierung
 */
 
// Eventlistener hinzufuegen
lslider.addEventListener("input",setl);  // bei hohem Rechenaufwand ist "change" sinnvoller
// Animation starten
render();
 
    </script>
</body>
</html>
```

Wir fügen im HTML-Teil einen In- und Output für `phi` von 0 bis 360° hinzu:

```HTML
<br>
<label for="phislider">&varphi;:
<input type="range" id="phislider" style="width:240px;vertical-align:middle;padding:0" min="0" max="360" value="0">
<output id="phiout" for="phislider">0</output>°
</label>
```

In Zeile 3 des obigen Code-Schnipsels steht `&phi;`. Es handelt sich hierbei um Unicode bzw. den entsprechenden HTML Namen. Weitere nützliche Unicode Zeichen findet man z.B. [hier](https://unicode-table.com/de/).

Nachdem wieder Abkürzungen für in- und Output

`phislider = document.getElementById('phislider')`<br>
`phiout = document.getElementById('phiout')`

angelegt, ein Eventlistener hinzugefügt

`phislider.addEventListener("input",setPhi)`

und die Listener-Funktion erstellt wurde,

```JavaScript
function setPhi() {
    phi = phislider.value*pi/180;
    phiout.innerHTML = phislider.value;
}
```

ist das Beispiel im Grunde fertig und funktioniert.

### 5.6.1 dirty flags

Dennoch soll an dieser Stelle das Konzept sogenannter "dirty flags" eingeführt werden.

Wenn man interaktive Webkinematik betreibt, nutz man dazu meistens `requestAnimationFrame(callback)`. Da der Callback bei modernen Systemen ununterbrochen mindestens alle 16,67ms erfolgt, werden auch alle Berechnungen innerhalb der Callback-Funktion jedes Mal erneut ausgeführt.<br>
Wenn nun aber wie bei uns ein statischer Mechanismus vorliegt — solange man den entsprechenden Schieberegler nicht bewegt — wird unnötigerweise immer wieder dasselbe berechnet. Somit wäre es aus Performancegründen sicherlich wünschenswert, wenn Berechnungen nur stattfinden nachdem Änderungen eingetreten sind.

Zudem können auch viele Inputs oder tief verschachtelte Getter sehr an der Performance zehren. Man möchte nicht immer sofort alles aktualisieren, wenn man nur eine Kleinigkeit ändert. Dazu kann man sein mechanisches System oder auch sein Canvas in mehrere Bereiche/Schichten einteilen und mittels Booleans nur den Bereich aktualisieren der eine Änderung erfahren hat. Dazu fügen nun zuerst in den Script Variablen mit

`dirty = true`

den erwähnten Boolean hinzu. Wenn dieser `true` ist, gibt es eine Abweichung von Soll Zustand und es muss etwas aktualisiert werden. Da das beim initialen Laden der Seite auf jeden Fall so ist, initialisieren wir `dirty` entsprechend.

Anschließend ändern wir jede unsere Listener-Funktionen dahingehend, dass in ihnen `dirty` auf `true` gesetzt wird, denn hier finden ja die Änderungen statt, die Aktualisierungen erforderlich machen.

`setPhi()` sieht nun folgendermaßen aus:

```JavaScript
function setPhi() {
    if (phislider.value != phiout.value) {
        phi = phislider.value*pi/180;
        phiout.innerHTML = phislider.value;
        dirty = true;
    }
}
```

und `setl()` dementsprechend so:

```JavaScript
function setl() {
    if (lslider.value != lout.value) {
        l = lslider.value;
        lout.innerHTML = lslider.value;
        dirty = true;
    }
}
```

Stellt man `dirty` in `setl()` auf `false`, wird die Kurbellänge, trotz Input-Event, erst aktualisiert sobald man den &varphi;-Slider bewegt.

In beiden Funktionen wird am Anfang geprüft ob es eine Abweichung zwischen Input und Output gibt. Wenn das so ist, wird die Änderung der Werte vorgenommen und anschließend `dirty` auf `true` gesetzt.

Die Abfrage von `dirty` geschieht dann in der `render()` Funktion die jetzt so aussieht:

```JavaScript
function render() {
    if (dirty) {
        position();  // aktualisiere Position
        world.exe(ctx);  // rendert world in den Context
        dirty = false;
    }
    requestAnimationFrame(render);  // asynchroner callback von render(), keine Rekursion!
}
```

Wenn `dirty` hier `true` ist, gibt es etwas zu aktualisieren. Es werden die entsprechenden Funktionen aufgerufen und anschließend mit der Zuweisung `dirty = false` vermerkt, dass im nächsten Durchgang nichts aktualisiert werden muss; d.h. so lange es keine erneuten Änderungen gibt. `requestAnimationFrame(render)` steht außerhalb der Bedingung, da diese Zeile ja die "Animation" bzw. App am Laufen hält.

### 5.6.1 Ergebnis

Das fertige HTML-Dokument sollte nun folgendermaßen aussehen:

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
    <label for="phislider">&phi;:
    <input type="range" id="phislider" style="width:240px;vertical-align:middle;padding:0" min="0" max="360" value="0">
    <output id="phiout" for="phislider">0</output>°
    </label>
    <br>
    <label for="lslider">l:
    <input type="range" id="lslider" style="width:240px;vertical-align:middle;padding:0" min="20" max="150" value="100">
    <output id="lout" for="lslider">100</output>mm
    </label>
 
    <script src="https://gitcdn.xyz/repo/goessner/g2/master/src/g2.js"></script>
 
 
    <script>
let cnv = document.getElementById('c'),
    ctx = cnv.getContext('2d'),
    phislider = document.getElementById('phislider'),
    phiout = document.getElementById('phiout'),
    lslider = document.getElementById('lslider'),
    lout = document.getElementById('lout'),
    pi = Math.PI,
    l = 100,  // Laenge der Kurbel
    phi = 0, // Laufvariable
    mec = {
        get ephi() { return {x:Math.cos(phi), y:Math.sin(phi)}; },
        get A() { return {x:l*mec.ephi.x, y:l*mec.ephi.y}; }
    },
    kurbel = g2(),  // definiert Kurbel als g2() Objekt
    // baut und initialisiert statische Umgebung
    world = g2().clr().view({x:150,y:150,cartesian:true})
                .use({grp:kurbel})
                .nodfix(),
    dirty = true  // wenn true gibt es was zu aktualisieren
    ;
 
function position() {
    // baut dynamische Kurbel auf
    kurbel.del()
          .lin({x1:0, y1:0, x2:mec.A.x, y2:mec.A.y, lw:3})
          .nod(mec.A);
}
 
function render() {
    if (dirty) {
        position();  // aktualisiere Position
        world.exe(ctx);  // rendert world in den Context
        dirty = false;
    }
    requestAnimationFrame(render);  // asynchroner callback von render(), keine Rekursion!
}
 
function setPhi() {
    if (phislider.value != phiout.value) {
        phi = phislider.value*pi/180;
        phiout.innerHTML = phislider.value;
        dirty = true;
    }
}
 
function setl() {
    if (lslider.value != lout.value) {
        l = lslider.value;
        lout.innerHTML = lslider.value;
        dirty = true;
    }
}
 
/*
 *  Initialisierung
 */
 
// Eventlistener hinzufuegen
phislider.addEventListener("input",setPhi);
lslider.addEventListener("input",setl);  // bei hohem Rechenaufwand ist "change" sinnvoller
// Animation starten
render();
    </script>
</body>
</html>
```